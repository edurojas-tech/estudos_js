// uso de if else
const condicao = 2
if (condicao) {
  msg('verídico com if-else')
} else {
  msg('falsa!')
}

// if else com operador ternário
condicao ? msg('verídico com ternário') : msg('falsa!')

//em caso de somente uma condição if
condicao &&  msg(condicao + ' com &&')


//função para exibir mensagem no log
function msg(info) {
  console.log(`sua condição é ${info}`)
}