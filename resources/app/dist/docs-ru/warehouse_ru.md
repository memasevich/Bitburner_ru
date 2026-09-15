# Склад

После покупки склад начинается с уровня 1. Начальная цена — 5e9.

В следующих формулах `BasePrice` — базовая цена улучшения склада (1e9), а не указанная выше начальная цена.

Формула стоимости улучшения склада немного отличается от формул других улучшений: показатель степени — `CurrentLevel+1`, а не `CurrentLevel`:

$$
UpgradeCost = BasePrice\ast{1.07}^{CurrentLevel + 1}
$$

Стоимость улучшений при переходе с уровня 1 на уровень n:

$$
UpgradeCost_{From\ 1\ to\ n} = \sum_{k = 2}^{n}{BasePrice\ast {1.07}^k}
$$

≡

$$
UpgradeCost_{From\ 1\ to\ n} = BasePrice\ast\left( \frac{{1.07}^{n + 1} - {1.07}^{2}}{0.07} \right)
$$

Стоимость улучшений при переходе с уровня a на уровень b:

$$
UpgradeCost_{From\ a\ to\ b} = BasePrice\ast\left( \frac{{1.07}^{b + 1} - {1.07}^{a + 1}}{0.07} \right)
$$

Максимальный уровень при заданном `MaxCost`:

$$
MaxLevel = (log_{1.07}\left(MaxCost\ast\frac{0.07}{BasePrice} + {1.07}^{CurrentLevel+1} \right)) - 1
$$

Размер склада:

- Множитель улучшений: множитель от Smart Storage.
- Множитель исследований: множитель от исследований.

$$
WarehouseSize = WarehouseLevel\ast 100\ast UpgradeMultiplier\ast ResearchMultiplier
$$
