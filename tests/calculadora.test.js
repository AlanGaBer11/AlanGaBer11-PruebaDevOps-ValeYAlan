const { suma, resta, multiplicacion, division } = require("../src/Calculadora");

// "describe" agrupa pruebas relacionadas
describe("Pruebas para la calculadora", () => {
  // "test" o "it" define una prueba individual
  test("La función suma debe sumar dos números correctamente", () => {
    // "expect" es lo que esperamos que suceda, y "toBe" es el resultado esperado
    expect(suma(5, 3)).toBe(8);
    expect(suma(-1, 1)).toBe(0);
  });

  test("La función resta debe restar dos números correctamente", () => {
    expect(resta(10, 4)).toBe(6);
  });

  test("La función multiplicacion debe multiplicar dos números", () => {
    expect(multiplicacion(3, 4)).toBe(12);
    expect(multiplicacion(5, 0)).toBe(0);
  });

  test("La función división debe dividir dos números", () => {
    expect(division(8, 2)).toBe(4);
    expect(division(5, 2)).toBe(2.5);
  });
});
