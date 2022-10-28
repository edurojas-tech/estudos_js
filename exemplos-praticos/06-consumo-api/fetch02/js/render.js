function inner(item, array) {
  const app = document.getElementById(item)
  return (app.innerHTML = array
    .reverse()
    .map((i) => figure(i.anime_img, i.anime_name))
    .join(""));
}
