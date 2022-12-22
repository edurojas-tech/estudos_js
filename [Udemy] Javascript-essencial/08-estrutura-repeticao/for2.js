// ARRAY
let coisas = ['relogio', 'mousepad', 'livros', 'filme' ]

// Objeto
let pessoa = {
    nome: 'Eduardo Rojas',
    idade: 30,
    profissao: 'Programador web'

}

// Exemplo de um FOR
for(let contador = 0; contador < 6; contador++) {
    console.log(contador)
}

// Iterando array coisas com for
console.log('=== FOR ===')
for(let n = 0; n < coisas.length; n++) {
    console.log(coisas[n])
}

// Iterando array coisas com for...of
console.log('\n=== FOR OF ===')
for(const item of coisas) {
    console.log(item)
}

// Acessando de forma dinâmica com for...in a propriedade do objeto 'pesssoa'
console.log('\n=== FOR IN ===')
for(const dado in pessoa) {
    console.log(`${dado}: ${pessoa[dado]}`)
}