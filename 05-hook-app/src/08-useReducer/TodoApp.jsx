import { useTodos } from '../hooks';
import { TodoAdd, TodoList } from './';

export const TodoApp = () => {
  const {todos, todosCount, pendingTodosCount, handleRemoveTodo, handleToggleTodo, handleNewTodo} = useTodos();
  return (
    <>
      <h1>
        TodoApp ({todosCount}), <small>Pendientes: ({pendingTodosCount})</small>
      </h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            onRemoveTodo={handleRemoveTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
