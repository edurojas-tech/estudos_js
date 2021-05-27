// ESCOPO DE VÁRIAVEL
/* O escopo refere-se ao local em onde podemos acessar a variável no algoritmo.
   As variáveis podem ser locais ou globais.
*/

var miVar = 'GLOBAL'
otraVar = 'global'

function miFunc(){
    var miVar = 'LOCAL'
    return miVar
}

function otraFunc(){
    otraVar = 'local'
    return otraVar
}

console.log(miVar)      // esperado GLOBAL
console.log(miFunc());  // esperado LOCAL
console.log(otraVar)    // esperado global
console.log(otraFunc()) // esperado local