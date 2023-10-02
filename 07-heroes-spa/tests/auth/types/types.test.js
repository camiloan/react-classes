import { types } from '../../../src/auth';

describe('Pruebas en "Types.js"', () => {
  test('debe de regresar estos types', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    });
    expect(types).toEqual({
      login: expect.any(String),
      logout: expect.any(String),
    });
  });
});
