const express = require("express");
const app = express();
const port = 3000;

// middleware para parsear json
app.use(express.json());

// Enpoint de salud
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "API funcionando correctamente",
  });
});

// Endpoint de info
app.get("/info", (req, res) => {
  const response = {
    nombre: "Josué Nabí Hurtarte Pinto",
    album_fav: "The world is Mine - BURNOUT SYNDROMES",
    version: "2.0",
  };
  res.json(response);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API REST ejecutando en http://localhost:${port}`);
});
