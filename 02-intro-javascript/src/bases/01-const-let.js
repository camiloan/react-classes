// Variables y Constantes

const nombre = 'Camilo';
const apellido = 'Bolaños';

let valorDado = 5;
valorDado = 4;

console.log(nombre,apellido,valorDado);
// var No se debe usar...
if (true){
    //Scope
    const nombre = 'Peter';
    let valorDado = 6;
    console.log(nombre,valorDado);
}

console.log(valorDado);