/* TRABALHANDO COM REGEX - Expressões Regulares */

const telefone = '(34) 9 9225-7447'
const regex = /\([0-9]{2}\) 9 [0-9]{4}-[0-9]{4}/
console.log(regex.test(telefone)) // retorna true


const cpf = '131.411.876-75'
const cpfReg = /[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/
console.log(cpfReg.test(cpf))

const hello2 = 'oi hello'
const hello3 = 'hello mundo hhh'
const helloRegx = /^hello/
const oiReg = /mundo$/

console.log(helloRegx.test(hello2))
console.log(helloRegx.test(hello3))
console.log(oiReg.test(hello3))
