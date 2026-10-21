# Руководство по переходу на v1.0.0

В v1.0.0 были нарушены несколько API.

перенесено (только для ns2):

- bladeburner.getActionTime теперь возвращает миллисекунды, а не секунды.
- getHackTime теперь возвращает миллисекунды, а не секунды.
- getGrowTime теперь возвращает миллисекунды, а не секунды.
- getWeakenTime теперь возвращает миллисекунды, а не секунды.
- hackAnalyzePercent переименован в hackAnalyze
- hackAnalyzePercent теперь возвращает десятичную дробь, а не процент.
- hackChance (но не formulas.basic.hackChance) переименован в hackAnalyzeChance
- formulas.basic разделён на formulas.skills и formulas.hacking

не перенесено (иногда требует ручных изменений):

- getPlayer().hacking_skill переименован в `hacking`
- то же самое для sleeves
- getPurchasedServers больше не позволяет запрашивать IP-адреса вместо имён хостов.
- getStats устарел; вместо него используйте getPlayer.
- getCharacterInformation устарел; вместо него используйте getPlayer.
- getServerRam устарел; вместо него используйте getServerMaxRam и getServerUsedRam.
- getServerBaseSecurityLevel будет объявлен устаревшим, не имея замены; фактически он почти не используется.
- sleep больше нельзя вызывать одновременно; новая функция asleep позволит это делать.
- write теперь возвращает promise (его нужно ожидать с помощью await).
- scp теперь возвращает promise (его нужно ожидать с помощью await).
- free port, write, read
- write и read больше не поддерживают port; для этого предназначены writePort и readPort.

При загрузке v1.0.0 игра применит несколько правил, чтобы изменить всё необходимое.
Игра никогда не изменяет файл до создания резервной копии с именем `BACKUP_filename.ext`, после чего в скрипте изменяет всё, что считает нужным изменить.
При этом перед изменённой строкой будет помещена исходная строка.

Файл `v1_DETECTED_CHANGES.txt` укажет каждый файл, в котором обнаружена возможная проблема.
