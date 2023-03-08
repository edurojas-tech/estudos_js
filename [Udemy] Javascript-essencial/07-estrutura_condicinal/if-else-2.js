// programação orientada a objetos - POO:
import { valores } from './taxas'
const folhaIR = {
  salarioAtual: null,

  valoresCalculo: null,

  getSalario(valor) {
    this.salarioAtual = valor
    return this.calcular()
  },

  valorLiquido(valor) {
    return this.salarioAtual - this.salarioAtual * (valor.percentualInss / 100)
  },

  calcular() {
    this.valoresCalculo = valores.forEach((item) => {
      item.condicao &&
        console.log(
          `Salário de R$ ${this.salarioAtual},00 - desconto de: ${item.percentualInss}% sobre o IR. Valor líquido receber é ${this.valorLiquido(item).toFixed(2)}`
        );
    });
  },
};

folhaIR.getSalario(4000)
// Resultado: Salário atual de R$ 4000,00 - desconto de: 14% sobre o IR. Valor líquido é 3440.00