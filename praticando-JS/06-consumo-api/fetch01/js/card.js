function cardElement (name, img) {

  return `
    <div class="card">
      <div class="nameCard">
        <h2>${name}</h2>
      </div>
      <div class="imgCard">
        <img src="${img}" alt="anime">
      </div>
    </div>
  `
}
