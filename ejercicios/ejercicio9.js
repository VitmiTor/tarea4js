"use strict ";

const arrayNumbers = require("../jsons/numbersString.json");

const rellenarArrays = (arrayStrings, arrayNumero, arrayPeso) => {
  for (let i = 0; i < arrayStrings.length; i++) {
    const numero = arrayStrings[i].split(";");
    arrayNumero.push(Number(numero[0]));
    arrayPeso.push(Number(numero[1]));
  }
};

const PromedioPonderado = (arrayNumeros, arrayPeso) => {
  let sumatoria = 0;
  for (let i = 0; i < arrayNumeros.length; i++) {
    sumatoria += arrayNumeros[i] * arrayPeso[i];
  }
  return sumatoria / arrayNumeros.length;
};

const imprimirMensaje = (resultado) => {
  console.log(`El promedio ponderado es ${resultado.toFixed(2)}`);
};

const arrayX = [];
const arrayPeso = [];
rellenarArrays(arrayNumbers, arrayX, arrayPeso);
const resultado = PromedioPonderado(arrayX, arrayPeso);
imprimirMensaje(resultado);
