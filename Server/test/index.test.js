const app = require("../src/app");
const session = require("supertest").agent;
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      // Realiza una solicitud GET al endpoint "/rickandmorty/character/1" y espera un código de estado 200
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      // Realiza una solicitud GET al endpoint "/rickandmorty/character/1" y obtiene el cuerpo de la respuesta como texto
      const character = JSON.parse(
        (await agent.get("/rickandmorty/character/1")).text
      );

      // Verifica que el objeto resultante tenga las propiedades mencionadas
      expect(character).toHaveProperty(
        "id",
        "name",
        "species",
        "gender",
        "status",
        "origin",
        "image"
      );
    });

    it("Si hay un error responde con status: 500", async () => {
      // Realiza una solicitud GET al endpoint "/rickandmorty/character/900" sin esperar ninguna respuesta
      const response = await agent.get("/rickandmorty/character/900");

      // Verifica que el código de estado de la respuesta sea 500
      expect(response.status).toBe(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("debe retornar access: true si se proporciona la información de login correcta", async () => {
      // Simula la ejecución de la ruta con información de login correcta
      const response = await agent.get("/rickandmorty/login").query({
        email: "ccc",
        password: "ccc",
      });

      // Verifica que la respuesta contenga el objeto { access: true }
      expect(response.body).toEqual({ access: true });
    });

    it("debe retornar access: false si se proporciona información de login incorrecta", async () => {
      // Simula la ejecución de la ruta con información de login incorrecta
      const response = await agent.get("/rickandmorty/login").query({
        email: "correo_incorrecto",
        password: "contraseña_incorrecta",
      });

      // Verifica que la respuesta contenga al menos la propiedad { access: false }
      expect(response.body).toMatchObject({ access: false });
    });
  });
  describe("POST /rickandmorty/fav", () => {
    it("Debe crear un nuevo personaje correctamente", async () => {
      const newCharacter = {
        id: 829,
        name: "Cesar Beloqui",
        gender: "Male",
        species: "Human",
        origin: {
          name: "Earth (C-1)",
        },
        image: "https://i.ibb.co/WBgrvXf/gorickyourself.jpg",
        status: "Casi Vivo",
      };

      const response = await agent.post("/rickandmorty/fav").send(newCharacter);
      // Obtener el array de personajes de la respuesta
      const charactersArray = response.body;

      // Verificar que sea un array
      expect(Array.isArray(charactersArray)).toBe(true);

      // Verificar que el array incluya al nuevo personaje
      const includesNewCharacter = charactersArray.some(
        (character) => character.name === newCharacter.name
      );
      expect(includesNewCharacter).toBe(true);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Debe devolver el arreglo sin modificaciones si el ID no existe", async () => {
      const prevCharactersArray = (await agent.get("/rickandmorty/fav/")).body;
      const invalidId = 999; // ID que no existe

      // Realiza una solicitud DELETE al endpoint "/rickandmorty/fav/:id" con un ID inválido
      const response = await agent.delete(`/rickandmorty/fav/${invalidId}`);

      // Obtén el arreglo de personajes de la respuesta
      const charactersArray = response.body;

      // Verifica que sea un array
      expect(Array.isArray(charactersArray)).toBe(true);

      // Verifica que el arreglo sea igual al arreglo previo sin modificaciones
      expect(charactersArray).toEqual(prevCharactersArray);
    });

    it("Debe eliminar correctamente al personaje cuando se envía un ID válido", async () => {
      const prevCharactersArray = (await agent.get("/rickandmorty/fav/")).body;
      // Obtén el ID de un personaje existente (puedes usar un personaje que ya haya en el arreglo previo)
      const validId = prevCharactersArray[0].id;

      // Realiza una solicitud DELETE al endpoint "/rickandmorty/fav/:id" con un ID válido
      const response = await agent.delete(`/rickandmorty/fav/${validId}`);

      // Obtén el arreglo de personajes de la respuesta
      const charactersArray = response.body;

      // Verifica que sea un array
      expect(Array.isArray(charactersArray)).toBe(true);

      // Verifica que el arreglo no contenga el personaje eliminado
      const includesDeletedCharacter = charactersArray.some(
        (character) => character.id === validId
      );
      expect(includesDeletedCharacter).toBe(false);
    });
  });
});
