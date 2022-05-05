"use strict";

const d = document,
  $btnAbrirBuscador = d.getElementById("btnAbrirBuscador"),
  $btnRegresarPrincipal = d.getElementById("btnRegresar"),
  $contBuscador = d.getElementById("contBuscador"),
  $inputBuscador = d.getElementById("inputBuscador"),
  $contenedorResultados = d.getElementById("resultados"),
  $contCargando = d.getElementById("cargando"),
  $contenedorPokemon = d.getElementById("contenedorPokemon");
let nombres = [];

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
    nombres.forEach((elemento) => {
      if (elemento.startsWith(textoInput)) PosiblesResultados.push(elemento);
    });
  }
  MostrarResultados(PosiblesResultados);
};

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

TraerNombres();
