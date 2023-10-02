import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Pruebas en <LoginPage/>', () => {
  const user = {
    id: 1,
    name: 'Camilo',
  };
  test('debe de mostrar el componente sin el usuario ', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    // console.log(preTag.innerHTML);
    expect(preTag.innerHTML).toBe('null');
  });

  test('debe de llamar el setUser cuando se hace click en el boton', () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const setButton = screen.getByRole('button', {
      name: 'Establecer usuario',
    });
    fireEvent.click(setButton);
    expect(setUserMock).toHaveBeenCalledWith({
      email: 'camilo.google.com',
      id: 123,
      name: 'Camilo',
    });
    // screen.debug();
  });
});
