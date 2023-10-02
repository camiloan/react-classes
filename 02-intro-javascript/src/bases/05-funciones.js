// Funciones en JS
const saludar = function saludar(nombre) {
  return `Hola, ${nombre}`;
};

// Funcion de Flecha

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

// Simplificar
const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = ()=>`Hola Mundo`;

// saludar = 30;
console.log(saludar("Goku"));
// console.log(saludar)
console.log(saludar2("Vegeta"));
console.log(saludar3("Krilin"));
console.log(saludar4());


/* const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}; */

const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
    });

const user =getUser();
console.log(user);

// Tarea
// 1. Tranformar a una función de Flecha
// 2. Tiene que retornar un objeto implicíto
// 3. Pruebas

/* function getUsuarioActivo(nombre){
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo=getUsuarioActivo('Camilo');

console.log(usuarioActivo); */

const getUsuarioActivo = (nombre) => (
    {
        uid:'ABC567',
        username: nombre
    }
);
const usuarioActivo = getUsuarioActivo('Camilo');
console.log(usuarioActivo);
