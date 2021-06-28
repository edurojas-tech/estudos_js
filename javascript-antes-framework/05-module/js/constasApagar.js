import contas from "./contasAll.js"
const aPagar = contas.filter(p =>{
    return p.status == "a pagar"
})

export default aPagar;