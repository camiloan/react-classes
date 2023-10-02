import { configureStore } from '@reduxjs/toolkit';
import { calendarSlice, uiSlice, authSlice } from './';

export const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware({
      serializableCheck: false,
    }),
});
