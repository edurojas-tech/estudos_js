// função #1 com arrow function
const tranformsUppercase = (palavra) => {
    console.log(palavra.toUpperCase()); 
}

// função #2 com arrow function
const multiplicar = (v1, v2) => {
    console.log(v1 * v2);
}

const tipoVariavel = (variavel) => console.log(typeof variavel);

tranformsUppercase("betty carolina")
multiplicar(25, 3)

tipoVariavel(23)
tipoVariavel("Aviv Kombucha")
tipoVariavel(false)
