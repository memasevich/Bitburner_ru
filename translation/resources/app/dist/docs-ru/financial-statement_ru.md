# Финансовая отчётность

## Общие активы

`TotalAssets` — это сумма:

- средств;
- для каждого подразделения:
  - `RecoupableValue` подразделения. Это половина суммы:
    - стартовой стоимости отрасли;
    - для каждого города, в который расширилось подразделение (без Sector-12):
      - начальной стоимости офиса;
      - начальной стоимости склада;
  - выходной материал: `material.stored * material.averagePrice`;
  - продукт: `product.stored * product.productionCost`.

За этим значением следят переменные `TotalAssets` и `PreviousTotalAssets`.

Средства увеличиваются или уменьшаются функциями `gainFunds`/`loseFunds` для каждого «действия» (покупка чая, организация вечеринки, покупка улучшения и т. п.). Действия бывают «долгосрочными» (`FundsSourceLongTerm`) и «краткосрочными» (`FundsSourceShortTerm`). Если действие «долгосрочное», оно изменяет `totalAssets`.

```typescript
if (LongTermFundsSources.has(source)) {
  this.totalAssets += amt;
}
this.funds += amt;
```

`FundsSourceLongTerm` и `FundsSourceShortTerm` находятся в `FundsSource.ts`.

## Оценка

Оценка в течение цикла:

- AssetDelta:

$$
AssetDelta = \frac{TotalAssets - PreviousTotalAssets}{10}
$$

- До IPO:
  - если `AssetDelta` больше 0, он используется при расчёте оценки;
  - формула:
    $$Valuation = \left( 10^{10} + \frac{Funds}{3} + AssetDelta\ast 315000 \right)\ast\left( \sqrt[12]{1.1} \right)^{NumberOfOfficesAndWarehouses}$$
  - оценка округляется вниз до ближайшего миллиона;
- После IPO:
  - на `AssetDelta` влияет `DividendRate`:
    $$AssetDelta = AssetDelta\ast(1 - DividendRate)$$
  - формула:

$$
Valuation = (Funds + AssetDelta\ast 85000)\ast\left(\sqrt[12]{1.1}\right)^{NumberOfOfficesAndWarehouses}
$$

- минимальное значение оценки — $10^{10}$;
- оценка умножается на `CorporationValuation`. Во многих BitNodes корпорация ослаблена этим множителем.

Оценка корпорации — среднее значение оценок за последние 10 циклов.

Возможность подкупать фракцию за репутацию открывается, когда оценка корпорации становится не меньше 100e12. Курс обмена: 1e9/reputation.

## Инвестиционное предложение

Всего есть 4 инвестиционных раунда.

У каждого раунда свои `FundingRoundShares` и `FundingRoundMultiplier`.

- $FundingRoundShares = [0.1, 0.35, 0.25, 0.2]$
- $FundingRoundMultiplier = [3, 2, 2, 1.5]$

Формула:

$$
Offer = CorporationValuation\ast FundingRoundShares\ast FundingRoundMultiplier
$$

Анализ:

- Предложение зависит от `Funds`, `AssetDelta` и `NumberOfOfficesAndWarehouses`.
  - `Funds` обычно тратятся на улучшение подразделений.
  - `NumberOfOfficesAndWarehouses` — показатель степени множителя; его можно увеличить созданием [фиктивного подразделения](./miscellany.md). Это простой способ повысить предложение на раунде 3 и далее, когда средств на это уже хватает.
  - `AssetDelta` умножается на 315000, поэтому именно он является главным источником предложения.
- Если предположить, что мы можем продать все произведённые единицы и больше не покупать boost materials, `AssetDelta` равен изменению средств, а изменение средств — прибыли. Поэтому мы стараемся максимально увеличить прибыль.

## Дивиденды и множитель Tribute

На дивиденды отрицательно влияет штрафной множитель `TributeModifier`. `TributeModifier` зависит от `CorporationSoftcap`. В BN3 `CorporationSoftcap` равен 1.

$$
TributeModifier = 1.15 - CorporationSoftcap
$$

`ShadyAccounting` уменьшает `TributeModifier` на 0.05.

`GovernmentPartnership` уменьшает `TributeModifier` на 0.1.

Формула:

$$
TotalDividends = DividendRate\ast(Revenue - Expenses)\ast 10
$$

$$
Dividend = \left(OwnedShares\ast\frac{TotalDividends}{TotalShares}\right)^{1 - TributeModifier}
$$

Нераспределённая прибыль:

$$
RetainedEarning = (1 - DividendRate)\ast(Revenue - Expenses)\ast 10
$$

Дивиденды добавляются к деньгам игрока, а нераспределённая прибыль — к средствам корпорации. Поэтому при увеличении `DividendRate` оценка корпорации уменьшается.

## Акции

Самостоятельное финансирование:

- стоимость — 150b;
- всего акций — 1b;
- первоначально принадлежит игроку — 1b.

Использование стартовых средств:

- не требует денег;
- всего акций — 1.5b;
- первоначально принадлежит игроку — 1b.

В каждом инвестиционном раунде инвесторы получают процент от первоначально принадлежащих игроку акций. Процент каждого раунда указан в `FundingRoundShares`.

Если корпорация создана на собственные средства и вы продаёте должность CEO, для создания следующей корпорации нужно всего 50b.

`TargetSharePrice`:

$$
OwnershipPercentage = \frac{OwnedShares}{TotalShares}
$$

$$
TargetSharePrice = \frac{CorporationValuation*\left(0.5+\sqrt{OwnershipPercentage}\right)}{TotalShares}
$$

При выходе корпорации на биржу начальная цена акции равна `TargetSharePrice`.

Цена акции обновляется в состоянии START.

$$
SharePrice = \begin{cases} SharePrice\ast(1 + Math.random()\ast 0.01), & SharePrice \leq TargetSharePrice \newline SharePrice\ast(1 - Math.random()\ast 0.01), & SharePrice > TargetSharePrice\end{cases}
$$

Минимальная цена акции — 0.01.

Выпуск новых акций:

- максимальное число новых акций — 20% от общего числа акций;
- число выпущенных новых акций должно быть кратно 10 миллионам;
- новая цена акции:

$$
NewOwnershipPercentage = \frac{OwnedShares}{TotalShares+NewShares}
$$

$$
NewSharePrice = \frac{CorporationValuation\ast\left(0.5+\sqrt{NewOwnershipPercentage}\right)}{TotalShares}
$$

- прибыль:

$$
Profit = {NewShares\ast(SharePrice + NewSharePrice)}\ast{0.5}
$$

- прибыль добавляется к средствам корпорации;
- `DefaultCooldown` равен 4 часам;
- время ожидания:

$$
Cooldown = DefaultCooldown\ast\frac{TotalShares}{10^{9}}
$$

- часть новых акций добавляется к `InvestorShares`, остальные — к `IssuedShares`.
  - `MaxPrivateShares`:
    $$MaxPrivateShares = {NewShares}\ast{0.5}\ast\frac{InvestorShares}{TotalShares}$$
  - `PrivateShares` выбирается случайно от 0 до `MaxPrivateShares` и округляется до ближайших 10 миллионов;
  - `InvestorShares`:
    $$InvestorShares = InvestorShares + PrivateShares$$
  - `IssuedShares`:
    $$IssuedShares = IssuedShares + NewShares - PrivateShares$$

Продажа акций:

- нельзя продать все свои акции;
- нельзя продать более $10^{14}$ акций за один раз;
- время ожидания — 1 час;
- проданные акции добавляются к `IssuedShares`.

Обратный выкуп акций:

- можно выкупать только выпущенные акции. Акции, принадлежащие правительству (при использовании стартовых средств) и инвесторам, выкупить нельзя;
- выкупать акции нужно с премией 10% к рыночной цене;
- для выкупа нельзя использовать средства корпорации: нужны собственные деньги;
- нельзя выкупить более $10^{14}$ акций за один раз.

Проданные и выкупленные акции обрабатываются в несколько «итераций».

- Число акций, обрабатываемых за итерацию, задаётся shareSalesUntilPriceUpdate. Значение по умолчанию — $10^6$.
- Цена акции пересчитывается после каждой итерации.

$$
OwnershipPercentage = \frac{OwnedShares - ProcessedShares}{TotalShares}
$$

$$
TargetSharePrice = \frac{CorporationValuation\ast\left(0.5 + \sqrt{OwnershipPercentage}\right)}{TotalShares}
$$

$$
SharePrice = \begin{cases} SharePrice\ast 1.005, SharePrice \leq TargetSharePrice \newline SharePrice\ast 0.995, SharePrice > TargetSharePrice\end{cases}
$$
