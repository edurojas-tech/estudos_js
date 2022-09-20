// uso do FOR

// usando for para iterar uma lista (array) e exibir dados no console
const casa = ['Sala', '3 quartos', '2 banheiros', 'Cozinha', 'Garagem']

console.log('=== SETORES DA CASA ===')
for(i = 0; i < casa.length; i++) {
  console.log(casa[i])
}

/*
  RESULTADO:
    === SETORES DA CASA ===
    Sala
    3 quartos
    2 banheiros
    Cozinha
    Garagem
*/

//exibindo no console números de 10 em 10 até 50
for (n = 0; n <= 50; n += 10){
  console.log(n)
}

/*
  RESULTADO:
    0
    10
    20
    30
    40
    50
*/
