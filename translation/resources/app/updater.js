/** @import { BrowserWindow } from "electron" */
/* eslint-disable @typescript-eslint/no-var-requires */
let net;
try {
  net = require("electron").net;
} catch (e) {
  // Not inside Electron runtime
}

let log;
try {
  log = require("electron-log");
} catch (e) {
  log = {
    info: console.log,
    debug: () => {},
    warn: console.warn,
    error: console.error,
  };
}

let utils;
try {
  utils = require("./utils");
} catch (e) {
  utils = {
    writeToast: () => {},
    writeTerminal: () => {},
  };
}

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/memasevich/Bitburner_ru/main/translation/resources/app/dist";
const VERSION_URL = `${GITHUB_RAW_BASE}/version.json`;
const TIMEOUT_MS = 2500;

/**
 * Parses and compares two semantic version strings (e.g., "0.2.1" vs "0.2.0").
 * @param {string} remote
 * @param {string} local
 * @returns {boolean} True if remote is strictly newer than local.
 */
function isNewerVersion(remote, local) {
  if (!remote || !local) return false;
  const parseParts = (v) =>
    v
      .replace(/^v/i, "")
      .split(".")
      .map((part) => parseInt(part, 10) || 0);

  const rParts = parseParts(remote);
  const lParts = parseParts(local);
  const maxLen = Math.max(rParts.length, lParts.length);

  for (let i = 0; i < maxLen; i++) {
    const rVal = rParts[i] || 0;
    const lVal = lParts[i] || 0;
    if (rVal > lVal) return true;
    if (rVal < lVal) return false;
  }
  return false;
}

/**
 * Safely fetches a URL with strict timeout.
 * @param {string} url
 * @param {number} timeoutMs
 * @returns {Promise<string|null>} Response body text or null if request failed/timed out.
 */
async function fetchWithTimeout(url, timeoutMs = TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  const fetchFn = (net && net.fetch) || globalThis.fetch;

  try {
    const response = await fetchFn(url, {
      signal: controller.signal,
      cache: "no-store",
      headers: {
        "User-Agent": "Bitburner-RU-Updater",
      },
    });

    clearTimeout(timer);

    if (!response.ok) {
      log.debug(`[RU Updater] Fetch failed for ${url} (HTTP ${response.status})`);
      return null;
    }

    return await response.text();
  } catch (error) {
    clearTimeout(timer);
    // Silent fail for network disconnect, timeout, or DNS issues to never disturb the player
    log.debug(`[RU Updater] Network request aborted or failed: ${error.message}`);
    return null;
  }
}

/**
 * Validates javascript code to ensure it's not truncated, not an HTML 404 page, and syntactically sound.
 * @param {string} code
 * @param {string} requiredMarker
 * @param {number} minLength
 * @returns {boolean}
 */
function validateJsContent(code, requiredMarker = "BitburnerRussianTranslation", minLength = 50000) {
  if (!code || typeof code !== "string") return false;
  if (code.length < minLength) return false;
  if (requiredMarker && !code.includes(requiredMarker)) return false;

  try {
    // Validates pure JS syntax without executing
    new vm.Script(code);
    return true;
  } catch (syntaxError) {
    log.error("[RU Updater] Downloaded file failed syntax validation:", syntaxError.message);
    return false;
  }
}

/**
 * Quietly checks for translation updates in the background.
 * If a valid newer version is available, downloads and atomically applies it.
 * @param {BrowserWindow} window
 */
async function checkForUpdates(window) {
  try {
    const distDir = path.join(__dirname, "dist");
    const localVersionPath = path.join(distDir, "version.json");

    let currentVersion = "0.2.0";
    if (fs.existsSync(localVersionPath)) {
      try {
        const rawJson = fs.readFileSync(localVersionPath, "utf8");
        const parsed = JSON.parse(rawJson);
        if (parsed.version) {
          currentVersion = parsed.version;
        }
      } catch (e) {
        log.warn("[RU Updater] Could not parse local version.json, defaulting to 0.2.0");
      }
    }

    log.info(`[RU Updater] Checking for translation updates (current: v${currentVersion})...`);

    const remoteVersionText = await fetchWithTimeout(VERSION_URL, TIMEOUT_MS);
    if (!remoteVersionText) {
      log.debug("[RU Updater] Could not fetch remote version manifest (offline or timeout).");
      return;
    }

    let remoteManifest;
    try {
      remoteManifest = JSON.parse(remoteVersionText);
    } catch (e) {
      log.debug("[RU Updater] Failed to parse remote version.json");
      return;
    }

    const remoteVersion = remoteManifest.version;
    if (!isNewerVersion(remoteVersion, currentVersion)) {
      log.info(`[RU Updater] Русификатор актуален (v${currentVersion}).`);
      return;
    }

    log.info(`[RU Updater] Новая версия обнаружена: v${remoteVersion}. Загрузка обновления...`);

    const filesToUpdate = Array.isArray(remoteManifest.files) && remoteManifest.files.length > 0
      ? remoteManifest.files
      : ["ru-translation.js"];

    const downloadedFiles = [];

    for (const fileName of filesToUpdate) {
      const remoteUrl = `${GITHUB_RAW_BASE}/${fileName}`;
      const code = await fetchWithTimeout(remoteUrl, 5000);

      if (!code) {
        log.warn(`[RU Updater] Не удалось загрузить ${fileName}. Прерывание обновления.`);
        return;
      }

      const marker = fileName.includes("doc") ? "ruDocs" : "BitburnerRussianTranslation";
      if (!validateJsContent(code, marker)) {
        log.error(`[RU Updater] Файл ${fileName} не прошёл проверку целостности. Обновление отменено.`);
        return;
      }

      downloadedFiles.push({ fileName, code });
    }

    // Atomic replacement: write all files to .tmp first, then rename
    for (const item of downloadedFiles) {
      const targetPath = path.join(distDir, item.fileName);
      const tmpPath = path.join(distDir, `${item.fileName}.${Date.now()}.tmp`);

      fs.writeFileSync(tmpPath, item.code, "utf8");
      fs.renameSync(tmpPath, targetPath);
    }

    // Update local version manifest
    const updatedManifest = {
      version: remoteVersion,
      updatedAt: new Date().toISOString().split("T")[0],
      changelog: remoteManifest.changelog || "",
      files: filesToUpdate,
    };
    fs.writeFileSync(localVersionPath, JSON.stringify(updatedManifest, null, 2), "utf8");

    log.info(`[RU Updater] Русификатор успешно обновлён до v${remoteVersion}!`);

    // In-game non-intrusive toast notification
    if (window && !window.isDestroyed()) {
      utils.writeToast(
        window,
        `Русификатор обновлён до v${remoteVersion} (by memasevich)! Изменения применятся при следующем перезапуске.`,
        "info",
        7000,
      );
      utils.writeTerminal(
        window,
        `[RU] Русификатор успешно обновлён до версии v${remoteVersion}. Спасибо за игру!`,
        "success",
      );
    }
  } catch (error) {
    log.error("[RU Updater] Ошибка при фоновом обновлении:", error);
  }
}

module.exports = {
  checkForUpdates,
  isNewerVersion,
  validateJsContent,
  fetchWithTimeout,
};
