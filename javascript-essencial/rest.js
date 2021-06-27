/* ==== USO DO REST ==== */
function showUsers(...users){
    console.log(users)
    users.forEach(user =>{
        console.log(user)
    })
}

function todoList(...task){
    console.log(task)
    task.forEach(t =>{
        console.log(`Tarefa: ${t}`)
    })
}

function addContas(filtro, ...contas){
    console.log(`\nContas ${filtro}`)
    console.log(
        contas.filter((c)=>{
            return c.status == filtro
        })
    )
}

/* get pagas */
addContas("paga",
    {desc: "Conta água", valor: 34.00, status: "paga"},
    {desc: "Conta telefone", valor: 196.50, status: "paga"},
    {desc: "Fornecedor de bebida", valor: 3000.00, status: "a pagar"},
    {desc: "Boleto", valor: 30.00, status: "a pagar"},
)

/* get a pagar */
addContas("a pagar",
    {desc: "Conta água", valor: 34.00, status: "paga"},
    {desc: "Conta telefone", valor: 196.50, status: "paga"},
    {desc: "Fornecedor de bebida", valor: 3000.00, status: "a pagar"},
    {desc: "Boleto", valor: 30.00, status: "a pagar"},
)