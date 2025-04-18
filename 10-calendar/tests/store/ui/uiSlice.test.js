import {
  uiSlice,
  onOpenDateModal,
  onCloseDateModal,
} from '../../../src/store/ui/uiSlice';

describe('Pruebas en uiSlice', () => {
  test('debe de regresar el estado por defecto', () => {
    expect(uiSlice.getInitialState()).toEqual({ isDateModalOpen: false });
    expect(uiSlice.getInitialState().isDateModalOpen).toBeFalsy();
  });

  test('debe de cambiar el isDateModalOpen correctamente', () => {
    let state = uiSlice.getInitialState();
    state = uiSlice.reducer(state, onOpenDateModal());
    expect(state.isDateModalOpen).toBeTruthy();
    state = uiSlice.reducer(state, onCloseDateModal());
    expect(state.isDateModalOpen).toBeFalsy();
  });
});
