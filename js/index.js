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

console.log(document);
//OBJETIVO 1:
//1 - pegar o elemento que representa o botao na tela usando js
const botaoTrailer = document.querySelector(".botao-trailer"); 

//2 - identificar quando o usuario clicou no botao
botaoTrailer.addEventListener("click", () => {
    //4 - abrir o modal na tela
    modal.classList.add("aberto");
}); 

//3 - dar um jeito de pegar o elemento da modal no js
const modal = document.querySelector(".modal");

//OBJETIVO 2:
//1 - pegar o elemento de fechar o modal usando o js
const botaoFecharModal = document.querySelector(".fechar-modal");

//2 - identificar quando o usuario clicar no x
botaoFecharModal.addEventListener("click", () => {
  //3 - fechar a modal
  modal.classList.remove("aberto");
  video.setAttribute("src", "");
});

const video = document.getElementById("video");
