"use strict";

const listVideoGames = require("../jsons/videojuegos.json");

const ordenArray = (listVideoGames) => {
  for (let i = 0; i < listVideoGames.juegos.length; i++) {
    for (let j = 0; j < listVideoGames.juegos.length - i - 1; j++) {
      if (
        listVideoGames.juegos[j].nombre > listVideoGames.juegos[j + 1].nombre
      ) {
        let temp = listVideoGames.juegos[j];
        listVideoGames.juegos[j] = listVideoGames.juegos[j + 1];
        listVideoGames.juegos[j + 1] = temp;
      }
    }
  }
};

const imprimirResultado = (listaJson, nombre, direccion) => {
  console.log(nombre);
  console.log(direccion);

  for (let i = 0; i < listaJson.juegos.length; i++) {
    console.log(
      listaJson.juegos[i].nombre +
        " y el precio es: " +
        listaJson.juegos[i].precio
    );
  }
};

ordenArray(listVideoGames);
imprimirResultado(
  listVideoGames,
  "CALVARIO GAMER",
  "AVENIDA MUSHRROM KINGDOM 666"
);
