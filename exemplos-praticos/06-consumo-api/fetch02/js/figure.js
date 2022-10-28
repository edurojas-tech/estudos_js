function figure (imagem, descricao) {
  return `
  <figure class="${descricao}">
    <img src="${imagem}" alt="Trulli">
    <figcaption>${descricao}</figcaption>
  </figure>
  `
}