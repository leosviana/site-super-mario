/*
OBJETIVO 1 - ao clicar no botao do trailer, devemos abrir a modal com o video do trailer
    1 - pegar o elemento que representa o botao na tela usando js
    2 - identificar quando o usuario clicou no botao
    3 - dar um jeito de pegar o elemento da modal no js
    4 - abrir o modal na tela
OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal
    1 - pegar o elemento de fechar o modal usando o js
    2 - identificar quando o usuario clicar no x
    3 - fechar a modal
*/

const botaoTrailer = document.querySelector(".botao-trailer"); 
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video-youtube");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
}); 

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
  video.setAttribute("src", "");
});