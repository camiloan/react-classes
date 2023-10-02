import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {
  test('getSaluda debe retornar "Hola Camilo" ', () => {
      const name ='Camilo';
      const message= getSaludo(name);
      expect(message).toBe(`Hola ${name}`);
  });
  
});
