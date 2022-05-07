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

/* fetch(url, { method: "GET" })
  .then((r) => r.json()) // change to JSON data
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
  });

setTimeout(() => {
  console.log(pokemon);
  localStorage.setItem("pokemon", JSON.stringify(pokemon));
}, 3000);

//FUNCIONES

const MostrarResultados = (resultados) => {
  const $fragmento = d.createDocumentFragment();
  resultados.forEach((elemento) => {
    const $p = d.createElement("p");
    $p.textContent = elemento;
    $fragmento.appendChild($p);
  });
  $contenedorResultados.replaceChildren($fragmento);
};

const BuscarResultados = (textoInput) => {
  const PosiblesResultados = [];
  if (textoInput !== "") {
    pokemon.forEach((elemento) => {
      if (elemento.startsWith(textoInput)) PosiblesResultados.push(elemento);
    });
  }
  MostrarResultados(PosiblesResultados);
};

// DOM AREA */

$btnAbrirBuscador.addEventListener("click", () =>
  $contBuscador.classList.remove("esconder")
);

$btnRegresarPrincipal.addEventListener("click", () =>
  $contBuscador.classList.add("esconder")
);

$inputBuscador.addEventListener("keyup", () =>
  BuscarResultados($inputBuscador.value)
);

d.addEventListener("click", (e) => {
  if (e.target.matches(".resultados p")) BuscarPokemon(e.target.textContent);
});

// TraerNombres();
