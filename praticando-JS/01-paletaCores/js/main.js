let paletaCores = {
    id: "paleta",
    classe: ".colors",
    listCores,
    elementoMain(cor) {
        return `
            <div class="colors" style="background-color: ${cor}; color: white">
                <p class='descricao'>Código Hex: <b">${cor}</b></p>
                <button type="button" id="${cor}-button">Copiar</button>
                <br>
                <div id='${cor}-txtCopiado'></div>
            </div>
        `;
    },

    addElemento() {
        document.getElementById(this.id).innerHTML = this.listCores
        .map((x) => {
            return this.elementoMain(x);
        })
        .join("");
    },
};

// chamando metodo addElemento do objeto patelaCores
paletaCores.addElemento()
paletaCores.listCores.map(color => {
    copiarColor(color, `${color}-button`)
    console.log(color, `${color}-button`)
})