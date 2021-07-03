const produtoEmEstoque = true
const disponivel = !produtoEmEstoque ? 'não' : 'sim'    //uma expressão que serve como if else
const addClient = (...clients) => clients               //expressão de uma arrow function
const addUser = (...Users) => { 
    console.log(Users)
    const nUsers = Users.length > 0 ? console.log(`Possue ${Users.length} usuários na lista!`) : console.log("Sem usuários a listar!")
    return nUsers
}
const valor1 = 10
const valor2 = -5
const consultValor = valor1 >= 50 || valor2 >= 1 ? 'v' : 'f'




console.log(disponivel)
console.log(addClient('Google', 'Facebook', 'Up', 'YesFit'))
console.log(consultValor)


addUser()