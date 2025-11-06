import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./util.js";
import { getPreloadPath } from "./pathResolver.js";

const createWindow = () => {
   const mainWindow = new BrowserWindow({
      show: false,
      autoHideMenuBar: true,
      backgroundColor: "#0D1117",
      title: "Shadow Proxy",
      webPreferences: {
         preload: getPreloadPath(),
      }
   });

   if (isDev()) {
      mainWindow.loadURL('http://localhost:3000');
   } else {
      mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));
   }


   // Make the window display without a visual flash
   mainWindow.once('ready-to-show', () => {
      mainWindow.show();
   });
}


app.whenReady().then(() => {
   createWindow();


   // macOS apps generally continue running even without any windows open. Activating the app when no windows are available should open a new one
   app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
         createWindow();
      }
   });
})

//On Windows and Linux, closing all windows will generally quit an application entirely
app.on('window-all-closed', () => {
   //In contrast, macOS apps generally continue running even without any windows open.
   if (process.platform !== 'darwin') {
      app.quit()
   }
})