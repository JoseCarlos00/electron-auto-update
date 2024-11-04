// ARCHIVO DE NAVEGADOR
addEventListener("DOMContentLoaded", async () => {
	const $ = (selector) => document.querySelector(selector);

	$("#button").addEventListener("click", () => {
		window.tutorial.btn("hola");
	});

	$("#version").innerHTML = (await window.tutorial.version()) ?? "No disponible";
});
