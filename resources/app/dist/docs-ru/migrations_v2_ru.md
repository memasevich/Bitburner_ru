# Руководство по переходу на v2.0.0

В v2.0.0 были нарушены ещё несколько API.

## Работа

Система работы была полностью перестроена. Причина этого изменения заключалась в том, что для всех разных типов работы требовались разные кэшированные переменные в основном объекте Player.
Это приводило к множеству ошибок и сбоев. Систему переработали так, чтобы предотвращать ошибки и сделать добавление новых видов работы почти тривиальным.
Все типы работы немедленно выдают награду. Больше не нужно прекращать работу, чтобы зачислить накопленную награду вроде репутации.
Работа на фракцию и в компании больше не ограничена по времени.
Досрочный уход с работы в компании больше не уменьшает прирост репутации вдвое.
Теперь для вступления во фракции компаний требуется 400k репутации (вместо 200k).
Установка backdoor на сервер компании снижает требование к репутации фракции до 300k.
Все типы работы в целом больше не отслеживают накопленные величины вроде опыта и репутации, поскольку они применяются мгновенно.

## commitCrime

Теперь преступление зацикливается: после завершения одного shoplift автоматически начинается следующее, без ввода. Сигнатура не изменилась, но поведение изменилось. Кроме того, появился новый параметр 'focus'.

## getPlayer

Следующие поля, связанные с работой, больше не включаются:

- workChaExpGained
- currentWorkFactionName
- workDexExpGained
- workHackExpGained
- createProgramReqLvl
- workStrExpGained
- companyName
- crimeType
- workRepGained
- workChaExpGainRate
- workType
- workStrExpGainRate
- isWorking
- workRepGainRate
- workDefExpGained
- currentWorkFactionDescription
- workHackExpGainRate
- workAgiExpGainRate
- workDexExpGainRate
- workMoneyGained
- workMoneyLossRate
- workMoneyGainRate
- createProgramName
- workDefExpGainRate
- workAgiExpGained
- className

Причина в том, что все эти поля так или иначе входят в новое поле работы `currentWork`.
Некоторые из этих значений также не имеют смысла.
Ознакомьтесь с новой функцией singularity.getCurrentWork:

Все поля, оканчивающиеся на `_mult`, перенесены в структуру `mults`.
Например: `getPlayer().hacking_skill_mult` => `getPlayer().mults.hacking_skill`

Поле skills перенесено в структуру skills.
Например: `getPlayer().hacking` => `getPlayer().skills.hacking`

Поле exp перенесено в структуру exp.
Например: `getPlayer().hacking_exp` => `getPlayer().exp.hacking`

Поле hp перенесено в структуру hp.
Например: `getPlayer().max_hp` => `getPlayer().hp.max` или `hp.current`

`hasWseAccount`, `hasTixApiAccess`, `has4SData`, `has4SDataTixApi` удалены и заменены аналогичными функциями stock.

## workForCompany

Аргумент 'companyName' теперь обязателен.

## getScriptIncome и getScriptExpGain

Раньше у этих двух функций был вариант вызова без аргументов, который возвращал общую величину для всех скриптов. Из-за этого сигнатура получалась необычной.
Если нужно получить общий доход или опыт для всех скриптов, используйте новые функции getTotalScriptIncome и getTotalScriptExpGain.

## scp

Два последних аргумента scp поменялись местами. Теперь сигнатура выглядит так: scp(files, destination, optional_source)

## Singularity

Функции singularity верхнего уровня некоторое время считались устаревшими в пользу пространства имён singularity.
Это означает, что вызовы вроде 'ns.connect' нужно изменить на 'ns.singularity.connect'.

## stock.buy, stock.sell, stock.short

Эти функции переименованы в stock.buyStock, stock.sellStock и stock.buyShort, поскольку 'buy', 'sell' и 'short' — очень распространённые токены, которые могли бы запутать расчёт RAM.

## corporation.bribe

Возможность давать акции в качестве взятки удалена. Теперь сигнатура выглядит так: bribe(faction, money)
