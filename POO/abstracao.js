// Abtração de POO

/*
    Entidade;
    identidade;
    atributo ou propiedade;
    ação ou método

    entidade é tudo aquilo que vai ser representado do mundo real no seu código JS;
    identidade é aquilo q vai representar a entidade dentro código;
    atributos: são características do objeto;
    ação: função ou tarefa que deve ser executado
*/

//objeto literal
const cadeira = {
    cor: 'azul',
    qtePernas: 4,
    giratoria: true,
    girar(){ 
        if (this.gira) { 
            return 'é giratória!'
        } else { 
            return 'não gira!'
        } 
    },
    showCor(){
        return this.color
    },

    msg(){
        return `

            A cadeira ${this.showCor()}, ${this.girar()}

        `
    }
}

// arrays cadeiras - objeto cadeira
const cadeiras = [
    { 
        qtePernas: 4, 
        color: 'vermelha', 
        gira: false, 
        girar(){ 
            if (this.gira) { 
                return 'é giratória!'
            } else { 
                return 'não gira!'
            } 
        },
        showCor(){
            return this.color
        },

        msg(){
            return `

                A cadeira ${this.showCor()}, ${this.girar()}

            `
        }
        
    },

    { 
        qtePernas: 3, 
        color: 'azul', 
        gira: true, 
        girar(){ 
            if (this.gira) { 
                return 'é giratória!'
            } else { 
                return 'não gira!'
            } 
        },
        showCor(){
            return this.color
        },

        msg(){
            return `

                A cadeira ${this.showCor()}, ${this.girar()}

            `
        }
    },
    
    { 
        qtePernas: 4, 
        color: 'verde', 
        gira: false, 
        girar(){ 
            if (this.gira) { 
                return 'é giratória!'
            } else { 
                return 'não gira!'
            } 
        },
        showCor(){
            return this.color
        },

        msg(){
            return `

                A cadeira ${this.showCor()}, ${this.girar()}

            `
        }
    },
]

for (let i = 0; i < cadeiras.length; i++) {
    console.log(cadeiras[i].msg())
}


//Exemplo de objeto sofá
class Sofa {
    constructor(cor, marca, valor){
        this.cor = cor,
        this.marca = marca,
        this.valor = valor
    }
    
    showDados(){
        console.log(this)
    }
}

const sofaLuxo = new Sofa('Marrom', 'Ortobom', 1354.00)
const sofaComum = new Sofa('Vermelho', 'Tuchê', 255.00)

sofaLuxo.showDados()
sofaComum.showDados()
