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
    canción_fav: "Kaiju - Sakanaction",
    version: "1.0",
  };
  res.json(response);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API REST ejecutando en http://localhost:${port}`);
});
