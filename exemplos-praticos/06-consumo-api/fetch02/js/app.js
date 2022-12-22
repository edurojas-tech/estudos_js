const urlAPI = "https://anime-facts-rest-api.herokuapp.com/api/v1"

fetch(urlAPI).then((response) =>
  response.json().then((resp) => inner('app', resp.data))
)
