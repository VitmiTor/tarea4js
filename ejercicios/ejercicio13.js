"use strict";

const listVideoGames = require("../jsons/videojuegos.json");

const ordenArray = (listVideoGames) => {
  for (let i = 0; i < listVideoGames.juegos.length; i++) {
    for (let j = 0; j < listVideoGames.juegos.length - i - 1; j++) {
      if (
        listVideoGames.juegos[j].nombre > listVideoGames.juegos[j + 1].nombre
      ) {
        let temp = listVideoGames.juegos[j].nombre;
        listVideoGames.juegos[j].nombre = listVideoGames.juegos[j + 1].nombre;
        listVideoGames.juegos[j].nombre = temp;
      }
    }
  }
};

const imprimirResultado = (listaJson, nombre, direccion) => {
  console.log(nombre);
  console.log(direccion);
  for (let i = 0; i < listaJson.length; i++) {
    console.log(
      `El juego ${listaJson[i].nombre} y tiene el precio de ${listaJson[i].precio} `
    );
  }
};

ordenArray(listVideoGames);
imprimirResultado(
  listVideoGames,
  "CALVARIO GAMER",
  "AVENIDA MUSHRROM KINGDOM 666"
);
