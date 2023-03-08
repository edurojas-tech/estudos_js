import Cadastro from './cadastro.js'

const button = document.getElementById("btn")
button.onclick = () => {
  let novoPost = document.getElementById("novopost").value
  let imagemURL = document.getElementById("imagemURL").value
  let conteudo = document.getElementById("conteudo").value
  
  novoPost && imagemURL && conteudo
    ? cadastrar(novoPost, imagemURL, conteudo)
    : alert('Dados inválidos!')
}

function cadastrar (...tarefa) {
  const cadastro = new Cadastro (...tarefa)
  cadastro.registrar()
  location.reload()
}