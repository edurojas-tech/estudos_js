// função declarada com estrutura condicional if-else
function parImp(n) {
  if (n % 2 == 0) {
    return "par"
  } else {
    return "impar"
  }
}

/* expressão de função com arrow function 
e chaves e return omitidas, e operadores ternário 
para estrutura condicional (if-else simples) */
let parImpar = n => n % 2 == 0  
  ? "par" 
  : "impar"

let numero = parImp(8)
let numero2 = parImpar(53)

console.log(numero)   // retorna par
console.log(numero2)  // retorna impar