//E possível destruturar objetos e array

const carro = {
    cor: "Vermelho",
    marca: "Honda",
    portas: 4,
    acelerar() {
        console.log(`O carro ${this.marca} está acelerando a 25km por hora!`)
    }
}

//sem destruturar
const corCar = carro.cor
const marcaCar = carro.marca

/* ou destruturando e com isso cada propiedade se torna uma variável. 
E cada variável tem q ser igual ao nome da propiedade, 
não segue ordem ao declarar*/

const {cor, portas} = carro
console.log(cor, portas)

//com arrays, as variáveis segue a ordem de cada item do array indice 1, indice2,...indiceN
const FRUTAS = ['Tangerina', 'Pêssego', 'Maça', 'Banana']
const [t, p, b] = FRUTAS
console.log(t,p,b)
FRUTAS.push('Uva')
console.log(FRUTAS)