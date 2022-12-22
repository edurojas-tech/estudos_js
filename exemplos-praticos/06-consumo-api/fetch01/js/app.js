/* 
Escopo do teste
- [OK] Faça o consumo da API abaixo (retornará uma lista de animes)
- [OK] Mostre na tela primeiramente apenas o anime naruto e dragon_ball
- [OK] Mostre na tela o restante da listagem de animes sem os dois primeiros já mostrados anteriormente
- [OK] Cada anime mostrado na tela deve ter o título e a imagem
- [ok] CSS de forma que desejar
*/

const api = "https://anime-facts-rest-api.herokuapp.com/api/v1";
let dbz = document.getElementById("dbz");
let naruto = document.getElementById("naruto")

fetch(api).then(function (response) {
  response.json().then(function (resp) {
    document.querySelector("#animes").innerHTML = resp.data.map((x) =>
    cardTemplate(x.anime_name, x.anime_img)).join("")
  });
});

function cardTemplate (name, img) {
  return `<div class="card ${name}">
      <div class="nameCard">
        <h2>${name}</h2>
      </div>
      <div class="imgCard">
        <img src="${img}" alt="anime">
      </div>
    </div>`
}
