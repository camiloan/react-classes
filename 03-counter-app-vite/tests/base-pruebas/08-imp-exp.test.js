import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/base-pruebas/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe de retornar un héroe por ID ", () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe de retornar undefined si no existe ", () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy(); /* null, undefined, false */
  });

  // Tarea:
  // Debe de retornar un arreglo con los héroes de DC
  // Length === 3
  // toEqual al arreglo filtrado

  test("getHeroesByOwner debe de retonar héroes por DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
    // Camino real, validarlo con una data de prueba
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });

  // debe de retonar un arreglo con los héroes de Marvel
  // length === 2

  test("getHeroesByOwner debe de retonar héroes por Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
