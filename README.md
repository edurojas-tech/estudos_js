<h1 align="center">
    <img alt="JavaScript" title="#estudosJs" src="./img/jsImg.png" width='20%' align="center"/>
    <br>
    🦊 🐻 🐼 🐻‍❄️ 🐨 🐯
    <br>
    Estudos JavaScript
</h1>
<p align="center" style='color: #539BEF;'>Este repositório é destinado para compartilhar todo conhecimento aprendido com a linguagem de programação <b>JavaScript</b></p>

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

<p>
    <b>
       Também temos o operador "typeof", que nos retorna a descrição do tipo da variável. <br>
       Exemplos:<br>
       console.log(typeof 22) --> number <br>
       console.log(typeof false) --> boolean <br>
       console.log(typeof "JS") --> string <br>
       console.log(typeof [1,2,3]) --> object <br>
    </b>
</p>

# 🐨Verdadeiro e falso
<p>
  [+] True and false. Alguns tipo de dados em Javascript podem ser avaliados e retonar um valor booleando como true ou false.
    - undefined: false;
    - null: false;
    - Boolean: true ou false
    - Number: false para -0, +0 ou NaN, caso contrario é true;
    - String: uma string vazia retorna false, caso contrário é true;
    - Object: true.
</p>

