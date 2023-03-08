import Postagem from "./postagem.js"

class Cadastro extends Postagem{
  constructor(nome, imagemURL, descricao){
    super(nome, imagemURL, descricao)
  }

  registrar() {
    localStorage.setItem(`postagem-${this.nome}`, JSON.stringify({
      nome: this.nome,
      imagemURL: this.imagemURL,
      descricao: this.descricao
    }))
  }
}

export default Cadastro