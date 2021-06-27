//02 função flecha kkk, ou arrow function

//função tradicional
function jogarbola(){
    console.log('Jogando...')
}

//arrow function - onde uma váriavel se torna uma função ou tb conhecida como função de primeira classe.
const jogarBola = () => {
    console.log('Jogando a bola!')
}

//quando a função possui apenas um parametro e retorna somente um valor, podendo eliminar os parentesis e as chaves, simplificando a função.
const wordUpper = w => console.log(w.toUpperCase())

jogarbola()
jogarBola()
wordUpper('edu')