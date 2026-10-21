# Как использовать TypeScript и React в игре

Bitburner изначально поддерживает TypeScript и React.

Вы можете писать скрипты TypeScript в файлах `.ts` и использовать синтаксис jsx внутри файлов `.jsx` и `.tsx`. Запускайте их через CLI `run`, как обычные JS-файлы. Например, файл `timer.tsx` из следующего раздела можно запустить командой `run timer.tsx` во вкладке терминала.

## Пример

Используйте `ns.printRaw` и `ns.tprintRaw`, чтобы выводить элементы React в логах и терминале.

```tsx
// timer.tsx
function Timer() {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Seconds: {seconds}</div>;
}

export async function main(ns: NS) {
  ns.ui.openTail();
  ns.printRaw(<Timer />);
  await ns.asleep(10000);
}
```
