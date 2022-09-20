// uso de if else
const condicao = 'verídica'
if (condicao) {
  msg('verídica!')
} else {
  msg('falsa!')
}

// if else com operador ternário
condicao ? msg('verídica!') : msg('falsa!')

//em caso de somente uma condição if
condicao && msg('verídica!')


//função para exibir mensagem no log
function msg(info) {
  console.log(`sua condição é ${info}`)
}