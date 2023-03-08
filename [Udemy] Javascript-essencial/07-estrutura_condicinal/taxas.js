export default () => {
  return valores = [
    {
      condicao: this.salarioAtual < 1045 && true,
      percentualInss: 7.5,
    },
    {
      condicao: this.salarioAtual > 1045 && this.salarioAtual < 2089 && true,
      percentualInss: 9,
    },
    {
      condicao: this.salarioAtual > 2089 && this.salarioAtual < 3134 && true,
      percentualInss: 12,
    },
    {
      condicao: this.salarioAtual > 3134 && true,
      percentualInss: 14,
    },
  ]
}