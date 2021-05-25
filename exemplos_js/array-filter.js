let list = (tarefas = [
  { desc: "comprar pão", status: "Pendente" },
  { desc: "estudar JS", status: "Pendente" },
  { desc: "tomar banho", status: "concluído" },
]);


let quantiadePend = list.filter((x)=>{
    return x.status == "Pendente"
})

console.log(quantiadePend);
console.log(quantiadePend.length);