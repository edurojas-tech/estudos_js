/* TRABALHANDO COM REGEX - Expressões Regulares */

const cpf = '221.411.876-75'
const cpfReg = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/
console.log(`
    Validando CPF: ${cpf} 
    com regex: ${cpfReg}
    é válido?: ${cpfReg.test(cpf)}`
)

const cnpj = "48.345.678/0003-00"
const CnpjReg = /^[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0-9]{4}-[0-9]{2}/
console.log(`
    Validando CNPJ: ${cnpj} 
    com regex: ${CnpjReg}
    é válido?: ${CnpjReg.test(cnpj)}`
)

const hello2 = 'oi hello'
const hello3 = 'hello mundo hhh'
const helloRegx = /^hello/
const oiReg = /mundo$/
const telefone = '(34) 9 9225-7447'
const regex = /\([0-9]{2}\) 9 [0-9]{4}-[0-9]{4}/

const email = "dudu@com"
const emailRegex = /[a-z]@[a-z].[a-z]/  // valida se tem arroba pra ser email válido
console.log(`
Validando EMAIL: ${email} 
com regex: ${emailRegex}
é válido?: ${emailRegex.test(email)}`
)



//console.log(helloRegx.test(hello2))
//console.log(helloRegx.test(hello3))
//console.log(oiReg.test(hello3))