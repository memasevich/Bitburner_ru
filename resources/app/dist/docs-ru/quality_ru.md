# Качество

## Основные термины

Определим несколько терминов:

- `AvgInputQuality`: среднее качество входных материалов.
- `MaxOutputQuality`: максимальное значение качества выходного материала.
- `OutputQuality`: итоговое качество выходного материала. Оно всегда меньше либо равно `MaxOutputQuality`.
- `MaxOutputRating`: максимальный рейтинг выходного продукта.
- `OutputRating`: итоговый рейтинг выходного продукта. Он всегда меньше либо равен `MaxOutputRating`.

У каждой отрасли свой набор входных материалов и их коэффициентов. Например, Agriculture нужны Water и Chemicals с коэффициентами [0.5, 0.2] соответственно. Эти коэффициенты не влияют на `AvgInputQuality`. `AvgInputQuality` — среднее качество входных материалов на складе. Например, если на складе подразделения Agriculture находятся Water (качество 1) и Chemicals (качество 11), то `AvgInputQuality` равен (1+11)/2.

Покупаемый материал низкого качества. Его качество всегда равно 1.

При импорте/экспорте материалов между разными подразделениями можно заметить, что качество некоторых входных материалов постоянно меняется. После состояния EXPORT качество высокое, а после состояния PURCHASE уменьшается. В этих 2 состояниях качество материалов на складе пересчитывается.

В состоянии PURCHASE качество материала «разбавляется» покупаемым материалом низкого качества (качество 1).

$$
Quality = \frac{Quality\ast CurrentQuantity + BuyAmount}{CurrentQuantity + BuyAmount}
$$

В состоянии PRODUCTION это «разбавленное» качество используется для расчёта `AvgInputQuality`.

В состоянии EXPORT:

$$
Quality = \frac{Quality\ast CurrentQuantity + ImportQuality\ast ImportAmount}{CurrentQuantity + ImportAmount}
$$

Производственная способность поддерживающего подразделения должна быть сбалансирована. `ImportAmount` (количество единиц материала, экспортируемых поддерживающим подразделением) не обязано равняться необходимому количеству входного материала, но не должно быть и слишком маленьким.

## Материал

`MaxOutputQuality` — сумма 3 величин:

- Слагаемое Engineer:
  - `EngineerProduction = office.employeeProductionByJob["Engineer"]`

$$
EngineerSummand = \frac{EngineerProduction}{90}
$$

- Слагаемое очков исследований:

$$
ResearchPointSummand = (RP)^{IndustryScienceFactor}
$$

- Слагаемое AI Cores (если на складе есть AI Cores):

$$
AICoresSummand = AICoresQuantity^{IndustryAICoreFactor}\ast{0.001}
$$

Качество результата:

$$
OutputQuality = \sqrt{MaxOutputQuality}\ast AvgInputQuality
$$

Из приведённых формул следуют такие выводы:

- На ранних раундах лучший способ повысить `MaxOutputQuality` — увеличить RP. Особенно это заметно для отраслей с высоким научным фактором, например Chemical.
- На поздних раундах (раунд 3 и далее) средств для улучшения офисов уже много. Тогда важнейшим фактором `MaxOutputQuality` становится `EngineerProduction`. Должность «Engineer» важнее, чем «Research & Development».
- `OutputQuality` начинается со значения, равного квадратному корню из `MaxOutputQuality`. `AvgInputQuality` повышает его, пока оно не достигнет `MaxOutputQuality`.
- Вот простой способ понять, нужно ли повышать `AvgInputQuality`:
  - если квадрат `AvgInputQuality` больше либо равен текущему качеству результата, всё в порядке;
  - иначе нужно повысить качество входных материалов. Обычно это означает, что следует улучшить поддерживающее подразделение.

## Продукт

`MaxOutputRating` — это product.rating.

В интерфейсе игры `OutputRating` отображается как «Effective rating».

Рейтинг результата:

$$
OutputRating = \sqrt{MaxOutputRating}\ast AvgInputQuality
$$

Для проверки `AvgInputQuality` используйте ту же стратегию, что и для материала.
