const acessibilidade = document.querySelector(".btn-accessibilidade");
const menu = document.querySelector(".menu-acessibilidade");
const botoes = document.querySelector(".botoes-acessibilidade-menu")
const ativarSliderTexto = document.getElementById("slider-texto");
const slider = document.getElementById("tamanhoTexto");
const divSliderTexto = document.getElementById("slider-texto");
const div = document.getElementById("range-text-size");


acessibilidade.addEventListener("click", () =>
    menu.classList.toggle("active"));

acessibilidade.addEventListener("click", () =>
    botoes.classList.toggle("active"));


ativarSliderTexto.addEventListener("click", () =>
    slider.classList.toggle("active"));

divSliderTexto.addEventListener("click", () =>
    div.classList.toggle("active"));