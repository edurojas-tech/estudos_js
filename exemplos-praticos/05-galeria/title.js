// função para renderizar conteudo e classes no H1 - Title da pagina
function elemento(id, texto, classes) {
  let elemento = document.getElementById(id)
  elemento.textContent = texto
  elemento.classList.add(classes)

  for (i = 0; i <= classes.length; i++) {
    document.getElementById(id).classList.add(classes[i])
  }  
}


// lógica do titulo da pagina
const titlePage = "Thumbnail Gallery"
const classesTitle = [
  "fw-light",
  "text-center",
  "text-lg-start",
  "mt-4",
  "mb-0"
]
elemento('titlePage', titlePage, classesTitle)