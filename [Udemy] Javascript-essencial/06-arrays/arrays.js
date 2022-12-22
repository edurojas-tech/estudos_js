// array de strings
let tarefas = [
  "Estudar JS", 
  "Estudar Inglês", 
  "ir ao mercado"
];

// array de números - int
const pares = [2, 4, 6, 8, 10, 12]

// array de números - float
const impares = [3, 5, 7, 9, 11, 13]

// array de objetos
const carros = [
  {marca: "Toyota", portas: 4, cor: 'prata'},
  {marca: "Nissan", portas: 2, cor: 'vermelha'},
  {marca: "Fiat", portas: 4, cor: 'branco'},
]

// inserindo dados no final do array com o método 'push()'
tarefas.push('Correr no parque', 'Ir ao cinema')

// inserindo dados no final do array com o método 'unshift()'
tarefas.unshift('Tomar café')

// removendo ultimo elemento do array, com método pop()
tarefas.pop()

// removendo o primeiro elemento do array, com método shift()
tarefas.shift()


// exibindo os arrays no console do terminal ou browser
console.log(tarefas);
console.log(carros);