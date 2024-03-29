/*
  As "arrow functions" são utilizados para simplificar a escritura de uma função JS
  ou para atribuir uma função anônima a uma variável

  Em casos de um "único" parâmetro na função, podemos omitir o uso dos 
  parentesis e chaves, deixando o código mais enxuto e simples.
  
*/

// exemplos
function ex01() {
  // função tradicional
  function arredondar(n) {
    return Math.round(n)
  }

  // arrow function
  const arredondar2 = (n) => {
    return Math.round(n)
  }

  // arrow function com um único parâmetro
  const arredondar3 = n => Math.round(n)

  console.log(arredondar(2.99))     // 3
  console.log(arredondar2(78.11))   // 78
  console.log(arredondar3(203.89))  // 204
}

function ex02() {
  // função em bloco
  function upper(texto) {
    return texto.toUpperCase()
  }

  // arrow function
  const upper2 = texto => texto.toUpperCase()

  console.log(upper('eduardo'))
  console.log(upper2('rojas'))
}

//call functions
ex01()
ex02()