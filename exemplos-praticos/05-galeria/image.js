// Galeria de fotos
//varivaveis
const galeria = document.getElementById('galeria')
const tagImages = document.querySelectorAll(".img-thumbnail")

// Array
const propImg = [
  "pWkk7iiCoDM",
  "aob0ukAYfuI",
  "EUfxH-pze7s",
  "2gYsZUmockw",
  "M185_qYH8vg",
  "sesveuG_rNo",
  "p2TQ-3Bh3Oo",
  "EMSDtjVHdQ8",
  "G9Rfc1qccH4",
  "AvhMzHwiE_0"
]

//setando o dado do src de cada tag img no HTML
for(i = 0; i <= propImg.length; i++){
  tagImages[i].src = urlImagem(propImg[i])
}

//retorna uma url concatenada com parametro esperado pela função
function urlImagem (parametroLink) {
  return `https://source.unsplash.com/${parametroLink}/400x300`
}
