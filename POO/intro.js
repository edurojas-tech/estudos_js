// Paradigma de Orientação a Objetos ou Programação Orientado a Objetos

//Procedural
let x = 5; let y = 3; let op = 'mult'
function calcular(v1, v2, op){
    switch(op){
        case 'somar':
            console.log(v1 + v2)
        break;

        case 'sub':
            console.log(v1 - v2)
        break;

        case 'mult':
            console.log(v1 * v2)
        break;

        case 'div':
            console.log(v1 / v2)
        break;
    }
}

calcular(x, y, op)

//POO
const calcularr = {
    v1: 100,
    v2: 30,
    op: "somar",
    operacao(){
        switch(this.op){
            case 'somar':
                console.log(this.v1 + this.v2)
            break;
    
            case 'sub':
                console.log(this.v1 - this.v2)
            break;
    
            case 'mult':
                console.log(this.v1 * this.v2)
            break;
    
            case 'div':
                console.log(this.v1 / this.v2)
            break;
        }
    }
}
calcularr.operacao()