// ARCHIVO DE NAVEGADOR
addEventListener('DOMContentLoaded', () => {
  const $ = (selector) => document.querySelector(selector);

  $('#button').addEventListener('click', () => {
    window.tutorial.btn('hola');
  })
})