"use strict";

const listaNumeros = require("../jsons/listaNumbers.json");

const calcularMediaArmonica = (arrayNumbers) => {
  let sumatoria = 0;
  arrayNumbers.forEach((element) => {
    sumatoria += Math.pow(element, -1);
  });
  return arrayNumbers.length / sumatoria;
};

const imprimirMensaje = (resultado) => {
  console.log(`El resultado de la media geometrica es ${resultado.toFixed(3)}`);
};

const result = calcularMediaArmonica(listaNumeros);
imprimirMensaje(result);
