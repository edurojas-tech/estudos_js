// função #1 com arrow function
const tranformsUppercase = (palavra) => {
    console.log(palavra.toUpperCase()); 
}

// função #2 com arrow function
const multiplicar = (v1, v2) => {
    console.log(v1 * v2);
}

const tipoVariavel = (variavel) => console.log(typeof variavel);

tranformsUppercase("javascript, programação web")
multiplicar(25, 3)

tipoVariavel(23)                        //number
tipoVariavel("Textos ou caracteres")    //string
tipoVariavel(false)                     //boolean
