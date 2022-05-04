"use Strict"

const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=1126";



fetch(urlApi)
  .then(response => response.json())
  .then(data => console.log(data));


