/* 
Destructuring, o termo usado 
pra declarar variáveis no momento de 
destructurar um OBjeto
*/

const computador = {
    marca: 'Dell',
    cor: 'preta',
    tipo: 'laptop'
}

let {marca, cor} = computador
console.log(marca, cor)


const frutas = ['banana', 'maçã', 'mexirica']
const [f1, f2, f3] = frutas
console.log(f1,f2)