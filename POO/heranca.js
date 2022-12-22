/* 
  conceito de herançaa, consiste quando um objeto herda propiedades de uma superClasse ou 
  objeto pai.
*/

class Humano {
  constructor(cor, peso, altura) {
    (this.cor = cor), (this.peso = peso + "Kg"), (this.altura = altura);
  }

  dormir() {
    console.log("Dormindo...");
  }

  comer() {
    console.log("Comendo...");
  }
}

class Homem extends Humano {
  constructor() {
    super("Branco", 81, 1.72);
    (this.tipo = "Gerente de Vendas"),
      (this.mascl = true),
      (this.cabelo = "Curto");
  }
}

class Mulher extends Humano {
  constructor() {
    super("Parda", 77, 1.62);
    (this.tipo = "Estudante de Administração"),
      (this.mascl = false),
      (this.cabelo = "Longo");
  }
}

let pessoa1 = new Homem();
let pessoa2 = new Mulher();

console.log(pessoa1);
console.log(pessoa2);


console.log(pessoa1.comer());
console.log(pessoa2.dormir());
