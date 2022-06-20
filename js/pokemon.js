"use strict";


const url = "https://pokeapi.co/api/v2/pokemon?limit=1126";

const d = document,
  $btnAbrirBuscador = d.getElementById("btnAbrirBuscador"),
  $btnRegresarPrincipal = d.getElementById("btnRegresar"),
  $contBuscador = d.getElementById("contBuscador"),
  $inputBuscador = d.getElementById("inputBuscador"),
  $contenedorResultados = d.getElementById("resultados"),
  $contCargando = d.getElementById("cargando"),
  $contenedorPokemon = d.getElementById("contenedorPokemon");

let pokeUrl = [];
var pokemon = [];

fetch(url, { method: "GET" })
  .then(r =>  r.json()) // change to JSON data
  .then((d) => {
    let data = d.results;
    for (const p of data) {
      pokeUrl.push(p.url);
    }
  })
  .then(() => {
    pokeUrl.forEach((e) => {
      fetch(e)
        .then((r) => r.json())
        .then((d) => {
          let newObj = {};

          newObj.name = d.name;
          newObj.weight = d.weight;
          newObj.height = d.height;
          newObj.stats = d.stats;
          newObj.types = d.types;
          newObj.sprites = d.sprites;
          pokemon.push(newObj);
        });
    });
  })

  setTimeout(()=>{
      console.log(pokemon)
    //   localStorage.setItem("pokemon", JSON.stringify(pokemon) )
  },3000)




const url = "https://pokeapi.co/api/v2/pokemon?limit=1126";
var urlPokemon = [];
var pokemons = [];

window.addEventListener("DOMContentLoaded", async () => {
  const pokeData = await getUrlPokemon(url);
  let data = pokeData.results;
  for (let i = 0; i < data.length; i++) {
    urlPokemon.push(data[i].url);
  }
  getAllPokemons();
});

async function getUrlPokemon(url) {
  const res = await fetch(url);
  return await res.json();
}

async function getAllPokemons() {
  Promise.all(
    urlPokemon.map((url) => fetch(url).then((resp) => resp.json()))
  ).then((d) => {
    d.forEach((item) => {
      let newObj = {};
      newObj.name = item.name;
      newObj.weight = item.weight;
      newObj.height = item.height;
      newObj.stats = item.stats;
      newObj.types = item.types;
      newObj.sprites = item.sprites;
      pokemons.push(newObj);
    });
  });
}

function buscarPokemons(textoInput) {
  const posiblesResultados = [];
  if (textoInput !== "") {

    pokemon.forEach((elemento) => {
      if (elemento.startsWith(textoInput)) PosiblesResultados.push(elemento);

    pokemons.forEach((elemento) => {
      if (elemento.name.startsWith(textoInput))
        posiblesResultados.push(elemento);

    });
  }
  rederPokelist(posiblesResultados);
}
function rederPokelist(arrPoke) {
  var results=[] ;
  for (let i = 0; i < arrPoke.length; i++) {
    results += `
    
    <div class="pokemon-card">
    <div class="background">
      <img
        class="image"
        src=${
          arrPoke[i].sprites.front_default == null
            ? " https://png.pngitem.com/pimgs/s/30-302283_pikachu-pokmon-go-silhouette-drawing-whos-that-pokemon.png "
            : arrPoke[i].sprites.front_default
        }
        alt="${arrPoke[i].name}"
      />
      <img
        class="image"
        src=${
          arrPoke[i].sprites.back_default == null
            ? " https://png.pngitem.com/pimgs/s/30-302283_pikachu-pokmon-go-silhouette-drawing-whos-that-pokemon.png "
            : arrPoke[i].sprites.back_default
        }
        alt=${arrPoke[i].name}
      />
    </div>


// DOM AREA

$btnAbrirBuscador.addEventListener("click", () =>
  $contBuscador.classList.remove("esconder")
);
=======
    <div class="content">
      <h1 class="pokemon-name">${arrPoke[i].name}</h1>
      <span class="pokemon-type">${arrPoke[i].types[0].type.name}</span>

      <div class="pokemon-stats">
        <p>Altura : ${arrPoke[i].height} cm</p>
        <p>Peso : ${arrPoke[i].weight}</p>
        <p>Puntos de vida : ${arrPoke[i].stats[0].base_stat}</p>
        <p>Ataque : ${arrPoke[i].stats[1].base_stat}</p>
        <p>Defensa : ${arrPoke[i].stats[2].base_stat}</p>
        <p>Velocidad : ${arrPoke[i].stats[5].base_stat}</p>
        <p>Tipos que pertenece :</p>
        ${arrPoke[i].types[0].type.name} <br>
      </div>
      
    </div>
  </div>
    `;
  }
  $contenedorPokemon.innerHTML = results;
}

//DOM AREA

$btnAbrirBuscador.addEventListener("click", () => {
  $contBuscador.classList.remove("esconder");
 });


$btnRegresarPrincipal.addEventListener("click", () =>
  $contBuscador.classList.add("esconder")
);

$inputBuscador.addEventListener("keyup", (e) => {
  buscarPokemons(e.target.value);
});


// TraerNombres();


