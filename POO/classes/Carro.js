class Carro {
  constructor(marca, cor, portas, modelo) {
    this.marca = marca,
    this.cor = cor
    this.portas = portas,
    this.modelo = modelo
  }

  ficha () {
    console.table(this)
  }
}

const mercedez = new Carro(
  'Mercedez',
  'cinza',
  4,
  'esportivo'
)

const toyota = new Carro(
  'Toyota',
  'branco',
  4,
  'popular'
)

const carros = [mercedez.ficha(), toyota.ficha()]
console.log(carros)
