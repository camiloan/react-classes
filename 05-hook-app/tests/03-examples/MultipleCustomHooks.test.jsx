import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useCounter, useFetch } from '../../src/hooks';
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('debe de mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText('Loading...'));
    expect(screen.getByText('BreakingBad Quotes'));
    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    expect(nextButton.disabled).toBeTruthy();
    // screen.debug();
  });

  test('debe de mostrar un Quote ', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Camilo', quote: 'Hola Mundo' }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText('Hola Mundo')).toBeTruthy();
    expect(screen.getByText('Camilo')).toBeTruthy();

    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    expect(nextButton.disabled).toBeFalsy();
    // screen.debug();
  });

  test('debe de llamar la función de incremetar', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Camilo', quote: 'Hola Mundo' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
    // screen.debug();
  });
});
