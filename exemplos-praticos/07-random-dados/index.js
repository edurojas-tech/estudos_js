// Exemplo de POO - Simulando jogo de dados
// exemplo dados de 6 faces, jogar um número de 1 a 6

class Dado {
  constructor(faces) {
    this.faces = faces;
    this.numero = null
  }

  jogarDado() {
    this.numero = Math.ceil(Math.random() * this.faces)
    return `Jogando dado de ${this.faces}: ${this.numero}`;
  }
}

const d06 = new Dado(6);
const d12 = new Dado(12);
const d100 = new Dado(100);

setInterval(() => {
  console.log(d06.jogarDado());
  console.log(d12.jogarDado());
  console.log(d100.jogarDado());
  console.log("\n");
}, 3000);
