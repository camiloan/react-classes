import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';
describe('Pruebas en <TodoItem/>', () => {
  const todo = {
    id: 1,
    description: 'Piedra del Alma',
    done: false,
  };

  const onRemoveTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();
  beforeEach(() => jest.clearAllMocks());
  test('debe de mostrar el Todo Pendiente por completar', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
      />
    );

    // screen.debug();
    const liElement = screen.getByRole('listitem');
    // console.log(liElement.innerHTML);
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );
    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });

  test('debe de mostrar el Todo completado', () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('span debe de llamar el ToogleTodo cuando se hace click', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
      />
    );
    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenLastCalledWith(todo.id)
  });


  test('button debe de llamar el onRemoveTodo cuando se hace click', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
      />
    );
    const deleteButton = screen.getByRole('button');
    fireEvent.click(deleteButton);
    expect(onRemoveTodoMock).toHaveBeenLastCalledWith(todo.id)
  });
});
