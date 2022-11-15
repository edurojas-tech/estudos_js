// Exemplo de um FOR
for(let contador = 0; contador < 6; contador++) {
    console.log(contador)
}

// ARRAY
let coisas = ['relogio', 'mousepad', 'livros', 'filme' ]

// Objeto
let pessoa = {
    nome: 'Eduardo Rojas',
    idade: 30,
    profissao: 'Programador web'

}

console.log('=== FOR ===')
for(let n = 0; n < coisas.length; n++) {
    console.log(coisas[n])
}

console.log('\n=== FOR OF ===')
for(const item of coisas) {
    console.log(item)
}

console.log('\n=== FOR IN ===')
for(const dado in pessoa) {
    // Acessando de forma dinâmica com forIn a propriedade do objeto 'pesssoa'
    console.log(`${dado}: ${pessoa[dado]}`)
}