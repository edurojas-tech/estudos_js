// === Classe Pai ===
class Produto {
  #name
  #price
  #code
  #brand

  get name () {
    return this.#name ??= ''
  }

  get price () {
    return this.#price ??= ''
  }

  get code () {
    return this.#code ??= ''
  }

  get brand () {
    return this.#brand ??= ''
  }

  constructor(name, price, code, brand) {
    this.#name = name
    this.#price = price
    this.#code = code
    this.#brand = brand
  }

  showInformations() {
    console.log(
      `Produto: ${this.name}\n`,
      `Preço: ${this.price},00\n`,
      `Código: ${this.code}\n`,
      `Marca: ${this.brand}\n\n`,
    )
  }
}

// === Classe filha ===
class Alimento extends Produto {
  #validate

  get validate () {
    return this.#validate ??= ''
  }

  constructor(name, price, code, brand, validate) {
    super(name, price, code, brand)
    this.#validate = validate
  }


  showInformations() {
    console.log(
      `Produto: ${this.name}\n`,
      `Preço: ${this.price},00\n`,
      `Código: ${this.code}\n`,
      `Marca: ${this.brand}\n`,
      `Validade: ${this.validate}`,
    )
  }
}


// ==== instanciando ====
const celular = new Produto('Redmi note 8', 1500, 'xia202010', 'Xiaomi')
const celular2 = new Produto('Smartphone Zenfone 3', 500, 'zen20143030', 'Asus')
const pizza = new Alimento('Pizza 4 queijos', 30, 'sad202020', 'Sadia', '30/03/2023')

// ==== exibindo as informações ====
celular.showInformations()
celular2.showInformations()
pizza.showInformations()
