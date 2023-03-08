// comando que faz interpretador verificar de forma mais rigorosas
'use strict'

// const com método que não permite mudar o escopo do Objeto
const user = Object.freeze( { 
  name: 'Eduardo Rojas',
  age: 25
})

// a partir desta linha vai apresentar erro, visto que estamos 
// usando 'use strict' e método freeze
user.course = 'Administration'
user.matricula = 342
user.name = 'Roberto Silva'
user.age = 22

//exibindo objeto no console
console.log(user)