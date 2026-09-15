# Оптимальная цена продажи — Market-TA2

## Рыночная цена и предел наценки

Рыночная цена:

- Материал: `material.marketPrice`.
- Продукт: `product.productionCost`. Это значение зависит от `ProductMarketPriceMult`, `MarketPrice` и `Coefficient` входных материалов.
  - $n = {Number\ of\ input\ materials}$
  - $ProductMarketPriceMult = 5$

$$
ProductMarketPrice = ProductMarketPriceMult\ast\sum_{i = 1}^{n}{MaterialMarketPrice_i\ast MaterialCoefficient_i}
$$

Предел наценки — это максимальная величина, на которую можно поднять цену выше рыночной, прежде чем объём продаж начнёт уменьшаться. Например, пусть MarketPrice продукта равен 5000, а MarkupLimit — 700. Если установить цену не больше 5700, объём продаж не будет уменьшен.

- Материал:

$$
MaterialMarkupLimit = \frac{MaterialQuality}{MaterialMarkup}
$$

- Продукт:

$$
ProductMarkupLimit = \frac{Max(ProductEffectiveRating,0.001)}{ProductMarkup}
$$

## Объём продаж

`MaxSalesVolume` — максимальное число единиц, которые можно продать в состоянии SALE.

`PotentialSalesVolume` — теоретический объём продаж.

`MarkupMultiplier` определяется кусочной функцией, зависящей от цены продажи, рыночной цены и предела наценки.

$$
MaxSalesVolume = PotentialSalesVolume\ast MarkupMultiplier
$$

### Потенциальный объём продаж

`PotentialSalesVolume` зависит от:

- качества материалов и эффективного рейтинга продуктов;
- числа сотрудников Business;
- Advert;
- Demand и Competition;
- ABC SalesBots.

Он является произведением 6 множителей:

$$
PotentialSalesVolume = \ ItemMultiplier\ast BusinessFactor\ast AdvertFactor\ast MarketFactor\ast SaleBotsBonus\ast ResearchBonus
$$

- Множитель качества/эффективного рейтинга:
  - материал:
    $$ItemMultiplier = MaterialQuality + 0.001$$
  - продукт:
    $$ItemMultiplier = 0.5\ast(ProductEffectiveRating)^{0.65}$$
- Фактор Business:
  - `BusinessProduction = 1 + office.employeeProductionByJob["Business"]`

$$
{BusinessFactor = (BusinessProduction)}^{0.26} + \left({BusinessProduction}\ast{0.0001}\right)
$$

- Фактор Advert:

$$
AwarenessFactor = (Awareness + 1)^{IndustryAdvertisingFactor}
$$

$$
PopularityFactor = (Popularity + 1)^{IndustryAdvertisingFactor}
$$

$$
RatioFactor = \begin{cases}Max(0.01,\frac{Popularity + 0.001}{Awareness}), & Awareness \neq 0 \newline 0.01, & Awareness = 0 \end{cases}
$$

$$
AdvertFactor = (AwarenessFactor\ast PopularityFactor\ast RatioFactor)^{0.85}
$$

- Фактор рынка:

$$
MarketFactor = Max\left(0.1,{Demand\ast(100 - Competition)}\ast{0.01}\right)
$$

- Бонус улучшения корпорации: бонус `SalesBots`.
- Бонус исследований подразделения: всегда равен 1. Сейчас нет исследований, увеличивающих бонус продаж.

### Множитель наценки

$$
MarkupMultiplier = \begin{cases}10^{12} & SellingPrice \in (-\infty, 0] \newline \frac{MarketPrice}{SellingPrice} & SellingPrice \in (0, MarketPrice] \newline 1 & SellingPrice \in (MarketPrice, MarketPrice + MarkupLimit] \newline \left(\frac{MarkupLimit}{SellingPrice - MarketPrice}\right)^{2} & SellingPrice \in (MarketPrice + MarkupLimit, \infty) \end{cases}
$$

Разбор 4 диапазонов в том же порядке, что и в формуле выше:

- Диапазон 1: можно установить `SellingPrice` равным 0 и получить чрезвычайно высокий `MarkupMultiplier`. Благодаря этому можно продать все единицы независимо от остальных факторов. Это самый быстрый способ избавиться от хранящихся единиц.
- Диапазон 2: `MarkupMultiplier` — «бонусный множитель». Он увеличивает `PotentialSalesVolume`, то есть, устанавливая `SellingPrice` ниже `MarketPrice`, можно увеличить объём продаж.
- Диапазон 3: `MaxSalesVolume` = `PotentialSalesVolume` (ни бонуса, ни штрафа). Market TA1 всегда устанавливает `SellingPrice` равной `MarketPrice + MarkupLimit`. Так можно продавать дороже рынка без отрицательного влияния на объём продаж.
- Диапазон 4: `MarkupMultiplier` — штрафной множитель. Подробнее об этом случае далее.

### Увеличение объёма продаж

Чтобы увеличить `MaxSalesVolume`, можно:

- повысить качество материалов и эффективный рейтинг продуктов;
- использовать больше сотрудников Business;
- повысить уровень Advert;
- повысить уровень ABC SalesBots;
- установить цену ниже рыночной. В большинстве случаев так делать НЕ следует. Если это необходимо, скорее всего, стратегия составлена неправильно и её нужно исправить.

## Оптимальная цена продажи

Допустим, мы хотим продать все хранящиеся единицы. Определим:

$$
ExpectedSalesVolume = \frac{StoredUnits}{10}
$$

Предположим, что все хранящиеся единицы можно продать.

$$
MaxSalesVolume = ExpectedSalesVolume
$$

≡

$$
PotentialSalesVolume\ast MarkupMultiplier = ExpectedSalesVolume
$$

≡

$$
PotentialSalesVolume\ast\left(\frac{MarkupLimit}{SellingPrice - MarketPrice}\right)^{2} = ExpectedSalesVolume
$$

≡

$$
\frac{MarkupLimit}{SellingPrice - MarketPrice} = \sqrt{\frac{ExpectedSalesVolume}{PotentialSalesVolume}}
$$

≡

$$
SellingPrice = \frac{MarkupLimit\ast\sqrt{PotentialSalesVolume}}{\sqrt{ExpectedSalesVolume}} + MarketPrice
$$

Есть 2 случая:

- Если `PotentialSalesVolume` > `ExpectedSalesVolume`, можно принять штрафной множитель (`MarkupMultiplier` < 1) и поднять цену выше `MarketPrice + MarkupLimit`.
- Если `PotentialSalesVolume` <= `ExpectedSalesVolume`: `MarketPrice` <= `SellingPrice` <= `MarketPrice + MarkupLimit`.
  - Цена всё ещё выше рыночной.
  - Штрафного множителя нет. В этой ситуации мы и так не можем продать все единицы, поэтому отсутствие штрафа означает, что хуже не становится.

Именно это делает Market-TA2. Он предполагает, что все хранящиеся единицы можно продать без проблем (`PotentialSalesVolume` > `ExpectedSalesVolume`) и что штрафной множитель допустим. В таком случае он считает, что `MaxSalesVolume = ExpectedSalesVolume`, «использует» диапазон 4 из предыдущей части и находит максимально возможную цену. Иначе цена попадает в диапазон 3, и `MaxSalesVolume` не уменьшается.

По этой же причине не стоит уделять внимание Market-TA1. Он просто устанавливает `SellingPrice = MarketPrice + MarkupLimit`. То есть Market-TA1 задаёт `SellingPrice` — «безопасную» цену и гарантирует отсутствие штрафа из-за слишком высокой цены. Однако в большинстве случаев (высококачественные материалы, хорошие продукты, высокий Advert и т. п.) `PotentialSalesVolume` намного выше `ExpectedSalesVolume`. Тогда «безопасная» цена `SellingPrice` от Market-TA1 слишком низкая, и Market-TA2 позволяет найти гораздо более высокую цену `SellingPrice`.

Для формулы Market-TA2 нужен `MarkupLimit`. Для продуктов нужен `ProductMarkup`, чтобы рассчитать `MarkupLimit`, но `ProductMarkup` недоступен через NS API. Есть два решения:

- рассчитать приближённое значение. Описание приведено в предыдущем разделе;
- рассчитать `MarkupLimit` напрямую:
  - установите очень высокую `SellingPrice`. Она должна быть настолько высокой, чтобы все произведённые единицы нельзя было продать (`MaxSalesVolume < ExpectedSalesVolume`). Это заставит игру применить штрафной множитель, содержащий `MarkupLimit`;
  - подождите 1 цикл, чтобы получить `ActualSalesVolume`. Это `product.actualSellAmount` и `material.actualSellAmount`;
  - подставьте `ActualSalesVolume` вместо `ExpectedSalesVolume` в предыдущую формулу: $MarkupLimit = (SellingPrice - MarketPrice)\ast\sqrt{\frac{ActualSalesVolume}{M}}$
  - рассчитайте `ProductMarkup` из `MarkupLimit` и сохраните `ProductMarkup` для дальнейшего использования. `ProductMarkup` никогда не меняется.
