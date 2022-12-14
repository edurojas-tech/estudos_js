/* Elemento HTML referente a categoria */
const categoria = document.querySelector("#category");
/* Elemento HTML referente a lista das letras erradas*/
const letrasErradas = document.querySelector(".wrongLetters");
/* Elemento HTML referente a palavra oculta
   Utilizaremos esse mesmo elemento para exibir as mensagens do jogo*/
const palavraInterface = document.querySelector(".dashes");
/* Array com elementos HTML referentes aos olhos do personagem */
const olhos = Array.from(document.querySelectorAll(".eyes"));
/* Array com elementos HTML referentes as partes do corpo */
let partesBoneco = Array.from(document.querySelectorAll("#person div"));
partesBoneco = partesBoneco.slice(2, partesBoneco.length);
/* Palavra corrente */
let palavraProposta;
/* Lista das letras erradas */
let letrasErradasArray = [];
/* Index da parte do corpo corrente */
let indiceBoneco;
/* Numero de chances do jogador */
const numTentativas = 7;
/* Valor para opacidade dos olhos */
const opacidadeOlhos = 0.3;

const buttonStart = document.querySelector("#startGame");
let palavraOculta = "";

/*
Recebe o evento do teclado e passa apenas o valor da letra para a função tentativa
*/
// function retornaLetra(e) {
//   tentativa(e.key);
// }

/*
Desenha a parte do corpo corrente
*/
function desenhaBoneco() {
  partesBoneco[indiceBoneco].classList.remove("hide");
  indiceBoneco++;
}

/* 
Desenha os olhos do personagem
*/
function desenhaOlhos() {
  olhos.forEach((olho) => {
    olho.style.opacity = 1;
    olho.style.zIndex = 10;
  });
}

/*
Oculta as partes do corpo do personagem
*/
function ocultaBoneco() {
  olhos.forEach((olho) => {
    olho.style.opacity = opacidadeOlhos;
  });
  partesBoneco.forEach((parteBoneco) => {
    parteBoneco.classList.add("hide");
  });
}

/*
Inicia as configurações do jogo
*/
function iniciaJogo() {
  indiceBoneco = 0;
  letrasErradasArray = [];
  showCategoria();
  letrasErradas.innerHTML = "Letras erradas: ";
}

window.addEventListener("load", iniciaJogo);
buttonStart.onclick = () => {
  location.reload()
};

// ============= features aplicas =================
// exibir a categoria
const categorias = {
  frutas: ["banana", "uva", "laranja"],
  marvel: ["spiderman", "thor", "ironman", "hulk"],
  dc: ["batman", "superman", "flash"],
  profissoes: ["programador", "advogado", "contador", "enfermeiro"],
};

function getCategorias() {
  return Object.keys(categorias);
}

function getRandom(lista) {
  return Math.floor(Math.random() * lista.length);
}

function getCategoria() {
  let listaCategoria = getCategorias();
  let random = getRandom(listaCategoria);
  return listaCategoria[random];
}

function showCategoria() {
  let categoriAtual = getCategoria();
  let random = getRandom(categorias[categoriAtual]);
  palavraProposta = categorias[categoriAtual][random];
  palavraInterface.innerHTML = ocultarPalavra(palavraProposta);
  categoria.innerHTML = categoriAtual;
}

function ocultarPalavra(palavra) {
  for (let i = 0; i < palavra.length; i++) {
    palavraOculta += "-";
  }
  return palavraOculta;
}

function tentativa(letra) {
    console.log(letra)
    for (let l = 0; l < palavraProposta.length; l++) {
        palavraInterface.innerHTML[l].replace('-', 'A')
    }
    console.log(palavraInterface.innerHTML)
}

window.addEventListener("keypress", (e) => {
    tentativa(e.key)
});
