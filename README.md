<h1 align="center">
    <img alt="JavaScript" title="#estudosJs" src="./img/jsImg.png" width='20%' align="center"/>
    <br>
    🦊🐻🐼🐻🐨🐯
    <br>
    Estudos JavaScript
</h1>

Este repositório é destinado para compartilhar todo conhecimento aprendido com a linguagem de programação <b>JavaScript</b>

<b> 📖Referência de estudo: Estruturas de dados e algoritmos com Javascript - Loiane Groner</b>

# 🐼 O que é JavaScript?
<p>
    É uma linguagem de programação de alto nível (que se aproxima da linguagem humano - inglês). E considerada uma linguagem interpretada / funcional.
</p>
<p>
    JavaScript permite inserir dinâmica ou interações em elementos <b>HTML</b> e controlar customizações CSS, de forma programática em páginas de internet, sistemas ou app.
</p>
<p>
    A linguagem está presente no <b>client-side (Front-end)</b>, server-side (Back-End), Bancos de dados, frameWorks, desktop e mobile:
</p>

- [x] Client-side ou Front-end (browsers):
    - Chrome;
    - Safari;
    - Firefox;
    - Edge;
    - Opera;
    - Frameworks: Angular (com TypeScript), Vue.js, React e outros.

- [x] Server-side ou Back-end (serviços e Banco Dados):
    - Node.js;
    - Deno;
    - MongoDB (banco de dados NoSQL).

- [x] Frameworks para desenvolvimento Mobile e Desktop:
    - Eletron para desenvolvimento de aplicações desktop;
    - Cordova para desenvolvimento de aplicações Híbridas (Android, IOS e Browser);
    - React Native para desenvolvimento Mobile;
    - Vue Native para desenvolvimento Mobile;

# 🐗 JavaScript não é Java.

<h2>
    Comentários
</h2>
<p>
    Comentários no código, auxilia na documentação do projeto, para orientar o que específicamente determinada
    linha de código de programação JS, está realizado.
    Ajuda no trabalho em equipe para orientar outros programadores ou até mesmo 
    o responsável pelo código criado, como lembrete.
</p>

# 🦁 Variáveis
<p>
  Em Javascript não poderia ser diferente de qualquer outra linguagem, aqui temos seus tipos de variáveis: 
  
`string` 

`number` 

`boolean` 

`null` 

`undefined` 

`object` 

`array`
</p>

# 🦊 Escopo de variável
<p>
    O escopo refere-se ao local em onde podemos acessar a variável no algoritmo.
    As variáveis podem ser locais ou globais (verificar exemplo no arquivo 
    <a href='https://github.com/edurojas-dev/estudosJS/blob/master/javascript-essencial/escopodevar.js'>
        <b>escopodevar.js</b>    
    </a>)
</p>
<p>
    Em alguns casos as variáveis ou funções globais em JS seja prejudicial, devido ao elevado número de declaração das mesmas, por isso evite criar ou declarar muitas variáveis e funções globais,
    o ideal que estas estruturas sejam feitas em escopos.
</p>

<hr>

# 🐶 Operadores
<p>
    Precisamos de operadores quando realizamos qualquer operação em uma linguagem de programação, e em Javascript temos operadores aritméticos, de atribuição, de comparação, lógicos, bit a bit (bitwise), unários e entre outros.
</p>

| Operador Aritmético |  Descrição  | Exemplos |
| ----------- | ----------- | ----------- |
| + | Adição | <b>var somar = 2 + 2</b> |
| - | Subtração |<b>var subtrair = 15 - 10</b> |
| * | Multiplicação | <b>var multi = somar * subtrair </b> |
| / | Divisão | <b>var somar = multi / 2</b> |
| % | Módulo - Resto de uma operação de divisão | <b>var mod = 50 % 10 </b> |
| ++ | Incremento | <b>var i = mod++</b> |
| -- | Decremento | <b>var d = mod--</b> |

 Operador Atribuição |  Descrição  | Exemplos |
| ----------- | ----------- | ----------- |
| = | Atribuição | var num = 10 |
| += | Atribuição de soma (x += y) == (x = x + y) | num += 1 |
| -= | Atribuição de subtração (x -= y) == (x = x - y) | num -= 2|
| *= | Atribuição de Multiplicação (x *= y) == (x = x * y) | num *= 3|
| /= | Atribuição de Divisão (x /= y) == (x = x / y) | num /= 2|
| %= | Atribuição de resto (x %= y) == (x = x % y) | num %= 3|

 Operador de comparação |  Descrição  | Exemplos |
| ----------- | ----------- | ----------- |
| == | Igual a | a == b |
| === | Igual a - tanto o valor quanto o tipo | a === b |
| != | Diferente de | a != b |
| > | Maior que | a > b |
| >= | Maior ou igual a | a >= b |
| < | Menor que | a < b |
| <= | Menor ou igual a | a <= b |


 Operadores lógicos |  Descrição  | Exemplos |
| ----------- | ----------- | ----------- |
| && | E | a == b && c > d |
| *||* | Ou | a == b // c < d |
| ! | Negação | !ab |

- Também temos o operador "typeof", que nos retorna a descrição do tipo da variável.
    - console.log(typeof 22) --> number 
    - console.log(typeof false) --> boolean 
    - console.log(typeof "JS") --> string 
    - console.log(typeof [1,2,3]) --> object 

# 🐨 Verdadeiro e falso
- [x] True and false. Alguns tipo de dados em Javascript podem ser avaliados e retonar um valor booleando como true ou false.
    - undefined: false;
    - null: false;
    - Boolean: true ou false
    - Number: false para -0, +0 ou NaN, caso contrario é true;
    - String: uma string vazia retorna false, caso contrário é true;
    - Object: true.

# 🦅 Estruturas de controle
<p>
    A linguagem JavaScript tem um conjunto de estruturas de controle semelhante ao das linguagens C e Java. Instruções condicionais são tratadas com <b>if...else e switch</b>. Laços são tratados com as construções <b>while, do...while e for</b>
</p>

<b>Estrutura de condição</b>
| <b>if else</b>
| ----------- |
| <img src='https://user-images.githubusercontent.com/61126545/189651413-04b95aa0-e745-4ec6-b337-a01c1a438ffa.png'> |

| <b>ternário</b> |
| ----------- |
|![ternary](https://user-images.githubusercontent.com/61126545/191074178-23434b36-b0e5-46fb-b017-75bfad79132c.png) |

| <b>switch</b> |
| ----------- |
| <img src='https://user-images.githubusercontent.com/61126545/189652167-25c4455b-ec41-42c2-8e14-4c2e309c5ef5.png'> |

<br><br>
<b>Estrutura de repetição (exemplos)</b>
| <b>Uso do For - ex01</b> |
| ----------- |
| ![for01](https://user-images.githubusercontent.com/61126545/191086566-176ec58b-a7bd-4605-90ea-02d328a55154.png)

| <b>Uso do For - ex02</b> |
| ----------- |
| ![for02](https://user-images.githubusercontent.com/61126545/191085904-c269005a-d3d0-48a3-9d86-202ee74d29c9.png) |
