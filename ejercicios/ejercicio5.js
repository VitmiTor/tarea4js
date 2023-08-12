"use strict";

const culpablesJson = require("../jsons/culpables.json");

const verificarCondiciones = (nombre, apellido1, apellido2) => {
  const contadorApellido1 = apellido1.length;
  const caracteres = contadorApellido1 > 5 && contadorApellido1 < 10;

  const ar = apellido2.includes("AR");

  const iniciaD = nombre.charAt(0) === "D";

  return iniciaD && caracteres && ar;
};

const rellenarArrays = (arrayNombres, arrayInocentes, arrayCulpables) => {
  for (let i = 0; i < arrayNombres.length; i++) {
    const apellido1 = arrayNombres[i]["apellido1"];
    const apellido2 = arrayNombres[i]["apellido2"];
    const nombre = arrayNombres[i]["nombre"];

    if (verificarCondiciones(nombre, apellido1, apellido2)) {
      arrayCulpables.push(arrayNombres[i]);
    } else {
      arrayInocentes.push(arrayNombres[i]);
    }
  }
};
const imprimirResultados = (arrayInocentes, titulo) => {
  console.log(`Lista de ${titulo}`);
  for (let i = 0; i < arrayInocentes.length; i++) {
    arrayInocentes[i];
    console.log(
      i +
        ". " +
        arrayInocentes[i]["nombre"] +
        " " +
        arrayInocentes[i]["apellido1"] +
        " " +
        arrayInocentes[i]["apellido2"]
    );
  }
  console.log("El tamaño del arreglo es " + arrayInocentes.length);
};

const arrayInocentes = [];
const arrayCulpables = [];

rellenarArrays(culpablesJson, arrayInocentes, arrayCulpables);
imprimirResultados(arrayInocentes, "inocentes");
