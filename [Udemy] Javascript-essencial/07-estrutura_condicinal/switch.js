const opcao = 2
switch (opcao) {
  case 1: 
    console.log('escolheu opção 1')
  break

  case 2: 
    console.log('escolheu opção 2')
  break

  case 3: 
    console.log('escolheu opção 3')
  break

  default: 
    console.log('opção invalida!')
}


const turno = 'Vespertina'
switch (turno) {
  case 'Matutina':
    console.log("Voce está no turno da manhã!")
  break

  case 'Vespertina':
    console.log("Voce está no turno da tarde!")
  break

  case 'Noturno':
    console.log("Voce está no turno da noite!")
  break

  default:
    console.log("Voce está no turno da madrugada!")
}