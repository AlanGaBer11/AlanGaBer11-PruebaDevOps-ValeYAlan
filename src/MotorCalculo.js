const { suma, multiplicacion } = require("./Calculadora");

function calcularTotalConImpuesto(precio, cantidad, tasaImpuesto) {
  // Calcular el subtotal usando una función de la calculadora
  const subtotal = multiplicacion(precio, cantidad);

  // Calcular el impuesto usando una función de la calculadora
  const impuesto = multiplicacion(subtotal, tasaImpuesto);

  // Calcular el total usando una función de la calculadora
  const total = suma(subtotal, impuesto);

  return total;
}

module.exports = { calcularTotalConImpuesto };
