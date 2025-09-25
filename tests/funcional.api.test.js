const request = require("supertest");
const app = require("../src/api"); // Importamos nuestra aplicación Express

describe("Pruebas Funcionales para la API de Calculadora", () => {
  test("GET /suma debe retornar la suma de dos números", async () => {
    const response = await request(app).get("/suma?a=10&b=5");

    // Verificamos el código de estado HTTP (200 = OK)
    expect(response.statusCode).toBe(200);

    // Verificamos que el cuerpo de la respuesta sea el JSON esperado
    expect(response.body).toEqual({ resultado: 15 });
  });

  test("GET /suma debe manejar parámetros inválidos", async () => {
    const response = await request(app).get("/suma?a=diez&b=5");

    // Verificamos que retorne un error 400
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error");
  });
});
