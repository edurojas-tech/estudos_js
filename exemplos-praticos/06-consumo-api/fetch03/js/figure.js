function figure (descricao, img) {
  return `
  <figure class="${descricao}">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${img + 1}.png">
    <figcaption>${descricao}</figcaption>
  </figure>
  `
}