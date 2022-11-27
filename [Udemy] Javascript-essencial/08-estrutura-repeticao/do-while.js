// estrutura de repetição: uso do do-while 
let  n = 0
do {
  n += 10
  console.log(n)
} while (n < 50)

let i = 0
const casa = ['Sala', '3 quartos', '2 banheiros', 'Cozinha', 'Garagem']
console.log('=== SETORES DA CASA ===')
do {
  i++
  console.log(casa[i])
} while(i < casa.length - 1)