# Продукт

## Обзор

Продуктовая отрасль намного выгоднее материальной на поздних этапах, потому что продукты можно продавать по неприлично высоким ценам.

Market-TA2 автоматически устанавливает оптимальные цены на продукты. О том, как реализовать собственный скрипт Market-TA2, читайте в этом [разделе](./optimal-selling-price-market-ta2.md). Собственный скрипт Market-TA2 — лучшая оптимизация на раунде 3 и далее.

Прежде чем производить продукты, их нужно разработать. В очередь разработки можно поставить несколько продуктов, но одновременно разрабатывается только один.

Число продуктов у подразделения ограничено. По умолчанию оно равно 3. Есть 2 улучшения исследований, увеличивающих этот лимит. Однако почти всегда они бесполезны: обычно нет смысла повышать максимальное число продуктов. Подробности смотрите в этом [разделе](./unlocks-upgrade-research.md). Достигнув лимита, перед разработкой нового продукта нужно прекратить выпуск одного из имеющихся.

Новые продукты нужно разрабатывать постоянно. Почти всегда новые продукты лучше старых и приносят намного больше прибыли.

Наценка и эффективный рейтинг продукта чрезвычайно важны, потому что участвуют в расчёте [MaxSalesVolume](./optimal-selling-price-market-ta2.md).

Эффективный рейтинг продукта зависит от его рейтинга и качества входного материала. О влиянии качества входного материала на рейтинг и эффективный рейтинг продукта читайте в этом [разделе](./quality.md). Поэтому продуктовой отрасли нужно поддерживающее подразделение, производящее высококачественные материалы.

Наценка и рейтинг продукта зависят от:

- `CreationJobFactors[JobName]`. Подробнее об этом в следующей части.
- RP. Поэтому следует накапливать RP.
- `ResearchFactor`. Это `scienceFactor` отрасли.
- вложений в дизайн и рекламу. В интерфейсе игры они называются «Design investment» и «Marketing investment». Эти вложения не слишком важны, потому что показатели степени в формулах очень малы. Достаточно тратить на них 1% текущих средств.

Улучшения офиса и улучшения показателей сотрудников очень важны для продуктов, поскольку повышают производство сотрудников. Высокое производство сотрудников означает большие `CreationJobFactors` и RP. Эти улучшения и продукты создают мощный цикл: больше улучшений → лучше продукт → выше прибыль → больше улучшений.

Настройка офиса важна для эффективной разработки новых продуктов. Советы по настройке офиса приведены в этом [разделе](./general-advice.md).

## Формулы

`CreationJobFactors[JobName]` — значения, накапливающиеся за время разработки продукта. `DevelopmentProgress` начинается с 0. В каждом цикле:

- Общее производство сотрудников:

$$
TotalEmployeeProd = OperationsProd + EngineerProd + ManagementProd
$$

- Фактор управления:

$$
ManagementFactor = 1 + \frac{ManagementProd}{1.2\ast TotalEmployeeProd}
$$

- Множитель разработки продукта:

$$
ProductDevelopmentMultiplier = \left( (EngineerProd)^{0.34} + (OperationsProd)^{0.2} \right)\ast ManagementFactor
$$

- Прогресс:

$$
Progress = 0.01\ast ProductDevelopmentMultiplier
$$

- Прогресс разработки:

$$
DevelopmentProgress = DevelopmentProgress + Progress
$$

- `CreationJobFactors[JobName]`:

$$
CreationJobFactors\lbrack JobName\rbrack = CreationJobFactors\lbrack JobName\rbrack + {\lbrace EmployeeJob\rbrace Prod\ast Progress}\ast{0.01}
$$

&nbsp;  
Когда `DevelopmentProgress` достигает 100, продукт готов.

- Определим:

$$
A = \ CreationJobFactors\lbrack Engineer\rbrack
$$

$$
B = \ CreationJobFactors\lbrack Management\rbrack
$$

$$
C = \ CreationJobFactors\lbrack RnD\rbrack
$$

$$
D = \ CreationJobFactors\lbrack Operations\rbrack
$$

$$
E = \ CreationJobFactors\lbrack Business\rbrack
$$

$$
TotalCreationJobFactors = A + B + C + D + E
$$

- {JobName}Ratio:

$$
EngineerRatio = \frac{A}{TotalCreationJobFactors}
$$

$$
ManagementRatio = \frac{B}{TotalCreationJobFactors}
$$

$$
RnDRatio = \frac{C}{TotalCreationJobFactors}
$$

$$
OperationsRatio = \frac{D}{TotalCreationJobFactors}
$$

$$
BusinessRatio = \frac{E}{TotalCreationJobFactors}
$$

- Множитель вложений в дизайн:

$$
DesignInvestMult = 1 + {(DesignInvestment)^{0.1}}\ast{0.01}
$$

- Научный множитель:

$$
ScienceMult = 1 + {(RP)^{ResearchFactor}}\ast{0.00125}
$$

- Балансирующий множитель:

$$
BalanceMult = 1.2\ast EngineerRatio + 0.9\ast ManagementRatio + 1.3\ast RnDRatio + 1.5\ast OperationsRatio + BusinessRatio
$$

- Общий множитель:

$$
TotalMult = BalanceMult\ast DesignInvestMult\ast ScienceMult
$$

- Качество продукта:

$$
TotalMult\ast (0.1\ast A + 0.05\ast B + 0.05\ast C + 0.02\ast D + 0.02\ast E)
$$

- Производительность продукта:

$$
TotalMult\ast (0.15\ast A + 0.02\ast B + 0.02\ast C + 0.02\ast D + 0.02\ast E)
$$

- Прочность продукта:

$$
TotalMult\ast (0.05\ast A + 0.02\ast B + 0.08\ast C + 0.05\ast D + 0.05\ast E)
$$

- Надёжность продукта:

$$
TotalMult\ast (0.02\ast A + 0.08\ast B + 0.02\ast C + 0.05\ast D + 0.08\ast E)
$$

- Эстетика продукта:

$$
TotalMult\ast (0.08\ast B + 0.05\ast C + 0.02\ast D + 0.1\ast E)
$$

- Особенности продукта:

$$
TotalMult\ast (0.08\ast A + 0.05\ast B + 0.02\ast C + 0.05\ast D + 0.05\ast E)
$$

- Рейтинг продукта:
  - У каждой отрасли, производящей продукты, есть собственные `RatingWeights`. `RatingWeights` содержит коэффициенты 6 характеристик: quality, performance, durability, reliability, aesthetics, features. Например, `RatingWeights` для Tobacco:
    - коэффициент Quality: 0.7;
    - коэффициент Durability: 0.1;
    - коэффициент Aesthetics: 0.2.
  - `RatingWeights` — это `industryData.product.ratingWeights`.
  - Формула:

$$
ProductRating = \sum_{i = 1}^{6}{{ProductStat}_i\ast{StatCoefficient}_i}
$$

- Множитель рекламных вложений:

$$
AdvertInvestMult = 1 + {(AdvertisingInvestment)^{0.1}}\ast{0.01}
$$

- Соотношение Business и Management:

$$
BusinessManagementRatio = Max\left( BusinessRatio + ManagementRatio,\ \left( \frac{1}{TotalCreationJobFactors} \right) \right)
$$

- Наценка продукта:

$$
ProductMarkup = \frac{100}{AdvertInvestMult\ast(ProductQuality + 0.001)^{0.65}\ast BusinessManagementRatio}
$$

- Спрос продукта:

$$
Demand = \begin{cases}Min(100,AdvertInvestMult\ast(100\ast(Popularity/Awareness))), & Awareness \neq 0 \newline 20, & Awareness = 0 \end{cases}
$$

- Конкуренция продукта:

$$
Competition = Random(0,70)
$$

- Размер продукта:
  - это `product.size`;
  - формула:

$$
ProductSize = \sum_{i = 1}^{NumberOfInputMaterials}{{InputMaterialSize}_i\ast{InputMaterialCoefficient}_i}
$$

## Приближённое значение наценки продукта

Для расчёта наценки продукта нужны:

- `CreationJobFactors[JobName]`;
- `RP`;
- `ResearchFactor`;
- `DesignInvestment`;
- `AdvertisingInvestment`.

Наценка продукта рассчитывается после его завершения. В этот момент одно значение недоступно: `CreationJobFactors[JobName]`, поскольку NS API не позволяет его получить. Есть 2 подхода:

- Записывать значение вручную. Это означает моделировать `product.creationJobFactors`. Подход простой, но у него есть серьёзный недостаток: если пропустить хотя бы один цикл, данные станут недействительными.
- Рассчитывать значение напрямую. Характеристики продукта общедоступны, поэтому из приведённых формул получается система из 6 функций с 5 переменными. Для поиска решения можно использовать [Ceres Solver](./miscellany.md).
