"use strict";
const listaJson = require("../jsons/listaPosiblesCapicua.json");
const poblarArrays = (listaJson, arrayCapicuas, arrayNoCapicuas) => {
  for (let i = 0; i < listaJson.length; i++) {
    let aux = listaJson[i];
    let residuo = 0;
    let inverso = 0;
    while (aux != 0) {
      residuo = aux % 10;
      inverso = inverso * 10 + residuo;
      aux = Math.trunc(aux / 10);
    }
    if (inverso === listaJson[i]) {
      arrayCapicuas.push(listaJson[i]);
    } else {
      arrayNoCapicuas.push(listaJson[i]);
    }
  }
};

const arrayCapicuas = [];
const arrayNoCapicuas = [];
poblarArrays(listaJson, arrayCapicuas, arrayNoCapicuas);
