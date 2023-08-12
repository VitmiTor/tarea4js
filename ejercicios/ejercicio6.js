"use strict";
const listNumbersJson = require("../jsons/listaNumbers.json");

const calcularPromedioSimple = (arrayEnteros) => {
  let sumatoria = 0;
  for (let i = 0; i < arrayEnteros.length; i++) {
    sumatoria += arrayEnteros[i];
  }
  return sumatoria / arrayEnteros.length;
};

const imprimirMensaje = (resultado) => {
  console.log(`Promedio simple es: ${resultado.toFixed(2)}`);
};

const resultado = calcularPromedioSimple(listNumbersJson);
imprimirMensaje(resultado);
