// lógica da galeria de fotos
const galeria = document.getElementById('galeria')
const tagImages = document.querySelectorAll(".img-thumbnail")
const urlImages = [
  "pWkk7iiCoDM",
  "aob0ukAYfuI",
  "EUfxH-pze7s",
  "2gYsZUmockw",
  "M185_qYH8vg",
  "sesveuG_rNo",
  "p2TQ-3Bh3Oo",
  "EMSDtjVHdQ8",
  "G9Rfc1qccH4"
]

function urlImagem (parametroLink) {
  return `https://source.unsplash.com/${parametroLink}/400x300`
}

for(i = 0; i <= tagImages.length; i++){
  tagImages[i].src = urlImagem(urlImages[i])
}