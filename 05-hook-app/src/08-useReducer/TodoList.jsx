import { TodoItem } from './';

export const TodoList = ({ todos = [], onRemoveTodo,onToggleTodo }) => {
  // console.log(todos);
  return (
    <ul className='list-group'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo}/>
      ))}
    </ul>
  );
};
