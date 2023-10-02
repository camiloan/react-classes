export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span
        className={`align-self-center ${
          todo.done ? 'text-decoration-line-through' : ''
        }`}
        aria-label='span'
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button onClick={() => onRemoveTodo(todo.id)} className='btn btn-primary'>
        Borrar
      </button>
    </li>
  );
};
