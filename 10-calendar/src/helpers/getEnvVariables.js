/* export const getEnvVariables = () => {
  import.meta.env;
  return {
    ...import.meta.env,
  };
};
 */

export const getEnvVariables = () => {
  //import.meta.env;
  return {
    VITE_MODE: import.meta.env.VITE_MODE,
    VITE_API_URL: import.meta.env.VITE_API_URL,
  };
};
