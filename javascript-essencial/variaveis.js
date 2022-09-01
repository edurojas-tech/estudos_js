// === Variáveis e seus tipos ===
var tipoString = 'instruções de caractéres ou textos'   //type string
var tipoNumero = 22                                     //type number int
var tipoNumeroFloat = 55.15                             //type number float
var tipoNulo = null                                     // nulo
var tipoArray = ['1', '2', '3']                         // array - Object
var tipoObjeto = {                                      // Object
    cor: "preto com laranja",
    tipo: "estojo",
    aberto: true,
    status() {
        let tipoBoolean = true
        this.aberto && console.log('está aberto!')
        console.log(`Dentro do bloco status: ${tipoBoolean}`) // -> dentro do escopo local
    }
}

                        


let tipoBoolean = 'agora mudou' // escopo global
tipoObjeto.status()
console.log(typeof(tipoArray))

let tipoObjeto2 = 54545
console.log(tipoObjeto2)