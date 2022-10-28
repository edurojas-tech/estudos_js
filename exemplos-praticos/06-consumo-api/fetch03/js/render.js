function inner(item, array) {
  const app = document.getElementById(item)
  return (app.innerHTML = array
    .map((i, index) => figure(i.name, index))
    .join(""));
}
