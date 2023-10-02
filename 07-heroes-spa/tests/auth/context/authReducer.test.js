import { authReducer, types } from '../../../src/auth';

describe('Pruebas en authReducer', () => {
  const user = {
    id: 'ABC',
    name: 'Camilo Bolaños',
  };

  test('debe de retonar el estado por defecto', () => {
    const newState = authReducer({ logged: false }, {});
    expect(newState).toEqual({ logged: false });
  });
  test('debe de (login) llamar el login autenticar y establecer el user', () => {
    const action = {
      type: types.login,
      payload: user,
    };
    const newState = authReducer({ logged: false }, action);
    expect(newState).toEqual({
      logged: true,
      user: action.payload,
    });
  });
  test('debe de (logout) borrar el name del usuario y logged en false', () => {
    const initialState = {
      logged: true,
      user: user,
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(initialState, action);
    expect(newState).toEqual({ logged: false });
  });
});
