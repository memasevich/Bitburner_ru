(() => {
  const lessons = window.COURSE_LESSONS;
  const notes = window.COURSE_BITBURNER_NOTES || {};
  const nav = document.querySelector('#lesson-nav');
  const article = document.querySelector('#lesson-content');
  const editor = document.querySelector('#code-editor');
  const expandedEditor = document.querySelector('#expanded-code-editor');
  const dialog = document.querySelector('#editor-dialog');
  const iframe = document.querySelector('#sandbox');
  const sidebar = document.querySelector('.sidebar');
  const routeToggle = document.querySelector('#toggle-lessons');
  const outputs = [...document.querySelectorAll('#code-output, #expanded-code-output')];
  const expandButton = document.querySelector('#expand-editor');
  let dialogOpener = expandButton;
  let storageAvailable = true;

  function readStorage(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  }
  function writeStorage(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch { storageAvailable = false; return false; }
  }

  const savedCompleted = readStorage('js-lab-completed', []);
  const completed = new Set(Array.isArray(savedCompleted) ? savedCompleted.filter(id => lessons.some(l => l.id === id)) : []);
  const savedDrafts = readStorage('js-lab-drafts', {});
  const drafts = Object.create(null);
  if (savedDrafts && typeof savedDrafts === 'object' && !Array.isArray(savedDrafts)) {
    lessons.forEach(l => { if (typeof savedDrafts[l.id] === 'string') drafts[l.id] = savedDrafts[l.id]; });
  }
  let currentIndex = 0;
  let hasLesson = false;
  let activeRun = null;
  let runSequence = 0;

  function setRouteOpen(open) {
    sidebar.classList.toggle('route-open', open);
    routeToggle.setAttribute('aria-expanded', String(open));
    routeToggle.querySelector('span').textContent = open ? 'Скрыть список −' : 'Показать список +';
  }

  function renderNav(filter = '') {
    nav.replaceChildren();
    let lastGroup = '';
    let matches = 0;
    const query = filter.trim().toLocaleLowerCase('ru');
    lessons.forEach((lesson, index) => {
      if (query && ![lesson.title, lesson.group, lesson.category].join(' ').toLocaleLowerCase('ru').includes(query)) return;
      matches++;
      if (lesson.group !== lastGroup) {
        const group = document.createElement('div');
        group.className = 'nav-group-title';
        group.textContent = lesson.group;
        nav.append(group);
        lastGroup = lesson.group;
      }
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'lesson-link' + (index === currentIndex ? ' active' : '') + (completed.has(lesson.id) ? ' done' : '');
      button.setAttribute('aria-current', index === currentIndex ? 'page' : 'false');
      const number = document.createElement('span');
      number.className = 'nav-index';
      number.textContent = String(index + 1).padStart(2, '0');
      const title = document.createElement('span');
      title.className = 'nav-title';
      title.textContent = lesson.title;
      button.append(number, title);
      if (completed.has(lesson.id)) {
        const check = document.createElement('span');
        check.className = 'nav-check';
        check.textContent = '✓';
        check.setAttribute('aria-label', 'Пройдено');
        button.append(check);
      }
      button.addEventListener('click', () => {
        showLesson(index);
        setRouteOpen(false);
        document.querySelector('#lesson').scrollIntoView({ block: 'start' });
        document.querySelector('#lesson').focus({ preventScroll: true });
      });
      nav.append(button);
    });
    if (!matches) {
      const empty = document.createElement('p');
      empty.className = 'nav-empty';
      empty.textContent = 'Уроки не найдены. Попробуй другое слово.';
      const clear = document.createElement('button');
      clear.type = 'button';
      clear.className = 'reset-search';
      clear.textContent = 'Показать все уроки';
      clear.addEventListener('click', () => {
        document.querySelector('#lesson-search').value = '';
        renderNav();
        document.querySelector('#lesson-search').focus();
      });
      nav.append(empty, clear);
    }
  }

  function updateProgress() {
    document.querySelector('#progress-label').textContent = completed.size + ' / ' + lessons.length;
    document.querySelector('#progress-bar').style.width = completed.size / lessons.length * 100 + '%';
    const progress = document.querySelector('[role="progressbar"]');
    progress.setAttribute('aria-valuemax', lessons.length);
    progress.setAttribute('aria-valuenow', completed.size);
    const done = completed.has(lessons[currentIndex].id);
    const button = document.querySelector('#complete-button');
    button.classList.toggle('is-complete', done);
    button.setAttribute('aria-pressed', String(done));
    button.textContent = done ? '✓ Урок пройден' : '✓ Отметить урок пройденным';
  }

  function updateDraftStatus() {
    const changed = editor.value !== lessons[currentIndex].code;
    const message = !storageAvailable ? 'Черновик только в этой вкладке' : changed ? 'Черновик сохранён в браузере' : 'Пример урока';
    document.querySelector('#draft-status').textContent = message;
    document.querySelector('#expanded-draft-status').textContent = message;
  }

  function saveDraft() {
    if (!hasLesson) return;
    const id = lessons[currentIndex].id;
    if (editor.value === lessons[currentIndex].code) delete drafts[id];
    else drafts[id] = editor.value;
    writeStorage('js-lab-drafts', drafts);
    updateDraftStatus();
  }

  function updatePosition() {
    const beforeCursor = expandedEditor.value.slice(0, expandedEditor.selectionStart).split('\n');
    document.querySelector('#editor-position').textContent = 'Строка ' + beforeCursor.length + ' · Столбец ' + (beforeCursor.at(-1).length + 1);
  }

  function updateGutters() {
    [[editor, '#line-numbers'], [expandedEditor, '#expanded-line-numbers']].forEach(([area, selector]) => {
      const gutter = document.querySelector(selector);
      const count = area.value.split('\n').length;
      if (gutter.dataset.count !== String(count)) {
        gutter.textContent = Array.from({ length: count }, (_, index) => index + 1).join('\n');
        gutter.dataset.count = count;
      }
      gutter.scrollTop = area.scrollTop;
    });
    updatePosition();
  }

  function syncEditor(area) {
    if (area !== editor) editor.value = area.value;
    if (area !== expandedEditor) expandedEditor.value = area.value;
    updateGutters();
    saveDraft();
  }

  function setRunStatus(message, state = '') {
    document.querySelectorAll('#run-state, #expanded-run-state').forEach(el => {
      el.textContent = message;
      el.dataset.state = state;
    });
  }

  function renderOutput(lines = [], error = false, placeholder = '') {
    outputs.forEach(output => {
      output.replaceChildren();
      const span = document.createElement('span');
      span.textContent = placeholder || lines.join('\n');
      if (placeholder) span.className = 'output-placeholder';
      else if (error) span.className = 'output-error';
      output.append(span);
    });
  }

  function disposeRun() {
    if (!activeRun) return;
    clearTimeout(activeRun.timeout);
    window.removeEventListener('message', activeRun.receive);
    activeRun = null;
    iframe.srcdoc = '';
    document.querySelectorAll('.stop-code').forEach(button => { button.hidden = true; });
  }

  function showLesson(index, navigate = true) {
    saveDraft();
    disposeRun();
    currentIndex = index;
    const lesson = lessons[index];
    document.title = lesson.title + ' — JavaScript с нуля';
    document.querySelector('#lesson-category').textContent = lesson.category;
    document.querySelector('#lesson-number').textContent = 'УРОК ' + String(index + 1).padStart(2, '0');
    article.innerHTML = '<h1 class="lesson-title">' + lesson.title + '</h1><p class="lesson-lead">' + lesson.lead + '</p><div class="lesson-content">' + lesson.body + '</div>';
    if (notes[lesson.id]) {
      const note = document.createElement('div');
      note.className = 'callout';
      const label = document.createElement('strong');
      label.textContent = 'Параллель с Bitburner: ';
      note.append(label, document.createTextNode(notes[lesson.id]));
      article.querySelector('.lesson-content').before(note);
    }
    const example = document.createElement('section');
    example.className = 'lesson-example';
    const head = document.createElement('div');
    head.className = 'example-head';
    const label = document.createElement('h2');
    label.textContent = 'Пример для практики';
    const tryButton = document.createElement('button');
    tryButton.type = 'button';
    tryButton.textContent = 'Открыть редактор ↗';
    tryButton.addEventListener('click', openExpandedEditor);
    head.append(label, tryButton);
    const pre = document.createElement('pre');
    const code = document.createElement('code');
    code.textContent = lesson.code;
    pre.append(code);
    example.append(head, pre);
    article.append(example);
    editor.value = Object.hasOwn(drafts, lesson.id) ? drafts[lesson.id] : lesson.code;
    expandedEditor.value = editor.value;
    editor.scrollTop = expandedEditor.scrollTop = 0;
    hasLesson = true;
    updateGutters();
    updateDraftStatus();
    renderOutput([], false, 'Запусти пример, чтобы увидеть результат.');
    setRunStatus('Консоль');
    document.querySelector('#prev-button').disabled = index === 0;
    document.querySelector('#next-button').disabled = index === lessons.length - 1;
    renderNav(document.querySelector('#lesson-search').value);
    updateProgress();
    if (navigate && location.hash !== '#' + lesson.id) history.pushState(null, '', '#' + lesson.id);
    writeStorage('js-lab-last-lesson', lesson.id);
  }

  // A worker keeps accidental infinite loops off the page's UI thread.
  // It is owned by the isolated iframe and inherits its restrictive CSP.
  function sandboxWorker() {
    self.onmessage = async event => {
      let count = 0;
      const printable = value => {
        if (typeof value === 'string') return value;
        try { return JSON.stringify(value, null, 2) ?? String(value); }
        catch { return String(value); }
      };
      const log = (prefix, values) => {
        if (count++ < 200) self.postMessage({ type: 'log', line: (prefix + values.map(printable).join(' ')).slice(0,6000) });
        else if (count === 201) self.postMessage({ type: 'log', line: 'Показаны первые 200 строк вывода.' });
      };
      const console = {
        log: (...values) => log('', values),
        warn: (...values) => log('Предупреждение: ', values),
        error: (...values) => log('Ошибка: ', values)
      };
      try {
        const AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
        await new AsyncFunction('console', '"use strict";\n' + event.data.code)(console);
        self.postMessage({ type: 'done' });
      } catch (error) {
        self.postMessage({ type: 'error', message: error && error.message ? error.message : String(error) });
      }
    };
  }

  function runCode() {
    disposeRun();
    const source = editor.value;
    const id = ++runSequence;
    const lines = [];
    const workerSource = '(' + sandboxWorker.toString() + ')()';
    renderOutput([], false, 'Выполняю…');
    setRunStatus('Выполняется…', 'running');
    document.querySelectorAll('.stop-code').forEach(button => { button.hidden = false; });
    const receive = event => {
      if (!activeRun || activeRun.id !== id || event.source !== iframe.contentWindow || event.data?.runId !== id) return;
      const data = event.data;
      if (data.type === 'ready') iframe.contentWindow.postMessage({ type: 'run', code: source }, '*');
      if (data.type === 'log') {
        lines.push(String(data.line));
        renderOutput(lines);
      }
      if (data.type === 'done') {
        renderOutput(lines.length ? lines : ['Код выполнен. Ничего не выведено.']);
        setRunStatus('Выполнено', 'success');
        disposeRun();
      }
      if (data.type === 'error') {
        renderOutput([...lines, 'Ошибка: ' + data.message], true);
        setRunStatus('Ошибка в коде', 'error');
        disposeRun();
      }
    };
    activeRun = { id, receive, lines, timeout: setTimeout(() => {
      if (activeRun?.id !== id) return;
      renderOutput([...lines, 'Время выполнения истекло. Проверь цикл и попробуй ещё раз.'], true);
      setRunStatus('Превышено время', 'error');
      disposeRun();
    }, 3000) };
    window.addEventListener('message', receive);
    iframe.srcdoc = '<!doctype html><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="default-src \'none\'; script-src \'unsafe-inline\' \'unsafe-eval\'; worker-src blob:; connect-src \'none\'; form-action \'none\'; base-uri \'none\'"><script>' +
      'const worker = new Worker(URL.createObjectURL(new Blob([' + JSON.stringify(workerSource) + '], {type:"text/javascript"})));' +
      'worker.onmessage = event => parent.postMessage({...event.data,runId:' + id + '}, "*");' +
      'worker.onerror = () => parent.postMessage({type:"error",message:"Не удалось выполнить код. Попробуй ещё раз.",runId:' + id + '}, "*");' +
      'addEventListener("message",event=>{if(event.source===parent && event.data?.type==="run")worker.postMessage({code:event.data.code});});' +
      'parent.postMessage({type:"ready",runId:' + id + '}, "*");</script>';
  }

  function openExpandedEditor() {
    dialogOpener = document.activeElement instanceof HTMLElement && document.activeElement !== document.body ? document.activeElement : expandButton;
    expandedEditor.value = editor.value;
    expandedEditor.setSelectionRange(editor.selectionStart, editor.selectionEnd);
    dialog.showModal();
    document.body.classList.add('editor-open');
    expandedEditor.focus({ preventScroll: true });
    updateGutters();
  }

  function resetCode() {
    editor.value = lessons[currentIndex].code;
    syncEditor(editor);
    (dialog.open ? expandedEditor : editor).focus();
  }

  document.querySelector('#lesson-search').addEventListener('input', event => renderNav(event.target.value));
  routeToggle.addEventListener('click', () => setRouteOpen(!sidebar.classList.contains('route-open')));
  document.querySelector('#run-button').addEventListener('click', runCode);
  document.querySelector('#expanded-run-button').addEventListener('click', runCode);
  document.querySelector('#reset-code').addEventListener('click', resetCode);
  document.querySelector('#expanded-reset-code').addEventListener('click', resetCode);
  expandButton.addEventListener('click', openExpandedEditor);
  document.querySelector('#close-editor').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.classList.remove('editor-open');
    (dialogOpener.isConnected ? dialogOpener : expandButton).focus({ preventScroll: true });
  });
  document.querySelectorAll('#clear-output, .clear-output').forEach(button => button.addEventListener('click', () => {
    if (activeRun) activeRun.lines.length = 0;
    if (!activeRun) setRunStatus('Консоль');
    renderOutput([], false, 'Результат очищен.');
  }));
  document.querySelectorAll('.stop-code').forEach(button => button.addEventListener('click', () => {
    disposeRun();
    setRunStatus('Остановлено');
    renderOutput([], false, 'Выполнение остановлено. Можно изменить код и запустить снова.');
  }));
  document.querySelectorAll('.copy-code').forEach(button => button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(editor.value);
      button.textContent = 'Скопировано ✓';
    } catch { button.textContent = 'Выдели код и нажми Ctrl+C'; }
    setTimeout(() => { button.textContent = 'Копировать код'; }, 2000);
  }));
  document.querySelector('#complete-button').addEventListener('click', () => {
    const id = lessons[currentIndex].id;
    if (completed.has(id)) completed.delete(id); else completed.add(id);
    writeStorage('js-lab-completed', [...completed]);
    updateProgress();
    renderNav(document.querySelector('#lesson-search').value);
  });

  function moveLesson(direction) {
    const next = currentIndex + direction;
    if (next < 0 || next >= lessons.length) return;
    showLesson(next);
    document.querySelector('#lesson').scrollIntoView({ block: 'start' });
    document.querySelector('#lesson').focus({ preventScroll: true });
  }
  document.querySelector('#prev-button').addEventListener('click', () => moveLesson(-1));
  document.querySelector('#next-button').addEventListener('click', () => moveLesson(1));
  [editor, expandedEditor].forEach(area => {
    area.addEventListener('input', () => syncEditor(area));
    area.addEventListener('scroll', () => {
      document.querySelector(area === editor ? '#line-numbers' : '#expanded-line-numbers').scrollTop = area.scrollTop;
    });
    area.addEventListener('keydown', event => {
      if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        runCode();
      } else if (event.key === 'Tab' && !event.shiftKey) {
        event.preventDefault();
        area.setRangeText('  ', area.selectionStart, area.selectionEnd, 'end');
        syncEditor(area);
      }
    });
    ['keyup','click','select'].forEach(type => area.addEventListener(type, updatePosition));
  });
  window.addEventListener('hashchange', () => {
    const index = lessons.findIndex(lesson => '#' + lesson.id === location.hash);
    if (index >= 0 && index !== currentIndex) showLesson(index, false);
  });

  const requested = lessons.findIndex(lesson => '#' + lesson.id === location.hash);
  const last = readStorage('js-lab-last-lesson', '');
  const previous = lessons.findIndex(lesson => lesson.id === last);
  showLesson(requested >= 0 ? requested : previous >= 0 ? previous : 0, false);
  history.replaceState(null, '', '#' + lessons[currentIndex].id);
})();
