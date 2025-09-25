const { calcularTotalConImpuesto } = require("../src/MotorCalculo");

describe("Pruebas de Integración para el Motor de Cálculo", () => {
  test("Debe calcular el total con impuesto correctamente, integrando suma y multiplicación", () => {
    // Precio: 100, Cantidad: 2, Impuesto: 16% (0.16)
    // Subtotal esperado: 200
    // Impuesto esperado: 32
    // Total esperado: 232
    const total = calcularTotalConImpuesto(100, 2, 0.16);
    expect(total).toBe(232);
  });
});
