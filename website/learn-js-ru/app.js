(() => {
  const lessons = window.COURSE_LESSONS;
  const bitburnerNotes = window.COURSE_BITBURNER_NOTES || {};
  const nav = document.querySelector('#lesson-nav');
  const article = document.querySelector('#lesson-content');
  const editor = document.querySelector('#code-editor');
  const output = document.querySelector('#code-output');
  const iframe = document.querySelector('#sandbox');
  const completed = new Set(JSON.parse(localStorage.getItem('js-lab-completed') || '[]'));
  let currentIndex = 0;

  function renderNav(filter = '') {
    nav.replaceChildren();
    let lastGroup = '';
    lessons.forEach((lesson, index) => {
      if (filter && !`${lesson.title} ${lesson.group} ${lesson.category}`.toLowerCase().includes(filter.toLowerCase())) return;
      if (lesson.group !== lastGroup) {
        const group = document.createElement('div');
        group.className = 'nav-group-title';
        group.textContent = lesson.group.toUpperCase();
        nav.append(group);
        lastGroup = lesson.group;
      }
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `lesson-link${index === currentIndex ? ' active' : ''}${completed.has(lesson.id) ? ' done' : ''}`;
      button.setAttribute('aria-current', index === currentIndex ? 'page' : 'false');
      button.innerHTML = `<span class="nav-index">${String(index + 1).padStart(2, '0')}</span><span class="nav-title"></span>${completed.has(lesson.id) ? '<span class="nav-check" aria-label="Пройдено">✓</span>' : ''}`;
      button.querySelector('.nav-title').textContent = lesson.title;
      button.addEventListener('click', () => showLesson(index));
      nav.append(button);
    });
  }

  function updateProgress() {
    const count = completed.size;
    document.querySelector('#progress-label').textContent = `${count} / ${lessons.length}`;
    document.querySelector('#progress-bar').style.width = `${count / lessons.length * 100}%`;
    const progress = document.querySelector('[role="progressbar"]');
    progress.setAttribute('aria-valuemax', lessons.length);
    progress.setAttribute('aria-valuenow', count);
  }

  function showLesson(index) {
    currentIndex = index;
    const lesson = lessons[index];
    document.querySelector('#lesson-category').textContent = lesson.category;
    document.querySelector('#lesson-number').textContent = `УРОК ${String(index + 1).padStart(2, '0')}`;
    article.innerHTML = `<div class="lesson-kicker">${lesson.group} · ${String(index + 1).padStart(2, '0')}</div><h1 class="lesson-title">${lesson.title}</h1><p class="lesson-lead">${lesson.lead}</p><div class="lesson-content">${lesson.body}</div><div class="lesson-example-label">ПРИМЕР ДЛЯ ПРАКТИКИ</div>`;
    if (bitburnerNotes[lesson.id]) {
      const note = document.createElement('div');
      note.className = 'callout';
      const label = document.createElement('strong');
      label.textContent = 'Параллель с Bitburner: ';
      note.append(label, document.createTextNode(bitburnerNotes[lesson.id]));
      article.querySelector('.lesson-content').before(note);
    }
    editor.value = lesson.code;
    output.innerHTML = '<span class="output-placeholder">Запусти пример, чтобы увидеть результат…</span>';
    document.querySelector('#complete-button').classList.toggle('is-complete', completed.has(lesson.id));
    document.querySelector('#complete-button').innerHTML = completed.has(lesson.id) ? '<span aria-hidden="true">✓</span> Урок пройден' : '<span aria-hidden="true">✓</span> Отметить урок пройденным';
    document.querySelector('#prev-button').disabled = index === 0;
    document.querySelector('#next-button').disabled = index === lessons.length - 1;
    renderNav(document.querySelector('#lesson-search').value);
    history.replaceState(null, '', `#${lesson.id}`);
    updateProgress();
  }

  function showResult(lines, isError = false) {
    output.replaceChildren();
    if (!lines.length) lines = ['Код выполнен. Ничего не выведено.'];
    lines.forEach((line, index) => {
      if (index) output.append(document.createTextNode('\n'));
      const span = document.createElement('span');
      span.textContent = line;
      if (isError) span.className = 'output-error';
      output.append(span);
    });
  }

  function runCode() {
    const source = editor.value;
    const documentSource = `<!doctype html><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline' 'unsafe-eval'; connect-src 'none'; img-src 'none'; style-src 'none'; media-src 'none'; font-src 'none'; form-action 'none'; base-uri 'none'"><script>
      addEventListener('message', async (event) => {
        if (!event.data || event.data.type !== 'run') return;
        const results = [];
        const printable = (value) => {
          if (typeof value === 'string') return value;
          try { return JSON.stringify(value, null, 2) ?? String(value); }
          catch { return String(value); }
        };
        const sandboxConsole = { log: (...values) => results.push(values.map(printable).join(' ')), warn: (...values) => results.push('Предупреждение: ' + values.map(printable).join(' ')), error: (...values) => results.push('Ошибка: ' + values.map(printable).join(' ')) };
        try {
          const AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
          const execute = new AsyncFunction('console', '"use strict";' + String.fromCharCode(10) + event.data.code);
          await execute(sandboxConsole);
          parent.postMessage({type:'result', lines:results}, '*');
        } catch (error) { parent.postMessage({type:'result', error: error && error.message ? error.message : String(error)}, '*'); }
      });
      parent.postMessage({type:'ready'}, '*');
    </script>`;
    output.textContent = 'Выполняю…';
    let completedRun = false;
    const receive = (event) => {
      if (event.source !== iframe.contentWindow || !event.data) return;
      if (event.data.type === 'ready' && !completedRun) iframe.contentWindow.postMessage({type:'run', code: source}, '*');
      if (event.data.type === 'result' && !completedRun) {
        completedRun = true;
        window.removeEventListener('message', receive);
        if (event.data.error) showResult([`Ошибка: ${event.data.error}`], true);
        else showResult(event.data.lines || []);
      }
    };
    window.addEventListener('message', receive);
    iframe.srcdoc = documentSource;
    window.setTimeout(() => {
      if (!completedRun) {
        completedRun = true;
        window.removeEventListener('message', receive);
        showResult(['Время выполнения истекло. Проверь цикл и попробуй ещё раз.'], true);
        iframe.srcdoc = '<!doctype html><meta charset="utf-8">';
      }
    }, 1800);
  }

  document.querySelector('#lesson-search').addEventListener('input', event => renderNav(event.target.value));
  document.querySelector('#run-button').addEventListener('click', runCode);
  document.querySelector('#reset-code').addEventListener('click', () => { editor.value = lessons[currentIndex].code; editor.focus(); });
  document.querySelector('#clear-output').addEventListener('click', () => { output.innerHTML = '<span class="output-placeholder">Результат очищен.</span>'; });
  document.querySelector('#complete-button').addEventListener('click', () => {
    const id = lessons[currentIndex].id;
    if (completed.has(id)) completed.delete(id); else completed.add(id);
    localStorage.setItem('js-lab-completed', JSON.stringify([...completed]));
    showLesson(currentIndex);
  });
  document.querySelector('#prev-button').addEventListener('click', () => { if (currentIndex > 0) showLesson(currentIndex - 1); });
  document.querySelector('#next-button').addEventListener('click', () => { if (currentIndex < lessons.length - 1) showLesson(currentIndex + 1); });
  editor.addEventListener('keydown', event => {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) { event.preventDefault(); runCode(); }
    if (event.key === 'Tab') {
      event.preventDefault();
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      editor.setRangeText('  ', start, end, 'end');
    }
  });

  const hashIndex = lessons.findIndex(lesson => `#${lesson.id}` === location.hash);
  showLesson(hashIndex >= 0 ? hashIndex : 0);
})();
