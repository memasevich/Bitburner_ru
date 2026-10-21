# Boost material

## Множитель производства подразделения

У каждой отрасли свой набор коэффициентов boost materials. Например:

- Agriculture:
  - AI Cores: 0.3
  - Hardware: 0.2
  - Real Estate: 0.72
  - Robots: 0.3
- Chemical:
  - AI Cores: 0.2
  - Hardware: 0.2
  - Real Estate: 0.25
  - Robots: 0.25
- Tobacco:
  - AI Cores: 0.15
  - Hardware: 0.15
  - Real Estate: 0.15
  - Robots: 0.25

Множитель производства подразделения используется для расчёта [базового производства подразделения](./division-raw-production.md) в состоянии PRODUCTION. Он равен сумме `cityMult` всех складов, а `cityMult` рассчитывается по количеству каждого boost material и его коэффициенту.

Этот множитель называется `this.productionMult` в `Division.ts`.

```typescript
calculateProductionFactors(): void {
  let multSum = 0;
  for (const warehouse of getRecordValues(this.warehouses)) {
    const materials = warehouse.materials;

    const cityMult =
      Math.pow(0.002 * materials["Real Estate"].stored + 1, this.realEstateFactor) *
      Math.pow(0.002 * materials.Hardware.stored + 1, this.hardwareFactor) *
      Math.pow(0.002 * materials.Robots.stored + 1, this.robotFactor) *
      Math.pow(0.002 * materials["AI Cores"].stored + 1, this.aiCoreFactor);
    multSum += Math.pow(cityMult, 0.73);
  }

  multSum < 1 ? (this.productionMult = 1) : (this.productionMult = multSum);
}
```

Именно поэтому нужно расшириться во все 6 городов. Больше городов → выше `this.productionMult` → выше базовое производство → больше произведённых материалов/продуктов → выше прибыль с города → выше общая прибыль.

Расширение до 6 городов увеличивает `this.productionMult` в 6 раз. Поскольку городов 6, в итоге производство фактически увеличивается в 36 раз. Это не строго точная оценка: на базовое производство каждого города влияют и другие факторы, но x36 можно считать приблизительной оценкой выгоды, особенно на ранних раундах. На этих раундах множитель производства подразделения — самый важный фактор.

## Оптимизатор

Чтобы увеличить `this.productionMult`, нужно покупать boost materials. Вопрос в том, сколько покупать каждого материала при заданном ограничении на место склада.

У каждого boost material есть коэффициент (в исходном коде «factor») и базовый размер (размер, который занимает 1 единица на складе).

Определим:

- 4 коэффициента: ${c_{1}}$, ${c_{2}}$, ${c_{3}}$, ${c_{4}}$
- 4 базовых размера: ${s_{1}}$, ${s_{2}}$, ${s_{3}}$, ${s_{4}}$
- количества каждого boost material: x, y, z, w

Если устройство складов одинаково во всех городах, множитель производства подразделения равен:

$$
F(x,y,z,w) = \sum_{i = 1}^{6}\left( (1 + 0.002\ast x)^{c_{1}}\ast(1 + 0.002\ast y)^{c_{2}}{\ast(1 + 0.002\ast z)}^{c_{3}}{\ast(1 + 0.002\ast w)}^{c_{4}} \right)^{0.73}
$$

Чтобы найти максимум приведённой функции, можно найти максимум функции:

$$
F(x,y,z,w) = (1 + 0.002\ast x)^{c_{1}}\ast(1 + 0.002\ast y)^{c_{2}}{\ast(1 + 0.002\ast z)}^{c_{3}}{\ast(1 + 0.002\ast w)}^{c_{4}}
$$

Функция ограничения (S — место на складе):

$$
G(x,y,z,w) = s_{1}\ast x + s_{2}\ast y + s_{3}\ast z + s_{4}\ast w = S
$$

Задача: найти максимум $F(x,y,z,w)$ при ограничении $G(x,y,z,w)$.

## Решение

### Метод множителей Лагранжа

Примечание: этот материал основан на обсуждении между \@Jesus и \@yichizhng в Discord. Все заслуги принадлежат им.

Используя метод [множителей Лагранжа](https://en.wikipedia.org/wiki/Lagrange_multiplier), получаем систему:

$$
\begin{cases} \frac{\partial F}{\partial x} &= \lambda\frac{\partial G}{\partial x} \newline \frac{\partial F}{\partial y} &= \lambda\frac{\partial G}{\partial y} \newline \frac{\partial F}{\partial z} &= \lambda\frac{\partial G}{\partial z} \newline \frac{\partial F}{\partial w} &= \lambda\frac{\partial G}{\partial w} \newline G(x,y,z,w) &= S\end{cases}
$$

Для решения этой системы есть 2 варианта:

- решить систему с помощью [Ceres Solver](./miscellany.md);
- выполнить всю работу обычными вычислениями и алгебраическими преобразованиями. Это оптимальный вариант и по точности, и по производительности, поэтому остановимся на нём. В следующих разделах я приведу доказательство.

$$
x\ast s_{1} = \frac{S - 500\ast\left( \frac{s_{1}}{c_{1}}\ast\left( c_{2} + c_{3} + c_{4} \right) - \left( s_{2} + s_{3} + s_{4} \right) \right)}{\frac{c_{1} + c_{2} + c_{3} + c_{4}}{c_{1}}}
$$

$$
y\ast s_{2} = \frac{S - 500\ast\left( \frac{s_{2}}{c_{2}}\ast\left( c_{1} + c_{3} + c_{4} \right) - \left( s_{1} + s_{3} + s_{4} \right) \right)}{\frac{c_{1} + c_{2} + c_{3} + c_{4}}{c_{2}}}
$$

$$
z\ast s_{3} = \frac{S - 500\ast\left( \frac{s_{3}}{c_{3}}\ast\left( c_{1} + c_{2} + c_{4} \right) - \left( s_{1} + s_{2} + s_{4} \right) \right)}{\frac{c_{1} + c_{2} + c_{3} + c_{4}}{c_{3}}}
$$

$$
w\ast s_{4} = \frac{S - 500\ast\left( \frac{s_{4}}{c_{4}}\ast\left( c_{1} + c_{2} + c_{3} \right) - \left( s_{1} + s_{2} + s_{3} \right) \right)}{\frac{c_{1} + c_{2} + c_{3} + c_{4}}{c_{4}}}
$$

## Доказательство

Определим: $k = 0.002$

$$
\begin{cases}\frac{\partial F}{\partial x} = \left( k\ast c_{1}\ast(1 + k\ast x)^{c_{1} - 1} \right)\ast(1 + k\ast y)^{c_{2}}\ast(1 + k\ast z)^{c_{3}}\ast(1 + k\ast w)^{c_{4}} = \lambda\ast s_{1} \newline \frac{\partial F}{\partial y} = (1 + k\ast x)^{c_{1}}\ast\left( k\ast c_{2}\ast(1 + k\ast y)^{c_{2} - 1} \right)\ast(1 + k\ast z)^{c_{3}}\ast(1 + k\ast w)^{c_{4}} = \lambda\ast s_{2} \end{cases}
$$

≡

$$
k\ast c_{1}\ast(1 + k\ast x)^{- 1}\ast s_{2} = k\ast c_{2}\ast(1 + k\ast y)^{- 1}\ast s_{1}
$$

≡

$$
c_{1}\ast s_{2}\ast(1 + k\ast y) = c_{2}\ast s_{1}\ast(1 + k\ast x)
$$

≡

$$
1 + k\ast y = \frac{c_{2}\ast s_{1}}{c_{1}\ast s_{2}}\ast(1 + k\ast x)
$$

≡

$$
y = \frac{c_{2}\ast s_{1} + k\ast x\ast c_{2}\ast s_{1} - c_{1}\ast s_{2}}{k\ast c_{1}\ast s_{2}}
$$

≡

$$
y\ast s_{2} = \frac{c_{2}\ast s_{1}\ast s_{2} + k\ast x\ast c_{2}\ast s_{1}\ast s_{2} - c_{1}\ast s_{2}\ast s_{2}}{k\ast c_{1}\ast s_{2}}
$$

≡

$$
y\ast s_{2} = \frac{c_{2}\ast s_{1}}{k\ast c_{1}} + \frac{x\ast c_{2}\ast s_{1}}{c_{1}} - \frac{s_{2}}{k}
$$

≡

$$
y\ast s_{2} = \frac{c_{2}}{c_{1}}\ast x\ast s_{1} + \frac{1}{k}\ast\frac{c_{2}\ast s_{1} - c_{1}\ast s_{2}}{c_{1}}
$$

≡

$$
y\ast s_{2} = \frac{c_{2}}{c_{1}}\ast x\ast s_{1} + 500\ast\frac{c_{2}\ast s_{1} - c_{1}\ast s_{2}}{c_{1}}
$$

Повторив описанные шаги, получаем:

$$
z\ast s_{3} = \frac{c_{3}}{c_{1}}\ast x\ast s_{1} + 500\ast\frac{c_{3}\ast s_{1} - c_{1}\ast s_{3}}{c_{1}}
$$

$$
w\ast s_{4} = \frac{c_{4}}{c_{1}}\ast x\ast s_{1} + 500\ast\frac{c_{4}\ast s_{1} - c_{1}\ast s_{4}}{c_{1}}
$$

Подставим это в функцию ограничения:

$$
x\ast s_{1} + y\ast s_{2} + z\ast s_{3} + w\ast s_{4} = S
$$

≡

$$
x\ast s_{1} + \frac{c_{2}}{c_{1}}\ast x\ast s_{1} + 500\ast\frac{c_{2}\ast s_{1} - c_{1}\ast s_{2}}{c_{1}} + \frac{c_{3}}{c_{1}}\ast x\ast s_{1} + 500\ast\frac{c_{3}\ast s_{1} - c_{1}\ast s_{3}}{c_{1}} + \frac{c_{4}}{c_{1}}\ast x\ast s_{1} + 500\ast\frac{c_{4}\ast s_{1} - c_{1}\ast s_{4}}{c_{1}} = S
$$

≡

$$
\frac{x\ast s_{1}\ast\left( c_{1} + c_{2} + c_{3} + c_{4} \right)}{c_{1}} + \frac{500}{c_{1}}\ast\left( c_{2}\ast s_{1} - c_{1}\ast s_{2} + c_{3}\ast s_{1} - c_{1}\ast s_{3} + c_{4}\ast s_{1} - c_{1}\ast s_{4} \right) = S
$$

≡

$$
\frac{x\ast s_{1}\ast\left( c_{1} + c_{2} + c_{3} + c_{4} \right)}{c_{1}} + \frac{500}{c_{1}}\ast\left( s_{1}\ast\left( c_{2} + c_{3} + c_{4}\  \right) - c_{1}\ast\left( s_{2} + s_{3} + s_{4} \right) \right) = S
$$

≡

$$
x\ast s_{1}\ast\frac{c_{1} + c_{2} + c_{3} + c_{4}}{c_{1}} + \frac{500}{c_{1}}\ast\left( s_{1}\ast\left( c_{2} + c_{3} + c_{4}\  \right) - c_{1}\ast\left( s_{2} + s_{3} + s_{4} \right) \right) = S
$$

≡

$$
x\ast s_{1} = \frac{S - 500\ast\left( \frac{s_{1}}{c_{1}}\ast\left( c_{2} + c_{3} + c_{4} \right) - \left( s_{2} + s_{3} + s_{4} \right) \right)}{\frac{c_{1} + c_{2} + c_{3} + c_{4}}{c_{1}}}
$$

Аналогично можно выполнить шаги для y, z и w.

## Обработка малого объёма склада

При небольшом S любая переменная (x,y,z,w) может оказаться отрицательной. В таком случае нужно удалить переменную, которая стала отрицательной, и повторить описанные выше шаги. При реализации решения можно использовать рекурсивную функцию для обработки таких случаев.
