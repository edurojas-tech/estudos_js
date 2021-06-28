import contas from "./contasAll.js"
const pagas = contas.filter(p =>{
    return p.status == "pago"
})

export default pagas;