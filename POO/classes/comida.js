// Class de 'comida' para um cardápio
class Comida {
  constructor (prato, preco, tipo) {
    this.prato = prato
    this.preco = preco
    this.tipo = tipo
  }

  showComida () {
    const { prato, preco, tipo } = this
    console.log(`Prato: ${ this.validaDado(prato) }`)
    console.log(`Preço: ${ this.validaDado(preco) }`)
    console.log(`Tipo: ${ this.validaDado(tipo) } \n`)
  }

  validaDado(dado) {
    return dado == undefined && 'sem informação'
  }
}

// array de comidas 
const  cardapio = [
  new Comida('X-tudo', 'R$ 25,50', 'Sanduíche'),
  new Comida('Jantinha', 'R$ 17,99', 'Prato feito'),
  new Comida('Feijoada', 'R$ 10,99', 'Prato feito'),
  new Comida()
]

// exibindo os dados no console
console.log('\n==== OPÇÕES DO CARDÁPIO ==== \n')
for (let i = 0; i < cardapio.length; i++) {
  cardapio[i].showComida()
}
