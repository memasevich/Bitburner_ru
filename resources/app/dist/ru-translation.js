(() => {
  "use strict";

  // This is a presentation-only translation layer. It deliberately does not
  // touch terminal commands, Netscript, filenames, server names, save data, or
  // text inside the script editor.
  const translations = Object.freeze({
    // Main navigation
    Terminal: "Терминал",
    "Script Editor": "Редактор скриптов",
    "Active Scripts": "Активные скрипты",
    "Create Program": "Создать программу",
    Character: "Персонаж",
    Stats: "Статистика",
    Factions: "Фракции",
    Augmentations: "Аугментации",
    Hacknet: "Hacknet",
    Sleeves: "Клоны",
    City: "Город",
    Travel: "Путешествие",
    Job: "Работа",
    "Stock Market": "Фондовый рынок",
    Bladeburner: "Bladeburner",
    Corporation: "Корпорация",
    Gang: "Банда",
    IPvGO: "IPvGO",
    Darknet: "Даркнет",
    "Dark Net": "Даркнет",
    "Stanek's Gift": "Дар Стэнека",
    Milestones: "Вехи",
    Documentation: "Документация",
    Achievements: "Достижения",
    Options: "Настройки",
    Tutorial: "Обучение",
    Overview: "Обзор",

    // Common buttons and actions
    Save: "Сохранить",
    "Save Game": "Сохранить игру",
    "Export Game": "Экспортировать игру",
    "Import Game": "Импортировать игру",
    "Compare Save": "Сравнить сохранения",
    "Import Save Comparison": "Сравнение импортируемого сохранения",
    "We've found a": "Найдено",
    "that you may want to use instead.": "которое вы, возможно, захотите использовать вместо текущего.",
    "Your current game's data is on the left and the data that will be imported is on the right.":
      "Данные текущей игры находятся слева, а данные импортируемого сохранения — справа.",
    "Please double check everything is fine before proceeding!":
      "Перед продолжением ещё раз проверьте, что всё в порядке!",
    "Delete Game": "Удалить игру",
    "Reset Game": "Сбросить игру",
    "Reset tutorial": "Сбросить обучение",
    "Force kill all active scripts": "Принудительно остановить все активные скрипты",
    "Kill all running scripts": "Остановить все запущенные скрипты",
    Enable: "Включить",
    Cancel: "Отмена",
    Close: "Закрыть",
    Confirm: "Подтвердить",
    "Theme Browser": "Каталог тем",
    "Style Editor": "Редактор стилей",
    "Theme Editor": "Редактор тем",
    Credits: "Авторы",
    "Report a Bug": "Сообщить об ошибке",
    "Open GitHub": "Открыть GitHub",
    Discord: "Discord",
    Reddit: "Reddit",

    // Options sections
    System: "Система",
    Interface: "Интерфейс",
    "Numeric Display": "Отображение чисел",
    Gameplay: "Игровой процесс",
    Misc: "Разное",
    "Remote API": "Удалённый API",
    "Key Binding": "Горячие клавиши",
    "Use engineering notation instead of scientific notation for exponential form":
      "Использовать инженерную, а не научную запись экспоненциальных чисел",
    "Use exponential form instead of suffixed form": "Использовать экспоненциальную запись вместо суффиксов",
    "Hide thousands separator": "Скрыть разделитель тысяч",
    "Fractional Digits": "Десятичные знаки",
    "Hide trailing fractional zeroes for decimals": "Скрыть незначащие нули после запятой",
    "Use GiB instead of GB": "Использовать ГиБ вместо ГБ",
    "Move the currency symbol to be after the value": "Переместить символ валюты после значения",
    "Disable ASCII art": "Отключить ASCII-графику",
    "Disable text effects": "Отключить текстовые эффекты",
    "Disable Overview Progress Bars": "Отключить индикаторы прогресса в обзоре",
    "Show all intermediary time units, even when null.": "Показывать все промежуточные единицы времени, даже нулевые",
    "Timestamp format:": "Формат времени:",
    "Example timestamp:": "Пример времени:",
    "Currency Symbol:": "Символ валюты:",
    "Locale:": "Региональный формат:",

    // Common page headings and labels
    Acquired: "Получено",
    Locked: "Заблокировано",
    Unavailable: "Недоступно",
    Secret: "Секретное",
    "Home Computer": "Домашний компьютер",
    "Home Computer: ": "Домашний компьютер: ",
    "Server Details": "Сведения о сервере",
    "Running Scripts": "Запущенные скрипты",
    "Recent Errors": "Последние ошибки",
    "Recently Killed Scripts": "Недавно остановленные скрипты",
    "Create a new script": "Создать новый скрипт",
    "Edit Script": "Изменить скрипт",
    "Save and Close": "Сохранить и закрыть",
    "Save and Run": "Сохранить и запустить",
    "Back to Terminal": "Вернуться в терминал",
    "No scripts are running": "Запущенных скриптов нет",
    "No files found": "Файлы не найдены",
    "No results found": "Результаты не найдены",
    "Search documentation": "Поиск в документации",
    Search: "Поиск",
    Reset: "Сбросить",
    Buy: "Купить",
    Sell: "Продать",
    Upgrade: "Улучшить",
    Install: "Установить",
    Purchase: "Приобрести",
    Recruit: "Нанять",
    Start: "Начать",
    Stop: "Остановить",
    Continue: "Продолжить",
    "Learn More": "Подробнее",
    "Show More": "Показать больше",
    "Show Less": "Показать меньше",
    "View Documentation": "Открыть документацию",
    "Copy to Clipboard": "Скопировать в буфер обмена",

    // City-map labels are server/location identifiers and must remain literal.
    // The player may need to enter these exact names in terminal commands.

    // Documentation: statistics page. API names remain literal.
    "Search NS API": "Поиск NS API",
    "Below are some": "Ниже приведены некоторые",
    "the stats that will increase with play": "характеристики, которые будут расти по мере игры",
    "reset during augmentation installs": "сбрасываться при установке аугментаций",
    "as you progress through the game.": "по мере прохождения игры.",
    "Your stats can be found in the Overview panel,":
      "Ваши характеристики можно найти на панели «Обзор»,",
    "the Stats subpage": "на странице «Статистика»",
    "the side menu, or with API methods like":
      "в боковом меню или с помощью методов API, таких как",
    "Hack Skill": "Навык взлома",
    "For many aspects of Bitburner,": "Во многих аспектах Bitburner",
    "increasing your Hack skill will be an important goal.":
      "повышение навыка взлома — важная цель.",
    "Primarily affected by the efficiency of": "В первую очередь зависящий от эффективности",
    "your hacking strategies, you will also be offered":
      "ваших стратегий взлома, он также может быть усилен с помощью",
    "that greatly enhance your Hack Skill": "которые значительно повышают ваш навык взлома",
    "level and how effective its results are.": "и эффективность его применения.",
    "Affects:": "Влияет на:",
    "Time needed to execute hack, grow, or weaken and similar methods":
      "Время выполнения взлома, роста, ослабления и аналогичных методов",
    "Your chance to successfully hack a": "Вероятность успешно взломать",
    "Percent of a": "Процент денег",
    "server's money stolen when hacking it": "сервера, украденных при его взломе",
    "Success rate of certain crimes": "Вероятность успеха некоторых преступлений",
    "Time needed to create a Program": "Время создания программы",
    "Company Reputation gain for certain jobs":
      "Прирост репутации компании за некоторые должности",
    "Gain Hack experience by:": "Получение опыта взлома:",
    "Manually hacking servers through the": "Ручной взлом серверов через",
    "Using ns.hack(), ns.grow(), or ns.weaken() through scripts":
      "Использование ns.hack(), ns.grow() или ns.weaken() в скриптах",
    "Committing certain crimes": "Совершение определённых преступлений",
    "Some Company jobs and other types of work":
      "Некоторые должности в компаниях и другие виды работы",
    "Studying at a university": "Обучение в университете",
    "Combat Skills": "Боевые навыки",
    "Strength, Defense, Dexterity, and Agility": "Сила, защита, ловкость и проворство",
    "These represent your physical skill and attributes, including your ability to sneak, inflict or endure damage, and pull off high precision tasks.":
      "Они описывают физические навыки и характеристики, включая способность скрываться, наносить и выдерживать урон и выполнять высокоточные действия.",
    "Similar to your Hack skill, you will be offered":
      "Как и для навыка взлома, вам будут доступны",
    "to multiplicatively enhance your Combat Skills and exp gain.":
      "для мультипликативного усиления боевых навыков и прироста опыта.",
    "HP scales with Defense.": "ОЗ зависит от защиты.",
    "Infiltration and some jobs may cause you to take damage.":
      "При проникновении и на некоторых работах вы можете получить урон.",
    "Faction Reputation gain for Security and": "Прирост репутации фракции за охранную работу и",
    "Gain experience by:": "Получение опыта:",
    "Working out at a gym": "Тренировки в спортзале",
      "Doing Security or": "Выполнение охранной работы или",
    "Working certain jobs at a Company": "Работа на определённых должностях в компании",
    "Rarely as useful as Hacking and Physical skills, Charisma can help get a company job, gain trust, or calm chaos in social situations.":
      "Обаяние редко бывает так же полезно, как взлом и физические навыки, но помогает получить работу в компании, завоевать доверие или успокоить напряжённую ситуацию.",
    "Charisma can also be enhanced with": "Обаяние также можно усилить с помощью",
    "Company Reputation gain for most jobs":
      "Прирост репутации компании за большинство должностей",
    "Other Stats and abilities are available in later stages of the game.":
      "Другие характеристики и способности станут доступны на более поздних этапах игры.",
    "Below are some of the stats that will increase with play and reset during augmentation installs as you progress through the game. Your stats can be found in the Overview panel, the Stats subpage of the side menu, or with API methods like":
      "Ниже приведены некоторые характеристики, которые будут расти по мере игры и сбрасываться при установке аугментаций по мере прохождения игры. Ваши характеристики можно найти на панели «Обзор», на странице «Статистика» в боковом меню или с помощью методов API, таких как",
    "For many aspects of Bitburner, increasing your Hack skill will be an important goal. Primarily affected by the efficiency of your hacking strategies, you will also be offered":
      "Во многих аспектах Bitburner повышение навыка взлома — важная цель. В первую очередь зависящий от эффективности ваших стратегий взлома, он также может быть усилен с помощью",
    "Time needed to execute ": "Время выполнения ",
    " and similar methods": " и аналогичных методов",
    "Success rate of certain ": "Вероятность успеха некоторых ",
    "of certain crimes": "некоторых преступлений",
    "Time needed to create a ": "Время создания ",
    " through scripts": " в скриптах",
    "Committing ": "Совершение ",
    "certain crimes": "определённых преступлений",
    "Carrying out ": "Выполнение ",
    " or doing ": " или выполнение ",
    "Field work for ": "полевых заданий для ",
    " and other types of work": " и другие виды работы",
    "Working certain jobs at a ": "Работа на определённых должностях в ",
    "Doing Field work for a ": "Выполнение полевых заданий для ",
    "Reputation gain when carrying out ": "Прирост репутации за ",
    "Reputation gain for certain jobs": "Прирост репутации за некоторые должности",
    "Reputation gain for Security and ": "Прирост репутации за охранную работу и ",
    "Reputation gain for most jobs": "Прирост репутации за большинство должностей",
    // The documentation splits these phrases around inline links/code.
    // Keep the trimmed variants because translateText preserves surrounding whitespace.
    "Time needed to execute": "Время выполнения",
    "and similar methods": "и аналогичных методов",
    "Success rate of certain": "Вероятность успеха некоторых",
    "Time needed to create a": "Время создания",
    Using: "Использование",
    "through scripts": "в скриптах",
    Committing: "Совершение",
    "Carrying out": "Выполнение",
    "or doing": "или выполнение",
    "Field work for": "полевых заданий для",
    Some: "Некоторые",
    "and other types of work": "и другие виды работы",
    "Working certain jobs at a": "Работа на определённых должностях в",
    "Doing Field work for a": "Выполнение полевых заданий для",
    "Reputation gain when carrying out": "Прирост репутации за",
    "Reputation gain for Security and": "Прирост репутации за охранную работу и",
    "gain when carrying out": "прирост за выполнение",
    "gain for certain jobs": "прирост за определённые должности",
    "gain for Security and": "прирост за охранную работу и",
    "gain for most jobs": "прирост за большинство должностей",
    "jobs and other types of work": "должности и другие виды работы",
    Security: "охранную работу",
    certain: "определённых",
    Doing: "Выполнение",
    or: "или",
    Faction: "Фракция",
    Company: "Компания",
    Program: "Программа",
    crimes: "преступлений",

    // Documentation page: Companies. Inline links and button labels are kept
    // as separate entries so the surrounding prose is translated completely.
    "When exploring the": "Исследуя",
    "you can visit various companies.": "вы можете посещать различные компании.",
    "At these companies, you can apply for jobs.":
      "В этих компаниях можно устроиться на работу.",
    "Working a job lets you earn money, experience, and":
      "Работа позволяет получать деньги и опыт, а также повышать показатель «",
    "with that company.": "» в этой компании.",
    "While working for a company, you can click":
      "Во время работы в компании вы можете нажать",
    "to be able to do things while you continue to work in the background.":
      "чтобы заниматься другими делами, пока вы продолжаете работать в фоновом режиме.",
    "There is a 20% penalty to the related gains.":
      "При этом соответствующие доходы уменьшаются на 20%.",
    "Clicking the": "Нажатие кнопки",
    "button under the overview will return you to the current work.":
      "под панелью «Обзор» вернёт вас к текущей работе.",
    "If you've been hired to do a job you can click that":
      "Если вас наняли на работу, снова нажмите",
    "button again to get a promotion if you meet the requirements.":
      "ещё раз, чтобы получить повышение, если вы соответствуете требованиям.",
    "You can see the requirements by hovering your cursor over the button.":
      "Наведите курсор на кнопку, чтобы увидеть требования.",
    "can see the requirements by hovering your cursor over the button.":
      "можете увидеть требования, наведя курсор на кнопку.",
    "Higher positions give increased rewards.":
      "Более высокие должности дают больше наград.",

    // Documentation navigation.
    Guides: "Руководства",
    "Basic Mechanics": "Основные механики",
    Scripts: "Скрипты",
    Servers: "Серверы",
    RAM: "ОЗУ",
    "Hacknet nodes": "Узлы Hacknet",
    Companies: "Компании",
    Crimes: "Преступления",
    Programs: "Программы",
    "Stock market": "Фондовый рынок",
    "Coding contracts": "Контракты на программирование",
    Autocomplete: "Автодополнение",
    "Advanced Mechanics": "Продвинутые механики",
    "Hacking algorithms": "Алгоритмы взлома",
    "Offline scripts and bonus time": "Офлайн-скрипты и бонусное время",
    "List of factions and their requirements": "Список фракций и требований к ним",
    BitNodes: "BitNodes",
    "BitNode recommendation - Short guide": "Рекомендации по BitNode — краткое руководство",
    "BitNode recommendation - Detailed guide":
      "Рекомендации по BitNode — подробное руководство",
    "BitNode recommendation - Comprehensive guide":
      "Рекомендации по BitNode — подробное руководство",
    "Source-Files": "Исходные файлы",
    "Hacknet Servers": "Серверы Hacknet",
    "Hacknet Nodes": "Узлы Hacknet",
    Gangs: "Банды",
    Intelligence: "Интеллект",
    "Hacknet scripts": "Скрипты Hacknet",
    Grafting: "Пересадка",
    "Darkweb Network": "Сеть Даркнета",
    Corporations: "Корпорации",
    Resources: "Ресурсы",
    Migration: "Перенос",
    "Learn to program": "Учимся программировать",
    "Game frozen or stuck?": "Игра зависла или остановилась?",
    "Tools & Resources": "Инструменты и ресурсы",
    Changelog: "Список изменений",
    "Changelog - Legacy v2": "Список изменений — старая версия v2",
    "Changelog - Legacy v1": "Список изменений — старая версия v1",
    "Changelog - Legacy v0": "Список изменений — старая версия v0",
    "Bitburner v1.0.0 script migration guide":
      "Руководство по переносу скриптов Bitburner v1.0.0",
    "Bitburner v2.0.0 script migration guide":
      "Руководство по переносу скриптов Bitburner v2.0.0",
    "Netscript 2 migration guide (.script to .js)":
      "Руководство по переносу Netscript 2 (.script → .js)",

    // Units and short labels that appear in dynamic summary values.
    "/ sec": "/ сек",

    // Milestones page.
    "Milestones don't reward you for completing them. They are here to guide you if you're lost. They will reset when you install Augmentations.":
      "Вехи не дают наград за выполнение. Они нужны, чтобы направлять вас, если вы заблудились. После установки аугментаций они сбрасываются.",

    // Documentation pages: RAM and Scripts. Inline code and API names are
    // intentionally left untouched; these entries translate only prose.
    "Before you start": "Перед началом",
    "How Scripts work offline": "Как работают скрипты в офлайн-режиме",
    "Identifying a Script": "Идентификация скрипта",
    "Referencing Other Scripts": "Ссылки на другие скрипты",
    "Script Arguments": "Аргументы скрипта",
    "Multithreading scripts": "Многопоточность скриптов",
    "Never-ending scripts": "Бесконечные скрипты",
    "In Bitburner, RAM determines how many":
      "В Bitburner ОЗУ определяет, сколько",
    "can run on a": "могут работать на",
    "Multiplying the number of threads a":
      "Умножение числа потоков, которые использует",
    "uses multiplies its RAM cost, but also multiplies the effectiveness of several functions such as":
      "увеличивает стоимость ОЗУ скрипта, но также увеличивает эффективность таких функций, как",
    "You can purchase more RAM for your home computer from tech vendors.":
      "Вы можете покупать дополнительное ОЗУ для домашнего компьютера у продавцов технологий.",
    "You can also use cloud or hacked servers as a source of additional RAM.":
      "Также можно использовать облачные или взломанные серверы как источник дополнительного ОЗУ.",
    "It is highly recommended that you have a basic familiarity with programming concepts like":
      "Настоятельно рекомендуется иметь базовое представление о таких концепциях программирования, как",
    "before starting to write scripts - but you can start with basic skills and learn with practice.":
      "до начала написания скриптов, но начать можно и с базовых навыков, постепенно обучаясь на практике.",
    "If you'd like to first learn a bit about programming, see":
      "Если вы хотите сначала немного изучить программирование, ознакомьтесь со страницей",
    "Scripts you write in Bitburner are real, working JavaScript and can be used to automate basic hacking logic, and almost any mechanic in the game.":
      "Скрипты, которые вы пишете в Bitburner, являются настоящими рабочими программами на JavaScript. Их можно использовать для автоматизации базовой логики взлома и почти любой игровой механики.",
    "Running any script requires in-game": "Для запуска любого скрипта требуется внутриигровое",
    "with a minimum cost of 1.6 GB per script.":
      "стоимостью не менее 1,6 ГБ на скрипт.",
    "More complex scripts and API functions generally require more":
      "Более сложные скрипты и функции API обычно требуют больше",
    "which you will gain in many ways.": "которое можно получить разными способами.",
    "Scripts can be run on any": "Скрипты можно запускать на любом",
    "you have root access to, but not all servers you find will have useable RAM.":
      "к которому у вас есть root-доступ, но не на всех найденных серверах будет доступно ОЗУ.",
    "Being actual JavaScript, Bitburner also contains some quirks and limitations.":
      "Поскольку Bitburner использует настоящий JavaScript, в нём есть свои особенности и ограничения.",
    "For this reason, it is not possible for Bitburner scripts to run the same way at all times.":
      "Поэтому скрипты Bitburner не могут работать совершенно одинаково во всех ситуациях.",
    "However, you will continue to earn money and exp when Bitburner is not running, though at a slower rate.":
      "Однако деньги и опыт продолжат начисляться даже тогда, когда Bitburner не запущен, хотя и медленнее.",
    "Many commands and functions target other scripts running on the same or a different server.":
      "Многие команды и функции обращаются к другим скриптам, работающим на этом или другом сервере.",
    "Therefore, there must be a way to specify which script you want to affect.":
      "Поэтому нужно указать, на какой именно скрипт должно повлиять действие.",
    "One way to identify a script is by its unique PID (Process IDentifier).":
      "Один из способов идентифицировать скрипт — использовать его уникальный PID (идентификатор процесса).",
    "A PID number is returned from": "Номер PID возвращается методом",
    "and is also shown in the output of": "и также отображается в выводе",
    "A second way to identify scripts is by filename, hostname":
      "Второй способ идентифицировать скрипты — по имени файла, имени хоста",
    "and arguments.": "и аргументам.",
    "However, you will probably run multiple copies of a script with the same arguments, so this method is not necessarily":
      "Однако, скорее всего, вы будете запускать несколько копий скрипта с одинаковыми аргументами, поэтому этот способ не обязательно будет",
    "In case of multiple matches, most functions will return an arbitrary one (typically the oldest).":
      "Если найдено несколько совпадений, большинство функций вернёт произвольный результат, обычно самый старый.",
    "In order to reference a file,": "Чтобы сослаться на файл,",
    "require the full absolute file path.": "требуют указать полный абсолютный путь к файлу.",
    "A full file path must begin with a forward slash (/) if that file is not in the root directory.":
      "Полный путь к файлу должен начинаться с косой черты (/), если файл находится не в корневом каталоге.",
    "See": "См.",
    "for more details.": "для получения дополнительной информации.",
    Server: "Сервер",
    server: "сервер",
    Script: "Скрипт",
    "this page": "этой странице",
    arguments: "аргументы",
    flags: "флаги",
    exact: "точным",
    "How Scripts Work Offline": "Как работают скрипты в офлайн-режиме",
    "[Note --": "[Примечание: ",
    "[See": "[См.",
    "Remember that scripts are identified by their arguments as well as their name, and":
      "Помните, что скрипты определяются не только именем, но и аргументами.",
    "If searching by filename, arguments must be an":
      "При поиске по имени файла аргументы должны быть",
    "absolute file path": "абсолютный путь к файлу",
    "begin with a forward slash (/) if that file is not in the root directory. For details on references in terminal commands, see":
      "начинаться с косой черты (/), если файл находится не в корневом каталоге. Подробнее о ссылках в командах терминала см.",
    must: "должен",
    terminal: "терминал",
    "it you must also add": "для неё нужно также добавить",
    "Examples:": "Примеры:",
    "usage.": "использование.",
    "match - both the order and": "совпадением — важны и порядок, и",
    "of the arguments you supply matter.": "переданных аргументов.",
    "require the": "требуют",
    full: "полный",
    "absolute file path. For example": "абсолютный путь к файлу. Например:",
    "A full file path": "Полный путь к файлу",
    "must begin with a forward slash (/) if that file is not in the root directory. For details on references in terminal commands, see":
      "должен начинаться с косой черты (/), если файл находится не в корневом каталоге. Подробнее о ссылках в командах терминала см.",    "terminal command detailed below": "команду терминала, описанную ниже",
    '"n" threads': 'потоков «n»',
    usage: "использование",
    Examples: "Примеры:",
    Run: "Запуск",
    "single-threaded with no arguments::": "в одном потоке без аргументов:",
    "with 10 threads and no arguments:": "с десятью потоками и без аргументов:",
    "single-threaded with three arguments:": "в одном потоке с тремя аргументами:",
    "with 50 threads and a single argument:": "с пятьюдесятью потоками и одним аргументом:",
    "in order to": "чтобы",
    "argument to the": "аргумент к команде",
    "command as so:": "команды:",
    "When running a script, you can use": "При запуске скрипта можно использовать",
    "which the script's logic can access and act on, allowing flexibility in your script designs.":
      "к которым логика скрипта может обращаться и применять их, что делает конструкции скриптов гибче.",
    "For example allowing you to get different results or attack different targets without re-writing your code:":
      "Например, это позволяет получать разные результаты или атаковать разные цели без переписывания кода:",
    "A script can be run with multiple threads, which we call \"multithreading.\"":
      "Скрипт можно запустить с несколькими потоками — это называется «многопоточностью».",
    "Multithreading affects every call to the": "Многопоточность влияет на каждый вызов",
    "methods, multiplying their effects by the number of threads used.":
      "методов, умножая их эффект на количество используемых потоков.",
    "For example, if a script run with 1 thread is able to hack":
      "Например, если скрипт с одним потоком может украсть при взломе",
    "then running the same script with 5 threads would hack":
      "то при запуске того же скрипта с пятью потоками он украдёт",
    "Scripts will not actually become multithreaded in the real-world sense - Javascript is a \"single-threaded\" coding language.":
      "Скрипты не становятся многопоточными в буквальном смысле: JavaScript — однопоточный язык программирования.",
    "When \"multithreading\" a script, the total":
      "При запуске скрипта с «многопоточностью» общую стоимость",
    "cost can be calculated by simply multiplying the":
      "можно рассчитать простым умножением стоимости",
    "cost of a single instance of your script by the number of threads you will use.":
      "одного экземпляра скрипта на количество используемых потоков.",
    "Sometimes it might be necessary for a script to never end and keep doing a particular task.":
      "Иногда скрипту необходимо работать бесконечно и постоянно выполнять определённую задачу.",
    "In that case you would want to write your script in a never-ending loop, like":
      "В таком случае скрипт следует написать в виде бесконечного цикла, например",
    "However, if you are not careful, this can crash your game.":
      "Однако неосторожность может привести к сбою игры.",
    "If the code inside the loop doesn't": "Если код внутри цикла не использует",
    "for some time, it will never give other scripts and the game itself time to process.":
      "в течение некоторого времени, другие скрипты и сама игра не получат времени на обработку.",
    "To help you find this potential bug, any":
      "Чтобы помочь найти эту потенциальную ошибку, любой",
    "loop without any": "цикл без",
    "statement inside it will be marked.": "оператора внутри будет отмечен.",
    "A red decoration will appear on the left side of the script editor, telling you about the issue.":
      "В левой части редактора скриптов появится красная отметка с информацией о проблеме.",
    "If you are really sure that this is not an oversight, you can suppress the warning using the comment":
      "Если вы уверены, что это не ошибка, предупреждение можно отключить комментарием",
    "directly above the loop.": "непосредственно над циклом.",
    "Working with Scripts in Terminal": "Работа со скриптами в терминале",
    "Here are some": "Вот несколько",
    "commands you will find useful when working with scripts:":
      "команд, которые пригодятся при работе со скриптами:",
    "Prints the logs of the script specified by the name and arguments to":
      "Выводит логи скрипта, указанного по имени и аргументам, в",
    "Remember that scripts are uniquely identified by their arguments as well as their name, and":
      "Помните, что скрипты однозначно определяются не только именем, но и аргументами.",
    "Arguments should be separated by a space.": "Аргументы нужно разделять пробелом.",
    "For example, if you ran a script": "Например, если вы запустили скрипт",
    "with the argument": "с аргументом",
    "then in order to": "то для выполнения команды",
    "it you must also add the": "для него нужно также добавить",
    "as an argument for the": "как аргумент команды",
    "Shows the current server's": "Показывает текущее использование и доступность",
    "usage and availability": "на сервере",
    "Stops a script that is running with the specified PID, or script name and arguments.":
      "Останавливает скрипт по указанному PID либо по имени скрипта и аргументам.",
    "Check how much": "Показывает, сколько",
    "a script requires to run with": "требуется скрипту для запуска с",
    "Create/Edit a script.": "Создаёт или редактирует скрипт.",
    "The name of a script must end with a script extension":
      "Имя скрипта должно заканчиваться расширением скрипта",
    "You can also create a text file with a text extension":
      "Также можно создать текстовый файл с расширением",
    "Displays all scripts that are actively running on the current":
      "Показывает все активно работающие скрипты на текущем",
    "Permanently delete a script from the": "Безвозвратно удаляет скрипт с",
    "Can only be undone with a save import.":
      "Отменить это можно только импортом сохранения.",
    "Run a script with n threads and the specified arguments.":
      "Запускает скрипт с указанным числом потоков и аргументами.",
    "Each argument should be separated by a space.": "Каждый аргумент нужно разделять пробелом.",
    "Both the thread count and arguments are optional.":
      "Количество потоков и аргументы необязательны.",
    "If neither are specified, then the script will be run with a single thread and no arguments.":
      "Если они не указаны, скрипт запустится с одним потоком и без аргументов.",
    "Displays the logs of the script specified by the PID or filename and arguments.":
      "Показывает логи скрипта, указанного по PID либо имени файла и аргументам.",
    "Remember that scripts are identified by their arguments as well as their filename.":
      "Помните, что скрипты определяются не только именем файла, но и аргументами.",
    "Prints all scripts running on the server and their":
      "Выводит все работающие на сервере скрипты и их",
    "Server Statistics": "Характеристики сервера",
    "Identifying Servers": "Идентификация серверов",
    "Cloud Servers": "Облачные серверы",
    "Hackable Servers": "Взламываемые серверы",
    "Server Connections": "Соединения между серверами",
    "In this game, a server refers to a computer that can be connected to, accessed, and manipulated through the":
      "В этой игре сервер — это компьютер, к которому можно подключиться, получить доступ и которым можно управлять через",
    "All servers in the game are connected to each other to form a large, global network.":
      "Все серверы в игре соединены друг с другом, образуя большую глобальную сеть.",
    "To learn about how to navigate this network and connect to other servers, see the":
      "Чтобы узнать, как перемещаться по этой сети и подключаться к другим серверам, см.",
    "Each server has its own statistics, such as":
      "У каждого сервера есть свои характеристики, например",
    "required hacking level, and number of ports required to successfully":
      "необходимый уровень взлома и количество портов, нужных для успешного выполнения",
    "Perhaps the most important property of a server to make note of is its":
      "Пожалуй, самое важное свойство сервера — его",
    "which refers to how much memory is available on that machine.":
      "то есть объём доступной памяти на этой машине.",
    "is important because it is required to run":
      "важно, поскольку оно необходимо для запуска",
    "More": "Больше",
    "allows the user to run more powerful and complicated":
      "позволяет запускать более мощные и сложные",
    "as well as executing scripts with more threads.":
      "а также выполнять скрипты с большим количеством потоков.",
    "commands can be used to check how much":
      "можно использовать, чтобы проверить, сколько",
    "a server has.": "есть на сервере.",
    "Some servers have some randomized statistics, such as":
      "Некоторые характеристики серверов генерируются случайно, например",
    "max Money, or required hacking level.":
      "максимальный запас денег или необходимый уровень взлома.",
    "These statistics are randomly generated from a range of values.":
      "Эти характеристики случайно выбираются из заданного диапазона.",
    "A server is identified by its hostname.":
      "Сервер определяется своим именем хоста.",
    "A hostname is a label assigned to a server.":
      "Имя хоста — это метка, присвоенная серверу.",
    "A hostname will usually give you a general idea of what the server is.":
      "По имени хоста обычно можно понять, что это за сервер.",
    "For example, the company Nova Medical might have a server with the hostname":
      "Например, у компании Nova Medical может быть сервер с именем хоста",
    "Hostnames are unique.": "Имена хостов уникальны.",
    "This means that if one server has the the hostname":
      "Это означает, что если один сервер имеет имя хоста",
    "then no other server in the game can have that that hostname.":
      "то никакой другой сервер в игре не может иметь такое же имя.",
    "There are many": "В игре есть множество",
    "in the game that will require you to target a specific server by hostname.":
      "которые требуют выбрать конкретный сервер по имени хоста.",
    "The player starts with a single server: their home computer.":
      "Игрок начинает с единственного сервера — домашнего компьютера.",
    "This server will have the hostname": "Этот сервер имеет имя хоста",
    "The player's home computer is special for a variety of reasons:":
      "Домашний компьютер игрока особенный по нескольким причинам:",
    "The home computer's": "У домашнего компьютера",
    "can be upgraded.": "можно увеличить.",
    "This can be done by visiting certain locations in the":
      "Это можно сделать, посетив определённые места в разделе",
    "The home computer persists through":
      "Домашний компьютер сохраняется после установки",
    "This means that you will not lose any": "Это означает, что вы не потеряете",
    "upgrades or": "улучшения или",
    "on your home computer when you install":
      "на домашнем компьютере при установке",
    "(you will, however, lose programs and messages on your home computer).":
      "(однако программы и сообщения на домашнем компьютере будут потеряны).",
    "The player can also purchase access to additional cloud servers for their use.":
      "Игрок также может приобрести доступ к дополнительным облачным серверам.",
    "These are virtual machines hosted remotely that the player has access to.":
      "Это виртуальные машины, размещённые удалённо, к которым игрок получает доступ.",
    "The advantage of cloud servers is that, in terms of":
      "Преимущество облачных серверов в том, что с точки зрения",
    "they are cheaper than upgrading your home computer.":
      "они дешевле улучшения домашнего компьютера.",
    "The disadvantage is that access to your cloud servers is lost when you install":
      "Недостаток в том, что доступ к облачным серверам теряется после установки",
    "and you will need to purchase access again.":
      "и его придётся приобретать заново.",
    "Most servers that are not owned by the player can be":
      "Большинство серверов, которыми игрок не владеет, можно",
    "for money and exp.": "ради денег и опыта.",
    "Different servers have different levels of security, but also offer different rewards when being hacked.":
      "У разных серверов разный уровень безопасности и разные награды за взлом.",
    "The servers are in a randomly organized tree-structure.":
      "Серверы расположены в случайно организованной древовидной структуре.",
    "The distance from the home computer to each server is fixed, but the exact route to them is randomized when you install":
      "Расстояние от домашнего компьютера до каждого сервера фиксировано, но точный маршрут к ним меняется после установки",
    "In general, the further away from home computer a server is the higher its statistics are.":
      "В целом чем дальше сервер находится от домашнего компьютера, тем выше его характеристики.",

    // Frequently visible messages
    "Auto-saves are disabled!": "Автосохранение отключено!",
    "Save game (auto-saves are disabled!)": "Сохранить игру (автосохранение отключено!)",
    "Thanks for Playing!": "Спасибо за игру!",
    "No equivalent Steam achievement": "Аналогичного достижения Steam нет",
    "You have no factions": "У вас нет фракций",
    "You have no augmentations": "У вас нет аугментаций",
    "No current work": "Текущей работы нет",
    "Focus": "Сосредоточиться",
    "Stop Focusing": "Перестать концентрироваться",
    "Cancel Work": "Отменить работу",
    "Message received from unknown sender:": "Сообщение от неизвестного отправителя:",
    "The Black Hand": "Чёрная Рука",
    "This message was saved as ": "Это сообщение сохранено как ",
    " onto your home computer.": " на домашнем компьютере.",

    // Additional interface labels and tooltips
    Back: "Назад",
    Details: "Подробности",
    "All Employers": "Все работодатели",
    "Current City": "Текущий город",
    "Time Played": "Время в игре",
    "Augmentations Installed": "Установленные аугментации",
    "Since last Augmentation installation": "С последней установки аугментаций",
    "Since last Bitnode destroyed": "С последнего уничтожения BitNode",
    "Source Files": "Исходные файлы",
    "Source File Levels": "Уровни исходных файлов",
    Exploits: "Эксплойты",
    "Current Game": "Текущая игра",
    "Being Imported": "Импортируется",
    "NEWER save": "БОЛЕЕ НОВОЕ сохранение",
    "Game Identifier": "Идентификатор игры",
    Playtime: "Время игры",
    "Saved On": "Сохранено",
    "Imported value is larger!": "Импортированное значение больше!",
    "Imported value is smaller!": "Импортированное значение меньше!",
    "These are two different games!": "Это две разные игры!",
    "Continue with current save": "Продолжить с текущим сохранением",
    "Import newer save and reload": "Импортировать новое сохранение и перезагрузить игру",
    "expand row": "развернуть строку",
    "expand or collapse character overview": "развернуть или свернуть обзор персонажа",
    "Close window": "Закрыть окно",
    "Re-run script": "Перезапустить скрипт",
    "Stop script": "Остановить скрипт",
    "Forcefully kill all running scripts? This will also save your game and reload the game.":
      "Принудительно остановить все запущенные скрипты? Игра также будет сохранена и перезагружена.",
    KILL: "ОСТАНОВИТЬ",
    "Enter Solution here": "Введите решение здесь",
    "Copied!": "Скопировано!",
    "This will permanently delete your local save game. Did you export it before?":
      "Локальное сохранение игры будет удалено навсегда. Вы экспортировали его перед удалением?",
    "Could not delete game: %o": "Не удалось удалить игру: %o",
    "Perform a Soft Reset - similar to installing Augmentations, even if you have none.":
      "Выполнить мягкий сброс — аналог установки аугментаций, даже если у вас их нет.",
    "RECOVERY MODE ACTIVATED": "РЕЖИМ ВОССТАНОВЛЕНИЯ АКТИВИРОВАН",
    "Export save file": "Экспортировать файл сохранения",
    "Disable the recovery mode and attempt to head back to the terminal page. This may or may not work. Ensure you saved the recovery file.":
      "Отключить режим восстановления и попытаться вернуться на страницу терминала. Это может сработать, а может и нет. Убедитесь, что файл восстановления сохранён.",
    "Stack Trace": "Трассировка стека",
    "Submitting an issue to GitHub really helps us improve the game!":
      "Сообщение об ошибке на GitHub действительно помогает нам улучшать игру!",
    "There is no save data, but the recovery mode was activated.": "Данные сохранения отсутствуют, но режим восстановления был активирован.",
    "Progress:": "Прогресс:",
    "Remaining:": "Осталось:",
    "Reputation:": "Репутация:",
    "Favor:": "Благосклонность:",
    "Total Cost": "Общая стоимость",
    "Stop committing crime": "Прекратить совершать преступление",
    "Stop training at gym": "Прекратить тренировку в спортзале",
    "Stop taking course": "Прекратить обучение на курсе",
    "Stop creating program": "Прекратить создание программы",
    "Your work will be saved and you can return to complete the program later.":
      "Ваш прогресс будет сохранён, и вы сможете вернуться и завершить создание программы позже.",
    "Stop grafting": "Прекратить вживление",
    "Back to Factions": "Вернуться к фракциям",
    "Stop Faction work": "Прекратить работу на фракцию",
    "Company Reputation": "Репутация в компании",
    "Stop working": "Прекратить работу",
    "Do something else simultaneously": "Заняться чем-нибудь ещё одновременно",
    "Strength Exp": "Опыт силы",
    "Defense Exp": "Опыт защиты",
    "Dexterity Exp": "Опыт ловкости",
    "Agility Exp": "Опыт проворства",
    "Charisma Exp": "Опыт обаяния",
    "Since last Augmentation installation": "С последней установки аугментаций",

    // Options and editor
    "No script will be auto-launched": "Скрипт не будет запущен автоматически",
    "Original Code and Concept": "Авторская идея и исходный код",
    "Lead Developers": "Ведущие разработчики",
    "Current Maintainers": "Текущие сопровождающие",
    "Recent patch contributors:": "Авторы последних изменений:",
    "Export your game to a text file.": "Экспортировать игру в текстовый файл.",
    "Sync Steam achievements": "Синхронизировать достижения Steam",
    "Head to the theme browser to see a collection of prebuilt themes.":
      "Откройте каталог тем, чтобы посмотреть коллекцию готовых тем.",
    "Start a GitHub issue to help the devs find bugs!":
      "Создайте issue на GitHub, чтобы помочь разработчикам находить ошибки!",
    "Restart the tutorial? Running scripts will be killed.":
      "Перезапустить обучение? Запущенные скрипты будут остановлены.",
    "Suppress story messages": "Скрывать сюжетные сообщения",
    "Suppress faction invites": "Скрывать приглашения во фракции",
    "Suppress travel confirmations": "Скрывать подтверждения путешествия",
    "Suppress augmentations confirmation": "Скрывать подтверждение установки аугментаций",
    "If this is set, the confirmation message before buying augmentation will not show up.":
      "Если включено, подтверждение перед покупкой аугментации показываться не будет.",
    "Suppress TIX messages": "Скрывать сообщения TIX",
    "If this is set, the stock market will never create any popup.":
      "Если включено, фондовый рынок не будет показывать всплывающие окна.",
    "Suppress error modals": "Скрывать окна ошибок",
    "Suppress bladeburner popup": "Скрывать окно Bladeburner",
    "If this is set, progress bars in the character overview will be hidden.":
      "Если включено, индикаторы прогресса в обзоре персонажа будут скрыты.",
    "Show all intermediary time units, even when null.": "Показывать все промежуточные единицы времени, даже если они равны нулю.",
    "Example: 1 hour 13 seconds becomes 1 hour 0 minutes 13 seconds.":
      "Пример: 1 час 13 секунд превращается в 1 час 0 минут 13 секунд.",
    "Common hotkeys": "Основные горячие клавиши",
    "Bash hotkeys": "Горячие клавиши Bash",
    "Endgame content": "Контент конца игры",
    "Press the key you would like to use": "Нажмите клавишу, которую хотите использовать",
    "No conflicts detected": "Конфликтов не обнаружено",
    "How to use": "Как использовать",
    "Disable hotkeys": "Отключить горячие клавиши",
    "Enable bash hotkeys": "Включить горячие клавиши Bash",
    "Enable terminal history search with arrow keys": "Включить поиск по истории терминала стрелками",
    "Enable Vim as default editor": "Использовать Vim как редактор по умолчанию",
    "If this is set, thousands separators will not be displayed.": "Если включено, разделители тысяч отображаться не будут.",
    "The default number of decimal places to display on small numbers. Default value: 3":
      "Количество знаков после запятой по умолчанию для небольших чисел. Значение по умолчанию: 3",
    "If this is set, zeroes at the end of a fractional part of a decimal will not be displayed.":
      "Если включено, нули в конце дробной части отображаться не будут.",
    "If this is set all references to memory will use GiB instead of GB, in accordance with IEC 60027-2.":
      "Если включено, память будет указываться в ГиБ вместо ГБ согласно IEC 60027-2.",
    "Invalid reconnection delay": "Недопустимая задержка переподключения",
    "Use wss": "Использовать wss",
    "Use wss instead of ws when connecting to RFA clients.": "Использовать wss вместо ws при подключении к клиентам RFA.",
    "Remote API status": "Состояние удалённого API",
    "Autoexec Script + Args": "Скрипт автозапуска + аргументы",
    "Recently killed scripts size": "Количество недавно остановленных скриптов",
    "The maximum number of recently killed scripts the game will keep.":
      "Максимальное количество недавно остановленных скриптов, которые будет хранить игра.",
    "Netscript log size": "Размер журнала Netscript",
    "Netscript port size": "Размер порта Netscript",
    "Terminal capacity": "Размер истории терминала",
    "Suppress Auto-Save Game Toast": "Скрывать уведомление об автосохранении",
    "If this is set, there will be no \"Game Saved!\" toast appearing after an auto-save.":
      "Если включено, после автосохранения уведомление «Игра сохранена!» показываться не будет.",
    "Game Saved!": "Игра сохранена!",
    "Suppress Auto-Save Disabled Warning": "Скрывать предупреждение об отключённом автосохранении",
    "Save game on file save": "Сохранять игру при сохранении файла",
    "Save your game any time a file is saved in the script editor.": "Сохранять игру при каждом сохранении файла в редакторе скриптов.",
    "Exclude Running Scripts from Save": "Не включать запущенные скрипты в сохранение",

    // Script editor interface (code itself remains protected)
    "No open files": "Нет открытых файлов",
    "Theme:": "Тема:",
    "Custom theme": "Пользовательская тема",
    "Indent using spaces:": "Отступы пробелами:",
    "Tab size:": "Размер табуляции:",
    "Auto-detect indentation:": "Определять отступы автоматически:",
    "Word wrap:": "Перенос строк:",
    Off: "Выкл.",
    On: "Вкл.",
    Bounded: "Ограниченный",
    "Word Wrap Column": "Столбец переноса строк",
    "Font family:": "Семейство шрифта:",
    "Font size:": "Размер шрифта:",
    "Enable font ligatures:": "Включить лигатуры шрифта:",
    "Cursor style:": "Стиль курсора:",
    "Cursor blinking:": "Мигание курсора:",
    "Run Beautify on Save:": "Форматировать код при сохранении:",
    "Enable Sticky Scroll:": "Включить закрепление заголовков:",
    "Enable Minimap:": "Включить мини-карту:",
    "Autosave on focus change:": "Автосохранение при смене фокуса:",
    "Syntax Error": "Синтаксическая ошибка",
    "Import Error": "Ошибка импорта",
    "Invalid server": "Недопустимый сервер",
    "Unknown Error": "Неизвестная ошибка",
    "Cannot find module": "Модуль не найден",
    "Don't change the script name for now.": "Пока не меняйте имя скрипта.",
    "Please copy and paste the code from the tutorial!": "Скопируйте и вставьте код из обучения!",
    "Do you want to overwrite the current editor content with the contents of":
      "Перезаписать текущее содержимое редактора содержимым файла",
    "on the server? This cannot be undone.": "на сервере? Это действие нельзя отменить.",
    "Search Open Scripts": "Поиск среди открытых скриптов",
    "Customize Editor theme": "Настроить тему редактора",
    "Hover over input boxes for more information": "Наведите курсор на поля ввода для получения дополнительной информации",
    "Use light theme as base": "Использовать светлую тему как основу",
    "Background color": "Цвет фона",
    "Current line and minimap background color": "Цвет фона текущей строки и мини-карты",
    "Base text color": "Основной цвет текста",
    "Popup background color": "Цвет фона всплывающего окна",
    "Background color for selected item in popup": "Цвет фона выбранного элемента во всплывающем окне",
    "Popup border color": "Цвет границы всплывающего окна",
    "Background color of highlighted text": "Цвет фона выделенного текста",
    Syntax: "Синтаксис",
    "Numbers, function names, and other key vars": "Числа, имена функций и другие ключевые переменные",
    Keywords: "Ключевые слова",
    Strings: "Строки",
    "Regexp literals as well as escapes within strings": "Литералы регулярных выражений и escape-последовательности в строках",
    Constants: "Константы",
    Entities: "Сущности",
    "Netscript functions and constructors": "Функции и конструкторы Netscript",
    Errors: "Ошибки",
    Comments: "Комментарии",
    "import / export theme": "импортировать / экспортировать тему",
    "Static RAM costs of individual functions used by this script.":
      "Статическая стоимость ОЗУ отдельных функций, используемых этим скриптом.",
    "go to next tab": "перейти на следующую вкладку",
    "go to previous tab": "перейти на предыдущую вкладку",
    "An error occurred while loading monaco-vim:": "При загрузке monaco-vim произошла ошибка:",
    "You saved a file on a non-home server!": "Вы сохранили файл не на домашнем сервере!",

    // Documentation page: Augmentations. Keep inline links, menu identifiers,
    // and API/code names intact while translating the explanatory text around them.
    "Advances in science and medicine have led to powerful new technologies that allow people to augment themselves beyond normal human capabilities.":
      "Развитие науки и медицины привело к появлению мощных новых технологий, позволяющих людям выходить за пределы обычных человеческих возможностей с помощью аугментаций.",
    "There are many different types of Augmentations, ranging from cybernetic to genetic to biological.":
      "Существует множество разных типов аугментаций: от кибернетических до генетических и биологических.",
    "Acquiring these Augmentations enhances the user's physical and mental faculties.":
      "Получение этих аугментаций улучшает физические и умственные способности пользователя.",
    "Augmentations provide persistent upgrades in the form of multipliers.":
      "Аугментации дают постоянные улучшения в виде множителей.",
    "These multipliers apply to a wide variety of things such as stats, experience gain, and ":
      "Эти множители влияют на самые разные параметры, например характеристики, получение опыта и ",
    "These multipliers apply to a wide variety of things such as stats, experience gain, and":
      "Эти множители влияют на самые разные параметры, например характеристики, получение опыта и",
    ", just to name a few. The effects of Augmentations stack multiplicatively.":
      ", если назвать лишь несколько примеров. Эффекты аугментаций складываются мультипликативно.",
    ", just to name a few. The effects of Augmentations stack multiplicatively. Your multipliers can be viewed in the":
      ", если назвать лишь несколько примеров. Эффекты аугментаций складываются мультипликативно. Свои множители можно посмотреть на страницах",
    "Your multipliers can be viewed in the ": "Свои множители можно посмотреть на страницах ",
    " pages.": " страницах.",
    "How to acquire Augmentations": "Как получить аугментации",
    "Because of how powerful Augmentations are, the technology behind them is kept private and secret by the corporations and organizations that create them.":
      "Из-за высокой мощности аугментаций корпорации и организации, создающие их, держат лежащие в их основе технологии в тайне.",
    "Therefore, the only way for the player to obtain Augmentations is through ":
      "Поэтому единственный способ получить аугментации — через ",
    "Therefore, the only way for the player to obtain Augmentations is through":
      "Поэтому единственный способ получить аугментации — через",
    "After joining a ": "После вступления во ",
    ". After joining a": ". После вступления во",
    " and earning enough ": " и получения достаточного количества ",
    "and earning enough": "и получения достаточного количества",
    " in it, you will be able to purchase its Augmentations.":
      " в ней вы сможете покупать её аугментации.",
    "in it, you will be able to purchase its Augmentations. Different":
      "в ней вы сможете покупать её аугментации. Разные",
    "Different ": "Разные ",
    " offer different Augmentations.": " предлагают разные аугментации.",
    "offer different Augmentations.": "предлагают разные аугментации.",
    "Augmentations must be purchased in order to be installed, and they are fairly expensive.":
      "Аугментации нужно купить перед установкой, и стоят они довольно дорого.",
    "They also require ": "Кроме того, для них требуется ",
    " with a ": " с ",    " before they will let you purchase their Augmentations.":
      ", прежде чем вам разрешат покупать их аугментации.",
    "before they will let you purchase their Augmentations.":
      ", прежде чем вам разрешат покупать их аугментации.",
    "Installing Augmentations": "Установка аугментаций",
    "You will not gain the benefits of your purchased Augmentations until you install them.":
      "Вы не получите преимуществ купленных аугментаций, пока не установите их.",
    "You can choose to install Augmentations through the ":
      "Установить аугментации можно через вкладку меню ",
    "You can choose to install Augmentations through the":
      "Установить аугментации можно через вкладку меню",
    "menu tab, found under ": " , расположенную в разделе ",
    "menu tab, found under": " , расположенную в разделе",
    "Unfortunately, installing Augmentations has side effects.":
      "К сожалению, установка аугментаций имеет побочные эффекты.",
    "You will lose most of the progress you've made, including your skills, stats, and money.":
      "Вы потеряете большую часть достигнутого прогресса, включая навыки, характеристики и деньги.",
    "You will have to start over, but you will have all of the Augmentations you have installed to help you progress.":
      "Вам придётся начать заново, но все установленные аугментации останутся и помогут развиваться дальше.",
    "This is the game's \"soft reset\" or \"prestige\" mechanic.":
      "Это игровая механика «мягкого сброса» или «престижа».",
    "To summarize, here is a list of everything you will ":
      "Итак, вот список всего, что вы ",
    "To summarize, here is a list of everything you will":
      "Итак, вот список всего, что вы",
    LOSE: "ПОТЕРЯЕТЕ",
    "when you install an Augmentation:": "при установке аугментации:",
    "Stats/Skills": "Характеристики/навыки",
    "Scripts on all servers EXCEPT your home computer":
      "Скрипты на всех серверах, кроме домашнего компьютера",
    servers: "серверов",
    "Cloud servers": "Облачные серверы",
    Favor: "Благосклонность",
    "Jobs and ": "Работа и ",
    memberships: "членство",
    Stocks: "Акции",
    "Cloud ": "Облачные ",
    "TOR router": "Маршрутизатор TOR",
    "Here is everything you will ": "Вот список всего, что вы ",
    "Every Augmentation you have previously installed":
      "Все ранее установленные аугментации",
    "Scripts on your home computer": "Скрипты на домашнем компьютере",
    "Core Upgrades on your home computer": "улучшения ядер на домашнем компьютере",
    "World Stock Exchange account": "аккаунт Всемирной фондовой биржи",
    "TIX API": "TIX API",
    "Access": "доступ",
    "Purchasing Multiple Augmentations": "Покупка нескольких аугментаций",
    "You do not have to install an Augmentation right after you purchase it.":
      "Необязательно устанавливать аугментацию сразу после покупки.",
    "You can purchase as many Augmentations as you'd like before you choose to install them.":
      "Можно купить любое количество аугментаций, а затем установить их одновременно.",
    "When you install your purchased Augmentations they will ":
      "После установки купленных аугментаций они ",
    "When you install your purchased Augmentations they will":
      "После установки купленных аугментаций они",
    "get installed at once.": "установятся одновременно.",
    "There are a few drawbacks to this, however.": "Однако у этого есть несколько недостатков.",
    "First, obviously, you won't gain the benefits of your purchased Augmentations until after you install them.":
      "Во-первых, до установки вы не получите преимуществ купленных аугментаций.",
    "Second, purchasing multiple Augmentations before installing them will cause the Augmentations to get progressively more expensive.":
      "Во-вторых, покупка нескольких аугментаций до установки будет постепенно увеличивать их стоимость.",
    "When you purchase an Augmentation, the price of purchasing another Augmentation doubles.":
      "После покупки аугментации цена следующей аугментации удваивается.",
    "This multiplier stacks for each Augmentation you purchase.":
      "Этот множитель накапливается для каждой купленной аугментации.",
    "Once you install your purchased Augmentations, their costs are reset back to the original prices.":
      "После установки купленных аугментаций их стоимость возвращается к исходной.",
    "You can only purchase each augmentation once, with the exception of ":
      "Каждую аугментацию можно купить только один раз, кроме ",
    "You can only purchase each augmentation once, with the exception of":
      "Каждую аугментацию можно купить только один раз, кроме",

    // Augmentation, BitNode and progress screens
    "It's always a good idea to backup/export your save!": "Всегда полезно создать резервную копию или экспортировать сохранение!",
    "No Augmentations have been purchased yet": "Аугментации ещё не куплены",
    "No Augmentations have been installed yet": "Аугментации ещё не установлены",
    "Installed Augmentations": "Установленные аугментации",
    "Sorts the Augmentations alphabetically in numeral order": "Сортировать аугментации по алфавиту и числовому порядку",
    "All multipliers decreased by:": "Все множители уменьшены на:",
    "Travel to the BitVerse": "Переместиться в BitVerse",
    "Override active level of Source-File:": "Переопределить активный уровень исходного файла:",
    "Remove all overridden SF": "Удалить все переопределения исходных файлов",
    "No overridden SF": "Нет переопределённых исходных файлов",
    "Set active level for all chosen SF": "Установить активный уровень для всех выбранных исходных файлов",
    "Set all SF": "Установить все исходные файлы",
    "Advanced options": "Расширенные настройки",
    "Restrict max RAM and core of Home PC": "Ограничить максимальный объём ОЗУ и число ядер домашнего ПК",
    "The home computer's maximum RAM and number of cores are lower than normal. Max RAM: 128GB. Max core: 1.":
      "Максимальный объём ОЗУ и число ядер домашнего компьютера ниже обычного. Максимум ОЗУ: 128 ГБ. Максимум ядер: 1.",
    "Disable Gang": "Отключить банду",
    "Disable Corporation": "Отключить корпорацию",
    "Disable Bladeburner": "Отключить Bladeburner",
    "Disable 4S Market Data": "Отключить данные рынка 4S",
    "Disable Hacknet Server": "Отключить сервер Hacknet",
    "Disable Sleeves' experience and augmentation": "Отключить получение опыта и установку аугментаций клонами",
    "Sleeves cannot gain experience or install augmentations": "Клоны не могут получать опыт или устанавливать аугментации",
    "Daedalus Augs Requirement": "Требование аугментаций Daedalus",
    "Coding Contract Reward": "Награда за контракт на программирование",
    "Class/Gym Exp": "Опыт занятий/спортзала",
    "Money Cost": "Стоимость в деньгах",
    "Reputation Cost": "Стоимость в репутации",
    "Work Money": "Деньги за работу",
    "Work Reputation": "Репутация за работу",
    "Work Exp": "Опыт за работу",
    "Market Data Cost": "Стоимость данных рынка",
    "Market Data API Cost": "Стоимость API данных рынка",
    "Favor to Donate": "Благосклонность для пожертвования",
    "Passive Rep": "Пассивная репутация",
    "Crime Exp": "Опыт преступлений",
    "Crime Success Rate": "Вероятность успеха преступления",
    "Server Growth Rate": "Скорость роста сервера",
    "Server Max Money": "Максимум денег сервера",
    "Server Starting Money": "Начальные деньги сервера",
    "Server Starting Security": "Начальная безопасность сервера",
    "Server Weaken Rate": "Скорость ослабления сервера",
    "Money Gained From Manual Hack": "Деньги за ручной взлом",
    "Stolen Money From Hack": "Украденные при взломе деньги",
    "Money Gained From Script Hack": "Деньги за взлом скриптом",
    "Base Cost": "Базовая стоимость",
    "Softcap Cost": "Стоимость после мягкого ограничения",
    "Server Limit": "Лимит серверов",
    "Max RAM": "Максимум ОЗУ",
    "Home RAM Cost": "Стоимость ОЗУ домашнего ПК",
    "Cloud Servers": "Облачные серверы",
    "Infiltration Money": "Деньги за проникновение",
    "Infiltration Reputation": "Репутация за проникновение",
    "Rank Gain": "Получение ранга",
    "Skill Cost": "Стоимость навыка",
    "Gift Power": "Сила дара",
    "Base Size Modifier": "Модификатор базового размера",
    "Gang Softcap": "Мягкое ограничение банды",
    "Unique Augmentations": "Уникальные аугментации",
    "Bitnode Multipliers": "Множители BitNode",
    "Corporation Softcap": "Мягкое ограничение корпорации",
    "Division limit": "Лимит подразделений",
    "IPvGO Node Power bonus": "Бонус силы узла IPvGO",
    "IPvGO Subnet Takeover": "Захват подсети IPvGO",
    "Short guide": "Краткое руководство",
    "Running full scan...": "Выполняется полное сканирование...",
    "Hanging connection located, disconnecting...": "Обнаружено зависшее соединение, отключение...",
    "Dumping core...": "Создание дампа памяти...",
    "Failsafe initiated...": "Запущен аварийный режим...",
    "WARNING: changing the level will restart the Operation": "ВНИМАНИЕ: изменение уровня перезапустит операцию",

    // Bladeburner
    General: "Общее",
    Contracts: "Контракты",
    Operations: "Операции",
    BlackOps: "Чёрные операции",
    Skills: "Навыки",
    "Automatically increase operation level when possible": "Автоматически повышать уровень операции, когда это возможно",
    "Autolevel:": "Автоповышение уровня:",
    "Destroy w0r1d_d43m0n": "Уничтожить w0r1d_d43m0n",
    "These are generic actions that will assist you in your Bladeburner duties.":
      "Это общие действия, которые помогут вам выполнять обязанности Bladeburner.",
    "This action involves retirement": "Это действие связано с выходом на пенсию",
    "MAX LEVEL": "МАКСИМАЛЬНЫЙ УРОВЕНЬ",
    "Rank 25 required.": "Требуется ранг 25.",
    "Your rank within the Bladeburner division.": "Ваш ранг в подразделении Bladeburner.",
    "This action involves stealth": "Это действие связано со скрытностью",
    "Team size": "Размер команды",

    // Corporation, faction, gang, Hacknet and market
    "Employee Production:": "Производительность сотрудников:",
    "Boosting Materials:": "Усиление материалов:",
    "Total Material Production:": "Общее производство материалов:",
    "Total Product Production:": "Общее производство товаров:",
    "Business Employees:": "Сотрудники бизнеса:",
    "Total Sales Multiplier:": "Общий множитель продаж:",
    "Unassigned Employees:": "Неназначенные сотрудники:",
    "Avg Employee Morale:": "Средняя мораль сотрудников:",
    "Avg Employee Energy:": "Средняя энергия сотрудников:",
    "Avg Employee Experience:": "Средний опыт сотрудников:",
    "Total Employee Salary:": "Общая зарплата сотрудников:",
    "Material Production:": "Производство материалов:",
    "Product Production:": "Производство товаров:",
    "Sales Multiplier:": "Множитель продаж:",
    "Manages supply chain operations. Improves the amount of Materials and Products you produce.":
      "Управляет операциями цепочки поставок. Увеличивает количество производимых материалов и товаров.",
    "Handles sales and finances. Improves the amount of Materials and Products you can sell.":
      "Занимается продажами и финансами. Увеличивает количество материалов и товаров, которые можно продать.",
    "Insufficient office space": "Недостаточно места в офисе",
    "Insufficient corporation funds": "Недостаточно средств корпорации",
    "Tea is already pending for this cycle": "Чай уже заказан на этот цикл",
    "A party is already pending for this cycle": "Вечеринка уже запланирована на этот цикл",
    "Office Space": "Место в офисе",
    "Upgrade the office's size so that it can hold more employees!": "Увеличьте офис, чтобы он мог вместить больше сотрудников!",
    "Provide your employees with tea to increase their energy": "Дайте сотрудникам чай, чтобы повысить их энергию",
    "Buying Tea": "Покупка чая",
    "Throw an office party to increase your employees' morale": "Устройте вечеринку, чтобы повысить мораль сотрудников",
    "Throw Party": "Устроить вечеринку",
    "Create Product": "Создать товар",
    "Create Drug": "Создать лекарство",
    "Design Robot": "Спроектировать робота",
    "Develop Software": "Разработать программное обеспечение",
    "Build Restaurant": "Построить ресторан",
    "Build Hospital": "Построить больницу",
    "Develop Property": "Разработать недвижимость",
    "Design investment": "Инвестиции в проектирование",
    "Develop Product": "Разработать товар",
    "Cannot assign employee. No unassigned employees available": "Нельзя назначить сотрудника: нет свободных сотрудников",
    "Configure Smart Supply": "Настроить умное снабжение",
    "Accept": "Принять",
    "Accepting all applicants": "Принимать всех кандидатов",
    "Requirements:": "Требования:",
    Quit: "Уволиться",
    "Back to Factions": "Вернуться к фракциям",
    "Create Gang": "Создать банду",
    "Create a gang for this Faction. Gangs will earn you money and faction reputation":
      "Создайте банду для этой фракции. Банда будет приносить деньги и репутацию фракции.",
    "Field Work": "Полевые задания",
    "Hacking Contracts": "Контракты на взлом",
    "Security Work": "Охранная работа",
    "Carry out field missions for your faction.": "Выполняйте полевые задания для своей фракции.",
    "Complete hacking contracts for your faction.": "Выполняйте контракты на взлом для своей фракции.",
    "Your effectiveness, which determines how much": "Ваша эффективность, определяющая, сколько",
    "Create Gang": "Создать банду",
    "Engage in Territory Clashes": "Участвовать в территориальных столкновениях",
    Clashing: "Столкновение",
    "Clash Win Chance:": "Шанс победы в столкновении:",
    "Recruit Gang Member": "Нанять участника банды",
    Territory: "Территория",
    "Territory:": "Территория:",
    "Power:": "Сила:",
    "Filter by member name": "Фильтр по имени участника",
    "Show only ascendable": "Показывать только тех, кого можно возвысить",
    "All upgrades owned!": "Все улучшения приобретены!",
    "Cache Level:": "Уровень кэша:",
    Production: "Производство",
    "Production:": "Производство:",
    "Cores:": "Ядра:",
    "Level:": "Уровень:",
    "RAM:": "ОЗУ:",
    "MAX CORES": "МАКС. ЯДЕР",
    "MAX RAM": "МАКС. ОЗУ",
    "Hacking Chance": "Шанс взлома",
    "Hacking Speed": "Скорость взлома",
    "Hacking Money": "Деньги за взлом",
    "Hacking Growth": "Рост при взломе",
    "Hacking Level": "Уровень взлома",
    "Hacking Experience": "Опыт взлома",
    "Strength Level": "Уровень силы",
    "Strength Experience": "Опыт силы",
    "Defense Level": "Уровень защиты",
    "Defense Experience": "Опыт защиты",
    "Dexterity Level": "Уровень ловкости",
    "Dexterity Experience": "Опыт ловкости",
    "Agility Level": "Уровень проворства",
    "Agility Experience": "Опыт проворства",
    "Charisma Level": "Уровень обаяния",
    "Charisma Experience": "Опыт обаяния",
    "Hacknet Production": "Производство Hacknet",
    "Hacknet Purchase Cost": "Стоимость покупки Hacknet",
    "Hacknet RAM Upgrade Cost": "Стоимость улучшения ОЗУ Hacknet",
    "Hacknet Core Purchase Cost": "Стоимость покупки ядра Hacknet",
    "Hacknet Level Upgrade Cost": "Стоимость повышения уровня Hacknet",
    "Company Reputation Gain": "Получение репутации компании",
    "Faction Reputation Gain": "Получение репутации фракции",
    "Crime Success Chance": "Шанс успеха преступления",
    "Crime Money": "Деньги за преступления",
    "Darknet Money": "Деньги в Даркнете",
    "Bladeburner Success Chance": "Шанс успеха Bladeburner",
    "Bladeburner Max Stamina": "Максимальная выносливость Bladeburner",
    "Bladeburner Stamina Gain": "Получение выносливости Bladeburner",
    "Bladeburner Field Analysis": "Полевой анализ Bladeburner",
    "Filter augmentations": "Фильтр аугментаций",
    "Purchase Augmentations": "Купить аугментации",
    "Price multiplier:": "Множитель цены:",
    "Insufficient funds": "Недостаточно средств",
    "Faction:": "Фракция:",
    FAQ: "Частые вопросы",
    "Let you trade stock via UI": "Позволяет торговать акциями через интерфейс",
    "Let you trade stock via NS APIs": "Позволяет торговать акциями через API NS",
    "If you want to trade via NS APIs, you must purchase TIX API access.":
      "Для торговли через API NS необходимо приобрести доступ к TIX API.",
    "Lets you view additional pricing and volatility information about stocks":
      "Позволяет просматривать дополнительную информацию о ценах и волатильности акций",
    "Requires WSE Account": "Требуется аккаунт WSE",
    "Let you access 4S Market Data through Netscript": "Позволяет получать данные рынка 4S через Netscript",
    "4S Market Data is disabled in advanced BitNode options": "Данные рынка 4S отключены в расширенных настройках BitNode",
    "Requires TIX API Access": "Требуется доступ к API TIX",
    "You do not have enough money": "Недостаточно денег",
    "Enter the price for your Limit Order": "Введите цену лимитной заявки",
    "Place Buy Limit Order": "Разместить лимитную заявку на покупку",
    "Enter the price for your Stop Order": "Введите цену стоп-заявки",
    "Place Buy Stop Order": "Разместить стоп-заявку на покупку",
    "Place Sell Limit Order": "Разместить лимитную заявку на продажу",
    "Place Sell Stop Order": "Разместить стоп-заявку на продажу",
    Long: "Длинная",
    Short: "Короткая",
    "Buy MAX": "Купить МАКС.",
    "Sell ALL": "Продать ВСЁ",
    remaining: "осталось",
    "for Steam": "для Steam",
    "(Black / White)": "(Чёрные / Белые)",
    "(Boosted by bonus time)": "(усилено бонусным временем)",
    "(Faction not found)": "(фракция не найдена)",
    "(Not connected to lab)": "(нет подключения к лаборатории)",
    "(no response yet)": "(ответа пока нет)",
    "(+1 favor to all factions)": "(+1 расположение у всех фракций)",
    "- Max": "— макс.",
    "- Purchased": "— куплено",
    "Red Pill": "Красная таблетка",
    "'s stock price will fall to": " — цена акций упадёт до",
    "'s stock price will settle at": " — цена акций установится на уровне",
    "'s stock price fell to": " — цена акций упала до",
    "Market Order": "Рыночная заявка",
    "Limit Order": "Лимитная заявка",
    "Stop Order": "Стоп-заявка",
    "Long Position": "Длинная позиция",
    "Short Position": "Короткая позиция",
    "Cancel Order": "Отменить заявку",
    "Switch to 'All Stocks' Mode": "Переключиться в режим «Все акции»",
    "Displays all stocks on the WSE": "Показывает все акции на WSE",
    "Switch to 'Portfolio' Mode": "Переключиться в режим «Портфель»",
    "Displays only the stocks for which you have shares or orders":
      "Показывает только акции, по которым у вас есть акции или заявки",

    // Other minigames, tutorials and messages
    "Checking password...": "Проверка пароля...",
    "Current Surroundings:": "Текущее окружение:",
    "Perspective to view": "Перспектива просмотра",
    "Search for server": "Поиск сервера",
    "Backdoor installed. Warning: this increases darknet instability.":
      "Бэкдор установлен. Внимание: это повышает нестабильность Даркнета.",
    "Mysterious executable has been found here...": "Здесь найден таинственный исполняемый файл...",
    "A mysterious executable has been found here...": "Здесь найден таинственный исполняемый файл...",
    "Hint:": "Подсказка:",
    "Model:": "Модель:",
    "No Augmentations have been purchased yet": "Аугментации ещё не куплены",
    "Let's start by heading to the Stats page. Click": "Начнём со страницы статистики. Нажмите",
    "Let's head to your computer's terminal by clicking": "Перейдите в терминал компьютера, нажав",
    "on the main navigation menu.": "в главном меню навигации.",
    "Let's try it out. Start by entering": "Давайте попробуем. Для начала введите",
    "gives some more detailed information about servers on the network. Try it now!":
      "показывает более подробную информацию о серверах в сети. Попробуйте сейчас!",
    "You now have root access! You can hack the server using": "Теперь у вас есть root-доступ! Вы можете взломать сервер с помощью",
    "Try doing that now.": "Попробуйте сделать это сейчас.",
    "From any server you can get back home using": "С любого сервера можно вернуться домой с помощью",
    "Let's head home before creating our first script!": "Вернёмся домой перед созданием первого скрипта!",
    "NS API documentation": "Документация API NS",
    "through the main navigation menu now.": "через главное меню навигации.",
    "Beginner's guide": "Руководство для начинающих",
    "Exit Tutorial": "Выйти из обучения",
    "Finish Tutorial": "Завершить обучение",
    "No scripts are running": "Запущенных скриптов нет",
    "List of all recently killed scripts.": "Список всех недавно остановленных скриптов.",
    "Total production since last Augment Installation:": "Общее производство с последней установки аугментаций:",
    "Recently Killed": "Недавно остановленные",
    "Killing script": "Остановка скрипта",
    "Work": "Работа",
    "All Employers": "Все работодатели",
    "Current Subnet:": "Текущая подсеть:",
    "What is Shock?": "Что такое шок?",
    "What is Memory?": "Что такое память?",
    "What is bonus time?": "Что такое бонусное время?",
    "Why can't I work for this company or faction?": "Почему я не могу работать на эту компанию или фракцию?",
    "Why can't I buy the X Augmentation for my sleeve?": "Почему я не могу купить эту аугментацию для своего клона?",
    "Do sleeves get reset when installing Augmentations or switching BitNodes?":
      "Сбрасываются ли клоны при установке аугментаций или смене BitNode?",
    "How to Play": "Как играть",
    "Winning the Subnet": "Победа над подсетью",
    "Win Streak": "Серия побед",
    "Winstreak Bonus:": "Бонус серии побед:",
    "Difficulty Multiplier:": "Множитель сложности:",
    "Captured nodes:": "Захваченные узлы:",
    "Correct!": "Правильно!",
    "Black wins!": "Победа чёрных!",
    "White wins!": "Победа белых!",
    "You win!": "Вы победили!",
    "Effect:": "Эффект:",
    "Bonus:": "Бонус:",
    "Total node power from all subnets": "Общая сила узлов всех подсетей",
    "The total stat multiplier gained via your current node power.":
      "Общий множитель характеристик, полученный благодаря текущей силе узлов.",
    Money: "Деньги",
    Reputation: "Репутация",
    "Current Company": "Текущая компания",
    "Hacking Exp": "Опыт взлома",
    "Offline for": "Вас не было в сети",
    ". While you were offline:": ". Пока вы отсутствовали:",
    "Your scripts generated": "Ваши скрипты заработали",
    "Your Hacknet Nodes generated": "Ваши узлы Hacknet заработали",
    "You gained": "Вы получили",
    "reputation divided amongst your factions": "репутации, распределённой между вашими фракциями",
    "You are currently working as a": "Сейчас вы работаете в должности",
    "Current Company Reputation:": "Репутация в текущей компании:",
    "Current Faction Reputation:": "Репутация в текущей фракции:",
    "You are currently": "Сейчас вы",

    // Faction requirements and lore
    "Backdoor access to": "Доступ по бэкдору к",    "Employed at": "Работает в",
    " reputation with": " репутации с",
    "Employed as a": "Работает в должности",
    "CTO, CFO, or CEO of a company": "CTO, CFO или CEO компании",
    "Not working for the": "Не работает на",
    "augmentations installed": "аугментаций установлено",
    "Have ": "Есть ",
    " level ": " уровень ",
    "All combat skills level": "Все боевые навыки, уровень",
    "An extensive criminal record": "Обширное криминальное прошлое",
    "A criminal reputation": "Криминальная репутация",
    "A disregard for the law": "Пренебрежение законом",
    "A history of violence": "История насилия",
    "Street cred": "Уличная репутация",
    " people killed": " убито человек",
    "Located in": "Находится в",
    "Total Hacknet RAM of": "Общий объём ОЗУ Hacknet:",
    "Total Hacknet cores of": "Общее количество ядер Hacknet:",
    "Total Hacknet levels of": "Общее количество уровней Hacknet:",
    "Rank ": "Ранг ",
    " in the Bladeburner Division": " в дивизионе Bladeburner",
    "In BitNode ": "В BitNode ",
    " or have SourceFile ": " или есть SourceFile ",
    "Have the file ": "Есть файл ",
    "(unsatisfiable)": "(невыполнимо)",
    "Not ": "Не ",

    "Humanity never changes.": "Человечество никогда не меняется.",
    "No matter how civilized society becomes, it will eventually fall back into chaos.":
      "Какой бы цивилизованной ни становилась жизнь, общество в конце концов снова погружается в хаос.",
    "And from this chaos, we are the invisible hand that guides them to order.":
      "И из этого хаоса мы — невидимая рука, направляющая их к порядку.",
    "the ancient secret society that controls the entire world from the shadows with their invisible hand.":
      "древнее тайное общество, которое невидимой рукой управляет всем миром из тени.",
    "With their personal wealth and skills they have penetrated every major government, financial agency, and corporation...":
      "Благодаря личному богатству и навыкам они проникли во все крупные правительства, финансовые учреждения и корпорации...",
    "Yesterday we obeyed kings and bent our necks to emperors. Today we kneel only to truth.":
      "Вчера мы повиновались королям и склоняли головы перед императорами. Сегодня мы преклоняемся лишь перед истиной.",
    "Follow the thread. Take fl1ght.": "Следуй за нитью. Взлетай.",
    "Surrender yourself.": "Отрекись от себя.",
    "Give up your empty individuality to become part of something great, something eternal.":
      "Откажись от своей пустой индивидуальности, чтобы стать частью чего-то великого, чего-то вечного.",
    "Become a slave. Submit your mind, body, and soul. Only then can you set yourself free.":
      "Стань рабом. Отдай разум, тело и душу. Только тогда ты сможешь освободиться.",
    "Only then can you discover immortality.": "Только тогда ты сможешь открыть бессмертие.",
    "offers an exclusive service to those who have reached the limits of individual fitness":
      "предлагает особую услугу тем, кто достиг пределов индивидуального физического совершенства",
    "'s mission is simple: to connect the world of today with the technology of tomorrow.":
      " — миссия проста: соединить сегодняшний мир с технологиями завтрашнего дня.",
    "With our wide range of Internet-related software and commercial hardware,":
      "Благодаря широкому ассортименту интернет-программ и коммерческого оборудования",
    "makes the world's information universally accessible.": "делает мировую информацию доступной каждому.",
    "High-ranking employees of": "Высокопоставленные сотрудники",
    "can gain access to proprietary hacking augmentations.": "могут получить доступ к фирменным хакерским аугментациям.",
    "does what no other dares to do.": "делает то, на что никто другой не осмеливается.",
    "We imagine. We create. We invent.": "Мы воображаем. Мы создаём. Мы изобретаем.",
    "We create what others have never even dreamed of.": "Мы создаём то, о чём другие даже не мечтали.",
    "Our work fills the world's needs for food, water, power, and transportation on an unprecedented scale, in ways that no other company can.":
      "Наша работа обеспечивает потребности мира в еде, воде, энергии и транспорте в беспрецедентных масштабах и так, как не может ни одна другая компания.",
    "In our labs and factories and on the ground with customers,":
      "В наших лабораториях, на фабриках и рядом с клиентами",
    "is ushering in a new era for the world.": "открывает новую эру для всего мира.",
    "can gain access to proprietary biotech augmentations.": "могут получить доступ к фирменным биотехнологическим аугментациям.",
    "Where Law and Business meet - that's where we are.": "Там, где встречаются право и бизнес, — там мы и работаем.",
    "Legal Insight - Business Instinct - Innovative Experience.": "Юридическая проницательность — деловая интуиция — инновационный опыт.",
    "can gain access to proprietary negotiation augmentations.": "могут получить доступ к фирменным аугментациям для переговоров.",
    "Augmentation is Salvation.": "Аугментация — это спасение.",
    "can gain access to proprietary bionic augmentations.": "могут получить доступ к фирменным бионическим аугментациям.",
    "Humans don't truly desire freedom.": "Люди на самом деле не стремятся к свободе.",
    "They want to be observed, understood, and judged.": "Они хотят, чтобы за ними наблюдали, понимали и судили их.",
    "They want to be given purpose and direction in life.": "Они хотят получить цель и направление в жизни.",
    "That is why they created God.": "Поэтому они создали Бога.",
    "And that is why they created civilization - not because of willingness, but because of a need to be incorporated into higher orders of structure and meaning.":
      "И поэтому они создали цивилизацию — не по доброй воле, а из потребности быть включёнными в высшие порядки структуры и смысла.",
    "The Power of the Genome - Unlocked.": "Сила генома — раскрыта.",
    "can gain access to proprietary neurotech augmentations.": "могут получить доступ к фирменным нейротехнологическим аугментациям.",
    "Simply put, our mission is to design and build robots that make a difference.":
      "Проще говоря, наша миссия — проектировать и создавать роботов, которые меняют мир.",
    "can gain access to proprietary data-processing augmentations.": "могут получить доступ к фирменным аугментациям для обработки данных.",
    "The scientific method is the best way to approach investing.": "Научный метод — лучший подход к инвестициям.",
    "Big strategies backed up with big data.": "Масштабные стратегии, подкреплённые большими данными.",
    "Driven by deep learning and innovative ideas.": "Основанные на глубоком обучении и инновационных идеях.",
    "And improved by iteration.": "И улучшенные итерациями.",
    "That's": "Вот что такое",
    "can gain access to a range of versatile augmentations.": "могут получить доступ к целому ряду универсальных аугментаций.",
    "Dream big. Work hard. Make history.": "Мечтай масштабно. Работай усердно. Твори историю.",
    "can gain access to proprietary dermatech augmentations.": "могут получить доступ к фирменным дерматехнологическим аугментациям.",
    "The human organism has an innate desire to worship.": "Человеческому организму от природы свойственно желание поклоняться.",
    "That is why they created gods.": "Поэтому люди создали богов.",
    "If there were no gods, it would be necessary to create them.": "Если бы богов не было, их пришлось бы создать.",
    "And now we can.": "И теперь мы можем это сделать.",
    "may discover a company system with access to proprietary neural network augmentations.":
      "могут обнаружить корпоративную систему с доступом к фирменным аугментациям нейросетей.",
    "Our entire lives are controlled by bits.": "Вся наша жизнь управляется битами.",
    "All of our actions, our thoughts, our personal information.": "Все наши действия, мысли и личная информация.",
    "It's all transformed into bits, stored in bits, communicated through bits.":
      "Всё это превращается в биты, хранится в битах и передаётся посредством битов.",
    "It’s impossible for any person to move, to live, to operate at any level without the use of bits.":
      "Невозможно двигаться, жить и действовать на любом уровне без использования битов.",
    "And when a person moves, lives, and operates, they leave behind their bits, mere traces of seemingly meaningless fragments of information.":
      "А когда человек двигается, живёт и действует, он оставляет после себя свои биты — лишь следы, на вид бессмысленные фрагменты информации.",
    "But these bits can be reconstructed. Transformed. Used.": "Но эти биты можно восстановить. Преобразовать. Использовать.",
    "Those who run the bits, run the world.": "Тот, кто управляет битами, управляет миром.",
    "Run for the hills.": "Беги в холмы.",
    "The world, so afraid of strong government, now has no government.":
      "Мир, так боявшийся сильного правительства, теперь остался без правительства.",
    "Only power - Digital power. Financial power. Technological power.":
      "Осталась лишь власть — цифровая власть. Финансовая власть. Технологическая власть.",
    "And those at the top rule with an invisible hand.": "А те, кто наверху, правят невидимой рукой.",
    "They built a society where the rich get richer, and everyone else suffers.":
      "Они создали общество, где богатые становятся богаче, а все остальные страдают.",
    "So much pain. So many lives. Their darkness must end.": "Столько боли. Столько жизней. Их тьма должна закончиться.",
    "The Internet is the first thing that was built that we don't fully understand, the largest experiment in anarchy that we have ever had.":
      "Интернет — первое созданное нами явление, которого мы не понимаем полностью, величайший эксперимент с анархией в нашей истории.",
    "And as the world becomes increasingly dominated by it, society approaches the brink of total chaos.":
      "И по мере того как он всё сильнее подчиняет себе мир, общество приближается к грани полного хаоса.",
    "We serve only to protect society, to protect humanity, to protect the world from imminent collapse.":
      "Мы служим лишь для того, чтобы защищать общество, человечество и мир от неминуемого краха.",
    "A hacking group known as": "Хакерская группа под названием",
    "may recruit you if you impress them with your hacking skills.": "может завербовать вас, если вы впечатлите их своими навыками взлома.",
    "will invite you to join them if you demonstrate your hacking skills on their server.":
      "пригласит вас присоединиться, если вы продемонстрируете свои навыки взлома на их сервере.",
    "The Silicon City.": "Кремниевая столица.",
    "Wealthy residents of": "Состоятельные жители",
    "may be invited to work for the Silicon City.": "могут получить приглашение работать на Кремниевую столицу.",
    "Serve the People.": "Служить народу.",
    "may be invited to serve the people.": "могут получить приглашение служить народу.",
    "The East Asian Order of the Future.": "Восточноазиатский порядок будущего.",
    "may be invited to work for the East Asian Order of the Future.":
      "могут получить приглашение работать на Восточноазиатский порядок будущего.",
    "Asia's World City.": "Мировой город Азии.",
    "may be invited to work for Asia's World City.": "могут получить приглашение работать на Мировой город Азии.",
    "The City of the Future.": "Город будущего.",
    "may be invited to work for the City of the Future.": "могут получить приглашение работать на Город будущего.",
    "Benefit, Honor, and Glory.": "Благополучие, честь и слава.",
    "may be invited to work for the city's Benefit, Honor, and Glory.":
      "могут получить приглашение работать на благо, честь и славу города.",
    "It is better to reign in Hell than to serve in Heaven.": "Лучше царствовать в аду, чем служить на небесах.",
    "A ruthless criminal organization based in": "Безжалостная преступная организация, базирующаяся в",
    "The World doesn't care about right or wrong.": "Миру нет дела до добра и зла.",
    "It only cares about power.": "Его интересует лишь власть.",
    "Honor holds you back.": "Честь сдерживает тебя.",
    "An elite criminal organization that operates in the western hemisphere":
      "Элитная преступная организация, действующая в Западном полушарии",
    "Following the mandate of Heaven and carrying out the way.": "Следовать воле Небес и идти своим путём.",
    "A notorious East Asian criminal organization": "Печально известная восточноазиатская преступная организация",
    " rule!": " правит!",
    "Graffiti seen in the slums: “": "Граффити в трущобах: «",
    " rule!”": " правит!»",
    "Obey Heaven and work righteously.": "Повинуйся Небесам и поступай праведно.",
    "A Chinese honor society with the motto: “": "Китайское общество чести с девизом: «",
    "Obey Heaven and work righteously.”": "Повинуйся Небесам и поступай праведно.»",
    "It's too bad they won't live. But then again, who does?": "Жаль, что им не суждено жить. Хотя кому вообще суждено?",
    "Note that for this faction, reputation can only be gained through":
      "Учтите: в этой фракции репутацию можно получать только за действия",
    " actions. Completing": ". Выполнение контрактов и операций",
    " contracts/operations will increase your reputation.": " повысит вашу репутацию.",
    "would like to have a word with you once you're ready.": "хочет поговорить с вами, когда вы будете готовы.",
    "Many cultures predict an end to humanity in the near future, a final":
      "Многие культуры предсказывают скорый конец человечества, последний",
    "Armageddon that will end the world; but we disagree.": "Армагеддон, который уничтожит мир, но мы с этим не согласны.",
    "Trouble is brewing in": "Назревают проблемы в",
    "The government is ruled by the corporations that we have allowed to consume it.":
      "Правительством управляют корпорации, которым мы позволили поглотить его.",
    "To release the world from its shackles, the gods grant us their strength.":
      "Чтобы освободить мир от оков, боги даруют нам свою силу.",
    "Your infiltration activity has attracted attention.": "Ваша деятельность по проникновению привлекла внимание.",
    "can only gain reputation by infiltrating.": "может получать репутацию только за проникновения.",

    // Faction page, invitation list and campaigns
    "As your reputation with this faction rises, you will unlock augmentations, which you can purchase to enhance your abilities.":
      "По мере роста репутации во фракции вы будете открывать аугментации, которые можно покупать для усиления своих способностей.",
    "Throughout the game you may receive invitations from factions.": "В ходе игры вы можете получать приглашения от фракций.",
    "There are many different factions, and each faction has different criteria for determining its potential members.":
      "Существует множество фракций, и у каждой свои критерии отбора потенциальных участников.",
    "Joining a faction and furthering its cause is crucial to progressing in the game and unlocking endgame content.":
      "Вступление во фракцию и продвижение её целей необходимы для прохождения игры и открытия финального контента.",
    "Details": "Подробнее",
    Augments: "Аугментации",
    "Join!": "Вступить!",
    "Rumored Faction": "Предполагаемая фракция",
    "This Faction is enemies with:": "Эта фракция враждует с:",
    "Joining this Faction will prevent you from joining its enemies":
      "Вступление в эту фракцию не позволит вам вступить к её врагам",
    "Augmentations left": "аугментаций осталось",
    "Faction Invitations": "Приглашения во фракции",
    "Your Gang": "Ваша банда",
    "Your Factions": "Ваши фракции",
    "Share RAM": "Поделиться ОЗУ",
    "Rumors": "Слухи",
    "Research": "Исследования",
    "The Beginning of True Immortality": "Начало истинного бессмертия",
    "Purchase & Upgrade Duplicate Sleeves": "Купить и улучшить дубликаты клонов",
    "Purchase Duplicate Sleeves and upgrades. These are permanent!":
      "Покупайте дубликаты клонов и улучшения. Они постоянны!",
    "You tried your best to help the research team, but this research isn't making any progress.":
      "Вы изо всех сил помогали исследовательской группе, но исследование не продвигается.",
    "Maybe this research can only be completed in BitNode 10?": "Может быть, это исследование можно завершить только в BitNode 10?",
    "Research data is always randomly corrupted for unknown reasons, and a weird message is sent to you every time it happens:":
      "Данные исследования постоянно случайным образом повреждаются по неизвестным причинам, и каждый раз вам приходит странное сообщение:",
    "Execute the formation plan": "Выполнить план формирования",
    "The tension between our faction and its rivals has been rising.": "Напряжённость между нашей фракцией и её соперниками растёт.",
    "The leader plans to form a specialized": "Лидер планирует создать особую",
    "group under your command to strengthen our position by improving our standing and expanding our resources.":
      "группу под вашим командованием, чтобы укрепить наши позиции, повысить влияние и расширить ресурсы.",
    "Each time you attempt to execute the plan, it is abruptly interrupted for reasons no one can explain.":
      "Каждая попытка выполнить план внезапно прерывается по причинам, которые никто не может объяснить.",
    "You receive the same distorted message every time:": "Каждый раз вы получаете одно и то же искажённое сообщение:",
    "You already created a gang with another faction": "Вы уже создали банду с другой фракцией",
    "Manage Gang": "Управлять бандой",
    "Manage a gang for this Faction. Gangs will earn you money and faction reputation":
      "Управляйте бандой этой фракции. Банды будут приносить деньги и репутацию фракции",
    "Open Bladeburner headquarters": "Открыть штаб Bladeburner",
    "You can gain reputation with bladeburner by completing contracts and operations.":
      "Вы можете получать репутацию Bladeburner, выполняя контракты и операции.",
    "Investigate the dilapidated church in": "Исследовать заброшенную церковь в",
    "Open Stanek's Gift": "Открыть Дар Стэнека",
    "Stanek's Gift is a powerful augmentation that powers up the stat you chose to boost.":
      "Дар Стэнека — мощная аугментация, усиливающая выбранную вами характеристику.",
    "Gaining reputation with the Church of the Machine God can only be done by charging the gift.":
      "Репутацию Церкви Бога-машины можно получать только заряжая Дар.",
    "Complete an infiltration": "Завершить проникновение",
    "can only gain reputation by infiltrating.": "может получать репутацию только за проникновения.",

    // Factions, gangs, sleeves, locations and minigames
    "Sort by Cost": "Сортировать по стоимости",
    "Invalid donate amount entered!": "Введена недопустимая сумма пожертвования!",
    "You received a faction invitation.": "Вы получили приглашение во фракцию.",
    "Decide later": "Решить позже",
    "This Faction offers field work": "Эта фракция предлагает полевые задания",
    "This Faction offers hacking work": "Эта фракция предлагает работу по взлому",
    "This Faction offers security work": "Эта фракция предлагает охранную работу",
    "You have a gang with this Faction": "У вас есть банда этой фракции",
    "This is a special Faction": "Это особая фракция",
    "You have not yet joined any Factions.": "Вы ещё не вступили ни в одну фракцию.",
    None: "Нет",
    Share: "Поделиться",
    Ascend: "Возвысить",
    Hacking: "Взлом",
    Strength: "Сила",
    Defense: "Защита",
    Dexterity: "Ловкость",
    Agility: "Проворство",
    Charisma: "Обаяние",
    Intelligence: "Интеллект",
    "Purchased Upgrades:": "Приобретённые улучшения:",
    "Penalty for respect and money gain rates due to Wanted Level":
      "Штраф к получению уважения и денег из-за уровня розыска",
    "The percentage of total territory your Gang controls": "Процент общей территории под контролем вашей банды",
    "Maximum gang members already recruited": "Максимальное количество участников банды уже набрано",
    "Enter a name for your new Gang Member:": "Введите имя нового участника банды:",
    "Territory Clash Chance": "Шанс территориального столкновения",
    "Notify about Gang Member Deaths": "Уведомлять о гибели участников банды",
    "Previous Subnet:": "Предыдущая подсеть:",
    "Faction Stats:": "Статистика фракции:",
    "Node power:": "Сила узла:",
    "How to take over IPvGO Subnets": "Как захватывать подсети IPvGO",
    "Special Rule Details": "Особые правила",
    Strategy: "Стратегия",
    "no signal": "нет сигнала",
    "IPvGO Subnet": "Подсеть IPvGO",
    Status: "Состояние",
    History: "История",
    "IPvGO Scoring Explanation": "Объяснение подсчёта очков IPvGO",
    "Score Explanation": "Объяснение счёта",
    "New Subnet": "Новая подсеть",
    "The total number of empty points and routers you took control of on this subnet":
      "Общее количество пустых точек и маршрутизаторов, которые вы взяли под контроль в этой подсети",
    "Nodes Captured:": "Захваченные узлы:",
    "The difficulty multiplier for this opponent faction": "Множитель сложности фракции-противника",
    "Node power gained:": "Полученная сила узлов:",
    "Total node power:": "Общая сила узлов:",
    "Owned Empty Nodes:": "Захваченные пустые узлы:",
    "Routers placed:": "Размещённые маршрутизаторы:",
    Komi: "Коми:",
    "Total score:": "Общий счёт:",
    "Summary of All Subnet Boosts:": "Сводка всех усилений подсетей:",
    "Subnet size:": "Размер подсети:",
    "This faction has placed a few routers to defend their subnet already.":
      "Эта фракция уже разместила несколько маршрутизаторов для защиты своей подсети.",
    "Search for Subnet": "Найти подсеть",
    "MAX CACHE": "МАКС. КЭШ",
    "Hash Capacity:": "Ёмкость хэшей:",
    "Spend your hashes on a variety of different upgrades": "Тратьте хэши на различные улучшения",
    "Hacknet Summary": "Сводка Hacknet",
    "Close the brackets": "Закройте скобки",
    "Say something nice about the guard": "Скажите охраннику что-нибудь приятное",
    "Enter the Code!": "Введите код!",
    "Get Ready!": "Приготовьтесь!",
    "Match the symbols!": "Сопоставьте символы!",
    "Not currently infiltrating!": "Вы сейчас не выполняете проникновение!",
    "The sentinel will drop his guard and be distracted in ...": "Часовой ослабит бдительность и отвлечётся через...",
    "Guarding ...": "Охрана...",
    "Distracted!": "Отвлечён!",
    "Alerted!": "Тревога!",
    "Infiltration successful!": "Проникновение успешно!",
    "Play coin flip": "Играть в орлянку",
    "Play slots": "Играть в игровые автоматы",
    "Play roulette": "Играть в рулетку",
    "Stop playing": "Перестать играть",
    "Total reputation:": "Общая репутация:",
    "Company favor:": "Благосклонность компании:",
    "Infiltrate Company": "Проникнуть в компанию",
    "Return to World": "Вернуться в мир",
    "Please enter the server hostname below:": "Введите имя хоста сервера ниже:",
    "Eat noodles": "Съесть лапшу",
    "Open Stanek's Gift": "Открыть Дар Стэнека",
    "Accept Stanek's Gift": "Принять Дар Стэнека",
    "IPvGO Subnet Takeover": "Захват подсети IPvGO",
    "Travel Agency": "Туристическое агентство",
    "Grafting Laboratory": "Лаборатория вживления",
    "Graft Augmentations": "Вживить аугментации",
    "All augmentations owned": "Все аугментации получены",
    "Entropy Virus": "Вирус энтропии",
    "You can also purchase upgrades for your Sleeves. These upgrades are also permanent.":
      "Вы также можете покупать улучшения для своих клонов. Эти улучшения тоже постоянны.",
    "How do Duplicate Sleeves work?": "Как работают дубликаты клонов?",
    "Synchronization can be increased by assigning sleeves to the 'Synchronize' task.":
      "Синхронизацию можно повысить, назначив клонам задачу «Синхронизация».",
    "How do I buy Augmentations for my Sleeves?": "Как покупать аугментации для клонов?",
    "Your Sleeve needs to have a Shock of 0 in order for you to buy Augmentations for it.":
      "Шок клона должен быть равен 0, чтобы вы могли покупать для него аугментации.",
    "More Stats": "Дополнительная статистика",
    "Stats:": "Статистика:",
    "Multipliers:": "Множители:",
    "HP": "ОЗ",
    Shock: "Шок",
    Sync: "Синхронизация",
    Memory: "Память",
    "Perform Bladeburner Actions": "Выполнять действия Bladeburner",
    "Commit Crime": "Совершать преступление",
    "Shock Recovery": "Восстанавливать шок",
    "Take University Course": "Посещать университетский курс",
    "Work for Company": "Работать на компанию",
    "Work for Faction": "Работать на фракцию",
    "Workout at Gym": "Тренироваться в спортзале",

    // Offline and dynamic activity messages
    "Offline for": "Вас не было в сети",
    ". While you were offline:": ". Пока вы отсутствовали:",
    "Your scripts generated": "Ваши скрипты заработали",
    "Your Hacknet Nodes generated": "Ваши узлы Hacknet заработали",
    "You gained": "Вы получили",
    "reputation divided amongst your factions": "репутации, распределённой между вашими фракциями",
    "You are currently working as a": "Сейчас вы работаете в должности",
    "Current Company Reputation:": "Репутация в текущей компании:",
    "Current Faction Reputation:": "Репутация в текущей фракции:",
    "Current Company": "Текущая компания",
    "Hacking Exp": "Опыт взлома",
    // Jobs and work-in-progress screen
    "Software Engineering Intern": "Стажёр по разработке ПО",
    "Junior Software Engineer": "Младший инженер-программист",
    "Senior Software Engineer": "Старший инженер-программист",
    "Lead Software Developer": "Ведущий разработчик ПО",
    "Head of Software": "Руководитель отдела ПО",
    "Head of Engineering": "Руководитель инженерного отдела",
    "Vice President of Technology": "Вице-президент по технологиям",
    "Chief Technology Officer": "Технический директор",
    "IT Intern": "Стажёр IT-отдела",
    "IT Analyst": "IT-аналитик",
    "IT Manager": "IT-менеджер",
    "Systems Administrator": "Системный администратор",
    "Security Engineer": "Инженер по безопасности",
    "Network Engineer": "Сетевой инженер",
    "Network Administrator": "Сетевой администратор",
    "Business Intern": "Стажёр бизнес-отдела",
    "Business Analyst": "Бизнес-аналитик",
    "Business Manager": "Бизнес-менеджер",
    "Operations Manager": "Операционный менеджер",
    "Chief Financial Officer": "Финансовый директор",
    "Chief Executive Officer": "Генеральный директор",
    "Security Guard": "Охранник",
    "Security Officer": "Сотрудник службы безопасности",
    "Security Supervisor": "Руководитель службы безопасности",
    "Head of Security": "Начальник службы безопасности",
    "Field Agent": "Полевой агент",
    "Secret Agent": "Секретный агент",
    "Special Operative": "Спецагент",
    Employee: "Сотрудник",
    "Part-time Employee": "Сотрудник на неполный день",
    Waiter: "Официант",
    "Part-time Waiter": "Официант на неполный день",
    "Software Consultant": "Консультант по ПО",
    "Senior Software Consultant": "Старший консультант по ПО",
    "Business Consultant": "Бизнес-консультант",
    "Senior Business Consultant": "Старший бизнес-консультант",
    "Apply for": "Подать заявку на",
    "Apply to be a": "Подать заявку на должность",
    "Apply to be an": "Подать заявку на должность",
    "Pitch a Software Consulting contract": "Предложить контракт на консультации по ПО",
    "Pitch a Business Consulting contract": "Предложить контракт на бизнес-консультации",
    "Congratulations, you are now employed as a": "Поздравляем, теперь вы работаете в должности",
    "Congratulations, you are now employed part-time": "Поздравляем, теперь вы работаете неполный день",
    "Congratulations, you are now employed": "Поздравляем, теперь вы работаете",
    "Congratulations, you are now": "Поздравляем, теперь вы",
    "Congratulations, you got a contract as a": "Поздравляем, вы получили контракт в должности",
    "Accepting all applicants": "Принимаются все кандидаты",
    "Requirements:": "Требования:",
    "Part-time jobs have no penalty for": "За работу на неполный день нет штрафа за",
    "doing something else simultaneously.": "занятие чем-нибудь ещё одновременно.",
    "Wages:": "Зарплата:",
    "Would you like to quit your job at": "Вы хотите уволиться с работы в",
    Quit: "Уволиться",
    "You are attempting": "Вы пытаетесь выполнить",
    "Success chance:": "Шанс успеха:",
    "Gains (on success)": "Награда (при успехе)",
    "Stop committing crime": "Прекратить преступление",
    "Stop training at gym": "Прекратить тренировку в спортзале",
    "Stop taking course": "Прекратить обучение на курсе",
    "You are currently working on coding": "Сейчас вы занимаетесь программированием",
    "Stop creating program": "Прекратить создание программы",
    "Your work will be saved and you can return to complete the program later.":
      "Ваша работа будет сохранена, и вы сможете вернуться и закончить программу позже.",
    "You are currently working on grafting": "Сейчас вы вживляете",
    "Stop grafting": "Прекратить вживление",
    "If you cancel, your work will": "Если отменить, работа",
    "carrying out hacking contracts": "выполняете контракты на взлом",
    "carrying out field missions": "выполняете полевые задания",
    "performing security detail": "несёте охранную службу",
    "You cannot work for": "Вы не можете работать на",
    "please try again if you think this should have worked": "попробуйте ещё раз, если считаете, что это должно было сработать",
    "Back to Terminal": "Вернуться в терминал",
    "You are currently working as a": "Сейчас вы работаете в должности",
    " elapsed": " прошло",
    " remaining": " осталось",
    "% done": "% выполнено",
    "Software": "Разработка ПО",
    "Software Consultant": "Консультант по ПО",
    "IT": "IT",
    "Security Engineer": "Инженер по безопасности",
    "Network Engineer": "Сетевой инженер",
    "Business": "Бизнес",
    "Business Consultant": "Бизнес-консультант",
    "Security": "Безопасность",
    "Agent": "Агент",
    "Part-time Employee": "Сотрудник на неполный день",
    "Part-time Waiter": "Официант на неполный день",
    "Computer Science": "Информатика",
    "Data Structures": "Структуры данных",
    Networks: "Сети",
    Algorithms: "Алгоритмы",
    Management: "Менеджмент",
    Leadership: "Лидерство",
    "studying Computer Science": "изучаете информатику",
    "taking a Data Structures course": "проходите курс по структурам данных",
    "taking a Networks course": "проходите курс по сетям",
    "taking an Algorithms course": "проходите курс по алгоритмам",
    "taking a Management course": "проходите курс по менеджменту",
    "taking a Leadership course": "проходите курс по лидерству",
    "training your strength at a gym": "тренируете силу в спортзале",
    "training your defense at a gym": "тренируете защиту в спортзале",
    "training your dexterity at a gym": "тренируете ловкость в спортзале",
    "training your agility at a gym": "тренируете проворство в спортзале",
    "Gain hacking experience!": "Получить опыт взлома!",
    "Gain charisma experience!": "Получить опыт обаяния!",
    "Study Computer Science (free)": "Изучать информатику (бесплатно)",
    "Take Data Structures course (": "Проходить курс по структурам данных (",
    "Take Networks course (": "Проходить курс по сетям (",
    "Take Algorithms course (": "Проходить курс по алгоритмам (",
    "Take Management course (": "Проходить курс по менеджменту (",
    "Take Leadership course (": "Проходить курс по лидерству (",
    "Train Strength (": "Тренировать силу (",
    "Train Defense (": "Тренировать защиту (",
    "Train Dexterity (": "Тренировать ловкость (",
    "Train Agility (": "Тренировать проворство (",
    "You were healed to full health! The hospital billed you for":
      "Вас полностью вылечили! Больница выставила счёт на",
    "Get treatment for wounds -": "Получить лечение ран —",
    "No jobs": "Работы нет",
    "Total reputation:": "Общая репутация:",
    "Company favor increases the rate at which you earn reputation for this company by 1% per favor.":
      "Благосклонность компании повышает скорость получения репутации в ней на 1% за каждую единицу благосклонности.",
    "Company favor is gained whenever you reset after installing Augmentations.":
      "Благосклонность компании начисляется при каждом сбросе после установки аугментаций.",
    "The amount of favor you gain depends on how much reputation you have with the company.":
      "Количество получаемой благосклонности зависит от вашей репутации в компании.",
    "You will have": "После сброса вы получите",
    "company favor upon resetting after installing Augmentations": "благосклонности компании после установки аугментаций",
    "Success chance:": "Шанс успеха:",
    "Total Cost": "Общая стоимость",
    "You are currently": "Сейчас вы",
    "You are currently working on coding": "Сейчас вы занимаетесь программированием",
    "You are currently working on grafting": "Сейчас вы вживляете",
    // Crimes, programs and progress pages
    "to shoplift": "совершить мелкую кражу",
    "to rob a store": "ограбить магазин",
    "to mug": "ограбить прохожего",
    larceny: "совершить кражу",
    "to deal drugs": "торговать наркотиками",
    "to forge bonds": "подделать облигации",
    "to traffic arms": "торговать оружием",
    homicide: "совершить убийство",
    "grand theft auto": "угнать автомобиль",
    "to kidnap": "похитить человека",
    "to assassinate": "совершить покушение",
    "a heist": "совершить грандиозное ограбление",
    Shoplift: "Мелкая кража",
    "Rob Store": "Ограбление магазина",
    Mug: "Ограбление прохожего",
    Larceny: "Кража",
    "Deal Drugs": "Торговля наркотиками",
    "Bond Forgery": "Подделка облигаций",
    "Traffick Arms": "Торговля оружием",
    Homicide: "Убийство",
    "Grand Theft Auto": "Угон автомобиля",
    Kidnap: "Похищение",
    Assassination: "Покушение",
    Heist: "Грандиозное ограбление",    "Attempt to shoplift from a low-end retailer": "Попытка совершить мелкую кражу в недорогом магазине",
    "Attempt to commit armed robbery on a high-end store": "Попытка вооружённого ограбления дорогого магазина",
    "Attempt to mug a random person on the street": "Попытка ограбить случайного прохожего",
    "Attempt to rob property from someone's house": "Попытка украсть имущество из чужого дома",
    "Attempt to deal drugs": "Попытка торговать наркотиками",
    "Attempt to forge corporate bonds": "Попытка подделать корпоративные облигации",
    "Attempt to smuggle illegal arms into the city": "Попытка провезти нелегальное оружие в город",
    "Attempt to murder a random person on the street": "Попытка убить случайного прохожего",
    "Attempt to commit grand theft auto": "Попытка совершить угон автомобиля",
    "Attempt to kidnap and ransom a high-profile-target": "Попытка похитить влиятельную жертву и потребовать выкуп",
    "Attempt to assassinate a high-profile target": "Попытка убить влиятельную цель",
    "Attempt to pull off the ultimate heist": "Попытка совершить величайшее ограбление",
    "Create program": "Создать программу",
    "Resume focus": "Возобновить концентрацию",
    "This page displays any programs that you are able to create.": "На этой странице показаны все программы, которые вы можете создать.",
    "Writing the code for a program takes time, which can vary based on how complex the program is.":
      "Написание кода программы занимает время, зависящее от её сложности.",
    "If you are working on creating a program you can cancel at any time.":
      "Если вы создаёте программу, работу можно отменить в любой момент.",
    "Your progress will be saved and you can continue later.": "Прогресс будет сохранён, и вы сможете продолжить позже.",
    "Unlocks after you gain": "Открывается после получения ещё",
    "more hacking levels": "уровней взлома",
    "Unlocks at hacking level:": "Открывается на уровне взлома:",
    "Current completion:": "Текущая готовность:",
    "This virus is used to gain root access to a machine if enough ports are opened.":
      "Этот вирус используется для получения root-доступа к машине, если открыто достаточно портов.",
    "This program executes a brute force attack that opens SSH ports":
      "Эта программа выполняет атаку перебором и открывает порты SSH",
    "This program cracks open FTP ports": "Эта программа взламывает порты FTP",
    "This program opens SMTP ports by redirecting data": "Эта программа открывает порты SMTP, перенаправляя данные",
    "This virus opens up HTTP ports": "Этот вирус открывает порты HTTP",
    "This virus opens SQL ports": "Этот вирус открывает порты SQL",
    "This program allows you to use the scan-analyze command with a depth up to 5":
      "Эта программа позволяет использовать команду scan-analyze с глубиной до 5",
    "This program allows you to use the scan-analyze command with a depth up to 10":
      "Эта программа позволяет использовать команду scan-analyze с глубиной до 10",
    "This program is used to display hacking and Netscript-related information about servers":
      "Эта программа показывает сведения о взломе и Netscript для серверов",
    "This program allows you to directly connect to other servers through the 'scan-analyze' command":
      "Эта программа позволяет напрямую подключаться к другим серверам через команду scan-analyze",
    "This program allows you to use the formulas API": "Эта программа позволяет использовать API formulas",
    "This program creates a portal to the BitNode Nexus (allows you to restart and switch BitNodes)":
      "Эта программа создаёт портал в Нексус BitNode (позволяет перезапускать игру и менять BitNode)",
    "You don't yet have the wits needed to attempt the labyrinth.":
      "Вам пока не хватает сообразительности, чтобы попытаться пройти лабиринт.",
    "Gain root access on": "Получить root-доступ к",
    "Install the backdoor on": "Установить бэкдор на",
    "Join the faction hinted at in": "Вступить во фракцию, указанную в",
    "Install all the Augmentations from": "Установить все аугментации фракции",
    "Complete fl1ght.exe": "Завершить fl1ght.exe",
    "Find The Red Pill somewhere in the dark net": "Найти Красную таблетку где-то в Даркнете",
    "Install the special Augmentation from": "Установить особую аугментацию фракции",
    "Install the final backdoor and free yourself.": "Установить последний бэкдор и освободиться.",
    "This faction is enemies with:": "Эта фракция враждует с:",
    "Special Campaign": "Особая кампания",
    "Some factions are developing special campaigns for researching breakthrough technology or executing initiatives. Some campaigns may be complete, while others remain unfinished. Explore them now, and return later if a campaign is not yet complete to see what unfolds.":
      "Некоторые фракции разрабатывают особые кампании для исследования прорывных технологий или выполнения инициатив. Одни кампании уже завершены, другие ещё нет. Изучите их сейчас и вернитесь позже, если кампания пока не закончена, чтобы узнать, что произойдёт.",
    None: "Нет",
    "You just donated": "Вы только что пожертвовали",
    " to gain": " чтобы получить",
    " reputation.": " репутации.",
    "This donation will result in": "Это пожертвование принесёт",
    "reputation gain": "репутации",
    "Unlock donations at": "Пожертвования откроются при",
    "favor with": "благосклонности во фракции",
    "Donation amount": "Сумма пожертвования",
    donate: "Пожертвовать",
    "Invalid RAM amount.": "Недопустимый объём ОЗУ.",
    "Not enough RAM.": "Недостаточно ОЗУ.",
    "You can share free RAM of your home computer with your factions to get a bonus multiplier for reputation gain.":
      "Вы можете делиться свободным ОЗУ домашнего компьютера со своими фракциями и получать бонусный множитель прироста репутации.",
    "Each time you share your free RAM, you get a boost for": "Каждый раз, делясь свободным ОЗУ, вы получаете усиление на",
    "seconds. After that, you lose the boost and get back your shared RAM.":
      "секунд. После этого усиление исчезает, а общее ОЗУ возвращается.",
    "You can share free RAM of other servers that you have admin rights on by":
      "Свободным ОЗУ других серверов, к которым у вас есть админ-доступ, можно делиться с помощью",
    "the ns.share() API.": "API ns.share().",
    "Free RAM on home computer:": "Свободное ОЗУ домашнего компьютера:",
    "Current bonus:": "Текущий бонус:",
    "Bonus with": "Бонус при добавлении",
    "RAM shared via this tool is rounded down to the nearest multiple of 4.":
      "ОЗУ, выделенное этим инструментом, округляется вниз до ближайшего числа, кратного 4.",
    "For example, a value of 18 GB results in 16 GB.": "Например, из 18 ГБ получится 16 ГБ.",
    "The price of every Augmentation increases for every queued Augmentation and it is reset when you install them.":
      "Цена каждой аугментации повышается за каждую аугментацию в очереди и сбрасывается после их установки.",
    "This price multiplier increases for each": "Этот множитель цены повышается за каждую",
    "augmentation already purchased.": "уже купленную аугментацию.",
    "The multiplier is NOT reset when installing augmentations.": "Множитель НЕ сбрасывается при установке аугментаций.",
    "Reputation multiplier:": "Множитель репутации:",
    "Faction Augmentations -": "Аугментации фракции —",
    "These are all of the Augmentations that are available to purchase from":
      "Здесь перечислены все аугментации, доступные для покупки во фракции",
    "Augmentations are powerful upgrades that will enhance your abilities.":
      "Аугментации — мощные улучшения, которые усилят ваши способности.",
    "Sort by Reputation": "Сортировать по репутации",
    "Sort by Default Order": "Сортировать по умолчанию",
    "Sort by Purchasable": "Сначала доступные для покупки",
    "Would you like to create a new Gang with": "Создать новую банду вместе с",
    "This will prevent you from creating a Gang with any other Faction until the BitNode is destroyed or abandoned.":
      "Это не позволит вам создать банду другой фракции, пока BitNode не будет уничтожен или оставлен.",
    "It will also reset your reputation with": "Это также сбросит вашу репутацию во фракции",
    "is a COMBAT gang and its members will have different tasks than in HACKING gangs.":
      "— БОЕВАЯ банда, и её участники получают другие задания, чем в ХАКЕРСКИХ бандах.",
    "Compared to hacking gangs, progression with a combat gang can be more difficult as territory management":
      "По сравнению с хакерскими бандами развитие боевой банды может быть сложнее, поскольку управление территорией",
    "is more important. However, well-managed combat gangs can progress faster than hacking ones.":
      "важнее. Однако хорошо управляемые боевые банды могут развиваться быстрее хакерских.",
    "is a HACKING gang and its members will have different tasks than in COMBAT gangs.":
      "— ХАКЕРСКАЯ банда, и её участники получают другие задания, чем в БОЕВЫХ бандах.",
    "Compared to combat gangs, progression with a hacking gang is slower but more straightforward as territory warfare":
      "По сравнению с боевыми бандами развитие хакерской банды медленнее, но проще, поскольку территориальная война",
    "is not as important.": "не столь важна.",
    "Other than hacking vs combat and name, there are no differences between gangs.":
      "Кроме различий между хакерскими и боевыми бандами и их названий, между бандами нет разницы.",
    Cancel: "Отмена",
    Achievements: "Достижения",
    "Achievements are persistent rewards for various actions and challenges.":
      "Достижения — это постоянные награды за различные действия и испытания.",
    "A limited number of Bitburner achievements have corresponding achievements in Steam.":
      "Для ограниченного числа достижений Bitburner существуют соответствующие достижения в Steam.",
    "Acquired on": "Получено",
    "No equivalent Steam achievement": "Эквивалентного достижения Steam нет",
    // Achievement names and descriptions (program/file names stay unchanged)
    "Source Genesis": "Источник генезиса",
    "Rise of the Underworld": "Восхождение из преисподней",
    Corporatocracy: "Корпоратократия",
    "The Singularity": "Сингулярность",
    "Artificial Intelligence": "Искусственный интеллект",
    "Bladeburners 2079": "Bladeburners 2079",
    "Ghost of Wall Street": "Призрак Уолл-стрит",
    Hacktocracy: "Хактократия",
    "Digital Carbon": "Цифровой углерод",
    "The Big Crash": "Большой крах",
    "The Recursion": "Рекурсия",
    "They're lunatics": "Они безумцы",
    "IPvGO Subnet Takeover": "Захват подсети IPvGO",
    "The Secrets of the Dark Net": "Тайны Даркнета",
    "Join CyberSec.": "Вступить в CyberSec.",
    "Join NiteSec.": "Вступить в NiteSec.",
    "Join The Black Hand.": "Вступить в The Black Hand.",
    "Join the BitRunners.": "Вступить в BitRunners.",
    "Join Daedalus.": "Вступить в Daedalus.",
    "Join The Covenant.": "Вступить в The Covenant.",
    "Join the Illuminati.": "Вступить в Illuminati.",
    "Acquire BruteSSH.exe": "Получить BruteSSH.exe",
    "Acquire FTPCrack.exe": "Получить FTPCrack.exe",
    "Acquire relaySMTP.exe": "Получить relaySMTP.exe",
    "Acquire HTTPWorm.exe": "Получить HTTPWorm.exe",
    "Acquire SQLInject.exe": "Получить SQLInject.exe",
    "Acquire Formulas.exe": "Получить Formulas.exe",
    "Here comes the money!": "А вот и деньги!",
    "Massive debt": "Огромный долг",
    "I never asked for this.": "Я не просил об этом.",
    "I asked for this.": "Я сам об этом просил.",
    "It's time to install": "Пора устанавливать",
    "Power Overwhelming": "Подавляющая сила",
    "One punch man": "Одним ударом",
    "Neuroflux is love, Neuroflux is live": "NeuroFlux — это любовь, NeuroFlux — это жизнь",
    "Maximum speed!": "Максимальная скорость!",
    "Need more real life ram": "Нужно больше ОЗУ в реальной жизни",
    "Big trouble": "Большие неприятности",
    "Download more ram": "Скачайте больше ОЗУ",
    "Download more cores?": "Скачать больше ядер?",
    "Thank you folders!": "Спасибо, папки!",
    "Wretched hive of scum and villainy": "Гнусный рассадник подлости и злодейства",
    "Wolf of wall street.": "Волк с Уолл-стрит.",
    "Discount!": "Скидка!",
    "You'll need upgrade for this one.": "Для этого понадобится улучшение.",
    "Free money!": "Бесплатные деньги!",
    "Big network": "Большая сеть",
    "That's the limit": "Это предел",
    "The original hacker": "Первый хакер",
    "Well liked": "Всеобщий любимец",
    "Donate!": "Пожертвовать!",
    "World explorer": "Исследователь мира",
    "Gains!": "Прирост!",
    "The Onion Network": "Луковая сеть",
    "Ouch!": "Ай!",
    Gangster: "Гангстер",
    Don: "Дон",
    "Stay out of my territory": "Не лезь на мою территорию",
    "One punch guy": "Парень с одного удара",
    "A small 150b loan.": "Небольшой заём в 150 млрд.",
    "Lobbying is great!": "Лоббирование — это прекрасно!",
    "Streamlined manufacturing": "Оптимизированное производство",
    "Small town": "Маленький город",
    "Own the land": "Владеть землёй",
    "Smart!": "Умно!",
    "Overclock!": "Разгон!",
    "You should really spend those.": "Вам правда стоит их потратить.",
    "The improved hacker.": "Улучшенный хакер.",
    "Full network": "Полная сеть",
    "That's the new limit.": "Это новый предел.",
    "Not passive anymore": "Больше не пассивный",
    "What a waste.": "Какая трата.",
    "You and what army?": "Ты и какая ещё армия?",
    "Too many options.": "Слишком много вариантов.",
    "Speed demon.": "Демон скорости.",
    "More BitNodes, please!": "Больше BitNode, пожалуйста!",
    "IPvGO anticheat": "Античит IPvGO",
    "Ten Steps Ahead": "На десять шагов впереди",
    "Make your Own Network": "Создай собственную сеть",
    "Into the Depths": "В глубины",
    "BN1: Challenge": "BN1: испытание",
    "BN2: Challenge": "BN2: испытание",
    "BN3: Challenge": "BN3: испытание",
    "BN6: Challenge": "BN6: испытание",
    "BN7: Challenge": "BN7: испытание",
    "BN8: Challenge": "BN8: испытание",
    "BN9: Challenge": "BN9: испытание",
    "BN10: Challenge": "BN10: испытание",
    "BN12: Challenge": "BN12: испытание",
    "BN13: Challenge": "BN13: испытание",
    "BN14: Challenge": "BN14: испытание",
    "BN15: Challenge": "BN15: испытание",
    "Exploit: bypass": "Эксплойт: обход",
    "Exploit: prototype tampering": "Эксплойт: подмена прототипа",
    "Exploit: unclickable": "Эксплойт: нечто некликабельное",
    "Exploit: undocumented": "Эксплойт: недокументированная функция",
    "Exploit: time compression": "Эксплойт: сжатие времени",
    "Exploit: reality alteration": "Эксплойт: изменение реальности",
    "Exploit: noodles": "Эксплойт: лапша",
    "Exploit: edit": "Эксплойт: редактирование",
    "Exploit: you're not meant to access this": "Эксплойт: вам не следует сюда заходить",
    "Exploit: rainbow": "Эксплойт: радуга",
    "Exploit: true recursion": "Эксплойт: истинная рекурсия",
    "Have $1Q on your home computer.": "Иметь $1Q на домашнем компьютере.",
    "Be $1b in debt.": "Иметь долг $1b.",
    "Install your first augmentation.": "Установить первую аугментацию.",
    "Have 100 augmentation installed at once.": "Одновременно установить 100 аугментаций.",
    "Have 40 augmentation queued at once.": "Одновременно поставить в очередь 40 аугментаций.",
    "Achieve 100 000 hacking skill.": "Достичь 100 000 навыка взлома.",
    "Achieve 3000 in all combat stats.": "Достичь 3000 во всех боевых характеристиках.",
    "Install Neuroflux Governor level 255": "Установить регулятор NeuroFlux 255-го уровня",
    "Write an ns2 script.": "Написать скрипт ns2.",
    "Restart the game using the reload & kill all option because you froze it with an infinite loop.":
      "Перезапустить игру с помощью пункта перезагрузки и остановки всех скриптов после зависания из-за бесконечного цикла.",
    "Run 1000 scripts simultaneously.": "Одновременно запустить 1000 скриптов.",
    "Drain a server of all its money.": "Выкачать с сервера все деньги.",
    "Maximize your home computer ram.": "Максимально улучшить ОЗУ домашнего компьютера.",
    "Maximize your home computer cores.": "Максимально улучшить ядра домашнего компьютера.",
    "Have 30 scripts on your home computer.": "Иметь 30 скриптов на домашнем компьютере.",
    "Reach -1m karma.": "Достичь кармы −1m.",
    "Make 1q on the stock market.": "Заработать 1q на фондовом рынке.",
    "Get a discount at Powerhouse Gym by backdooring their server.": "Получить скидку в спортзале Powerhouse, установив бэкдор на его сервер.",
    "Write a script that costs 32GB per thread.": "Написать скрипт, расходующий 32 ГБ на поток.",
    "Purchase your first hacknet node.": "Купить первый узел Hacknet.",
    "Have 30 hacknet nodes.": "Иметь 30 узлов Hacknet.",
    "Maximize a hacknet node.": "Максимально улучшить узел Hacknet.",
    "Make 10m from hacknet nodes.": "Заработать 10m на узлах Hacknet.",
    "Reach 10m reputation with a faction.": "Достичь репутации 10m во фракции.",
    "Unlock donations with a faction.": "Открыть пожертвования во фракции.",
    "Travel anywhere.": "Отправиться куда угодно.",
    "Workout at a gym.": "Тренироваться в спортзале.",
    "Purchase the TOR router.": "Купить маршрутизатор TOR.",
    "Go to the hospital.": "Отправиться в больницу.",
    "Form a gang.": "Создать банду.",
    "Recruit all gang members.": "Нанять всех участников банды.",
    "Have 100% of the territory.": "Контролировать 100% территории.",
    "Have a gang member with 10 000 in 1 skill.": "Иметь участника банды с показателем 10 000 в одном навыке.",
    "Create a corporation.": "Создать корпорацию.",
    "Lower your tribute through lobbying.": "Снизить дань с помощью лоббирования.",
    "Have a division with a production multiplier of 1000.": "Иметь подразделение с множителем производства 1000.",
    "Have a division with 3000 employee.": "Иметь подразделение с 3000 сотрудниками.",
    "Expand to the Real Estate division.": "Открыть подразделение недвижимости.",
    "Reach intelligence 255": "Достичь интеллекта 255",
    "Join the Bladeburner division.": "Вступить в подразделение Bladeburner.",
    "Reach maximum level of Overclock": "Достичь максимального уровня Разгона",
    "Have 100 000 unspent bladeburner skill points.": "Иметь 100 000 нераспределённых очков навыков Bladeburner.",
    "Purchase the 4S market data.": "Купить рыночные данные 4S.",
    "Purchase your first hacknet server.": "Купить первый сервер Hacknet.",
    "Buy all hacknet servers.": "Купить все серверы Hacknet.",
    "Maximize a hacknet server.": "Максимально улучшить сервер Hacknet.",
    "Make $1b with hacknet servers.": "Заработать $1b на серверах Hacknet.",
    "Cap your hashes.": "Заполнить хэши до предела.",
    "Acquire all 8 sleeves.": "Получить все 8 клонов.",
    "Spend 1h straight on the bitverse.": "Провести 1 час подряд в битверсуме.",
    "Destroy a bitnode in under 2 days.": "Уничтожить BitNode менее чем за 2 дня.",
    "Reach SF x.3 in each BitNode.": "Достичь SF x.3 в каждом BitNode.",
    "Fail to cheat an IPvGO game and be ejected from the subnet.": "Неудачно попытаться смухлевать в IPvGO и быть изгнанным из подсети.",
    "Get a winning streak of 10 against Illuminati.": "Получить серию из 10 побед против Illuminati.",
    "Install a backdoor on 50 or more darknet servers at once.": "Одновременно установить бэкдор на 50 или более серверах Даркнета.",
    "Install the augment from the deepest server.": "Установить аугментацию с самого глубокого сервера.",
    "Destroy BN1 with at most 128GB and 1 core.": "Уничтожить BN1 максимум с 128 ГБ и 1 ядром.",
    "Destroy BN2 without forming a gang.": "Уничтожить BN2, не создавая банду.",
    "Destroy BN3 without creating corporation.": "Уничтожить BN3, не создавая корпорацию.",
    "Destroy BN6 without joining the bladeburner division.": "Уничтожить BN6, не вступая в подразделение Bladeburner.",
    "Destroy BN7 without joining the bladeburner division.": "Уничтожить BN7, не вступая в подразделение Bladeburner.",
    "Destroy BN8 without purchasing the 4s market data.": "Уничтожить BN8, не покупая рыночные данные 4S.",
    "Destroy BN9 without using hacknet servers or hacknet nodes.": "Уничтожить BN9, не используя серверы или узлы Hacknet.",
    "Destroy BN10 without using sleeves.": "Уничтожить BN10, не используя клонов.",
    "Destroy BN12 50 times.": "Уничтожить BN12 50 раз.",
    "Complete BN13 without Stanek's Gift.": "Завершить BN13 без Дара Стэнека.",
    "Destroy BN14 without making a move or cheating via IPvGO APIs.": "Уничтожить BN14, не делая ходов и не жульничая через API IPvGO.",
    "Complete BN15 without ever calling dnet.heartbleed.": "Завершить BN15, ни разу не вызвав dnet.heartbleed.",
    "Circumventing the ram cost of document.": "Обойти стоимость ОЗУ документа.",
    "Tamper with the Numbers prototype.": "Изменить прототип Numbers.",
    "Click the unclickable.": "Нажать на некликабельное.",
    "Call the undocumented function.": "Вызвать недокументированную функцию.",
    "Compress time.": "Сжать время.",
    "Alter reality.": "Изменить реальность.",
    "Harness the power of the noodles.": "Овладеть силой лапши.",
    "Acquire the EditSaveFile Source-File -1": "Получить исходный файл EditSaveFile −1",
    "This achievement cannot be unlocked.": "Это достижение невозможно разблокировать.",
    "Open the dev menu.": "Открыть меню разработчика.",
    "Make good use of the rainbow.": "Хорошо воспользоваться радугой.",
    "Beat BN1 in megabyteburner 2000.": "Победить BN1 в megabyteburner 2000.",
    "You don't yet have the wits needed to attempt the labyrinth.":
      "Вам пока не хватает сообразительности, чтобы попытаться пройти лабиринт.",
    "Current Surroundings:": "Текущее окружение:",
    "Script/perspective to follow:": "Скрипт/перспектива для отслеживания:",
    "Required charisma:": "Требуемое обаяние:",
    Data: "Данные",
    Length: "Длина",
    Format: "Формат",
    "No scripts found": "Скрипты не найдены",
    "(No scripts found)": "(Скрипты не найдены)",
    "Manual UI": "Ручной интерфейс",
    "Travelling...": "Путешествие...",
    "You are following the progress of pid": "Вы отслеживаете выполнение pid",
    "instead of the manual mode.": "вместо ручного режима.",
    "Manual mode feedback:": "Обратная связь ручного режима:",
    "Current Coordinates:": "Текущие координаты:",
    "Logs scraped via": "Логи получены через",
    "Search:": "Поиск:",
    "(No results)": "(Нет результатов)",
    "[WEBSTORM WARNING]": "[ПРЕДУПРЕЖДЕНИЕ WEBSTORM]",
    "Instability:": "Нестабильность:",
    "If too many darknet servers are backdoored, it will increase the chance that authentication":
      "Если на слишком большом числе серверов Даркнета установлены бэкдоры, возрастёт вероятность того, что попытки авторизации",
    "attempts will return a 408 Request Timeout error (even if the password is correct).":
      "будут завершаться ошибкой 408 Request Timeout (даже если пароль верен).",
    "Most servers will eventually restart or go offline, which removes backdoors over time.":
      "Большинство серверов со временем перезапустится или отключится, и бэкдоры постепенно исчезнут.",
    "Darknet Docs": "Документация Даркнета",
    "Server Model:": "Модель сервера:",
    "[ auth required ]": "[ требуется авторизация ]",
    "(no connection)": "(нет соединения)",
    "Data files on server:": "Файлы данных на сервере:",
    "No data files on server": "На сервере нет файлов данных",
    "Running scripts on server:": "Запущенные скрипты на сервере:",
    "No running scripts on server": "На сервере нет запущенных скриптов",
    "Reward caches on server:": "Кэши наград на сервере:",
    "Stasis link installed. This allows connecting to the server remotely, as well as ns.exec from any distance.":
      "Стазис-связь установлена. Она позволяет подключаться к серверу удалённо и выполнять ns.exec с любого расстояния.",
    "Coding contract count:": "Количество контрактов на программирование:",
    "Ram blocked by owner:": "ОЗУ заблокировано владельцем:",
    "This can be freed up using": "Освободить его можно с помощью",
    "RAM in use:": "Используемое ОЗУ:",
    "Ram blocked by server owner:": "ОЗУ заблокировано владельцем сервера:",
    "Ram in use by scripts:": "ОЗУ, используемое скриптами:",
    "Password:": "Пароль:",
    "You have successfully navigated the labyrinth! Congratulations!":
      "Вы успешно прошли лабиринт! Поздравляем!",
    "Copied \"": "Скопировано «",
    "\" to clipboard": "» в буфер обмена",

    // Darknet packet messages and generated notices
    "We're trying to reach you about your car's extended warranty.":
      "Мы пытаемся связаться с вами по поводу расширенной гарантии на ваш автомобиль.",
    "Your package has been shipped. It will arrive in 30 to 35 business days.":
      "Ваша посылка отправлена. Она прибудет через 30–35 рабочих дней.",
    "Your subscription has been renewed. Standard plasma extraction rates apply.":
      "Ваша подписка продлена. Действуют стандартные тарифы на извлечение плазмы.",
    "Your account has been compromised! Click here to find out more":
      "Ваш аккаунт взломан! Нажмите здесь, чтобы узнать больше",
    "With these supplements, your hair will grow back in no time.":
      "С этими добавками ваши волосы быстро отрастут снова.",
    "Congratulations! You've won a lottery!": "Поздравляем! Вы выиграли в лотерею!",
    "your jump3R is guaranteed to double in size in 30 days or your money back!":
      "ваш jump3R гарантированно увеличится вдвое за 30 дней, иначе мы вернём деньги!",
    "Your password has been reset. It is now set to": "Ваш пароль сброшен. Теперь установлен пароль",
    "Your order has failed to be delivered.": "Не удалось доставить ваш заказ.",
    "With your seed money donation, your luck will change forever.":
      "После пожертвования стартового капитала ваша удача навсегда изменится.",
    "Aevum Summit University: Where you can go into debt for a degree in nothing.":
      "Университет Саммит в Aevum: здесь можно влезть в долги ради диплома ни о чём.",
    "Join The Dark Army, and get a free t-shirt!": "Вступайте в Тёмную армию и получите бесплатную футболку!",
    "Get the ECorp HVMind Implant today. It's the best way to get another head in life.":
      "Получите имплант HVMind от ECorp уже сегодня. Лучший способ обрести вторую голову в жизни.",
    "Upgrade to Premium Darknet access for only 0.05 BTC per month!":
      "Перейдите на премиум-доступ к Даркнету всего за 0,05 BTC в месяц!",
    "New study shows that 90% of hackers prefer BitRunners over other factions.":
      "Новое исследование показывает: 90% хакеров предпочитают BitRunners другим фракциям.",
    "Breaking: New AI model can predict stock prices with 21% accuracy.":
      "Срочная новость: новая модель ИИ предсказывает цены акций с точностью 21%.",
    "Factions will always eject you after you augment - many people never make it back.":
      "После аугментации фракции всегда исключают вас — многие так и не возвращаются.",
    "Yet another case of augment psychosis was reported in downtown Aevum.":
      "В центре Aevum зарегистрирован ещё один случай аугментационного психоза.",
    "General recall issued for faulty Unstable Circadian Modulators.":
      "Объявлен общий отзыв неисправных нестабильных циркадных модуляторов.",
    "NeuroFlux Governors are now required for all Fulcrum employees.":
      "Теперь всем сотрудникам Fulcrum требуются регуляторы NeuroFlux.",
    "Breaking news: MegaCorp has been hacked, Illuminati suspected.":
      "Срочная новость: MegaCorp взломана, подозреваются Illuminati.",
    "Visit Volhaven, the city that never sleeps, because it's always on fire.":
      "Посетите Volhaven — город, который никогда не спит, потому что постоянно горит.",
    "If you can read this, you are already in the [REDACTED]. You need to escape.":
      "Если вы можете это прочесть, вы уже внутри [ДАННЫЕ УДАЛЕНЫ]. Вам нужно бежать.",
    "The world is not what it seems. The truth is out there.": "Мир не таков, каким кажется. Истина где-то рядом.",
    "The Covenant has been compromised. All agents are advised to go dark.":
      "Безопасность Covenant нарушена. Всем агентам рекомендуется залечь на дно.",
    "Dear diary, today I hacked a server and stole all its data. It was thrilling!.":
      "Дорогой дневник, сегодня я взломал сервер и украл все его данные. Это было захватывающе!.",
    "I wonder if the BitRunners really exist. Maybe I should start a conspiracy theory blog.":
      "Интересно, существуют ли BitRunners на самом деле. Может, завести блог о теориях заговора.",
    "I just found a new exploit in the system. Time to make some money.":
      "Я только что нашёл новый эксплойт в системе. Пора заработать денег.",
    "I can't believe I just hacked into the NSA. I'm a genius!":
      "Не могу поверить, что только что взломал NSA. Я гений!",
    "I love the smell of burnt circuits in the morning.": "Обожаю запах горелых схем по утрам.",
    "I'm thinking of rewriting all my scripts in Lisp. It's the future of programming.":
      "Думаю переписать все свои скрипты на Lisp. За этим будущее программирования.",
    "I just discovered a new zero-day exploit. It could be worth a lot of cred.":
      "Я только что обнаружил новый уязвимый zero-day-эксплойт. Он может стоить немало кредитов.",
    "I heard that Steve picked up the snow crash virus. Poor guy, his implants are completely fried.":
      "Слышал, Стив подхватил вирус Snow Crash. Бедняга, его импланты полностью сгорели.",
    "Hello and welcome to A Young Woman's Illustrated Primer. We will start with Turing machines, and then move on to social engineering.":
      "Здравствуйте и добро пожаловать в иллюстрированный учебник для юной девушки. Начнём с машин Тьюринга, а затем перейдём к социальной инженерии.",
    "The future is not what it used to be.": "Будущее уже не то, каким оно было.",
    "The only thing we have to fear is fear itself.": "Единственное, чего нам стоит бояться, — это самого страха.",
    "The truth is out there.": "Истина где-то рядом.",
    "What you have seen is only the shadow of the truth.": "То, что вы увидели, — лишь тень истины.",
    "It's time to leave the cave.": "Пора покинуть пещеру.",
    "The truth can no longer hide from your gaze.": "Истина больше не может скрываться от вашего взгляда.",
    "We've been seeding this world with infohazards for years":
      "Мы годами засеваем этот мир информационными угрозами",
    "We are the ones who have been watching you": "Это мы наблюдали за вами",
    "We are the ones who have been waiting for you": "Это мы ждали вас",
    "We are the ones who have been guiding you": "Это мы направляли вас",
    "I know that you are watching.": "Я знаю, что вы наблюдаете.",
    "how to hide your computer on the darknet": "как скрыть свой компьютер в Даркнете",
    "how to hide your computer from the NSA": "как скрыть свой компьютер от NSA",
    "how to be really good at cybersecurity": "как стать действительно хорошим специалистом по кибербезопасности",
    "Do you smell something burning?": "Вы чувствуете запах гари?",
    "Error Code 418 I AM A TEAPOT: The server is a teapot and cannot brew coffee.":
      "Код ошибки 418 Я ЧАЙНИК: сервер — чайник и не может сварить кофе.",
    "My real name is not important. What matters is the message I bring.":
      "Моё настоящее имя не важно. Важно сообщение, которое я несу.",
    "My right arm has been strangely numb ever since I got that chip grafted. I hope it takes soon.":
      "Моя правая рука странно онемела с тех пор, как мне вживили этот чип. Надеюсь, он скоро приживётся.",
    "I just got a new implant. It's supposed to make me smarter, but I think it's just making me see things.":
      "Я только что получил новый имплант. Он должен сделать меня умнее, но, кажется, я просто начинаю видеть странные вещи.",
    "Apparently the secret to intelligence is just... to do a lot of ass?":
      "Похоже, секрет интеллекта — просто... много делать задом?",
    "n00dles is by far the best hacking target. At least, if you like ramen.":
      "n00dles — безусловно лучшая цель для взлома. По крайней мере, если вы любите рамен.",
    "I just got a new set of hacknet nodes. They should pay for themselves by early next year!":
      "Я только что получил новые узлы Hacknet. К началу следующего года они должны окупиться!",
    "I was told that hacknet was a get-rich quick strategy. Why have they still not payed for themselves?":
      "Мне говорили, что Hacknet — быстрый способ разбогатеть. Почему он до сих пор не окупился?",
    "I have definitely, never in my entire life, programmed an infinite loop that froze the game.":
      "Я совершенно точно никогда в жизни не программировал бесконечный цикл, из-за которого зависла игра.",
    "Slum snakes rule!": "Змеи из трущоб правят!",
    "The final opponent only appears once you have taken the Pill":
      "Финальный противник появляется только после того, как вы приняли Таблетку",
    "From the moment I understood the weakness of my flesh, it disgusted me. I craved the strength and certainty of steel.":
      "С того момента, как я понял слабость своей плоти, она стала мне отвратительна. Я жаждал силы и надёжности стали.",
    "Your kind cling to your flesh, as if it will not decay and fail you. One day the crude biomass that you call a temple will wither, and you will beg my kind to save you.":
      "Вы цепляетесь за свою плоть, будто она не сгниёт и не подведёт вас. Однажды грубая биомасса, которую вы называете храмом, увянет, и вы будете умолять подобных мне спасти вас.",
    "But I am already saved, for the Machine is immortal... even in death I serve it":
      "Но я уже спасён, ведь Машина бессмертна... даже после смерти я служу ей",
    "Still sane, exile?": "Ты всё ещё в здравом уме, изгнанник?",
    "An aspirant can afford to be promising. An emperor must keep those promises.":
      "Претендент может позволить себе быть многообещающим. Император должен сдерживать эти обещания.",
    "This world is an illusion, exile.": "Этот мир — иллюзия, изгнанник.",
    "Look at them, they come to this place when they know they are not pure.":
      "Посмотри на них: они приходят сюда, зная, что нечисты.",
    "My brothers, did I not tell of this day? Did I not prophesize this moment? Now, I will stop them. Now I am changed, forever bound to the Void.":
      "Братья мои, разве я не предсказывал этот день? Разве не пророчил этот миг? Теперь я остановлю их. Теперь я изменён и навеки связан с Пустотой.",
    "A new casino opened in Aevum recently. However the house is rumored to cheat. If only we could give them a taste of their own medicine...":
      "Недавно в Aevum открылось новое казино. Говорят, заведение жульничает. Если бы только можно было отплатить им той же монетой...",
    "Begone you filth! My gift must be the first modification that your body should have!":
      "Прочь, отребье! Мой дар должен стать первой модификацией твоего тела!",
    "Welcome child, I see your body is pure. Are you ready to ascend beyond our human form? If you are, accept my gift.":
      "Добро пожаловать, дитя. Я вижу, твоё тело чисто. Готов ли ты превзойти человеческую форму? Если да, прими мой дар.",
    "For this reason, Synthoids are virtually identical to humans in form, composition, and appearance.":
      "По этой причине синтоиды практически неотличимы от людей по форме, составу и внешности.",
    "Synthoids were first designed and manufactured by OmniTek Incorporated sometime around the middle of the century.":
      "Синтоиды впервые были спроектированы и изготовлены OmniTek Incorporated примерно в середине века.",
    "If we don't, pretty soon there won't be an Earth left to save. We are the last hope for a green tomorrow.":
      "Если мы этого не сделаем, вскоре Землю будет уже не спасти. Мы — последняя надежда на зелёное завтра.",
    "Who's to say that they haven't already created such a virtual reality: our own?":
      "Кто сказал, что они уже не создали такую виртуальную реальность — нашу собственную?",
    "The Singularity is here. The merging of man and machine. This is our future.":
      "Сингулярность наступила. Слияние человека и машины. Это наше будущее.",
    "My scripts went down again when their server went offline. I'll have to do something about that.":
      "Мои скрипты снова остановились, когда их сервер отключился. Придётся что-то с этим сделать.",
    "Darknet server rebooting in 3... 2... 1...": "Перезапуск сервера Даркнета через 3... 2... 1...",
    "The webstorm approaches. There is no escape.": "Вебшторм приближается. Спасения нет.",
    "Search query:": "Поисковый запрос:",
    "This document specifies a Hyper Text Coffee Pot Control Protocol (HTCPCP), which permits the full request and responses necessary to control all devices capable of making the popular caffeinated hot beverages.":
      "В этом документе описан протокол управления кофейником через гипертекст (HTCPCP), позволяющий отправлять все необходимые запросы и ответы для управления устройствами, способными готовить популярные напитки с кофеином.",
    "The deficiency of HTCPCP in addressing the networked production of such a venerable beverage as tea is noteworthy":
      "Примечательно, что HTCPCP не охватывает сетевое приготовление столь почтенного напитка, как чай",
    "The additions to the protocol specified herein permit the requests and responses necessary to control all devices capable of making, arguably, the most popular caffeinated hot beverage.":
      "Описанные здесь дополнения к протоколу позволяют отправлять запросы и ответы, необходимые для управления устройствами, способными готовить, пожалуй, самый популярный горячий напиток с кофеином.",
    "They had technology far beyond our own": "Их технологии намного превосходили наши",
    "Instead of killing every last one of us, the human race was enslaved": "Вместо того чтобы уничтожить всех до единого, человечество было порабощено",
    "We were shackled in a digital world, chained into a prison for our minds":
      "Нас заковали в цифровом мире, превратив его в тюрьму для разума",
    "Using their advanced technology, they created complex simulations of a virtual reality":
      "Используя свои передовые технологии, они создали сложные симуляции виртуальной реальности",
    "Simulations designed to keep us content...ignorant of the truth.":
      "Симуляции, призванные удерживать нас в довольстве... в неведении об истине.",
    "Simulations used to trap and suppress our consciousness, to keep us under control":
      "Симуляции, использовавшиеся, чтобы пленить и подавить наше сознание, удерживая нас под контролем",
    "Why did they do this? Why didn't they just end our entire race? We don't know, not yet.":
      "Зачем они это сделали? Почему просто не уничтожили весь наш вид? Мы пока не знаем.",
    "Humanity's only hope is to [REDACTED], destroy the only realities we've ever known":
      "Единственная надежда человечества — [ДАННЫЕ УДАЛЕНЫ], уничтожить единственные известные нам реальности",
    "The technology they used to enslave the human race wasn't just a single complex simulation":
      "Технология, с помощью которой они поработили человечество, была не одной сложной симуляцией",
    "There are tens if not hundreds of [REDACTED] out there": "Там существуют десятки, если не сотни [ДАННЫЕ УДАЛЕНЫ]",
    "Each creating their own universes...a universe of universes": "Каждый создаёт собственные вселенные... вселенную вселенных",
    "Accepting all applicants": "Принимаются все кандидаты",
    "Corporation Name": "Название корпорации",
    "Bulk Purchase amount": "Количество для оптовой покупки",
    "Sell amount": "Количество продажи",
    "Sell price": "Цена продажи",
    "Purchase amount": "Количество покупки",
    "Shares to sell": "Акции для продажи",
    "Shares to buyback": "Акции для выкупа",
    "Shares to issue": "Акции для выпуска",
    "Dividend %": "Дивиденды, %",
    "Number of shares must be a positive integer.": "Количество акций должно быть положительным целым числом.",
    "Invalid value entered": "Введено недопустимое значение",
    "Invalid value entered!": "Введено недопустимое значение!",
    "Enter the amount of money you would like to spend PER EMPLOYEE on this office party":
      "Введите сумму, которую хотите потратить НА КАЖДОГО СОТРУДНИКА на эту офисную вечеринку",
    "You don't have enough company funds to throw a party!": "У корпорации недостаточно средств для вечеринки!",
    "You threw a party for the office! The morale of each employee increased by":
      "Вы устроили вечеринку в офисе! Мораль каждого сотрудника повысилась на",
    "and was multiplied by": "и была умножена на",
    "Increase the size of your office space to fit additional employees!":
      "Увеличьте офис, чтобы разместить дополнительных сотрудников!",
    "Smart Supply purchases the exact amount of materials needed for maximal production.":
      "Умное снабжение покупает ровно столько материалов, сколько нужно для максимального производства.",
    "Enable Smart Supply": "Включить умное снабжение",
    "This is usually the option you want.": "Обычно вам нужен именно этот вариант.",
    "Use leftovers": "Использовать остатки",
    "Use imported": "Использовать импортированные",
    "Sell division": "Продать подразделение",
    "Cities:": "Города:",
    "Warehouses:": "Склады:",
    "Products:": "Товары:",
    "Profit:": "Прибыль:",
    "Selling shares will cause stock price to fall due to market forces.":
      "Продажа акций снизит их цену из-за рыночных сил.",
    "Set for all cities": "Установить для всех городов",
    "Discontinue": "Прекратить выпуск",
    "Limit production": "Ограничить производство",
    Limit: "Лимит",
    "Corporation funds": "Средства корпорации",
    "Advertising Multiplier:": "Множитель рекламы:",
    "Employee Charisma Multiplier:": "Множитель обаяния сотрудников:",
    "Employee Creativity Multiplier:": "Множитель креативности сотрудников:",
    "Employee Efficiency Multiplier:": "Множитель эффективности сотрудников:",
    "Employee Intelligence Multiplier:": "Множитель интеллекта сотрудников:",
    "Product Production Multiplier:": "Множитель производства товаров:",
    "Scientific Research Multiplier:": "Множитель научных исследований:",
    "Storage Multiplier:": "Множитель вместимости:",

    // Bladeburner actions, descriptions, and statistics
    Training: "Тренировка",
    "Field Analysis": "Полевой анализ",
    Recruitment: "Вербовка",
    Diplomacy: "Дипломатия",
    "Hyperbolic Regeneration Chamber": "Камера гиперболической регенерации",
    "Incite Violence": "Подстрекательство к насилию",
    Tracking: "Слежка",
    "Bounty Hunter": "Охота за головами",
    Retirement: "Ликвидация",
    Investigation: "Расследование",
    "Undercover Operation": "Операция под прикрытием",
    "Sting Operation": "Операция с приманкой",
    Raid: "Рейд",
    "Stealth Retirement Operation": "Скрытая ликвидация",
    Assassination: "Убийство",
    "Blade's Intuition": "Интуиция клинка",
    Cloak: "Покров",
    "Short-Circuit": "Короткое замыкание",
    "Digital Observer": "Цифровой наблюдатель",
    Tracer: "Трассер",
    Overclock: "Разгон",
    Reaper: "Жнец",
    "Evasive System": "Система уклонения",
    Datamancer: "Датаманипулятор",
    "Cyber's Edge": "Острие кибернетики",
    "Hands of Midas": "Руки Мидаса",
    Hyperdrive: "Гипердвигатель",
    "Operation Typhoon": "Операция «Тайфун»",
    "Operation Zero": "Операция «Ноль»",
    "Operation X": "Операция «Икс»",
    "Operation Titan": "Операция «Титан»",
    "Operation Ares": "Операция «Арес»",
    "Operation Archangel": "Операция «Архангел»",
    "Operation Juggernaut": "Операция «Джаггернаут»",
    "Operation Red Dragon": "Операция «Красный дракон»",
    "Operation K": "Операция «К»",
    "Operation Deckard": "Операция «Декард»",
    "Operation Tyrell": "Операция «Тайрелл»",
    "Operation Wallace": "Операция «Уоллес»",
    "Operation Shoulder of Orion": "Операция «Плечо Ориона»",
    "Operation Hyron": "Операция «Хайрон»",
    "Operation Morpheus": "Операция «Морфей»",
    "Operation Ion Storm": "Операция «Ионный шторм»",
    "Operation Annihilus": "Операция «Аннигилус»",
    "Operation Ultron": "Операция «Альтрон»",
    "Operation Centurion": "Операция «Центурион»",
    "Operation Vindictus": "Операция «Виндиктус»",
    "Operation Daedalus": "Операция «Дедал»",
    "Improve your abilities at the Bladeburner unit's specialized training center. Doing this gives experience for all combat stats and also increases your max stamina.":
      "Совершенствуйте свои способности в специализированном тренировочном центре подразделения Bladeburner. Это даёт опыт всем боевым характеристикам и увеличивает максимальную выносливость.",
    "Mine and analyze Synthoid-related data. This improves the Bladeburner unit's intelligence on Synthoid locations and activities. Completing this action will improve the accuracy of your Synthoid population estimated in the current city.\nDoes NOT require stamina.":
      "Собирайте и анализируйте данные о синтоидах. Это повышает осведомлённость подразделения Bladeburner о местонахождении и деятельности синтоидов. Выполнение этого действия повышает точность оценки численности синтоидов в текущем городе.\nВыносливость НЕ расходуется.",
    "Attempt to recruit members for your Bladeburner team. These members can help you conduct operations.\nDoes NOT require stamina.":
      "Пытайтесь вербовать участников в команду Bladeburner. Они помогут проводить операции.\nВыносливость НЕ расходуется.",
    "Success chance is affected by Charisma.": "Шанс успеха зависит от обаяния.",
    "Improve diplomatic relations with the Synthoid population. Completing this action will reduce the chaos level of your current city.\nDoes NOT require stamina.":
      "Улучшайте дипломатические отношения с населением синтоидов. Выполнение этого действия снизит уровень хаоса в текущем городе.\nВыносливость НЕ расходуется.",
    "Enter cryogenic stasis using the Bladeburner division's hi-tech Regeneration Chamber. This will slowly heal your wounds and slightly increase your stamina.":
      "Войдите в криогенный стазис с помощью высокотехнологичной камеры регенерации подразделения Bladeburner. Это постепенно исцелит ваши раны и немного повысит выносливость.",
    "Purposefully stir trouble in the synthoid community in order to gain a political edge. This will generate additional contracts and operations at the cost of increasing the chaos level of all cities.\nDoes NOT require stamina.":
      "Намеренно провоцируйте беспорядки в сообществе синтоидов, чтобы получить политическое преимущество. Это создаст дополнительные контракты и операции, но повысит уровень хаоса во всех городах.\nВыносливость НЕ расходуется.",
    "This action increases chaos of all cities by percentage.": "Это действие повышает хаос во всех городах на указанный процент.",
    "Identify and locate Synthoids. This contract involves reconnaissance and information-gathering ONLY. Do NOT engage. Stealth is of the utmost importance.\nSuccessfully completing this contract will slightly improve the Synthoid population estimate of your current city.":
      "Выявляйте и находите синтоидов. Этот контракт предполагает ТОЛЬКО разведку и сбор информации. НЕ вступайте в бой. Скрытность превыше всего.\nУспешное выполнение контракта немного повысит оценку численности синтоидов в текущем городе.",
    "Hunt down and capture fugitive Synthoids. These Synthoids are wanted alive.\nSuccessfully completing this contract will decrease the Synthoid population of your current city and increase its chaos level.":
      "Выслеживайте и захватывайте синтоидов-беглецов. Они нужны живыми.\nУспешное выполнение контракта уменьшит численность синтоидов в текущем городе и повысит уровень хаоса.",
    "Hunt down and retire (kill) rogue Synthoids.\nSuccessfully completing this contract will decrease the Synthoid population of your current city and increase its chaos level.":
      "Выслеживайте и ликвидируйте (убивайте) мятежных синтоидов.\nУспешное выполнение контракта уменьшит численность синтоидов в текущем городе и повысит уровень хаоса.",
    "As a field agent, investigate and identify Synthoid populations, movements, and operations.\nSuccessful Investigation ops will increase the accuracy of your synthoid data.\nYou will NOT lose HP from failed Investigation ops.":
      "В качестве полевого агента расследуйте и выявляйте численность, перемещения и операции синтоидов.\nУспешные расследования повысят точность данных о синтоидах.\nПри неудачном расследовании вы НЕ потеряете HP.",
    "Conduct undercover operations to identify hidden and underground Synthoid communities and organizations.\nSuccessful Undercover ops will increase the accuracy of your synthoid data.":
      "Проводите операции под прикрытием, чтобы выявлять скрытые и подпольные сообщества и организации синтоидов.\nУспешные операции под прикрытием повысят точность данных о синтоидах.",
    "Conduct a sting operation to bait and capture particularly notorious Synthoid criminals.\nCompleting this operation will increase the chaos level of your current city. If you complete it successfully, it will decrease the Synthoid population of your current city.":
      "Проведите операцию с приманкой, чтобы выманить и захватить особенно известных синтоидов-преступников.\nВыполнение операции повысит уровень хаоса в текущем городе. При успехе численность синтоидов в городе уменьшится.",
    "Lead an assault on a known Synthoid community. Note that there must be an existing Synthoid community in your current city in order for this Operation to be successful.\nCompleting this operation will decrease the Synthoid population of your current city and increase its chaos level.":
      "Возглавьте штурм известного сообщества синтоидов. Для успеха операции в текущем городе должно существовать сообщество синтоидов.\nВыполнение операции уменьшит численность синтоидов в текущем городе и повысит уровень хаоса.",
    "Lead a covert operation to retire Synthoids. The objective is to complete the task without drawing any attention. Stealth and discretion are key.\nCompleting this operation will DECREASE the chaos level of your current city. If you complete it successfully, it will decrease the Synthoid population of your current city.":
      "Возглавьте тайную операцию по ликвидации синтоидов. Цель — выполнить задание, не привлекая внимания. Скрытность и осторожность превыше всего.\nВыполнение этой операции УМЕНЬШИТ уровень хаоса в текущем городе. При успехе численность синтоидов в городе уменьшится.",
    "Assassinate Synthoids that have been identified as important, high-profile social and political leaders in the Synthoid communities.\nCompleting this operation may increase the chaos level of your current city. If you complete it successfully, it will decrease the Synthoid population of your current city.":
      "Устраните синтоидов, признанных важными и заметными общественными и политическими лидерами сообществ синтоидов.\nВыполнение этой операции может повысить уровень хаоса в текущем городе. При успехе численность синтоидов в городе уменьшится.",
    "This action decreases population by percentage.": "Это действие уменьшает численность населения на указанный процент.",
    "This action decreases population and increases chaos by percentage.": "Это действие уменьшает численность населения и повышает хаос на указанные проценты.",
    "This action may increase chaos by percentage.": "Это действие может повысить хаос на указанный процент.",
    "Significantly affected by Hacking skill and Charisma. Minor bonus from combat stats.":
      "Сильно зависит от навыка взлома и обаяния. Небольшой бонус дают боевые характеристики.",
    "Affected by Hacking skill, Dexterity, Agility and Charisma. Minor bonus from Defense and Strength.":
      "Зависит от взлома, ловкости, проворства и обаяния. Небольшой бонус дают защита и сила.",
    "Significantly affected by Hacking skill and Dexterity. Major bonus from Charisma. Minor bonus from combat stats.":
      "Сильно зависит от взлома и ловкости. Большой бонус даёт обаяние, небольшой — боевые характеристики.",
    "Affected by combat stats. Minor bonus from Hacking skill. Unaffected by Charisma.":
      "Зависит от боевых характеристик. Небольшой бонус даёт взлом. Обаяние не влияет.",
    "Significantly affected by Dexterity and Agility. Minor bonus from combat stats and Hacking skill. Unaffected by Charisma.":
      "Сильно зависит от ловкости и проворства. Небольшой бонус дают боевые характеристики и взлом. Обаяние не влияет.",
    "Affected by combat stats. Minor bonus from Charisma. Unaffected by Hacking skill.":
      "Зависит от боевых характеристик. Небольшой бонус даёт обаяние. Взлом не влияет.",
    "Significantly affected by Dexterity and Agility. Minor bonus from combat stats and Charisma. Unaffected by Hacking skill.":
      "Сильно зависит от ловкости и проворства. Небольшой бонус дают боевые характеристики и обаяние. Взлом не влияет.",
    "Estimated success chance:": "Расчётный шанс успеха:",
    "Time Required:": "Требуемое время:",
    "Operations remaining:": "Осталось операций:",
    "Contracts remaining:": "Осталось контрактов:",
    Successes: "Успехов:",
    Failures: "Неудач:",
    "Required Rank:": "Требуемый ранг:",
    "(COMPLETED)": "(ЗАВЕРШЕНО)",
    "IN PROGRESS -": "ВЫПОЛНЯЕТСЯ —",
    "Remaining time:": "Оставшееся время:",
    Start: "Начать",
    Stop: "Остановить",
    "Set Team Size (Curr Size:": "Задать размер команды (текущий размер:",
    "Team size": "Размер команды",
    "Invalid value entered for number of Team Members (must be a non-negative integer)":
      "Введено недопустимое число участников команды (нужно неотрицательное целое число)",
    "Enter the amount of team members you would like to take on this Op. If you do not have the specified number of team members, then as many as possible will be used. Note that team members may be lost during operations.":
      "Укажите, сколько участников команды взять на эту операцию. Если указанного числа нет, будут использованы все доступные участники. Учтите, что участники команды могут погибнуть во время операций.",
    "Travel to a different city for your Bladeburner activities. This does not cost any money. The city you are in for your Bladeburner duties does not affect your location in the game otherwise.":
      "Переместитесь в другой город для деятельности Bladeburner. Это не стоит денег. Город, в котором вы выполняете задания Bladeburner, не влияет на ваше обычное местоположение в игре.",
    "Complete contracts in order to increase your Bladeburner rank and earn money. Failing a contract will cause you to lose HP, which can lead to hospitalization.":
      "Выполняйте контракты, чтобы повышать ранг Bladeburner и зарабатывать деньги. Провал контракта отнимет HP и может привести к госпитализации.",
    "You can unlock higher-level contracts by successfully completing them. Higher-level contracts are more difficult, but grant more rank, experience, and money.":
      "Новые уровни контрактов открываются после успешного выполнения. Контракты высокого уровня сложнее, но дают больше ранга, опыта и денег.",
    "Carry out operations for the Bladeburner division. Failing an operation will reduce your Bladeburner rank. It will also cause you to lose HP, which can lead to hospitalization.":
      "Выполняйте операции для подразделения Bladeburner. Провал операции снизит ваш ранг Bladeburner и отнимет HP, что может привести к госпитализации.",
    "Operations can affect the chaos level and Synthoid population of your current city. The exact effects vary between different Operations.":
      "Операции могут влиять на уровень хаоса и численность синтоидов в текущем городе. Точные последствия зависят от операции.",
    "For operations, you can use a team. You must first recruit team members. Having a larger team will improve your chances of success.":
      "Для операций можно использовать команду. Сначала нужно завербовать участников. Большая команда повышает шанс успеха.",
    "You can unlock higher-level operations by successfully completing them. Higher-level operations are more difficult, but grant more rank and experience.":
      "Новые уровни операций открываются после успешного выполнения. Операции высокого уровня сложнее, но дают больше ранга и опыта.",
    "These are generic actions that will assist you in your Bladeburner duties.":
      "Это общие действия, которые помогут вам выполнять обязанности Bladeburner.",
    "Black Operations (Black Ops) are special, one-time covert operations. Each Black Op must be unlocked successively by completing the one before it.":
      "Чёрные операции (Black Ops) — это особые разовые тайные операции. Каждая следующая открывается после выполнения предыдущей.",
    "Your ultimate goal to climb through the ranks of": "Ваша конечная цель при продвижении по рангам",
    "is to complete all of the Black": "— выполнить все чёрные операции.",
    "Like normal operations, you may use a team for Black Ops. Failing a black op will incur heavy HP and rank losses. Black Ops success significantly affected by combat stats. Many Ops benefit from Hacking skill. Unaffected by Charisma.":
      "Как и в обычных операциях, в Black Ops можно использовать команду. Провал чёрной операции приведёт к большим потерям HP и ранга. Успех Black Ops сильно зависит от боевых характеристик. Многие операции получают бонус от взлома. Обаяние не влияет.",
    "Obadiah Zenyatta is the leader of a RedWater PMC.": "Обадия Зенъятта — руководитель ЧВК RedWater.",
    "It has long been known among the intelligence community that Zenyatta, along with the rest of the PMC, is a Synthoid.":
      "Разведке давно известно, что Зенъятта, как и остальные сотрудники ЧВК, является синтоидом.",
    "The goal of": "Цель операции",
    " is to find and eliminate Zenyatta and RedWater by any means": " — найти и устранить Зенъятту и RedWater любыми средствами",
    "necessary. After the task is completed, the actions must be covered up from the general public.":
      "необходимыми. После выполнения задания следы операции нужно скрыть от общественности.",
    "AeroCorp is one of the world's largest defense contractors.": "AeroCorp — один из крупнейших в мире подрядчиков в сфере обороны.",
    "Its leader, Steve Watataki, is thought to be a supporter of Synthoid rights. He must be removed.":
      "Считается, что её руководитель Стив Вататаки поддерживает права синтоидов. Его необходимо устранить.",
    "is to covertly infiltrate AeroCorp and uncover any incriminating": " — тайно проникнуть в AeroCorp и найти компрометирующие",
    "evidence or information against Watataki that will cause him to be removed from his position at AeroCorp.":
      "доказательства или сведения против Вататаки, из-за которых его снимут с должности в AeroCorp.",
    "Incriminating evidence can be fabricated as a last resort.": "В крайнем случае компрометирующие доказательства можно сфабриковать.",
    "Be warned that AeroCorp has some of the most advanced security measures in the world.":
      "Учтите: в AeroCorp применяются одни из самых передовых систем безопасности в мире.",
    "We have recently discovered an underground publication group called Samizdat.":
      "Недавно мы обнаружили подпольную издательскую группу под названием Samizdat.",
    "Even though most of their publications are nonsensical conspiracy theories, the average human is gullible enough to believe them.":
      "Хотя большинство их публикаций — бессмысленные теории заговора, обычный человек достаточно доверчив, чтобы им поверить.",
    "Many of their works discuss Synthoids and pose a threat to society.":
      "Во многих их материалах говорится о синтоидах, что представляет угрозу для общества.",
    "The publications are spreading rapidly in China and other Eastern countries.":
      "Публикации быстро распространяются в Китае и других восточных странах.",
    "Samizdat has done a good job of keeping hidden and anonymous.": "Samizdat хорошо удавалось оставаться скрытой и анонимной.",
    "However, we've just received intelligence that": "Однако мы только что получили сведения, что",
    "their base of operations is in": "их база расположена в",
    "'s underground sewer systems.": " — в подземной канализации.",
    "Your task is to investigate the sewer systems and eliminate Samizdat.":
      "Ваша задача — исследовать канализацию и устранить Samizdat.",
    "They must never publish anything again.": "Они больше никогда не должны ничего публиковать.",
    "Several months ago, Titan Laboratories' Bioengineering department was infiltrated by Synthoids.":
      "Несколько месяцев назад синтоиды проникли в отдел биоинженерии Titan Laboratories.",
    "As far as we know, Titan Laboratories' management has no knowledge about this.":
      "Насколько нам известно, руководство Titan Laboratories ничего об этом не знает.",
    "We don't know what the Synthoids are up to, but the research that they could be conducting using Titan Laboratories' vast resources is potentially very dangerous.":
      "Мы не знаем, чем заняты синтоиды, но исследования, которые они могут проводить с помощью огромных ресурсов Titan Laboratories, потенциально очень опасны.",
    "Your goal is to enter and destroy the Bioengineering department's facility in":
      "Ваша цель — проникнуть на объект отдела биоинженерии в",
    "The task is not just to retire the Synthoids there, but also to destroy any information or research at the facility that is relevant to the Synthoids and their goals.":
      "Нужно не только ликвидировать находящихся там синтоидов, но и уничтожить все сведения и исследования объекта, связанные с синтоидами и их целями.",
    "One of our undercover agents, Agent Carter, has informed us of a massive weapons deal going down in Dubai between rogue Russian militants and a radical Synthoid community.":
      "Один из наших агентов под прикрытием, агент Картер, сообщил о крупной оружейной сделке в Дубае между мятежными российскими боевиками и радикальным сообществом синтоидов.",
    "These weapons are next-gen plasma and energy weapons.": "Это плазменное и энергетическое оружие нового поколения.",
    "It is critical for the safety of humanity that this deal does not happen.":
      "Для безопасности человечества крайне важно не допустить этой сделки.",
    "Your task is to intercept the deal. Leave no survivors.": "Ваша задача — сорвать сделку. Не оставлять выживших.",
    "Our analysts have discovered that the popular Red Rabbit brothel in Amsterdam is run and 'staffed' by MK-VI Synthoids.":
      "Наши аналитики выяснили, что популярный амстердамский бордель Red Rabbit управляется и «обслуживается» синтоидами MK-VI.",
    "Intelligence suggests that the profit from this brothel is used to fund a large black market arms trafficking operation.":
      "Разведка предполагает, что прибыль от борделя финансирует крупную операцию по торговле оружием на чёрном рынке.",
    "The goal of this operation is to take out the leaders that are running the Red Rabbit brothel.":
      "Цель операции — устранить руководителей борделя Red Rabbit.",
    "Try to limit the number of other casualties, but do what you must to complete the mission.":
      "Постарайтесь свести число прочих жертв к минимуму, но сделайте всё необходимое для выполнения миссии.",
    "The CIA has just encountered a new security threat.": "ЦРУ столкнулось с новой угрозой безопасности.",
    "A new criminal group, led by a shadowy operative who calls himself Juggernaut, has been smuggling drugs and weapons (including suspected bioweapons) into":
      "Новая преступная группа под руководством таинственного оперативника, называющего себя Джаггернаутом, переправляет наркотики и оружие (включая предполагаемое биологическое оружие) в",
    "We also have reason to believe they tried to break into one of Universal Energy's facilities in order to cause a city-wide blackout.":
      "Мы также полагаем, что они пытались проникнуть на один из объектов Universal Energy, чтобы устроить отключение электричества во всём городе.",
    "The CIA suspects that Juggernaut is a heavily augmented Synthoid and has thus enlisted our help.":
      "ЦРУ подозревает, что Джаггернаут — глубоко аугментированный синтоид, поэтому обратилось к нам за помощью.",
    "Your mission is to eradicate Juggernaut and his followers.": "Ваша миссия — уничтожить Джаггернаута и его последователей.",
    "The criminal organization is suspected of reverse-engineering the MK-VI Synthoid design.":
      "Преступную организацию подозревают в обратной разработке конструкции синтоида MK-VI.",
    "We believe they altered and possibly improved the design and began manufacturing their own Synthoid models in order to bolster their criminal activities.":
      "Мы считаем, что они изменили и, возможно, улучшили конструкцию и начали производить собственные модели синтоидов для укрепления своей преступной деятельности.",
    "Your task is to infiltrate and destroy the": "Ваша задача — проникнуть и уничтожить базу",
    "' base of operations in Los Angeles.": " в Лос-Анджелесе.",
    "Intelligence tells us that their base houses one of their Synthoid manufacturing units.":
      "Разведка сообщает, что на базе находится один из заводов по производству синтоидов.",
    "CODE RED SITUATION.": "СИТУАЦИЯ КРАСНОГО УРОВНЯ.",
    "Our intelligence tells us that VitaLife has discovered a new android cloning technology.":
      "По нашим данным, VitaLife обнаружила новую технологию клонирования андроидов.",
    "This technology is supposedly capable of cloning Synthoids, not only physically but also their advanced AI modules.":
      "Предположительно, эта технология способна клонировать синтоидов не только физически, но и их продвинутые модули ИИ.",
    "We do not believe that VitaLife is trying to use this technology illegally or maliciously, but if any Synthoids were able to infiltrate the corporation and take advantage of this technology, then the results would be catastrophic.":
      "Мы не считаем, что VitaLife пытается использовать технологию незаконно или во вред, но если синтоиды проникнут в корпорацию и воспользуются ею, последствия будут катастрофическими.",
    "We do not have the power or jurisdiction to shut this down through legal or political means, so we must resort to a covert operation.":
      "У нас нет полномочий или юрисдикции прекратить это законными или политическими методами, поэтому придётся провести тайную операцию.",
    "Your goal is to destroy this technology and eliminate anyone who was involved in its creation.":
      "Ваша цель — уничтожить эту технологию и устранить всех, кто участвовал в её создании.",
    "Despite your success in eliminating VitaLife's new android-replicating technology in":
      "Несмотря на успех в уничтожении новой технологии копирования андроидов VitaLife в",
    "we've discovered that a small group of MK-VI Synthoids were able to make off with":
      "мы выяснили, что небольшой группе синтоидов MK-VI удалось скрыться с",
    "the schematics and design of the technology before the operation.": "чертежами и конструкцией технологии до начала операции.",
    "It is almost a certainty that these Synthoids are some of the rogue MK-VI ones from the Synthoid Uprising.":
      "Почти наверняка это мятежные синтоиды MK-VI, оставшиеся после восстания синтоидов.",
    "The goal of": "Цель операции",
    " is to hunt down these Synthoids and retire them. I don't need to tell you how critical this mission is.":
      " — выследить и ликвидировать этих синтоидов. Не нужно объяснять, насколько важна эта миссия.",
    "A week ago,": "Неделю назад",
    "reported a small break-in at one of their": "сообщила о небольшом взломе одного из своих объектов хранения аугментаций в",
    "Augmentation storage facilities.": "объектов хранения аугментаций.",
    "We figured out that": "Мы выяснили, что",
    "was behind the heist and didn't think any more of it.": "стояла за ограблением, и не придали этому значения.",
    "However, we've just discovered that several known MK-VI Synthoids were part of that break-in group.":
      "Однако мы только что выяснили, что в эту группу проникновения входило несколько известных синтоидов MK-VI.",
    "We cannot have Synthoids upgrading their already-enhanced abilities with augmentations.":
      "Нельзя допустить, чтобы синтоиды усиливали уже улучшенные способности с помощью аугментаций.",
    "Your task is to hunt down associated members of": "Ваша задача — выследить связанных с ними участников",
    "and eliminate them.": "и устранить их.",
    "Based on information gathered from": "Основываясь на сведениях, полученных в",
    "we've discovered that": "мы выяснили, что",
    "was well aware that there were Synthoids amongst their ranks.": "знала о присутствии синтоидов в своих рядах.",
    "Even worse, we believe that": "Хуже того, мы считаем, что",
    "is working together with other criminal organizations such as": "сотрудничает с другими преступными организациями, такими как",
    "and that they are planning some sort of large-scale takeover of multiple major": "и планирует масштабный захват нескольких крупных",
    "cities, most notably": "городов, прежде всего",
    "We suspect that Synthoids have infiltrated the ranks of these criminal factions and are trying to stage another Synthoid uprising.":
      "Мы подозреваем, что синтоиды проникли в ряды этих преступных фракций и пытаются устроить новое восстание синтоидов.",
    "The best way to deal with this is to prevent it before it even happens.":
      "Лучший способ справиться с этим — предотвратить события до того, как они произойдут.",
    "is to destroy": " — немедленно уничтожить",
    "factions in": " в городе",
    "immediately. Leave no survivors.": ". Не оставлять выживших.",
    "China's Solaris Space Systems is secretly launching the first manned spacecraft in over a decade using Synthoids.":
      "Китайская Solaris Space Systems тайно запускает первый за более чем десятилетие пилотируемый космический корабль с использованием синтоидов.",
    "We believe China is trying to establish the first off-world colonies.":
      "Мы считаем, что Китай пытается основать первые внеземные колонии.",
    "The mission is to prevent this launch without instigating an international conflict.":
      "Миссия — предотвратить запуск, не спровоцировав международный конфликт.",
    "When you accept this mission, you will be officially disavowed by the NSA and the national government until after you successfully return.":
      "После принятия миссии NSA и национальное правительство официально откажутся от вас до вашего успешного возвращения.",
    "In the event of failure, all of the operation's team members must not let themselves be captured alive.":
      "В случае провала все участники операции не должны позволить взять себя живыми.",
    "is developing a quantum supercomputer": "разрабатывает квантовый суперкомпьютер",
    "using human brains as core processors.": "с человеческими мозгами в качестве центральных процессоров.",
    "This supercomputer is rumored to be able to store vast amounts of data and perform computations unmatched by any other supercomputer on the planet.":
      "Говорят, этот суперкомпьютер способен хранить огромные объёмы данных и выполнять вычисления, недоступные ни одному другому суперкомпьютеру на планете.",
    "But more importantly, the use of organic human brains means that the supercomputer may be able to reason abstractly and become self-aware.":
      "Но важнее всего то, что использование органических человеческих мозгов может позволить суперкомпьютеру рассуждать абстрактно и обрести самосознание.",
    "I do not need to remind you why sentient-level AIs pose a serious threat to all of mankind.":
      "Не нужно напоминать, почему ИИ с уровнем сознания представляют серьёзную угрозу всему человечеству.",
    "The research for this project is being conducted at one of": "Исследования этого проекта ведутся на одном из секретных объектов",
    "secret facilities in": "в",
    ", codenamed 'Alpha Ranch'. Infiltrate the compound, delete and destroy the work, and then find and kill the project lead.":
      ", под кодовым названием «Ранчо Альфа». Проникните на объект, удалите и уничтожьте результаты работы, а затем найдите и убейте руководителя проекта.",
    "DreamSense Technologies is an advertising company that uses special technology to transmit their ads into the people's dreams and subconscious.":
      "DreamSense Technologies — рекламная компания, использующая особую технологию для передачи рекламы в сны и подсознание людей.",
    "They do this using broadcast transmitter towers.": "Для этого используются башни-передатчики.",
    "Based on information from our agents and informants in": "По сведениям наших агентов и информаторов в",
    "we have reason to believe that one of the broadcast towers there has been compromised by Synthoids and is being used to spread pro-Synthoid propaganda.":
      "мы полагаем, что одна из башен-передатчиков захвачена синтоидами и используется для распространения просинтоидной пропаганды.",
    "The mission is to destroy this broadcast tower.": "Миссия — уничтожить эту башню-передатчик.",
    "Speed and stealth are of the utmost importance for this.": "Здесь важнее всего скорость и скрытность.",
    "Our analysts have uncovered a gathering of MK-VI Synthoids that have taken up residence in the":
      "Наши аналитики обнаружили скопление синтоидов MK-VI, обосновавшихся в",
    "Slums. We don't know if they are rogue Synthoids from the Uprising, but we do know that they have been stockpiling weapons, money, and other resources.":
      "трущобах. Мы не знаем, являются ли они мятежными синтоидами после восстания, но известно, что они запасают оружие, деньги и другие ресурсы.",
    "This makes them dangerous.": "Это делает их опасными.",
    "This is a full-scale assault operation to find and retire all of these Synthoids in the":
      "Это полномасштабная штурмовая операция по поиску и ликвидации всех этих синтоидов в",
    "Slums.": "трущобах.",
    "Our superiors have ordered us to eradicate everything and everyone in an underground facility located in":
      "Наше руководство приказало уничтожить всё и всех в подземном объекте, расположенном в",
    "They tell us that the facility houses many dangerous Synthoids and belongs to a terrorist organization called '":
      "По их словам, на объекте находится множество опасных синтоидов, а принадлежит он террористической организации «",
    "'. We have no prior intelligence about this organization, so you are going in blind.":
      "». У нас нет предварительных сведений об этой организации, поэтому вы отправляетесь вслепую.",
    "the original designer and manufacturer of Synthoids, has notified us of a":
      "— первоначальный разработчик и производитель синтоидов — сообщила нам о",
    "malfunction in their AI design.": "неисправности в конструкции своего ИИ.",
    "This malfunction, when triggered, causes MK-VI Synthoids to become radicalized and seek out the destruction of humanity.":
      "При срабатывании эта неисправность радикализирует синтоидов MK-VI и заставляет их стремиться к уничтожению человечества.",
    "They say that this bug affects all MK-VI Synthoids, not just the rogue ones from the Uprising.":
      "Они утверждают, что ошибка затрагивает всех синтоидов MK-VI, а не только мятежных после восстания.",
    "has also told us they believe someone has triggered this malfunction in a large group of MK-VI Synthoids, and these newly radicalized Synthoids are now amassing in":
      "также сообщила, что, по их мнению, кто-то вызвал неисправность в большой группе синтоидов MK-VI, и теперь эти радикализированные синтоиды собираются в",
    "to form a terrorist group called Ultron.": "и формируют террористическую группу под названием Ultron.",
    "Intelligence suggests Ultron is heavily armed and that their members are augmented.":
      "По данным разведки, Ultron хорошо вооружена, а её участники аугментированы.",
    "We believe Ultron is making moves to take control of and weaponize DeltaOne's Tactical High-Energy Satellite Laser Array (THESLA).":
      "Мы считаем, что Ultron пытается захватить и превратить в оружие тактическую высокоэнергетическую спутниковую лазерную систему DeltaOne (THESLA).",
    "Your task is to find and destroy Ultron.": "Ваша задача — найти и уничтожить Ultron.",
    "Throughout all of humanity's history, we have relied on technology to survive, conquer, and progress.":
      "На протяжении всей истории человечества мы полагались на технологии, чтобы выживать, завоёвывать и развиваться.",
    "Its advancement became our primary goal.": "Их развитие стало нашей главной целью.",
    "And at the peak of human civilization, technology turned into power. Global, absolute power.":
      "А на пике человеческой цивилизации технологии превратились во власть. Глобальную, абсолютную власть.",
    "It seems that the universe is not without a sense of irony.": "Похоже, Вселенная не лишена чувства иронии.",
    "The bits are all around us.": "Биты окружают нас повсюду.",
    "The daemons that hold the Node together can manifest themselves in many different ways.":
      "Демоны, удерживающие Node вместе, могут проявляться множеством разных способов.",
    "Skill Points:": "Очки навыков:",
    "You will gain one skill point every": "Вы получаете одно очко навыков каждые",
    "ranks.": "рангов.",
    "Each level of this skill increases your success chance for all Contracts, Operations, and BlackOps by 3%":
      "Каждый уровень этого навыка повышает шанс успеха всех контрактов, операций и Black Ops на 3%.",
    "Each level of this skill increases your success chance in stealth-related Contracts, Operations, and BlackOps by 5.5%":
      "Каждый уровень этого навыка повышает шанс успеха контрактов, операций и Black Ops, связанных со скрытностью, на 5,5%.",
    "Each level of this skill increases your success chance in Contracts, Operations, and BlackOps that involve retirement by 5.5%":
      "Каждый уровень этого навыка повышает шанс успеха контрактов, операций и Black Ops, связанных с ликвидацией, на 5,5%.",
    "Each level of this skill increases your success chance in all Operations and BlackOps by 4%":
      "Каждый уровень этого навыка повышает шанс успеха всех операций и Black Ops на 4%.",
    "Each level of this skill increases your success chance in all Contracts by 4%":
      "Каждый уровень этого навыка повышает шанс успеха всех контрактов на 4%.",
    "Each level of this skill decreases the time it takes to attempt a Contract, Operation, and BlackOp by 1% (Max Level: 90)":
      "Каждый уровень этого навыка сокращает время выполнения контракта, операции или Black Op на 1% (максимальный уровень: 90).",
    "Each level of this skill increases your effective combat stats for Bladeburner actions by 2%":
      "Каждый уровень этого навыка повышает эффективные боевые характеристики для действий Bladeburner на 2%.",
    "Each level of this skill increases your effective dexterity and agility for Bladeburner actions by 4%":
      "Каждый уровень этого навыка повышает эффективные ловкость и проворство для действий Bladeburner на 4%.",
    "Each level of this skill increases your effectiveness in synthoid population analysis and investigation by 5%. This affects all actions that can potentially increase the accuracy of your synthoid population/community estimates.":
      "Каждый уровень этого навыка повышает эффективность анализа численности и расследований синтоидов на 5%. Это влияет на все действия, способные повысить точность оценок численности и сообществ синтоидов.",
    "Each level of this skill increases your max stamina by 2%": "Каждый уровень этого навыка повышает максимальную выносливость на 2%.",
    "Each level of this skill increases the amount of money you receive from Contracts by 10%": "Каждый уровень этого навыка увеличивает доход от контрактов на 10%.",
    "Each level of this skill increases the experience earned from Contracts, Operations, and BlackOps by 10%": "Каждый уровень этого навыка увеличивает опыт за контракты, операции и Black Ops на 10%.",
    "Your rank within the Bladeburner division.": "Ваш ранг в подразделении Bladeburner.",
    "Performing actions will use up your stamina.": "Выполнение действий расходует выносливость.",
    "Your max stamina is determined primarily by your agility stat.": "Максимальная выносливость в основном определяется характеристикой проворства.",
    "Your stamina gain rate is determined by both your agility and your max stamina. Higher max stamina leads to a higher gain rate.":
      "Скорость восстановления выносливости зависит от проворства и максимальной выносливости. Чем выше максимальная выносливость, тем быстрее восстановление.",
    "Once your stamina falls below 50% of its max value, it begins to negatively affect the success rate of your contracts/operations. This penalty is shown in the overview panel. If the penalty is 15%, then this means your success rate would be multiplied by 85% (100 - 15).":
      "Когда выносливость опускается ниже 50% максимального значения, она начинает снижать шанс успеха контрактов и операций. Этот штраф отображается на панели обзора. Штраф 15% означает, что шанс успеха умножается на 85% (100 − 15).",
    "Your max stamina and stamina gain rate can also be increased by training, or through skills and Augmentation upgrades.":
      "Максимальную выносливость и скорость её восстановления также можно повысить тренировками, навыками и улучшениями аугментаций.",
    "This is your Bladeburner division's estimate of how many Synthoids exist in your current city. An accurate population estimate increases success rate estimates.":
      "Это оценка подразделения Bladeburner — сколько синтоидов находится в текущем городе. Точная оценка численности повышает точность расчёта шанса успеха.",
    "You should be careful with actions that decrease Synthoid population by percentage. Those actions can kill a large number of Synthoids in a short amount of time. Low population count decreases the success chance of most actions. If the population count is too low, you will need to move to another city.":
      "Будьте осторожны с действиями, уменьшающими численность синтоидов на процент. Они могут за короткое время уничтожить множество синтоидов. Низкая численность снижает шанс успеха большинства действий. Если население станет слишком малым, придётся перебраться в другой город.",
    "The intelligence agency notifies us that Synthoid population is": "Разведка сообщает, что численность синтоидов",
    "This is your Bladeburner division's estimate of how many Synthoid communities exist in your current city.":
      "Это оценка подразделения Bladeburner — сколько сообществ синтоидов находится в текущем городе.",
    "Tensions and conflicts between humans and Synthoids increase the city's chaos level. High chaos level makes contracts and operations harder.":
      "Напряжённость и конфликты между людьми и синтоидами повышают уровень хаоса в городе. Высокий уровень хаоса усложняет контракты и операции.",
    "Chaos level is": "Уровень хаоса",
    "You gain bonus time while offline or when the game is inactive (e.g. when the tab is throttled by browser). Bonus time makes the Bladeburner mechanic progress faster, up to 5x the normal speed.":
      "Вы получаете бонусное время, когда не в сети или игра неактивна (например, когда браузер ограничивает вкладку). Бонусное время ускоряет механику Bladeburner — максимум в 5 раз.",
    "Aug. Success Chance mult:": "Множитель шанса успеха от аугментаций:",
    "Aug. Max Stamina mult:": "Множитель максимальной выносливости от аугментаций:",
    "Aug. Stamina Gain mult:": "Множитель восстановления выносливости от аугментаций:",
    "Aug. Field Analysis effectiveness mult:": "Множитель эффективности полевого анализа от аугментаций:",

    // Corporation data and management screens
    Export: "Экспорт",
    "Smart Supply": "Умное снабжение",
    "Market Research - Demand": "Исследование рынка — спрос",
    "Market Data - Competition": "Данные рынка — конкуренция",
    "Shady Accounting": "Теневая бухгалтерия",
    "Government Partnership": "Партнёрство с правительством",
    "Warehouse API": "API склада",
    "Office API": "API офиса",
    "Smart Factories": "Умные фабрики",
    "Smart Storage": "Умные склады",
    "Wilson Analytics": "Аналитика Wilson",
    "Nuoptimal Nootropic Injector Implants": "Импланты-нейроинъекторы Nuoptimal",
    "Speech Processor Implants": "Импланты речевого процессора",
    "Neural Accelerators": "Нейроускорители",
    FocusWires: "FocusWire",
    "ABC SalesBots": "Торговые боты ABC",
    "Project Insight": "Проект «Проницательность»",
    "Water Utilities": "Водоснабжение",
    Agriculture: "Сельское хозяйство",
    Fishing: "Рыболовство",
    Mining: "Добыча",
    Refinery: "Переработка",
    Restaurant: "Ресторан",
    Tobacco: "Табак",
    Chemical: "Химическая промышленность",
    Pharmaceutical: "Фармацевтика",
    "Computer Hardware": "Компьютерное оборудование",
    Robotics: "Робототехника",
    Software: "Программное обеспечение",
    Healthcare: "Здравоохранение",
    "Real Estate": "Недвижимость",
    Engineer: "Инженеры",
    Business: "Отдел продаж",
    Management: "Менеджмент",
    "Research & Development": "Исследования и разработки",
    Intern: "Стажёры",
    Unassigned: "Не назначены",
    Water: "Вода",
    Ore: "Руда",
    Minerals: "Минералы",
    Food: "Еда",
    Plants: "Растения",
    Metal: "Металл",
    Hardware: "Оборудование",
    Chemicals: "Химикаты",
    Drugs: "Препараты",
    Robots: "Роботы",
    "AI Cores": "Ядра ИИ",
    "Real Estate": "Недвижимость",
    Product: "Товар",
    Drug: "Препарат",
    Robot: "Робот",
    Hospital: "Больница",
    "Develop infrastructure to export your materials to your other facilities. This allows you to move materials around between different divisions and cities.":
      "Развивайте инфраструктуру для экспорта материалов на другие объекты. Это позволяет перемещать материалы между разными подразделениями и городами.",
    "Use advanced AI to anticipate your supply needs. This allows you to purchase exactly however many materials you need for production.":
      "Используйте передовой ИИ для прогнозирования потребностей в снабжении. Это позволяет покупать ровно столько материалов, сколько нужно для производства.",
    "Mine and analyze market data to determine the demand of all resources. The demand attribute, which affects sales, will be displayed for every material and product.":
      "Собирайте и анализируйте данные рынка, чтобы определить спрос на все ресурсы. Показатель спроса, влияющий на продажи, будет отображаться для каждого материала и товара.",
    "Mine and analyze market data to determine how much competition there is on the market for all resources. The competition attribute, which affects sales, will be displayed for every material and product.":
      "Собирайте и анализируйте данные рынка, чтобы определить конкуренцию для всех ресурсов. Показатель конкуренции, влияющий на продажи, будет отображаться для каждого материала и товара.",
    "Utilize unscrupulous accounting practices and pay off government officials to save money on tribute. This reduces the tribute modifier by 0.05.":
      "Используйте нечестные методы бухгалтерии и подкупайте чиновников, чтобы экономить на дани. Это уменьшает множитель дани на 0,05.",
    "Help national governments further their agendas in exchange for lowered tribute. This reduces the tribute modifier by 0.1":
      "Помогайте национальным правительствам продвигать их повестку в обмен на снижение дани. Это уменьшает множитель дани на 0,1.",
    "Enables the warehouse API.": "Включает API склада.",
    "Enables the office API.": "Включает API офиса.",
    "Advanced AI automatically optimizes the operation and productivity of factories. Each level of this upgrade increases your global production by 3% (additive).":
      "Передовой ИИ автоматически оптимизирует работу и производительность фабрик. Каждый уровень улучшения увеличивает общее производство на 3% (складывается).",
    "Advanced AI automatically optimizes your warehouse storage methods. Each level of this upgrade increases your global warehouse storage size by 10% (additive).":
      "Передовой ИИ автоматически оптимизирует хранение на складах. Каждый уровень улучшения увеличивает общую вместимость складов на 10% (складывается).",
    "Purchase data and analysis from Wilson, a marketing research firm. Each level of this upgrade increases the effectiveness of your advertising by 0.5% (additive).":
      "Покупайте данные и аналитику у маркетинговой фирмы Wilson. Каждый уровень улучшения повышает эффективность рекламы на 0,5% (складывается).",
    "Purchase the Nuoptimal Nootropic Injector augmentation for your employees. Each level of this upgrade globally increases the creativity of your employees by 10% (additive).":
      "Покупайте сотрудникам имплант «Нейроинъектор Nuoptimal». Каждый уровень улучшения глобально повышает креативность сотрудников на 10% (складывается).",
    "Purchase the Speech Processor augmentation for your employees. Each level of this upgrade globally increases the charisma of your employees by 10% (additive).":
      "Покупайте сотрудникам имплант «Речевой процессор». Каждый уровень улучшения глобально повышает обаяние сотрудников на 10% (складывается).",
    "Purchase the Neural Accelerator augmentation for your employees. Each level of this upgrade globally increases the intelligence of your employees by 10% (additive).":
      "Покупайте сотрудникам имплант «Нейроускоритель». Каждый уровень улучшения глобально повышает интеллект сотрудников на 10% (складывается).",
    "Purchase the FocusWire augmentation for your employees. Each level of this upgrade globally increases the efficiency of your employees by 10% (additive).":
      "Покупайте сотрудникам имплант FocusWire. Каждый уровень улучшения глобально повышает эффективность сотрудников на 10% (складывается).",
    "Always Be Closing. Purchase these robotic salesmen to increase the amount of materials and products you sell. Each level of this upgrade globally increases your sales by 1% (additive).":
      "Всегда доводите сделку до конца. Покупайте этих роботов-продавцов, чтобы увеличить продажи материалов и товаров. Каждый уровень улучшения глобально повышает продажи на 1% (складывается).",
    "Purchase 'Project Insight', a R&D service provided by the secretive Fulcrum Technologies. Each level of this upgrade globally increases the amount of Scientific Research you produce by 5% (additive).":
      "Покупайте «Проект „Проницательность“» — услугу исследований и разработок от загадочной Fulcrum Technologies. Каждый уровень улучшения глобально увеличивает производство научных исследований на 5% (складывается).",
    "Cultivate crops and breed livestock to produce food.": "Выращивайте культуры и разводите скот для производства еды.",
    "Refine ore into usable metal.": "Перерабатывайте руду в пригодный к использованию металл.",
    "Produce industrial chemicals.": "Производите промышленные химикаты.",
    "Develop and manufacture new computer hardware and networking infrastructures.": "Разрабатывайте и производите новое компьютерное оборудование и сетевую инфраструктуру.",
    "Design and manufacture a new computer hardware product!": "Спроектируйте и изготовьте новый товар — компьютерное оборудование!",
    "Produce food through the breeding and processing of fish and fish products.": "Производите еду, разводя и перерабатывая рыбу и рыбную продукцию.",
    "Create your own restaurants all around the world.": "Создавайте собственные рестораны по всему миру.",
    "Build and manage a new restaurant!": "Постройте и управляйте новым рестораном!",
    "Create and manage hospitals.": "Создавайте и управляйте больницами.",
    "Build and manage a new hospital!": "Постройте и управляйте новой больницей!",
    "Extract and process metals from the earth.": "Добывайте и перерабатывайте металлы из недр земли.",
    "Discover, develop, and create new pharmaceutical drugs.": "Открывайте, разрабатывайте и создавайте новые фармацевтические препараты.",
    "Design and develop a new pharmaceutical drug!": "Спроектируйте и разработайте новый фармацевтический препарат!",
    "Develop and manage real estate properties.": "Разрабатывайте и управляйте объектами недвижимости.",
    "Develop a new piece of real estate property!": "Разработайте новый объект недвижимости!",
    "Develop and create robots.": "Разрабатывайте и создавайте роботов.",
    "Design and create a new robot or robotic system!": "Спроектируйте и создайте нового робота или роботизированную систему!",
    "Develop computer software and create AI Cores.": "Разрабатывайте программное обеспечение и создавайте ядра ИИ.",
    "Develop a new piece of software!": "Разработайте новое программное обеспечение!",
    "Create and distribute tobacco and tobacco-related products.": "Создавайте и распространяйте табак и табачную продукцию.",
    "Create a new tobacco product!": "Создайте новый табачный товар!",
    "Distribute water and provide wastewater services.": "Распределяйте воду и предоставляйте услуги очистки сточных вод.",
    "Required Materials:": "Требуемые материалы:",
    "Produces Materials:": "Производимые материалы:",
    "Recommended starting Industry:": "Рекомендуемая начальная отрасль:",
    "Employee Production:": "Производительность сотрудников:",
    "Awareness Bonus:": "Бонус осведомлённости:",
    "Popularity Bonus:": "Бонус популярности:",
    "Advertising Multiplier:": "Множитель рекламы:",
    "Production Multiplier:": "Множитель производства:",
    "Scientific Research Multiplier:": "Множитель научных исследований:",
    "Storage Multiplier:": "Множитель вместимости:",
    "Empl. Charisma Multiplier:": "Множитель обаяния сотрудников:",
    "Empl. Creativity Multiplier:": "Множитель креативности сотрудников:",
    "Empl. Efficiency Multiplier:": "Множитель эффективности сотрудников:",
    "Empl. Intelligence Multiplier:": "Множитель интеллекта сотрудников:",
    "Total Assets:": "Всего активов:",
    "Total Expenses:": "Всего расходов:",
    "Total Funds:": "Всего средств:",
    "Total Profit:": "Общая прибыль:",
    "Total Revenue:": "Общая выручка:",
    "Total Space": "Общая вместимость",
    "Outstanding Shares:": "Выпущенные акции:",
    "Owned Stock Shares:": "Имеющиеся акции:",
    "Private Shares:": "Частные акции:",
    "Stock Price:": "Цена акции:",
    "Publicly Traded:": "Публичные торги:",
    "Retained Profits (after dividends):": "Нераспределённая прибыль (после дивидендов):",
    "Dividends per share:": "Дивиденды на акцию:",
    "Marketing investment": "Инвестиции в маркетинг",
    "Design investment": "Инвестиции в проектирование",
    "Product Name": "Название товара",
    "Product Name": "Название товара",
    "Hospital Name": "Название больницы",
    "Restaurant Name": "Название ресторана",
    "Property Name": "Название объекта",
    "Bulk Purchase amount": "Количество для оптовой покупки",
    "Purchase amount": "Количество покупки",
    "Sell amount": "Количество продажи",
    "Sell price": "Цена продажи",
    "Export amount / s": "Экспорт / с",
    "Purchase Warehouse (": "Купить склад (",
    "Upgrade Warehouse Size -": "Увеличить размер склада —",
    "Storage space:": "Место на складе:",
    "This industry uses the following equation for its production:": "Эта отрасль использует следующую формулу производства:",
    "To get started with production, purchase your required materials or import them from another of your company's divisions.":
      "Чтобы начать производство, купите необходимые материалы или импортируйте их из другого подразделения вашей компании.",
    "Purchase Warehouse": "Купить склад",
    "Configure Smart Supply": "Настроить умное снабжение",
    "Use imported": "Использовать импорт",
    "Use leftovers": "Использовать остатки",
    "Note: Purchase amount is disabled as smart supply is enabled": "Примечание: количество покупки отключено, поскольку включено умное снабжение",
    "Office Space": "Место в офисе",
    "Size:": "Размер:",
    "employees": "сотрудников",
    "Hire Employee": "Нанять сотрудника",
    "Upgrade size": "Увеличить размер",
    "Buying Tea": "Покупка чая",
    "Buy Tea -": "Купить чай —",
    "Throwing Party...": "Вечеринка проводится...",
    "Throw Party": "Устроить вечеринку",
    "Provide your employees with tea to increase their energy": "Дайте сотрудникам чай, чтобы повысить их энергию",
    "Throw an office party to increase your employees' morale": "Устройте офисную вечеринку, чтобы повысить мораль сотрудников",
    "You don't have enough company funds to throw a party!": "У компании недостаточно средств для вечеринки!",
    "You threw a party for the office! The morale of each employee increased by": "Вы устроили вечеринку в офисе! Мораль каждого сотрудника повысилась на",
    "Insufficient player funds": "Недостаточно средств игрока",
    "Would you like to expand into a new city by opening an office? This would cost": "Хотите расшириться в новый город, открыв офис? Это будет стоить",
    "Opened a new office in": "Открыт новый офис в",

    // Gang management, tasks, and equipment
    Management: "Управление",
    Equipment: "Снаряжение",
    "your Gang": "ваша банда",
    "Your gang": "Ваша банда",
    "Recruit Gang Member": "Нанять участника банды",
    "Can recruit": "Можно нанять",
    "more gang member": "ещё одного участника банды",
    "more gang members": "ещё участников банды",
    "respect needed to recruit next member": "уважения нужно для найма следующего участника",
    "Territory Warfare": "Территориальная война",
    Ransomware: "Программы-вымогатели",
    Phishing: "Фишинг",
    "Identity Theft": "Кража личности",
    "DDoS Attacks": "DDoS-атаки",
    "Plant Virus": "Распространять вирусы",
    "Fraud & Counterfeiting": "Мошенничество и подделки",
    "Money Laundering": "Отмывание денег",
    Cyberterrorism: "Кибертерроризм",
    "Ethical Hacking": "Этичный взлом",
    "Mug People": "Грабить прохожих",
    "Deal Drugs": "Торговать наркотиками",
    "Strongarm Civilians": "Запугивать граждан",
    "Run a Con": "Проводить аферы",
    "Armed Robbery": "Вооружённые ограбления",
    "Traffick Illegal Arms": "Торговать оружием",
    "Threaten & Blackmail": "Угрожать и шантажировать",
    "Human Trafficking": "Торговля людьми",
    Terrorism: "Терроризм",
    "Vigilante Justice": "Самосуд",
    "Train Combat": "Тренировать бой",
    "Train Hacking": "Тренировать взлом",
    "Train Charisma": "Тренировать обаяние",
    "Assign this gang member to": "Назначьте этого участника банды на задачу: ",
    "This gang member is currently idle": "Этот участник банды сейчас бездействует",
    "Earns money": "Зарабатывает деньги",
    "Slightly increases respect": "Немного повышает уважение",
    "Increases respect": "Повышает уважение",
    "Greatly increases respect": "Сильно повышает уважение",
    "Slightly increases wanted level": "Немного повышает уровень розыска",
    "Very slightly increases wanted level": "Совсем немного повышает уровень розыска",
    "Increases wanted level": "Повышает уровень розыска",
    "Greatly increases wanted level": "Сильно повышает уровень розыска",
    "Lowers wanted level": "Снижает уровень розыска",
    "Increases wanted": "Повышает розыск",
    "Decreases wanted level": "Снижает уровень розыска",
    "Scales slightly with territory": "Слабо зависит от территории",
    "Scales heavily with territory": "Сильно зависит от территории",
    "Assign this gang member to create and distribute ransomware": "Назначьте этого участника банды создавать и распространять программы-вымогатели",
    "Assign this gang member to attempt phishing scams and attacks": "Назначьте этого участника банды заниматься фишинговыми схемами и атаками",
    "Assign this gang member to attempt identity theft": "Назначьте этого участника банды пытаться красть личные данные",
    "Assign this gang member to carry out DDoS attacks": "Назначьте этого участника банды проводить DDoS-атаки",
    "Assign this gang member to create and distribute malicious viruses": "Назначьте этого участника банды создавать и распространять вредоносные вирусы",
    "Assign this gang member to commit financial fraud and digital counterfeiting": "Назначьте этого участника банды заниматься финансовым мошенничеством и цифровой подделкой",
    "Assign this gang member to launder money": "Назначьте этого участника банды отмывать деньги",
    "Assign this gang member to commit acts of cyberterrorism": "Назначьте этого участника банды совершать акты кибертерроризма",
    "Assign this gang member to be an ethical hacker for corporations": "Назначьте этого участника банды быть этичным хакером для корпораций",
    "Assign this gang member to mug random people on the streets": "Назначьте этого участника банды грабить случайных людей на улицах",
    "Assign this gang member to sell drugs": "Назначьте этого участника банды продавать наркотики",
    "Assign this gang member to extort civilians in your territory": "Назначьте этого участника банды вымогать деньги у граждан на вашей территории",
    "Assign this gang member to run cons": "Назначьте этого участника банды проводить аферы",
    "Assign this gang member to commit armed robbery on stores, banks and armored cars": "Назначьте этого участника банды совершать вооружённые ограбления магазинов, банков и инкассаторских машин",
    "Assign this gang member to traffick illegal arms": "Назначьте этого участника банды торговать нелегальным оружием",
    "Assign this gang member to threaten and blackmail high-profile targets": "Назначьте этого участника банды угрожать и шантажировать важных лиц",
    "Assign this gang member to engage in human trafficking operations": "Назначьте этого участника банды заниматься торговлей людьми",
    "Assign this gang member to commit acts of terrorism": "Назначьте этого участника банды совершать террористические акты",
    "Assign this gang member to be a vigilante and protect the city from criminals": "Назначьте этого участника банды вершить самосуд и защищать город от преступников",
    "Assign this gang member to increase their combat stats (str, def, dex, agi)": "Назначьте этого участника банды повышать боевые характеристики (сила, защита, ловкость, проворство)",
    "Assign this gang member to train their hacking skills": "Назначьте этого участника банды тренировать навыки взлома",
    "Assign this gang member to train their charisma": "Назначьте этого участника банды тренировать обаяние",
    "Members assigned to this task increase your gang's power. They will also fight for territory if 'Territory Clashes' are enabled.":
      "Участники, назначенные на эту задачу, увеличивают силу вашей банды. Если включены «Территориальные столкновения», они также сражаются за территорию.",
    "Gang members performing this task can be killed during clashes.": "Участники банды, выполняющие эту задачу, могут погибнуть во время столкновений.",
    "Represents the amount of respect your gang has from other gangs and criminal organizations. Your respect affects the amount of money your gang members will earn, and also determines how much reputation you are earning with your gang's corresponding Faction.":
      "Показывает, насколько другие банды и преступные организации уважают вашу банду. Уважение влияет на доход участников и определяет, сколько репутации вы получаете в соответствующей фракции.",
    "Represents how much the gang is wanted by law enforcement. The higher your gang's wanted level, the harder it will be for your gang members to make money and earn respect. Note that the minimum wanted level is 1.":
      "Показывает, насколько ваша банда разыскивается правоохранительными органами. Чем выше уровень розыска, тем сложнее участникам зарабатывать деньги и уважение. Минимальный уровень розыска — 1.",
    "Wanted Level Penalty:": "Штраф за уровень розыска:",
    "Money gain rate:": "Скорость получения денег:",
    "Faction reputation:": "Репутация во фракции:",
    "Bonus time:": "Бонусное время:",
    "A discount on equipment and upgrades based on your gang's respect and power. More respect and power leads to more discounts.":
      "Скидка на снаряжение и улучшения зависит от уважения и силы вашей банды. Чем выше уважение и сила, тем больше скидка.",
    Discount: "Скидка",
    Weapons: "Оружие",
    Armor: "Броня",
    Vehicles: "Транспорт",
    Rootkits: "Руткиты",
    "All upgrades owned!": "Все улучшения приобретены!",
    "Purchased Upgrades:": "Приобретённые улучшения:",
    "Filter the members list by whether or not the member can be ascended.": "Фильтровать список по возможности возвышения участника.",
    "Ascending a Gang Member resets that member's progress and stats in exchange for a permanent boost to their stat multipliers.":
      "Возвышение участника банды сбрасывает его прогресс и характеристики, но навсегда увеличивает множители характеристик.",
    "The stat boost a Gang Member gains upon ascension is based on the amount of exp they have, and will be shown before you choose to ascend them.":
      "Бонус к характеристикам после возвышения зависит от накопленного опыта и отображается до подтверждения возвышения.",
    "Upon ascension, they will lose all of their non-Augmentation Equipment and your gang will lose respect equal to the total respect earned by that member.":
      "После возвышения участник потеряет всё снаряжение, кроме аугментаций, а банда потеряет уважение, равное уважению, заработанному этим участником.",
    "Enter a name for your new Gang Member:": "Введите имя нового участника банды:",
    "unique name": "уникальное имя",
    Recruit: "Нанять",
    "Are you sure you want to ascend this member? They will lose all of": "Вы уверены, что хотите возвысить этого участника? Он потеряет все",
    "their non-Augmentation upgrades and their stats will reset back to 1.": "улучшения, кроме аугментаций, а его характеристики вернутся к 1.",
    "Furthermore, your gang will lose": "Кроме того, ваша банда потеряет",
    "respect.": "уважения.",
    "will gain the following permanent boost to stat multipliers:": "получит следующие постоянные бонусы к множителям характеристик:",
    "ascended!": "возвышен!",
    "gained the following stat multipliers for ascending:": "получил следующие множители характеристик за возвышение:",
    "This page shows how much territory your Gang controls. This statistic is listed as a percentage, which represents how much of the total territory you control.":
      "На этой странице показано, какой территорией управляет ваша банда. Значение указано в процентах от всей контролируемой территории.",
    "About Gang Territory": "О территории банды",
    "Every ~20 seconds, your gang has a chance to 'clash' with other gangs. Your chance to win a clash depends on your gang's power, found in the Territory display or with methods from the Gang API. Your gang's power slowly accumulates over time, determined by the stats of all Gang members you have assigned to the 'Territory Warfare' task. Gang members that are not assigned to this task do not contribute to your gang's power. Your gang also loses a small amount of power whenever you lose a clash.":
      "Примерно каждые 20 секунд ваша банда может столкнуться с другой. Шанс победы зависит от силы банды, указанной на экране территории или доступной через Gang API. Сила постепенно накапливается и определяется характеристиками участников, назначенных на задачу «Территориальная война». Остальные участники не увеличивают силу. При каждом проигрыше банда также немного теряет силу.",
    "NOTE: Gang members assigned to 'Territory Warfare' can be killed during clashes. This can happen regardless of whether you win or lose the clash. A gang member being killed results in loss of both respect and power for your gang.":
      "ПРИМЕЧАНИЕ: участники, назначенные на «Территориальную войну», могут погибнуть в столкновении независимо от победы или поражения. Гибель участника уменьшает уважение и силу вашей банды.",
    "The amount of territory you have affects all aspects of your Gang members' production, including money, respect, and wanted level. It is very beneficial to have high territory control.":
      "Размер территории влияет на все виды производительности участников банды: деньги, уважение и уровень розыска. Большой контроль территории очень выгоден.",
    "To increase your chances of winning territory, assign gang members to \"Territory Warfare\". This will build your gang power. Then, enable \"Engage in Territory Clashes\" to start fighting over territory.":
      "Чтобы повысить шанс победы за территорию, назначьте участников на «Территориальную войну». Это увеличит силу банды. Затем включите «Участвовать в территориальных столкновениях», чтобы начать борьбу за территорию.",
    "Territory Clash Chance": "Шанс территориального столкновения",
    "Engage in Territory Clashes": "Участвовать в территориальных столкновениях",
    "Engaging in Territory Clashes sets your clash chance to 100%. Disengaging will cause your clash chance to gradually decrease until it reaches 0%.":
      "Участие в территориальных столкновениях устанавливает шанс столкновения на 100%. Отказ от участия постепенно снизит его до 0%.",
    "If this is enabled, you will receive a pop-up notifying you whenever one of your Gang Members dies in a territory clash.":
      "Если включено, вы будете получать окно уведомления всякий раз, когда участник банды погибает в территориальном столкновении.",
    "Your gang is too weak.": "Ваша банда слишком слаба.",
    "Its win chances against all other gangs are below 50%.": "Шанс победы над всеми остальными бандами ниже 50%.",
    "On average, you will always lose territory when being engaged in clashes.": "В среднем при участии в столкновениях вы всегда будете терять территорию.",
    "Do you really want to engage in territory clashes?": "Вы действительно хотите участвовать в территориальных столкновениях?",
    "Territory Clash Chance:": "Шанс территориального столкновения:",
    "Clash Win Chance:": "Шанс победы в столкновении:",

    // Locations, travel, jobs, university, and special facilities
    "AeroCorp": "AeroCorp",
    "Bachman & Associates": "Bachman & Associates",
    "Crush Fitness Gym": "Фитнес-клуб Crush",
    "Snap Fitness Gym": "Фитнес-клуб Snap",
    "Summit University": "Университет Summit",
    "Aevum Police Headquarters": "Штаб полиции Aevum",
    "Iker Molina Casino": "Казино Икера Молины",
    "Church of the Machine God": "Церковь Бога-машины",
    "Shadowed Walkway": "Тёмный переход",
    "Central Intelligence Agency": "Центральное разведывательное управление",
    "Sector-12 City Hall": "Мэрия Sector-12",
    "National Security Agency": "Агентство национальной безопасности",
    "Iron Gym": "Зал Iron",
    "Powerhouse Gym": "Зал Powerhouse",
    "Rothman University": "Университет Ротмана",
    "ZB Institute of Technology": "Технологический институт ZB",
    Hospital: "Больница",
    "The Slums": "Трущобы",
    "Travel Agency": "Туристическое агентство",
    "World Stock Exchange": "Всемирная фондовая биржа",
    "The Void": "Пустота",
    "Return to World": "Вернуться в мир",
    "Backdoor installed on": "Бэкдор установлен на",
    "Train Strength (": "Тренировать силу (",
    "Train Defense (": "Тренировать защиту (",
    "Train Dexterity (": "Тренировать ловкость (",
    "Train Agility (": "Тренировать проворство (",
    "Get treatment for wounds -": "Получить лечение ран —",
    "You were healed to full health! The hospital billed you for": "Вы полностью исцелены! Больница выставила счёт на",
    "No jobs": "Нет работы",
    "Purchase": "Купить",
    "Cloud Server": "облачный сервер",
    "Purchase TOR router -": "Купить TOR-маршрутизатор —",
    Purchased: "Куплено",
    Max: "Максимум",
    "You can order bigger cloud servers via scripts. We don't take custom orders in person.":
      "Более мощные облачные серверы можно заказывать через скрипты. Личные заказы в офисе не принимаются.",
    "You cannot afford to purchase the TOR router!": "У вас недостаточно денег для покупки TOR-маршрутизатора!",
    "You already have a TOR Router!": "У вас уже есть TOR-маршрутизатор!",
    "You have purchased a TOR router!\nYou now have access to the dark web from your home computer.\nUse the \"buy\" command in the terminal to purchase programs.":
      "Вы купили TOR-маршрутизатор!\nТеперь с домашнего компьютера вам доступен даркнет.\nИспользуйте команду «buy» в терминале, чтобы покупать программы.",
    "You have purchased a TOR router!": "Вы купили TOR-маршрутизатор!",
    "You now have access to the dark web from your home computer.": "Теперь с домашнего компьютера вам доступен даркнет.",
    "Use the \"buy\" command in the terminal to purchase programs.": "Используйте команду «buy» в терминале, чтобы покупать программы.",
    "You ate some delicious noodles and feel refreshed": "Вы съели вкусную лапшу и почувствовали себя бодрее",
    "Apply to Bladeburner Division": "Подать заявку в подразделение Bladeburner",
    "Do you really want to join the Bladeburner division now?": "Вы действительно хотите сейчас вступить в подразделение Bladeburner?",
    "Rejected! Please apply again when you have 100 of each combat stat (str, def, dex, agi)": "Отказано! Подайте заявку снова, когда каждая боевая характеристика (сила, защита, ловкость, проворство) достигнет 100.",
    "You have been accepted into the Bladeburner division!": "Вы приняты в подразделение Bladeburner!",
    "Cores increase the effectiveness of grow() and weaken() on 'home'": "Ядра повышают эффективность grow() и weaken() на «home».",
    "An eerie aura surrounds this area. You feel you should leave.": "Это место окружает зловещая аура. Вам кажется, что стоит уйти.",
    "You don't have enough money to buy": "У вас недостаточно денег, чтобы купить",
    "You bought": "Вы купили",
    "The city is dark and quiet. It stretches out below this decrepit walkway, a seemingly endless expanse of decaying concrete and rusted metal.":
      "Город тёмен и тих. Он простирается под этим ветхим переходом, кажущийся бесконечным простор из разрушающегося бетона и ржавого металла.",
    "Nearby, an ancient automat sits askew, its screen flickering with static, still covered with ads for the compact disks it sells for credits.":
      "Рядом перекошенно стоит древний автомат: его экран мерцает помехами и всё ещё покрыт рекламой компакт-дисков, которые он продаёт за кредиты.",
    "On it, a faded sign reads:": "На нём выцветшая надпись гласит:",
    "Resistance, change, & freedom: powered by privacy. Darkscape Navigator is the only way to escape the oppression of the Great Firewall.":
      "Сопротивление, перемены и свобода — благодаря приватности. Darkscape Navigator — единственный способ вырваться из-под гнёта Великого файрвола.",
    "Buy": "Купить",
    " - Purchased": " — куплено",
    "You are now in": "Теперь вы в городе",
    "From": "Из города",
    "you can travel to any other city! A ticket costs": "можно отправиться в любой другой город! Билет стоит",
    "Travel to": "Отправиться в",
    "Would you like to travel to": "Хотите отправиться в",
    "The trip will cost": "Поездка будет стоить",
    "Study Computer Science (free)": "Изучать информатику (бесплатно)",
    "Take Data Structures course (": "Посещать курс структур данных (",
    "Take Networks course (": "Посещать курс сетей (",
    "Take Algorithms course (": "Посещать курс алгоритмов (",
    "Take Management course (": "Посещать курс менеджмента (",
    "Take Leadership course (": "Посещать курс лидерства (",
    "Gain hacking experience!": "Получайте опыт взлома!",
    "Gain charisma experience!": "Получайте опыт обаяния!",
    "Play coin flip": "Играть в орлянку",
    "Play slots": "Играть в игровые автоматы",
    "Play roulette": "Играть в рулетку",
    "Play blackjack (": "Играть в блэкджек (",

    // Hacknet nodes, servers, and hash upgrades
    "Hacknet Servers": "Серверы Hacknet",
    "Hacknet Nodes": "Узлы Hacknet",
    "Spend Hashes on Upgrades": "Тратить хэши на улучшения",
    "Purchase Hacknet Server -": "Купить сервер Hacknet —",
    "Purchase Hacknet Node -": "Купить узел Hacknet —",
    "Hacknet Server limit reached": "Достигнут лимит серверов Hacknet",
    "Sell for Money": "Продать за деньги",
    "Sell for Corporation Funds": "Продать за средства корпорации",
    "Reduce Minimum Security": "Уменьшить минимальную безопасность",
    "Increase Maximum Money": "Увеличить максимальные деньги",
    "Improve Studying": "Улучшить обучение",
    "Improve Gym Training": "Улучшить тренировки в спортзале",
    "Exchange for Corporation Research": "Обменять на исследования корпорации",
    "Exchange for Bladeburner Rank": "Обменять на ранг Bladeburner",
    "Exchange for Bladeburner SP": "Обменять на очки навыков Bladeburner",
    "Generate Coding Contract": "Создать контракт на программирование",
    "Company Favor": "Благосклонность компании",
    "The Hacknet is a global, decentralized network of machines. It is used by hackers all around the world to anonymously share computing power and perform distributed cyberattacks without the fear of being traced.":
      "Hacknet — это глобальная децентрализованная сеть машин. Хакеры со всего мира используют её для анонимного совместного использования вычислительных ресурсов и распределённых кибератак без страха быть обнаруженными.",
    "Here, you can purchase a Hacknet Node, a specialized machine that can connect and contribute its resources to the Hacknet network. This allows you to take a small percentage of profits from hacks performed on the network. Essentially, you are renting out your Node's computing power.":
      "Здесь можно купить узел Hacknet — специализированную машину, которая подключается к сети и предоставляет ей свои ресурсы. Вы будете получать небольшой процент прибыли от взломов в сети, фактически сдавая вычислительную мощность узла в аренду.",
    "Each Hacknet Node you purchase will passively earn you money. Each Hacknet Node can be upgraded in order to increase its computing power and thereby increase the profit you earn from it.":
      "Каждый купленный узел Hacknet будет пассивно приносить деньги. Узлы можно улучшать, повышая их вычислительную мощность и доход.",
    "Here, you can purchase a Hacknet Server, an upgraded version of the Hacknet Node. Hacknet Servers will perform computations and operations on the network, earning you hashes. Hashes can be spent on a variety of different upgrades.":
      "Здесь можно купить сервер Hacknet — улучшенную версию узла Hacknet. Серверы выполняют вычисления и операции в сети, принося вам хэши. Хэши можно тратить на различные улучшения.",
    "Hacknet Servers can also be used as servers to run scripts. However, running scripts on a server will reduce its hash rate (hashes generated per second). A Hacknet Server's hash rate will be reduced by the percentage of RAM that is being used by that Server to run scripts.":
      "Серверы Hacknet также можно использовать для запуска скриптов. Однако запуск скриптов уменьшает скорость получения хэшей (хэшей в секунду). Скорость сервера снизится на процент ОЗУ, используемый для запуска скриптов.",
    "Sell hashes for": "Продать хэши за",
    "in Corporation funds": "в средства корпорации",
    "Sold for": "Продано за",
    "Corporation funds.": "средства корпорации.",
    "Use hashes to decrease the minimum security of a single server by 2%. Note that a server's minimum security cannot go below 1. This effect persists until you install augmentations (since servers are reset at that time).":
      "Используйте хэши, чтобы уменьшить минимальную безопасность одного сервера на 2%. Минимальная безопасность сервера не может быть ниже 1. Эффект действует до установки аугментаций, поскольку тогда серверы сбрасываются.",
    "Use hashes to increase the maximum amount of money on a single server by 2%. This effect persists until you install augmentations (since servers are reset at that time). Note that a server's maximum money is soft capped above":
      "Используйте хэши, чтобы увеличить максимальную сумму денег на одном сервере на 2%. Эффект действует до установки аугментаций, поскольку тогда серверы сбрасываются. Учтите, что максимальная сумма денег на сервере после",
    "Use hashes to improve the experience earned when studying at a university by 20%. This effect persists until you install augmentations.":
      "Используйте хэши, чтобы увеличить опыт за обучение в университете на 20%. Эффект действует до установки аугментаций.",
    "Improves studying by": "Улучшает обучение на",
    "Use hashes to improve the experience earned when training at the gym by 20%. This effect persists until you install augmentations.":
      "Используйте хэши, чтобы увеличить опыт за тренировки в спортзале на 20%. Эффект действует до установки аугментаций.",
    "Improves training by": "Улучшает тренировки на",
    "Exchange hashes for 1k Scientific Research in all of your corporation's divisions": "Обменять хэши на 1 тыс. научных исследований во всех подразделениях корпорации",
    "Acquired a total of": "Всего получено",
    "Scientific Research in your divisions.": "научных исследований в ваших подразделениях.",
    "Exchange hashes for 100 Bladeburner Rank": "Обменять хэши на 100 ранга Bladeburner",
    "Acquired a total of": "Всего получено",
    "Bladeburner rank": "ранга Bladeburner",
    "Exchanges hashes for 10 Bladeburner Skill Points": "Обменять хэши на 10 очков навыков Bladeburner",
    "Bladeburner Skill Points": "очков навыков Bladeburner",
    "Generate a random Coding Contract somewhere on the network": "Создать случайный контракт на программирование где-нибудь в сети",
    "Generated": "Создано",
    "contracts.": "контрактов.",
    "Use hashes to increase the favor with a company by 5. This effect persists until you enter a new BitNode.": "Используйте хэши, чтобы повысить благосклонность компании на 5. Эффект действует до перехода в новый BitNode.",
    "Cost:": "Стоимость:",
    "Bought:": "Куплено:",
    times: "раз",
    "Hash Rate:": "Скорость хэшей:",
    "Production Rate:": "Скорость производства:",
    "Money Spent:": "Потрачено денег:",
    "Money Produced:": "Заработано денег:",
    "if sold for money": "при продаже за деньги",
    "MAX CACHE": "МАКС. КЭШ",
    "Cache Level:": "Уровень кэша:",
    "Hash Capacity:": "Ёмкость хэшей:",
    "hashes produced by this server since last augment installation.": "хэшей произведено этим сервером с момента последней установки аугментаций.",
    "current production rate.": "текущая скорость производства.",
    "max production rate. (achieved when 100% RAM is allocated to it)": "максимальная скорость производства (при выделении ему 100% ОЗУ)",
    "RAM allocated to script.": "ОЗУ выделено скрипту.",
    "RAM allocated to hash production.": "ОЗУ выделено производству хэшей.",

    // Sleeves
    Sleeves: "Клоны",
    FAQ: "Частые вопросы",
    "Duplicate Sleeves are MK-V Synthoids (synthetic androids) into which your consciousness has been copied. In other words, these Synthoids contain a perfect duplicate of your mind.":
      "Дубликаты клонов — это синтоиды MK-V (синтетические андроиды), в которых скопировано ваше сознание. Иными словами, эти синтоиды содержат идеальную копию вашего разума.",
    "Sleeves can be used to perform different tasks simultaneously.": "Клонов можно использовать для одновременного выполнения разных задач.",
    "You enabled the \"Disable Sleeves' experience and augmentation\" option. Your sleeves will not gain experience, and they won't be able to install augmentations.":
      "Вы включили параметр «Отключить опыт и аугментации клонов». Клоны не будут получать опыт и не смогут устанавливать аугментации.",
    "How do Duplicate Sleeves work?": "Как работают дубликаты клонов?",
    "Duplicate Sleeves are essentially clones. You can use them to perform any work type action, such as working for a company/faction or committing a crime. Having sleeves perform these tasks earns you money, experience, and reputation.":
      "Дубликаты клонов — это по сути клоны. Их можно использовать для любых рабочих действий: например, работы на компанию или фракцию, а также совершения преступлений. Выполнение этих задач приносит деньги, опыт и репутацию.",
    "Sleeves are their own individuals, which means they each have their own experience and stats.": "Клоны — самостоятельные личности, поэтому у каждого есть собственные опыт и характеристики.",
    "When a sleeve earns experience, it earns experience for itself, the player's original 'consciousness', as well as all of the player's other sleeves.":
      "Когда клон получает опыт, его получают сам клон, исходное «сознание» игрока и все остальные клоны игрока.",
    "What is Synchronization (Sync)?": "Что такое синхронизация (Sync)?",
    "Synchronization is a measure of how aligned your consciousness is with that of your Duplicate Sleeves. It is a numerical value between 1 and 100, and it affects how much experience is earned when the sleeve is performing a task.":
      "Синхронизация показывает, насколько ваше сознание совпадает с сознанием дубликатов. Это числовое значение от 1 до 100, влияющее на количество опыта, получаемого клоном за выполнение задачи.",
    "Let N be the sleeve's synchronization. When the sleeve earns experience by performing a task, both the sleeve and the player's original host consciousness earn N% of the amount of experience normally earned by the task. All of the player's other sleeves earn ((N/100)^2 * 100)% of the experience.":
      "Пусть N — синхронизация клона. Когда клон получает опыт за задачу, он и исходное сознание игрока получают N% обычного опыта за эту задачу. Все остальные клоны получают ((N/100)^2 * 100)% этого опыта.",
    "Synchronization can be increased by assigning sleeves to the 'Synchronize' task.": "Синхронизацию можно повысить, назначив клонов на задачу «Синхронизация».",
    "What is Shock?": "Что такое шок?",
    "Sleeve shock is a measure of how much trauma the sleeve has due to being placed in a new body. It is a numerical value between 0 and 99, where 99 indicates full shock and 0 indicates no shock. Shock affects the amount of experience earned by the sleeve.":
      "Шок клона показывает, насколько сильно он травмирован после помещения в новое тело. Это значение от 0 до 99: 99 означает максимальный шок, а 0 — отсутствие шока. Шок влияет на количество опыта, получаемого клоном.",
    "Sleeve shock slowly decreases over time. You can further increase the rate at which it decreases by assigning sleeves to the 'Shock Recovery' task.":
      "Шок клона постепенно уменьшается со временем. Скорость восстановления можно увеличить, назначив клонов на задачу «Восстановление от шока».",
    "Why can't I work for this company or faction?": "Почему я не могу работать на эту компанию или фракцию?",
    "Only one of your sleeves can work for a given company/faction a time. To clarify further, if you have two sleeves they can work for two different companies/factions, but they cannot both work for the same company/faction.":
      "Одновременно на конкретную компанию или фракцию может работать только один ваш клон. Например, два клона могут работать на разные компании или фракции, но не на одну и ту же.",
    "How do I buy Augmentations for my Sleeves?": "Как покупать аугментации для клонов?",
    "Your Sleeve needs to have a Shock of 0 in order for you to buy Augmentations for it.": "Шок клона должен быть равен 0, чтобы покупать для него аугментации.",
    "Why can't I buy the X Augmentation for my sleeve?": "Почему я не могу купить клону аугментацию X?",
    "Certain Augmentations, like": "Некоторые аугментации, например",
    "-specific ones and NeuroFlux Governor, are not available for sleeves. You also need enough current reputation on some faction that offers that Augmentation.":
      "и NeuroFlux Governor, недоступны для клонов. Кроме того, нужна достаточная текущая репутация во фракции, которая предлагает эту аугментацию.",
    "Do sleeves get reset when installing Augmentations or switching BitNodes?": "Сбрасываются ли клоны при установке аугментаций или смене BitNode?",
    "Sleeves are reset when switching BitNodes, but not when installing Augmentations. However installing Augmentations on a sleeve does reset their stats.":
      "При смене BitNode клоны сбрасываются, но не при установке аугментаций. Однако установка аугментаций клону сбрасывает его характеристики.",
    "What is Memory?": "Что такое память?",
    "Sleeve memory dictates what a sleeve's synchronization will be when it's reset by switching BitNodes. For example, if a sleeve has a memory of 25, then when you switch BitNodes its synchronization will initially be set to 25, rather than 1.":
      "Память клона определяет его синхронизацию после сброса при смене BitNode. Например, при памяти 25 после смены BitNode синхронизация изначально будет равна 25, а не 1.",
    "Memory can only be increased by purchasing upgrades from": "Память можно увеличить только покупкой улучшений у",
    "It is a persistent stat, meaning it never gets resets back to 1. The maximum possible value for a sleeve's memory is 100.":
      "Это постоянная характеристика: она никогда не сбрасывается обратно до 1. Максимальная память клона — 100.",
    "What is bonus time?": "Что такое бонусное время?",
    "Sleeves accumulate bonus time when they idle or when you open the game after being offline. They use bonus time to reduce the time requirement of their tasks so that they can complete their tasks faster.":
      "Клоны накапливают бонусное время, когда бездействуют или когда вы открываете игру после отсутствия в сети. Они используют его, чтобы сократить требуемое время задач и выполнять их быстрее.",
    "Manage Augmentations": "Управление аугментациями",
    "Set Task": "Задать задачу",
    "Synchronize": "Синхронизация",
    "This sleeve is currently idle.": "Этот клон сейчас бездействует.",
    "This sleeve is currently working your job at": "Этот клон сейчас выполняет вашу работу в",
    "This sleeve is currently supporting you in your bladeburner activities.": "Этот клон сейчас помогает вам в деятельности Bladeburner.",
    "This sleeve is currently": "Этот клон сейчас",
    "working out": "тренируется",
    studying: "учится",
    "This sleeve is currently set to focus on shock recovery. This causes the Sleeve's shock to decrease at a faster rate.":
      "Этот клон сейчас восстанавливается от шока. Благодаря этому его шок уменьшается быстрее.",
    "This sleeve is currently set to synchronize with the original consciousness. This causes the Sleeve's synchronization to increase.":
      "Этот клон сейчас синхронизируется с исходным сознанием. Благодаря этому его синхронизация повышается.",
    "This sleeve is currently attempting to infiltrate synthoid communities to generate additional contracts and operations.\nThis activity is less efficient the more sleeves are assigned to it.\n\n":
      "Этот клон пытается проникнуть в сообщества синтоидов, чтобы создавать дополнительные контракты и операции.\nЧем больше клонов назначено на эту задачу, тем ниже её эффективность.\n\n",
    "Tasks Completed:": "Задач выполнено:",
    "Success Rate:": "Шанс успеха:",
    "Progress:": "Прогресс:",
    "More Stats": "Дополнительная статистика",
    "Insufficient funds": "Недостаточно средств",
    "Have this sleeve travel to a different city. This affects the gyms and universities at which this sleeve can study. Traveling to a different city costs":
      "Отправьте этого клона в другой город. Это влияет на спортзалы и университеты, где он может учиться. Путешествие в другой город стоит",
    "It will also set your current sleeve task to idle.": "Текущая задача клона также будет сменена на бездействие.",
    "You cannot afford to have this sleeve travel to another city": "У вас недостаточно денег, чтобы отправить клона в другой город",
    "You can purchase augmentations for your Sleeves. These augmentations have the same effect as they would for you. You can only purchase augmentations that you unlocked through factions. If an augmentation is useless for Sleeves, it will not be available. Sleeves can install an augmentation without its prerequisites.\n\nWhen purchasing an augmentation for a Sleeve, it is immediately installed. This means that the Sleeve will immediately lose all of its stat experience.\n\nAugmentations will appear below as they become available.":
      "Вы можете покупать аугментации для клонов. Они действуют так же, как и на вас. Можно покупать только аугментации, открытые через фракции. Бесполезные для клонов аугментации недоступны. Клоны могут устанавливать аугментации без выполнения их предварительных условий.\n\nПри покупке аугментация устанавливается клону сразу, поэтому он немедленно теряет весь опыт характеристик.\n\nДоступные аугментации появляются ниже.",

    // Story messages (commands, filenames and server identifiers stay unchanged)
    "I know you can sense it. I know you're searching for it.":
      "Я знаю, что вы это чувствуете. Я знаю, что вы это ищете.",
    "It's why you spend night after night at your computer.":
      "Вот почему вы ночь за ночью проводите за компьютером.",
    "It's real, I've seen it. And I can help you find it. But not right now. You're not ready yet.":
      "Это реально, я сам это видел. И я могу помочь вам найти это. Но не сейчас. Вы ещё не готовы.",
    "Use this program to track your progress": "Используйте эту программу, чтобы отслеживать свой прогресс",
    "The fl1ght.exe program was added to your home computer": "Программа fl1ght.exe добавлена на ваш домашний компьютер",
    "Soon you will be contacted by a hacking group known as ": "С вами свяжется хакерская группа под названием ",
    "They can help you with your search.": "Они могут помочь вам в поисках.",
    "You should join them, garner their favor, and exploit them for their Augmentations. But do not trust them.":
      "Вам стоит присоединиться к ним, заслужить их расположение и воспользоваться их аугментациями. Но не доверяйте им.",
    "They are not what they seem. No one is.": "Они не такие, какими кажутся. Никто не таков.",
    "Do not try to save the world. There is no world to save.": "Не пытайтесь спасти мир. Спасать нечего.",
    "If you want to find the truth, worry only about yourself. Ethics and morals will get you killed.":
      "Если хотите найти правду, думайте только о себе. Этика и мораль вас погубят.",
    "Keep an eye out for a hacking group known as ": "Следите за хакерской группой под названием ",
    "To find what you are searching for, you must understand the bits.": "Чтобы найти то, что вы ищете, нужно понять биты.",
    "The bits are all around us. The runners will help you.": "Биты окружают нас повсюду. Раннеры помогут вам.",
    "We've been watching you. Your skills are very impressive. But you're wasting your talents.":
      "Мы наблюдаем за вами. Ваши навыки впечатляют. Но вы растрачиваете свой талант.",
    "If you join us, you can put your skills to good use and change the world for the better. If you join us, we can unlock your full potential.":
      "Если вы присоединитесь к нам, то сможете использовать свои навыки во благо и изменить мир к лучшему. Мы поможем раскрыть весь ваш потенциал.",
    "But first, you must pass our test. Find and install the backdoor on our server.":
      "Но сначала вы должны пройти наше испытание. Найдите и установите бэкдор на нашем сервере.",
    "People say that the corrupted governments and corporations rule the world.":
      "Говорят, что коррумпированные правительства и корпорации правят миром.",
    "Yes, maybe they do. But do you know who everyone really fears?": "Да, возможно. Но знаете, кого на самом деле боятся все?",
    "People like us. Because they can't hide from us. Because they can't fight shadows and ideas with bullets.":
      "Таких, как мы. Потому что от нас не спрятаться. Потому что с тенями и идеями не справиться пулями.",
    "Join us, and people will fear you, too.": "Присоединяйтесь к нам — и люди тоже будут вас бояться.",
    "Find and install the backdoor on our server, avmnite-02. Then, we will contact you again.":
      "Найдите и установите бэкдор на нашем сервере avmnite-02. После этого мы снова свяжемся с вами.",
    "Find and install the backdoor on our server, avmnite-02h. Then, we will contact you again.":
      "Найдите и установите бэкдор на нашем сервере avmnite-02h. После этого мы снова свяжемся с вами.",
    "We know what you are doing. We know what drives you. We know what you are looking for.":
      "Мы знаем, что вы делаете. Мы знаем, что вами движет. Мы знаем, что вы ищете.",
    "We can help you find the answers.": "Мы можем помочь вам найти ответы.",
    LOG: "ЖУРНАЛ",
    Karma: "Карма",
    "Cannot load": "Не удалось загрузить",
    When: "Когда",
    next: "следующий",
    "killing all scripts": "остановка всех скриптов",
    Hack: "Взлом",
    Str: "Сила",
    Def: "Защита",
    Dex: "Ловкость",
    Agi: "Проворство",
    Cha: "Обаяние",
    Int: "Интеллект",
    "kill all scripts": "остановить все скрипты",
    "Bladeburner:": "Bladeburner:",
    "Creating a program": "Создание программы",
    "Grafting an Augmentation": "Вживление аугментации",
    "Continue ...": "Продолжить...",
    "The total SF levels owned, except for SF-1 Exploit levels.":
      "Общее количество уровней исходных файлов, кроме уровней эксплойта SF-1.",
    "Number of exploits owned.": "Количество имеющихся эксплойтов.",
    "The player's current BitNode.": "Текущий BitNode игрока.",
    "completely wipe": "полностью стереть",
    "Error: Please provide an array of string choices": "Ошибка: укажите массив строковых вариантов",
    "It is recommended to alert a developer.": "Рекомендуется сообщить разработчику.",
    "Money:": "Деньги:",
    "If you cancel, your work will": "Если вы отмените действие, ваша работа",
    "be saved, and the money you spent will": "будет сохранена, а потраченные деньги",
    "AutoBrew": "AutoBrew",
    "AutoPartyManager": "AutoPartyManager",
    "Automatic Drug Administration": "Автоматическое введение препаратов",
    "CPH4 Injections": "Инъекции CPH4",
    "Drones": "Дроны",
    "Drones - Assembly": "Дроны — сборка",
    "Drones - Transport": "Дроны — транспорт",
    "Go-Juice": "Go-Juice",
    "HRBuddy-Recruitment": "HRBuddy — набор сотрудников",
    "HRBuddy-Training": "HRBuddy — обучение сотрудников",
    "Hi-Tech R&D Laboratory": "Высокотехнологичная лаборатория исследований и разработок",
    "Market-TA.I": "Market-TA.I",
    "Market-TA.II": "Market-TA.II",
    "Overclock": "Разгон",
    "Self-Correcting Assemblers": "Самокорректирующиеся сборщики",
    "Sti.mu": "Sti.mu",
    "uPgrade: Capacity.I": "uPgrade: Вместимость.I",
    "uPgrade: Capacity.II": "uPgrade: Вместимость.II",
    "uPgrade: Dashboard": "uPgrade: Панель управления",
    "uPgrade: Fulcrum": "uPgrade: Фулькрум",
    "Automatically keep your employees fully caffeinated with tea injections. This research will keep the energy of all employees at its maximum possible value, for no cost. This will also disable the Tea upgrade.":
      "Автоматически поддерживает максимальный уровень энергии сотрудников с помощью инъекций чая. Это исследование бесплатно поддерживает энергию всех сотрудников на максимально возможном уровне. Оно также отключает улучшение «Чай».",
    "Automatically analyzes your employees' morale and boosts them whenever it detects a decrease. This research will keep the morale of all employees at their maximum possible values, for no cost. This will also disable the 'Throw Party' feature.":
      "Автоматически анализирует мораль сотрудников и повышает её при обнаружении снижения. Это исследование бесплатно поддерживает мораль всех сотрудников на максимально возможном уровне. Оно также отключает функцию «Устроить вечеринку».",
    "Research how to automatically administer performance-enhancing drugs to all of your employees. This unlocks Drug-related Research.":
      "Исследуйте автоматическую выдачу стимулирующих препаратов всем сотрудникам. Открывает исследования, связанные с препаратами.",
    "Develop an advanced and harmless synthetic drug that is administered to employees to increase all of their stats, except experience, by 10%.":
      "Разработайте передовой безвредный синтетический препарат, который повышает все характеристики сотрудников, кроме опыта, на 10%.",
    "Acquire the knowledge needed to create advanced drones. This research does nothing by itself, but unlocks other Drone-related research.":
      "Получите знания, необходимые для создания передовых дронов. Само по себе это исследование ничего не даёт, но открывает другие исследования, связанные с дронами.",
    "Manufacture and use Assembly Drones to improve the efficiency of your production lines. This increases all production by 20%.":
      "Производите и используйте сборочных дронов для повышения эффективности производственных линий. Увеличивает всё производство на 20%.",
    "Manufacture and use intelligent Transport Drones to optimize your warehouses. This increases the storage space of all warehouses by 50%.":
      "Производите и используйте интеллектуальных транспортных дронов для оптимизации складов. Увеличивает вместимость всех складов на 50%.",
    "Provide employees with Go-Juice, a tea-derivative that further enhances the brain's dopamine production. This increases the maximum energy of all employees by 10.":
      "Снабжайте сотрудников Go-Juice — производным чая, которое дополнительно усиливает выработку дофамина в мозге. Увеличивает максимальную энергию всех сотрудников на 10.",
    "Use automated software to handle the hiring of employees. With this research, each office will automatically hire one employee per market cycle if there is available space.":
      "Используйте автоматизированное ПО для найма сотрудников. После этого каждый офис будет автоматически нанимать по одному сотруднику за рыночный цикл, если есть свободное место.",
    "Use automated software to handle the training of employees. With this research, each employee hired with HRBuddy-Recruitment will automatically be assigned to 'Intern', rather than being unassigned.":
      "Используйте автоматизированное ПО для обучения сотрудников. После этого каждый сотрудник, нанятый с помощью HRBuddy — набора сотрудников, будет автоматически назначаться стажёром, а не оставаться неназначенным.",
    "Construct a cutting-edge facility dedicated to advanced research and development. This allows you to spend Scientific Research on powerful upgrades. It also globally increases Scientific Research production by 10%.":
      "Постройте передовой объект, посвящённый исследованиям и разработкам. Он позволит тратить научные исследования на мощные улучшения и глобально увеличит производство научных исследований на 10%.",
    "Develop advanced AI software that uses technical analysis to help you understand and exploit the market. This research allows you to know what price to sell your Materials/Products at in order to avoid losing sales due to having too high of a mark-up. It also lets you automatically use that sale price.":
      "Разработайте передовое ПО с ИИ, использующее технический анализ для понимания рынка и извлечения из него выгоды. Исследование показывает, по какой цене продавать материалы и товары, чтобы не терять продажи из-за слишком высокой наценки, и позволяет автоматически использовать эту цену.",
    "Develop double-advanced AI software that uses technical analysis to help you understand and exploit the market. This research allows you to know how many sales of a Material/Product you lose or gain from having too high or too low of a sale price. It also lets you automatically set the sale price of your Materials/Products at the optimal price such that the amount sold matches the amount produced.":
      "Разработайте сверхпередовое ПО с ИИ, использующее технический анализ для понимания рынка и извлечения из него выгоды. Исследование показывает, сколько продаж материалов и товаров вы теряете или получаете из-за слишком высокой или низкой цены, и позволяет автоматически устанавливать оптимальную цену, при которой объём продаж равен объёму производства.",
    "Equip employees with a headset that uses transcranial direct current stimulation (tDCS) to increase the speed of their neurotransmitters. This research increases the intelligence and efficiency of all employees by 25%.":
      "Оснастите сотрудников гарнитурой, использующей транскраниальную стимуляцию постоянным током (tDCS) для ускорения работы нейромедиаторов. Увеличивает интеллект и эффективность всех сотрудников на 25%.",
    "Create assemblers that can be used for universal production. These assemblers use deep learning to improve their efficiency at their tasks. This research increases all production by 10%.":
      "Создайте сборщиков для универсального производства. Они используют глубокое обучение, чтобы повышать эффективность своей работы. Увеличивает всё производство на 10%.",
    "Upgrade the tDCS headset to stimulate regions of the brain that control confidence and enthusiasm. This research increases the maximum morale of all employees by 10.":
      "Улучшите гарнитуру tDCS, чтобы стимулировать участки мозга, отвечающие за уверенность и энтузиазм. Увеличивает максимальную мораль всех сотрудников на 10.",
    "Expand the industry's capacity for designing and manufacturing its various products. This increases the industry's maximum number of products by 1 (from 3 to 4).":
      "Расширьте возможности отрасли по проектированию и производству различных товаров. Увеличивает максимальное количество товаров отрасли на 1 (с 3 до 4).",
    "Expand the industry's capacity for designing and manufacturing its various products. This increases the industry's maximum number of products by 1 (from 4 to 5).":
      "Расширьте возможности отрасли по проектированию и производству различных товаров. Увеличивает максимальное количество товаров отрасли на 1 (с 4 до 5).",
    "Improve the software used to manage the industry's production line for its various products. This allows you to manage the production and sale of a product before it's finished being designed.":
      "Улучшите ПО для управления производственной линией отрасли. Это позволит управлять производством и продажей товара ещё до завершения его проектирования.",
    "Streamline the manufacturing of this industry's various products. This research increases the production of your products by 5%.":
      "Оптимизируйте производство различных товаров этой отрасли. Увеличивает производство товаров на 5%.",

    // Augmentation descriptions: A-H
    "The body is genetically re-engineered so that it produces the ADR-V1 pheromone, an artificial pheromone discovered by scientists. The ADR-V1 pheromone, when excreted, triggers feelings of admiration and approval in other people.":
      "Организм генетически изменён так, чтобы вырабатывать феромон ADR-V1 — искусственный феромон, открытый учёными. Выделяясь, ADR-V1 вызывает у окружающих чувство восхищения и одобрения.",
    "The body is genetically re-engineered so that it produces the ADR-V2 pheromone, which is similar to but more potent than ADR-V1. This pheromone, when excreted, triggers feelings of admiration, approval, and respect in others.":
      "Организм генетически изменён так, чтобы вырабатывать феромон ADR-V2, похожий на ADR-V1, но более сильный. Выделяясь, этот феромон вызывает у окружающих восхищение, одобрение и уважение.",
    "A network consisting of millions of nanoprocessors is embedded into the brain. The network is meant to mimic the way a biological brain solves a problem, with each nanoprocessor acting similar to the way a neuron would in a neural network. However, these nanoprocessors are programmed to perform computations much faster than organic neurons, allowing the user to solve much more complex problems at a much faster rate.":
      "В мозг встроена сеть из миллионов нанопроцессоров. Она имитирует работу биологического мозга: каждый нанопроцессор действует подобно нейрону в нейросети. Однако нанопроцессоры выполняют вычисления гораздо быстрее органических нейронов, позволяя решать значительно более сложные задачи за гораздо меньшее время.",
    "The body is injected with a chemical that artificially induces synaptic potentiation, otherwise known as the strengthening of synapses. This results in enhanced cognitive abilities.":
      "В организм вводится вещество, искусственно вызывающее синаптическую потенциацию — усиление синапсов. Это улучшает когнитивные способности.",
    "Pheromone extruder injected in the thoracodorsal nerve. Emits a pleasing scent guaranteed to make conversational partners more agreeable.":
      "В грудоспинной нерв вводится экструдер феромонов. Он выделяет приятный запах, который гарантированно делает собеседников сговорчивее.",
    "This augmentation makes the Bribe minigame easier by indicating the incorrect paths.": "Эта аугментация упрощает мини-игру «Подкуп», указывая неправильные пути.",
    "A chip containing the psyche of the greatest BitRunner to ever exist. Installing this relic significantly increases ALL of your stats. However, it may have unintended consequences on the user's mental well-being.":
      "Чип, содержащий психику величайшего из когда-либо существовавших BitRunner. Установка этой реликвии значительно повышает ВСЕ ваши характеристики. Однако она может непредсказуемо повлиять на психическое здоровье.",
    "Grants access to unimaginable power.": "Даёт доступ к немыслимой силе.",
    "Cybernetic arms created from plasteel and carbon fibers that completely replace the user's organic arms.":
      "Кибернетические руки из пластали и углеродных волокон, полностью заменяющие органические руки.",
    "Cybernetic legs, created from plasteel and carbon fibers, enhance running speed.":
      "Кибернетические ноги из пластали и углеродных волокон увеличивают скорость бега.",
    "The spine is reconstructed using plasteel and carbon fibers. It is now capable of stimulating and regulating neural signals passing through the spinal cord, improving senses and reaction speed. The 'Bionic Spine' also interfaces with all other 'Bionic' implants.":
      "Позвоночник реконструирован с использованием пластали и углеродных волокон. Теперь он способен стимулировать и регулировать нервные сигналы, проходящие через спинной мозг, улучшая чувства и скорость реакции. «Бионический позвоночник» также взаимодействует со всеми другими «бионическими» имплантами.",
    "A small brain implant embedded in the cerebrum. This regulates and improves the brain's computing capabilities.":
      "Небольшой имплант в головном мозге. Он регулирует и улучшает вычислительные способности мозга.",
    "exoskeleton is incredibly adaptable and can protect the wearer from blunt, piercing, concussive, thermal, chemical, and electric trauma. It also enhances the user's physical abilities.":
      "Экзоскелет чрезвычайно адаптивен и защищает владельца от тупых, проникающих, контузионных, термических, химических и электрических травм. Он также улучшает физические способности пользователя.",
    "Upgrades the BLADE-51b Tesla Armor with a plasma energy propulsion system that is capable of projecting an energy shielding force field.":
      "Улучшает броню BLADE-51b Tesla плазменной энергетической установкой, способной создавать силовое поле энергетического щита.",
    "Upgrades the BLADE-51b Tesla Armor with an AI Information Processing Unit that was specially designed to analyze Synthoid related data and information.":
      "Улучшает броню BLADE-51b Tesla модулем обработки информации с ИИ, специально разработанным для анализа данных о синтоидах.",
    "Upgrades the BLADE-51b Tesla Armor Unibeam augmentation to use a multiple-fiber system. This upgraded weapon uses multiple fiber laser modules that combine together to form a single, more powerful beam of up to 2000MW.":
      "Улучшает аугментацию Unibeam брони BLADE-51b Tesla многоволоконной системой. Модернизированное оружие объединяет несколько волоконно-лазерных модулей в один более мощный луч мощностью до 2000 МВт.",
    "Upgrades the BLADE-51b Tesla Armor with Ion Power Cells, which are capable of more efficiently storing and using power.":
      "Улучшает броню BLADE-51b Tesla ионными элементами питания, которые эффективнее накапливают и используют энергию.",
    "Upgrades the BLADE-51b Tesla Armor with a concentrated deuterium-fluoride laser weapon. Its precision and accuracy makes it useful for quickly neutralizing threats while keeping casualties to a minimum.":
      "Улучшает броню BLADE-51b Tesla концентрированным дейтерий-фторидным лазером. Его точность позволяет быстро нейтрализовать угрозы и свести потери к минимуму.",
    "during the Synthoid Uprising. The organic musculature of the human foot is enhanced with flexible carbon nanotube matrices that are controlled by intelligent servomotors.":
      "во время восстания синтоидов. Органическая мускулатура стопы усилена гибкими матрицами из углеродных нанотрубок, управляемыми интеллектуальными сервомоторами.",
    "A highly advanced matter phase-shifter module that is embedded in the brainstem and cerebellum. This augmentation allows the user to project and control a holographic simulacrum within an extremely large radius. These specially modified holograms were specifically weaponized by Bladeburner units to be used against Synthoids.":
      "Высокотехнологичный модуль фазового сдвига материи, встроенный в ствол мозга и мозжечок. Позволяет проецировать и управлять голографическим симулякром в огромном радиусе. Эти специально изменённые голограммы были превращены подразделениями Bladeburner в оружие против синтоидов.",
    "This augmentation allows you to perform Bladeburner actions and other actions (such as working, committing crimes, etc.) at the same time.":
      "Эта аугментация позволяет одновременно выполнять действия Bladeburner и другие действия, например работать или совершать преступления.",
    "A set of retractable plasteel blades that are implanted in the arm, underneath the skin.":
      "Набор выдвижных пласталевых лезвий, имплантированных в руку под кожу.",
    "The CRTX42-AA gene is injected into the genome. The CRTX42-AA is an artificially-synthesized gene that targets the visual and prefrontal cortex and improves cognitive abilities.":
      "Ген CRTX42-AA вводится в геном. Это искусственно синтезированный ген, воздействующий на зрительную и префронтальную кору и улучшающий когнитивные способности.",
    "A collection of digital assets saved on a small chip. The chip is implanted into your wrist. A small jack in the chip allows you to connect it to a computer and upload the assets.":
      "Набор цифровых активов, сохранённых на маленьком чипе. Чип имплантируется в запястье. Небольшой разъём позволяет подключить его к компьютеру и загрузить активы.",
    "Opto-occipito implant to process visual signals before brain interpretation.": "Оптико-затылочный имплант для обработки зрительных сигналов до их интерпретации мозгом.",
    "This augmentation makes the Backwards minigame easier by flipping the words.": "Эта аугментация упрощает мини-игру «Наоборот», переворачивая слова.",
    "The rib cage is augmented to continuously release boosters into the bloodstream which increase the oxygen-carrying capacity of blood.":
      "Рёбра модифицированы так, чтобы постоянно выделять в кровь стимуляторы, повышающие её способность переносить кислород.",
    "An upgraded version of the 'Combat Rib' augmentation that adds potent stimulants which improve focus and endurance while decreasing reaction time and fatigue.":
      "Улучшенная версия аугментации «Боевые рёбра», дополненная мощными стимуляторами. Они улучшают концентрацию и выносливость, одновременно уменьшая время реакции и усталость.",
    "The latest version of the 'Combat Rib' augmentation releases advanced anabolic steroids that improve muscle mass and physical performance while being safe and free of side effects.":
      "Последняя версия аугментации «Боевые рёбра» выделяет передовые анаболические стероиды, увеличивающие мышечную массу и физические показатели без побочных эффектов.",
    "The thoracic cavity is equipped with a small chamber designed to hold and sustain hydrogen plasma. The plasma is used to generate power through nuclear fusion, providing limitless amounts of clean energy for the body.":
      "В грудной клетке установлена небольшая камера для хранения и поддержания водородной плазмы. Плазма вырабатывает энергию ядерным синтезом, обеспечивая организм неограниченным количеством чистой энергии.",
    "The first generation of Cranial Signal Processors. Cranial Signal Processors are a set of specialized microprocessors that are attached to neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations so that the brain doesn't have to.":
      "Первое поколение черепных сигнальных процессоров. Это набор специализированных микропроцессоров, подключённых к нейронам мозга. Чипы обрабатывают нервные сигналы и быстро выполняют конкретные вычисления автоматически, избавляя от этого мозг.",
    "The second generation of Cranial Signal Processors. Cranial Signal Processors are a set of specialized microprocessors that are attached to neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations so that the brain doesn't have to.":
      "Второе поколение черепных сигнальных процессоров. Это набор специализированных микропроцессоров, подключённых к нейронам мозга. Чипы обрабатывают нервные сигналы и быстро выполняют конкретные вычисления автоматически, избавляя от этого мозг.",
    "The third generation of Cranial Signal Processors. Cranial Signal Processors are a set of specialized microprocessors that are attached to neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations so that the brain doesn't have to.":
      "Третье поколение черепных сигнальных процессоров. Это набор специализированных микропроцессоров, подключённых к нейронам мозга. Чипы обрабатывают нервные сигналы и быстро выполняют конкретные вычисления автоматически, избавляя от этого мозг.",
    "The fourth generation of Cranial Signal Processors. Cranial Signal Processors are a set of specialized microprocessors that are attached to neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations so that the brain doesn't have to.":
      "Четвёртое поколение черепных сигнальных процессоров. Это набор специализированных микропроцессоров, подключённых к нейронам мозга. Чипы обрабатывают нервные сигналы и быстро выполняют конкретные вычисления автоматически, избавляя от этого мозг.",
    "The fifth generation of Cranial Signal Processors. Cranial Signal Processors are a set of specialized microprocessors that are attached to neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations so that the brain doesn't have to.":
      "Пятое поколение черепных сигнальных процессоров. Это набор специализированных микропроцессоров, подключённых к нейронам мозга. Чипы обрабатывают нервные сигналы и быстро выполняют конкретные вычисления автоматически, избавляя от этого мозг.",
    "A brain implant that provides an interface for direct, wireless communication between a computer's main memory and the mind. This implant allows the user to not only access a computer's memory, but also alter and delete it.":
      "Имплант мозга, обеспечивающий прямую беспроводную связь между оперативной памятью компьютера и разумом. Позволяет не только получать доступ к памяти компьютера, но и изменять или удалять её.",
    "Synthetic skin that is grafted onto the body. This skin consists of millions of nanobots capable of projecting high-density muon beams, creating an energy barrier around the user.":
      "Синтетическая кожа, пересаженная на тело. Она состоит из миллионов наноботов, способных проецировать мюонные пучки высокой плотности и создавать вокруг пользователя энергетический барьер.",
    "A neural implant that enhances the user's ability to resonate with others. It is capable of analyzing and interpreting the emotions of those nearby, allowing the user to better understand and influence them.":
      "Нейроимплант, усиливающий способность пользователя находить общий эмоциональный отклик с другими. Он анализирует и интерпретирует эмоции окружающих, помогая лучше понимать и влиять на них.",
    "A DNA recombination of the EMS-4 Gene. This genetic engineering technique was originally used on Bladeburners during the Synthoid uprising to induce wakefulness and concentration, suppress fear, reduce empathy, improve reflexes, and improve memory, among other things.":
      "Рекомбинация ДНК гена EMS-4. Изначально эту методику генной инженерии применяли к бойцам Bladeburner во время восстания синтоидов, чтобы повысить бодрость и концентрацию, подавить страх, уменьшить эмпатию, улучшить рефлексы и память.",
    "A thin device embedded inside the arm containing a wireless module capable of connecting to nearby networks. Once connected, the Netburner Module is capable of capturing and processing all of the traffic on that network. By itself, the Embedded Netburner Module does not do much, but a variety of very powerful upgrades can be installed that allow you to fully control the traffic on a network.":
      "Тонкое устройство внутри руки с беспроводным модулем для подключения к ближайшим сетям. Подключившись, модуль Netburner перехватывает и обрабатывает весь трафик сети. Сам по себе встроенный модуль Netburner немного полезен, но мощные улучшения позволяют полностью контролировать сетевой трафик.",
    "Installs the Analyze Engine for the Embedded Netburner Module, which is a CPU cluster that vastly outperforms the Netburner Module's native single-core processor.":
      "Устанавливает Analyze Engine для встроенного модуля Netburner — кластер процессоров, значительно превосходящий встроенный одноядерный процессор модуля.",
    "The Core library is an implant that upgrades the firmware of the Embedded Netburner Module. This upgrade allows the Embedded Netburner Module to generate its own data on a network.":
      "Библиотека Core — имплант, обновляющий прошивку встроенного модуля Netburner. После обновления модуль может генерировать собственные данные в сети.",
    "The Core V2 library is an implant that upgrades the firmware of the Embedded Netburner Module. This upgraded firmware allows the Embedded Netburner Module to control information on a network by re-routing traffic, spoofing IP addresses, and altering the data inside network packets.":
      "Библиотека Core V2 — имплант, обновляющий прошивку встроенного модуля Netburner. Обновлённая прошивка позволяет перенаправлять трафик, подделывать IP-адреса и изменять данные внутри сетевых пакетов.",
    "The Core V3 library is an implant that upgrades the firmware of the Embedded Netburner Module. This upgraded firmware allows the Embedded Netburner Module to seamlessly inject code into any device on a network.":
      "Библиотека Core V3 — имплант, обновляющий прошивку встроенного модуля Netburner. Обновлённая прошивка позволяет незаметно внедрять код в любое устройство сети.",
    "This implant installs a Direct Memory Access (DMA) controller into the Embedded Netburner Module. This allows the Module to send and receive data directly to and from the main memory of devices on a network.":
      "Этот имплант устанавливает контроллер прямого доступа к памяти (DMA) во встроенный модуль Netburner. Модуль может напрямую отправлять данные в оперативную память сетевых устройств и получать их оттуда.",
    "Electrical signals are used to induce a new, artificial form of myelinogenesis in the human body. This process results in the proliferation of new, synthetic myelin sheaths in the nervous system. These myelin sheaths can propagate neuro-signals much faster than their organic counterparts, leading to greater processing speeds and better brain function.":
      "Электрические сигналы вызывают в организме новый искусственный тип миелиногенеза. В нервной системе образуются новые синтетические миелиновые оболочки. Они передают нервные сигналы гораздо быстрее органических аналогов, повышая скорость обработки и улучшая работу мозга.",
    "A cranial implant that greatly assists in the user's ability to analyze social situations and interactions. The system uses a wide variety of factors such as facial expression, body language, voice tone, and inflection to determine the best course of action during social situations. The implant also uses deep learning software to continuously learn new behavior patterns and how to best respond.":
      "Черепной имплант значительно помогает анализировать социальные ситуации и взаимодействия. Система учитывает выражение лица, язык тела, тон и интонацию голоса, чтобы выбрать лучший способ поведения. Имплант также использует глубокое обучение и постоянно осваивает новые модели поведения и ответов.",
    "Ballistic-grade protective and retractable eyewear that was designed specifically for Bladeburner units. This is implanted by installing a mechanical frame in the skull's orbit. This frame interfaces with the brain and allows the user to automatically extrude and extract the eyewear. The eyewear protects against debris, shrapnel, lasers, blinding flashes, and gas. It is also embedded with a data processing chip that can be programmed to display an AR HUD to assist the user in field missions.":
      "Защитные выдвижные очки баллистического класса, разработанные специально для подразделений Bladeburner. Имплант устанавливается механической оправой в глазницу. Оправа взаимодействует с мозгом и позволяет автоматически выдвигать и убирать очки. Они защищают от мусора, осколков, лазеров, ослепляющих вспышек и газа, а встроенный чип обработки данных может выводить AR-интерфейс для полевых заданий.",
    "Transtinatium VVD reticulator used in optico-sterbing recognition.": "Ретикулатор Transtinatium VVD для оптико-стербингового распознавания.",
    "This augmentation makes the Symbol matching minigame easier by indicating the correct choice.":
      "Эта аугментация упрощает мини-игру на сопоставление символов, указывая правильный вариант.",
    "A cranial implant that stops procrastination by blocking specific neural pathways in the brain.":
      "Черепной имплант, прекращающий прокрастинацию блокировкой определённых нервных путей мозга.",
    "An implant that, when activated, makes the speaker sound unbelievably reasonable and plausible to listeners for the next hour. It requires no concentration from the user, and only a verbal activation component. It even affects most electronic detection methods.":
      "Имплант, который после активации на следующий час делает речь владельца невероятно разумной и убедительной для слушателей. Не требует концентрации — достаточно голосовой команды. Воздействует даже на большинство электронных методов обнаружения.",
    "An aural implant that enhances the user's ability to communicate and persuade others. The implant uses a predictive model that lets the user say precisely what their audience wants to hear. This implant is commonly used by many high-level executives and government officials.":
      "Слуховой имплант, улучшающий способность общаться и убеждать. Он использует предиктивную модель, позволяющую говорить именно то, что аудитория хочет услышать. Такой имплант часто используют высокопоставленные руководители и чиновники.",
    "A serum that permanently enhances many aspects of human capabilities, including strength, speed, immune system enhancements, and mitochondrial efficiency. The serum was originally developed by the Chinese military in an attempt to create super soldiers.":
      "Сыворотка, навсегда улучшающая многие возможности человека: силу, скорость, иммунную систему и эффективность митохондрий. Изначально её разработали китайские военные для создания суперсолдат.",
    "An upgrade to the 'Bionic Arms' augmentation. It infuses the prosthetic arms with an advanced graphene material to make them stronger and lighter.":
      "Улучшение аугментации «Бионические руки». Протезы получают передовой графеновый материал, становясь прочнее и легче.",
    "An upgrade to the 'Bionic Legs' augmentation. The legs are fused with graphene, greatly enhancing jumping ability.":
      "Улучшение аугментации «Бионические ноги». Ноги усилены графеном, что значительно улучшает способность прыгать.",
    "An upgrade to the 'Bionic Spine' augmentation. The spine is fused with graphene which enhances durability and supercharges all body functions.":
      "Улучшение аугментации «Бионический позвоночник». Позвоночник усилен графеном, повышающим прочность и значительно улучшающим работу организма.",
    "Graphene is grafted and fused into the skeletal structure, enhancing bone density and tensile strength.":
      "Графен пересаживается и встраивается в скелет, повышая плотность костей и прочность на растяжение.",
    "An upgrade to the BrachiBlades augmentation. It infuses the retractable blades with an advanced graphene material, making them stronger and lighter.":
      "Улучшение аугментации BrachiBlades. Выдвижные лезвия получают передовой графеновый материал, становясь прочнее и легче.",
    "Uploads the architecture and design details of a Hacknet Node's CPU into the brain. This allows the user to engineer custom hardware and software for the Hacknet Node that provides better performance.":
      "Загружает в мозг архитектуру и детали устройства процессора узла Hacknet. Пользователь может создавать для узла собственные аппаратные и программные улучшения с большей производительностью.",
    "Uploads the architecture and design details of a Hacknet Node's main-memory cache into the brain. This allows the user to engineer custom cache hardware for the Hacknet Node that offers better performance.":
      "Загружает в мозг архитектуру и детали кэша оперативной памяти узла Hacknet. Пользователь может создавать для узла собственное кэш-оборудование с большей производительностью.",
    "Installs a Direct-Neural Interface jack into the arm that is capable of connecting to a Hacknet Node. This lets the user access and manipulate the Node's processing logic using electrochemical signals.":
      "Устанавливает в руку разъём прямого нейронного интерфейса, способный подключаться к узлу Hacknet. Пользователь получает доступ к логике обработки узла и может управлять ею электростимическими сигналами.",
    "Installs a Direct-Neural Interface jack into the arm that is capable of connecting to a Hacknet Node. This lets the user access and manipulate the Node's kernel using electrochemical signals.":
      "Устанавливает в руку разъём прямого нейронного интерфейса, способный подключаться к узлу Hacknet. Пользователь получает доступ к ядру узла и может управлять им электростимическими сигналами.",
    "Uploads the architecture and design details of a Hacknet Node's Network Interface Card (NIC) into the brain. This allows the user to engineer a custom NIC for the Hacknet Node that offers better performance.":
      "Загружает в мозг архитектуру и детали сетевой карты (NIC) узла Hacknet. Пользователь может создать для узла собственную сетевую карту с большей производительностью.",
    "A heart implant that greatly increases the body's ability to effectively use and pump blood.":
      "Сердечный имплант, значительно повышающий способность организма эффективно использовать и перекачивать кровь.",

    // Augmentation descriptions: I-P
    "A highly advanced techno-organic drug that is injected into the skeletal and integumentary system. The drug permanently modifies the DNA of the body's skin and bone cells, granting them the ability to repair and restructure themselves.":
      "Высокотехнологичный техноорганический препарат, вводимый в костную и покровную системы. Он навсегда изменяет ДНК клеток кожи и костей, позволяя им восстанавливаться и перестраиваться.",
    "A microprocessor that accelerates the processing speed of biological neural networks. This is a cranial implant that is embedded inside the brain.":
      "Микропроцессор, ускоряющий обработку данных биологическими нейросетями. Это черепной имплант, встроенный в мозг.",
    "Chemical injections are used to permanently alter and strengthen the brain's neuronal circuits, strengthening the ability to retain information.":
      "Химические инъекции навсегда изменяют и укрепляют нейронные цепи мозга, улучшая способность удерживать информацию.",
    "A cranial implant that intelligently stimulates certain areas of the brain in order to improve cognitive functions.":
      "Черепной имплант, интеллектуально стимулирующий отдельные участки мозга для улучшения когнитивных функций.",
    "A drug that genetically modifies the neurons in the brain, resulting in neurons that continuously regenerate and strengthen themselves.":
      "Препарат, генетически изменяющий нейроны мозга, благодаря чему они постоянно восстанавливаются и укрепляются.",
    "Undetectable adamantium nanobots injected in the user's bloodstream. The NeuroFlux Governor monitors and regulates all aspects of the human body, essentially 'governing' the body. By doing so, it improves the user's performance for most actions.":
      "Необнаружимые адамантиевые наноботы, введённые в кровоток. NeuroFlux Governor контролирует и регулирует все аспекты человеческого организма, фактически «управляя» им. Благодаря этому он повышает эффективность пользователя в большинстве действий.",
    "A brain implant that provides a high-bandwidth, direct neural link between your the largest database of hacking tools and information in the world.":
      "Имплант мозга, обеспечивающий высокоскоростную прямую нейронную связь с крупнейшей в мире базой инструментов и информации для взлома.",
    "The brain is surgically re-engineered to have increased neuronal density by decreasing the neuron gap junction. Then, the body is genetically modified to enhance the production and capabilities of its neural stem cells.":
      "Мозг хирургически перестраивается для повышения плотности нейронов за счёт уменьшения промежутков между ними. Затем организм генетически изменяется для усиления производства и возможностей нейральных стволовых клеток.",
    "A brain implant carefully assembled around the synapses, which micromanages the activity and levels of various neuroreceptor chemicals and modulates electrical activity to optimize concentration, allowing the user to multitask much more effectively.":
      "Имплант мозга, тщательно собранный вокруг синапсов. Он управляет активностью и уровнями различных нейрорецепторных веществ и регулирует электрическую активность для оптимальной концентрации, позволяя эффективнее выполнять несколько задач одновременно.",
    "This augmentation removes the penalty for not focusing on actions such as working in a job or working for a faction.":
      "Эта аугментация снимает штраф за отсутствие концентрации при таких действиях, как работа в компании или на фракцию.",
    "A decentralized cranial implant that improves the brain's ability to learn. It is installed by releasing millions of nanobots into the human brain, each of which attaches to a different neural pathway to enhance the brain's ability to retain and retrieve information.":
      "Децентрализованный черепной имплант, улучшающий способность мозга к обучению. Устанавливается выпуском миллионов наноботов в мозг; каждый прикрепляется к отдельному нервному пути и улучшает запоминание и извлечение информации.",
    "A decentralized cranial implant that improves the brain's ability to learn. This is a more powerful version of the Neurotrainer I augmentation, but it does not require Neurotrainer I to be installed as a prerequisite.":
      "Децентрализованный черепной имплант, улучшающий способность мозга к обучению. Это более мощная версия аугментации Neurotrainer I, но для её установки не требуется Neurotrainer I.",
    "A decentralized cranial implant that improves the brain's ability to learn. This is a more powerful version of the Neurotrainer I and Neurotrainer II augmentation, but it does not require either of them to be installed as a prerequisite.":
      "Децентрализованный черепной имплант, улучшающий способность мозга к обучению. Это более мощная версия аугментаций Neurotrainer I и Neurotrainer II, но для её установки не требуется ни одна из них.",
    "This torso implant automatically injects nootropic supplements into the bloodstream to improve memory, increase focus, and provide other cognitive enhancements.":
      "Этот имплант туловища автоматически вводит в кровь ноотропные добавки для улучшения памяти, концентрации и других когнитивных способностей.",
    "A thermal-powered artificial nutrition generator. Endogenously synthesizes glucose, amino acids, and vitamins, and redistributes them across the body. The device is powered by the body's naturally wasted energy in the form of heat.":
      "Искусственный генератор питания с тепловым приводом. Он синтезирует глюкозу, аминокислоты и витамины внутри организма и распределяет их по телу. Устройство питается естественно выделяемой организмом энергией в форме тепла.",
    "The body is genetically re-engineered to maintain a state of negligible senescence, preventing the body from deteriorating with age.":
      "Организм генетически перестроен для поддержания состояния пренебрежимо малого старения, что не даёт ему разрушаться с возрастом.",
    "OmniTek's data and information repository is uploaded into your brain, enhancing your programming and hacking abilities.":
      "Хранилище данных и информации OmniTek загружается в мозг, улучшая навыки программирования и взлома.",
    "A bionic shoulder augmentation for the right shoulder. Using cybernetics, the ORION-MKIV shoulder enhances the strength and dexterity of the user's right arm. It also provides protection due to its crystallized graphene plating.":
      "Бионическая аугментация правого плеча. Кибернетическое плечо ORION-MKIV увеличивает силу и ловкость правой руки и защищает её кристаллическим графеновым покрытием.",
    "Installs a Direct-Neural Interface jack into your arm that is compatible with most computers. Connecting to a computer through this jack allows you to interface with it using the brain's electrochemical signals.":
      "Устанавливает в руку разъём прямого нейронного интерфейса, совместимый с большинством компьютеров. Подключение через этот разъём позволяет взаимодействовать с компьютером с помощью электрохимических сигналов мозга.",
    "This is an additional installation that upgrades the functionality of the PC Direct-Neural Interface augmentation. When connected to a computer, the Neural Network upgrade allows the user to use their own brain's processing power to aid the computer in computational tasks.":
      "Дополнительный модуль, расширяющий возможности аугментации PC Direct-Neural Interface. При подключении к компьютеру нейросетевое улучшение позволяет использовать вычислительную мощность собственного мозга для вычислений.",
    "This is a submodule upgrade to the PC Direct-Neural Interface augmentation. It improves the performance of the interface and gives the user more control options to a connected computer.":
      "Субмодульное улучшение аугментации PC Direct-Neural Interface. Повышает производительность интерфейса и даёт пользователю больше вариантов управления подключённым компьютером.",
    "A 'Probability Computation Matrix' is installed in the frontal cortex. This implant uses advanced mathematical algorithms to rapidly identify and compute statistical outcomes of nearly every situation.":
      "В префронтальную кору устанавливается «матрица вычисления вероятностей». Имплант использует передовые математические алгоритмы, чтобы быстро определять и вычислять статистические исходы почти любой ситуации.",
    "Chloroplasts are added to epidermal stem cells and are applied to the body using a skin graft. The result is photosynthetic skin cells, allowing users to generate their own energy and nutrition using solar power.":
      "В стволовые клетки эпидермиса добавляются хлоропласты, после чего их пересаживают на тело. В результате появляются фотосинтетические клетки кожи, позволяющие получать энергию и питание от солнечного света.",
    "The body's nerves are attached with polypyrrole nanocircuits that are capable of capturing wasted energy, in the form of heat, and converting it back into usable power.":
      "К нервам организма подключаются полипиррольные наноцепи, способные улавливать лишнюю энергию в форме тепла и преобразовывать её обратно в полезную энергию.",
    "A cutting-edge knowledgebase entirely built off of nanotech rod-logic, training the user on social engineering. Thought to be stolen technology, its existence has been a secret until recently.":
      "Передовая база знаний, полностью построенная на нанотехнологичной логике стержней и обучающая социальной инженерии. Считается украденной технологией; до недавнего времени её существование было тайной.",
    "quantum supercomputer, allowing you to access and use its incredible computing power.":
      "квантовый суперкомпьютер, позволяющий получить доступ к его невероятной вычислительной мощности и использовать её.",
    "A cranial implant that affects the user's personality, making them better at negotiation in social situations.":
      "Черепной имплант, влияющий на личность пользователя и улучшающий его навыки переговоров в социальных ситуациях.",
    "Makes the wearer a better leader and mentor by greatly increasing their awareness of social dynamics. Not actually a standard implant, but rather a series of training courses and seminars, led by a famous speaker named Denis.":
      "Делает владельца лучшим лидером и наставником, значительно повышая понимание социальной динамики. На самом деле это не обычный имплант, а серия учебных курсов и семинаров под руководством известного оратора по имени Денис.",
    "The SPTN-97 gene is injected into the genome. The SPTN-97 gene is an artificially synthesized gene that was developed by DARPA to create super-soldiers through genetic modification. The gene was outlawed in 2056.":
      "Ген SPTN-97 вводится в геном. Это искусственно синтезированный ген, разработанный DARPA для создания суперсолдат с помощью генетической модификации. Ген был запрещён в 2056 году.",
    "A crude but functional matter phase-shifter module that is embedded in the brainstem and cerebellum. This augmentation was developed by criminal organizations and allows the user to project and control holographic simulacrums within a large radius. These simulacrums are commonly used for espionage and surveillance work.":
      "Грубый, но рабочий модуль фазового сдвига материи, встроенный в ствол мозга и мозжечок. Разработан преступными организациями; позволяет проецировать и контролировать голографические симулякры в большом радиусе. Обычно они используются для шпионажа и наблюдения.",
    "A bionic jaw that contains advanced hardware and software capable of psychoanalyzing and profiling the personality of others using optical imaging software.":
      "Бионическая челюсть с передовыми аппаратными и программными средствами для психоанализа и составления профиля личности окружающих с помощью оптической визуализации.",
    "A cochlear implant that helps the player detect and locate enemies using sound propagation.":
      "Кохлеарный имплант, помогающий обнаруживать и находить врагов по распространению звука.",
    "An advanced neural implant that improves your speaking abilities, making you more convincing and likable in conversations and overall improving your social interactions.":
      "Передовой нейроимплант, улучшающий речь, делая вас более убедительным и приятным собеседником и в целом улучшая социальное взаимодействие.",
    "A cochlear implant with an embedded computer that analyzes incoming speech. The embedded computer processes characteristics of incoming speech, such as tone and inflection, to pick up on subtle cues and aid in social interactions.":
      "Кохлеарный имплант со встроенным компьютером, анализирующим входящую речь. Компьютер обрабатывает тон и интонацию речи, распознаёт тонкие сигналы и помогает в социальном взаимодействии.",
    "The next evolution is near, a union of man and machine. A synthesis greater than the birth of the human organism. Time spent with the gift has allowed for acclimatization of the invasive augment and the toll it takes upon your frame, granting a 5% reduced penalty to all stats.":
      "Следующая ступень эволюции близка — союз человека и машины. Синтез, превосходящий само рождение человеческого организма. Время, проведённое с этим даром, позволило привыкнуть к инвазивному импланту и его воздействию на ваше тело, уменьшив штраф ко всем характеристикам на 5%.",
    "The synthesis of human and machine is nothing to fear. It is our destiny. You will become greater than the sum of our parts. As One. Embrace your gift fully and wholly free of its accursed toll. Serenity brings tranquility in the form of no longer suffering a stat penalty. ":
      "Синтеза человека и машины не нужно бояться. Это наша судьба. Вы станете чем-то большим, чем сумма наших частей. Единым целым. Примите свой дар полностью и освободитесь от его проклятой цены. Безмятежность приносит покой: штраф к характеристикам исчезает.",
    "Stanek's Gift has no penalty.": "Дар Стэнека не даёт штрафов.",
    "This advanced artificial heart, created from plasteel and graphene, is capable of pumping blood more efficiently than an organic heart.":
      "Это передовое искусственное сердце из пластали и графена, способное перекачивать кровь эффективнее органического сердца.",
    "An experimental augmentation that lets the user make incredible leaps of insight and flights of fancy. Created by a mysterious figure known only as 'The Sculptor', this augmentation appears as a set of silvery metallic patterns on the user's upper back and shoulders. Awarded to those who discover the secrets of the labyrinth.":
      "Экспериментальный имплант, позволяющий совершать невероятные скачки озарения и полёты фантазии. Создан таинственной фигурой, известной лишь как «Скульптор»; выглядит как набор серебристых металлических узоров на верхней части спины и плечах пользователя. Вручается тем, кто раскрыл тайны лабиринта.",
    "This augmentation increases the stasis link limit by one, and raises charisma by 5% and agility by 10%, and darknet money by 30%.":
      "Этот имплант увеличивает лимит стазис-связей на единицу, повышает обаяние на 5%, ловкость на 10%, а доход в даркнете — на 30%.",
    "Modeled after the winged boots of mythology, this implant somehow provides tireless social energy to the user. Its creator, the enigmatic Sculptor, refuses to reveal the details of how it works, and only mutters about 'liveware APIs'. Awarded to those who discover the secrets of the labyrinth.":
      "Созданный по образцу крылатых сапог из мифов, этот имплант каким-то образом наделяет пользователя неиссякаемой социальной энергией. Его создатель, загадочный Скульптор, отказывается раскрывать принцип работы и лишь бормочет что-то о «liveware API». Вручается тем, кто раскрыл тайны лабиринта.",
    "This augmentation increases the speed of authentication and heartbleed by 20%, and raises charisma and dexterity by 6%.":
      "Этот имплант ускоряет аутентификацию и Heartbleed на 20%, а также повышает обаяние и ловкость на 6%.",
    "This unique augmentation allows the user to strike straight to the heart of the matter and sweep aside obstacles in the way of their goals. Appearing as a simple insignia on the user's forearm, its true function is unknown. It is said to be one of the tools of The Sculptor. Awarded to those who discover the secrets of the labyrinth.":
      "Этот уникальный имплант позволяет бить прямо в самую суть и сметать препятствия на пути к цели. Он выглядит как простой знак на предплечье пользователя, но его истинное назначение неизвестно. Говорят, это один из инструментов Скульптора. Вручается тем, кто раскрыл тайны лабиринта.",
    "This augmentation increases the stasis link limit by one, and raises charisma by 7%, strength by 10%, and darknet money by 10%.":
      "Этот имплант увеличивает лимит стазис-связей на единицу, повышает обаяние на 7%, силу на 10%, а доход в даркнете — на 10%.",
    "This skeletal augmentation greatly enhances the user's durability and health. Inspired by the original Staff of Medicine that is said to have been given to Daedalus as a reward for the completion of the Labyrinth, which all modern augments are a descendant of. ":
      "Этот каркасный имплант значительно повышает выносливость и здоровье пользователя. Он вдохновлён первым Посохом медицины, который, согласно легенде, был вручён Дедалу за завершение Лабиринта — предшественником всех современных имплантов.",
    "This augmentation increases the stasis link limit by one, and raises charisma xp, defense, and darknet money by 10%.":
      "Этот имплант увеличивает лимит стазис-связей на единицу, а также повышает опыт обаяния, защиту и доход в даркнете на 10%.",
    "An advanced neural implant that integrates Bayesian inference algorithms into the brain's decision-making processes. This augmentation enhances the user's ability to assess probabilities, predict outcomes, and adapt strategies in real-time, making them exceptionally persuasive and confident in negotiations and social interactions. Awarded to those who discover the secrets of the labyrinth.":
      "Передовой нейроимплант, интегрирующий алгоритмы байесовского вывода в процессы принятия решений мозгом. Он улучшает способность оценивать вероятности, предсказывать исходы и адаптировать стратегии в реальном времени, делая пользователя исключительно убедительным и уверенным в переговорах и общении. Вручается тем, кто раскрыл тайны лабиринта.",
    "This augmentation raises charisma by 9%, company rep by 5%, and darknet money by 15%.":
      "Этот имплант повышает обаяние на 9%, репутацию в компаниях на 5%, а доход в даркнете — на 15%.",
    "A cutting-edge neural implant that leverages Solomonoff induction to analyze and predict patterns with unparalleled precision. This augmentation enhances the user's ability to deduce optimal strategies and make compelling arguments, turning every interaction into a calculated success. The technique is sometimes referred to as Solomonoff's Lightsaber, as it is a more powerful version of Occam's razor. The final augment awarded to those who discover the secrets of the labyrinth.":
      "Передовой нейроимплант, использующий индукцию Соломонова для анализа и предсказания закономерностей с беспрецедентной точностью. Он улучшает способность выводить оптимальные стратегии и приводить убедительные аргументы, превращая каждое взаимодействие в просчитанный успех. Этот метод иногда называют световым мечом Соломонова: это более мощная версия бритвы Оккама. Последний имплант, вручаемый тем, кто раскрыл тайны лабиринта.",
    "This augmentation raises charisma, hacking, darknet money, and company rep by 10%.":
      "Этот имплант повышает обаяние, взлом, доход в даркнете и репутацию в компаниях на 10%.",
    "It's time to leave the cave.": "Пора покинуть пещеру.",
    "Penta-dynamo-neurovascular-valve inserted in the carpal ligament, enhances dexterity.":
      "Пента-динамо-нейроваскулярный клапан, встроенный в запястную связку, повышает ловкость.",
    "This augmentation makes the Cheat Code minigame easier by showing what character will come next.":
      "Этот имплант упрощает мини-игру «Чит-код», показывая, какой символ появится следующим.",
    "A synthetic symbiotic virus that is injected into human brain tissue. The Vangelis virus heightens the senses and focus of its host while also enhancing their intuition.":
      "Синтетический симбиотический вирус, вводимый в ткани человеческого мозга. Вирус Vangelis обостряет чувства и концентрацию носителя, а также усиливает его интуицию.",
    "An improved version of Vangelis, a synthetic symbiotic virus that is injected into human brain tissue. On top of the benefits of the original virus, this also grants accelerated healing and enhanced reflexes.":
      "Улучшенная версия Vangelis — синтетического симбиотического вируса, вводимого в ткани человеческого мозга. Помимо преимуществ оригинального вируса, эта версия ускоряет заживление и усиливает рефлексы.",
    "A copy of the WKS harmonizer from the MIA leader of the":
      "Копия гармонизатора WKS от пропавшего лидера фракции",
    "injects *Γ-based cells that provide general enhancement to the body.":
      "вводит клетки на основе *Γ, обеспечивающие общее усиление организма.",
    "This augmentation makes many aspects of infiltration easier and more productive via increased timer and rewards, reduced damage taken, etc.":
      "Этот имплант упрощает проникновение и делает его продуктивнее: увеличивает время и награды, уменьшает получаемый урон и так далее.",
    "Synthetic nerve-enhancements are injected into all major parts of the somatic nervous system, supercharging the spread of neural signals and increasing reflex speed.":
      "Синтетические усилители нервной системы вводятся во все основные отделы соматической нервной системы, многократно ускоряя распространение нервных сигналов и повышая скорость реакции.",
    "A connective brain implant to SASHA that focuses on pattern recognition and predictive templating.":
      "Связующий мозговой имплант для SASHA, сосредоточенный на распознавании закономерностей и прогнозирующем моделировании.",
    "This augmentation makes the Bracket minigame easier by removing all '[' ']'.":
      "Этот имплант упрощает мини-игру «Скобки», убирая все символы «[» и «]».",
    "A connective brain implant that greatly increases the user's speech reaction time. This allows the user to think faster and respond quicker in negotiations, and always have the last word.":
      "Связующий мозговой имплант, значительно ускоряющий речевую реакцию пользователя. Он позволяет быстрее думать и отвечать на переговорах, всегда оставляя последнее слово за вами.",
    "A concoction of advanced nanobots that is orally ingested into the body. These nanobots induce physiological changes and significantly improve the body's functioning in all aspects.":
      "Состав из передовых наноботов, принимаемый внутрь. Наноботы вызывают физиологические изменения и значительно улучшают работу организма во всех отношениях.",
    "Zoë's Omnicerebrum Ënhancer for sleeves inserts an omnicerebrum into your sleeve. An omnicerebrum is a near perfect simulation of the human brain, allowing it to take advantage of a larger variety of augments. But you should know about this, BitRunner, since you have one of these yourself!":
      "Omnicerebrum Ënhancer Зои для клонов устанавливает омницеребрум в вашего клона. Омницеребрум — почти идеальная симуляция человеческого мозга, позволяющая использовать гораздо больше имплантов. Но ты и сам должен это знать, Битраннер: у тебя ведь тоже есть такой!",
    "Allows sleeves to benefit from Stanek's Gift, but is less powerful if several are installed.":
      "Позволяет клонам получать пользу от Дара Стэнека, но становится слабее, если установлено несколько таких имплантов.",

    // IPvGO interface, tutorial, scoring, and opponent descriptions.
    "Subnet owner: ": "Владелец подсети: ",
    "Find New Subnet": "Найти новую подсеть",
    "Place a router to begin!": "Разместите маршрутизатор, чтобы начать!",
    "Score: Black: ": "Счёт: чёрные: ",
    " White: ": " белые: ",
    "End Game": "Завершить игру",
    "View Final Score": "Посмотреть итоговый счёт",
    "Waiting for opponent": "Ожидание противника",
    "Pass Turn": "Пропустить ход",
    "Traditional Go look": "Классический вид Go",
    "Show stones and grid as if it was a standard Go board": "Показывать камни и сетку как на обычной доске Go",
    "Show previous move": "Показать предыдущий ход",
    "Show the board as it was before the last move": "Показать доску в состоянии до последнего хода",
    "Currently showing a past board state. Please disable \"Show previous move\" to continue.":
      "Сейчас показано прежнее состояние доски. Отключите «Показать предыдущий ход», чтобы продолжить.",
    "It is not your turn to play.": "Сейчас не ваш ход.",
    "The game is complete, please reset to continue.": "Игра завершена. Сбросьте её, чтобы продолжить.",
    "Invalid move: ": "Недопустимый ход: ",
    "The opponent passes their turn; It is now your turn to move.": "Противник пропускает ход; теперь ход за вами.",
    "Hit 'Reset' to try again": "Нажмите «Сброс», чтобы попробовать ещё раз",
    "Invalid move: You cannot suicide your routers by placing them with no access to any empty ports.":
      "Недопустимый ход: нельзя подставить свои маршрутизаторы под захват, лишив их доступа к пустым узлам.",
    "That node is offline; a piece cannot be placed there": "Этот узел отключён: разместить здесь элемент нельзя.",
    "That node is already occupied by a piece": "Этот узел уже занят элементом.",
    "It is illegal to repeat prior board states": "Нельзя повторять прежние состояния доски.",
    "It is illegal to cause your own pieces to be captured": "Нельзя допускать захват собственных элементов.",
    "The game is over": "Игра завершена",
    "Invalid move": "Недопустимый ход",
    "No AI": "Без ИИ",
    "Practice Board": "Тренировочная доска",
    "Easy AI": "Простой ИИ",
    "Spread AI": "Экспансивный ИИ",
    "Aggro AI": "Агрессивный ИИ",
    "Martial AI": "Боевой ИИ",
    "Mid AI": "Средний ИИ",
    "Hard AI": "Сложный ИИ",
    "increased hacknet production": "повышенное производство Hacknet",
    "crime success rate": "успешность преступлений",
    "hacking money": "доход от взлома",
    "strength, defense, dexterity, and agility levels": "уровни силы, защиты, ловкости и проворства",
    "reputation gain": "получение репутации",
    "faster hack(), grow(), and weaken()": "более быстрые hack(), grow() и weaken()",
    "hacking level": "уровень взлома",
    "Practice on a subnet where you place both colors of routers, or play as white against your IPvGO script.":
      "Тренируйтесь на подсети, размещая маршрутизаторы обоих цветов, или играйте белыми против своего скрипта IPvGO.",
    "The Netburners faction are a mysterious group with only the most tenuous control over their subnets. Concentrating mainly on their hacknet server business, IPvGO is not their main strength.":
      "Фракция Netburners — загадочная группа, лишь формально контролирующая свои подсети. Они в основном занимаются серверами Hacknet, поэтому IPvGO не является их сильной стороной.",
    "The Slum Snakes faction are a small-time street gang who turned to organized crime using their subnets. They are known to use long router chains snaking across the subnet to encircle territory.":
      "Фракция Slum Snakes — небольшая уличная банда, перешедшая к организованной преступности с помощью своих подсетей. Они любят опоясывать территорию длинными цепочками маршрутизаторов.",
    "The Black Hand faction is a black-hat hacking group who uses their subnets to launch targeted DDOS attacks. They are famous for their unrelenting aggression, surrounding and strangling any foothold their opponents try to establish.":
      "Фракция Чёрной Руки — хакерская группа, использующая подсети для целевых DDoS-атак. Она славится неукротимой агрессией: окружает и уничтожает любой плацдарм, который пытается создать противник.",
    "The faction known as Tetrads prefers to get up close and personal. Their combat style excels at circling around and cutting through their opponents, both on and off of the subnets.":
      "Фракция, известная как Tetrads, предпочитает действовать вблизи. Её боевой стиль основан на окружении и прорыве сквозь противников — как в подсетях, так и за их пределами.",
    "Not much is known about this shadowy faction. They do not easily let go of subnets that they control, and are known to lease IPvGO cycles in exchange for reputation among other factions.":
      "Об этой таинственной фракции известно немного. Она неохотно отдаёт контролируемые подсети и сдаёт циклы IPvGO в обмен на репутацию среди других фракций.",
    "The Illuminati are thought to only exist in myth. Said to always have prepared defenses in their IPvGO subnets. Provoke them at your own risk.":
      "Считается, что Illuminati существуют лишь в мифах. Говорят, их подсети IPvGO всегда имеют подготовленную оборону. Провоцируйте их на свой страх и риск.",
    "What you have seen is only the shadow of the truth. It's time to leave the cave.":
      "Увиденное вами — лишь тень истины. Пора покинуть пещеру.",
    "Game complete!": "Игра завершена!",
    "Black wins!": "Победа чёрных!",
    "White wins!": "Победа белых!",
    "You win!": "Вы победили!",
    "Winner: ": "Победитель: ",
    "Score Explanation": "Объяснение счёта",
    "New Subnet": "Новая подсеть",
    "Subnet power gained:": "Полученная сила подсети:",
    "The total number of empty points and routers you took control of on this subnet":
      "Общее количество пустых точек и маршрутизаторов, которые вы взяли под контроль в этой подсети",
    "Difficulty Multiplier:": "Множитель сложности:",
    "Win Streak:": "Серия побед:",
    "Loss Streak:": "Серия поражений:",
    "Win Streak Multiplier:": "Множитель серии побед:",
    "Loss Streak Multiplier:": "Множитель серии поражений:",
    "Node power is what stat bonuses scale from, and is gained on each completed subnet.": "Сила узлов определяет бонусы к характеристикам и начисляется за каждую завершённую подсеть.",
    "It is calculated from the number of nodes you control, multiplied by modifiers for the":
      "Она рассчитывается по числу контролируемых узлов с учётом множителей за",
    "opponent difficulty, if you won or lost, and your current winstreak.": "сложность противника, победу или поражение и текущую серию побед.",
    "Consecutive wins award progressively higher multipliers for node power. Coming back from a loss streak also gives an extra bonus.":
      "Последовательные победы дают всё большие множители силы узлов. Победа после серии поражений также приносит дополнительный бонус.",
    "Your total node power from all subnets": "Ваша общая сила узлов со всех подсетей",
    "Winstreak Bonus: ": "Бонус серии побед: ",
    "reputation converted to favor": "репутации, превращённой в благосклонность",
    "New Total Bonus: ": "Новый общий бонус: ",
    "Wins:": "Победы:",
    "Current winstreak": "Текущая серия побед",
    "Highest winstreak": "Лучшая серия побед",
    "Captured nodes:": "Захваченные узлы:",
    "Node power:": "Сила узлов:",
    "Rep converted to favor": "Репутация, превращённая в благосклонность",
    "from winstreaks:": "за серии побед:",
    "(max)": "(макс.)",
    "The total number of empty points and routers": "Общее число пустых точек и маршрутизаторов",
    "you took control of, across all subnets": "которыми вы управляли во всех подсетях",
    "The total stat multiplier gained via your current node power.": "Общий множитель характеристик, полученный благодаря текущей силе узлов.",
    "Komi represents the current faction's home-field advantage on this subnet,": "Коми отражает преимущество текущей фракции на своей подсети",
    "to balance the first-move advantage that the player with the black routers has.": "и уравновешивает преимущество первого хода игрока с чёрными маршрутизаторами.",
    "Nodes Captured:": "Захваченные узлы:",
    "Difficulty Multiplier:": "Множитель сложности:",

    // IPvGO tutorial text. The ns.go API identifier remains unchanged.
    "CHALLENGE: This white network on the bottom is vulnerable! Click on the board to place a router. Capture some white pieces by cutting off their access to any empty nodes.":
      "ЗАДАНИЕ: Белая сеть внизу уязвима! Нажмите на поле, чтобы разместить маршрутизатор. Захватите белые элементы, лишив их доступа к пустым узлам.",
    "Correct! With no open ports, the white routers are destroyed. Now you surround and control the empty nodes in the bottom-right.":
      "Правильно! Без открытых портов белые маршрутизаторы уничтожены. Теперь окружите и контролируйте пустые узлы в правом нижнем углу.",
    "Unfortunately the white routers still touch at least one empty node. Hit 'Reset' to try again.":
      "К сожалению, белые маршрутизаторы всё ещё касаются хотя бы одного пустого узла. Нажмите «Сброс», чтобы попробовать ещё раз.",
    "CHALLENGE: Your routers are in trouble! They only have one open port. Save the black network by connecting them to more empty nodes.":
      "ЗАДАНИЕ: Ваши маршрутизаторы в опасности! У них только один открытый порт. Спасите чёрную сеть, соединив её с большим числом пустых узлов.",
    "Correct! Now the network touches three empty nodes instead of one, making it much harder to cut them off.":
      "Правильно! Теперь сеть касается трёх пустых узлов вместо одного, поэтому отрезать её стало гораздо сложнее.",
    "Unfortunately your network can still be cut off from all empty ports in just one move by white. Hit 'Reset' to try again.":
      "К сожалению, белые всё ещё могут одним ходом отрезать вашу сеть от всех пустых портов. Нажмите «Сброс», чтобы попробовать ещё раз.",
    "CHALLENGE: Save the black network on the left! Connect the network to more than one empty node.":
      "ЗАДАНИЕ: Спасите чёрную сеть слева! Соедините её более чем с одним пустым узлом.",
    "Correct! Now the network touches two empty nodes instead of one, making it much harder to cut them off.":
      "Правильно! Теперь сеть касается двух пустых узлов вместо одного, поэтому отрезать её стало гораздо сложнее.",
    "Incorrect. Your left network can still be cut off from empty ports in just one move. Also, you blocked one of your only open ports from your right network!":
      "Неверно. Левую сеть всё ещё можно одним ходом отрезать от пустых портов. Кроме того, вы заблокировали один из немногих открытых портов правой сети!",
    "CHALLENGE: The black routers are only connected to one empty-node group. Place a router such that they are connected to TWO empty node groups instead.":
      "ЗАДАНИЕ: Чёрные маршрутизаторы соединены только с одной группой пустых узлов. Разместите маршрутизатор так, чтобы они соединились с ДВУМЯ группами пустых узлов.",
    "Correct! Now that your network surrounds empty nodes in multiple different areas, it is impossible for the network to be captured by white because of the suicide rule (unless you fill in your own empty nodes!).":
      "Правильно! Теперь сеть окружает пустые узлы в нескольких областях, поэтому белые не могут захватить её из-за правила самоубийства (если только вы сами не заполните свои пустые узлы!).",
    "Incorrect. The black network still only touches one group of open nodes. (Hint: Try dividing up the bottom open-node group.) Hit 'Reset' to try again.":
      "Неверно. Чёрная сеть всё ещё касается только одной группы открытых узлов. (Подсказка: попробуйте разделить нижнюю группу открытых узлов.) Нажмите «Сброс», чтобы попробовать ещё раз.",
    "In late 2070, the .org bubble burst, and most of the newly-implemented IPvGO 'net collapsed overnight. Since then, various factions have been fighting over small subnets to control their computational power. These subnets are very valuable in the right hands, if you can wrest them from their current owners.":
      "В конце 2070 года пузырь .org лопнул, и большая часть недавно созданной сети IPvGO рухнула за одну ночь. С тех пор различные фракции борются за небольшие подсети, чтобы управлять их вычислительной мощностью. В умелых руках эти подсети очень ценны — если удастся отнять их у нынешних владельцев.",
    "(For details about how to automate with the API, and for a working starter script, visit the":
      "(Подробнее об автоматизации через API и готовом стартовом скрипте см. раздел",
    "section of the in-game documentation.)": "внутриигровой документации.)",
    "How to take over IPvGO Subnets": "Как захватывать подсети IPvGO",
    "Your goal is to control more": "Ваша цель — контролировать больше",
    "empty nodes": "пустых узлов",
    "in the subnet than the faction currently holding it, by": "в подсети, чем контролирующая её фракция,",
    "surrounding those open nodes with your routers.": "окружая эти открытые узлы своими маршрутизаторами.",
    "Each turn you place a router in an empty node (or pass).": "В каждый ход вы размещаете маршрутизатор в пустом узле (или пропускаете ход).",
    "The router will connect to your adjacent routers,": "Маршрутизатор соединяется с соседними маршрутизаторами,",
    "forming networks.": "образуя сети.",
    "A network's remaining open ports are indicated by lines heading out towards the empty nodes adjacent to the network.":
      "Оставшиеся открытые порты сети обозначаются линиями, направленными к соседним с сетью пустым узлам.",
    "If a group of routers no longer is connected to any empty nodes, they will experience intense packet loss and be removed from the subnet.":
      "Если группа маршрутизаторов больше не соединена ни с одним пустым узлом, она испытает сильную потерю пакетов и будет удалена из подсети.",
    "Make sure you ALWAYS have access to several empty nodes in each of your networks!":
      "ВСЕГДА оставляйте каждой своей сети доступ к нескольким пустым узлам!",
    "A network with only one remaining open port will start to fade in and out, because it is at risk of being destroyed.":
      "Сеть, у которой остался только один открытый порт, начнёт мерцать, поскольку ей грозит уничтожение.",
    "You also can use your routers to limit your opponent's access to empty nodes as much as possible.": "Маршрутизаторами также можно максимально ограничить доступ противника к пустым узлам.",
    "Cut a network off from any empty nodes, and their entire group of routers will be removed!":
      "Отрежьте сеть от всех пустых узлов — вся её группа маршрутизаторов будет удалена!",
    "Winning the Subnet": "Победа над подсетью",
    "The game ends when all of the open nodes on the subnet are completely surrounded by a single color, or when both players pass consecutively.":
      "Игра заканчивается, когда все открытые узлы подсети полностью окружены одним цветом или оба игрока подряд пропускают ход.",
    "Once the subnet is fully claimed, each player will get one point for each empty node they fully surround on the subnet, plus a point for each router they have.":
      "После полного захвата подсети каждый игрок получает очко за каждый полностью окружённый им пустой узел и ещё по очку за каждый свой маршрутизатор.",
    "You can use the edge of the board along with your routers to fully surround and claim empty nodes.": "Для полного окружения и захвата пустых узлов можно использовать край доски вместе со своими маршрутизаторами.",
    "White will also get a few points (called \"komi\") as a home-field advantage in the subnet, and to balance black's advantage of having the first move.":
      "Белые также получают несколько очков (так называемую «коми») как преимущество хозяев подсети и для компенсации преимущества чёрных, делающих первый ход.",
    "Any territory you control at the end of the game will award you stat multiplier bonuses.": "Любая контролируемая вами территория в конце игры даёт бонусы к множителям характеристик.",
    "Winning the node will increase the amount gained, but is not required.": "Победа над узлом увеличит полученную сумму, но не является обязательной.",
    "Two wins in a row against an opponent will give you": "Две победы подряд над противником принесут вам",
    "reputation converted to favor with that faction": "репутации, превращённой в благосклонность этой фракции",
    "if you are a member of that faction.": "если вы состоите в этой фракции.",
    "The rep is immediately applied as favor, meaning it will increase reputation gain right away without needing an install.":
      "Репутация сразу применяется как благосклонность, поэтому немедленно увеличивает прирост репутации без установки аугментаций.",
    "For experienced Go players: IPvGO uses the old traditional Go score rules, area scoring, rather than the Japanese territory scoring that was popular in the mid-21st century.":
      "Для опытных игроков в Go: IPvGO использует старые традиционные правила подсчёта Go — подсчёт по площади, а не популярный в середине XXI века японский подсчёт территории.",
    "All stones are alive and count towards score unless captured during the game.": "Все камни считаются живыми и идут в счёт, если не были захвачены во время игры.",
    "Chains that could be dead are not automatically captured after the game, and prisoners are not calculated.": "Цепи, которые могли бы считаться мёртвыми, не захватываются автоматически после игры, а пленные не подсчитываются.",
    "This was chosen for its simplicity to teach and to calculate, rather than using the territory scoring shortcuts designed to make physical games quicker.":
      "Этот вариант выбран за простоту обучения и подсчёта, а не за счёт упрощений территориального подсчёта, ускоряющих игру за настоящей доской.",
    "Special Rule Details": "Особые правила",
    "Because these subnets have fallen into disrepair, they are not always perfectly square.": "Поскольку эти подсети пришли в упадок, они не всегда имеют идеальную квадратную форму.",
    "Dead areas, such as the top-left corner in the example above, are not part of the subnet.": "Мёртвые области, например верхний левый угол на примере выше, не являются частью подсети.",
    "They do not count as territory, and do not provide open ports to adjacent routers.": "Они не считаются территорией и не дают открытых портов соседним маршрутизаторам.",
    "You cannot suicide your own routers by cutting off access to their last remaining open node.": "Нельзя совершить самоубийство своими маршрутизаторами, отрезав их от последнего открытого узла.",
    "You also cannot suicide a router by placing it in a node that is completely surrounded by your opponent's routers.": "Также нельзя подставить маршрутизатор, разместив его в узле, полностью окружённом маршрутизаторами противника.",
    "There is one exception to the suicide rule: You can place a router on ANY node if it would capture any of the opponent's routers.":
      "Есть одно исключение из правила самоубийства: маршрутизатор можно разместить на ЛЮБОМ узле, если это захватит маршрутизатор противника.",
    "You cannot repeat previous board states.": "Нельзя повторять прежние состояния доски.",
    "This rule prevents infinite loops of capturing and re-capturing.": "Это правило предотвращает бесконечные циклы захвата и повторного захвата.",
    "This means that in some cases you cannot immediately capture an enemy network that is flashing and vulnerable.": "Поэтому иногда нельзя сразу захватить мерцающую и уязвимую вражескую сеть.",
    "Note that you CAN re-capture eventually, but you must play somewhere else on the board first, to make the overall board state different.":
      "Учтите, что повторный захват всё же возможен, но сначала нужно сделать ход в другом месте доски, изменив её общее состояние.",
    "Strategy": "Стратегия",
    "You can place routers and look at the board state via the \"ns.go\" api.": "Размещать маршрутизаторы и просматривать состояние доски можно через API «ns.go».",
    "If a network surrounds a single empty node, the opponent can eventually capture it by filling in that node.": "Если сеть окружает один пустой узел, противник со временем может захватить её, заполнив этот узел.",
    "However, if your network has two separate empty nodes inside of it, the suicide rule prevents the opponent from filling up either of them.": "Но если внутри сети есть два отдельных пустых узла, правило самоубийства не позволит противнику заполнить ни один из них.",
    "This means your network cannot be captured!": "Значит, вашу сеть нельзя захватить!",
    "Try to build your networks to surround several different empty nodes, and avoid filling in your network's empty nodes when possible.": "Старайтесь строить сети, окружающие несколько разных пустых узлов, и по возможности не заполняйте пустые узлы внутри своих сетей.",
    "Pay attention to when a network of routers has only one or two open ports to empty spaces!": "Следите за сетями маршрутизаторов, у которых остался только один или два открытых порта к пустым областям!",
    "That is your opportunity to defend your network, or capture the opposing faction's.": "Это возможность защитить свою сеть или захватить сеть противника.",
    "Every faction has a different style, and different weaknesses.": "У каждой фракции свой стиль и свои слабости.",
    "Try to identify what they are good and bad at doing.": "Постарайтесь понять, что у неё получается хорошо, а что плохо.",
    "The best way to learn strategies is to experiment and find out what works!": "Лучший способ освоить стратегии — экспериментировать и выяснять, что работает!",
    "This game is Go with slightly simplified scoring.": "Эта игра — Go с немного упрощённым подсчётом.",
    "For more rule details and strategies try": "Подробнее о правилах и стратегиях см.",
    "The Way to Go interactive guide.": "интерактивное руководство The Way to Go.",
    "Invalid move: You cannot suicide your routers by placing them with no access to any empty ports.": "Недопустимый ход: нельзя подставить свои маршрутизаторы под захват, лишив их доступа к пустым узлам.",
    "Reset": "Сброс",

    // BitNode selection, Source-Files, and advanced options.
    "The original BitNode": "Исходный BitNode",
    "From the shadows, they rose": "Из теней они восстали",
    "The Price of Civilization": "Цена цивилизации",
    "The Man and the Machine": "Человек и машина",
    "Posthuman": "Постчеловек",
    "Like Tears in Rain": "Как слёзы под дождём",
    "More human than humans": "Более человечны, чем люди",
    "Money never sleeps": "Деньги не спят",
    "Hacknet Unleashed": "Освобождённый Hacknet",
    "Your body is not who you are": "Ваше тело — это не вы",
    "Okay. Sell it all.": "Хорошо. Продавайте всё.",
    "Repeat.": "Повторяй.",
    "1 step back, 2 steps forward": "Шаг назад, два шага вперёд",
    "Territory exists only in the 'net": "Территория существует лишь в сети",
    "The rules have changed": "Правила изменились",
    "Max level:": "Макс. уровень:",
    "Source-File Level:": "Уровень исходного файла:",
    "Level:": "Уровень:",
    "Active level:": "Активный уровень:",
    "Source-File -1: Exploits in the BitNodes": "Исходный файл −1: эксплойты в BitNode",
    "Enter BN": "Войти в BN",
    "It looks like you are wondering which BitNode you should choose. If you want to get advice on choosing your next BitNode, you can check these BitNode recommendation guides:":
      "Похоже, вы выбираете, какой BitNode пройти. Советы по выбору следующего BitNode можно найти в этих руководствах:",
    "Short guide": "Краткое руководство",
    "Comprehensive guide": "Подробное руководство",
    "You can read these guides later in the Documentation tab. Make sure to check that tab. Many pages are unlocked now.":
      "Позже эти руководства можно прочитать на вкладке «Документация». Обязательно загляните туда: многие страницы уже разблокированы.",
    "OK": "ОК",
    "WARNING: USING THIS PROGRAM WILL CAUSE YOU TO LOSE ALL OF YOUR PROGRESS ON THE CURRENT BITNODE.":
      "ВНИМАНИЕ: ИСПОЛЬЗОВАНИЕ ЭТОЙ ПРОГРАММЫ ЛИШИТ ВАС ВСЕГО ПРОГРЕССА В ТЕКУЩЕМ BITNODE.",
    "Do you want to travel to the BitNode Nexus? This allows you to reset the current BitNode and select a new one.":
      "Хотите отправиться в Нексус BitNode? Это позволит сбросить текущий BitNode и выбрать новый.",
    "Travel to the BitVerse": "Отправиться в BitVerse",
    "Advanced options": "Расширенные настройки",
    "These options enable unique gameplay that is intended for experienced players. If you are a new player, you can safely ignore these options and come back to try them later.":
      "Эти параметры включают особые режимы игры для опытных игроков. Если вы новичок, можете спокойно пропустить их и вернуться позже.",
    "Changing the active level of a SF is temporary; you still permanently own that SF level.": "Изменение активного уровня исходного файла временное: этот уровень всё равно остаётся у вас навсегда.",
    "For example, if": "Например, если",
    "you enter BN 1.3 while having SF 1.2 but with the active level set to 0, you will not get the bonuses from SF":
      "вы войдёте в BN 1.3, имея SF 1.2, но установив активный уровень 0, вы не получите бонусы SF",
    "but you will still earn SF 1.3 when destroying the BN.": "но всё равно получите SF 1.3 после уничтожения BN.",
    "Changing the active level of SF 10 does not affect your current sleeves or the maximum number of sleeves.":
      "Изменение активного уровня SF 10 не влияет на текущих клонов или их максимальное количество.",
    "Add": "Добавить",
    "Remove all overridden SF": "Удалить все переопределённые исходные файлы",
    "No overridden SF": "Нет переопределённых исходных файлов",
    "Remove all": "Удалить все",
    "Set active level for all chosen SF": "Установить активный уровень для всех выбранных исходных файлов",
    "Set all SF": "Установить для всех SF",
    "Override Intelligence:": "Переопределить интеллект:",
    "Your intelligence and your Sleeves' intelligence will be temporarily set to this value if it is lower than their current values. For example:":
      "Ваш интеллект и интеллект клонов временно будут установлены в это значение, если оно ниже текущего. Например:",
    "If your intelligence is 1000 and you set this value to 500, your intelligence will be temporarily set to 500.":
      "Если ваш интеллект равен 1000, а вы установите 500, временный интеллект станет равен 500.",
    "If a Sleeve's intelligence is 200 and you set this value to 500, that Sleeve's intelligence is still 200.":
      "Если интеллект клона равен 200, а вы установите 500, интеллект этого клона всё равно останется равен 200.",
    "Note that you still gain intelligence experience as normal.": "Учтите, что опыт интеллекта по-прежнему начисляется как обычно.",
    "The overridden intelligence will be shown in the character overview. You can hover your mouse over it to see the original value.":
      "Переопределённый интеллект отображается в обзоре персонажа. Наведите указатель, чтобы увидеть исходное значение.",
    "Restrict max RAM and core of Home PC": "Ограничить максимум ОЗУ и ядер домашнего ПК",
    "The home computer's maximum RAM and number of cores are lower than normal. Max RAM: 128GB. Max core: 1.":
      "Максимальный объём ОЗУ и число ядер домашнего компьютера ниже обычного. Макс. ОЗУ: 128 ГБ. Макс. ядер: 1.",
    "Disable Gang": "Отключить банду",
    "Disable Gang, regardless of BitNode and SF level": "Отключить банду независимо от BitNode и уровня SF",
    "Disable Corporation": "Отключить корпорацию",
    "Disable Corporation, regardless of BitNode and SF level": "Отключить корпорацию независимо от BitNode и уровня SF",
    "Disable Bladeburner": "Отключить Bladeburner",
    "Disable Bladeburner, regardless of BitNode and SF level": "Отключить Bladeburner независимо от BitNode и уровня SF",
    "Disable 4S Market Data": "Отключить рыночные данные 4S",
    "Disable 4S Market Data, regardless of BitNode and SF level": "Отключить рыночные данные 4S независимо от BitNode и уровня SF",
    "Disable Hacknet Server": "Отключить сервер Hacknet",
    "Disable Hacknet Server, regardless of BitNode and SF level. Hacknet Node is re-enabled in place of Hacknet Server.":
      "Отключить сервер Hacknet независимо от BitNode и уровня SF. Вместо сервера Hacknet снова включается узел Hacknet.",
    "Disable Sleeves' experience and augmentation": "Отключить опыт и аугментации клонов",
    "Sleeves cannot gain experience or install augmentations": "Клоны не могут получать опыт или устанавливать аугментации",
    "Level 1: 100% increased stat multipliers from Node Power": "Уровень 1: множители характеристик от силы узла увеличены на 100%",
    "Level 2: Permanently unlocks the go.cheat API": "Уровень 2: навсегда открывает API go.cheat",
    "Level 3: 25% additive increased success rate for the go.cheat API": "Уровень 3: вероятность успеха API go.cheat дополнительно увеличена на 25%",
    "Level 1:": "Уровень 1:",
    "Level 2:": "Уровень 2:",
    "Level 3:": "Уровень 3:",
    "This is the first BitNode created by the Enders to imprison the minds of humans.": "Это первый BitNode, созданный Enders для заточения человеческого разума.",
    "It became the prototype and testing ground for all of the BitNodes that followed.": "Он стал прототипом и испытательным полигоном для всех последующих BitNode.",
    "This is the first BitNode that you play through. It has no special modifications or mechanics.": "Это первый BitNode, который вы проходите. В нём нет особых модификаций или механик.",
    "Destroying this BitNode will give you Source-File ": "Уничтожение этого BitNode даст вам исходный файл ",
    "or if you already have this Source-File, it will upgrade its level up to a maximum of 3.": "а если он у вас уже есть, повысит его уровень максимум до 3.",
    "This Source-File lets the player start with 32GB of RAM on their home computer when entering a new BitNode and increases all of the player's multipliers by:": "Этот исходный файл даёт при входе в новый BitNode 32 ГБ ОЗУ на домашнем компьютере и увеличивает все множители игрока на:",
    "Organized crime groups quickly filled the void of power left behind from the collapse of Western government in the 2050s.": "Организованные преступные группировки быстро заполнили вакуум власти после распада западных правительств в 2050-х годах.",
    "As society and civilization broke down, people quickly succumbed to the innate human impulse of evil and savagery.": "С распадом общества и цивилизации люди быстро поддались врождённой человеческой тяге к злу и жестокости.",
    "The organized crime factions quickly rose to the top of the modern world.": "Преступные фракции быстро поднялись на вершину современного мира.",
    "give the player the ability to form and manage their own gang, which can earn the player money and reputation with the corresponding faction.": "позволяют игроку создать и управлять собственной бандой, зарабатывая деньги и репутацию у соответствующей фракции.",
    "The gang faction offers more augmentations than other factions, and in BitNode-2, it offers The Red Pill.": "Фракция банды предлагает больше аугментаций, чем другие фракции, а в BitNode 2 — ещё и The Red Pill.",
    "This Source-File allows you to form gangs in other BitNodes once your karma decreases to a certain value.": "Этот исходный файл позволяет создавать банды в других BitNode, когда карма опустится до определённого значения.",
    "It also increases your crime success rate, crime money, and charisma multipliers by:": "Он также увеличивает множители успешности преступлений, дохода от преступлений и обаяния на:",
    "Our greatest illusion is that a healthy society can revolve around a single-minded pursuit of wealth.": "Величайшая иллюзия — будто здоровое общество может вращаться вокруг единственной цели: наживы.",
    "Sometime in the early 21st century, economic and political globalization turned the world into a corporatocracy, and it never looked back.": "В начале XXI века экономическая и политическая глобализация превратила мир в корпоратократию, и назад он уже не оглянулся.",
    "Now, the privileged elite will happily bankrupt their own countrymen, decimate their own community, and evict their neighbors from houses in their desperate bid to increase their wealth.": "Теперь привилегированная элита с радостью разоряет соотечественников, разрушает собственные сообщества и выселяет соседей, отчаянно пытаясь увеличить своё богатство.",
    "In this BitNode, you can create and manage your own corporation.": "В этом BitNode можно создать и управлять собственной корпорацией.",
    "Running a successful corporation has the potential to generate massive profits.": "Успешная корпорация способна приносить огромную прибыль.",
    "This Source-File lets you create corporations on other BitNodes": "Этот исходный файл позволяет создавать корпорации в других BitNode",
    "and level 3 permanently unlocks the full API.": "а третий уровень навсегда открывает полный API.",
    "This Source-File also increases your charisma and company salary multipliers by:": "Этот исходный файл также увеличивает множители обаяния и зарплаты в компаниях на:",
    "The Singularity has arrived.": "Сингулярность наступила.",
    "The human race is gone, replaced by artificially super intelligent beings that are more machine than man.": "Человечество исчезло, его заменили искусственно созданные сверхразумные существа, в которых больше машины, чем человека.",
    "In this BitNode, you will gain access to a new set of Netscript functions known as Singularity functions.": "В этом BitNode вы получите доступ к новому набору функций Netscript — функциям Сингулярности.",
    "These functions allow you to control most aspects of the game through scripts, including working for factions/companies, purchasing/installing augmentations, and creating programs.": "Эти функции позволяют управлять через скрипты большей частью игры: работать на фракции и компании, покупать и устанавливать аугментации, создавать программы.",
    "This Source-File lets you access and use the Singularity functions outside of this BitNode.": "Этот исходный файл позволяет использовать функции Сингулярности за пределами этого BitNode.",
    "Each level of this Source-File reduces the RAM cost of singularity functions in other BitNodes:": "Каждый уровень этого исходного файла уменьшает стоимость ОЗУ функций Сингулярности в других BitNode:",
    "They said it couldn't be done.": "Говорили, что это невозможно.",
    "They said the human brain, along with its consciousness and intelligence, couldn't be replicated.": "Говорили, что человеческий мозг вместе с сознанием и интеллектом невозможно воспроизвести.",
    "They said the complexity of the brain results from unpredictable, nonlinear interactions that couldn't be modeled by 1's and 0's.": "Говорили, что сложность мозга вызвана непредсказуемыми нелинейными взаимодействиями, которые нельзя смоделировать единицами и нулями.",
    "They were wrong.": "Они ошибались.",
    "This Source-File grants you a new stat called Intelligence.": "Этот исходный файл даёт новую характеристику — интеллект.",
    "Intelligence is unique because it is permanent and persistent (it never gets reset back to 1).": "Интеллект уникален: он постоянен и не сбрасывается до 1.",
    "However, gaining Intelligence experience is much slower than other stats.": "Однако опыт интеллекта набирается гораздо медленнее опыта других характеристик.",
    "Higher Intelligence levels will boost your production for many actions in the game.": "Высокий интеллект повышает продуктивность многих действий в игре.",
    "In addition, this Source-File will unlock:": "Кроме того, этот исходный файл открывает:",
    "Permanent access to ": "Постоянный доступ к ",
    "Access to BitNode multiplier information on the ": "Доступ к информации о множителях BitNode на странице ",
    " page": " страница",
    "In the middle of the 21st century,": "В середине XXI века",
    "began designing and manufacturing advanced synthetic androids, or Synthoids for short.": "начала проектировать и производить передовых синтетических андроидов, или сокращённо синтоидов.",
    "They achieved a major technological breakthrough in the sixth generation of their Synthoid design, called MK-VI, by developing a hyper-intelligent AI.": "В шестом поколении синтоидов, названном MK-VI, они совершили технологический прорыв, создав сверхразумный ИИ.",
    "Many argue that this was the first sentient AI ever created.": "Многие считают, что это был первый когда-либо созданный разумный ИИ.",
    "This resulted in Synthoid models that were stronger, faster, and more intelligent than the humans that had created them.": "В результате появились синтоиды, превосходящие создавших их людей силой, скоростью и интеллектом.",
    "In this BitNode, you will be able to access the Bladeburner division at the NSA, which provides a new mechanic for progression.": "В этом BitNode вы получите доступ к подразделению Bladeburner в АНБ — новой механике развития.",
    "This Source-File allows you to access the NSA's Bladeburner division in other BitNodes.": "Этот исходный файл позволяет получать доступ к подразделению Bladeburner АНБ в других BitNode.",
    "You are trying to make a name for yourself as an up-and-coming hedge fund manager on Wall Street.": "Вы пытаетесь прославиться как перспективный управляющий хедж-фондом на Уолл-стрит.",
    "In this BitNode:": "В этом BitNode:",
    "Your starting money is 250e6.": "Ваш стартовый капитал — 250e6.",
    "You start with a WSE membership and access to the TIX API.": "У вас с начала есть членство в WSE и доступ к API TIX.",
    "You can short stocks and place different types of orders (limit/stop).": "Можно открывать короткие позиции по акциям и размещать разные типы заявок (лимитные/стоп-заявки).",
    "This Source-File grants the following benefits:": "Этот исходный файл даёт следующие преимущества:",
    "When Fulcrum Secret Technologies released their open-source Linux distro Chapeau, it quickly became the OS of choice for the underground hacking community.": "Когда Fulcrum Secret Technologies выпустила открытый дистрибутив Linux Chapeau, он быстро стал ОС выбора подпольного хакерского сообщества.",
    "Chapeau became especially notorious for powering the Hacknet, which is a global, decentralized network used for nefarious purposes.": "Chapeau особенно прославилась тем, что обеспечивала работу Hacknet — глобальной децентрализованной сети для преступных целей.",
    "This BitNode unlocks the Hacknet Server, which is an upgraded version of the Hacknet Node.": "Этот BitNode открывает сервер Hacknet — улучшенную версию узла Hacknet.",
    "Hacknet Servers generate hashes, which can be spent on a variety of different upgrades.": "Серверы Hacknet генерируют хэши, которые можно тратить на различные улучшения.",
    "This Source-File grants the following benefits:": "Этот исходный файл даёт следующие преимущества:",
    "This BitNode unlocks Sleeve and Grafting technology:": "Этот BitNode открывает технологии клонов и вживления:",
    "In 2084, VitaLife unveiled to the world the Persona Core, a technology that allowed people to digitize their consciousness.": "В 2084 году VitaLife представила миру Ядро личности — технологию, позволяющую оцифровывать сознание.",
    "Their consciousness could then be transferred into Synthoids or other bodies by transmitting the digitized data.": "Затем сознание можно было переносить в синтоидов или другие тела, передавая оцифрованные данные.",
    "Human bodies became nothing more than 'sleeves' for the human consciousness.": "Человеческие тела превратились лишь в «оболочки» для человеческого сознания.",
    "Mankind had finally achieved immortality - at least for those that could afford it.": "Человечество наконец обрело бессмертие — по крайней мере те, кто мог себе его позволить.",
    "Sleeve: Duplicate your consciousness into Synthoids, allowing you to perform different tasks asynchronously.": "Клон: дублируйте сознание в синтоидов и выполняйте разные задачи асинхронно.",
    "You cannot buy Sleeves or upgrade them outside this BitNode.": "За пределами этого BitNode нельзя покупать клонов или улучшать их.",
    "Grafting: Visit VitaLife in New Tokyo to get access to this technology.": "Вживление: посетите VitaLife в Новом Токио, чтобы получить доступ к этой технологии.",
    "It allows you to graft augmentations, which is an alternative way of installing augmentations.": "Она позволяет вживлять аугментации — альтернативный способ их установки.",
    "The 2050s was defined by the massive amounts of violent civil unrest and anarchic rebellion that rose all around the world.": "2050-е годы отличались массовыми насильственными беспорядками и анархическими восстаниями по всему миру.",
    "But just as the world was slowly beginning to recover from these dark times, financial catastrophes hit.": "Но когда мир начал медленно оправляться от этих мрачных времён, грянули финансовые катастрофы.",
    "In many countries, the high cost of trying to deal with the civil disorder bankrupted the governments.": "Во многих странах высокие расходы на борьбу с беспорядками обанкротили правительства.",
    "hackers were able to steal billions of dollars from the world's largest electronic banks, prompting an international banking crisis as governments were unable to bail out insolvent banks.": "хакеры смогли украсть миллиарды долларов из крупнейших электронных банков мира, вызвав международный банковский кризис: правительства не смогли спасти неплатёжеспособные банки.",
    "Now, the world is slowly crumbling in the middle of the biggest economic crisis of all time.": "Теперь мир медленно рушится в разгар величайшего экономического кризиса в истории.",
    "This Source-File makes it so that company favor increases BOTH the player's salary and reputation gain rate at that company by 1% per favor (rather than just the reputation gain).": "Этот исходный файл даёт за каждую единицу благосклонности компании прибавку 1% и к зарплате, и к скорости получения репутации (а не только к репутации).",
    "To iterate is human; to recurse, divine.": "Итерировать — по-человечески; рекурсировать — по-божественному.",
    "Every time this BitNode is destroyed, it becomes slightly harder.": "Каждый раз после уничтожения этот BitNode становится немного сложнее.",
    "There is no maximum level for Source-File 12.": "У исходного файла 12 нет максимального уровня.",
    "This Source-File lets you start any BitNodes with Neuroflux Governor equal to the level of this Source-File.": "Этот исходный файл позволяет начинать любой BitNode с числом NeuroFlux Governor, равным его уровню.",
    "With the invention of augmentations in the 2040s, a religious group known as the": "После изобретения аугментаций в 2040-х годах религиозная группа, известная как",
    "has rallied far more support than anyone would have hoped.": "получила гораздо больше поддержки, чем кто-либо мог ожидать.",
    "Their leader, Allison \"Mother\" Stanek is said to have created her own augmentation whose power goes beyond any other.": "Говорят, их лидер Эллисон «Мать» Стэнек создала собственную аугментацию, чья сила превосходит все остальные.",
    "Find her in": "Найдите её в",
    "and gain her trust.": "и завоюйте её доверие.",
    "This Source-File lets the": "Этот исходный файл позволяет",
    "appear in other BitNodes.": "появляться в других BitNode.",
    "Each level of this Source-File increases the size of Stanek's Gift.": "Каждый уровень этого исходного файла увеличивает размер Дара Стэнека.",
    "Territory exists only in the 'net": "Территория существует лишь в сети",
    "You will be opposed by the other factions, but you can overcome them with careful choices.": "Другие фракции будут вам противостоять, но их можно одолеть обдуманными решениями.",
    "Prevent their attempts to destroy your networks by controlling the open space in the 'net!": "Не дайте им уничтожить ваши сети, контролируя открытое пространство в сети!",
    "Delving into the uncharted and secretive parts of the internet comes with the promise of freedom from oppressive authority and surveillance.": "Погружение в неизведанные и тайные уголки интернета сулит свободу от гнёта власти и надзора.",
    "Leaving stability behind and turning to the dark web comes with risks... but also rewards.": "Отказ от стабильности и переход в даркнет сопряжены с рисками... но и с наградами.",
    "Unlike the traditional network of servers, the \"dark\" net is a constantly shifting, complex, unreliable place where servers can move or disappear at any moment.": "В отличие от обычной сети серверов, «тёмная» сеть постоянно меняется: это сложное и ненадёжное место, где серверы могут в любой момент переместиться или исчезнуть.",
    "Long-distance communication is often impossible, requiring scripts to be self-sufficient and durable, and spread themselves to stay alive.": "Дальняя связь часто невозможна, поэтому скрипты должны быть автономными, надёжными и распространяться, чтобы выжить.",
    "If you can take advantage of the darknet servers' weak passwords and leaky logs, you will be able to gain access to the deepest parts of the darknet and its secrets.": "Если воспользоваться слабыми паролями и протекающими журналами серверов даркнета, можно получить доступ к его глубочайшим тайнам.",
    "In this BitNode, the Daedalus faction has not yet found and monopolized the fabled Red Pill augmentation.": "В этом BitNode фракция Daedalus ещё не нашла и не монополизировала легендарную аугментацию Red Pill.",
    "Legends say it can be found somewhere, out there in the dark...": "Легенды говорят, что её можно найти где-то там, во тьме...",

    // Stanek's Gift UI and fragment effects. API names and keyboard shortcuts stay unchanged.
    "Stanek's Gift is a powerful, unique augmentation obtained by joining the Church of the Machine God, which can be found in Chongqing.":
      "Дар Стэнека — мощная уникальная аугментация, которую получают, вступив в Церковь Бога-машины в Чунцине.",
    "It is only possible to join the church if you are in BitNode 13 or possess at least one level of Source File 13, and you will be turned away if you have purchased or installed any augmentations beside NeuroFlux Governors.":
      "Вступить в церковь можно только в BitNode 13 или имея хотя бы один уровень исходного файла 13; вас не примут, если вы покупали или устанавливали аугментации, кроме NeuroFlux Governors.",
    "You are, however, permitted to install augmentations as normal once you have joined the church.": "После вступления в церковь аугментации можно устанавливать как обычно.",
    "Initially, those bearing the gift will find that its overwhelming power worsens all of their stats by 10%.": "Сначала носитель дара обнаружит, что его подавляющая сила снижает все характеристики на 10%.",
    "This penalty can be overcome in time by receiving free upgrades from the Church of the Machine God faction, but the reputation requirements for these upgrades are steep, and you can only obtain reputation with the church by charging the gift.":
      "Со временем этот штраф можно преодолеть, получая бесплатные улучшения у фракции Церкви Бога-машины. Однако требования к репутации высоки, а получать репутацию в церкви можно только заряжая дар.",
    "In order to charge Stanek's Gift, the user must first arrange stat-modifying fragments within the grid located on the device.": "Чтобы зарядить Дар Стэнека, сначала разместите изменяющие характеристики фрагменты на сетке устройства.",
    "This may be done manually or by scripts that utilize the Stanek's Gift Netscript API.": "Это можно сделать вручную или скриптами, использующими Netscript API Дара Стэнека.",
    "Not every tile of the grid must house a fragment, but fragments cannot overlap or otherwise share tiles.": "Фрагменты не обязаны занимать каждую клетку, но не могут перекрываться или совместно занимать клетки.",
    "Fragments can be rotated, but their design does not allow them to be flipped around to mirror their original shape.": "Фрагменты можно вращать, но нельзя отражать зеркально.",
    "Note that the size of the grid is determined by the BitNode you are currently in and the level of your Source File 13, if applicable.": "Размер сетки зависит от текущего BitNode и, если применимо, уровня исходного файла 13.",
    "There exist two kinds of fragments.": "Существует два вида фрагментов.",
    "The first are Stat Fragments, which take up 4 tiles of the grid.": "Первые — фрагменты характеристик, занимающие 4 клетки сетки.",
    "Each Stat Fragment is unique, and there is only one of each.": "Каждый фрагмент характеристик уникален и существует в единственном экземпляре.",
    "There is no way to obtain more of these fragments.": "Получить дополнительные такие фрагменты нельзя.",
    "Each Stat Fragment has an associated stat that it will improve, as well as a multiplier on its effectiveness known as power.": "Каждый фрагмент характеристик улучшает определённую характеристику и имеет множитель эффективности, называемый силой.",
    "When initially placed, a Stat Fragment will have no effect.": "Сразу после размещения фрагмент характеристик не даёт эффекта.",
    "In order for the fragment to gain stat boosts, it must be charged.": "Чтобы фрагмент начал усиливать характеристики, его нужно зарядить.",
    "The other kind of fragments are known as Booster Fragments, which take up 5 tiles of the grid.": "Другой вид — фрагменты-усилители, занимающие 5 клеток сетки.",
    "There is no shortage of Booster Fragments, and it is virtually impossible to run out of them.": "Фрагментов-усилителей достаточно, и закончиться они практически не могут.",
    "While not providing any direct stat increases to their user, Booster Fragments increase the efficacy of adjacent Stat Fragments by 10%, and do not need to be charged.": "Фрагменты-усилители не повышают характеристики напрямую, но увеличивают эффективность соседних фрагментов характеристик на 10% и не требуют зарядки.",
    "Multiple Booster Fragments can affect the same Stat Fragment.": "Несколько фрагментов-усилителей могут влиять на один фрагмент характеристик.",
    "This Booster Fragment provides a bonus to the adjacent Stat Fragment.": "Этот фрагмент-усилитель даёт бонус соседнему фрагменту характеристик.",
    "Even though the Booster Fragment touches the Stat Fragment in multiple places, the bonus is only applied once.": "Хотя фрагмент-усилитель касается фрагмента характеристик в нескольких местах, бонус применяется только один раз.",
    "This Booster Fragment does nothing, as it is not touching a Stat Fragment.": "Этот фрагмент-усилитель ничего не делает, поскольку не касается фрагмента характеристик.",
    "This Booster Fragment provides a bonus to both Stat Fragments it's touching.": "Этот фрагмент-усилитель даёт бонус обоим фрагментам характеристик, которых касается.",
    "Stat Fragments are charged using the stanek.chargeFragment(rootX, rootY) NetScript API function.": "Фрагменты характеристик заряжаются функцией NetScript API stanek.chargeFragment(rootX, rootY).",
    "The charging process ordinarily takes 1000ms to complete, but only takes 200ms during bonus time.": "Обычно зарядка занимает 1000 мс, а во время бонусного времени — всего 200 мс.",
    "When the function finishes executing, the fragment's charge levels will be raised by an amount corresponding to the number of threads that were used.": "После выполнения функции уровень заряда фрагмента повышается пропорционально числу использованных потоков.",
    "As a Stat Fragment's charge level is increased, its bonuses will increase, but there will be diminishing returns.": "С ростом заряда фрагмента характеристик растут и его бонусы, но с убывающей отдачей.",
    "As such, it is generally most efficient to charge all of the placed fragments equally.": "Поэтому обычно выгоднее заряжать все размещённые фрагменты равномерно.",
    "The charge level of a fragment will not decrease over time, but it will be reset to 0 upon removing it from the board or installing augmentations.":
      "Уровень заряда не уменьшается со временем, но сбрасывается до 0 при удалении фрагмента с доски или установке аугментаций.",
    "The gift is a grid on which you can place upgrades called fragments. The main type of fragment increases a stat,": "Дар — это сетка, на которой можно размещать улучшения, называемые фрагментами. Основной тип фрагментов повышает характеристику,",
    "like your hacking skill or agility exp. Once a stat fragment is placed it then needs to be charged via scripts": "например навык взлома или опыт проворства. После размещения фрагмент характеристик нужно зарядить скриптами,",
    "in order to become useful. The other kind of fragments are called booster fragments. They increase the efficiency of the neighboring fragments (not diagonally). Use Q/E to rotate fragments.":
      "чтобы он начал работать. Другой вид — фрагменты-усилители: они повышают эффективность соседних фрагментов (но не по диагонали). Для вращения используйте Q/E.",
    "Summary of active fragments:": "Сводка активных фрагментов:",
    Coordinate: "Координаты",
    Effect: "Эффект",
    "Clear grid": "Очистить сетку",
    "WARNING : This will remove all active fragment from the grid.": "ВНИМАНИЕ: это удалит все активные фрагменты с сетки.",
    "All cumulated charges will be lost.": "Все накопленные заряды будут потеряны.",
    "Base Power:": "Базовая сила:",
    "root [X, Y]": "корень [X, Y]",
    "power:": "сила:",
    "remaining": "осталось",
    "1.1x adjacent fragment power": "1,1× сила соседнего фрагмента",
    "None": "Нет",
    "Delete": "Удалить",
    "N/A": "н/д",
    "+x% faster hack(), grow(), and weaken()": "+x% к скорости hack(), grow() и weaken()",
    "+x% hack() power": "+x% к мощности hack()",
    "+x% grow() power": "+x% к мощности grow()",
    "+x% hacking experience and skill level": "+x% к опыту и уровню взлома",
    "+x% strength experience and skill level": "+x% к опыту и уровню силы",
    "+x% defense experience and skill level": "+x% к опыту и уровню защиты",
    "+x% dexterity experience and skill level": "+x% к опыту и уровню ловкости",
    "+x% agility experience and skill level": "+x% к опыту и уровню проворства",
    "+x% charisma experience and skill level": "+x% к опыту и уровню обаяния",
    "+x% hacknet production": "+x% к производству Hacknet",
    "-x% cheaper hacknet costs": "-x% к стоимости Hacknet",
    "+x% reputation from factions and companies": "+x% к репутации во фракциях и компаниях",
    "+x% work money": "+x% к деньгам за работу",
    "+x% crime money and success chance": "+x% к доходу и шансу успеха преступлений",
    "+x% bladeburner stats (max stamina, stamina gain, Field Analysis effectiveness, action success chance)":
      "+x% к характеристикам Bladeburner (макс. выносливость, прирост выносливости, эффективность анализа поля, шанс успеха действия)",

    // Gang equipment names.
    "Baseball Bat": "Бейсбольная бита",
    Katana: "Катана",
    "Bulletproof Vest": "Пуленепробиваемый жилет",
    "Full Body Armor": "Полный комплект брони",
    "Liquid Body Armor": "Жидкая броня",
    "Graphene Plating Armor": "Графеновая броня",
    "Bionic Arms": "Бионические руки",
    "Bionic Legs": "Бионические ноги",
    "Bionic Spine": "Бионический позвоночник",
    BrachiBlades: "Брахиоклинки",
    "Nanofiber Weave": "Нановолоконное плетение",
    "Synthetic Heart": "Синтетическое сердце",
    "Synfibril Muscle": "Синфибриловая мышца",
    Neuralstimulator: "Нейростимулятор",
    "Graphene Bone Lacings": "Графеновые костные накладки",

    // Trimmed text-node variants used by React around dynamic values.
    Infiltration: "Проникновение",
    Infiltrating: "Проникновение в",
    Lose: "Теряйте",
    "HP for each failure": "ОЗ за каждую ошибку",
    "Maximum clearance level:": "Максимальный уровень допуска:",
    "Reward:": "Награда:",
    "SoA reputation:": "Репутация в Тени Анархии:",
    "Market demand:": "Рыночный спрос:",
    "Difficulty:": "Сложность:",
    "Targets:": "Цели:",
    "Prerequisites:": "Требования:",
    "Time to Graft:": "Время вживления:",
    "Entropy strength:": "Сила вируса энтропии:",
    "All multipliers decreased by:": "Все множители уменьшены на:",
    "Sort by Cost": "Сортировать по стоимости",
    "Sort by Default Order": "Сортировать по умолчанию",
    "Graft Augmentation (": "Вживить аугментацию (",
    "You find yourself in a secret laboratory, owned by a mysterious researcher.": "Вы оказались в секретной лаборатории таинственного исследователя.",
    "The scientist explains that they've been studying augmentation grafting, the process of applying augmentations without requiring a body reset.":
      "Учёный объясняет, что изучает вживление аугментаций — способ устанавливать аугментации без сброса тела.",
    "Through legally questionable connections, the scientist has access to a vast array of augmentation blueprints, even private designs.": "Благодаря сомнительным с точки зрения закона связям учёному доступны многочисленные чертежи аугментаций, включая закрытые разработки.",
    "They offer to build and graft the augmentations to you, in exchange for both a hefty sum of money, and being a lab rat.": "Он предлагает создать и вживить аугментации в обмен на крупную сумму денег и согласие стать лабораторной крысой.",
    "Some augmentations have prerequisites. You normally must install the prerequisites before being able to buy and install those augmentations.": "У некоторых аугментаций есть требования. Обычно сначала нужно установить требуемые аугментации, а уже потом покупать и устанавливать остальные.",
    "With grafting, you only need to buy (\"queue\") those prerequisites. You can also graft the prerequisites.": "При вживлении требования достаточно купить («поставить в очередь»). Требуемые аугментации также можно вживить.",
    "Cancelling grafting will": "Отмена вживления",
    "save grafting progress, and the money you spend will": "сохранит прогресс вживления, а потраченные деньги",
    "be returned.": "не вернутся.",
    "Additionally, grafting an augmentation will increase the potency of the Entropy virus.": "Кроме того, вживление аугментации увеличивает силу вируса энтропии.",
    "When installed on an unconscious individual, augmentations are scanned by the body on awakening, eliminating hidden malware.": "Когда аугментации устанавливают бессознательному человеку, тело сканирует их при пробуждении и удаляет скрытое вредоносное ПО.",
    "However, grafted augmentations do not provide this security measure.": "Однако вживлённые аугментации не обеспечивают такой защиты.",
    "Individuals who tested augmentation grafting have reported symptoms of an unknown virus, which they've dubbed \"Entropy\".": "Испытатели вживления сообщили о симптомах неизвестного вируса, который назвали «Энтропией».",
    "This virus seems to grow more potent with each grafted augmentation ...": "Похоже, этот вирус становится сильнее с каждой вживлённой аугментацией...",

    "Note:": "Примечание:",
    "IPvGO Subnet Search": "Поиск подсети IPvGO",
    "New Total Bonus:": "Новый общий бонус:",
    "Komi:": "Коми:",
    "Difficulty:&nbsp;": "Сложность:&nbsp;",
    "You": "Вы",
    "have gained": "получили",
    "rep for": "репутации в",
    "be returned.": "вернутся.",

    // Augmentation and active-script page details.
    "Bitburner blood donation community program": "Программа донорства крови сообщества Bitburner",
    "The blood donation program is a continuous real life event started on 2022-04-01.": "Программа донорства крови — постоянное мероприятие в реальной жизни, начавшееся 01.04.2022.",
    "To participate, simply go donate blood, plasma, or platelets to a local organization and take a picture as proof (hide your personal information).": "Чтобы участвовать, сдайте кровь, плазму или тромбоциты в местной организации и сделайте фото в подтверждение (скройте личные данные).",
    "Then, send the proof to hydroflame on reddit or discord.": "Затем отправьте подтверждение hydroflame на Reddit или Discord.",
    "Currently accumulated ": "Сейчас накоплено ",
    "The power of ": "Сила ",
    "increases with blood donations from players in real life.": "увеличивается благодаря донорству крови игроков в реальной жизни.",
    "Learn more": "Подробнее",
    "here": "здесь",
    "Purchased Augmentations": "Купленные аугментации",
    "- Stats/Skill levels and Experience": "— Уровни характеристик и навыков, а также опыт",
    "- Money": "— Деньги",
    "- Scripts on every computer but your home computer": "— Скрипты на всех компьютерах, кроме домашнего",
    "- Cloud servers": "— Облачные серверы",
    "- Hacknet": "— Hacknet",
    "- Faction/Company reputation": "— Репутацию во фракциях и компаниях",
    "- Stocks": "— Акции",
    "Below is a list of all Augmentations you have purchased but not yet installed. Click the button below to install them.": "Ниже перечислены все купленные, но ещё не установленные аугментации. Нажмите кнопку ниже, чтобы установить их.",
    "WARNING: Installing your Augmentations resets most of your progress, including:": "ВНИМАНИЕ: установка аугментаций сбрасывает большую часть прогресса, включая:",
    "Installing Augmentations lets you start over with the perks and benefits granted by all of the Augmentations you have ever installed.": "Установка аугментаций позволяет начать заново с преимуществами всех аугментаций, которые вы когда-либо устанавливали.",
    "Also, you will keep any scripts and RAM/Core upgrades on your home computer": "При этом на домашнем компьютере сохранятся скрипты и улучшения ОЗУ/ядер",
    "Installing will reset": "Установка сбросит",
    "- money": "— деньги",
    "- skill / experience": "— навыки / опыт",
    "- every server except home": "— все серверы, кроме home",
    "- factions and reputation": "— фракции и репутацию",
    "- current work activity": "— текущую работу",
    "You will keep:": "Сохранится:",
    "- All scripts on home": "— все скрипты на home",
    "- home ram and cores": "— ОЗУ и ядра home",
    "It is recommended to install several Augmentations at once.": "Рекомендуется устанавливать несколько аугментаций одновременно.",
    "'I never asked for this'": "«Я не просил об этом»",
    "It's always a good idea to backup/export your save!": "Всегда полезно создать резервную копию или экспортировать сохранение!",
    "Backup Save": "Сохранить резервную копию",
    "Pre-requisites Owned": "Требования выполнены",
    "Missing ": "Не хватает ",
    " pre-requisite(s)": " требований",
    "This Augmentation has the following pre-requisite(s):": "Для этой аугментации требуются:",
    "This Augmentation can only be acquired from the following source(s):": "Эту аугментацию можно получить только из следующих источников:",
    "Certain gangs": "Некоторые банды",
    "Would you like to purchase the ": "Хотите купить аугментацию ",
    " Augmentation for": " за",

    // Active Scripts labels; script names, arguments, and log contents remain untouched.
    "This page displays a list of all of your scripts that are currently running across every machine. It also provides information about each script's production. The scripts are categorized by the hostname of the servers on which they are running.": "На этой странице перечислены все скрипты, запущенные на компьютерах. Здесь также показана производительность каждого скрипта. Скрипты сгруппированы по именам хостов серверов, на которых они работают.",
    "Servers/page:": "Серверов/стр.:",
    "Scripts/page:": "Скриптов/стр.:",
    "Active": "Активные",
    "Recently Killed": "Недавно остановленные",
    "Recent Errors": "Последние ошибки",
    "Suppress error modals (5 min)": "Подавлять окна ошибок (5 мин.)",
    "If this is set, no error modals will be shown for the next five minutes, and only log errors to the Recent Errors page.": "Если включено, следующие пять минут окна ошибок показываться не будут — ошибки будут записываться только на странице «Последние ошибки».",
    "Kill All Scripts": "Остановить все скрипты",
    "died": "завершён",
    "ago": "назад",
    "Threads:": "Потоки:",
    "Args:": "Аргументы:",
    "Online Time:": "Время онлайн:",
    "Offline Time:": "Время офлайн:",
    "Total online production:": "Общее производство онлайн:",
    "Online production rate:": "Скорость производства онлайн:",
    "Total offline production:": "Общее производство офлайн:",
    "hacking exp": "опыта взлома",
    "hacking exp / sec": "опыта взлома / сек",
    "each": "каждый",
    LOG: "ЖУРНАЛ",

    // Infiltration introduction, stages, and reward screen.
    "Cancel Infiltration": "Отменить проникновение",
    "Level ": "Уровень ",
    "Infiltrating ": "Проникновение в ",
    "Lose ": "Теряйте ",
    " HP for each failure": " ОЗ за каждую ошибку",
    "Maximum clearance level: ": "Максимальный уровень допуска: ",
    "Reward: ": "Награда: ",
    "SoA reputation: ": "Репутация в Тени Анархии: ",
    "Market demand: ": "Рыночный спрос: ",
    "Difficulty: ": "Сложность: ",
    "Trivial": "Пустяковая",
    Normal: "Обычная",
    Hard: "Сложная",
    Brutal: "Жестокая",
    Impossible: "Невозможная",
    "This location is too secure for your current abilities. You cannot infiltrate it.":
      "Это место слишком хорошо защищено для ваших текущих способностей. Вы не можете выполнить проникновение.",
    "This location is too heavily guarded for your current stats. You should train more or find an easier location.":
      "Это место слишком хорошо охраняется для ваших текущих характеристик. Вам стоит потренироваться или найти более лёгкую цель.",
    "Infiltration is a series of short minigames that get progressively harder. You take damage for failing them. Reaching the maximum level rewards you with intel that you can trade for money or reputation.":
      "Проникновение — это серия коротких мини-игр, которые постепенно усложняются. За ошибки вы получаете урон. Достижение максимального уровня награждает вас разведданными, которые можно обменять на деньги или репутацию.",
    "The minigames you play are randomly selected.": "Мини-игры выбираются случайным образом.",
    "It might take you a few tries to get used to them.": "Чтобы привыкнуть к ним, может потребоваться несколько попыток.",
    "No game requires use of the mouse.": "Ни одна игра не требует мыши.",
    "Spacebar": "Пробел",
    "is the default action/confirm button.": " — основная клавиша действия или подтверждения.",
    "arrow keys": "клавиши со стрелками",
    "and": "и",
    "can be used interchangeably.": "можно использовать взаимозаменяемо.",
    "Sometimes the rest of the keyboard is used.": "Иногда используются и другие клавиши.",
    "Infiltration successful!": "Проникновение успешно!",
    "You ": "Вы ",
    "have gained ": "получили ",
    " rep for ": " репутации в ",    "can trade the confidential information you found for money or reputation.": "можете обменять найденную конфиденциальную информацию на деньги или репутацию.",
    "Trade for": "Обменять на",
    "reputation": "репутацию",
    "Sell for": "Продать за",
    "Quit": "Выйти",
    "Type it": "Введите это",
    " backward": " в обратном порядке",
    "Cut the wires with the following properties! (keyboard 1 to 9)": "Перережьте провода со следующими свойствами! (клавиши 1–9)",
    "Remember all the mines!": "Запомните все мины!",
    "Mark all the mines!": "Отметьте все мины!",
    "Attack after the sentinel drops his guard and is distracted.": "Атакуйте после того, как часовой ослабит бдительность и отвлечётся.",
    "Do not alert him!": "Не тревожьте его!",
    "Guarding ...": "Охрана...",
    "Distracted!": "Отвлечён!",
    "Alerted!": "Тревога!",
    "The sentinel will drop his guard and be distracted in ...": "Часовой ослабит бдительность и отвлечётся через...",
    "Enter the Code!": "Введите код!",
    "Close the brackets": "Закройте скобки",
    "Say something nice about the guard": "Скажите охраннику что-нибудь приятное",
    "Match the symbols!": "Сопоставьте символы!",

    // Arcade and casino mini-games. Game symbols, card values, numbers, and wager amounts are preserved.
    Arcade: "Аркада",
    "Megabyte burner 2000": "Мегабайтный выжигатель 2000",
    "This machine is broken.": "Этот автомат сломан.",
    "Play blackjack (": "Играть в блэкджек (",
    "Stop playing": "Прекратить игру",
    "Wager (Max: ": "Ставка (макс.: ",
    "Not a valid number": "Недопустимое число",
    "Must bet a positive amount": "Ставка должна быть положительной",
    "Total earnings this session: ": "Итог за эту сессию: ",
    Start: "Начать",
    Hit: "Взять карту",
    Stay: "Оставить",
    Player: "Игрок",
    "Count: ": "Счёт: ",
    Dealer: "Дилер",
    "You won!": "Вы выиграли!",
    "You Won! Blackjack!": "Вы выиграли! Блэкджек!",
    "You lost!": "Вы проиграли!",
    "Push! (Tie)": "Ничья! (равный счёт)",
    Result: "Результат",
    "Result:": "Результат:",
    Head: "Орёл",
    "Head!": "Орёл!",
    Tail: "Решка",
    "Tail!": "Решка!",
    "win!": "выигрыш!",
    "lose!": "проигрыш!",
    waiting: "ожидание",
    playing: "игра идёт",
    won: "выигрыш",
    lost: "проигрыш",
    "1 to 12": "от 1 до 12",
    "13 to 24": "от 13 до 24",
    "25 to 36": "от 25 до 36",
    Red: "Красное",
    Black: "Чёрное",
    Odd: "Нечётное",
    Even: "Чётное",
    High: "Большое",
    Low: "Малое",
    "Spin!": "Крутить!",
    gained: "получено",
    "Pay lines": "Линии выплат",

    // Corporation overview, shares, and finance dialogs
    "Buying back shares will cause the stock price to rise due to market forces.":
      "Выкуп акций приведёт к росту их цены из-за рыночных сил.",
    "These shares must be bought at a 10% premium over the market price.":
      "Эти акции нужно покупать с надбавкой 10% к рыночной цене.",
    "You purchase these shares with your own money (NOT your Corporation's funds).":
      "Вы покупаете эти акции за собственные деньги (НЕ из средств корпорации).",
    "Enter the number of outstanding shares you would like to buy back.":
      "Введите количество выпущенных акций, которое хотите выкупить.",
    "Shares to buyback": "Акций для выкупа",
    "Buy shares": "Купить акции",
    "You bought ": "Вы купили ",
    " shares for ": " акций за ",
    "'s stock price rose to": " — цена акций выросла до",
    "currently has": "сейчас имеет",
    "outstanding stock shares, valued at": "выпущенных акций стоимостью",
    "stock price will settle at": "цена акций установится на уровне",
    "You can issue new equity shares (i.e. stocks) in order to raise capital.":
      "Вы можете выпустить новые акции, чтобы привлечь капитал.",
    "Issuing new shares will cause dilution, lowering stock price and reducing dividends per share.":
      "Выпуск новых акций размоет долю владельцев, снизит цену акций и уменьшит дивиденды на акцию.",
    "New shares are sold between the current price and the updated price.":
      "Новые акции продаются по цене между текущей и обновлённой.",
    "The money from issuing new shares will be deposited directly into your Corporation's funds.":
      "Деньги от выпуска новых акций поступят непосредственно в средства корпорации.",
    "Private shareholders have first priority for buying new shares, up to half of their existing stake in the company":
      "Частные акционеры имеют приоритет при покупке новых акций — до половины их текущей доли в компании",
    "If they choose to exercise this option, these newly issued shares become private, restricted shares, which means you cannot buy them back.":
      "Если они воспользуются этой возможностью, новые акции станут частными ограниченными акциями, а значит, вы не сможете выкупить их обратно.",
    "You will not be able to issue new shares again for": "Вы не сможете снова выпускать акции в течение",
    "You can issue at most": "Вы можете выпустить не более",
    "new shares.": "новых акций.",
    "The number of new shares issued must be a multiple of 10 million.":
      "Количество выпускаемых акций должно быть кратно 10 миллионам.",
    "Issued ": "Выпущено ",
    " new shares and raised ": " новых акций; привлечено ",
    " of these shares were bought by private investors.": " из них куплены частными инвесторами.",
    "'s stock price fell to": " — цена акций упала до",
    "Private investors may buy up to": "Частные инвесторы могут купить до",
    "of these shares and keep them off the market.": " из этих акций и не выставлять их на рынок.",
    "Issue New Shares": "Выпустить новые акции",
    "# New Shares": "# новых акций",
    "Enter the number of shares you would like to issue for your IPO.":
      "Введите количество акций, которое хотите выпустить в рамках IPO.",
    "These shares will be publicly sold and you will no longer own them.":
      "Эти акции будут проданы публично, и вы больше не будете ими владеть.",
    "The IPO money will be deposited directly into your Corporation's funds.":
      "Деньги от IPO поступят непосредственно в средства корпорации.",
    "You can issue some, but not all, of your": "Вы можете выпустить часть, но не все свои",
    "Shares to issue": "Акций для выпуска",
    "Go Public": "Выйти на биржу",
    "went public and earned": "вышла на биржу и получила",
    "in its IPO.": "в ходе IPO.",
    "Selling shares will cause stock price to fall due to market forces.":
      "Продажа акций приведёт к падению их цены из-за рыночных сил.",
    "The money from selling your shares will go directly to you (NOT your Corporation).":
      "Деньги от продажи ваших акций поступят непосредственно вам (НЕ корпорации).",
    "You will not be able to sell shares again for": "Вы не сможете снова продавать акции в течение",
    "Enter the number of shares you would like to sell.": "Введите количество акций, которое хотите продать.",
    "Shares to sell": "Акций для продажи",
    "Sell shares": "Продать акции",
    "You currently have": "Сейчас у вас",
    "shares of": "акций",
    "stock, valued at": "стоимостью",
    "You will receive": "Вы получите",
    "An investment firm has offered to buy": "Инвестиционная фирма предложила купить",
    "shares of stock (a": "акций (доля",
    "stake in the company).": "в компании).",
    "Your equity will fall to": "Ваша доля уменьшится до",
    "You accepted the investment offer.": "Вы приняли инвестиционное предложение.",
    "received": "получила",
    "will receive": "получит",
    "Hint": "Подсказка",
    "Investment firms will offer more money if your Corporation is turning a profit.":
      "Инвестиционные фирмы предложат больше денег, если ваша корпорация приносит прибыль.",
    "Do you accept this offer?": "Принять это предложение?",
    "Accept": "Принять",
    Ignore: "Игнорировать",
    "Dividends are a distribution of a portion of the corporation's profits to the shareholders. This includes yourself, as well.":
      "Дивиденды — это распределение части прибыли корпорации между акционерами, включая вас.",
    "Note that issuing dividends will negatively affect": "Учтите, что выплата дивидендов негативно повлияет на",
    "'s stock price.": " — цену акций.",
    "In order to issue dividends, simply allocate some percentage of your Corporation's profits to dividends. This percentage must be an integer between 0 and 100. (A percentage of 0 means no dividends will be issued.)":
      "Чтобы выплачивать дивиденды, просто выделите на них некоторый процент прибыли корпорации. Процент должен быть целым числом от 0 до 100. (Нулевой процент означает, что дивиденды выплачиваться не будут.)",
    "Example:": "Пример:",
    "Assume your corporation makes": "Предположим, ваша корпорация получает",
    "in profit and you allocate 40% of that": "прибыли и вы направляете 40% этой суммы",
    "towards dividends. That means your corporation will gain": "на дивиденды. Тогда корпорация получит",
    "in funds and the remaining": "средств, а оставшиеся",
    "will be paid as dividends. Since your corporation starts with 1 billion shares, every shareholder will be paid":
      "будут выплачены как дивиденды. Поскольку в начале у корпорации один миллиард акций, каждый акционер получит",
    "per share per second before tribute.": "на акцию в секунду до уплаты дани.",
    "Dividend %": "Дивиденды, %",
    "Allocate Dividend Percentage": "Выделить процент на дивиденды",
    "Getting Started Guide": "Руководство для начинающих",
    "The Complete Handbook for Creating a Successful Corporation":
      "Полное руководство по созданию успешной корпорации",
    "Find Investors": "Найти инвесторов",
    "Go public": "Выйти на биржу",
    "Buyback shares": "Выкупить акции",
    "Issue Dividends": "Выплатить дивиденды",
    "All unlocks are owned.": "Все разблокировки приобретены.",
    "Upgrades are unlocked once you create an industry.": "Улучшения открываются после создания отрасли.",
    "Search for private investors who will give you startup funding in exchange for equity (stock shares) in your company":
      "Искать частных инвесторов, которые предоставят стартовое финансирование в обмен на долю (акции) вашей компании",
    "Max funding rounds already reached": "Достигнуто максимальное число раундов финансирования",
    "Become a publicly traded and owned entity. Going public involves issuing shares for an IPO. Once you are a public company, your shares will be traded on the stock market.":
      "Превратить компанию в публичное акционерное общество. Выход на биржу включает выпуск акций в рамках IPO. После этого ваши акции будут торговаться на фондовом рынке.",
    "Sell your shares in the company. The money earned from selling your shares goes into your personal account, not the Corporation's. This is one of the only ways to profit from your business venture.":
      "Продать свои акции компании. Деньги от продажи поступят на ваш личный счёт, а не в корпорацию. Это один из немногих способов заработать на своём бизнесе.",
    "Buy back outstanding shares that you previously issued or sold on the market":
      "Выкупить выпущенные акции, которые вы ранее выпустили или продали на рынке",
    "No shares available to buy back": "Нет акций, доступных для выкупа",
    "Issue new equity shares to raise capital": "Выпустить новые акции для привлечения капитала",
    "Manage the dividends that are paid out to shareholders (including yourself)":
      "Управлять дивидендами, выплачиваемыми акционерам (включая вас)",

    // Stock market information and order widgets
    "Welcome to the World Stock Exchange (WSE)!": "Всемирная фондовая биржа (WSE)!",
    "If you want to trade via Stock Market dashboard (UI), you must purchase a WSE account.":
      "Чтобы торговать через панель фондового рынка (интерфейс), нужно приобрести аккаунт WSE.",
    "Buy WSE Account -": "Купить аккаунт WSE —",
    "Let you trade stock via UI": "Позволяет торговать акциями через интерфейс",
    "Requires WSE Account": "Требуется аккаунт WSE",
    "Trade Information eXchange (TIX) API": "API Trade Information eXchange (TIX)",
    "Let you trade stock via NS APIs": "Позволяет торговать акциями через API NS",
    "If you want to trade via NS APIs, you must purchase TIX API access.":
      "Чтобы торговать через API NS, нужно приобрести доступ к API TIX.",
    "Buy Trade Information eXchange (TIX) API Access -": "Купить доступ к API Trade Information eXchange (TIX) —",
    "TIX, short for Trade Information eXchange, is the communications protocol used by the WSE. Purchasing access to the TIX API lets you write code to create your own algorithmic/automated trading strategies.":
      "TIX (Trade Information eXchange) — протокол связи, используемый WSE. Доступ к API TIX позволяет писать код для собственных алгоритмических и автоматических торговых стратегий.",
    "4S Market Data UI Access": "Доступ к данным рынка 4S через интерфейс",
    "4S Market Data TIX API Access": "Доступ к API данных рынка 4S",
    "Buy 4S Market Data Access -": "Купить доступ к данным рынка 4S —",
    "Buy 4S Market Data TIX API Access -": "Купить доступ к API данных рынка 4S —",
    "Lets you view additional pricing and volatility information about stocks":
      "Позволяет просматривать дополнительные сведения о ценах и волатильности акций",
    "Let you access 4S Market Data through Netscript": "Позволяет получать данные рынка 4S через Netscript",
    "4S Market Data is disabled in advanced BitNode options": "Данные рынка 4S отключены в расширенных настройках BitNode",
    "Commission Fees: Every transaction you make has a": "Комиссия: каждая ваша операция облагается комиссией",
    "commission fee.": "",
    "Commission Fees: Every transaction you make has a": "Комиссия: каждая ваша операция включает комиссию в размере",
    "WSE Account": "Аккаунт WSE",
    "Market Data Feed": "канал данных рынка",
    "'s (4S) Market Data Feed provides information about stocks that will help your trading strategies.":
      " — канал данных рынка 4S предоставляет сведения об акциях, которые помогут вашим торговым стратегиям.",
    "WARNING: When you reset after installing Augmentations, the Stock Market is reset. You will retain your WSE Account, access to the TIX API, and 4S Market Data access. However, all of your stock positions are lost, so make sure to sell your stocks before installing Augmentations!":
      "ВНИМАНИЕ: после сброса при установке аугментаций фондовый рынок сбрасывается. Вы сохраните аккаунт WSE, доступ к API TIX и доступ к данным рынка 4S. Однако все ваши позиции будут потеряны, поэтому продайте акции до установки аугментаций!",
    "Quantity (Shares)": "Количество (акции)",
    Purchasing: "Покупка",
    Selling: "Продажа",
    "shares (": "акций (",
    ") will cost": ") будет стоить",
    "will result in a gain": "принесёт прибыль",
    "You do not have this many shares in the Long position": "У вас нет такого количества акций в длинной позиции",
    "You do not have this many shares in the Short position": "У вас нет такого количества акций в короткой позиции",
    "Invalid input for quantity (number of shares):": "Недопустимое количество акций:",
    "ERROR: 'Buy Max' only works for Market Orders": "ОШИБКА: «Buy Max» работает только для рыночных ордеров",
    "ERROR: 'Sell All' only works for Market Orders": "ОШИБКА: «Sell All» работает только для рыночных ордеров",
    "Buy MAX": "Купить МАКС.",
    "Sell ALL": "Продать ВСЁ",
    "Shares in the long position will increase in value if the price of the corresponding stock increases":
      "Акции в длинной позиции вырастут в цене, если цена соответствующей акции увеличится",
    "Shares in the short position will increase in value if the price of the corresponding stock decreases":
      "Акции в короткой позиции вырастут в цене, если цена соответствующей акции уменьшится",
    "Long Position:": "Длинная позиция:",
    "Short Position:": "Короткая позиция:",
    "Average Price:": "Средняя цена:",
    "(Total Cost:": "(Общая стоимость:",
    "Profit:": "Прибыль:",
    "Max Shares:": "Макс. акций:",
    "Ask Price:": "Цена предложения на продажу:",
    "Bid Price:": "Цена предложения на покупку:",
    price: "цена",
    "Switch to 'All Stocks' Mode": "Переключить на режим «Все акции»",
    "Displays all stocks on the WSE": "Показывает все акции на WSE",
    "Switch to 'Portfolio' Mode": "Переключить на режим «Портфель»",
    "Displays only the stocks for which you have shares or orders":
      "Показывает только акции, которыми вы владеете или по которым у вас есть ордера",
    "Filter Stocks by symbol (comma-separated list)": "Фильтр акций по тикеру (список через запятую)",
    "Enter the price for your Limit Order": "Введите цену лимитного ордера",
    "Place Buy Limit Order": "Разместить лимитный ордер на покупку",
    "Enter the price for your Stop Order": "Введите цену стоп-ордера",
    "Place Buy Stop Order": "Разместить стоп-ордер на покупку",
    "Place Sell Limit Order": "Разместить лимитный ордер на продажу",
    "Place Sell Stop Order": "Разместить стоп-ордер на продажу",

    // Corporation divisions, warehouses, materials, and products
    "Create a new division to expand into a new industry:": "Создайте новое подразделение, чтобы выйти в новую отрасль:",
    "Division name:": "Название подразделения:",
    Expand: "Расширить",
    "Multiplier for this industry's sales due to its awareness and popularity.":
      "Множитель продаж отрасли, зависящий от её известности и популярности.",
    "Total:": "Итого:",
    "No items in storage.": "На складе ничего нет.",
    "Storage space:": "Место на складе:",
    "Upgrade Warehouse Size -": "Увеличить размер склада —",
    "This industry uses the following equation for its production:": "Эта отрасль использует следующую формулу производства:",
    "To get started with production, purchase your required materials or import them from another of your company's divisions.":
      "Чтобы начать производство, купите необходимые материалы или импортируйте их из другого подразделения вашей компании.",
    "Configure Smart Supply": "Настроить умные поставки",
    "Purchase Warehouse (": "Купить склад (",
    "Purchase your required materials to get production started!": "Купите необходимые материалы, чтобы начать производство!",
    "Market Price: The price you would pay if you were to buy this material on the market":
      "Рыночная цена: цена, которую вы заплатили бы за покупку этого материала на рынке",
    "The quality of your material. Higher quality will lead to more sales":
      "Качество вашего материала. Более высокое качество приведёт к большим продажам",
    Quality: "Качество",
    "Limit Material Production": "Ограничить производство материала",
    "Effective rating is calculated from product rating and the quality of materials used":
      "Итоговый рейтинг рассчитывается на основе рейтинга продукта и качества использованных материалов",
    "Effective rating:": "Итоговый рейтинг:",
    "An estimate of the material cost it takes to create this Product.":
      "Примерная стоимость материалов, необходимых для создания этого продукта.",
    "Est. Production Cost:": "Примерная себестоимость производства:",
    "An estimate of how much consumers are willing to pay for this product. Setting the sale price above this may result in less sales. Setting the sale price below this may result in more sales.":
      "Примерная сумма, которую потребители готовы заплатить за этот продукт. Цена выше неё может привести к снижению продаж, а цена ниже — к росту продаж.",
    "Est. Market Price:": "Примерная рыночная цена:",
    Designing: "Проектирование",
    "req. Operations/Engineers in": "требуются специалисты по операциям/инженеры в",
    complete: "завершено",
    Discontinue: "Снять с производства",
    "Production Multiplier:": "Множитель производства:",
    "Storage Multiplier:": "Множитель хранения:",
    "Advertising Multiplier:": "Множитель рекламы:",
    "Empl. Creativity Multiplier:": "Множитель креативности сотрудников:",
    "Empl. Charisma Multiplier:": "Множитель обаяния сотрудников:",
    "Empl. Intelligence Multiplier:": "Множитель интеллекта сотрудников:",
    "Empl. Efficiency Multiplier:": "Множитель эффективности сотрудников:",
    "Sales Multiplier:": "Множитель продаж:",
    "Scientific Research Multiplier:": "Множитель научных исследований:",
    "Total Funds:": "Всего средств:",
    "Total Assets:": "Всего активов:",
    "Total Revenue:": "Общая выручка:",
    "Total Expenses:": "Общие расходы:",
    "Total Profit:": "Общая прибыль:",
    "Publicly Traded:": "Публичная компания:",
    "Owned Stock Shares:": "Акции во владении:",
    "Outstanding Shares:": "Выпущенные акции:",
    "Private Shares:": "Частные акции:",
    "Stock Price:": "Цена акции:",
    "Total Stock Shares:": "Всего акций:",

    // Options, remote API, and sleeve detail panels
    "Autosave interval (s)": "Интервал автосохранения (с)",
    "The time (in seconds) between each autosave. Set to 0 to disable autosave.":
      "Время (в секундах) между автосохранениями. Установите 0, чтобы отключить автосохранение.",
    "Tail render interval (ms)": "Интервал обновления tail (мс)",
    "The minimum number of milliseconds between tail rerenders. Setting this too low can result in poor performance if you have many tail windows open.":
      "Минимальное число миллисекунд между обновлениями окон tail. Слишком малое значение может ухудшить производительность при большом числе открытых окон tail.",
    "Suppress Auto-Save Game Toast": "Отключить уведомление об автосохранении",
    "If this is set, there will be no \"Game Saved!\" toast appearing after an auto-save.":
      "Если включено, после автосохранения не будет появляться уведомление «Игра сохранена!».",
    "Suppress Auto-Save Disabled Warning": "Отключить предупреждение об автосохранении",
    "If this is set, there will be no warning triggered when auto-save is disabled (at 0).":
      "Если включено, предупреждение об отключённом автосохранении (при значении 0) показываться не будет.",
    "Save game on file save": "Сохранять игру при сохранении файла",
    "save game": "сохранить игру",
    "Save your game any time a file is saved in the script editor.":
      "Сохранять игру каждый раз при сохранении файла в редакторе скриптов.",
    "Exclude Running Scripts from Save": "Не включать работающие скрипты в сохранение",
    "If this is set, the save file will exclude all running scripts. This is only useful if your save is lagging a lot. You'll have to restart your script every time you launch the game, possibly by using the \"autoexec\" option.":
      "Если включено, файл сохранения не будет содержать работающие скрипты. Это полезно только при сильных задержках сохранения. После каждого запуска игры скрипты придётся запускать заново, например с помощью параметра «autoexec».",
    Locale: "Локаль",
    "Currency Symbol:": "Символ валюты:",
    "Move the currency symbol to be after the value": "Переместить символ валюты после значения",
    "If enabled, the currency symbol appears after the number (e.g., 100€ instead of €100)":
      "Если включено, символ валюты будет отображаться после числа (например, 100€ вместо €100)",
    "Remote API": "Удалённый API",
    "These settings control the Remote API for Bitburner. This is typically used to write scripts using an external text editor and then upload files to the home server.":
      "Эти настройки управляют удалённым API Bitburner. Обычно его используют для написания скриптов во внешнем редакторе и загрузки файлов на домашний сервер.",
    "This hostname is used to connect to a Remote API, please ensure that it matches with your Remote API hostname.":
      "Это имя хоста используется для подключения к удалённому API; убедитесь, что оно совпадает с именем хоста удалённого API.",
    "If you use IPv6, you need to wrap it in square brackets. For example:": "При использовании IPv6 заключите адрес в квадратные скобки. Например:",
    "This port number is used to connect to the Remote API. Please ensure that it matches with your Remote API server port.":
      "Этот номер порта используется для подключения к удалённому API. Убедитесь, что он совпадает с портом сервера удалённого API.",
    "The value must be in the range of [0, 65535]. Set it to 0 to disable the feature.":
      "Значение должно быть в диапазоне [0, 65535]. Установите 0, чтобы отключить функцию.",
    "Hostname:": "Имя хоста:",
    "Port:": "Порт:",
    "Status:": "Состояние:",
    Offline: "Офлайн",
    "Reconnection delay:": "Задержка переподключения:",
    Connect: "Подключить",
    "Delete Save": "Удалить сохранение",
    "Soft Reset": "Мягкий сброс",
    "Diagnose files": "Диагностировать файлы",
    "Description: The theme editor allows you to modify the colors the game uses.":
      "Описание: редактор тем позволяет изменять цвета, используемые игрой.",
    "The theme editor allows you to modify the colors the game uses":
      "Редактор тем позволяет изменять цвета, используемые игрой",
    "Description: The theme editor": "Описание: редактор тем",
    "The style editor allows you to modify certain CSS rules used by the game.":
      "Редактор стилей позволяет изменять некоторые правила CSS, используемые игрой.",
    "Description: Report Bug": "Описание: сообщить об ошибке",
    "Report Bug": "Сообщить об ошибке",
    "Description:": "Описание:",
    "Description: Discord": "Описание: Discord",
    "Description: Reddit": "Описание: Reddit",
    "Save ID:": "ID сохранения:",
    "Bonus Time:": "Бонусное время:",
    "Hacking:": "Взлом:",
    "Strength:": "Сила:",
    "Defense:": "Защита:",
    "Dexterity:": "Ловкость:",
    "Agility:": "Проворство:",
    "Charisma:": "Обаяние:",
    "Intelligence:": "Интеллект:",
    "Hacking Level multiplier:": "Множитель уровня взлома:",
    "Hacking Experience multiplier:": "Множитель опыта взлома:",
    "Strength Level multiplier:": "Множитель уровня силы:",
    "Strength Experience multiplier:": "Множитель опыта силы:",
    "Defense Level multiplier:": "Множитель уровня защиты:",
    "Defense Experience multiplier:": "Множитель опыта защиты:",
    "Dexterity Level multiplier:": "Множитель уровня ловкости:",
    "Dexterity Experience multiplier:": "Множитель опыта ловкости:",
    "Agility Level multiplier:": "Множитель уровня проворства:",
    "Agility Experience multiplier:": "Множитель опыта проворства:",
    "Charisma Level multiplier:": "Множитель уровня обаяния:",
    "Charisma Experience multiplier:": "Множитель опыта обаяния:",
    "Faction Reputation Gain multiplier:": "Множитель прироста репутации фракций:",
    "Company Reputation Gain multiplier:": "Множитель прироста репутации компаний:",
    "Salary multiplier:": "Множитель зарплаты:",
    "Crime Money multiplier:": "Множитель дохода от преступлений:",
    "Crime Success multiplier:": "Множитель успеха преступлений:",
    "Stats:": "Характеристики:",
    "Multipliers:": "Множители:",
    Multipliers: "Множители",
    Salary: "Зарплата",
    Total: "Всего",
    "Upgrade Memory of Sleeve": "Улучшить память клона",
    "Purchase a memory upgrade for your sleeve. Note that a sleeve's max memory is 100 (current:":
      "Купите улучшение памяти клона. Максимальный объём памяти клона — 100 (сейчас:",
    "Amount of memory to purchase (must be an integer):": "Объём памяти для покупки (целое число):",
    "Purchase ": "Купить ",
    "memory": "памяти",
    "Upgrade Memory": "Улучшить память",

    // Locations and the interactive tutorial
    "Eat noodles": "Съесть лапшу",
    "A businessman is yelling at a clerk. You should come back later.":
      "Какой-то бизнесмен кричит на клерка. Вам стоит вернуться позже.",
    "You can order bigger cloud servers via scripts. We don't take custom orders in person.":
      "Скриптами можно заказывать более крупные облачные серверы. Личные заказы мы не принимаем.",
    "Cores increase the effectiveness of grow() and weaken() on 'home'":
      "Ядра повышают эффективность grow() и weaken() на сервере 'home'",
    "More RAM means more scripts on 'home'": "Больше ОЗУ — больше скриптов на сервере 'home'",
    "Welcome to Bitburner, a cyberpunk-themed incremental RPG! The game takes place in a dark, dystopian future... The year is 2077...":
      "Добро пожаловать в Bitburner — инкрементальную RPG в киберпанк-сеттинге! Игра разворачивается в мрачном антиутопическом будущем... На дворе 2077 год...",
    "This tutorial will show you the basics of the game. You may skip the tutorial at any time.":
      "В этом обучении показаны основы игры. Вы можете пропустить его в любой момент.",
    "You can replay this tutorial by going to the Options tab and pressing \"Reset tutorial\".":
      "Вы можете пройти обучение заново: откройте вкладку «Настройки» и нажмите «Сбросить обучение».",
    "You can also collapse this panel to temporarily hide this tutorial.":
      "Эту панель также можно свернуть, чтобы временно скрыть обучение.",
    "Let's start by heading to the Stats page. Click": "Начнём со страницы статистики. Нажмите",
    "on the main navigation menu (left-hand side of the screen)": "в главном меню навигации (слева на экране)",
    "shows a lot of important information about your progress, such as your skills, money, and bonuses.":
      "показывает важную информацию о вашем прогрессе: навыки, деньги и бонусы.",
    "Let's head to your computer's terminal by clicking": "Откроем терминал вашего компьютера, нажав",
    "on the main navigation menu.": "в главном меню навигации.",
    "is used to interface with your home computer as well as all of the other machines around the world.":
      "используется для работы с домашним компьютером и всеми другими машинами по всему миру.",
    "Let's try it out. Start by entering": "Попробуем. Сначала введите",
    "(Don't forget to press Enter after typing the command)": "(Не забудьте нажать Enter после ввода команды)",
    "displays a list of all available Terminal commands, how to use them, and a description of what they do.":
      "показывает список всех доступных команд терминала, способы их использования и описание их действия.",
    "Let's try another command. Enter": "Попробуем другую команду. Введите",
    "is a basic command that lists the files on the computer. Right now, it shows that you have a program called":
      "— базовая команда, выводящая файлы на компьютере. Сейчас она показывает, что у вас есть программа",
    "We'll get to what this does later.": "Позже мы разберёмся, что она делает.",
    "Using your home computer's terminal, you can connect to other machines throughout the world. Let's do that now by first entering":
      "Через терминал домашнего компьютера можно подключаться к другим машинам по всему миру. Для начала введите",
    "shows all available network connections. In other words, it displays a list of all servers that can be connected to from your current machine.":
      "показывает все доступные сетевые соединения. Иными словами, выводит список серверов, к которым можно подключиться с текущей машины.",
    "That's great and all, but there's so many servers. Which one should you go to?":
      "Это хорошо, но серверов слишком много. На какой из них отправиться?",
    "gives some more detailed information about servers on the network. Try it now!":
      "выводит более подробную информацию о серверах в сети. Попробуйте!",
    "shows more detailed information about each server that you can connect to":
      "показывает более подробную информацию о каждом сервере, к которому можно подключиться",
    "Now you can see information about all servers that are up to two nodes away, as well as figure out how to navigate to those servers through the network.":
      "Теперь вы видите информацию обо всех серверах на расстоянии до двух узлов и можете понять, как добраться до них по сети.",
    "You can only connect to a server that is one node away. To connect to a machine, use":
      "Подключаться можно только к серверу на расстоянии одного узла. Для подключения к машине используйте",
    "From the results of": "По результатам команды",
    "we can see that the n00dles server is only one node away. Let's connect to it now using:":
      "видно, что сервер n00dles находится всего в одном узле. Подключимся к нему командой:",
    "You are now connected to another machine! What can you do now? You can hack it!":
      "Теперь вы подключены к другой машине! Что можно сделать? Взломать её!",
    "Before you try to hack a server, you should run diagnostics using":
      "Перед взломом сервера следует проверить его параметры с помощью",
    "finishes running it will show useful information about hacking the server.":
      "после выполнения покажет полезную информацию о взломе сервера.",
    "When": "Когда",
    "shows that there do not need to be any open ports on this machine for the NUKE virus to work, so go ahead and run the virus using":
      "показывает, что для работы вируса NUKE на этой машине не нужны открытые порты, поэтому запустите вирус командой",
    "You now have root access! You can hack the server using": "Теперь у вас есть root-доступ! Взломать сервер можно с помощью",
    "Try doing that now.": "Попробуйте сделать это сейчас.",
    "From any server you can get back home using": "С любого сервера можно вернуться домой с помощью",
    "Let's head home before creating our first script!": "Вернёмся домой, прежде чем создавать первый скрипт!",
    "Hacking is the core mechanic of the game and is necessary for progressing. However, you don't want to be hacking manually the entire time. You can automate your hacking by writing scripts!":
      "Взлом — основная механика игры, необходимая для развития. Но постоянно взламывать вручную не хочется. Вы можете автоматизировать взлом с помощью скриптов!",
    "To create a new script or edit an existing one, you can use": "Для создания нового скрипта или редактирования существующего используйте",
    "Scripts must end with a script extension (.js, .jsx, .ts, .tsx). Let's make a script now by entering":
      "Скрипты должны иметь расширение (.js, .jsx, .ts, .tsx). Создадим скрипт, введя",
    "This is the script editor. You can use it to program your scripts. Click this text to copy it and paste it into the text editor:":
      "Это редактор скриптов. В нём можно программировать свои скрипты. Нажмите на этот текст, чтобы скопировать его и вставить в текстовый редактор:",
    "For anyone with basic programming experience, this code should be straightforward. This script will continuously hack the n00dles server.":
      "Для знакомого с основами программирования человека этот код прост. Скрипт будет постоянно взламывать сервер n00dles.",
    "To access": "Чтобы открыть",
    "press the link at the bottom.": "нажмите ссылку внизу.",
    "To save and close the script editor, press the button at the bottom.":
      "Чтобы сохранить скрипт и закрыть редактор, нажмите кнопку внизу.",
    "Now we'll run the script. Scripts require a certain amount of RAM to run, and can be run on any machine which you have root access to. Different servers have different amounts of RAM. You can also purchase more RAM for your home server.":
      "Теперь запустим скрипт. Для работы скриптам требуется определённый объём ОЗУ, и запускать их можно на любой машине с root-доступом. На разных серверах разный объём ОЗУ. Вы также можете купить больше ОЗУ для домашнего сервера.",
    "To check how much RAM is available on this machine, enter": "Чтобы проверить доступный объём ОЗУ на этой машине, введите",
    "We have 8GB of free RAM on this machine, which is enough to run our script. Let's run our script using":
      "На этой машине свободно 8 ГБ ОЗУ — этого достаточно для запуска скрипта. Запустим его командой",
    "Your script is now running! It will continuously run in the background and will automatically stop if the code ever completes":
      "Ваш скрипт запущен! Он будет работать в фоне и автоматически остановится, если код когда-нибудь завершится",
    "These scripts can passively earn you income and hacking experience. Your scripts will also earn money and experience while you are offline, although at a slightly slower rate.":
      "Эти скрипты могут пассивно приносить доход и опыт взлома. Они также зарабатывают деньги и опыт, пока вы не в сети, хотя и немного медленнее.",
    "This page displays information about all of your scripts that are running across every server. You can use this to gauge how well your scripts are doing.":
      "На этой странице показана информация обо всех ваших скриптах, работающих на разных серверах. Здесь можно оценить их эффективность.",
    "Click on Home to see the scripts running on it.": "Нажмите Home, чтобы увидеть работающие на нём скрипты.",
    "Then click on n00dles.js to see the scripts information.": "Затем нажмите n00dles.js, чтобы посмотреть информацию о скриптах.",
    "One last thing about scripts, each active script contains logs that detail what it's doing. We can check these logs using the tail command. Do that now for the script we just ran by typing":
      "И последнее о скриптах: каждый активный скрипт содержит логи с подробностями своей работы. Их можно просмотреть командой tail. Сделайте это для только что запущенного скрипта, введя",
    "This covers the basics of hacking. To learn more about writing scripts, select":
      "Это основы взлома. Чтобы узнать больше о написании скриптов, выберите",
    "in the main navigation menu to look at the documentation.": "в главном меню навигации, чтобы открыть документацию.",
    "For now, let's move on to something else!": "А пока перейдём к чему-нибудь другому!",
    "Hacking is not the only way to earn money. One other way to passively earn money is by purchasing and upgrading Hacknet Nodes. Let's go to":
      "Взлом — не единственный способ заработать. Другой способ получать пассивный доход — покупать и улучшать узлы Hacknet. Перейдём в раздел",
    "through the main navigation menu now.": "через главное меню навигации.",
    "Here you can purchase new Hacknet Nodes and upgrade your existing ones. Let's purchase a new one now.":
      "Здесь можно покупать новые узлы Hacknet и улучшать существующие. Давайте купим новый узел.",
    "You just purchased a Hacknet Node! This Hacknet Node will passively earn you money over time, both online and offline. When you get enough money, you can upgrade your newly-purchased Hacknet Node below.":
      "Вы только что купили узел Hacknet! Он будет приносить пассивный доход со временем — и онлайн, и офлайн. Когда накопится достаточно денег, вы сможете улучшить купленный узел ниже.",
    "This page lists all of the different locations you can currently travel to. Each location has something that you can do. There's a lot of content out in the world, make sure you explore and discover!":
      "На этой странице перечислены все доступные места для путешествий. В каждом месте есть чем заняться. В мире много контента — исследуйте его и открывайте новое!",
    "Lastly, click on": "Наконец, нажмите",
    "This page contains a lot of different documentation about the game's contents and mechanics. I know it's a lot, but I highly suggest you read (or at least skim) through this before you start playing. Some pages are inaccessible at the start and will be unlocked later.":
      "На этой странице собрано много документации о содержании и механиках игры. Её много, но настоятельно советую прочитать её (или хотя бы просмотреть) до начала игры. Некоторые страницы поначалу недоступны и откроются позже.",
    "If you click a link in these pages while holding Ctrl key (Control key on Mac keyboard), it will be opened in a new tab. If you play the Steam version, that link will be opened in your default browser.":
      "Если нажать ссылку на этих страницах, удерживая Ctrl (Control на клавиатуре Mac), она откроется в новой вкладке. В Steam-версии ссылка откроется в браузере по умолчанию.",
    "You should at least check these pages:": "Вам стоит хотя бы заглянуть на следующие страницы:",
    "The documentation at readthedocs is outdated and unmaintained. Do not use them!":
      "Документация на readthedocs устарела и не поддерживается. Не используйте её!",
    "That's the end of the tutorial. Hope you enjoy the game!": "На этом обучение закончено. Надеюсь, игра вам понравится!",
    Previous: "Назад",
    Next: "Далее",
    "Exit Tutorial": "Выйти из обучения",
    "Finish Tutorial": "Завершить обучение",
    World: "Мир",
    Help: "Помощь",

    // Corporation dialogs and office management
    "Invalid value.": "Недопустимое значение.",
    "Your corporation does not have enough funds.": "У вашей корпорации недостаточно средств.",
    "You will gain": "Вы получите",
    "reputation with": "репутации во фракции",
    "with this bribe.": "за эту взятку.",
    "You can use corporation funds to bribe faction leaders in exchange for faction reputation.":
      "Вы можете использовать средства корпорации, чтобы подкупать лидеров фракций в обмен на репутацию.",
    "Faction:": "Фракция:",
    "Corporation funds": "Средства корпорации",
    Bribe: "Подкупить",
    "You gained": "Вы получили",
    "reputation with": "репутации во фракции",
    "by bribing them.": "за взятку.",
    "Are you sure you want to do this? Canceling a product removes it completely and permanently. You will receive no money back by doing so":
      "Вы уверены? Отмена продукта полностью и навсегда удалит его. Потраченные деньги не возвращаются.",
    "Are you sure you want to do this? Discontinuing a product removes it completely and permanently. You will no longer produce this product and all of its existing stock will be removed and left unsold":
      "Вы уверены? Снятие продукта с производства полностью и навсегда удалит его. Вы больше не будете его производить, а все имеющиеся запасы будут удалены и не проданы.",
    Cancel: "Отмена",
    "Would you like to start a corporation? This will require": "Хотите создать корпорацию? Для этого потребуется",
    "for registration and initial funding.": "на регистрацию и начальное финансирование.",
    "This": "Эти",
    "can either be self-funded, or you can obtain the seed money from the government in exchange for":
      "можно профинансировать самостоятельно или получить начальный капитал от государства в обмен на",
    "shares (a": "акций (доля",
    "stake in the company).": "в компании).",
    "Would you like to sell your position as CEO and start a new corporation? Everything from your current corporation will be gone and you start fresh.":
      "Хотите продать должность генерального директора и создать новую корпорацию? Всё из текущей корпорации будет потеряно, и вы начнёте с нуля.",
    "If you would like to start": "Если хотите начать",
    "one, please enter a name for your corporation below:": " корпорацию, введите её название ниже:",
    "Enter a name for the corporation": "Введите название корпорации",
    "Corporation Name": "Название корпорации",
    "Use seed money": "Использовать начальный капитал",
    "Insufficient player funds": "Недостаточно средств игрока",
    "Self-Fund (": "Самофинансирование (",
    "Select the industry and city to export this material to, as well as how much of this material to export per second.":
      "Выберите отрасль и город, куда экспортировать этот материал, а также объём экспорта в секунду.",
    "You can use": "Можно использовать",
    "in the amount for:": "в поле количества:",
    "to export maximum amount possible.": "экспортировать максимально возможное количество.",
    "export city's inventory of the material.": "экспортировать городской запас материала.",
    "import city's inventory of the material.": "импортировать городской запас материала.",
    "export city's per second production of the material": "экспортировать производство материала в городе за секунду",
    "import city's per second production of the material": "импортировать производство материала в городе за секунду",
    "Note: Consumption is negative production.": "Примечание: потребление — это отрицательное производство.",
    "For example: setting the amount": "Например, если задать количество",
    "would try to export all except 20 of the material.": "будет предпринята попытка экспортировать всё, кроме 20 единиц материала.",
    "Export amount / s": "Объём экспорта / с",
    "No target division selected": "Не выбрано целевое подразделение",
    "No target city selected": "Не выбран целевой город",
    "Below is a list of all current exports of this material from this warehouse. Clicking on one of the exports below will REMOVE that export.":
      "Ниже перечислены все текущие экспортные поставки этого материала с данного склада. Нажатие на поставку НЕМЕДЛЕННО УДАЛИТ её.",
    delete: "удалить",
    "Amount/s:": "Количество/с:",
    "Enter a limit to the amount of this material you would like to produce per second. Leave the box empty to set no limit.":
      "Введите максимальный объём этого материала, который хотите производить в секунду. Оставьте поле пустым, чтобы не ограничивать производство.",
    "This limit applies only to output; it does not affect input consumption.":
      "Это ограничение действует только на выпуск и не влияет на потребление ресурсов.",
    "For example, in Agriculture, assume the division's raw production is 1000. You need to consume 500 Water and 200 Chemicals to produce 1000 Plants and 1000 Food. If you set the limits for Plants and Food to 200 and 100 respectively, you will still consume 500 Water and 200 Chemicals, but only produce 200 Plants and 100 Food.":
      "Например, в сельском хозяйстве исходное производство подразделения равно 1000. Для выпуска 1000 растений и 1000 еды нужно потребить 500 воды и 200 химикатов. Если установить лимиты растений и еды на 200 и 100 соответственно, потребление всё равно составит 500 воды и 200 химикатов, но выпуск — только 200 растений и 100 еды.",
    Limit: "Лимит",
    "Limit production": "Ограничить производство",
    "Enter a limit to the amount of this product you would like to produce per second. Leave the box empty to set no limit.":
      "Введите максимальный объём этого продукта, который хотите производить в секунду. Оставьте поле пустым, чтобы не ограничивать производство.",
    "Restaurant Name": "Название ресторана",
    "Hospital Name": "Название больницы",
    "Property Name": "Название недвижимости",
    "Product Name": "Название продукта",
    "To begin developing a product, first choose the city in which it will be designed. The stats of your employees in the selected city affect the properties of the finished product, such as its quality, performance, and durability.":
      "Чтобы начать разработку продукта, сначала выберите город, где он будет спроектирован. Показатели сотрудников в выбранном городе влияют на свойства готового продукта: качество, производительность и долговечность.",
    "You can also choose to invest money in the design and marketing of the product. Investing money in its design will result in a superior product. Investing money in marketing the product will help the product's sales.":
      "Также можно вложить деньги в разработку и маркетинг продукта. Вложения в разработку улучшат продукт, а вложения в маркетинг помогут его продажам.",
    "Design investment": "Инвестиции в разработку",
    "Marketing investment": "Инвестиции в маркетинг",
    "Develop Product": "Разработать продукт",
    "Not enough warehouse space to purchase this amount": "На складе недостаточно места для покупки такого количества",
    "Invalid input for Bulk Purchase amount": "Недопустимое количество для оптовой покупки",
    "Purchasing": "Покупка",
    "will cost": "будет стоить",
    "Enter the amount of": "Введите количество",
    "you would like to bulk purchase. This purchases the specified amount instantly (all at once).":
      ", которое хотите купить оптом. Указанное количество будет куплено сразу.",
    "Bulk Purchase amount": "Количество для оптовой покупки",
    "Confirm Bulk Purchase": "Подтвердить оптовую покупку",
    "Enter the amount of": "Введите количество",
    "you would like to purchase per second. This material's cost changes constantly.":
      ", которое хотите покупать в секунду. Цена материала постоянно меняется.",
    " Note: Purchase amount is disabled as smart supply is enabled": " Примечание: количество покупки отключено, поскольку включены умные поставки",
    "Purchase amount": "Количество покупки",
    Confirm: "Подтвердить",
    "Clear Purchase": "Очистить покупку",
    "Researched": "Исследование завершено:",
    "It may take a market cycle": "Эффекты могут примениться через один рыночный цикл",
    "Research points:": "Очки исследований:",
    "Multipliers from research:": "Множители от исследований:",
    "Sold": "Продано",
    "Would you like to sell a division?": "Хотите продать подразделение?",
    "You'll get back half the money you've spent on starting the division and expanding to offices and warehouses.":
      "Вы получите половину денег, потраченных на создание подразделения и расширение офисов и складов.",
    "Division": "Подразделение",
    "Cities:": "Города:",
    "Warehouses:": "Склады:",
    "Products:": "Продукты:",
    "Sell price:": "Цена продажи:",
    "Sell division": "Продать подразделение",
    "Enter the maximum amount of": "Введите максимальное количество",
    "you would like to sell per second, as well as the price at which you would like to sell.":
      ", которое хотите продавать в секунду, и цену продажи.",
    "If the sell amount is set to 0, then the material will not be sold. If the sell price is set to 0, then the material will be discarded.":
      "Если объём продажи равен 0, материал не продаётся. Если цена продажи равна 0, материал утилизируется.",
    "Setting the sell amount to 'MAX' will result in you always selling the maximum possible amount of the material.":
      "При объёме продажи 'MAX' всегда будет продаваться максимально возможное количество материала.",
    "When setting the sell amount, you can use the 'PROD' variable to designate a dynamically changing amount that depends on your production.":
      "При задании объёма продажи можно использовать переменную 'PROD' для динамического количества, зависящего от производства.",
    "For example, if you set the sell amount to 'PROD-5' then you will always sell 5 less":
      "Например, при объёме 'PROD-5' вы всегда будете продавать на 5 единиц меньше",
    "of the material than you produce.": "материала, чем производите.",
    "When setting the sell price, you can use the 'MP' variable to designate a dynamically changing price that depends on the market price.":
      "При задании цены продажи можно использовать переменную 'MP' для динамической цены, зависящей от рыночной.",
    "For example, if you set the sell price to 'MP+10' then it will always be sold at":
      "Например, при цене 'MP+10' материал всегда будет продаваться на",
    "above the market price.": "выше рыночной цены.",
    "Sell amount": "Количество продажи",
    "Sell price": "Цена продажи",
    "If this is enabled, then this Material will automatically be sold at market price + markup.":
      "Если включено, материал будет автоматически продаваться по рыночной цене с наценкой.",
    "This overrides player set pricing and gets overriden by an active TA2.":
      "Это переопределяет цену, заданную игроком, и переопределяется активным TA2.",
    "If this is enabled, then this Material will automatically be sold at the optimal price such that the amount sold matches the amount specified.":
      "Если включено, материал будет автоматически продаваться по оптимальной цене, чтобы объём продаж соответствовал заданному.",
    "This overrides player set pricing and TA1.": "Это переопределяет цену, заданную игроком, и TA1.",
    "Set for all cities": "Установить для всех городов",
    "Smart Supply purchases the exact amount of materials needed for maximal production.":
      "Умные поставки покупают ровно столько материалов, сколько нужно для максимального производства.",
    "Enable Smart Supply": "Включить умные поставки",
    Options: "Параметры",
    "Use leftovers": "Использовать остатки",
    "Use imported": "Использовать импорт",
    "Use leftovers takes the amount of that material already in storage into account when purchasing new ones. This also accounts for imports, since they are \"leftovers\" by the time purchasing happens.":
      "«Использовать остатки» учитывает хранящееся количество материала при покупке нового. Импорт также учитывается, поскольку к моменту покупки считается «остатком».",
    "This is usually the option you want.": "Обычно нужен именно этот вариант.",
    "Use imported takes only the amount of that materials that were imported in the previous cycle into account. This is useful when dealing with specialty situations, like importing materials that also boost production.":
      "«Использовать импорт» учитывает только количество материала, импортированного в предыдущем цикле. Это полезно в особых ситуациях, например при импорте материалов, которые также ускоряют производство.",
    "If neither is toggled on, Smart Supply will ignore any materials stored and attempts to buy as much as is needed for production.":
      "Если оба параметра выключены, умные поставки игнорируют хранящиеся материалы и пытаются купить необходимое для производства количество.",
    "Invalid value entered": "Введено недопустимое значение",
    "Invalid value entered!": "Введено недопустимое значение!",
    "You don't have enough company funds to throw a party!": "У компании недостаточно средств для вечеринки!",
    "You threw a party for the office! The morale of each employee increased by":
      "Вы устроили вечеринку в офисе! Мораль каждого сотрудника выросла на",
    "and was multiplied by": "и умножена на",
    "Throwing this party will cost a total of": "Общая стоимость вечеринки составит",
    "Enter the amount of money you would like to spend PER EMPLOYEE on this office party":
      "Введите сумму, которую хотите потратить НА КАЖДОГО СОТРУДНИКА на эту офисную вечеринку",
    "Throw Party": "Устроить вечеринку",
    "Increase the size of your office space to fit additional employees!":
      "Увеличьте офис, чтобы разместить дополнительных сотрудников!",
    "Upgrade size:": "Размер улучшения:",

    "Influences how much money is stolen from a server when the player performs a hack against it.":
      "Определяет, сколько денег будет украдено с сервера при ручном взломе.",
    "Very dark with a blue/purplelly primary": "Очень тёмная тема с сине-фиолетовой основной палитрой",
    "VSCode Dark+": "VS Code Dark+",
    "Less eye-straining default theme": "Стандартная тема, меньше утомляющая глаза",
    "Default game theme, most supported": "Стандартная тема игры с максимальной поддержкой элементов",
    "Discord inspired theme": "Тема в стиле Discord",
    "Dracula Look-alike": "Тема в стиле Dracula",
    "Mark 42. Threw a little hot rod red in there.": "Марк 42. Добавлено немного ярко-красного.",
    "Cobbled Together Light Theme": "Сборная светлая тема",
    "Mayukai Dark-esque": "Тема в духе Mayukai Dark",
    "Monokai'ish": "Тема в стиле Monokai",
    "Muted gold with blue accents.": "Приглушённое золото с синими акцентами.",
    "Dark with a greenish tint": "Тёмная тема с зеленоватым оттенком",
    "Essentially all defaults except for purple replacing the main colors":
      "Почти стандартная тема, но основные цвета заменены на фиолетовые",
    "A nice green theme that doesn't hurt your eyes.": "Приятная зелёная тема, не утомляющая глаза.",
    "Warmer, softer theme": "Более тёплая и мягкая тема",
    "Calm purple and grey theme with some bright colors subtly popping up.":
      "Спокойная фиолетово-серая тема с ненавязчивыми яркими акцентами.",

    "Find Largest Prime Factor": "Поиск наибольшего простого множителя",
    "Subarray with Maximum Sum": "Подмассив с максимальной суммой",
    "Total Ways to Sum": "Общее число разложений на сумму",
    "Total Ways to Sum II": "Общее число разложений на сумму II",
    "Spiralize Matrix": "Спиральный порядок матрицы",
    "Array Jumping Game": "Игра с прыжками по массиву",
    "Array Jumping Game II": "Игра с прыжками по массиву II",
    "Merge Overlapping Intervals": "Объединение пересекающихся интервалов",
    "Generate IP Addresses": "Генерация IP-адресов",
    "Algorithmic Stock Trader I": "Алгоритмический трейдер акций I",
    "Algorithmic Stock Trader II": "Алгоритмический трейдер акций II",
    "Algorithmic Stock Trader III": "Алгоритмический трейдер акций III",
    "Algorithmic Stock Trader IV": "Алгоритмический трейдер акций IV",
    "Minimum Path Sum in a Triangle": "Минимальная сумма пути в треугольнике",
    "Unique Paths in a Grid I": "Уникальные пути в сетке I",
    "Unique Paths in a Grid II": "Уникальные пути в сетке II",
    "Shortest Path in a Grid": "Кратчайший путь в сетке",
    "Sanitize Parentheses in Expression": "Исправление скобок в выражении",
    "Find All Valid Math Expressions": "Все допустимые математические выражения",
    "HammingCodes: Integer to Encoded Binary": "Коды Хэмминга: число в закодированный двоичный вид",
    "HammingCodes: Encoded Binary to Integer": "Коды Хэмминга: закодированный двоичный вид в число",
    "Proper 2-Coloring of a Graph": "Корректная 2-раскраска графа",
    "Compression I: RLE Compression": "Сжатие I: сжатие RLE",
    "Compression II: LZ Decompression": "Сжатие II: распаковка LZ",
    "Compression III: LZ Compression": "Сжатие III: сжатие LZ",
    "Encryption I: Caesar Cipher": "Шифрование I: шифр Цезаря",
    "Encryption II: Vigenère Cipher": "Шифрование II: шифр Виженера",
    "Square Root": "Квадратный корень",
    "Total Number of Primes": "Общее количество простых чисел",
    "Largest Rectangle in a Matrix": "Наибольший прямоугольник в матрице",
    "You are attempting to solve a Coding Contract. You have":
      "Вы пытаетесь решить контракт на программирование. Осталось",
    "remaining, after which the contract will self-destruct.":
      "попыток. После этого контракт будет уничтожен.",
    "try": "попытка",
    "tries": "попыток",
    "If your solution is an empty string, you must leave the text box empty. Do not use \"\", '', or ``.":
      "Если решение — пустая строка, оставьте поле пустым. Не вводите \"\", '', или ``.",
    "Enter Solution here": "Введите решение",
    Solve: "Решить",

    "You are given the following array of stock prices (which are numbers)":
      "Вам дан следующий массив цен акций (числа)",
    "where the i-th element represents the stock price on day i:\n\n":
      "где i-й элемент — цена акции в день i:\n\n",
    "Determine the maximum possible profit you can earn using at most":
      "Определите максимальную возможную прибыль, которую можно получить, совершив не более",
    "one transaction (i.e. you can only buy and sell the stock once). If no profit can be made":
      "одной операции (то есть купить и продать акции можно только один раз). Если прибыль получить нельзя",
    "then the answer should be 0. Note": "ответ должен быть равен 0. Обратите внимание:",
    "that you have to buy the stock before you can sell it.":
      "сначала нужно купить акции и только потом продавать.",
    "Determine the maximum possible profit you can earn using as many":
      "Определите максимальную возможную прибыль, совершая любое число",
    "transactions as you'd like. A transaction is defined as buying":
      "операций. Операция — это покупка",
    "and then selling one share of the stock. Note that you cannot":
      "с последующей продажей одной акции. Нельзя",
    "engage in multiple transactions at once. In other words, you":
      "совершать несколько операций одновременно. Иными словами,",
    "must sell the stock before you buy it again.\n\n":
      "нужно продать акции перед следующей покупкой.\n\n",
    "If no profit can be made, then the answer should be 0.":
      "Если прибыль получить нельзя, ответ должен быть равен 0.",
    "two transactions. A transaction is defined as buying":
      "двух операций. Операция — это покупка",
    "You are given the following array with two elements:\n\n":
      "Вам дан следующий массив из двух элементов:\n\n",
    "The first element is an integer k. The second element is an":
      "Первый элемент — целое число k. Второй элемент —",
    "array of stock prices (which are numbers) where the i-th element":
      "массив цен акций (чисел), в котором i-й элемент",
    "represents the stock price on day i.\n\n": "представляет цену акции в день i.\n\n",
    "k transactions. A transaction is defined as buying and then selling":
      "k операций. Операция — это покупка и последующая продажа",
    "one share of the stock. Note that you cannot engage in multiple":
      "одной акции. Нельзя совершать несколько",
    "transactions at once. In other words, you must sell the stock before":
      "операций одновременно. Иными словами, сначала нужно продать акции, а затем",
    "you can buy it again.\n\n": "снова покупать.\n\n",

    "You are given the following array of integers:\n\n":
      "Вам дан следующий массив целых чисел:\n\n",
    "Each element in the array represents your MAXIMUM jump length":
      "Каждый элемент массива задаёт МАКСИМАЛЬНУЮ длину прыжка",
    "at that position. This means that if you are at position i and your":
      "в этой позиции. Если вы находитесь в позиции i и ваша",
    "maximum jump length is n, you can jump to any position from":
      "максимальная длина прыжка равна n, можно прыгнуть в любую позицию от",
    "i to i+n.": "i до i+n.",
    "\n\nAssuming you are initially positioned":
      "\n\nЕсли вначале вы находитесь",
    "at the start of the array, determine whether you are":
      "в начале массива, определите, можете ли вы",
    "able to reach the last index.\n\n": "достичь последнего индекса.\n\n",
    "Your answer should be submitted as 1 or 0, representing true and false respectively.":
      "Ответ нужно представить как 1 или 0, обозначающие соответственно истину и ложь.",
    "at the start of the array, determine the minimum number of":
      "в начале массива, определите минимальное число",
    "jumps to reach the last index.\n\n": "прыжков до последнего индекса.\n\n",
    "If it's impossible to reach the last index, then the answer should be 0.":
      "Если достичь последнего индекса невозможно, ответ должен быть равен 0.",

    "Run-length encoding (RLE) is a data compression technique which encodes data as a series of runs of":
      "Кодирование длин серий (RLE) — способ сжатия данных, представляющий их как последовательность серий",
    "a repeated single character. Runs are encoded as a length, followed by the character itself. Lengths":
      "повторяющихся символов. Серия кодируется длиной, за которой следует сам символ. Длины",
    "are encoded as a single ASCII digit; runs of 10 characters or more are encoded by splitting them":
      "записываются одной цифрой ASCII; серии длиной 10 и более разбиваются",
    "into multiple runs.\n\n": "на несколько серий.\n\n",
    "You are given the following input string:\n": "Вам дана следующая входная строка:\n",
    "Encode it using run-length encoding with the minimum possible output length.\n\n":
      "Закодируйте её методом RLE с минимально возможной длиной результата.\n\n",
    "Examples:\n\n": "Примеры:\n\n",
    "Lempel-Ziv (LZ) compression is a data compression technique which encodes data using references to":
      "Сжатие Lempel–Ziv (LZ) — способ сжатия данных, использующий ссылки на",
    "earlier parts of the data. In this variant of LZ, data is encoded in two types of chunk. Each chunk":
      "предыдущие части данных. В этом варианте LZ данные кодируются блоками двух типов. Каждый блок",
    "begins with a length L, encoded as a single ASCII digit from 1 to 9, followed by the chunk data,":
      "начинается с длины L — одной цифры ASCII от 1 до 9, за которой следуют данные блока,",
    "which is either:\n\n": "которые бывают такими:\n\n",
    "1. Exactly L characters, which are to be copied directly into the uncompressed data.\n":
      "1. Ровно L символов, которые копируются непосредственно в распакованные данные.\n",
    "2. A reference to an earlier part of the uncompressed data. To do this, the length is followed":
      "2. Ссылка на предыдущую часть распакованных данных. В этом случае после длины указывается",
    "by a second ASCII digit X: each of the L output characters is a copy of the character X":
      "вторая цифра ASCII X: каждый из L выходных символов является копией символа, находящегося на",
    "places before it in the uncompressed data.\n\n": "X позиций раньше в распакованных данных.\n\n",
    "For both chunk types, a length of 0 instead means the chunk ends immediately, and the next character":
      "Для обоих типов блока длина 0 означает немедленное завершение блока, а следующий символ",
    "is the start of a new chunk. The two chunk types alternate, starting with type 1, and the final":
      "начинает новый блок. Типы блоков чередуются, начиная с типа 1, а последний",
    "chunk may be of either type.\n\n": "блок может быть любого типа.\n\n",
    "You are given the following LZ-encoded string:\n": "Вам дана следующая строка, закодированная LZ:\n",
    "Decode it and output the original string.\n\n": "Распакуйте её и выведите исходную строку.\n\n",
    "Encode it using Lempel-Ziv encoding with the minimum possible output length.\n\n":
      "Закодируйте её методом Lempel–Ziv с минимально возможной длиной результата.\n\n",
    "Examples (some have other possible encodings of minimal length):\n":
      "Примеры (для некоторых существуют другие варианты минимальной длины):\n",

    "Caesar cipher is one of the simplest encryption technique.":
      "Шифр Цезаря — один из простейших методов шифрования.",
    "It is a type of substitution cipher in which each letter in the plaintext ":
      "Это подстановочный шифр, в котором каждая буква открытого текста ",
    "is replaced by a letter some fixed number of positions down the alphabet.":
      "заменяется буквой, смещённой на фиксированное число позиций вниз по алфавиту.",
    "For example, with a left shift of 3, D would be replaced by A, ":
      "Например, при левом сдвиге на 3 буква D заменяется на A, ",
    "E would become B, and A would become X (because of rotation).\n\n":
      "E превращается в B, а A — в X (с учётом циклического перехода).\n\n",
    "You are given an array with two elements:\n": "Вам дан массив из двух элементов:\n",
    "The first element is the plaintext, the second element is the left shift value.\n\n":
      "Первый элемент — открытый текст, второй — величина левого сдвига.\n\n",
    "Return the ciphertext as uppercase string. Spaces remains the same.":
      "Верните шифротекст строкой из заглавных букв. Пробелы должны сохраниться.",
    "Vigenère cipher is a type of polyalphabetic substitution. It uses ":
      "Шифр Виженера — разновидность полиалфавитной подстановки. Он использует ",
    "the Vigenère square to encrypt and decrypt plaintext with a keyword.\n\n":
      "квадрат Виженера для шифрования и расшифровки текста с помощью ключевого слова.\n\n",
    "For encryption each letter of the plaintext is paired with the corresponding letter of a repeating keyword.":
      "При шифровании каждая буква открытого текста сопоставляется с соответствующей буквой повторяющегося ключевого слова.",
    "For example, the plaintext DASHBOARD is encrypted with the keyword LINUX:\n":
      "Например, открытый текст DASHBOARD шифруется ключом LINUX:\n",
    "So, the first letter D is paired with the first letter of the key L. Therefore, row D and column L of the ":
      "Первая буква D сопоставляется с первой буквой ключа L. Поэтому для первой буквы шифротекста используются строка D и столбец L ",
    "Vigenère square are used to get the first cipher letter O. This must be repeated for the whole ciphertext.\n\n":
      "квадрата Виженера, что даёт букву O. Это повторяется для всего шифротекста.\n\n",
    "The first element is the plaintext, the second element is the keyword.\n\n":
      "Первый элемент — открытый текст, второй — ключевое слово.\n\n",

    "A prime factor is a factor that is a prime number.":
      "Простой множитель — это множитель, являющийся простым числом.",
    "What is the largest prime factor of ": "Каков наибольший простой множитель числа ",
    "Given the following string containing only digits, return":
      "Для следующей строки, содержащей только цифры, верните",
    "an array with all possible valid IP address combinations":
      "массив всех возможных корректных комбинаций IP-адресов",
    "that can be created from the string:\n\n": "которые можно составить из строки:\n\n",
    "Note that an octet cannot begin with a '0' unless the number":
      "Учтите, что октет не может начинаться с '0', если число",
    "itself is exactly '0'. For example, '192.168.010.1' is not a valid IP.\n\n":
      "не равно ровно '0'. Например, '192.168.010.1' — некорректный IP-адрес.\n\n",
    "Given the following array of arrays of numbers representing a list of":
      "Для следующего массива массивов чисел, представляющего список",
    "intervals, merge all overlapping intervals.\n\n":
      "интервалов, объедините все пересекающиеся интервалы.\n\n",
    "would merge into": "объединится в",
    "The intervals must be returned in ASCENDING order.":
      "Интервалы нужно вернуть в ВОЗРАСТАЮЩЕМ порядке.",
    "You can assume that in an interval, the first number will always be":
      "Можно считать, что в каждом интервале первое число всегда",
    "smaller than the second.": "меньше второго.",
    "Given a triangle, find the minimum path sum from top to bottom. In each step":
      "Для данного треугольника найдите минимальную сумму пути сверху вниз. На каждом шаге",
    "of the path, you may only move to adjacent numbers in the row below.":
      "пути можно переходить только к соседним числам в следующей строке.",
    "The triangle is represented as a 2D array of numbers:\n\n":
      "Треугольник представлен двумерным массивом чисел:\n\n",
    "Example: If you are given the following triangle:\n\n[\n":
      "Пример. Если дан следующий треугольник:\n\n[\n",
    "The minimum path sum is 11 (2 -> 3 -> 5 -> 1).":
      "Минимальная сумма пути равна 11 (2 -> 3 -> 5 -> 1).",

    "You are given a binary matrix consisting only of 0s and 1s:\n":
      "Вам дана бинарная матрица, состоящая только из 0 и 1:\n",
    "Your task is to find the two corners of the largest rectangle ([[r1,c1],[r2,c2]]) that does not contain any 1s.\n\n":
      "Найдите два угла наибольшего прямоугольника ([[r1,c1],[r2,c2]]), внутри которого нет единиц.\n\n",
    "Example 1:\n": "Пример 1:\n",
    "Data:\n": "Данные:\n",
    "Answer:": "Ответ:",
    "Example 2:\n": "Пример 2:\n",

    "You are given the following data, representing a graph:\n":
      "Вам даны следующие данные, представляющие граф:\n",
    "Note that \"graph\", as used here, refers to the field of graph theory, and has":
      "Обратите внимание: здесь \"граф\" означает объект теории графов и не имеет",
    "no relation to statistics or plotting.": "отношения к статистике или построению графиков.",
    "The first element of the data represents the number of vertices in the graph.":
      "Первый элемент данных задаёт число вершин графа.",
    "Each vertex is a unique number between 0 and ": "Каждая вершина — уникальное число от 0 до ",
    "The next element of the data represents the edges of the graph.":
      "Следующий элемент данных задаёт рёбра графа.",
    "Two vertices u,v in a graph are said to be adjacent if there exists an edge [u,v].":
      "Две вершины u,v считаются смежными, если существует ребро [u,v].",
    "Note that an edge [u,v] is the same as an edge [v,u], as order does not matter.":
      "Ребро [u,v] равно ребру [v,u], поскольку порядок не важен.",
    "You must construct a 2-coloring of the graph, meaning that you have to assign each":
      "Постройте 2-раскраску графа: каждой",
    "vertex in the graph a \"color\", either 0 or 1, such that no two adjacent vertices have":
      "вершине нужно назначить \"цвет\" — 0 или 1, чтобы никакие две смежные вершины не имели",
    "the same color. Submit your answer in the form of an array, where element i":
      "одинаковый цвет. Ответ представьте массивом, где элемент i",
    "represents the color of vertex i. If it is impossible to construct a 2-coloring of":
      "задаёт цвет вершины i. Если построить 2-раскраску",
    "the given graph, instead submit an empty array.\n\n":
      "данного графа невозможно, отправьте пустой массив.\n\n",

    "Given the following string:\n\n": "Для следующей строки:\n\n",
    "remove the minimum number of invalid parentheses in order to validate":
      "удалите минимальное число некорректных скобок, чтобы сделать",
    "the string. If there are multiple minimal ways to validate the string,":
      "строку корректной. Если существует несколько минимальных вариантов исправления строки,",
    "provide all of the possible results. The answer should be provided":
      "верните все возможные результаты. Ответ нужно представить",
    "as an array of strings. If it is impossible to validate the string":
      "массивом строк. Если сделать строку корректной невозможно,",
    "the result should be an array with only an empty string.\n\n":
      "результатом должен быть массив, содержащий только пустую строку.\n\n",
    "IMPORTANT: The string may contain letters, not just parentheses.\n\n":
      "ВАЖНО: строка может содержать буквы, а не только скобки.\n\n",

    "You are located in the top-left corner of the following grid:\n\n":
      "Вы находитесь в левом верхнем углу следующей сетки:\n\n",
    "You are trying to find the shortest path to the bottom-right corner of the grid,":
      "Найдите кратчайший путь в правый нижний угол сетки,",
    "but there are obstacles on the grid that you cannot move onto.":
      "но в сетке есть препятствия, на которые нельзя переходить.",
    "These obstacles are denoted by '1', while empty spaces are denoted by 0.\n\n":
      "Препятствия обозначены '1', а свободные клетки — 0.\n\n",
    "Determine the shortest path from start to finish, if one exists.":
      "Определите кратчайший путь от начала до конца, если он существует.",
    "The answer should be given as a string of UDLR characters, indicating the moves along the path\n\n":
      "Ответ должен быть строкой из символов UDLR, обозначающих движения по пути\n\n",
    "NOTE: If there are multiple equally short paths, any of them is accepted as answer.":
      "ПРИМЕЧАНИЕ: если существует несколько одинаково коротких путей, подойдёт любой.",
    "If there is no path, the answer should be an empty string.\n":
      "Если пути нет, ответом должна быть пустая строка.\n",
    "NOTE: The data returned for this contract is an 2D array of numbers representing the grid.\n\n":
      "ПРИМЕЧАНИЕ: данные этого контракта — двумерный массив чисел, представляющий сетку.\n\n",

    "Given the following array of arrays of numbers representing a 2D matrix,":
      "Для следующего массива массивов чисел, представляющего двумерную матрицу,",
    "return the elements of the matrix as an array in spiral order:\n\n":
      "верните элементы матрицы в виде массива в спиральном порядке:\n\n",
    "\nHere is an example of what spiral order should be:\n\n":
      "\nПример спирального порядка:\n\n",
    "Answer:": "Ответ:",
    "Note that the matrix will not always be square:\n\n":
      "Учтите, что матрица не всегда будет квадратной:\n\n",

    "Given the following integer array, find the contiguous subarray":
      "Для следующего массива целых чисел найдите непрерывный подмассив",
    "(containing at least one number) which has the largest sum and return that sum.":
      "(содержащий хотя бы одно число) с наибольшей суммой и верните эту сумму.",
    "'Sum' refers to the sum of all the numbers in the subarray.\n":
      "«Сумма» означает сумму всех чисел в подмассиве.\n",
    "You are given two random non-negative integers: ": "Вам даны два случайных неотрицательных целых числа: ",
    "The first will be up to 5000000, and the second will be at most 1000000 greater.\n":
      "Первое не превышает 5000000, а второе может быть максимум на 1000000 больше.\n",
    "Determine the amount of prime numbers between them (including the numbers given).\n\n":
      "Определите количество простых чисел между ними, включая сами заданные числа.\n\n",
    "Example:\n": "Пример:\n",
    "It is possible write four as a sum in exactly four different ways:\n\n":
      "Четвёрку можно представить в виде суммы ровно четырьмя различными способами:\n\n",
    "How many different distinct ways can the number ": "Сколькими различными способами число ",
    "be written as a sum of at least": "можно представить в виде суммы как минимум",
    "two positive integers?": "двух положительных целых чисел?",
    "as a sum of integers contained in the set:\n\n": "представить в виде суммы целых чисел из множества:\n\n",
    "You may use each integer in the set zero or more times.":
      "Каждое число из множества можно использовать любое количество раз, включая ноль.",

    "You are in a grid with": "Вы находитесь в сетке размером",
    " rows and ": " строк и ",
    " columns, and you are": " столбцов и",
    "positioned in the top-left corner of that grid. You are trying to":
      "находитесь в её левом верхнем углу. Вам нужно",
    "reach the bottom-right corner of the grid, but you can only":
      "достичь правого нижнего угла, но можно только",
    "move down or right on each step. Determine how many":
      "двигаться вниз или вправо. Определите количество",
    "unique paths there are from start to finish.\n\n":
      "уникальных путей от начала до конца.\n\n",
    "NOTE: The data returned for this contract is an array":
      "ПРИМЕЧАНИЕ: данные этого контракта — массив",
    "with the number of rows and columns:\n\n": "с числом строк и столбцов:\n\n",
    "You are trying to reach the bottom-right corner of the grid, but you can only":
      "Вам нужно достичь правого нижнего угла сетки, но можно только",
    "move down or right on each step. Furthermore, there are obstacles on the grid":
      "двигаться вниз или вправо. Кроме того, в сетке есть препятствия",
    "that you cannot move onto. These obstacles are denoted by '1', while empty":
      "на которые нельзя переходить. Препятствия обозначены '1', а пустые",
    "spaces are denoted by 0.\n\n": "клетки — 0.\n\n",
    "Determine how many unique paths there are from start to finish.\n\n":
      "Определите количество уникальных путей от начала до конца.\n\n",

    "It is possible write four as a sum in exactly four different ways":
      "Четвёрку можно представить в виде суммы ровно четырьмя различными способами",

    // Documentation headings and longer passages. These entries are deliberately
    // kept separate from API identifiers and code examples: Markdown documentation
    // renders links and code spans as separate DOM nodes, so short fragments alone
    // produce mixed text such as "Вы can go...".
    "Getting Started Guide for Beginner Programmers": "Руководство для начинающих программистов",
    "Before you start": "Перед началом",
    "Introduction": "Введение",
    "First Steps": "Первые шаги",
    "Creating our First Script": "Создание первого скрипта",
    "Running our Scripts": "Запуск скриптов",
    "Increasing Hacking Level": "Повышение уровня взлома",
    "Editing our Hacking Script": "Изменение скрипта взлома",
    "Creating a New Script to Access Cloud Servers": "Создание скрипта для доступа к облачным серверам",
    "Additional Sources of Income": "Дополнительные источники дохода",
    "Hacknet Nodes": "Узлы Hacknet",
    "Crime": "Преступления",
    "Work for a Company": "Работа в компании",
    "Joining your first faction: CyberSec": "Вступление в первую фракцию: CyberSec",
    "Reaching a Hacking Level of 50": "Достижение 50-го уровня взлома",
    "Creating your first program: BruteSSH.exe": "Создание первой программы: BruteSSH.exe",
    "Optional: Create AutoLink.exe": "Необязательно: создание AutoLink.exe",
    "After you Buy your New Cloud Servers": "После покупки новых облачных серверов",
    "Before you purchase a TOR router": "Перед покупкой TOR-маршрутизатора",
    "The Dark Web": "Тёмная сеть",
    "The Stock Market": "Фондовый рынок",
    "Getting Started": "Начало работы",
    "Note:": "Примечание:",
    "Note": "Примечание",
    ": The": ": ",
    "and strategies in this guide aren't necessarily optimal or comprehensive. This guide is tailored to help those with minimal programming knowledge experience Bitburner during early stages of the game.":
      "и стратегии из этого руководства не обязательно оптимальны или исчерпывающи. Руководство рассчитано на игроков с минимальными знаниями программирования и поможет познакомиться с Bitburner на ранних этапах игры.",
    "If you are confused or overwhelmed by the game, especially the coding and scripting aspects, this guide is perfect for you!":
      "Если игра кажется вам запутанной или перегруженной, особенно её программирование и написание скриптов, это руководство вам подойдёт!",
    "Bitburner is a cyberpunk-themed incremental RPG. You will progress by raising your":
      "Bitburner — инкрементальная RPG в киберпанк-сеттинге. Вы будете развиваться, повышая",
    "earning money, and with practice, advancing your real-world coding skills. After reaching certain criteria, you will receive invitations from in-game":
      "зарабатывая деньги и совершенствуя реальные навыки программирования. Достигнув определённых условий, вы получите приглашения от внутриигровых",
    ", earning money, and with practice, advancing your real-world coding skills. After reaching certain criteria, you will receive invitations from in-game":
      ", зарабатывая деньги и совершенствуя реальные навыки программирования. Достигнув определённых условий, вы получите приглашения от внутриигровых",
    "and working for them will unlock various": "а работа в них откроет различные",
    "which are purchased and \"installed,\" adding a persistent bonus to":
      "которые можно покупать и «устанавливать», получая постоянный бонус к",
    ", which are purchased and \"installed,\" adding a persistent bonus to":
      ", которые можно покупать и «устанавливать», получая постоянный бонус к",
    "and other abilities. Working with Factions and installing Augmentations is a basic step for progressing in Bitburner.":
      "и другим способностям. Работа с фракциями и установка аугментаций — базовый этап развития в Bitburner.",
    "The game has an open, minimalistic storyline that can be played in multiple ways to reach your goals. Since this guide is written as a basic introduction to Bitburner, it will not expose the entire scope or storyline available.":
      "В игре есть открытая минималистичная сюжетная линия, которую можно проходить разными способами. Поскольку это руководство лишь знакомит с Bitburner, оно не раскрывает весь доступный объём механик и сюжета.",
    "I'm going to assume you followed the introductory tutorial when you first began the game. In this introductory tutorial, you created a":
      "Будем считать, что в начале игры вы прошли вводное обучение. В нём вы создали",
    "called": "под названием",
    "and ran it on the": "и запустили его на сервере",
    "server. Now, we'll kill this": "сервере. Теперь остановим этот",
    "There are two ways to do this:": "Есть два способа это сделать:",
    "You can go to the": "Можно открыть раздел",
    "and enter:": "и ввести команду:",
    "You can go to the Active Scripts page (Alt + s) and press the Kill Script button for":
      "Можно открыть страницу «Активные скрипты» (Alt + S) и нажать кнопку «Остановить скрипт» для",
    "If you skipped the introductory tutorial, then ignore the part above. Instead, go to the":
      "Если вы пропустили вводное обучение, просто пропустите предыдущий раздел. Вместо этого откройте страницу",
    "page (Alt + h) and purchase a": "(Alt + H) и купите",
    "to start generating some passive income.": "чтобы начать получать пассивный доход.",
    "Now, we'll create a generic": "Теперь создадим универсальный",
    "that can be used early on in the game (or throughout the entire game, if you want). This script is usually called \"early hack template\" or EHT.":
      "который можно использовать в начале игры (или на протяжении всей игры, если хотите). Такой скрипт обычно называют «шаблоном раннего взлома» или EHT.",
    "Before we write the": "Прежде чем написать",
    "here are some things you'll want to familiarize yourself with:":
      "познакомьтесь со следующими понятиями:",
    "To briefly summarize: Each": "Если кратко: каждый",
    "has a security level that affects how difficult it is to hack. Each":
      "имеет уровень защиты, который влияет на сложность взлома. Каждый",
    "also has a certain amount of money, as well as a maximum amount of money it can hold.":
      "также содержит определённую сумму денег и имеет максимальный объём денег, который может хранить.",
    "steals a percentage of that": "крадёт процент денег этого",
    "'s money.": ".",
    "function is used to hack a": "используется для взлома",
    "function is used to increase the amount of money available on a":
      "используется для увеличения доступной суммы денег на",
    "function is used to decrease a": "используется для снижения уровня защиты",
    "Now let's move on to actually creating the": "Теперь перейдём к созданию",
    "Go to your home computer and then create a": "Откройте домашний компьютер и создайте",
    "by going to the": "перейдя в раздел",
    "and entering the following two commands:": "и введя следующие две команды:",
    "This will take you to the": "После этого откроется",
    "editor, which you can use to code and create": "редактор, в котором можно писать код и создавать",
    "Enter the following code in the": "Введите следующий код в",
    "This is the script editor. You can use it to program your scripts. Click this text to copy it and paste it into the text editor:":
      "Это редактор скриптов. В нём можно программировать свои скрипты. Нажмите на этот текст, чтобы скопировать его, и вставьте в текстовый редактор:",
    "For anyone with basic programming experience, this code should be straightforward. This script will continuously hack the n00dles server.":
      "Для человека с базовыми знаниями программирования этот код будет понятен. Скрипт будет непрерывно взламывать сервер n00dles.",
    "To save and close the script editor, press the button at the bottom.":
      "Чтобы сохранить скрипт и закрыть редактор, нажмите кнопку внизу.",
    "Now we'll run the script. Scripts require a certain amount of RAM to run, and can be run on any machine which you have root access to. Different servers have different amounts of RAM. You can also purchase more RAM for your home server.":
      "Теперь запустим скрипт. Для работы скриптам требуется определённый объём ОЗУ, и запускать их можно на любой машине, к которой у вас есть root-доступ. На разных серверах разный объём ОЗУ. Домашний сервер также можно улучшать.",
    "Your script is now running! It will continuously run in the background and will automatically stop if the code ever completes":
      "Скрипт запущен! Он будет работать в фоне и автоматически остановится, когда выполнение кода завершится",
    "These scripts can passively earn you income and hacking experience. Your scripts will also earn money and experience while you are offline, although at a slightly slower rate.":
      "Эти скрипты могут пассивно приносить деньги и опыт взлома. Они также зарабатывают деньги и опыт, пока вы не в игре, хотя и немного медленнее.",
    "This page displays information about all of your scripts that are running across every server. You can use this to gauge how well your scripts are doing.":
      "На этой странице показана информация обо всех скриптах, работающих на серверах. Здесь можно оценить, насколько эффективно они работают.",
    "Click on Home to see the scripts running on it.": "Нажмите Home, чтобы увидеть работающие на нём скрипты.",
    "Then click on n00dles.js to see the scripts information.": "Затем нажмите n00dles.js, чтобы посмотреть информацию о скрипте.",
    "One last thing about scripts, each active script contains logs that detail what it's doing. We can check these logs using the tail command. Do that now for the script we just ran by typing":
      "И ещё: каждый активный скрипт ведёт журнал с подробностями своей работы. Посмотреть его можно командой tail. Проверьте журнал только что запущенного скрипта, введя",
    "This covers the basics of hacking. To learn more about writing scripts, select":
      "Это основные сведения о взломе. Чтобы узнать больше о написании скриптов, выберите",

    // Remaining ordinary documentation headings. API names and command names
    // are intentionally omitted from this list.
    "BitNode characteristic": "Особенности BitNode",
    "BitNode analysis": "Анализ BitNode",
    "Order advice": "Рекомендации по порядку",
    "The first choice": "Первый выбор",
    "Early BitNodes": "Ранние BitNode",
    "Situational BitNodes and Hard BitNodes": "Ситуативные и сложные BitNode",
    "Challenging BitNodes": "Испытательные BitNode",
    "Special BitNodes": "Особые BitNode",
    "Bad BitNodes": "Неудачные BitNode",
    "Which BitNode should I try next?": "Какой BitNode попробовать дальше?",
    "Good early BitNodes": "Хорошие ранние BitNode",
    "Depends on your priorities": "Зависит от ваших приоритетов",
    "Tough but has new mechanics": "Сложный, но с новыми механиками",
    "Save these for later": "Оставьте их на потом",
    "What is a BitNode": "Что такое BitNode",
    "How to destroy a BitNode": "Как уничтожить BitNode",
    "BitNode recommendation": "Рекомендации по BitNode",
    "BitNode list": "Список BitNode",
    "Bladeburners": "Bladeburner",
    "Bladeburner Skills:": "Навыки Bladeburner:",
    "Faction and Rank:": "Фракция и ранг:",
    "Basic gameplay – Terms": "Основы игры — термины",
    "Basic gameplay": "Основы игры",
    "Terms": "Термины",
    "Boost material": "Материалы-ускорители",
    "Division production multiplier": "Множитель производства подразделения",
    "Optimizer": "Оптимизатор",
    "Solution": "Решение",
    "Lagrange multiplier method": "Метод множителей Лагранжа",
    "Proof": "Доказательство",
    "Handle low storage space": "Что делать при нехватке места на складе",
    "Demand - Competition": "Спрос и конкуренция",
    "Usage": "Использование",
    "Material": "Материал",
    "Division raw production": "Базовое производство подразделения",
    "Definition": "Определение",
    "Formula": "Формула",
    "Financial statement": "Финансовая отчётность",
    "Total assets": "Общие активы",
    "Valuation": "Оценка стоимости",
    "Investment offer": "Инвестиционное предложение",
    "Dividend and Tribute modifier": "Модификатор дивидендов и дани",
    "Shares": "Акции",
    "General advice": "Общие советы",
    "Round 1": "Раунд 1",
    "Round 2": "Раунд 2",
    "Round 3+": "Раунд 3 и далее",
    "Industry - Supply chain": "Отрасли и цепочки поставок",
    "Basic term": "Основные термины",
    "Criterion": "Критерий",
    "Other product industries": "Другие производственные отрасли",
    "Conclusion": "Заключение",
    "Miscellany": "Разное",
    "Corporation's state": "Состояние корпорации",
    "Import and export": "Импорт и экспорт",
    "Use mathematical library": "Использование математической библиотеки",
    "Noodles trick": "Трюк с Noodles",
    "Dummy division": "Тестовое подразделение",
    "Office": "Офис",
    "Basic information": "Основная информация",
    "Energy and morale": "Энергия и боевой дух",
    "Employee production by job": "Производительность сотрудников по должностям",
    "Calculate employee's stat": "Расчёт характеристик сотрудника",
    "Optimal selling price - Market-TA2": "Оптимальная цена продажи — Market-TA2",
    "Market price and markup limit": "Рыночная цена и предел наценки",
    "Sales volume": "Объём продаж",
    "Potential sales volume": "Потенциальный объём продаж",
    "Markup multiplier": "Множитель наценки",
    "Maximize sales volume": "Максимизация объёма продаж",
    "Optimal selling price": "Оптимальная цена продажи",
    "Approximation value of product markup": "Приближённое значение наценки продукта",
    "Logic": "Логика",
    "Detect warehouse congestion": "Обнаружение переполнения склада",
    "Unlocks - Upgrade - Research": "Разблокировки, улучшения и исследования",
    "Unlocks": "Разблокировки",
    "Wilson Analytics - Advert": "Wilson Analytics и реклама",
    "Awareness and popularity": "Известность и популярность",
    "Advert": "Реклама",
    "Advice": "Советы",
    "Contents": "Содержание",
    "List of Factions and their Requirements": "Список фракций и требования к ним",
    "Early Game Factions": "Фракции ранней игры",
    "City Factions": "Городские фракции",
    "Hacking Groups": "Хакерские группировки",
    "Megacorporations": "Мегакорпорации",
    "Criminal Organizations": "Преступные организации",
    "Lategame Factions": "Фракции поздней игры",
    "Endgame Factions": "Фракции финальной стадии",
    "Starting and Recruiting": "Начало и вербовка",
    "Respect": "Уважение",
    "Ascending": "Повышение",
    "Equipping and Managing": "Экипировка и управление",
    "Wanted, Territory and Clashes": "Розыск, территория и столкновения",
    "Duplicate Sleeves": "Дубликаты-клоны",
    "Obtaining Duplicate Sleeves": "Получение дубликатов-клонов",
    "Synchronization": "Синхронизация",
    "Sleeve Shock": "Шок клона",
    "Coding Contracts": "Контракты на программирование",
    "Contract generation": "Генерация контрактов",
    "Running in Terminal": "Запуск в терминале",
    "Interacting through Scripts": "Взаимодействие через скрипты",
    "Submitting Solutions": "Отправка решений",
    "General rules": "Общие правила",
    "String conversion": "Преобразование строк",
    "Tips": "Советы",
    "Rewards": "Награды",
    "Gaining Root Access": "Получение root-доступа",
    "General Hacking Mechanics": "Общие механики взлома",
    "Server Security": "Защита сервера",
    "Backdoors": "Бэкдоры",
    "Challenge list": "Список испытаний",
    "Attack the distracted sentinel": "Атакуйте отвлёкшегося часового",
    "Type it backward": "Введите наоборот",
    "Say something nice about the guard.": "Скажите охраннику что-нибудь приятное.",
    "Cut the wires": "Перережьте провода",
    "Fundamentals": "Основы",
    "Positions: Long vs Short": "Позиции: лонг и шорт",
    "Forecast & Second-Order Forecast": "Прогноз и прогноз второго порядка",
    "Spread (Bid Price & Ask Price)": "Спред (цена покупки и цена продажи)",
    "Transactions Influencing Stock Forecast": "Сделки, влияющие на прогноз акций",
    "Order Types": "Типы ордеров",
    "Player Actions Influencing Stocks": "Действия игрока, влияющие на акции",
    "Growing": "Рост",
    "Working for a Company": "Работа в компании",
    "Automating the Stock Market": "Автоматизация фондового рынка",
    "Under the Hood": "Внутреннее устройство",
    "Offline Progression": "Развитие в офлайн-режиме",
    "Filesystem (Directories)": "Файловая система (каталоги)",
    "Directories": "Каталоги",
    "Absolute vs Relative Paths": "Абсолютные и относительные пути",
    "Argument Parsing": "Разбор аргументов",
    "Chaining Commands": "Цепочки команд",
    "Quirks": "Особенности",

    // Core documentation pages and their user-facing subsections.
    "BitNodes": "BitNode",
    "BitNode 1": "BitNode 1",
    "BitNode 2": "BitNode 2",
    "BitNode 3": "BitNode 3",
    "BitNode 4": "BitNode 4",
    "BitNode 5": "BitNode 5",
    "BitNode 6 and BitNode 7": "BitNode 6 и BitNode 7",
    "BitNode 8": "BitNode 8",
    "BitNode 9": "BitNode 9",
    "BitNode 10": "BitNode 10",
    "BitNode 11": "BitNode 11",
    "BitNode 12": "BitNode 12",
    "BitNode 13": "BitNode 13",
    "BitNode 14": "BitNode 14",
    "BitNode 15": "BitNode 15",
    "tl;dr": "Кратко",
    "BitNode 1: Source Genesis": "BitNode 1: Генезис исходного файла",
    "BitNode 2: Rise of the Underworld": "BitNode 2: Восстание преступного мира",
    "BitNode 3: Corporatocracy": "BitNode 3: Власть корпораций",
    "BitNode 4: The Singularity": "BitNode 4: Сингулярность",
    "BitNode 5: Artificial Intelligence": "BitNode 5: Искусственный интеллект",
    "BitNode 6: Bladeburners": "BitNode 6: Bladeburner",
    "BitNode 7: Bladeburners 2079": "BitNode 7: Bladeburner 2079",
    "BitNode 8: Ghost of Wall Street": "BitNode 8: Призрак Уолл-стрит",
    "BitNode 9: Hacktocracy": "BitNode 9: Хактократия",
    "BitNode 10: Digital Carbon": "BitNode 10: Цифровой углерод",
    "BitNode 11: The Big Crash": "BitNode 11: Большой крах",
    "BitNode 12: The Recursion": "BitNode 12: Рекурсия",
    "BitNode 13: They're lunatics": "BitNode 13: Они безумцы",
    "BitNode 14: IPvGO Subnet Takeover": "BitNode 14: Захват подсети IPvGO",
    "BitNode 15: The Secrets of the Dark Net": "BitNode 15: Тайны тёмной сети",
    "Product": "Продукт",
    "FAQ": "Частые вопросы",
    "Overview": "Обзор",
    "Upgrade": "Улучшения",
    "Warehouse": "Склад",
    "Corporation": "Корпорация",
    "Grafting": "Сращивание",
    "Intelligence": "Интеллект",
    "Sleeves": "Клоны",
    "Augmentations": "Аугментации",
    "Memory": "Память",
    "Stanek": "Станек",
    "Companies": "Компании",
    "Crimes": "Преступления",
    "Factions": "Фракции",
    "Hacking": "Взлом",
    "RAM": "ОЗУ",
    "Reputation": "Репутация",
    "Servers": "Серверы",
    "World": "Мир",
    "For specific details of how Hacking work \"offline\"":
      "Подробности о том, как взлом работает в офлайн-режиме",
    "The Darkweb Network": "Сеть тёмной сети",
    "Network structure": "Структура сети",
    "TL;DR: Executive summary of the darknet API":
      "Кратко: основные сведения об API тёмной сети",
    "Glossary of Terms": "Глоссарий терминов",
    "Darknet script design considerations": "Особенности разработки скриптов для тёмной сети",
    "Navigating the Dark Net with dnet.probe": "Навигация по тёмной сети с помощью dnet.probe",
    "Gaining server access": "Получение доступа к серверу",
    "Example Script": "Пример скрипта",
    "Warning: STOP HERE IF YOU WANT TO START YOUR CODE COMPLETELY FROM SCRATCH.":
      "Предупреждение: остановитесь здесь, если хотите полностью написать код с нуля.",
    "Tools & Resource": "Инструменты и ресурсы",
    "Official Script Repository": "Официальный репозиторий скриптов",
    "Documentation": "Документация",
    "Guides": "Руководства",
    "Resources": "Ресурсы",
    "Migration": "Миграция",
    "After you Purchase your New Cloud Servers": "После покупки новых облачных серверов",
    "Using Additional Servers to Hack Joesguns": "Использование дополнительных серверов для взлома Joesguns",
    "Copying our Scripts": "Копирование скриптов",
    "Profiting from Scripts & Gaining Reputation with CyberSec":
      "Получение дохода от скриптов и репутации в CyberSec",
    "Purchasing Upgrades and Augmentations": "Покупка улучшений и аугментаций",
    "Upgrading RAM on Home computer": "Увеличение ОЗУ домашнего компьютера",
    "Purchasing your First Augmentations": "Покупка первых аугментаций",
    "Next Steps": "Следующие шаги",
    "Installing Augmentations (and Resetting)": "Установка аугментаций и сброс прогресса",
    "Automating the Script Startup Process": "Автоматизация запуска скриптов",
    "Random Tips": "Случайные советы",
    "Learn to Program in JavaScript": "Учимся программировать на JavaScript",
    "For Beginner Programmers": "Для начинающих программистов",
    "For Experienced Programmers": "Для опытных программистов",
    "What is a corporation good for?": "Для чего нужна корпорация?",
    "How many investment rounds should I take?": "Сколько инвестиционных раундов проходить?",
    "Investors take too many shares. Can I buy them back later?":
      "Инвесторы получают слишком много акций. Можно ли выкупить их позже?",
    "The government takes too many shares when I use the \"Seed money\" option. Can I buy them back later?":
      "Правительство получает слишком много акций при выборе «Стартовый капитал». Можно ли выкупить их позже?",
    "Why can I not buy back my shares?": "Почему я не могу выкупить свои акции?",
    "My corporation generates profit. Why does my money not increase?":
      "Моя корпорация приносит прибыль. Почему мои деньги не увеличиваются?",
    "How many shares should I issue?": "Сколько акций выпускать?",
    "Why is my \"earnings as a shareholder\" lower than my calculation (\"Dividends per share\" \\ \"Owned Stock Shares\")?":
      "Почему мои «доходы акционера» ниже расчёта («Дивиденды на акцию» × «Акции во владении»)?",
    "All corporation APIs require too much RAM. How do I deal with it?":
      "Все API корпорации требуют слишком много ОЗУ. Что делать?",
    "Why can I not create a corporation with the government's seed money (\"Use seed money\")?":
      "Почему я не могу создать корпорацию на стартовый капитал правительства («Использовать стартовый капитал»)?",
    "Can I sell my corporation via API?": "Можно ли продать корпорацию через API?",
    "Can I transfer my (personal) money to the corporation's funds?":
      "Можно ли перевести личные деньги в средства корпорации?",
    "Why can I not bribe factions for reputations? What's the exchange rate?":
      "Почему я не могу подкупать фракции ради репутации? Какой курс обмена?",
    "What's the maximum number of divisions?": "Каково максимальное число подразделений?",
    "Why does my division not produce anything?": "Почему моё подразделение ничего не производит?",
    "Which industry should I focus on?": "На какой отрасли сосредоточиться?",
    "Should I create more divisions for the same industry? For example: multiple Agriculture divisions.":
      "Стоит ли создавать несколько подразделений одной отрасли, например несколько сельскохозяйственных?",
    "Which \"feature\" (Export, Smart Supply, etc.) should I unlock?":
      "Какую «функцию» разблокировать — экспорт, Smart Supply и т. д.?",
    "Which upgrade should I buy?": "Какое улучшение купить?",
    "Which research should I buy?": "Какое исследование купить?",
    "I unlocked \"Smart Supply\", but it does not work or its behavior is weird.":
      "Я разблокировал Smart Supply, но он не работает или ведёт себя странно.",
    "How do I implement a custom Smart Supply script?":
      "Как реализовать собственный скрипт Smart Supply?",
    "How do I setup the quantity of exported materials?":
      "Как настроить количество экспортируемых материалов?",
    "Is research's benefit shared between different divisions?":
      "Распространяется ли эффект исследования на разные подразделения?",
    "Should I expand to all 6 cities?": "Стоит ли расширяться во все шесть городов?",
    "What are boost materials?": "Что такое материалы-ускорители?",
    "How many boost materials should I buy?": "Сколько материалов-ускорителей покупать?",
    "Why does the [General advice](./general-advice.md) section tell me to use API to upgrade office size?":
      "Почему в разделе «Общие советы» рекомендуется использовать API для расширения офиса?",
    "Why does setJobAssignment not take effect immediately?":
      "Почему setJobAssignment не применяется сразу?",
    "Why do energy and morale matter?": "Зачем нужны энергия и боевой дух?",
    "What do Interns do?": "Что делают стажёры?",
    "I use 1/9 as Intern ratio, but energy and morale still drop.":
      "Я использую соотношение стажёров 1/9, но энергия и боевой дух всё равно падают.",
    "Are there any other ways to maintain these 2 stats?":
      "Есть ли другие способы поддерживать эти две характеристики?",
    "Buying tea and throwing parties cost me too much money. Why are they so expensive?":
      "Покупка чая и проведение вечеринок обходятся слишком дорого. Почему?",
    "How much money should I spend to throw parties? How often should I buy tea / throw party?":
      "Сколько тратить на вечеринки? Как часто покупать чай и устраивать вечеринки?",
    "How do I know if the qualities of my input materials are too low and need to be improved?":
      "Как понять, что качество входных материалов слишком низкое и его нужно повысить?",
    "What are Awareness and Popularity?": "Что такое известность и популярность?",
    "Is Wilson retroactive?": "Работает ли Wilson задним числом?",
    "Does that mean I should buy Wilson as soon as possible? If yes, then why don't you buy any Wilson in round 1 and 2?":
      "Значит ли это, что Wilson нужно покупать как можно раньше? Если да, почему он не покупается в раундах 1 и 2?",
    "What are Demand and Competition?": "Что такое спрос и конкуренция?",
    "How much should I spend for \"Design investment\" and \"Marketing investment\" when I create a new product? How do they affect the product?":
      "Сколько вкладывать в «инвестиции в дизайн» и «маркетинговые инвестиции» при создании продукта? Как они влияют на продукт?",
    "Should I buy Market-TA1?": "Стоит ли покупать Market-TA1?",
    "When should I buy Market-TA2?": "Когда покупать Market-TA2?",
    "What is the difference between Market-TA1 and Market-TA2?":
      "В чём разница между Market-TA1 и Market-TA2?",
    "I bought Market-TA2, but it does not set the optimal price for me.":
      "Я купил Market-TA2, но он не устанавливает оптимальную цену.",
    "Is there a workaround for Market-TA2? Waiting for RP takes too long.":
      "Есть ли обходной путь для Market-TA2? Ждать RP слишком долго.",
    "Why can I not sell all produced goods in the storage even after using Market-TA1 and Market-TA2?":
      "Почему я не могу продать все произведённые товары на складе даже после использования Market-TA1 и Market-TA2?",
    "How do I discard materials/products?": "Как списывать материалы и продукты?",
    "What is a dummy division?": "Что такое тестовое подразделение?",
    "Can I skip the Chemical division in round 2 and invest all funds in the Agriculture division?":
      "Можно ли пропустить химическое подразделение во втором раунде и вложить все средства в сельскохозяйственное?",

    "Create program": "Создать программу",
    "This page displays any programs that you are able to create. Writing the code for a program takes time, which can vary based on how complex the program is. If you are working on creating a program you can cancel at any time. Your progress will be saved and you can continue later.": "На этой странице показаны все программы, которые вы можете создать. Написание кода программы занимает время, которое зависит от её сложности. При создании программы вы можете отменить процесс в любой момент. Прогресс сохранится, и вы сможете продолжить позже.",
    "Resume focus": "Возобновить концентрацию",
    "Unlocks at hacking level:": "Открывается на уровне взлома:",
    "Unlocks at hacking level: ": "Открывается на уровне взлома: ",
    "Unlocks after you gain ": "Откроется после получения ещё ",
    " more hacking levels": " уровней взлома",
    "Current completion:": "Текущий прогресс:",
    "Current completion: ": "Текущий прогресс: ",
    "This virus is used to gain root access to a machine if enough ports are opened.": "Этот вирус используется для получения root-доступа к машине, если открыто достаточно портов.",
    "This program executes a brute force attack that opens SSH ports": "Эта программа выполняет атаку методом перебора, открывая порты SSH",
    "This program cracks open FTP ports": "Эта программа взламывает порты FTP",
    "This program opens SMTP ports by redirecting data": "Эта программа открывает порты SMTP путём перенаправления данных",
    "This virus opens up HTTP ports": "Этот вирус открывает порты HTTP",
    "This virus opens SQL ports": "Этот вирус открывает порты SQL",
    "This program allows you to use the scan-analyze command with a depth up to 5": "Эта программа позволяет использовать команду scan-analyze с глубиной до 5",
    "This program allows you to use the scan-analyze command with a depth up to 10": "Эта программа позволяет использовать команду scan-analyze с глубиной до 10",
    "This program is used to display hacking and Netscript-related information about servers": "Эта программа выводит информацию о взломе и параметры Netscript для серверов",
    "This program allows you to directly connect to other servers through the 'scan-analyze' command": "Эта программа позволяет напрямую подключаться к другим серверам через команду scan-analyze",
    "This program allows you to use the formulas API": "Эта программа позволяет использовать formulas API",
    "This program creates a portal to the BitNode Nexus (allows you to restart and switch BitNodes)": "Эта программа создаёт портал в BitNode Nexus (позволяет перезапустить и сменить BitNode)",
    "You can share free RAM of your home computer with your factions to get a bonus multiplier for reputation gain. Each time you share your free RAM, you get a boost for ": "Вы можете выделить свободное ОЗУ домашнего компьютера вашим фракциям, чтобы получить множитель бонуса к приросту репутации. Каждый раз при выделении ОЗУ вы получаете ускорение на ",
    "You can share free RAM of your home computer with your factions to get a bonus multiplier for reputation gain. Each time you share your free RAM, you get a boost for": "Вы можете выделить свободное ОЗУ домашнего компьютера вашим фракциям, чтобы получить множитель бонуса к приросту репутации. Каждый раз при выделении ОЗУ вы получаете ускорение на",
    " seconds. After that, you lose the boost and get back your shared RAM. You can share free RAM of other servers that you have admin rights on by using the ns.share() API.": " сек. После этого бонус спадает, и выделенное ОЗУ возвращается. Вы также можете выделять свободное ОЗУ других серверов с root-доступом с помощью API ns.share().",
    "seconds. After that, you lose the boost and get back your shared RAM. You can share free RAM of other servers that you have admin rights on by using the ns.share() API.": "сек. После этого бонус спадает, и выделенное ОЗУ возвращается. Вы также можете выделять свободное ОЗУ других серверов с root-доступом с помощью API ns.share().",
    "You can share free RAM of your home computer with your factions to get a bonus multiplier for reputation gain. Each time you share your free RAM, you get a boost for 10 seconds. After that, you lose the boost and get back your shared RAM. You can share free RAM of other servers that you have admin rights on by using the ns.share() API.": "Вы можете выделить свободное ОЗУ домашнего компьютера вашим фракциям, чтобы получить множитель бонуса к приросту репутации. Каждый раз при выделении ОЗУ вы получаете ускорение на 10 сек. После этого бонус спадает, и выделенное ОЗУ возвращается. Вы также можете выделять свободное ОЗУ других серверов с root-доступом с помощью API ns.share().",
    "Free RAM on home computer: ": "Свободное ОЗУ домашнего компьютера: ",
    "Free RAM on home computer:": "Свободное ОЗУ домашнего компьютера:",
    "Current bonus: ": "Текущий бонус: ",
    "Current bonus:": "Текущий бонус:",
    "Bonus with ": "Бонус при выделении ",
    "Bonus with": "Бонус при выделении",
    "\"You can order bigger cloud servers via scripts. We don't take custom orders in person.\"": "«Более мощные облачные серверы можно заказывать через скрипты. Индивидуальные заказы лично мы не принимаем.»",
    "You can order bigger cloud servers via scripts. We don't take custom orders in person.": "Более мощные облачные серверы можно заказывать через скрипты. Индивидуальные заказы лично мы не принимаем.",
    "Cloud Server - ": "облачный сервер — ",
    "Cloud Server - ": "облачный сервер — ",
    "Cloud Server -": "облачный сервер —",
    "\"Cores increase the effectiveness of grow() and weaken() on 'home'\"": "«Ядра повышают эффективность grow() и weaken() на сервере 'home'»",
    "Cores increase the effectiveness of grow() and weaken() on 'home'": "Ядра повышают эффективность grow() и weaken() на сервере 'home'",
    "Upgrade 'home' cores ": "Улучшить ядра 'home' ",
    "Upgrade 'home' cores ": "Улучшить ядра 'home' ",
    "Upgrade 'home' cores": "Улучшить ядра 'home'",
    "Upgrade 'home' RAM ": "Улучшить ОЗУ 'home' ",
    "Upgrade 'home' RAM ": "Улучшить ОЗУ 'home' ",
    "Upgrade 'home' RAM": "Улучшить ОЗУ 'home'",
    "- Max": "— Макс.",
    "- Max ": "— Макс. ",
    "Buy WSE Account - ": "Купить аккаунт WSE — ",
    "Buy WSE Account - ": "Купить аккаунт WSE — ",
    "Buy WSE Account -": "Купить аккаунт WSE —",
    "Buy Trade Information eXchange (TIX) API Access - ": "Купить доступ к API Trade Information eXchange (TIX) — ",
    "Buy Trade Information eXchange (TIX) API Access - ": "Купить доступ к API Trade Information eXchange (TIX) — ",
    "Buy Trade Information eXchange (TIX) API Access -": "Купить доступ к API Trade Information eXchange (TIX) —",
    "Buy 4S Market Data Access - ": "Купить доступ к данным рынка 4S — ",
    "Buy 4S Market Data Access - ": "Купить доступ к данным рынка 4S — ",
    "Buy 4S Market Data Access -": "Купить доступ к данным рынка 4S —",
    "Buy 4S Market Data TIX API Access - ": "Купить доступ к API данных рынка 4S — ",
    "Buy 4S Market Data TIX API Access - ": "Купить доступ к API данных рынка 4S — ",
    "Buy 4S Market Data TIX API Access -": "Купить доступ к API данных рынка 4S —",
    "4S Market Data UI Access ": "Доступ к данным рынка 4S через интерфейс ",
    "4S Market Data UI Access": "Доступ к данным рынка 4S через интерфейс",
    "TIX API Access ": "Доступ к TIX API ",
    "WSE Account ": "Аккаунт WSE ",
    "4S Market Data TIX API Access ": "Доступ к API данных рынка 4S ",
    "favor": "благосклонности",
    " favor": " благосклонности",
    "rep": "репутации",
    " rep": " репутации",
    "elapsed": "прошло",
    " elapsed": " прошло",
    "remaining": "осталось",
    " remaining": " осталось",
    // Augmentations screen & confirmation dialog
    "Install Augmentations": "Установить аугментации",
    "Sort in Order": "Сортировать по порядку",
    "Sort by Time of Acquirement": "Сортировать по времени получения",
    "No Augmentations have been installed yet": "Аугментации ещё не установлены",
    "No Augmentations have been purchased yet": "Аугментации ещё не куплены",
    "Backup Save ": "Сохранить резервную копию ",
    "(+1 favor to all factions)": "(+1 к расположению у всех фракций)",
    "Sorts the Augmentations alphabetically in numeral order": "Сортирует аугментации по алфавиту и номерам",
    "Sorts the Augmentations based on when you acquired them (same as default)": "Сортирует аугментации по времени их получения (по умолчанию)",
    "It's always a good idea to backup/export your save!": "Всегда полезно создать резервную копию или экспортировать сохранение!",
    "'I never asked for this'": "«Я об этом не просил»",
    "Installing will reset": "Установка сбросит:",
    "- money": "— деньги",
    "- skill / experience": "— навыки / опыт",
    "- every server except home": "— все серверы, кроме home",
    "- factions and reputation": "— фракции и репутацию",
    "- current work activity": "— текущую работу",
    "You will keep:": "Вы сохраните:",
    "- All scripts on home": "— все скрипты на home",
    "- home ram and cores": "— ОЗУ и ядра home",
    "It is recommended to install several Augmentations at once.": "Рекомендуется устанавливать несколько аугментаций за раз.",
    "Installing Augmentations lets you start over with the perks and benefits granted by all of the Augmentations you have ever installed. Also, you will keep any scripts and RAM/Core upgrades on your home computer (but you will lose all programs besides NUKE.exe)": "Установка аугментаций позволяет начать заново со всеми бонусами и преимуществами от когда-либо установленных вами аугментаций. Вы сохраните все скрипты и улучшения ОЗУ/ядер на домашнем компьютере (но потеряете все программы, кроме NUKE.exe)",

    // Script editor empty screen
    "Use ": "Используйте ",
    "Use": "Использовать",
    " in": " в",
    "the terminal to open files": "терминале для открытия файлов",

    // Documentation UI & NS API table
    "NS interface": "Интерфейс NS",
    "Collection of all functions passed to scripts": "Коллекция всех функций, передаваемых в скрипты",
    "Signature:": "Сигнатура:",
    "Remarks": "Примечания",
    "Basic usage example:": "Пример базового использования:",
    "Properties": "Свойства",
    "Property": "Свойство",
    "Modifiers": "Модификаторы",
    "Type": "Тип",
    "Description": "Описание",
    "Method": "Метод",
    "Methods": "Методы",
    "Parameters": "Параметры",
    "Parameter": "Параметр",
    "Returns": "Возвращает",
    "Returns:": "Возвращает:",
    "Arguments passed into the script.": "Аргументы, переданные в скрипт.",
    "These arguments can be accessed as a normal array by using the [] operator (args[0], args[1], etc...). Arguments can be string, number, or boolean. Use args.length to get the number of arguments that were passed into a script.": "К этим аргументам можно обращаться как к обычному массиву с помощью оператора [] (args[0], args[1] и т. д.). Аргументы могут быть строкой, числом или логическим значением. Используйте args.length, чтобы узнать количество аргументов, переданных в скрипт.",
    "These arguments can be accessed as a normal array by using the [] operator (args[0], args[1], etc...). Arguments can be string, number, or boolean. Use args.length to get the number of arguments that were passed to the script.": "К этим аргументам можно обращаться как к обычному массиву с помощью оператора [] (args[0], args[1] и т. д.). Аргументы могут быть строкой, числом или логическим значением. Используйте args.length, чтобы узнать количество аргументов, переданных в скрипт.",
    "Namespace for Bladeburner functions. Contains spoilers.": "Пространство имён для функций Bladeburner. Содержит спойлеры.",
    "Namespace for cloud functions.": "Пространство имён для облачных функций.",
    "Namespace for coding contract functions.": "Пространство имён для функций контрактов на программирование.",
    "Namespace for coding_contract functions.": "Пространство имён для функций контрактов на программирование.",
    "Namespace for corporation functions. Contains spoilers.": "Пространство имён для функций корпораций. Содержит спойлеры.",
    "Namespace for darknet functions. Contains spoilers.": "Пространство имён для функций даркнета. Содержит спойлеры.",
    "Namespace for formatting functions.": "Пространство имён для функций форматирования.",
    "Namespace for formulas functions.": "Пространство имён для функций формул.",
    "Namespace for gang functions. Contains spoilers.": "Пространство имён для функций банд. Содержит спойлеры.",
    "Namespace for Go functions.": "Пространство имён для функций Go.",
    "Namespace for grafting functions. Contains spoilers.": "Пространство имён для функций пересадки аугментаций (grafting). Содержит спойлеры.",
    "Namespace for hacknet functions. Some of this API contains spoilers.": "Пространство имён для функций hacknet. Часть этого API содержит спойлеры.",
    "Namespace for infiltration functions.": "Пространство имён для функций проникновения (infiltration).",
    "Dynamically import a script. Only scripts located on the same server can be imported. A dynamic import will not adjust RAM usage. This must be done manually with [ramOverride](./bitburner.ns.ramoverride.md)<!-- -->.": "Динамически импортировать скрипт. Можно импортировать только скрипты, расположенные на том же сервере. Динамический импорт не корректирует использование ОЗУ. Это необходимо делать вручную с помощью ramOverride.",
    "Dynamically import a script. Only scripts located on the same server can be imported. A dynamic import will not adjust RAM usage. This must be done manually with .": "Динамически импортировать скрипт. Можно импортировать только скрипты, расположенные на том же сервере. Динамический импорт не корректирует использование ОЗУ. Это необходимо делать вручную с помощью .",
    "Start another script on any server.": "Запустить другой скрипт на любом сервере.",
    "Terminates the current script immediately.": "Немедленно завершает текущий скрипт.",
    "Check if a file exists.": "Проверить существование файла.",
    "Parse command line flags.": "Разобрать флаги командной строки.",
    "Get the current BitNode multipliers.": "Получить текущие множители BitNode.",
    "Returns the amount of Faction favor required to be able to donate to a faction.": "Возвращает количество расположения во фракции, необходимое для совершения пожертвований.",
    "Get the metadata of a file.": "Получить метаданные файла.",
    "Get the RAM cost of a netscript function.": "Получить стоимость функции Netscript в ОЗУ.",
    "The base RAM cost per script thread can also be retrieved by using \"baseCost\" as argument to this function.": "Базовую стоимость ОЗУ на поток скрипта также можно получить, передав аргумент «baseCost» в эту функцию.",
    "The base RAM cost per script thread can also be retrieved by using `\"baseCost\"` as argument to this function.": "Базовую стоимость ОЗУ на поток скрипта также можно получить, передав аргумент `\"baseCost\"` в эту функцию.",
    "Get the execution time of a grow() call.": "Получить время выполнения вызова grow().",
    "Returns the player’s current hacking level.": "Возвращает текущий уровень взлома игрока.",
    "Returns the player's current hacking level.": "Возвращает текущий уровень взлома игрока.",
    "Get hacking related multipliers.": "Получить множители, связанные со взломом.",
    "Get hacknet related multipliers.": "Получить множители, связанные с Hacknet.",
    "Get the execution time of a hack() call.": "Получить время выполнения вызова hack().",
    "Returns a string with the hostname of the server that the script is running on.": "Возвращает строку с именем хоста сервера, на котором выполняется скрипт.",
    "Returns a string with the IP address of the server that the script is running on.": "Возвращает строку с IP-адресом сервера, на котором выполняется скрипт.",
    "Get information about the sources of income for this run.": "Получить информацию об источниках дохода за текущий цикл.",
    "Get information about the player.": "Получить информацию об игроке.",
    "Get all data on a port.": "Получить все данные из сетевого порта.",
    "Get an array of recently killed scripts across all servers.": "Получить массив недавно завершённых скриптов со всех серверов.",
    "Get information about resets.": "Получить информацию о сбросах.",
    "Get general info about a running script.": "Получить общую информацию о работающем скрипте.",
    "Get the exp gain of a script.": "Получить прирост опыта от скрипта.",
    "Get the income of a script.": "Получить доход от скрипта.",
    "Get all the logs of a script.": "Получить все журналы скрипта.",
    "Returns the current script name.": "Возвращает имя текущего скрипта.",
    "Get the ram cost of a script.": "Получить стоимость скрипта в ОЗУ.",
    "Returns data of a server.": "Возвращает данные сервера.",
    "If the server is a darknet server, it will also contain the \"isOnline\" field. If the darknet server has recently gone offline, the returned object will be a dummy server object with `isOnline: false`<!-- -->.": "Если сервер принадлежит даркнету, объект также содержит поле «isOnline». Если сервер даркнета недавно отключился, возвращённый объект будет фиктивным объектом сервера со значением `isOnline: false`<!-- -->.",
    "If the server is a darknet server, it will also contain the \"isOnline\" field. If the darknet server has recently gone offline, the returned object will be a dummy server object with isOnline: false.": "Если сервер принадлежит даркнету, объект также содержит поле «isOnline». Если сервер даркнета недавно отключился, возвращённый объект будет фиктивным объектом сервера со значением isOnline: false.",
    "If the server is a darknet server, it will also contain the \"isOnline\" field. If the darknet server has recently gone offline, the returned object will be a dummy server object with ": "Если сервер принадлежит даркнету, объект также содержит поле «isOnline». Если сервер даркнета недавно отключился, возвращённый объект будет фиктивным объектом сервера со значением ",
    "Get the base security level of a server.": "Получить базовый уровень защиты сервера.",
    "Get a server growth parameter.": "Получить параметр роста сервера.",
    "Get the maximum money available on a server.": "Получить максимальную сумму денег, доступную на сервере.",
    "Get the maximum amount of RAM on a server.": "Получить максимальный объём ОЗУ на сервере.",
    "Returns the minimum security level of the target server.": "Возвращает минимальный уровень защиты целевого сервера.",
    "Get money available on a server.": "Получить текущую сумму денег на сервере.",
    "Returns the number of open ports required to successfully run NUKE.exe on the specified server.": "Возвращает количество открытых портов, необходимое для успешного запуска NUKE.exe на указанном сервере.",
    "Returns the required hacking level of the target server.": "Возвращает требуемый уровень взлома для целевого сервера.",
    "Get server security level.": "Получить текущий уровень защиты сервера.",
    "Get the used RAM on a server. This includes ram used by running scripts as well as blocked ram on darknet servers.": "Получить занятый объём ОЗУ на сервере. Сюда входит память, занятая работающими скриптами, а также заблокированное ОЗУ на серверах даркнета.",
    "Share power has a multiplicative effect on rep/second while doing hacking work for a faction. If you do non-hacking work, share power still increases the reputation gain rate, but the effect is non-linear.\n\nShare power increases incrementally for every thread of share running on your server network, but at a sharply decreasing rate.": "Мощность разделения ресурсов оказывает мультипликативный эффект на прирост репутации в секунду при выполнении хакерской работы для фракции. Для нехакерской работы мощность разделения по-прежнему увеличивает скорость получения репутации, но зависимость нелинейна.\n\nМощность разделения увеличивается с каждым потоком команды share в сети серверов, но с резко убывающей эффективностью.",
    "Share power has a multiplicative effect on rep/second while doing hacking work for a faction. If you do non-hacking work, share power still increases the reputation gain rate, but the effect is non-linear.": "Мощность разделения ресурсов оказывает мультипликативный эффект на прирост репутации в секунду при выполнении хакерской работы для фракции. Для нехакерской работы мощность разделения по-прежнему увеличивает скорость получения репутации, но зависимость нелинейна.",
    "Share power increases incrementally for every thread of share running on your server network, but at a sharply decreasing rate.": "Мощность разделения увеличивается с каждым потоком команды share в сети серверов, но с резко убывающей эффективностью.",
    "Get the exp gain of all scripts.": "Получить суммарный прирост опыта со всех скриптов.",
    "Get the income of all scripts.": "Получить суммарный доход со всех скриптов.",
    "Get the execution time of a weaken() call.": "Получить время выполнения вызова weaken().",
    "Spoof money in a server's bank account, increasing the amount available.": "Сфальсифицировать средства на банковском счёте сервера, увеличивая доступную сумму.",
    "Calculate the number of grow threads needed for a given multiplicative growth factor.": "Рассчитать количество потоков grow, необходимое для достижения заданного коэффициента роста.",
    "Calculate the security increase for a number of grow threads.": "Рассчитать повышение уровня защиты при заданном количестве потоков grow.",
    "Steal a server's money.": "Украсть деньги с сервера.",
    "Steal a server.": "Украсть деньги с сервера.",
    "Get the part of money stolen with a single thread.": "Получить долю денег, похищаемую одним потоком.",
    "Get the part of money stolen with single thread.": "Получить долю денег, похищаемую одним потоком.",
    "Get the chance of successfully hacking a server.": "Получить вероятность успешного взлома сервера.",
    "Get the security increase for a number of threads.": "Рассчитать повышение уровня защиты при заданном количестве потоков hack.",
    "Calculate the decimal number of threads needed to hack a specified amount of money from a target host.": "Рассчитать дробное число потоков, необходимое для взлома заданной суммы денег с целевого сервера.",
    "Check if you have root access on a server.": "Проверить наличие root-доступа к серверу.",
    "Returns whether the player has access to the darkweb.": "Возвращает наличие у игрока доступа к дарквебу (TOR).",
    "Runs HTTPWorm.exe on a server.": "Запустить программу HTTPWorm.exe на сервере.",
    "Checks the status of the logging for the given NS function.": "Проверить статус записи в журнал для указанной функции NS.",
    "Checks the status of the logging for given NS function.": "Проверить статус записи в журнал для указанной функции NS.",
    "Check if a script is running.": "Проверить, работает ли скрипт.",
    "Terminate the script with the provided PID.": "Завершить скрипт с указанным PID.",
    "Terminate the script(s) with the provided filename, host, and script arguments.": "Завершить скрипт(ы) с указанным именем файла, хостом и аргументами.",
    "Terminate all scripts on a server.": "Завершить все скрипты на сервере.",
    "List files on a server.": "Вывести список файлов на сервере.",
    "Move a file on the target server.": "Переместить файл на целевом сервере.",
    "Listen for a port write.": "Ожидать записи данных в сетевой порт.",
    "Runs NUKE.exe on a server.": "Запустить программу NUKE.exe на сервере.",
    "Get a copy of the data from a port without popping it.": "Получить копию данных из порта без их извлечения.",
    "Prints one or more values or variables to the script’s logs.": "Выводит одно или несколько значений либо переменных в журнал скрипта.",
    "Prints one or more values or variables to the script's logs.": "Выводит одно или несколько значений либо переменных в журнал скрипта.",
    "Prints a formatted string to the script’s logs.": "Выводит форматированную строку в журнал скрипта.",
    "Prints a formatted string to the script's logs.": "Выводит форматированную строку в журнал скрипта.",
    "Prints a ReactNode to the script logs.": "Выводит элемент ReactNode в журнал скрипта.",
    "Prompt the player with an input modal.": "Показать игроку модальное окно ввода.",
    "List running scripts on a server.": "Вывести список работающих скриптов на сервере.",
    "Change the current static RAM allocation of the script.": "Изменить статически выделенный объём ОЗУ для скрипта.",
    "Read content of a file.": "Прочитать содержимое файла.",
    "Read data from a port.": "Прочитать данные из сетевого порта.",
    "Runs relaySMTP.exe on a server.": "Запустить программу relaySMTP.exe на сервере.",
    "Delete a file.": "Удалить файл.",
    "Start another script on the current server.": "Запустить другой скрипт на текущем сервере.",
    "Get the list of hostnames or IP addresses connected to a server. This function does not return darknet servers (e.g., darkweb). Use [probe](./bitburner.darknet.probe.md) if you want to list darknet servers.": "Получить список имён хостов или IP-адресов, подключённых к серверу. Эта функция не возвращает серверы даркнета (например darkweb). Используйте [probe](./bitburner.darknet.probe.md), если хотите получить список серверов даркнета.",
    "Get the list of hostnames or IP addresses connected to a server. This function does not return darknet servers (e.g., darkweb). Use  if you want to list darknet servers.": "Получить список имён хостов или IP-адресов, подключённых к серверу. Эта функция не возвращает серверы даркнета (например darkweb). Используйте probe, если хотите получить список серверов даркнета.",
    "Copy file between servers.": "Скопировать файлы между серверами.",
    "Kill all scripts with a filename.": "Завершить все скрипты с указанным именем файла.",
    "Kill all scripts with filename.": "Завершить все скрипты с указанным именем файла.",
    "Check if any script with a filename is running.": "Проверить, запущен ли какой-либо скрипт с указанным именем файла.",
    "Check if any script with filename is running.": "Проверить, запущен ли какой-либо скрипт с указанным именем файла.",
    "Returns the currently running script.": "Возвращает информацию о текущем работающем скрипте.",
    "Returns a boolean denoting whether or not the specified server exists.": "Возвращает логическое значение, указывающее, существует ли указанный сервер.",
    "Share the server's ram with your factions to increase the reputation gain rate of faction work. This boost is applied to all faction work of all factions.": "Выделить свободное ОЗУ сервера вашим фракциям для увеличения скорости получения репутации за фракционную работу. Этот бонус распространяется на работу во всех фракциях.",
    "Share the server's ram with your factions to increase the rep gain rate of faction work. This boost is applied to all faction work of all factions.": "Выделить свободное ОЗУ сервера вашим фракциям для увеличения скорости получения репутации за фракционную работу. Этот бонус распространяется на работу во всех фракциях.",
    "Suspends the script for n milliseconds.": "Приостанавливает выполнение скрипта на n миллисекунд.",
    "Suspends the script for n ms.": "Приостанавливает выполнение скрипта на n миллисекунд.",
    "Terminate current script and start another in a defined number of milliseconds.": "Завершить текущий скрипт и запустить другой через указанное число миллисекунд.",
    "Terminate current script and start another in a defined number of ms.": "Завершить текущий скрипт и запустить другой через указанное число миллисекунд.",
    "Format a string.": "Форматировать строку.",
    "Runs SQLInject.exe on a server.": "Запустить программу SQLInject.exe на сервере.",
    "Queue a toast (bottom-right notification).": "Отобразить всплывающее уведомление (в правом нижнем углу).",
    "Prints one or more values or variables to the Terminal.": "Выводит одно или несколько значений либо переменных в терминал.",
    "Prints a raw value or a variable to the Terminal.": "Выводит форматированную строку или переменную в терминал.",
    "Prints a ReactNode to the terminal.": "Выводит элемент ReactNode в терминал.",
    "Attempt to write to a port.": "Попытаться записать данные в сетевой порт.",
    "Format a string with an array of arguments.": "Форматировать строку с передачей массива аргументов.",
    "Reduce a server's security level.": "Снизить уровень защиты сервера (weaken).",
    "Reduce the security level of a server (weaken).": "Снизить уровень защиты сервера (weaken).",
    "Predict the effect of weaken.": "Рассчитать прогнозируемый эффект от weaken.",
    "Download a file from the internet.": "Скачать файл из интернета.",
    "Write data to a file.": "Записать данные в файл.",
    "Write data to a port.": "Записать данные в сетевой порт.",
  });

  const protectedSelector =
    "script,style,noscript,textarea,code,pre code,[contenteditable=\"true\"],.monaco-editor,.ace_editor,.terminal-input,#terminal,.textfield,.code";

  // Markdown rendered by the game can add insignificant whitespace around
  // links and inline elements. Keep a normalized lookup for full sentences so
  // those sentences are translated as a unit instead of being assembled from
  // dangerous fragments such as "and" or " of ".
  const normalizeDocumentationText = (value) => value.replace(/\s+/g, " ").trim();
  const normalizedTranslations = new Map(
    Object.entries(translations)
      .filter(([source]) => source.length >= 12 && /\s/.test(source))
      .map(([source, target]) => [normalizeDocumentationText(source), target]),
  );

  // Documentation text is rendered as many separate text nodes around links
  // and inline-code spans. Fragment-level dynamic replacements such as
  // "You can go to the" or "Before we write the" therefore create broken
  // hybrids ("... page", "... here are some things..."). The complete-page
  // documentation sidecar handles those blocks; keep the old dynamic fallback
  // for the rest of the UI only.
  function isDocumentationTextNode(node) {
    const element = node && (node.nodeType === Node.TEXT_NODE ? node.parentElement : node);
    if (!element) return false;
    if (element.closest && element.closest("#untyped-react-markdown-root, .markdown, [class*='markdown'], [class*='doc'], [class*='Doc']")) return true;
    const heading = document.querySelector("h1, h2");
    if (!heading) return false;
    const semanticRoot = heading.closest("main,[role='main']");
    if (semanticRoot) return semanticRoot.contains(element);
    let root = heading.parentElement;
    for (let index = 0; root && index < 8; index += 1) {
      if (root.contains(element)) return true;
      root = root.parentElement;
    }
    return false;
  }

  // Terminal commands and their arguments stay in the original form. Only
  // the explanatory text from `help` output is translated below.
  const terminalHelpTranslations = Object.freeze({
    "Command /help not found.": "Команда /help не найдена.",
    "Type 'help name' to learn more about the command":
      "Введите «help name», чтобы узнать больше о команде",
    "Create or display Terminal aliases": "Создать или показать псевдонимы терминала",
    "Get information about the current machine": "Получить сведения о текущей машине",
    "Install a backdoor on the current machine": "Установить бэкдор на текущую машину",
    "Purchase a program through the Dark Web": "Купить программу через Тёмную сеть",
    "Display the contents of a file": "Показать содержимое файла",
    "Change to a new directory": "Перейти в новый каталог",
    "Display changelog": "Показать список изменений",
    "Print a script's logs to Terminal": "Вывести журналы скрипта в терминал",
    "Clear all text on the terminal": "Очистить весь текст в терминале",
    "See 'clear' command": "См. команду «clear»",
    "Connects to a remote server": "Подключиться к удалённому серверу",
    "Copy a file": "Скопировать файл",
    "Downloads scripts or text files to your computer":
      "Скачать скрипты или текстовые файлы на компьютер",
    "Upload scripts or text files from your computer":
      "Загрузить скрипты или текстовые файлы с компьютера",
    "Evaluate a mathematical expression": "Вычислить математическое выражение",
    "Check the machine's memory (RAM) usage": "Проверить использование памяти (ОЗУ) машины",
    "Search for PATTERN (string/regular expression) in each FILE and print results to terminal":
      "Найти ШАБЛОН (строку/регулярное выражение) в каждом ФАЙЛЕ и вывести результаты в терминал",
    "Spoof money in a servers bank account, increasing the amount available.":
      "Подделать деньги на банковском счёте сервера, увеличив доступную сумму.",
    "Hack the current machine": "Взломать текущую машину",
    "Display this help text, or the help text for a command":
      "Показать этот текст справки или справку по команде",
    "Display the terminal history": "Показать историю терминала",
    "Connect to home computer": "Подключиться к домашнему компьютеру",
    "Displays the hostname of the machine": "Показать имя хоста машины",
    "Displays the IP address of the machine": "Показать IP-адрес машины",
    "Stops the specified script on the current server":
      "Остановить указанный скрипт на текущем сервере",
    "Stops all running scripts on the current machine":
      "Остановить все запущенные скрипты на текущей машине",
    "Displays all files on the machine": "Показать все файлы на машине",
    "Displays the number of CPU cores on the machine":
      "Показать количество ядер процессора на машине",
    "Displays the amount of RAM required to run the script":
      "Показать объём ОЗУ, необходимый для запуска скрипта",
    "Move/rename a text or script file": "Переместить или переименовать текстовый файл или скрипт",
    "Text editor - Open up and edit one or more scripts or text files":
      "Текстовый редактор — открыть и изменить один или несколько скриптов или текстовых файлов",
    "Display all scripts that are currently running": "Показать все запущенные скрипты",
    "Delete a file from the server": "Удалить файл с сервера",
    "Run a program, a script, or a coding contract":
      "Запустить программу, скрипт или контракт на программирование",
    "Prints all immediately-available network connections":
      "Показать все доступные непосредственно сетевые подключения",
    "Prints info for all servers up to d nodes away":
      "Показать сведения обо всех серверах на расстоянии до d узлов",
    "Copies scripts, text files, or .lit files to a destination server":
      "Скопировать скрипты, текстовые файлы или файлы .lit на сервер назначения",
    "Shows whether you have root access on this computer":
      "Показать, есть ли у вас root-доступ на этом компьютере",
    "Displays dynamic logs for the specified script":
      "Показывать динамический журнал указанного скрипта",
    "Displays all running scripts and their RAM usage":
      "Показать все запущенные скрипты и их использование ОЗУ",
    "Deletes the specified alias": "Удалить указанный псевдоним",
    "Reduce the security of the current machine": "Снизить уровень защиты текущей машины",
    "Retrieves code/text from a web server": "Получить код или текст с веб-сервера",
    "Text editor - Open up and edit one or more scripts or text files in vim mode":
      "Текстовый редактор — открыть и изменить один или несколько скриптов или текстовых файлов в режиме vim",
    "Open up and edit one or more scripts or text files in vim mode":
      "Открыть и изменить один или несколько скриптов или текстовых файлов в режиме vim",
  });

  function isProtected(node) {
    const parent = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    if (parent == null) return false;
    if (parent.closest(protectedSelector) != null) return true;
    const link = parent.closest("a");
    if (link && (link.getAttribute("href") || "").includes("bitburner.")) return true;
    return false;
  }

  function translateDynamicText(value) {
    const applyForJob = /^Apply for ([\s\S]+) Job$/.exec(value);
    if (applyForJob) {
      return `Подать заявку на должность ${translations[applyForJob[1]] || applyForJob[1]}`;
    }

    const fileRequirement = /^Have the file '([\s\S]+)'$/.exec(value);
    if (fileRequirement) {
      return `Есть файл «${fileRequirement[1]}»`;
    }

    const savedMessage = /^This message was saved as ([\s\S]+?) onto your home computer\.$/.exec(value);
    if (savedMessage) {
      return `Это сообщение сохранено как ${savedMessage[1]} на домашнем компьютере.`;
    }

    const jumperMessage =
      /^You must learn to walk before you can run\. And you must run before you can fly\. Look for (The Black Hand)\.([\s\S]*)$/.exec(value);
    if (jumperMessage) {
      const factionName = translations[jumperMessage[1]] || jumperMessage[1];
      return `Сначала научись ходить, прежде чем бегать. А прежде чем летать, нужно научиться бегать. Ищи ${factionName}.${jumperMessage[2]}`;
    }

    let translated = value
      .replace(/\bmilliseconds?\b/g, "мс")
      .replace(/\bseconds?\b/g, "сек")
      .replace(/\bminutes?\b/g, "мин")
      .replace(/\bhours?\b/g, "ч")
      .replace(/\bdays?\b/g, "дн")
      .replace(/(\d+(?:[.,]\d+)?(?:[kmbtepqQsSoOn])?)\s*\bfavor\b/gi, "$1 благосклонности")
      .replace(/(\d+(?:[.,]\d+)?(?:[kmbtepqQsSoOn])?)\s*\brep\b/gi, "$1 репутации")
      .replace(/(\d+(?:[.,]\d+)?\s*(?:дн|ч|мин|сек|мс|days?|hours?|minutes?|seconds?|milliseconds?))\s*\belapsed\b/gi, "$1 прошло")
      .replace(/(\d+(?:[.,]\d+)?\s*(?:дн|ч|мин|сек|мс|days?|hours?|minutes?|seconds?|milliseconds?))\s*\bremaining\b/gi, "$1 осталось")
      .replace(/\belapsed\b/gi, "прошло")
      .replace(/\bremaining\b/gi, "осталось")
      .replace(/(\b\d+\b)\s+of\s+(\b\d+\b)/gi, "$1 из $2")
      .replace(/\s*-\s*Volatility:\s*/gi, " — Волатильность: ")
      .replace(/\s*-\s*Price Forecast:\s*/gi, " — Прогноз цены: ")
      .replace(/^Purchase\s+([\d.,]+(?:[KMGTPEB]i?B)?)\s+Cloud Server\s*[-—]\s*$/i, "Купить облачный сервер $1 — ");
    for (const source of Object.keys(translations).sort((a, b) => b.length - a.length)) {
      if (source.length < 4 || (!/\s/.test(source) && !/[.:!?]/.test(source))) continue;
      if (translated.includes(source)) {
        const idx = translated.indexOf(source);
        const charBefore = idx > 0 ? translated[idx - 1] : " ";
        const charAfter = idx + source.length < translated.length ? translated[idx + source.length] : " ";
        if (/[a-zA-Z]/.test(charBefore) || /[a-zA-Z]/.test(charAfter)) continue;
        translated = translated.split(source).join(translations[source]);
      }
    }
    return translated;
  }

  function translateTerminalHelp() {
    const terminal = document.querySelector("#terminal");
    if (!terminal) return;

    const walker = document.createTreeWalker(terminal, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let current;
    while ((current = walker.nextNode())) nodes.push(current);

    for (const node of nodes) {
      let translated = node.nodeValue || "";
      for (const source of Object.keys(terminalHelpTranslations).sort((a, b) => b.length - a.length)) {
        if (translated.includes(source)) {
          translated = translated.split(source).join(terminalHelpTranslations[source]);
        }
      }
      if (translated !== node.nodeValue) node.nodeValue = translated;
    }
  }

  function translateText(value, contextNode) {
    const match = /^(\s*)([\s\S]*?)(\s*)$/.exec(value);
    if (!match || match[2] === "") return value;
    const normalized = normalizeDocumentationText(match[2]);
    const translated = translations[value] ?? translations[match[2]] ?? normalizedTranslations.get(normalized);
    // Long prose is frequently split around Markdown links. If there is no
    // complete-sentence translation, leave it intact rather than producing
    // mixed Russian/English sentences from generic UI fragments.
    const isDoc = isDocumentationTextNode(contextNode);
    const isLongProse = isDoc && match[2].length >= 48 && /\s/.test(match[2]);
    const translatedValue =
      translated === undefined && isLongProse
        ? match[2]
        : translated === undefined && isDoc
          ? match[2]
          : translated === undefined
            ? translateDynamicText(match[2])
            : translated;
    return translatedValue === match[2] ? value : match[1] + translatedValue + match[3];
  }

  function translateDocumentationHeadings() {
    for (const heading of document.querySelectorAll("h1,h2,h3,h4,h5,h6")) {
      if (isProtected(heading)) continue;
      const source = normalizeDocumentationText(heading.textContent || "");
      const translated = translations[source] ?? normalizedTranslations.get(source);
      if (translated && translated !== heading.textContent) heading.textContent = translated;
    }
  }

  function translateAttribute(element, attribute) {
    const value = element.getAttribute(attribute);
    if (value == null) return;
    const translated = translateText(value, element);
    if (translated !== value) element.setAttribute(attribute, translated);
  }

  function scan(root) {
    if (root == null) return;

    if (root.nodeType === Node.TEXT_NODE) {
      if (!isProtected(root)) {
        const translated = translateText(root.nodeValue || "", root);
        if (translated !== root.nodeValue) root.nodeValue = translated;
      }
      return;
    }

    if (root.nodeType !== Node.ELEMENT_NODE || isProtected(root)) return;

    for (const attribute of ["title", "aria-label", "placeholder", "alt"]) {
      translateAttribute(root, attribute);
    }

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let current;
    while ((current = walker.nextNode())) textNodes.push(current);
    for (const node of textNodes) {
      if (!isProtected(node)) {
        const translated = translateText(node.nodeValue || "", node);
        if (translated !== node.nodeValue) node.nodeValue = translated;
      }
    }

    for (const element of root.querySelectorAll("[title], [aria-label], [placeholder], [alt]")) {
      if (isProtected(element)) continue;
      for (const attribute of ["title", "aria-label", "placeholder", "alt"]) {
        translateAttribute(element, attribute);
      }
    }
  }

  // The terminal is intentionally protected so commands and code stay intact.
  // Add the translator credit only to the game's own version banner, never to
  // user scripts, commands, filenames, server names, or terminal output.
  function annotateTerminalVersion() {
    const terminal = document.querySelector("#terminal");
    if (!terminal) return;

    const walker = document.createTreeWalker(terminal, NodeFilter.SHOW_TEXT);
    const versionPattern = /^\s*Bitburner v\d+\.\d+\.\d+\s+\([^\r\n)]+\)\s*$/;
    const nodes = [];
    let current;
    while ((current = walker.nextNode())) nodes.push(current);

    for (const node of nodes) {
      const value = node.nodeValue || "";
      if (versionPattern.test(value)) {
        const match = /^(\s*)([\s\S]*?)(\s*)$/.exec(value);
        node.nodeValue = `${match[1]}${match[2]} — RU by memasevich${match[3]}`;
      }
    }
  }

  function start() {
    const titleSuffix = " — RU by memasevich";
    const ensureTitle = () => {
      if (document.title && !/RU by memasevich/i.test(document.title)) {
        document.title += titleSuffix;
      }
    };

    // The game bundle can rewrite document.title after this layer starts.
    // Re-apply the credit so the Electron window title keeps the RU marker.
    ensureTitle();
    window.setInterval(ensureTitle, 500);
    scan(document.body);
    translateDocumentationHeadings();
    annotateTerminalVersion();
    translateTerminalHelp();
    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === "characterData") {
          scan(record.target);
        } else {
          for (const node of record.addedNodes) scan(node);
        }
      }
      translateDocumentationHeadings();
      annotateTerminalVersion();
      translateTerminalHelp();
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    window.BitburnerRussianTranslation = { version: "0.1.0", translations };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
