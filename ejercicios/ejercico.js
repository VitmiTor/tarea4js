const listVideoGames = require("../jsons/videojuegos.json");

const imprimi = (lista) => {
  console.log(lista.juegos[0].nombre);
};

imprimi(listVideoGames);
