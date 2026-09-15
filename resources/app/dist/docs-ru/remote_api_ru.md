# Удалённый API

Bitburner может подключаться к WebSocket-серверу, после чего этот сервер получает возможность читать и записывать данные Bitburner через ряд API. Чаще всего эту возможность используют для синхронизации файлов между Bitburner и внешней системой. С помощью инструмента Remote API можно писать скрипты в любом текстовом редакторе и синхронизировать их с Bitburner.

Нужно сделать всего 2 вещи:

- Запустить инструмент Remote API.
- В Bitburner открыть «Параметры» -> Remote API. Указать `hostname` и `port`, затем нажать «Connect».

## Инструменты сообщества

Все эти инструменты умеют синхронизировать скрипты с Bitburner и транспилировать TypeScript/JSX в JavaScript. Учтите, что Bitburner изначально поддерживает TypeScript/JSX.

Ссылки:

- [typescript-template](https://github.com/bitburner-official/typescript-template): шаблон для синхронизации TypeScript/JavaScript с компьютера с игрой.
- [viteburner](https://github.com/Tanimodori/viteburner): инструменты-демоны Bitburner на базе vite для преобразования скриптов, синхронизации файлов, мониторинга RAM и многого другого.
- [bb-external-editor](https://github.com/shyguy1412/bb-external-editor): использует esbuild для транспиляции и сборки скриптов. Поддерживает JS, TS и React, а также импорт любой npm-библиотеки, совместимой с браузером.
- [BitburnerGoFilesync](https://github.com/CTNOriginals/BitburnerGoFilesync): отдельный двоичный CLI-инструмент, которому не нужны настройка или сторонние библиотеки. Он специально сделан максимально простым и готовым к работе сразу после запуска.

У `typescript-template` и `BitburnerGoFilesync` небольшой набор параметров и возможностей — это сделано намеренно, чтобы сохранить простоту.
У `viteburner` и `bb-external-editor` возможностей больше, поэтому они могут дать дополнительный контроль в конкретных сценариях.

## Советы по устранению неполадок

- Попробуйте обновить инструмент и перезапустить его. Посмотрите сообщения об ошибках в терминале, чтобы понять, что пошло не так.
- При выключении компьютера или переходе в спящий режим соединение между Bitburner и инструментом закрывается. Подключитесь снова.
- Некоторые внешние программы или расширения браузера могут мешать соединению. Например, антивирусы и расширения для блокировки рекламы могут блокировать WebSocket-соединение.
- Некоторые инструменты поддерживают функцию, которую обычно называют «зеркалированием». Перед использованием внимательно прочитайте инструкции. Эта функция обеспечивает двустороннюю синхронизацию, но при неправильной настройке может перезаписать скрипты или другие файлы _на вашем компьютере_.
- Если нужна дополнительная помощь, задайте вопрос на канале [external-editors](https://discord.com/channels/415207508303544321/923428435618058311).

## Как это работает

![Схема последовательности Remote API](../../../images/remote-file-api-sequence-diagram.svg)

## Спецификация API

Все API используют формат входных и выходных данных, похожий на протокол JSON RPC 2.0.

Входные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "method": string,
            "params": any
        }

Выходные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "result": any,
            "error": any
        }

### pushFile

Создать или обновить файл.

Входные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "method": "pushFile",
            "params": {
                "filename": string,
                "content": string,
                "server": string
            }
        }

Выходные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "result": "OK"
        }

### getFile

Прочитать файл и его содержимое.

Входные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "method": "getFile",
            "params": {
                "filename": string,
                "server": string
            }
        }

Выходные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "result": string
        }

### getFileMetadata

Прочитать метаданные файла.

Входные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "method": "getFileMetadata",
            "params": {
                "filename": string,
                "server": string
            }
        }

Выходные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "result": {
                "filename": string,
                "atime": string,
                "btime": string,
                "mtime": string
            }
        }

### deleteFile

Удалить файл.

Входные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "method": "deleteFile",
            "params": {
                "filename": string,
                "server": string
            }
        }

Выходные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "result": "OK"
        }

### getFileNames

Получить список имён всех файлов на сервере.

Входные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "method": "getFileNames",
            "params": {
                "server": string
            }
        }

Выходные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "result": string[]
        }

### getAllFiles

Получить содержимое всех файлов на сервере.

Входные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "method": "getAllFiles",
            "params": {
                "server": string
            }
        }

Выходные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "result": {
                "filename": string,
                "content": string
            }[]
        }

### getAllFileMetadata

Входные данные:

Получить содержимое всех файлов на сервере.

        {
            "jsonrpc": "2.0",
            "id": number,
            "method": "getAllFileMetadata",
            "params": {
                "server": string
            }
        }

Выходные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "result": {
                "filename": string,
                "atime": string
                "btime": string,
                "mtime": string,
            }[]
        }

### calculateRam

Рассчитать стоимость скрипта в RAM внутри игры.

Входные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "method": "calculateRam",
            "params": {
                "filename": string,
                "server": string
            }
        }

Выходные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "result": number
        }

### getDefinitionFile

Получить файл определений NS API.

Входные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "method": "getDefinitionFile"
        }

Выходные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "result": string
        }

### getSaveFile

Получить данные сохранения.

Входные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "method": "getSaveFile"
        }

Выходные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "result": {
                "identifier": string,
                "binary": boolean,
                "save": string
            }
        }

### getAllServers

Получить список всех серверов.

Входные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "method": "getAllServers"
        }

Выходные данные:

        {
            "jsonrpc": "2.0",
            "id": number,
            "result": {
                "hostname": string,
                "hasAdminRights": boolean,
                "purchasedByPlayer": boolean
            }[]
        }
