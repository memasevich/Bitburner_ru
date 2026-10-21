# Офис

## Основная информация

Показатели сотрудников отслеживаются как средние значения. Есть 6 средних показателей: `AvgEnergy`, `AvgMorale`, `AvgIntelligence`, `AvgCharisma`, `AvgCreativity`, `AvgEfficiency`. При найме нового сотрудника эти значения пересчитываются. Они изменяются на случайное число от 50 до 100:

```typescript
this.avgMorale =
  (this.avgMorale * this.numEmployees + getRandomInt(averageStat, averageStat)) / (this.numEmployees + 1);
```

Назначение на должности:

- В каждом офисе есть 2 записи: `employeeJobs` и `employeeNextJobs`. Данные из `employeeJobs` (число сотрудников на каждой должности) используются для расчёта других связанных данных, таких как `EmployeeProductionByJob`, `AvgEnergy`, `AvgMorale`, `TotalExperience`. При вызове `setJobAssignment` его параметр рассчитывается и записывается в `employeeNextJobs`. В состоянии START следующего цикла данные из `employeeNextJobs` копируются в `employeeJobs`.
- Поведение `setJobAssignment` поначалу может быть неочевидным. Допустим, вы вызываете `ns.corporation.setJobAssignment("Agriculture","Sector-12","Operations", 5)`:
  - если у вас 5 сотрудников «Operations», ничего не происходит;
  - если у вас 7 сотрудников «Operations», их число уменьшается до 5, а 2 сотрудника назначаются на «Unassigned»;
  - если у вас 2 сотрудника «Operations», проверяется наличие хотя бы 3 сотрудников «Unassigned». Если они есть, число «Operations» увеличивается до 5, а число «Unassigned» уменьшается на 3. Если их нет, возникает ошибка. Иными словами, функция пытается перевести сотрудников с «Unassigned» на «Operations».
- Поэтому правильно использовать `setJobAssignment` так:
  - сначала установить все должности в 0;
  - затем установить нужное количество сотрудников на каждой должности.

Общий опыт увеличивается в следующих случаях:

- При найме нового сотрудника. Каждый новый сотрудник добавляет `getRandomInt(50, 100)` к общему опыту.
- В состоянии START. Прирост за цикл:

$$
TotalExperienceGain = 0.0015\ast(TotalEmployees - UnassignedEmployees + InternEmployees\ast 9)
$$

- Если в офисе 100 сотрудников и все они назначены не на должности Intern, прирост составляет 0.15 опыта за цикл. Без бонусного времени это 54 опыта в час.

Зарплата за цикл:

$$
Salary = 3\ast TotalEmployees\ast\left(AvgIntelligence+AvgCharisma+AvgCreativity+AvgEfficiency+\frac{TotalExperience}{TotalEmployees}\right)
$$

## Улучшение

Стоимость улучшения:

$$
UpgradeCost = BasePrice\ast\left( \frac{\sqrt[3]{1.09} - 1}{0.09} \right)\ast{1.09}^{\frac{CurrentSize}{3}}
$$

Стоимость улучшений при переходе от размера 3 к размеру n:

$$
UpgradeCost_{From\ 3\ to\ n} = \sum_{k = 3}^{n - 1}{BasePrice\ast\left( \frac{\sqrt[3]{1.09} - 1}{0.09} \right)\ast{1.09}^{\frac{k}{3}}}
$$

≡

$$
UpgradeCost_{From\ 3\ to\ n} = \sum_{k = 3}^{n - 1}{BasePrice\ast\left( \frac{\sqrt[3]{1.09} - 1}{0.09} \right)\ast\left( \sqrt[3]{1.09} \right)^{k}}
$$

≡

$$
UpgradeCost_{From\ 3\ to\ n} = BasePrice\ast\left( \frac{\sqrt[3]{1.09} - 1}{0.09} \right)\ast\left( \frac{\left( \sqrt[3]{1.09} \right)^{n} - 1.09}{\sqrt[3]{1.09} - 1} \right)
$$

≡

$$
UpgradeCost_{From\ 3\ to\ n} = BasePrice\ast\left( \frac{{1.09}^{\frac{n}{3}} - 1.09}{0.09} \right)
$$

Стоимость увеличения размера с a до b:

$$
UpgradeCost_{From\ a\ to\ b} = BasePrice\ast\left( \frac{{1.09}^{\frac{b}{3}} - {1.09}^{\frac{a}{3}}}{0.09} \right)
$$

Максимальный размер при заданном `MaxCost`:

$$
MaxSize = 3\ast\log_{1.09}\left( MaxCost\ast\frac{0.09}{BasePrice} + {1.09}^{\frac{CurrentSize}{3}} \right)
$$

## Энергия и мораль

Они рассчитываются в состоянии START.

Падение начинается, когда число сотрудников в офисе становится больше либо равно 9. Минимальное значение — 10.

PerfMult — множитель, увеличивающий или уменьшающий энергию и мораль.

$$
InternMultiplier = 0.002\ast Min\left(\frac{1}{9},\frac{InternEmployees}{TotalEmployees}-\frac{1}{9}\right)\ast 9
$$

$$
PenaltyMultiplier = \begin{cases}0, & (CorpFunds > 0) \vee (DivisionLastCycleRevenue > DivisionLastCycleExpenses) \newline 0.001, & (CorpFunds < 0) \land (DivisionLastCycleRevenue < DivisionLastCycleExpenses)\end{cases}
$$

$$
PerfMult = \begin{cases}1.002, & TotalEmployees < 9 \newline 1 + InternMultiplier - PenaltyMultiplier, & TotalEmployees \geq 9\end{cases}
$$

Покупка чая даёт фиксированный бонус +2 к энергии. Стоимость — 500e3 за сотрудника.

При организации вечеринки рассчитывается `PartyMult`. Он используется при расчёте морали в следующем цикле.

$$
PartyMult = 1 + \frac{PartyCostPerEmployee}{10^{7}}
$$

`PartyMult` не зависит от числа сотрудников. Поэтому можно устроить «большую вечеринку» (с высоким `PartyCostPerEmployee`), когда в офисе 1 сотрудник, и заплатить немного из-за того, что сотрудников всего 1, а остальных нанять позже.

Каждый цикл происходит фиксированное случайное уменьшение энергии/морали. Оно ограничено 0.002 за цикл. Это очень мало и обычно не создаёт проблем.

Если `PartyMult` больше 1, мораль дополнительно увеличивается. `PartyMult` зависит от `PartyCostPerEmployee`, поэтому и этот прирост зависит от `PartyCostPerEmployee`.

$$
IncreaseOfMorale = (PartyMult - 1)\ast 10
$$

≡

$$
IncreaseOfMorale = \frac{PartyCostPerEmployee}{10^{6}}
$$

```typescript
const reduction = 0.002 * marketCycles;
const increase = this.partyMult > 1 ? (this.partyMult - 1) * 10 : 0;
this.avgEnergy = (this.avgEnergy - reduction * Math.random()) * perfMult + (this.teaPending ? 2 : 0);
this.avgMorale = ((this.avgMorale - reduction * Math.random()) * perfMult + increase) * this.partyMult;
```

Есть 3 способа компенсировать падение энергии/морали:

- Покупать чай и устраивать вечеринки. Всегда используйте этот вариант. Написать скрипт для автоматизации очень просто.
- Назначать сотрудников на Intern. Многие рекомендуют соотношение 1/9 как способ компенсировать падение энергии/морали. Использовать его можно только когда корпорация/подразделение работает нормально. Иначе действует штрафной множитель (0.001), и нужно использовать 1/6.
- Купить 2 улучшения исследований: AutoBrew и AutoPartyManager. Они удерживают энергию/мораль на максимуме. Однако покупать их не следует: RP лучше потратить на другие полезные исследования или просто накопить.

При найме нового сотрудника `AvgEnergy` и `AvgMorale` увеличиваются на случайное значение.

```typescript
this.avgMorale = (this.avgMorale * this.numEmployees + getRandomInt(50, 100)) / (this.numEmployees + 1);
this.avgEnergy = (this.avgEnergy * this.numEmployees + getRandomInt(50, 100)) / (this.numEmployees + 1);
```

Оптимальный `PartyCostPerEmployee`:

- Фиксированное случайное уменьшение мало, поэтому им можно пренебречь.
- Нужно повысить `AvgMorale` с `CurrentMorale` до `MaxMorale`:

$$
\left( CurrentMorale\ast PerfMult + \frac{PartyCostPerEmployee}{10^{6}} \right)\ast\left( 1 + \frac{PartyCostPerEmployee}{10^{7}} \right) = MaxMorale
$$

- Определим:

$$
a = CurrentMorale
$$

$$
b = MaxMorale
$$

$$
k = PerfMult
$$

$$
x = PartyCostPerEmployee
$$

- Получаем уравнение:

$$
\left( a\ast k + \frac{x}{10^{6}} \right)\ast\left( 1 + \frac{x}{10^{7}} \right) = b
$$

≡

$$
x_{1} = - 500000\ast\left( \sqrt{(a\ast k - 10)^{2} + 40\ast b} + a\ast k + 10 \right)
$$

$$
x_{2} = 500000\ast\left( \sqrt{(a\ast k - 10)^{2} + 40\ast b} - a\ast k - 10 \right)
$$

- $x_{1}$ всегда отрицателен. Поэтому единственное решение — $x_{2}$.

Одна большая вечеринка менее выгодна, чем несколько маленьких. Например, 1 большая вечеринка для повышения морали с 70 до 100 стоит дороже, чем 3 маленькие: с 70 до 80, с 80 до 90 и с 90 до 100.

Не экономьте на чае и вечеринках. Энергия и мораль важны для эффективной работы офиса. Формулы приведены в следующем разделе.

- На вечеринку нормально тратить 500e3 за сотрудника. При желании можно тратить больше.
- Старайтесь постоянно поддерживать максимальные энергию и мораль. Я обычно покупаю чай и устраиваю вечеринку, когда энергия/мораль падает до 99.5 (109.5, если куплены соответствующие улучшения исследований).
- На раундах 1 и 2 офис небольшой, обычно меньше 9 сотрудников, поэтому энергия и мораль не являются проблемой. На раунде 3 и далее покупайте чай и устраивайте вечеринку каждый цикл.

## Производство сотрудника по должности

В состоянии START каждого цикла все показатели используются для расчёта значений «производства». Эти значения сохраняются в `office.employeeProductionByJob` и позднее используются при расчёте:

- RP;
- качества материалов;
- характеристик продуктов;
- базового производства подразделения;
- MaxSalesVolume материала/продукта.

Формулы:

- Рассчитайте множители Intelligence, Charisma, Creativity и Efficiency. Каждый из них — произведение среднего значения, эффекта улучшений и эффекта исследований.
- База производства:

$$
ProductionBase = AvgMorale\ast AvgEnergy\ast 10^{-4}
$$

- Опыт:

$$
Exp = \frac{TotalExperience}{TotalEmployees}
$$

- Множитель производства:
  - Operations: $$ProductionMultiplier = 0.6\ast IntelligenceMult + 0.1\ast CharismaMult + Exp + 0.5\ast CreativityMult + EfficiencyMult$$
  - Engineer: $$ProductionMultiplier = IntelligenceMult + 0.1\ast CharismaMult + 1.5\ast Exp + EfficiencyMult$$
  - Business: $$ProductionMultiplier = 0.4\ast IntelligenceMult + CharismaMult + 0.5\ast Exp$$
  - Management: $$ProductionMultiplier = 2\ast CharismaMult + Exp + 0.2\ast CreativityMult + 0.7\ast EfficiencyMult$$
  - Research and Development: $$ProductionMultiplier = 1.5\ast IntelligenceMult + 0.8\ast Exp + CreativityMult + 0.5\ast EfficiencyMult$$
- $EmployeesJobCount = office.employeeJobs[JobName]$
- Производство сотрудников по должности:

$$
EmployeeProductionByJob = EmployeesJobCount\ast ProductionMultiplier\ast ProductionBase
$$

## Расчёт показателей сотрудника

4 показателя — `AvgIntelligence`, `AvgCharisma`, `AvgCreativity`, `AvgEfficiency` — недоступны через NS API.

Их можно вычислить по формулам из предыдущей части с помощью [Ceres Solver](./miscellany.md). Для 5 должностей (Operations, Engineer, Business, Management и Research & Development) для применения этого решения нужно, чтобы как минимум на 4 должностях работало по 1 сотруднику.
