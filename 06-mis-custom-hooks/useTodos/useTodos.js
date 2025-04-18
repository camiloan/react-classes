import { useEffect, useReducer } from 'react';
import { todoReducer } from '../todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};
export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    // console.log({ todo });
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    };
    dispatch(action);
  };

  const handleRemoveTodo = (id) => {
    // console.log(id);
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    // console.log({ id });
    dispatch({
      type: '[TODO] Toogle Todo',
      payload: id,
    });
  };

  return {
    todos,
    handleRemoveTodo,
    handleToggleTodo,
    handleNewTodo,
    todosCount:todos.length, 
    pendingTodosCount:todos.filter(todo=>!todo.done).length
  };
};
