"use strict";
const personasJson = require("../jsons/personas.json");

const estaAprobado = (nota) => {
  return nota >= 11;
};

const imprimirMensaje = () => {
  personasJson.forEach((element) => {
    console.log(
      element.nombre +
        ` y la nota es ` +
        element.nota +
        ` ` +
        estaAprobado(element.nota)
    );
  });
};

imprimirMensaje();
