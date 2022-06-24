const variaveis = {
    nome : "Eduardo Rojas",  //tipo string
    idade : 25,              //tipo number inteiro
    altura : 1.72,           //tipo number float
    temMoto : true,          //tipo boolean verdadeiro
    temCarro : false,        //tipo boolean falso
    estadoCivil : null,      //tipo Null ou Nulo
    valorIndefinido,        //tipo undefined
    passatempo : ["treinar musculação", "Leitura","Assistir Marvel"],   //tipo array

    //executando no console do node.js
    showVars(){
        console.log(this.nome);
        console.log(this.idade);
        console.log(this.altura);
        console.log(this.temMoto);
        console.log(this.temCarro);
        console.log(this.estadoCivil);
        console.log(this.valorIndefinido);
    }

    /*
        ::: Glossário do JS :::
        O código 'console.log()', recebe as variáveis para ser exibida no console do node, 
        o mesmo pode ser exibido no console do browser.
        Este código é do tipo método do Objeto console, ou uma função nativa da linguagem.

        variáveis dentro de um objeto, são propriedades ou valores, já funções são métodos.
    */
}
variaveis.showVars();
