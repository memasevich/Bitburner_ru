# Автодополнение

Терминал BitBurner поддерживает автодополнение по клавише Tab: после ввода команды нажатие Tab предлагает варианты аргументов. Это поведение можно настроить для своих скриптов.

Для этого используется экспортируемая функция с именем "autocomplete", размещённая _за пределами_ main, в базовой области видимости скрипта.

Эта функция должна возвращать массив, элементы которого образуют варианты автодополнения.

Простой пример полноценного скрипта:

```javascript
/**
 * @param {AutocompleteData} data - context about the game, useful when autocompleting
 * @param {string[]} args - current arguments, not including "run script.js"
 * @returns {string[]} - the array of possible autocomplete options
 */
export function autocomplete(data, args) {
  return ["argument0", "argument1", "argument2"];
}

/** @param {NS} ns */
export function main(ns) {
  const args = ns.args;
  ns.tprint(args[0], args[1], args[2]);
}
```

Если запустить этот скрипт из терминала командой `run script.js` или `./script.js` и нажать Tab, будут предложены варианты "argument0", "argument1" и "argument2".

## AutocompleteData

Чтобы сделать эту возможность полезнее, функции автодополнения передаётся объект [AutocompleteData](../../../../../markdown/bitburner.autocompletedata.md), содержащий часто используемую информацию о скриптах, например имена серверов и названия файлов.

Объект AutocompleteData имеет следующие свойства:

```javascript
  {
    command:    // The command being run, as seen on the terminal.
    enums:      // The ns.enums object with various in-game strings.
    filename:   // The name of the script file containing the autocomplete function.
    hostname:   // The name of the host server the script would be running on.
    processes:  // List of all processes running on the current server.
    servers:    // List of all servers in the game. Some servers are hidden until you satisfy their requirements. This array does not contain those servers if you do not satisfy their requirements.
    txts:       // List of all text files on the current server.
    scripts:    // List of all scripts on the current server.
    flags:      // A function similar to ns.flags(). Calling this function adds all the flags as autocomplete arguments.
  }
```

Ниже приведён более полный пример, использующий и возвращающий информацию из объекта AutocompleteData.

```javascript
/**
 * @param {AutocompleteData} data - context about the game, useful when autocompleting
 * @param {string[]} args - current arguments, not including "run script.js"
 * @returns {string[]} - the array of possible autocomplete options
 */
export function autocomplete(data, args) {
  const scripts = data.scripts;
  const servers = data.servers;

  const gymTypesObject = data.enums.GymType; // The data.enums holds the enum information as objects.
  const gymTypes = Object.values(gymTypesObject); // We are only interested in the string values from the enums object.

  return [...scripts, ...servers, ...gymTypes]; // Offer a list of all servers, all scripts on the current server, and gym jobs ("str", "agi" etc) as autocomplete options.
}
```

## args

Массив args также передаётся функции автодополнения вторым параметром. Как и ns.args, передаваемый в `main` обычных скриптов, этот массив содержит аргументы, уже введённые в терминал.

Это можно использовать, чтобы удалять уже переданные аргументы из предложений автодополнения.

Например:

```javascript
/**
 * @param {AutocompleteData} data - context about the game, useful when autocompleting
 * @param {string[]} args - current arguments, not including "run script.js"
 * @returns {string[]} - the array of possible autocomplete options
 */
export function autocomplete(data, args) {
  const servers = data.servers;
  const serversWithArgsRemoved = servers.filter((server) => !args.includes(server));

  return serversWithArgsRemoved;
}
```

В этом примере при вводе `run script.js` и нажатии Tab сначала будет предложен каждый сервер. После добавления в аргументы "n00dles" и повторного нажатия Tab "n00dles" больше не будет предлагаться при последующих вызовах автодополнения.

## data.flags

Это функция, работающая почти так же, как `ns.flags()`. Единственное отличие состоит в том, что она допускает неизвестные параметры. Например:

```js
export function autocomplete(data, args) {
  const parsedFlags = data.flags([["foo", true]]);
  return [];
}

/** @param {NS} ns */
export async function main(ns) {
  const parsedFlags = ns.flags([["foo", true]]);
}
```

Если ввести в терминале `run a.js --f` и нажать Tab, значение `parsedFlags` в `autocomplete` будет равно `{_: ["--f"], foo: true}`.

- `f` не определён в схеме, поэтому он добавляется в `_`.
- В команде не указан `foo`, поэтому `foo` получает значение по умолчанию.

Если ввести `run a.js --f` и нажать Enter, будет выброшена ошибка:

```
ArgError: unknown or unexpected option: --f
```

Это происходит потому, что `f` не определён в схеме, а `ns.flags` не допускает неизвестные параметры.

# Примечания

- Функция автодополнения в файле вызывается каждый раз после нажатия клавиши Tab вслед за `run file.js` или `./file.js` в терминале.
- Функция автодополнения отделена от `main` и не получает контекст `ns` в качестве параметра. Поэтому в функциях автодополнения не будут работать игровые команды `ns`.
- Если возвращён массив из нескольких элементов, отображаются несколько вариантов. Если возвращён массив из одного элемента, этот элемент автоматически подставляется в терминал. Это удобно, например, для аргумента запуска "--tail".
