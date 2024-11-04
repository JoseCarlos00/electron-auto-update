// ARCHIVO MAIN
const { app, BrowserWindow, ipcMain } = require("electron");
const { updateElectronApp, UpdateSourceType } = require("update-electron-app");
const log = require("electron-log");
const path = require("path");

// Inicializar el logger
// Configura el logger para guardar los logs en un archivo
log.transports.file.resolvePath = () => path.join(app.getPath("userData"), "logs", "app.log");
log.transports.file.level = "info";
log.info("La aplicacion se ha iniciado");

updateElectronApp({
	logger: log,
	notifyUser: true,
});

if (require("electron-squirrel-startup")) app.quit();

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
		},
	});

	win.loadFile("index.html");

	ipcMain.on("button", (event, args) => {
		event.reply("btnReply", "¿cómo estás?");
	});
};

app.on("ready", () => {
	createWindow();

	// MAC
	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

// WINDOWS & LINUX
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
