# Спрос — конкуренция

## Использование

Эти параметры используются при расчёте `MaxSalesVolume` материалов и продуктов.

`Market Research - Demand` открывает доступ к данным `Demand`.

`Market Data - Competition` открывает доступ к данным `Competition`.

## Материал

У каждого материала есть собственные `demandBase`, `demandRange`, `competitionBase`, `competitionRange` и `maxVolatility`. И `demand`, и `competition` начинают со своих базовых значений и всегда остаются в соответствующих диапазонах.

Это неочевидно: `demand` и `competition` _не_ используются при расчёте `marketPrice`.

В состоянии START игра рассчитывает 6 переменных:

```typescript
const priceVolatility: number = (Math.random() * this.maxVolatility) / 300;
const priceChange: number = 1 + priceVolatility;
const compVolatility: number = (Math.random() * this.maxVolatility) / 100;
const compChange: number = 1 + compVolatility;
const dmdVolatility: number = (Math.random() * this.maxVolatility) / 100;
const dmdChange: number = 1 + dmdVolatility;
```

`priceChange`, `compChange` и `dmdChange` — величины, на которые на следующих шагах изменяются `marketPrice`, `competition` и `demand`.

Затем игра дважды выполняет случайный выбор:

- Первый: `Math.random()` < 0.5. Если условие выполнено, `competition` и `marketPrice` увеличиваются. Иначе они уменьшаются.
- Второй: `Math.random()` < 0.5. Если условие выполнено, `demand` и `marketPrice` увеличиваются. Иначе они уменьшаются.

## Продукт

Начальные значения задаются после завершения разработки продукта. Формулы приведены в следующем [разделе](./product.md).

В состоянии START игра уменьшает `demand` продукта и увеличивает его `competition`.

- Величина изменения:

$$
AmountOfChange = Random(0,3)*0.0004
$$

- Если отрасль — Pharmaceutical, Software или Robotics, эта величина умножается на 3.

Минимальное значение `Demand` — 0.001. Максимальное значение `Competition` — 99.99.
