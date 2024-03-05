// PUENTE
const { contextBridge, ipcRenderer } = require('electron');

ipcRenderer.on('btnReply', (_event, args) => {
  const $ = (selector) => document.querySelector(selector);
  
  $('.container').innerText=args
})

contextBridge.exposeInMainWorld('tutorial', {
  btn: (args) => ipcRenderer.send('button', args)
})