//Uso do rest e spread
//rest
const showList = (empresa, ...clientes) => {
    console.log(
        `Empresa : ${empresa} \nClientes: ${clientes}`
    )
}

showList("Avenjs", "Google", " Uber", " Facebook")

//spread
const numeros = [23, 55, 1325, 855, 1]
console.log(Math.max(...numeros)) // mesma coisa que Math.max(23,55,1325,855,1)

const carro = {
    cor: "Vermelho",
    marca: "Honda",
    portas: 4,
    acelerar() {
        console.log(`O carro ${this.marca} está acelerando a 25km por hora!`)
    }
}

const cloneCar = {...carro} // criando um novo objeto baseado no modelo carro
cloneCar.estilo = 'esportivo'
const carroIdent = carro
console.log(cloneCar)
console.log(carro)
console.log(carroIdent)