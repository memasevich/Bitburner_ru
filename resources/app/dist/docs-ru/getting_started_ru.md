# Руководство для начинающих программистов: первые шаги

_Примечание_: [Скрипты](../basic/scripts.md) и стратегии из этого руководства не обязательно оптимальны или всеобъемлющи.
Это руководство рассчитано на игроков с минимальными знаниями программирования и помогает освоиться в Bitburner на ранних этапах игры.

Если игра, особенно её аспекты, связанные с кодом и написанием скриптов, ставит вас в тупик или перегружает, это руководство идеально вам подойдёт!

## Введение

Bitburner — инкрементальная RPG в киберпанк-сеттинге.
Вы будете развиваться, повышая свои [характеристики](../basic/stats.md), зарабатывая деньги и, с практикой, совершенствуя навыки программирования из реального мира.
После выполнения определённых условий вы получите приглашения от внутриигровых [фракций](../basic/factions.md).
Вступление во [фракции](../basic/factions.md) и работа на них откроют доступ к различным [аугментациям](../basic/augmentations.md),
которые покупаются и «устанавливаются», добавляя постоянный бонус к [характеристикам](../basic/stats.md) и другим способностям. Работа с фракциями и установка аугментаций — базовый шаг для продвижения в Bitburner.

В игре есть открытая минималистичная сюжетная линия, которую можно проходить разными способами, добиваясь своих целей.
Поскольку это руководство написано как базовое введение в Bitburner, оно не раскрывает весь доступный объём игры и сюжета.

## Первые шаги

Предположим, что в самом начале игры вы прошли вводное обучение.
В ходе этого обучения вы создали [скрипт](../basic/scripts.md) с именем `n00dles.js` и запустили его на сервере `n00dles`.
Теперь мы остановим этот [скрипт](../basic/scripts.md). Есть два способа сделать это:

- Откройте терминал и введите: `kill n00dles.js`
- Откройте страницу `Active Scripts` (Alt + s) и нажмите кнопку `Kill Script` для `n00dles.js`.

Если вы пропустили вводное обучение, просто не обращайте внимания на предыдущий раздел.
Вместо этого откройте страницу `Hacknet Nodes` (Alt + h) и купите [узел Hacknet](../basic/hacknet_nodes.md), чтобы начать получать пассивный доход.

## Создание первого скрипта

Теперь мы создадим универсальный [скрипт](../basic/scripts.md) для [взлома](../basic/hacking.md), который можно использовать на ранних этапах игры (или на протяжении всей игры, если захотите). Такой скрипт обычно называют «шаблоном раннего взлома» (early hack template), или EHT.

Прежде чем писать [скрипт](../basic/scripts.md), познакомьтесь со следующими понятиями:

- `hacking`
- `security`
- `hack`
- `grow`
- `weaken`
- `brutessh`
- `nuke`

Кратко: у каждого [сервера](../basic/servers.md) есть уровень безопасности, который влияет на сложность взлома.
У каждого [сервера](../basic/servers.md) также есть определённое количество денег и максимальная сумма, которую он может хранить.
[Взлом](../basic/hacking.md) [сервера](../basic/servers.md) крадёт процент денег этого [сервера](../basic/servers.md).
Функция `hack()` используется для взлома [сервера](../basic/servers.md).
Функция `grow()` увеличивает доступную на [сервере](../basic/servers.md) сумму денег.
Функция `weaken()` уменьшает уровень безопасности [сервера](../basic/servers.md).

Теперь перейдём непосредственно к созданию [скрипта](../basic/scripts.md).
Перейдите на свой домашний компьютер и создайте [скрипт](../basic/scripts.md) с именем `early-hack-template.js`, открыв [терминал](../basic/terminal.md) и введя следующие две команды:

    $ home
    $ nano early-hack-template.js

Откроется редактор [скриптов](../basic/scripts.md), в котором можно писать код и создавать [скрипты](../basic/scripts.md).

Введите в редакторе [скриптов](../basic/scripts.md) следующий код:

    /** @param {NS} ns */
    export async function main(ns) {
        // Defines the "target server", which is the server
        // that we're going to hack. In this case, it's "n00dles"
        const target = "n00dles";

        // Defines how much money a server should have before we hack it
        // In this case, it is set to the maximum amount of money.
        const moneyThresh = ns.getServerMaxMoney(target);

        // Defines the minimum security level the target server can
        // have. If the target's security level is higher than this,
        // we'll weaken it before doing anything else
        const securityThresh = ns.getServerMinSecurityLevel(target);

        // If we have the BruteSSH.exe program, use it to open the SSH Port
        // on the target server
        if (ns.fileExists("BruteSSH.exe", "home")) {
            ns.brutessh(target);
        }

        // Get root access to target server
        ns.nuke(target);

        // Infinite loop that continously hacks/grows/weakens the target server
        while(true) {
            if (ns.getServerSecurityLevel(target) > securityThresh) {
                // If the server's security level is above our threshold, weaken it
                await ns.weaken(target);
            } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
                // If the server's money is less than our threshold, grow it
                await ns.grow(target);
            } else {
                // Otherwise, hack it
                await ns.hack(target);
            }
        }
    }

Приведённый выше [скрипт](../basic/scripts.md) содержит комментарии, объясняющие его работу, но всё равно разберём его пошагово.

    const target = "n00dles";

Эта первая команда задаёт строку, содержащую целевой [сервер](../basic/servers.md).
Это [сервер](../basic/servers.md), который мы собираемся [взломать](../basic/hacking.md).
Пока используется значение `"n00dles"`, поскольку это единственный [сервер](../basic/servers.md) с требуемым уровнем взлома `1`.
Если вы хотите [взломать](../basic/hacking.md) другой [сервер](../basic/servers.md), просто измените эту переменную на имя другого [сервера](../basic/servers.md).

    const moneyThresh = ns.getServerMaxMoney(target);

Эта вторая команда задаёт числовое значение, соответствующее минимальной сумме денег, которая должна быть доступна на целевом [сервере](../basic/servers.md), чтобы наш [скрипт](../basic/scripts.md) мог его [взломать](../basic/hacking.md).
Если доступных на целевом [сервере](../basic/servers.md) денег меньше этого значения, наш [скрипт](../basic/scripts.md) будет выполнять `grow()` для [сервера](../basic/servers.md), а не [взламывать](../basic/hacking.md) его.
Это значение равно максимальной сумме денег, которая может быть доступна на [сервере](../basic/servers.md).
Функция `getServerMaxMoney()` используется для получения этого значения.

    const securityThresh = ns.getServerMinSecurityLevel(target);

Эта третья команда задаёт числовое значение, соответствующее минимальному уровню безопасности целевого [сервера](../basic/servers.md).
Если уровень безопасности целевого [сервера](../basic/servers.md) выше этого значения, наш [скрипт](../basic/scripts.md) выполнит `weaken()` для сервера, прежде чем делать что-либо ещё.

    if (ns.fileExists("BruteSSH.exe", "home")) {
        ns.brutessh(target);
    }

    ns.nuke(target);

Этот фрагмент кода используется для получения root-доступа к целевому [серверу](../basic/servers.md).
Для [взлома](../basic/hacking.md) это необходимо.

    while (true) {
        if (ns.getServerSecurityLevel(target) > securityThresh) {
            // If the server's security level is above our threshold, weaken it
            await ns.weaken(target);
        } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
            // Otherwise, if the server's money is less than our threshold, grow it
            await ns.grow(target);
        } else {
            // Otherwise, hack it
            await ns.hack(target);
        }
    }

Это основной раздел, управляющий нашим [скриптом](../basic/scripts.md).
Он задаёт логику [скрипта](../basic/scripts.md) и выполняет операции [взлома](../basic/hacking.md).
`while (true)` создаёт бесконечный цикл, который будет непрерывно выполнять логику [взлома](../basic/hacking.md), пока [скрипт](../basic/scripts.md) не будет остановлен.

Ключевое слово await необходимо для `hack()` / `grow()` / `weaken()`, поскольку эти команды, в отличие от остальных, требуют времени на выполнение.
Если забыть добавить await перед этими командами, возникнет исключение о попытке выполнить несколько действий одновременно: код немедленно завершит вызов функции, не дождавшись окончания операции.
Важно и то, что await можно использовать только в функциях, помеченных как `async` (обратите внимание: `main()` помечена как `async`).

## Запуск скриптов

Теперь мы хотим запустить [скрипт](../basic/scripts.md) для [взлома](../basic/hacking.md), чтобы он начал приносить деньги и опыт.
На домашнем компьютере всего 8GB [RAM](../basic/ram.md), и позже мы будем использовать её для другой цели.
Вместо этого воспользуемся [RAM](../basic/ram.md) других машин.

Откройте `Terminal` и введите следующую команду:

    $ scan-analyze 2

Команда покажет подробную информацию о некоторых [серверах](../basic/servers.md) в сети.

**_Сеть генерируется случайным образом, поэтому у каждого игрока она будет отличаться._**

Вот что показала моя сеть на момент написания руководства:

    [home ~]> scan-analyze 2
    ┕ home
      ┃   Root Access: YES, Required hacking skill: 1
      ┃   Number of open ports required to NUKE: 5
      ┃   RAM: 8.00GB
      ┣ n00dles
      ┃ ┃   Root Access: YES, Required hacking skill: 1
      ┃ ┃   Number of open ports required to NUKE: 0
      ┃ ┃   RAM: 4.00GB
      ┃ ┕ nectar-net
      ┃       Root Access: NO, Required hacking skill: 20
      ┃       Number of open ports required to NUKE: 0
      ┃       RAM: 16.00GB
      ┣ foodnstuff
      ┃ ┃   Root Access: NO, Required hacking skill: 1
      ┃ ┃   Number of open ports required to NUKE: 0
      ┃ ┃   RAM: 16.00GB
      ┃ ┕ zer0
      ┃       Root Access: NO, Required hacking skill: 75
      ┃       Number of open ports required to NUKE: 1
      ┃       RAM: 32.00GB
      ┣ sigma-cosmetics
      ┃ ┃   Root Access: NO, Required hacking skill: 5
      ┃ ┃   Number of open ports required to NUKE: 0
      ┃ ┃   RAM: 16.00GB
      ┃ ┕ max-hardware
      ┃       Root Access: NO, Required hacking skill: 80
      ┃       Number of open ports required to NUKE: 1
      ┃       RAM: 32.00GB
      ┣ joesguns
      ┃     Root Access: NO, Required hacking skill: 10
      ┃     Number of open ports required to NUKE: 0
      ┃     RAM: 16.00GB
      ┣ hong-fang-tea
      ┃     Root Access: NO, Required hacking skill: 30
      ┃     Number of open ports required to NUKE: 0
      ┃     RAM: 16.00GB
      ┣ harakiri-sushi
      ┃     Root Access: NO, Required hacking skill: 40
      ┃     Number of open ports required to NUKE: 0
      ┃     RAM: 16.00GB
      ┕ iron-gym
        ┃   Root Access: NO, Required hacking skill: 100
        ┃   Number of open ports required to NUKE: 1
        ┃   RAM: 32.00GB
        ┕ CSEC
              Root Access: NO, Required hacking skill: 55
              Number of open ports required to NUKE: 1
              RAM: 8.00GB

Запомните следующие серверы:

- `sigma-cosmetics`
- `joesguns`
- `nectar-net`
- `hong-fang-tea`
- `harakiri-sushi`
- `foodnstuff`

На всех этих серверах есть 16GB [RAM](../basic/ram.md).
Кроме того, для получения root-доступа ни на одном из них не требуется открывать порты, чтобы выполнить NUKE.
Иными словами, мы можем получить root-доступ ко всем этим серверам, а затем запускать на них [скрипты](../basic/scripts.md).

Сначала определим, сколько потоков нашего [скрипта](../basic/scripts.md) для [взлома](../basic/hacking.md) мы можем запустить.
(Подробнее о многопоточности см. на странице о [скриптах](../basic/scripts.md).)

Написанный нами [скрипт](../basic/scripts.md) использует 2.6GB [RAM](../basic/ram.md).
Проверить это можно следующей командой в `Terminal`:

    $ mem early-hack-template.js

Это означает, что на сервере с 16GB можно запустить 6 потоков.
Чтобы запустить наши [скрипты](../basic/scripts.md) на всех этих серверах, нужно сделать следующее:

1. С помощью команды `scp` скопировать наш [скрипт](../basic/scripts.md) на каждый сервер.
2. С помощью команды `connect` подключиться к серверу.
3. С помощью команды `run` запустить программу `NUKE.exe` и получить root-доступ.
4. Снова с помощью команды `run` запустить наш [скрипт](../basic/scripts.md).
5. Повторить шаги 2–4 для каждого сервера.

Вот последовательность команд `Terminal`, которую я использовал:

    $ home
    $ scp early-hack-template.js n00dles
    $ scp early-hack-template.js sigma-cosmetics
    $ scp early-hack-template.js joesguns
    $ scp early-hack-template.js nectar-net
    $ scp early-hack-template.js hong-fang-tea
    $ scp early-hack-template.js harakiri-sushi
    $ scp early-hack-template.js foodnstuff
    $ connect n00dles
    $ run NUKE.exe
    $ run early-hack-template.js -t 1
    $ home
    $ connect sigma-cosmetics
    $ run NUKE.exe
    $ run early-hack-template.js -t 6
    $ home
    $ connect joesguns
    $ run NUKE.exe
    $ run early-hack-template.js -t 6
    $ home
    $ connect hong-fang-tea
    $ run NUKE.exe
    $ run early-hack-template.js -t 6
    $ home
    $ connect harakiri-sushi
    $ run NUKE.exe
    $ run early-hack-template.js -t 6
    $ home
    $ connect n00dles
    $ connect nectar-net
    $ run NUKE.exe
    $ run early-hack-template.js -t 6
    $ home
    $ connect foodnstuff
    $ run NUKE.exe
    $ run early-hack-template.js -t 6

Если нажать клавишу `Tab` в середине команды Terminal, игра попытается автоматически дополнить команду.
Например, если ввести `scp ea` и нажать `Tab`, оставшаяся часть имени [скрипта](../basic/scripts.md) должна подставиться автоматически.
Это работает с большинством команд в игре!

Команда `home` подключается к домашнему компьютеру. При запуске наших [скриптов](../basic/scripts.md) командой `run early-hack-template.js -t 6` параметр `-t 6` указывает, что [скрипт](../basic/scripts.md) нужно запустить с 6 потоками.

Обратите внимание: [сервер](../basic/servers.md) `nectar-net` не находится в непосредственной сети домашнего компьютера.
Это означает, что подключиться к нему напрямую с домашнего компьютера нельзя. Его нужно найти внутри сети.
Результаты ранее выполненной команды `scan-analyze 2` покажут, где он находится.
В моём случае к нему можно было подключиться по пути `n00dles` -> `nectar-net`.
Однако у вас путь, скорее всего, будет другим.

После выполнения всех этих команд `Terminal` наши [скрипты](../basic/scripts.md) уже работают.
Со временем они будут приносить деньги и опыт взлома.
Сейчас прирост будет очень медленным, но он увеличится по мере роста навыка взлома и запуска новых [скриптов](../basic/scripts.md).

## Повышение уровня взлома

Кроме `n00dles`, есть множество других [серверов](../basic/servers.md), которые можно взламывать, но для них требуются более высокие уровни взлома.
Поэтому нам следует повысить свой уровень взлома.
Это не только позволит взламывать больше [серверов](../basic/servers.md), но и повысит эффективность [взлома](../basic/hacking.md) `n00dles`.

Самый простой способ потренировать навык взлома — посетить университет Ротмана.
Сделать это можно через вкладку `City` (Alt + w) в меню навигации слева.
Университет Ротмана должен быть обозначен буквой «U» ближе к правому нижнему углу.
Нажмите на «U», чтобы перейти в это место.

Оказавшись в университете Ротмана, вы увидите экран с несколькими вариантами.
Они описывают доступные курсы.
Нажмите первую кнопку с надписью `Study Computer Science (free)`.

После нажатия кнопки вы начнёте учиться и получать опыт взлома.
Пока идёт обучение, нельзя взаимодействовать с другими частями игры, пока вы не нажмёте `Stop taking course` или `Do something else simultaneously`.

Сейчас нам нужен уровень взлома 10.
Для достижения уровня 10 потребуется примерно 174 единицы опыта взлома.
Проверить количество опыта взлома можно во вкладке `Stats` (Alt + c) в меню навигации слева.
Поскольку обучение в университете Ротмана даёт 1 единицу опыта в секунду, это займёт 174 секунды, то есть примерно 3 минуты.
В это время можно заняться чем-нибудь ещё!

## Редактирование скрипта для взлома

Теперь, когда у нас есть уровень взлома 10, мы можем взламывать [сервер](../basic/servers.md) `joesguns`.
Этот [сервер](../basic/servers.md) будет немного прибыльнее, чем `n00dles`.
Поэтому изменим наш [скрипт](../basic/scripts.md) для [взлома](../basic/hacking.md), чтобы он атаковал `joesguns`, а не `n00dles`.

Откройте `Terminal` и отредактируйте [скрипт](../basic/scripts.md) для [взлома](../basic/hacking.md), введя:

    $ home
    $ nano early-hack-template.js

В верхней части [скрипта](../basic/scripts.md) измените переменную `target` на значение `"joesguns"`:

    const target = "joesguns";

Обратите внимание: это **НЕ** повлияет на экземпляры [скрипта](../basic/scripts.md), которые уже запущены.
Изменение затронет только экземпляры [скрипта](../basic/scripts.md), запущенные после этого момента.

## Создание нового скрипта для доступа к облачным серверам

Далее мы создадим [скрипт](../basic/scripts.md), который автоматически покупает доступ к дополнительным облачным [серверам](../basic/servers.md).
Эти облачные [серверы](../basic/servers.md) будут использоваться для запуска множества [скриптов](../basic/scripts.md).
Поначалу запуск этого [скрипта](../basic/scripts.md) будет очень дорогим, поскольку покупка облачного [сервера](../basic/servers.md) стоит денег, но в долгосрочной перспективе затраты окупятся.

Для создания этого [скрипта](../basic/scripts.md) познакомьтесь со следующими функциями; некоторые из них входят в [Cloud API](../../../../../markdown/bitburner.cloud.md):

- `cloud.purchaseServer()`
- `cloud.getServerCost()`
- `cloud.getServerLimit()`
- `cloud.getRamLimit()`
- `getServerMoneyAvailable()`
- `scp()`
- `exec()`

Создайте [скрипт](../basic/scripts.md), открыв `Terminal` и введя:

    $ home
    $ nano purchase-server-8gb.js

Вставьте следующий код в редактор [скриптов](../basic/scripts.md):

    /** @param {NS} ns */
    export async function main(ns) {
        // How much RAM each cloud server will have. In this case, it'll be 8GB.
        const ram = 8;

        // Iterator we'll use for our loop
        let i = ns.cloud.getServerNames().length;

        // Continuously try to purchase cloud servers until we've reached the maximum
        // amount of servers
        while (i < ns.cloud.getServerLimit()) {
            // Check if we have enough money to purchase access to a server
            if (ns.getServerMoneyAvailable("home") > ns.cloud.getServerCost(ram)) {
                // If we have enough money, then:
                //  1. Purchase the server
                //  2. Copy our hacking script onto the newly purchased cloud server
                //  3. Run our hacking script on the newly purchased cloud server with 3 threads
                //  4. Increment our iterator to indicate that we've bought a new server
                const hostname = ns.cloud.purchaseServer("cloud-server-" + i, ram);
                ns.scp("early-hack-template.js", hostname);
                ns.exec("early-hack-template.js", hostname, 3);
                ++i;
            }
            // Make the script wait for a second before looping again.
            // Removing this line will cause an infinite loop and crash the game.
            await ns.sleep(1000);
        }
    }

Этот код с помощью цикла while покупает максимально возможное количество облачных [серверов](../basic/servers.md), используя функцию `purchaseServer()`.
Каждый такой [сервер](../basic/servers.md) будет иметь 8GB [RAM](../basic/ram.md), как задано переменной `ram`.
Обратите внимание: [скрипт](../basic/scripts.md) использует команду `getServerMoneyAvailable("home")`, чтобы получить текущую сумму ваших денег.
Затем это значение проверяется, чтобы определить, можете ли вы позволить себе купить облачный [сервер](../basic/servers.md).

При покупке нового облачного [сервера](../basic/servers.md) скрипт использует функцию `scp()` для копирования нашего [скрипта](../basic/scripts.md) на этот новый [сервер](../basic/servers.md), а затем функцию `exec()` для его запуска на облачном [сервере](../basic/servers.md).

Чтобы запустить этот [скрипт](../basic/scripts.md), откройте `Terminal` и введите:

    $ run purchase-server-8gb.js

Покупка будет продолжаться, пока не будет достигнуто максимальное количество облачных [серверов](../basic/servers.md).
После этого у вас появится множество новых [серверов](../basic/servers.md), на которых будут работать [скрипты](../basic/scripts.md) для [взлома](../basic/hacking.md) [сервера](../basic/servers.md) `joesguns`!

Мы используем так много [скриптов](../basic/scripts.md) для взлома `joesguns`, а не нацеливаем их на другие [серверы](../basic/servers.md), потому что это эффективнее.
На этом этапе игры у нас недостаточно [RAM](../basic/ram.md), чтобы эффективно взламывать несколько целей, а попытка делать это замедлит процесс, поскольку ресурсы будут слишком сильно распылены.
Позже определённо стоит перейти к этому подходу!

Учтите, что покупка облачного [сервера](../basic/servers.md) довольно дорога, а покупка максимального количества облачных [серверов](../basic/servers.md) — ещё дороже.
На момент написания руководства приведённому выше [скрипту](../basic/scripts.md) требовалось $11 million, чтобы завершить покупку всех [серверов](../basic/servers.md) с 8GB.
Поэтому нам нужно найти дополнительные способы заработка, чтобы ускорить процесс!
Они описаны в следующем разделе.

## Дополнительные источники дохода

В этой игре есть и другие способы заработать деньги, помимо [скриптов](../basic/scripts.md) и [взлома](../basic/hacking.md).

## Узлы Hacknet

Если вы прошли вводное обучение, то уже познакомились с этим способом: [узлами Hacknet](../basic/hacknet_nodes.md).
Накопив достаточно денег, можно улучшать свои [узлы Hacknet](../basic/hacknet_nodes.md), увеличивая поток пассивного дохода.
Это полностью необязательно.
Поскольку каждое улучшение [узла Hacknet](../basic/hacknet_nodes.md) окупается за определённое время, покупать его может быть невыгодно.

Тем не менее, [узлы Hacknet](../basic/hacknet_nodes.md) — хороший источник дохода в начале игры, хотя позже их эффективность снижается.
Если вы всё же решите покупать и улучшать [узлы Hacknet](../basic/hacknet_nodes.md), пока советую улучшать только их уровни.
Улучшения [RAM](../basic/ram.md) и ядра лучше оставить на потом.

## Преступления

Сейчас лучший источник дохода — [преступления](../basic/crimes.md).
Они не только приносят большую сумму денег, но и повышают уровень взлома.
Чтобы совершать [преступления](../basic/crimes.md), откройте вкладку `City` (Alt + w).
Затем нажмите ссылку `The Slums`.

В трущобах можно совершать разные [преступления](../basic/crimes.md); каждое при успехе даёт определённые виды опыта и денег.
Подробнее см. в разделе о [преступлениях](../basic/crimes.md).

Успешно совершить преступление удаётся не всегда.
При провале [преступления](../basic/crimes.md) ничего плохого не произойдёт, но вы не получите денег, а количество полученного опыта будет уменьшено.
Повышение характеристик увеличивает шанс успешно совершить [преступление](../basic/crimes.md).

Сейчас лучший вариант — [преступление](../basic/crimes.md) `Rob Store`.
Попытка занимает 60 секунд, при успехе даёт $400k, а также приносит опыт взлома (который сейчас особенно важен).

Также можно использовать [преступление](../basic/crimes.md) `Shoplift`.
Попытка занимает 2 секунды и при успехе даёт $15k.
Это [преступление](../basic/crimes.md) немного проще и выгоднее, чем `Rob Store`, но не даёт опыта взлома.

## Работа в компании

Если вы не хотите совершать [преступления](../basic/crimes.md), есть другой вариант — работать в [компании](../basic/companies.md).
Это будет не так прибыльно, как [преступления](../basic/crimes.md), зато принесёт [репутацию](../basic/reputation.md) [компании](../basic/companies.md).

Откройте вкладку `City` в меню навигации слева, а затем перейдите в `Joe's Guns`.
В `Joe's Guns` появится вариант `Apply to be an Employee`.
Нажмите его, чтобы получить работу.
Затем появится новый вариант с простой надписью `Work`.
Нажмите его, чтобы начать работать.
Работа в `Joe's Guns` приносит $110 в секунду, а также даёт немного опыта каждой характеристики, кроме взлома.

Работа в [компании](../basic/companies.md), как и [преступления](../basic/crimes.md), полностью пассивна.
Можно сосредоточиться на работе, заняться чем-то ещё одновременно или переключаться между этими вариантами.
Если сосредоточиться на работе, взаимодействовать с другими элементами игры будет нельзя.
Если заниматься чем-то ещё одновременно, [репутация](../basic/reputation.md) будет накапливаться медленнее.
Работу можно отменить в любой момент.

Достигнув уровня взлома 75, можно посетить `Carmichael Security` в городе и получить там работу в сфере разработки программного обеспечения.
Эта работа лучше оплачивается и также приносит опыт взлома.

Во вкладке `City` есть ещё много компаний, предлагающих более высокую оплату и дополнительные игровые возможности.
Не бойтесь исследовать их!

## После покупки новых облачных серверов

Когда общая сумма ваших заработков достигнет $11 million, [скрипт](../basic/scripts.md) автоматической покупки облачных [серверов](../basic/servers.md) должен завершить работу.
Это освободит часть [RAM](../basic/ram.md) на домашнем компьютере.
Не будем оставлять эту [RAM](../basic/ram.md) без дела и воспользуемся ею.
Откройте `Terminal` и введите следующие команды:

    $ home
    $ run early-hack-template.js -t 3

## Достижение уровня взлома 50

После достижения уровня взлома 50 открываются две новые важные части игры.

## Создание первой программы: BruteSSH.exe

В меню навигации слева вы увидите вкладку `Create Program` (Alt + p) с красным значком уведомления.
Это означает, что доступны программы для создания.
Откройте вкладку — появится список всех программ, которые можно создать в данный момент.
Наведите указатель на программу, чтобы увидеть краткое описание её назначения.
Чтобы начать создание, просто нажмите на программу.

Сейчас нам нужно создать `BruteSSH.exe`.
Эта программа используется для открытия SSH-портов на [серверах](../basic/servers.md).
Это позволит взламывать больше [серверов](../basic/servers.md), поскольку для получения root-доступа с помощью `NUKE.exe` на многих [серверах](../basic/servers.md) игры требуется открыть определённое количество портов.

Создание программы можно отменить в любой момент: прогресс сохранится, и к нему можно будет вернуться позже.
Создание `BruteSSH.exe` занимает около 10 минут.

## Необязательно: создание AutoLink.exe

На странице `Create Programs` вы увидите ещё одну программу — `AutoLink.exe`.
Если вас не пугает ожидание ещё 10-15 минут, стоит создать и её.
Она значительно упрощает подключение к другим [серверам](../basic/servers.md), но для прохождения игры не обязательна.

## Вступление в первую фракцию: CyberSec

Вскоре после достижения 50-го уровня взлома вы должны были получить сообщение с таким текстом:

    Message received from unknown sender:

    We've been watching you. Your skills are very impressive. But you're wasting your talents.
    If you join us, you can put your skills to good use and change the world for the better.
    If you join us, we can unlock your full potential.

    But first, you must pass our test. Find and install the backdoor on our server.

    -CyberSec

    This message was saved as csec-test.msg onto your home computer.

Если сообщения не было или вы случайно его закрыли, ничего страшного!
Сообщения сохраняются на домашнем компьютере.
Введите следующие команды `Terminal`, чтобы прочитать сообщение:

    $ home
    $ cat csec-test.msg

Это сообщение — часть основной «сюжетной линии» игры.
Его отправила [фракция](../basic/factions.md) `CyberSec`, предлагающая пройти испытание.
Пройти его просто: нужно найти их [сервер](../basic/servers.md), взломать его и установить бэкдор через `Terminal`.
Их [сервер](../basic/servers.md) называется `CSEC`.
Для этого воспользуемся командой `scan-analyze` в Terminal, как делали раньше:

    $ home
    $ scan-analyze 2

Команда покажет сеть всех [серверов](../basic/servers.md), находящихся не более чем в 2 «узлах» от домашнего компьютера.
Помните, что сеть генерируется случайным образом, поэтому у каждого игрока она будет выглядеть по-разному.
Вот соответствующая часть результатов моей команды `scan-analyze`:

    ┕ home
      ┃   Root Access: YES, Required hacking skill: 1
      ┃   Number of open ports required to NUKE: 5
      ┃   RAM: 8.00GB
      ┣ harakiri-sushi
      ┃     Root Access: NO, Required hacking skill: 40
      ┃     Number of open ports required to NUKE: 0
      ┃     RAM: 16.00GB
      ┕ iron-gym
        ┃   Root Access: NO, Required hacking skill: 100
        ┃   Number of open ports required to NUKE: 1
        ┃   RAM: 32.00GB
        ┕ CSEC
                  Root Access: NO, Required hacking skill: 55
              Number of open ports required to NUKE: 1
              RAM: 8.00GB

Из этого следует, что до `CSEC` можно добраться через `iron-gym`:

    $ connect iron-gym
    $ connect CSEC

Если вы ранее создали программу `AutoLink.exe`, подключиться к `CSEC` можно проще.
В результатах `scan-analyze` вы заметите, что имена всех [серверов](../basic/servers.md) отображаются белым цветом и подчёркнуты.
Чтобы подключиться, достаточно нажать на имя любого [сервера](../basic/servers.md).
Просто нажмите `CSEC`!

Обязательно обратите внимание на требуемый уровень взлома для [сервера](../basic/servers.md) `CSEC`.
Это случайное значение от 51 до 60.
Хотя сообщение от CSEC приходит после достижения уровня взлома 50, пройти испытание можно только после того, как уровень взлома станет достаточным для установки бэкдора на их [сервере](../basic/servers.md).

Подключившись к [серверу](../basic/servers.md) `CSEC`, установите на нём бэкдор.
Обратите внимание: для получения root-доступа этому [серверу](../basic/servers.md) требуется один открытый порт.
Открыть SSH-порт можно с помощью ранее созданной программы `BruteSSH.exe`.
В `Terminal`:

    $ run BruteSSH.exe
    $ run NUKE.exe
    $ backdoor

После успешной установки бэкдора вскоре должно прийти приглашение во [фракцию](../basic/factions.md) `CyberSec`.
Примите его.
Если вы случайно отклонили приглашение, ничего страшного.
Откройте вкладку `Factions` (Alt + f) — там должна быть возможность принять приглашение.

Поздравляем!
Вы только что вступили в первую [фракцию](../basic/factions.md).
Пока не беспокойтесь о делах этой [фракции](../basic/factions.md), мы вернёмся к ней позже.

## Использование дополнительных серверов для взлома Joesguns

Получив программу `BruteSSH`, вы сможете получить root-доступ ещё к нескольким [серверам](../basic/servers.md).
У этих [серверов](../basic/servers.md) больше [RAM](../basic/ram.md), которую можно использовать для запуска [скриптов](../basic/scripts.md).
Мы воспользуемся [RAM](../basic/ram.md) этих [серверов](../basic/servers.md), чтобы запускать дополнительные [скрипты](../basic/scripts.md), нацеленные на `joesguns`.

## Копирование скриптов

[Серверы](../basic/servers.md), которые мы будем использовать для запуска [скриптов](../basic/scripts.md):

- `neo-net`
- `zer0`
- `max-hardware`
- `iron-gym`

На всех этих [серверах](../basic/servers.md) есть 32GB [RAM](../basic/ram.md).
Вы можете сами проверить это командой `Terminal` `scan-analyze 3`.
Чтобы скопировать [скрипты](../basic/scripts.md) для [взлома](../basic/hacking.md) на эти [серверы](../basic/servers.md), откройте `Terminal` и выполните:

    $ home
    $ scp early-hack-template.js neo-net
    $ scp early-hack-template.js zer0
    $ scp early-hack-template.js max-hardware
    $ scp early-hack-template.js iron-gym

Поскольку на каждом из этих [серверов](../basic/servers.md) есть 32GB [RAM](../basic/ram.md), мы можем запускать на каждом [сервере](../basic/servers.md) скрипт для [взлома](../basic/hacking.md) с 12 потоками.
К этому моменту вы уже должны уметь подключаться к [серверам](../basic/servers.md).
Найдите и подключитесь к каждому из перечисленных выше [серверов](../basic/servers.md) с помощью команды `scan-analyze 3` в `Terminal`.
Затем выполните следующую команду `Terminal`, чтобы запустить скрипт для [взлома](../basic/hacking.md) с 12 потоками:

    $ run early-hack-template.js -t 12

Если у вас есть программа `AutoLink`, после запуска `scan-analyze` можно просто нажать на имя [сервера](../basic/servers.md), чтобы подключиться к нему.

## Заработок на скриптах и получение репутации в CyberSec

Теперь пришло время немного подождать.
Понадобится время, чтобы ваши [скрипты](../basic/scripts.md) начали приносить деньги.
Помните, что большинство ваших [скриптов](../basic/scripts.md) нацелены на `joesguns`.
Сначала им понадобится время, чтобы с помощью `grow()` и `weaken()` привести [сервер](../basic/servers.md) к нужным значениям, и только после этого они начнут его [взламывать](../basic/hacking.md).
Зато после этого [скрипты](../basic/scripts.md) будут очень прибыльными.

Для ориентира: примерно через два часа после запуска первого [скрипта](../basic/scripts.md) производительность моих [скриптов](../basic/scripts.md) составляла $20k в секунду, а общая заработанная сумма — $70 million.
(Эти показатели можно увидеть на вкладке `Active Scripts`.)

Ещё через 15 минут производительность выросла до $25k в секунду, а [скрипты](../basic/scripts.md) принесли дополнительно $55 million.

Ваши результаты будут зависеть от того, насколько быстро вы зарабатывали деньги с помощью [преступлений](../basic/crimes.md), [работы](../basic/companies.md) и [узлов Hacknet](../basic/hacknet_nodes.md), но эти цифры помогут примерно оценить, сколько могут приносить [скрипты](../basic/scripts.md).

Тем временем мы будем получать репутацию во [фракции](../basic/factions.md) `CyberSec`.
Откройте вкладку `Factions` (Alt + f) в меню навигации слева и выберите `CyberSec`.
В центре страницы должна быть кнопка `Hacking Contracts`.
Нажмите её, чтобы начать получать [репутацию](../basic/reputation.md) во [фракции](../basic/factions.md) `CyberSec` (а также немного опыта взлома).
Чем выше ваш уровень взлома, тем больше [репутации](../basic/reputation.md) вы будете получать.
Работая во [фракции](../basic/factions.md), можно полностью не взаимодействовать с остальной игрой и получать [репутацию](../basic/reputation.md) с максимальной скоростью.
Также можно выбрать одновременное занятие чем-то другим — тогда [репутация](../basic/reputation.md) будет накапливаться немного медленнее, пока вы снова не сосредоточитесь на работе.
Работу во [фракции](../basic/factions.md) можно отменить в любой момент без потери уже полученной [репутации](../basic/reputation.md).

## Покупка улучшений и аугментаций

Как уже говорилось, за 1-2 часа я заработал более $200 million.
Теперь пора потратить эти деньги на постоянные улучшения, которые помогут развиваться!

## Улучшение RAM домашнего компьютера

Сейчас важнее всего улучшить [RAM](../basic/ram.md) домашнего компьютера.
Это позволит запускать больше [скриптов](../basic/scripts.md).

Чтобы улучшить [RAM](../basic/ram.md), откройте вкладку `City` и посетите компанию `Alpha Enterprises`.
Там будет кнопка `Upgrade 'home' RAM (8.00GB -> 16.00GB) - $1.010m`.
Нажмите её, чтобы улучшить [RAM](../basic/ram.md).

Рекомендую увеличить [RAM](../basic/ram.md) домашнего компьютера **как минимум** до 128GB.
Ещё больший объём будет даже лучше.

## Покупка первых аугментаций

Набрав около ~1000 [репутации](../basic/reputation.md) во [фракции](../basic/factions.md) `CyberSec`, вы сможете купить у неё первую [аугментацию](../basic/augmentations.md).

Для этого откройте вкладку `Factions` в меню навигации слева (Alt + f) и выберите `CyberSec`.
Внизу будет кнопка `Purchase Augmentations`.
Откроется страница со всеми доступными у `CyberSec` [аугментациями](../basic/augmentations.md).
Некоторые из них могут быть пока заблокированы.
Чтобы открыть их, потребуется заработать больше [репутации](../basic/reputation.md) во фракции `CyberSec`.

[Аугментации](../basic/augmentations.md) дают постоянные улучшения в виде множителей.
В начале игры они не слишком сильны, поскольку множители невелики.
Однако эффекты [аугментаций](../basic/augmentations.md) перемножаются **между собой**, поэтому по мере установки всё большего количества [аугментаций](../basic/augmentations.md) их влияние заметно возрастает.

Поэтому на раннем этапе я рекомендую вкладывать больше средств в улучшение [RAM](../basic/ram.md) домашнего компьютера, а не в [аугментации](../basic/augmentations.md).
Достаточный объём [RAM](../basic/ram.md) для запуска множества [скриптов](../basic/scripts.md) позволит заработать гораздо больше денег, после чего можно будет вернуться и получить все эти [аугментации](../basic/augmentations.md).

Сейчас советую как минимум купить `Neurotrainer I` [аугментацию](../basic/augmentations.md) у `CyberSec`.
Если есть свободные деньги, также стоит купить `BitWire` и несколько уровней [аугментации](../basic/augmentations.md) `NeuroFlux Governor` (`NFG`).
Помните: при каждой покупке [аугментации](../basic/augmentations.md) **цена следующей покупки увеличивается на 90%**, поэтому сначала покупайте самую дорогую [аугментацию](../basic/augmentations.md).
Не переживайте: после установки [аугментаций](../basic/augmentations.md) их цены сбросятся к исходным значениям.

## Следующие шаги

На этом проходная часть руководства заканчивается!
Продолжайте исследовать возможности игры.
Здесь не охвачено и даже не упомянуто множество функций, а ещё больше возможностей открывается по мере игры!

Также загляните в документацию API и посмотрите, что она предлагает.
Написание [скриптов](../basic/scripts.md) для выполнения и автоматизации различных задач — главный источник удовольствия от игры (по моему мнению)!

Ниже перечислены несколько вещей, которыми можно заняться в ближайшем будущем.

## Установка аугментаций (и сброс)

Если вы купили какие-либо [аугментации](../basic/augmentations.md), их нужно установить, прежде чем вы получите их эффекты.
Установка [аугментаций](../basic/augmentations.md) — это игровая механика «мягкого сброса» или «престижа».

Чтобы установить [аугментации](../basic/augmentations.md), откройте вкладку `Augmentations` (Alt + a) в меню навигации слева.
Вы увидите список всех купленных [аугментаций](../basic/augmentations.md).
Под ним будет кнопка `Install Augmentations`.
Будьте осторожны: после нажатия отменить это действие невозможно (если только не загрузить более раннее сохранение).

## Автоматизация запуска скриптов

После каждой установки [аугментаций](../basic/augmentations.md) все ваши [скрипты](../basic/scripts.md) останавливаются, и их приходится запускать снова.
Делать это после каждой установки [аугментаций](../basic/augmentations.md) очень утомительно, поэтому стоит написать [скрипт](../basic/scripts.md) для автоматизации процесса.
Вот простой пример стартового [скрипта](../basic/scripts.md).
При желании измените его под себя.

    /** @param {NS} ns */
    export async function main(ns) {
        // Array of all servers that don't need any ports opened
        // to gain root access. These have 16 GB of RAM
        const servers0Port = ["sigma-cosmetics",
                            "joesguns",
                            "nectar-net",
                            "hong-fang-tea",
                            "harakiri-sushi"];

        // Array of all servers that only need 1 port opened
        // to gain root access. These have 32 GB of RAM
        const servers1Port = ["neo-net",
                            "zer0",
                            "max-hardware",
                            "iron-gym"];

        // Copy our scripts onto each server that requires 0 ports
        // to gain root access. Then use nuke() to gain admin access and
        // run the scripts.
        for (let i = 0; i < servers0Port.length; ++i) {
            const serv = servers0Port[i];

            ns.scp("early-hack-template.js", serv);
            ns.nuke(serv);
            ns.exec("early-hack-template.js", serv, 6);
        }

        // Wait until we acquire the "BruteSSH.exe" program
        while (!ns.fileExists("BruteSSH.exe")) {
            await ns.sleep(60000);
        }

        // Copy our scripts onto each server that requires 1 port
        // to gain root access. Then use brutessh() and nuke()
        // to gain admin access and run the scripts.
        for (let i = 0; i < servers1Port.length; ++i) {
            const serv = servers1Port[i];

            ns.scp("early-hack-template.js", serv);
            ns.brutessh(serv);
            ns.nuke(serv);
            ns.exec("early-hack-template.js", serv, 12);
        }
    }

## Случайные советы

- В начале игры лучше тратить деньги на улучшение [RAM](../basic/ram.md) и покупку новых облачных [серверов](../basic/servers.md), а не на [аугментации](../basic/augmentations.md)
- Чем больше денег доступно на [сервере](../basic/servers.md), тем эффективнее будут функции `hack()` и `grow()`.
  Это связано с тем, что обе функции используют проценты, а не фиксированные значения.
  `hack()` крадёт процент от общей доступной суммы денег [сервера](../basic/servers.md), а `grow()` увеличивает деньги [сервера](../basic/servers.md) на X%.
- Существует ограничение на количество денег, которое может находиться на [сервере](../basic/servers.md).
  Это значение различается для каждого [сервера](../basic/servers.md).
  Функция `getServerMaxMoney()` сообщает это максимальное значение.
- На этом этапе игры ваши боевые характеристики (сила, защита и т. д.) гораздо менее полезны, чем характеристика взлома.
  Не тратьте слишком много времени или денег на получение опыта боевых характеристик.
- Как правило, целью взлома должен быть [сервер](../basic/servers.md) с самым высоким отношением `MaxMoney / MinimumSecurityLevel`, если его `RequiredHackingLevel` меньше половины вашего уровня взлома.
