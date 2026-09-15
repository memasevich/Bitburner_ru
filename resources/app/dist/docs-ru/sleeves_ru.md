# Sleeves

Когда VitaLife представила технологию Persona Core, позволившую оцифровывать сознание и переносить его в другие сосуды, человеческие тела стали не более чем «оболочками» ('sleeves') для человеческого сознания. Поэтому эта технология получила название «технология Sleeve».

Технология Sleeve открывает две разные игровые возможности:

- Duplicate Sleeves;
- [Grafting](grafting.md).

Технология Sleeve разблокируется в [BitNode-10](bitnodes.md).

## Duplicate Sleeves

Duplicate Sleeves — это MK-V Synthoids (синтетические андроиды), в которых скопировано ваше сознание. Иными словами, эти Synthoids содержат идеальную копию вашего разума.

Duplicate Sleeves — по сути, клоны, которых можно использовать для выполнения рабочих действий: например, работы на [Company](../basic/companies.md) или [Faction](../basic/factions.md), а также совершения [Crime](../basic/crimes.md). Выполняя такие задания, Sleeves получают деньги, опыт и [Reputation](../basic/reputation.md).

Sleeves — самостоятельные личности, поэтому у каждого есть собственные опыт и характеристики.

Когда Sleeve получает опыт, этот опыт получают он сам, исходное сознание игрока и все остальные Sleeves игрока.

Duplicate Sleeves **не** сбрасываются при установке [Augmentations](../basic/augmentations.md), но сбрасываются при смене [BitNodes](bitnodes.md).

## Получение Duplicate Sleeves

Получить Duplicate Sleeves можно двумя способами:

- Уничтожить [BitNode-10](bitnodes.md). Каждое завершение даёт ещё один Duplicate Sleeve.
- Купить Duplicate Sleeves у The Covenant. Эта возможность доступна только в [BitNode-10](bitnodes.md). Купленные таким способом Sleeves **постоянны** (сохраняются при переходе между [BitNodes](bitnodes.md)). У The Covenant можно купить до 5 Duplicate Sleeves.

## Synchronization

Synchronization — мера того, насколько ваше сознание согласовано с сознанием Duplicate Sleeves. Это числовое значение от `1` до `100`, влияющее на количество опыта, получаемого Sleeve при выполнении задания.

Увеличить Synchronization можно, назначив Sleeves задание `Synchronize`.

## Sleeve Shock

Sleeve shock показывает, насколько сильно Sleeve травмирован из-за помещения в новое тело. Это числовое значение от `0` до `100`: `100` означает полный шок, а `0` — отсутствие шока. Shock влияет на количество опыта, получаемого Sleeve.

Со временем Sleeve shock постепенно уменьшается. Ускорить это уменьшение можно, назначив Sleeves задание `Shock Recovery`.

Пусть `X` — коэффициент восстановления Sleeve (рассчитывается как `(100 - shock) / 100`), а `Y` — коэффициент синхронизации (рассчитывается как `synchronize / 100`).
Если выполнение задания обычно принесло бы вам `A` опыта, вместо этого Sleeve получит `A * X` опыта.

Исходное сознание игрока получает долю опыта, полученного Sleeve, а именно `A * X * Y`.

Опыт получают и другие Sleeves. Однако на это влияет их собственный shock.
Пусть `Z` — коэффициент восстановления получающего опыт Sleeve. Тогда он получает `A * X * Y * Z` опыта.

## Augmentations

Для Duplicate Sleeves можно покупать [Augmentations](../basic/augmentations.md). Для этого shock Sleeve должен быть равен `0`.
Любая [Augmentation](../basic/augmentations.md), доступная вам в данный момент через фракцию, доступна и вашим Duplicate Sleeves.
Некоторые [Augmentations](../basic/augmentations.md), например NeuroFlux Governor и специфичные для [Bladeburner](bladeburners.md) улучшения, нельзя купить для Duplicate Sleeve.

При покупке [Augmentation](../basic/augmentations.md) для Duplicate Sleeve она устанавливается мгновенно. При этом характеристики Sleeve сразу сбрасываются до 0 — так же, как при обычной установке [Augmentations](../basic/augmentations.md).

Стоимость покупки [Augmentation](../basic/augmentations.md) для Duplicate Sleeve **не** зависит от количества [Augmentations](../basic/augmentations.md), купленных вами, и наоборот.

## Memory

Memory Sleeve определяет, каким будет его Synchronization после сброса при смене [BitNodes](bitnodes.md).
Например, если Memory Sleeve равна `10`, то после смены [BitNodes](bitnodes.md) его Synchronization изначально будет равна `10`, а не 1.

Memory можно увеличить только покупкой улучшений у The Covenant. Как и возможность покупать дополнительные Sleeves, эта функция доступна только в [BitNode-10](bitnodes.md).

Memory — постоянная характеристика, поэтому она никогда не сбрасывается до `1`.
Максимально возможное значение Memory Sleeve — `100`.

Покупка Memory не оказывает мгновенного влияния на Synchronization: Memory влияет только на начальную Synchronization при входе в [BitNode](bitnodes.md).
