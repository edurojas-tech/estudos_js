function Book(title, pages, author) {
  (this.title = title), (this.pages = pages), (this.author = author);
}

const books = [
  new Book("Mais esperto que o Diabo", 250, "Napoleón Hill"),
  new Book("Administração e Planejamento", 198, "Paulo Sertek"),
  new Book("Empreendedorismo", 123, "Paulo Sertek"),
];

console.log(
  books.filter((x) => {
    return x.author == "Paulo Sertek";
  })
);
