/*
  Conceito de funções, consistem em bloco de códigos que tem como
  objetivo realizar uma funcionalidade ou tarefa específica.

  Toda função vem com nome atribuido depois de ser criada com palavra-chave
  'Function' 
*/

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a > b ? a - b : b - a;
}

function operacaoes(op = "soma", a, b) {
  switch (op) {
    case "soma":
      return somar(a, b);

    case "sub":
      return subtrair(a, b);
  }
}

console.log(operacaoes(undefined, 40, 60));
