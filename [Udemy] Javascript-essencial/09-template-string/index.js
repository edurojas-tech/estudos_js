/*
  template string, é um jeito mais simples de você concatenar variáveis 
  com textos ou conjunto de caractéres
*/

let msg = text => `Descrição da mensagem: ${text}`
console.log(msg('Sua fatura vence dia 28/12/2021'))