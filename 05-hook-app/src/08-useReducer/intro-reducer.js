const initialState = [
  { id: 1, todo: 'Recolectar la puedra del Alma', done: false },
];

const todoReducer = (state = initialState, action={}) => {
  if (action.type === '[TODO] add todo') {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Recolectar la piedra del poder',
  done: false,
};

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });

/*
--Hacer una mutación al arreglo es una mala practica porque no va ha redibujar
todos.push({
  id: 2,
  todo: 'Recolectar la piedra del poder',
  done: false,
});
*/
