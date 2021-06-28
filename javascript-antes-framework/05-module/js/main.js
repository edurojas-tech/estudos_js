import constasApagar from './constasApagar.js'
import contasPagas from './contasPagas.js'

//contas pagas
const cPagas = {
    desc: 'Contas Pagas',
    pagas: contasPagas,
    showInfo(){
        console.log(`${this.desc}`)
        console.log(JSON.stringify(this.pagas))
    }
}

// contas a pagar
const cPagar = {
    desc: 'Contas a Pagar',
    apagar: constasApagar,
    showInfo(){
        console.log(`${this.desc}`)
        console.log(JSON.stringify(this.apagar))
    }
}

//exibindo dados no console
cPagas.showInfo()
cPagar.showInfo()