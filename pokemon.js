"use Strict"

const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=1126";



fetch(urlApi)
  .then(response => response.json())
  .then(data => {
    // console.log(data.results[1].name)

    for(let i = 0; i>data.results.lenght; i++){
      console.log(data.results[1].name)
    }
  });


