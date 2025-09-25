const express = require("express");
const { suma } = require("./Calculadora");

const app = express();

app.use(express.json()); // Permite que el servidor entienda JSON

// Ejemplo de uso: http://localhost:3000/suma?a=5&b=3
app.get("/suma", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send({ error: "Parámetros inválidos." });
  }

  const resultado = suma(a, b);
  res.send({ resultado: resultado });
});

module.exports = app;
