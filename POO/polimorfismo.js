/* 
  conceito de polimorfismo, consiste quando um objeto herda os metodos de uma superClasse ou 
  objeto pai, pode ser sobreescrito no objeto filho para uma funcionalidade espicífica.
*/

class Humano {
  constructor(cor, peso, altura) {
    (this.cor = cor), (this.peso = peso + "Kg"), (this.altura = altura);
  }

  dormir() {
    return "Dormindo..."
  }

  comer() {
    return "Comendo..."
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

class ET extends Humano {
  constructor() {
    super("VERDE", 150, 3.72);
  }

  dormir(){
    return "Não dorme! kkk"
  }
}

let pessoa1 = new Homem();
let serET = new ET();
console.log(serET)
console.log(pessoa1.dormir());
console.log(`O ET ${serET.comer()}`);
console.log(`O ET ${serET.dormir()}`);
