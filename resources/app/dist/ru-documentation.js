(function () {
  "use strict";

  // The game renders Markdown through React.  The translation file above this
  // script handles short UI strings, while this layer replaces complete
  // documentation blocks from translated Markdown sidecars.  Code, API names,
  // links and server names are deliberately kept as protected inline nodes.
  var pages = [
    { file: "getting_started_ru.md", aliases: ["Getting Started Guide for Beginner Programmers", "Руководство для начинающих for Beginner Programmers", "Руководство для начинающих программистов"] },
    { file: "faq_ru.md", aliases: ["FAQ", "Frequently Asked Questions", "Частые вопросы"] },
    { file: "terminal_ru.md", aliases: ["Terminal", "Терминал"] },
    { file: "scripts_ru.md", aliases: ["Scripts", "Before you start", "Скрипты", "Перед началом"] },
    { file: "hacking_ru.md", aliases: ["Hacking", "Взлом"] },
    { file: "servers_ru.md", aliases: ["Servers", "Серверы"] },
    { file: "stats_ru.md", aliases: ["Stats", "Statistics", "Статистика"] },
    { file: "ram_ru.md", aliases: ["RAM", "ОЗУ"] },
    { file: "augmentations_ru.md", aliases: ["Augmentations", "Аугментации"] },
    { file: "factions_ru.md", aliases: ["Factions", "Фракции"] },
    { file: "reputation_ru.md", aliases: ["Reputation", "Репутация"] },
    { file: "companies_ru.md", aliases: ["Companies", "Компании"] },
    { file: "crimes_ru.md", aliases: ["Crimes", "Преступления"] },
    { file: "hacknet_nodes_ru.md", aliases: ["Hacknet Nodes", "Hacknet nodes", "Узлы Hacknet"] },
    { file: "autocomplete_ru.md", aliases: ["Autocomplete", "Автодополнение"] },
    { file: "codingcontracts_ru.md", aliases: ["Coding Contracts", "Coding contract", "Контракты на программирование"] },
    { file: "infiltration_ru.md", aliases: ["Infiltration", "Проникновение"] },
    { file: "programs_ru.md", aliases: ["Programs", "Программы"] },
    { file: "stockmarket_ru.md", aliases: ["Stock Market", "Stockmarket", "Фондовый рынок"] },
    { file: "world_ru.md", aliases: ["World", "Мир"] },
    { file: "tools_and_resources_ru.md", aliases: ["Tools and Resources", "Инструменты и ресурсы"] },
    { file: "index_ru.md", aliases: ["Welcome to Bitburner", "Bitburner", "Добро пожаловать в Bitburner"] },
    { file: "darknet_ru.md", aliases: ["Darknet", "Тёмная сеть"] },
    { file: "game_frozen_ru.md", aliases: ["Game Frozen", "Игра зависла"] },
    { file: "learn_ru.md", aliases: ["Learn", "Learning to Program", "Обучение", "Учимся программировать на JavaScript"] },
    { file: "go_algorithms_ru.md", aliases: ["Go Algorithms", "Алгоритмы Go"] },
    { file: "hackingalgorithms_ru.md", aliases: ["Hacking Algorithms", "Алгоритмы взлома"] },
    { file: "offlineandbonustime_ru.md", aliases: ["Offline and Bonus Time", "Офлайн-режим и бонусное время"] },
    { file: "remote_api_ru.md", aliases: ["Remote API", "Удалённый API"] },
    { file: "typescript_react_ru.md", aliases: ["TypeScript React", "TypeScript и React"] },
    { file: "changelog_ru.md", aliases: ["Changelog", "Список изменений"] },
    { file: "changelog-v0_ru.md", aliases: ["Changelog - Legacy v0", "Changelog v0", "Список изменений — старая версия v0"] },
    { file: "changelog-v2_ru.md", aliases: ["Changelog - Legacy v2", "Changelog v2", "Список изменений — старая версия v2"] },
    { file: "changelog-v1_ru.md", aliases: ["Changelog v1", "Changelog Version 1", "Список изменений v1"] },
    { file: "migrations_v1_ru.md", aliases: ["Migration v1", "Миграция v1"] },
    { file: "migrations_v2_ru.md", aliases: ["Migration v2", "Миграция v2"] },
    { file: "migrations_ns2_ru.md", aliases: ["Netscript 2", "NS2", "Миграция Netscript 2"] },
    { file: "bitnode_recommendation_comprehensive_guide_ru.md", aliases: ["BitNode Recommendation Comprehensive Guide", "Подробное руководство по выбору BitNode"] },
    { file: "bitnode_recommendation_short_guide_ru.md", aliases: ["BitNode Recommendation Short Guide", "Краткое руководство по выбору BitNode"] },
    { file: "bitnodes_ru.md", aliases: ["BitNodes", "BitNode", "БитНоды"] },
    { file: "corporations_ru.md", aliases: ["Corporations", "Корпорации"] },
    { file: "bladeburners_ru.md", aliases: ["Bladeburners", "Bladeburner"] },
    { file: "basic-gameplay-and-term_ru.md", aliases: ["Basic Gameplay and Terms", "Basic Gameplay & Terms", "Основы игрового процесса — термины"] },
    { file: "boost-material_ru.md", aliases: ["Boost material", "Boost Material"] },
    { file: "demand-competition_ru.md", aliases: ["Demand and Competition", "Demand & Competition", "Спрос — конкуренция"] },
    { file: "division-raw-production_ru.md", aliases: ["Division Raw Production", "Базовое производство подразделения"] },
    { file: "financial-statement_ru.md", aliases: ["Financial Statement", "Финансовая отчётность"] },
    { file: "general-advice_ru.md", aliases: ["General Advice", "Общие рекомендации"] },
    { file: "industry-supply-chain_ru.md", aliases: ["Industry Supply Chain", "Отрасли — цепочка поставок"] },
    { file: "miscellany_ru.md", aliases: ["Miscellany", "Разное"] },
    { file: "office_ru.md", aliases: ["Office", "Офис"] },
    { file: "optimal-selling-price-market-ta2_ru.md", aliases: ["Optimal Selling Price", "Optimal Selling Price — Market-TA2", "Оптимальная цена продажи — Market-TA2"] },
    { file: "product_ru.md", aliases: ["Product", "Продукт"] },
    { file: "quality_ru.md", aliases: ["Quality", "Качество"] },
    { file: "smart-supply_ru.md", aliases: ["Smart Supply"] },
    { file: "unlocks-upgrade-research_ru.md", aliases: ["Unlocks, Upgrades, and Research", "Unlocks Upgrades and Research", "Разблокировки — улучшения — исследования"] },
    { file: "warehouse_ru.md", aliases: ["Warehouse", "Склад"] },
    { file: "wilson-analytics-advert_ru.md", aliases: ["Wilson Analytics", "Wilson Analytics and Advert", "Wilson Analytics — Advert"] },
    { file: "faction_list_ru.md", aliases: ["Faction list", "Faction List", "Список фракций"] },
    { file: "gang_ru.md", aliases: ["Gang", "Банда"] },
    { file: "grafting_ru.md", aliases: ["Grafting", "Пересадка"] },
    { file: "hacknetservers_ru.md", aliases: ["Hacknet Servers", "Hacknet Servers", "Серверы Hacknet"] },
    { file: "intelligence_ru.md", aliases: ["Intelligence", "Интеллект"] },
    { file: "sleeves_ru.md", aliases: ["Sleeves", "Рукава"] },
    { file: "sourcefiles_ru.md", aliases: ["Source Files", "Исходные файлы"] },
    { file: "stanek_ru.md", aliases: ["Stanek", "Стэнек"] }
  ];

  var cache = Object.create(null);
  var pending = Object.create(null);
  // In the packaged Electron build `document.currentScript` can be empty by
  // the time this file is evaluated.  Resolve from index.html so the URL is
  // always D:/.../resources/app/dist/docs-ru/ rather than the app root.
  var baseUrl = new URL("dist/docs-ru/", location.href).href;

  function normalize(value) {
    return String(value || "").replace(/[`*_~]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function stripInline(value) {
    return String(value || "")
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/__([^_]+)__/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/_([^_]+)_/g, "$1")
      .replace(/~~([^~]+)~~/g, "$1")
      .replace(/\\([\\`*_{}\[\]()#+.!\-])/g, "$1")
      .trim();
  }

  function parseMarkdown(markdown) {
    var lines = String(markdown || "").replace(/\r\n?/g, "\n").split("\n");
    var blocks = [];
    var paragraph = [];
    var code = [];
    var fenced = false;
    var fenceMarker = "";

    function flushParagraph() {
      if (paragraph.length) {
        blocks.push({ kind: "p", text: paragraph.join(" ").trim() });
        paragraph = [];
      }
    }

    function flushCode() {
      if (code.length) {
        blocks.push({ kind: "pre", text: code.join("\n") });
        code = [];
      }
    }

    lines.forEach(function (line) {
      if (fenced) {
        if (/^\s*```/.test(line)) {
          flushCode();
          fenced = false;
        } else {
          code.push(line);
        }
        return;
      }
      if (/^\s*```/.test(line)) {
        flushParagraph();
        fenced = true;
        fenceMarker = line;
        void fenceMarker;
        return;
      }
      if (/^\s{4}/.test(line)) {
        flushParagraph();
        code.push(line.replace(/^\s{4}/, ""));
        return;
      }
      if (!line.trim()) {
        flushParagraph();
        flushCode();
        return;
      }
      var heading = /^(#{1,6})\s+(.+?)\s*$/.exec(line);
      if (heading) {
        flushParagraph();
        flushCode();
        blocks.push({ kind: "h" + heading[1].length, text: heading[2] });
        return;
      }
      var quote = /^\s*>\s?(.*)$/.exec(line);
      if (quote) {
        flushParagraph();
        flushCode();
        blocks.push({ kind: "blockquote", text: quote[1] });
        return;
      }
      var list = /^\s*(?:[-+*]|\d+[.)])\s+(.+?)\s*$/.exec(line);
      if (list) {
        flushParagraph();
        flushCode();
        blocks.push({ kind: "li", text: list[1] });
        return;
      }
      if (/^\s*\|/.test(line)) {
        flushParagraph();
        flushCode();
        if (!/^\s*\|?\s*:?-{3,}/.test(line)) {
          blocks.push({ kind: "tr", text: line.replace(/^\s*\|/, "").replace(/\|\s*$/, "").trim() });
        }
        return;
      }
      if (/^\s*([-*_])(?:\s*\1){2,}\s*$/.test(line)) {
        flushParagraph();
        flushCode();
        return;
      }
      paragraph.push(line.trim());
    });
    flushParagraph();
    flushCode();
    return blocks;
  }

  function loadText(url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status === 0 || (xhr.status >= 200 && xhr.status < 300)) resolve(xhr.responseText);
        else reject(new Error("Unable to load " + url + " (" + xhr.status + ")"));
      };
      xhr.onerror = function () { reject(new Error("Unable to load " + url)); };
      xhr.send();
    });
  }

  function pageHeading() {
    // Documentation routes are not consistent about whether the Markdown
    // title is rendered as h1 or h2.  Search all heading levels so a page
    // cannot be skipped just because the renderer chose a different level.
    var headings = Array.prototype.slice.call(document.querySelectorAll("h1,h2,h3,h4,h5,h6"));
    // During SPA navigation the previous page can briefly remain in the DOM
    // beside the new page.  Ignore hidden/unmounted headings first; otherwise
    // a sidecar for the previous route can be applied to the new route.
    headings = headings.filter(function (heading) {
      if (!heading.isConnected) return false;
      if (heading.getClientRects && heading.getClientRects().length === 0) return false;
      var style = window.getComputedStyle ? window.getComputedStyle(heading) : null;
      return !style || (style.display !== "none" && style.visibility !== "hidden");
    });
    var mainHeadings = headings.filter(function (heading) {
      return heading.closest && heading.closest("main,[role='main']");
    });
    if (mainHeadings.length) headings = mainHeadings;
    var h1 = headings.filter(function (heading) { return heading.tagName === "H1"; });
    if (h1.length) headings = h1;
    return headings.find(function (heading) {
      var text = normalize(heading.textContent);
      return pages.some(function (page) {
        return page.aliases.some(function (alias) {
          var a = normalize(alias);
          return text === a;
        });
      });
    });
  }

  function pageForHeading(heading) {
    var text = normalize(heading.textContent);
    return pages.find(function (page) {
      return page.aliases.some(function (alias) {
        var a = normalize(alias);
        return text === a;
      });
    });
  }

  function contentRoot(heading) {
    // In the packaged Electron build the documentation page is rendered by
    // React without a semantic <main> element. The heading's immediate box is
    // the Markdown content container; climbing above it also captures the
    // documentation navigation and causes blocks from different pages to mix.
    var root = heading.parentElement || document.body;
    var blockCount = root.querySelectorAll("h1,h2,h3,h4,h5,h6,p,li,blockquote,pre,tr").length;
    if (blockCount >= 3) return root;

    // Keep a very small fallback for a future renderer that adds one wrapper
    // around the page body, but never walk into the application shell.
    if (root.parentElement) {
      var parent = root.parentElement;
      var parentCount = parent.querySelectorAll("h1,h2,h3,h4,h5,h6,p,li,blockquote,pre,tr").length;
      if (parentCount >= 3 && parent.querySelectorAll("h1").length <= 1) return parent;
    }
    return root;
  }

  function domKind(element) {
    var tag = element.tagName.toLowerCase();
    if (/^h[1-6]$/.test(tag)) return tag;
    if (tag === "pre") return "pre";
    if (tag === "li") return "li";
    if (tag === "blockquote") return "blockquote";
    if (tag === "tr") return "tr";
    if (tag === "p") return "p";
    return "";
  }

  function protectedElements(element) {
    return Array.prototype.slice.call(element.querySelectorAll("code,a,button"));
  }

  function inlineTokens(value) {
    var tokens = [];
    var pattern = /`([^`]+)`|!\[([^\]]*)\]\(([^)]+)\)|\[([^\]]+)\]\(([^)]+)\)/g;
    var last = 0;
    var match;
    while ((match = pattern.exec(value))) {
      if (match.index > last) tokens.push({ kind: "text", text: value.slice(last, match.index) });
      if (match[1] !== undefined) tokens.push({ kind: "code", text: match[1] });
      else tokens.push({ kind: "link", text: match[2] !== undefined ? match[2] : match[4] });
      last = pattern.lastIndex;
    }
    if (last < value.length) tokens.push({ kind: "text", text: value.slice(last) });
    return tokens;
  }

  function textNodesOutsideProtected(element) {
    var result = [];
    var walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      if (node.parentElement && node.parentElement.closest("code,a,button") === null) result.push(node);
    }
    return result;
  }

  function setProtectedLabel(element, text) {
    var nodes = [];
    var walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) nodes.push(node);
    if (!nodes.length) element.appendChild(document.createTextNode(stripInline(text)));
    else {
      nodes[0].nodeValue = stripInline(text);
      nodes.slice(1).forEach(function (item) { item.nodeValue = ""; });
    }
  }

  function applyBlock(element, block) {
    if (block.kind === "pre") return;
    // The documentation renderer turns Markdown links into React buttons and
    // may split one sentence into several nested text nodes.  Preserving that
    // inline structure caused untranslated fragments to survive (for example
    // "Joining", "page" and "here are some...").  Documentation navigation
    // remains available from the left-hand menu, and code/API spellings are
    // preserved by stripInline(), so for prose blocks use the complete
    // translated text as one text node.
    if (block.kind !== "tr" && block.kind !== "li") {
      element.textContent = stripInline(block.text);
      return;
    }
    var tokens = inlineTokens(block.text);
    var protectedNodes = protectedElements(element);
    if (!protectedNodes.length) {
      element.textContent = stripInline(block.text);
      return;
    }
    var protectedTokens = tokens.filter(function (token) { return token.kind !== "text"; });
    // React Markdown may render a link as a button, may merge adjacent
    // inline nodes, or may add a wrapper around it.  In those cases the
    // number of protected DOM nodes is not always identical to the number of
    // Markdown tokens.  Leaving the whole paragraph untouched would expose
    // a conspicuous English/Russian hybrid.  A plain-text fallback is safer:
    // it keeps the translation complete, while code blocks are still kept
    // intact by the early `pre` return above.
    if (protectedTokens.length !== protectedNodes.length) {
      element.textContent = stripInline(block.text);
      return;
    }
    var textParts = [];
    var current = "";
    tokens.forEach(function (token) {
      if (token.kind === "text") current += token.text;
      else {
        textParts.push(current);
        current = "";
      }
    });
    textParts.push(current);
    var textNodes = textNodesOutsideProtected(element);
    if (!textNodes.length && textParts.some(function (part) { return stripInline(part); })) return;
    var ranges = [];
    var range = [];
    var protectedIndex = 0;
    var walker = document.createTreeWalker(element, NodeFilter.SHOW_ALL);
    var node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) {
        if (!node.parentElement.closest("code,a,button")) range.push(node);
      } else if (node.nodeType === Node.ELEMENT_NODE && /^(CODE|A|BUTTON)$/.test(node.tagName)) {
        ranges.push(range);
        range = [];
        protectedIndex++;
      }
    }
    ranges.push(range);
    textParts.forEach(function (part, index) {
      var nodes = ranges[index] || [];
      if (nodes.length) {
        nodes[0].nodeValue = stripInline(part);
        nodes.slice(1).forEach(function (item) { item.nodeValue = ""; });
      }
    });
    protectedTokens.forEach(function (token, index) {
      if (token.kind === "link") setProtectedLabel(protectedNodes[index], token.text);
    });
  }

  function applyPage(page, markdown, heading) {
    var translated = parseMarkdown(markdown);
    var root = contentRoot(heading);
    var dom = Array.prototype.slice.call(root.querySelectorAll("h1,h2,h3,h4,h5,h6,p,li,blockquote,pre,tr"));
    var domByKind = Object.create(null);
    var translatedByKind = Object.create(null);
    dom.forEach(function (element) {
      var kind = domKind(element);
      if (kind) (domByKind[kind] || (domByKind[kind] = [])).push(element);
    });
    translated.forEach(function (block) {
      (translatedByKind[block.kind] || (translatedByKind[block.kind] = [])).push(block);
    });
    var total = 0;
    Object.keys(translatedByKind).forEach(function (kind) {
      var source = translatedByKind[kind];
      var target = domByKind[kind] || [];
      var count = Math.min(source.length, target.length);
      for (var i = 0; i < count; i++) {
        applyBlock(target[i], source[i]);
        var marker = page.file + ":" + i;
        if (target[i].getAttribute("data-ru-doc-block") !== marker) target[i].setAttribute("data-ru-doc-block", marker);
        total++;
      }
    });
    if (total > 2) {
      document.documentElement.setAttribute("data-ru-documentation", page.file);
    }
  }

  function run() {
    var heading = pageHeading();
    if (!heading) return;
    var headingKey = normalize(heading.textContent);
    if (headingKey !== lastHeadingKey) {
      lastHeadingKey = headingKey;
      headingStableSince = Date.now();
      return;
    }
    if (Date.now() - headingStableSince < 800) return;
    var page = pageForHeading(heading);
    if (!page) return;
    if (document.documentElement.getAttribute("data-ru-documentation") === page.file &&
        contentRoot(heading).querySelector("[data-ru-doc-block^='" + page.file + ":']")) return;
    if (cache[page.file]) {
      applyPage(page, cache[page.file], heading);
      return;
    }
    if (pending[page.file]) return;
    pending[page.file] = true;
    loadText(baseUrl + page.file).then(function (text) {
      cache[page.file] = text;
      applyPage(page, text, heading);
    }).catch(function (error) {
      console.warn("[RU] Documentation sidecar unavailable:", error.message);
    }).then(function () { pending[page.file] = false; });
  }

  var timer = 0;
  var lastHeadingKey = "";
  var headingStableSince = 0;
  function schedule() {
    clearTimeout(timer);
    timer = setTimeout(run, 900);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", schedule);
  else schedule();
  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
  // React can mount the documentation route after the initial mutation burst.
  // Keep a light periodic check so a late-rendered page is still translated.
  setInterval(run, 1000);
})();
