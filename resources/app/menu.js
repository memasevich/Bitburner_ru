/* eslint-disable @typescript-eslint/no-var-requires */
const { app, Menu, dialog, shell } = require("electron");
const log = require("electron-log");
const Store = require("electron-store");
const utils = require("./utils");
const storage = require("./storage");
const store = new Store();
const { steamworksClient } = require("./steamworksUtils");

/** @import {LogLevel} from "electron-log" */
/**
 * @param {*} window
 * @param {"file-log-level" | "console-log-level"} configKey
 * @param {LogLevel} logLevel
 * @returns {*}
 */
function createLogLevelMenuItem(window, configKey, logLevel) {
  return {
    label: logLevel,
    type: "checkbox",
    checked: store.get(configKey) === logLevel,
    click: () => {
      if (configKey === "file-log-level") {
        log.transports.file.level = logLevel;
      } else {
        log.transports.console.level = logLevel;
      }
      store.set(configKey, logLevel);
      refreshMenu(window);
    },
  };
}

function getMenu(window) {
  const canZoomIn = utils.getZoomFactor() <= 2;
  const zoomIn = () => {
    const currentZoom = utils.getZoomFactor();
    const newZoom = currentZoom + 0.1;
    if (newZoom <= 2.0) {
      utils.setZoomFactor(window, newZoom);
      refreshMenu(window);
    } else {
      log.log("Max zoom out");
      utils.writeToast(window, "Больше увеличить нельзя", "warning");
    }
  };

  const canZoomOut = utils.getZoomFactor() >= 0.5;
  const zoomOut = () => {
    const currentZoom = utils.getZoomFactor();
    const newZoom = currentZoom - 0.1;
    if (newZoom >= 0.5) {
      utils.setZoomFactor(window, newZoom);
      refreshMenu(window);
    } else {
      log.log("Max zoom in");
      utils.writeToast(window, "Больше уменьшить нельзя", "warning");
    }
  };

  const canResetZoom = utils.getZoomFactor() !== 1;
  const resetZoom = () => {
    utils.setZoomFactor(window, 1);
    refreshMenu(window);
    log.log("Reset zoom");
  };

  return Menu.buildFromTemplate([
    {
      label: "Файл",
      submenu: [
        {
          label: "Сохранить игру",
          click: () => window.webContents.send("trigger-save"),
        },
        {
          label: "Экспортировать сохранение",
          click: () => window.webContents.send("trigger-game-export"),
        },
        {
          label: "Экспортировать скрипты",
          click: () => window.webContents.send("trigger-scripts-export"),
        },
        {
          type: "separator",
        },
        {
          label: "Загрузить последнее сохранение",
          click: async () => {
            try {
              const saveGame = await storage.loadLastFromDisk(window);
              window.webContents.send("push-save-request", { save: saveGame });
            } catch (error) {
              log.error(error);
              utils.writeToast(window, "Не удалось загрузить последнее сохранение с диска", "error", 5000);
            }
          },
        },
        {
          label: "Загрузить из файла",
          click: async () => {
            const defaultPath = storage.getSaveFolder(window);
            const result = await dialog.showOpenDialog(window, {
              title: "Загрузить из файла",
              defaultPath: defaultPath,
              buttonLabel: "Загрузить",
              filters: [
                { name: "Сохранения игры", extensions: ["json", "json.gz", "txt"] },
                { name: "Все файлы", extensions: ["*"] },
              ],
              properties: ["openFile", "dontAddToRecent"],
            });
            if (result.canceled) return;
            const file = result.filePaths[0];

            try {
              const saveGame = await storage.loadFileFromDisk(file);
              window.webContents.send("push-save-request", { save: saveGame });
            } catch (error) {
              log.error(error);
              utils.writeToast(window, "Не удалось загрузить сохранение с диска", "error", 5000);
            }
          },
        },
        {
          label: "Загрузить из Steam Cloud",
          enabled: storage.isCloudEnabled(),
          click: async () => {
            try {
              const saveData = await storage.getSteamCloudSaveData();
              storage.pushSaveGameForImport(window, saveData, false);
            } catch (error) {
              log.error(error);
              utils.writeToast(window, "Не удалось загрузить из Steam Cloud", "error", 5000);
            }
          },
        },
        {
          type: "separator",
        },
        {
          label: "Автосохранение на диск",
          type: "checkbox",
          checked: storage.isAutosaveEnabled(),
          click: (menuItem) => {
            storage.setAutosaveConfig(menuItem.checked);
            utils.writeToast(window, `${menuItem.checked ? "Включено" : "Отключено"} Auto-Save to Disk`, "info", 5000);
            refreshMenu(window);
          },
        },
        {
          label: "Автосохранение в Steam Cloud",
          type: "checkbox",
          enabled: steamworksClient !== undefined,
          checked: storage.isCloudEnabled(),
          click: (menuItem) => {
            storage.setCloudEnabledConfig(menuItem.checked);
            utils.writeToast(
              window,
              `${menuItem.checked ? "Включено" : "Отключено"} Auto-Save to Steam Cloud`,
              "info",
              5000,
            );
            refreshMenu(window);
          },
        },
        {
          label: "Восстанавливать новейшее при загрузке",
          type: "checkbox",
          checked: store.get("onload-restore-newest", true),
          click: (menuItem) => {
            store.set("onload-restore-newest", menuItem.checked);
            utils.writeToast(
              window,
              `${menuItem.checked ? "Включено" : "Отключено"} Restore Newest on Load`,
              "info",
              5000,
            );
            refreshMenu(window);
          },
        },
        {
          type: "separator",
        },
        {
          label: "Открыть папку",
          submenu: [
            {
              label: "Открыть папку игры",
              click: () => shell.openPath(app.getAppPath()),
            },
            {
              label: "Открыть папку сохранений",
              click: () => {
                const path = storage.getSaveFolder(window);
                shell.openPath(path);
              },
            },
            {
              label: "Открыть папку журналов",
              click: () => shell.openPath(app.getPath("logs")),
            },
            {
              label: "Открыть папку данных",
              click: () => shell.openPath(app.getPath("userData")),
            },
          ],
        },
        {
          type: "separator",
        },
        {
          label: "Выйти",
          click: () => app.quit(),
        },
      ],
    },
    {
      label: "Правка",
      submenu: [
        { label: "Отменить", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
        { label: "Повторить", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
        { type: "separator" },
        { label: "Вырезать", accelerator: "CmdOrCtrl+X", selector: "cut:" },
        { label: "Копировать", accelerator: "CmdOrCtrl+C", selector: "copy:" },
        { label: "Вставить", accelerator: "CmdOrCtrl+V", selector: "paste:" },
        { label: "Выбрать всё", accelerator: "CmdOrCtrl+A", selector: "selectAll:" },
      ],
    },
    {
      label: "Вид",
      submenu: [
        {
          label: "Полный экран",
          accelerator: "f9",
          click: (() => {
            let full = false;
            return () => {
              full = !full;
              window.setFullScreen(full);
            };
          })(),
        },
        {
          label: "Сделать скриншот окна",
          accelerator: "F12",
          click: async () => {
            try {
              const img = await window.webContents.capturePage();
              const fs = require("fs");
              const outDir = "C:/Users/Lecoo/.gemini/antigravity/brain/cf797146-3dbb-437a-8c01-8dba0ac9ceb8";
              const filePath = `${outDir}/game_screenshot_${Date.now()}.png`;
              fs.writeFileSync(filePath, img.toPNG());
              utils.writeToast(window, "Скриншот сохранён", "info");
            } catch (err) {
              log.error(err);
            }
          },
        },
        {
          type: "separator",
        },
        {
          label: "Увеличить",
          enabled: canZoomIn,
          accelerator: "CommandOrControl+numadd",
          click: zoomIn,
        },
        {
          label: "Увеличить (не цифровая клавиатура)",
          enabled: canZoomIn,
          visible: false,
          accelerator: "CommandOrControl+Plus",
          acceleratorWorksWhenHidden: true,
          click: zoomIn,
        },
        {
          label: "Уменьшить",
          enabled: canZoomOut,
          accelerator: "CommandOrControl+numsub",
          click: zoomOut,
        },
        {
          label: "Уменьшить (не цифровая клавиатура)",
          enabled: canZoomOut,
          accelerator: "CommandOrControl+-",
          visible: false,
          acceleratorWorksWhenHidden: true,
          click: zoomOut,
        },
        {
          label: "Сбросить масштаб",
          enabled: canResetZoom,
          accelerator: "CommandOrControl+num0",
          click: resetZoom,
        },
        {
          label: "Сбросить масштаб (не цифровая клавиатура)",
          enabled: canResetZoom,
          accelerator: "CommandOrControl+0",
          visible: false,
          acceleratorWorksWhenHidden: true,
          click: resetZoom,
        },
        {
          type: "separator",
        },
        {
          label: "Автоматически скрывать верхнее меню",
          type: "checkbox",
          checked: storage.isMenuHideEnabled(),
          click: (menuItem) => {
            storage.setMenuHideConfig(menuItem.checked);
            window.setAutoHideMenuBar(menuItem.checked);
            if (menuItem.checked) {
              window.setMenuBarVisibility(false);
            } else {
              window.setMenuBarVisibility(true);
            }
            refreshMenu(window);
          },
        },
      ],
    },
    {
      label: "Перезагрузка",
      submenu: [
        {
          label: "Перезагрузить",
          accelerator: "f5",
          click: () => window.loadFile("index.html"),
        },
        {
          label: "Перезагрузить и завершить все скрипты",
          click: () => utils.reloadAndKill(window, true),
        },
      ],
    },
    {
      label: "Отладка",
      submenu: [
        {
          label: "Уровень журналирования в файл",
          submenu: [
            createLogLevelMenuItem(window, "file-log-level", "error"),
            createLogLevelMenuItem(window, "file-log-level", "warn"),
            createLogLevelMenuItem(window, "file-log-level", "info"),
            createLogLevelMenuItem(window, "file-log-level", "verbose"),
            createLogLevelMenuItem(window, "file-log-level", "debug"),
            createLogLevelMenuItem(window, "file-log-level", "silly"),
          ],
        },
        {
          label: "Уровень журналирования в консоль",
          submenu: [
            createLogLevelMenuItem(window, "console-log-level", "error"),
            createLogLevelMenuItem(window, "console-log-level", "warn"),
            createLogLevelMenuItem(window, "console-log-level", "info"),
            createLogLevelMenuItem(window, "console-log-level", "verbose"),
            createLogLevelMenuItem(window, "console-log-level", "debug"),
            createLogLevelMenuItem(window, "console-log-level", "silly"),
          ],
        },
        {
          type: "separator",
        },
        {
          label: "Открыть инструменты разработчика",
          accelerator: "f12",
          click: () => window.webContents.openDevTools(),
        },
        {
          label: "Удалить данные Steam Cloud",
          enabled: steamworksClient !== undefined,
          click: () => {
            if (steamworksClient === undefined || steamworksClient.cloud.listFiles().length === 0) {
              log.info("Файл в Steam Cloud отсутствует");
              return;
            }
            try {
              storage.deleteCloudFiles();
            } catch (error) {
              log.error(error);
            }
          },
        },
      ],
    },
  ]);
}

function refreshMenu(window) {
  Menu.setApplicationMenu(getMenu(window));
}

module.exports = {
  getMenu,
  refreshMenu,
};


