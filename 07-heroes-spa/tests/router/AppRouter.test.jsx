import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas <AppRouter />', () => {
  test('debe de mostrar el login si no está autenticado', () => {
    const contextValue = {
      logged: false,
    };
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    // screen.debug();
    expect(screen.getAllByText('Login').length).toBe(2);
  });

  test('debe de mostrar el componente de Marvel si está autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        id: 'ABC',
        name: 'Camilo Bolaños',
      },
    };

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText('Camilo Bolaños')).toBeTruthy();
    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);

    // screen.debug();
  });
});
