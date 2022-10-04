class Produto {

  #nome
  #marca
  #preco

  get nome () {
    return this.#nome ??= 'Sem nome'
  }

  get preco () {
    return this.#preco ??= 'Sem preço'
  }

  get marca () {
    return this.#marca ??= 'Sem marca'
  }

  constructor(nome, marca, preco) {
    this.#nome = nome
    this.#marca = marca
    this.#preco = preco
  }

  showDados () {
    const { nome, marca, preco } = this
    console.log('==== INFORMAÇÃO DO PRODUTO ====')
    console.log(`Produto: ${nome}`)
    console.log(`Marca: ${marca}`)
    console.log(`Preço ${preco} \n`)
  }

}

// produtos
const  gadgets = [
  new Produto('Caixa de Som Bluetooh', 'JBL', 'R$ 239,59'),
  new Produto('Mini Charge Som', 'Sony', 'R$ 70,99'),
  new Produto('Fone de ouvido sem fio', 'Xiaomi', 'R$ 150,80'),
  new Produto()
]

for (let i = 0; i < gadgets.length; i++) {
  gadgets[i].showDados()
}