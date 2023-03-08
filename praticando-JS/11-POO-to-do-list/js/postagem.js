class Postagem {
  #nome
  #imagemURL
  #descricao

  get nome () {
    return this.#nome ??= ''
  }

  get imagemURL () {
    return this.#imagemURL ??= ''
  }

  get descricao () {
    return this.#descricao ??= ''
  }

  constructor(nome, imagem, descricao){
    this.#nome = nome
    this.#imagemURL = imagem
    this.#descricao = descricao
  }
}

export default Postagem