// Sem função construtora....
function Book(title, pages, author) {
  (this.title = title), (this.pages = pages), (this.author = author);
}

function Food(name, type, quantity) {
  (this.name = name), (this.type = type), (this.quantity = quantity);
}

// ============ arrays objetos ===============
const books = [
  new Book("Mais esperto que o Diabo", 250, "Napoleón Hill"),
  new Book("Administração e Planejamento", 198, "Paulo Sertek"),
  new Book("Empreendedorismo", 123, "Paulo Sertek"),
];

const foods = [
  new Food("Pizza Espanhola", "Massa Italiana", 10),
  new Food("Frango a Passarinho", "Comida Brasileira", 7),
];

// ============ Objeto literal ============
const Home = {
  dono: "Edu",
  tipo: "Apartamento",
  casa: [],
  showCasa() {
    this.casa.push(this.dono, this.tipo);
    console.log(this.casa);
  },
};
Home.showCasa();

// ============ função construtora ============
class Product {
  constructor(name, tipo, marca) {
    (this.name = name), (this.tipo = tipo);
    this.marca = marca;
  }

  showDetails() {
    console.log(this);
  }
}

const produto1 = new Product("Computador VivoBook", "Tech", "Asus");
const produto2 = new Product("Smartphone Redmi 9", "Tech", "Xiaomi");
produto1.showDetails();
produto2.showDetails();

// end code!