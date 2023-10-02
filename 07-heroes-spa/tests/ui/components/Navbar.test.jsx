import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui/components/Navbar';
const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));
describe('Pruebas en <Navbar />', () => {
  const contextValue = {
    logged: true,
    user: {
      id: 'ABC',
      name: 'Camilo Bolaños',
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());
  test('debe de mostrar el nombre del usuario', () => {
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    // screen.debug();
    expect(screen.getByText(contextValue.user.name)).toBeTruthy();
  });
  test('debe de llamar el logout y navigate cuando se hace click en el botón', () => {
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <Navbar
          //   value={{ onLogout: onLogoutMock }}
          />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    const logoutButton = screen.getByRole('button', { name: 'Logout' });
    fireEvent.click(logoutButton);
    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
