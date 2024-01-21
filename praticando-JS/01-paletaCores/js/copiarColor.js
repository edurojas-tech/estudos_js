// funcao para copiar color
function copiarColor(codigo, idButton) {
    const btn = document.getElementById(idButton)
    const msg = document.getElementById(`${codigo}-txtCopiado`)
    btn.onclick = () => {
        navigator.clipboard.writeText(codigo)
        msg.textContent = `Cor ${codigo} copiado com sucesso!`
        setTimeout(() => {
            msg.textContent = ``
        }, 3000);
    }
}