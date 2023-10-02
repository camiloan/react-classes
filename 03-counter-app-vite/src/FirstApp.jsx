import PropTypes from "prop-types";
/* const newMessage = {
  message: "Hola Mundo",
  title: "Fernando",
}; */
// Toda función para renderizar de la mejor manera se recomiendo posicionarlo fuera del functional Component
/* const Saludar = (nombre) => {
  return `Nombre ${nombre}`;
};

const getResult = (a, b) => {
  return a + b;
}; */

export const FirstApp = ({ title, subtitle, name }) => {
  //   console.log(props);
  /*   if (!title){
        throw new Error('El title no existe');
    } */
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      {/* <h1>{Saludar(u"Camilo")}</h1> */}
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      {/* <p>Soy un subtitulo {getResult(12,43)}</p> */}
      <p>{name}</p>
    </>
  );
};

FirstApp.protoTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
  title: "No hay título",
  subtitle: "No hay subtitulos",
  name: "Camilo Bolaños",
};
