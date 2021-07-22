// /* Tudo é objeto em Javascript, todo objeto possui 
// propiedades e métodos, que podem ser diretos ou herdados (protótipo)*/

// //ex01 - Usando método log, do objeto nativo 'console'
// console.log('Usando método log do objeto Console.')

// //ex02 - Usando método random, do objeto nativo 'Math'
// const ex02 = Math.random()

// //ex03 - Usando método toUpperCase, do objeto nativo 'String'
// const ex03 = "testeString".toUpperCase()

// //ex04 - Criando um objeto literal - carro
// const carro = {
//     cor: "Vermelho",
//     marca: "Honda",
//     portas: 4,
//     acelerar() {
//         console.log(`O carro ${this.marca} está acelerando a 25km por hora!`)
//     }
// }

// //ex05 - Criando outro objeto literal - vestido
// const vestido = {
//     cor: "Florido detalhes rosas",
//     marca: "Luna Store",
//     tamanhoG: {temEstoque: false, tamanho: "G"},
//     tamanhoM: {temEstoque: true , tamanho: "M"},
//     info(v, t){
//         if(!v){  //acessando a propiedade tamanhoG q por sua vez tb tem sua propiedade 'temEstoque'
//             console.log(`Vestido de tamanho ${t} sem estoque!`)
//         }else{
//             console.log(`Vestido de tamanho ${t} disponível em estoque!`)
//         }     
//     }
// }

// //chamando o método 'info' do objeto vestido
// vestido.info(vestido.tamanhoG.temEstoque, vestido.tamanhoG.tamanho) // exibindo informação
// vestido.info(vestido.tamanhoM.temEstoque, vestido.tamanhoM.tamanho) // exibindo informação

const compras = {
    alimentos: {
        legumes: ['brocolis', 'cenoura', 'beterraba'],
        biscoitos: ['waffer', 'oreo', 'cookies'],
        frutas: ['maçã', 'pera', 'banana']
    },
    escritorio: {
        itens: ['papel', 'canetas', 'borrachas', 'cadeira home office']
    },

    showAlimentos(a){
        console.log(a)
    },

    showEscritorio(e){
        console.log(e)
    }
}

compras.showAlimentos(compras.alimentos.biscoitos)
compras.showEscritorio(compras.escritorio.itens)