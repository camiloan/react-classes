import { todoReducer } from '../../src/08-useReducer';

describe('Pruebas en todoReducer', () => {
  const initialState = [
    {
      id: 1,
      describe: 'Demo Todo',
      done: false,
    },
  ];
  test('debe de regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('debe de agregasr un todo', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        describe: 'Nuevo todo #2',
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('debe de eliminar un todo', () => {
       
      const action = {
        type: '[TODO] Remove Todo',
        payload: 1,
      };
      const newState =  todoReducer(initialState, action);
      expect(newState.length).toBe(0);
  });

  test('debe de realizar el Toogle del todo', () => {
    const action = {
        type: '[TODO] Toogle Todo',
        payload: 1
      };
    const newState = todoReducer(initialState, action)
    expect(newState[0].done).toBe(true);
    const newState2 = todoReducer(newState, action)
    expect(newState2[0].done).toBe(false);

  });
});
