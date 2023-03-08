const listCores = [
    "#e17055",
    "#d63031",
    "#01a3a4",
    "#ff7675",
    "#fdcb6e",
    "#222f3e",
    "#ced6e0",
    "#70a1ff",
    "#2ed573",
    "#dfe4ea",
    "#341f97",
    "#5f27cd",
    "#ff6b6b",
    "#576574",
    "#54a0ff",
    "#f368e0",
    "#3742fa",
    "#2f3542",
    "#ff4757",
    "#5352ed",
]

let paletaCores = {
    id: "paleta",
    classe: ".colors",
    cores: [],
    coresPush() {
        listCores.forEach((element) => {
            this.cores.push({ cor: element, codCor: element })
        });
    },

    elementoMain(cor, corDesc) {
        return `
            <div class="colors" style="background-color: ${cor}; color: white">
                <p class='descricao'>Código Hex: <b">${corDesc}</b></p>
            </div>
        `;
    },

    addElemento() {
        this.coresPush();
        document.getElementById(this.id).innerHTML = this.cores
        .map((x) => {
            return this.elementoMain(x.cor, x.codCor);
        })
        .join("");
    },
};

// chamando metodo addElemento do objeto patelaCores
paletaCores.addElemento()