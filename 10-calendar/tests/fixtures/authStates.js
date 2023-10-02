export const initialState = {
  status: 'checking',
  user: {},
  errorMessage: undefined,
};
export const authenticatedState = {
  status: 'authenticated',
  user: {
    uid: '12354564',
    name: 'Camilo',
  },
  errorMessage: undefined,
};
export const notAuthenticatedState = {
  status: 'not-authenticated',
  user: {},
  errorMessage: undefined,
};
