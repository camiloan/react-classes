const personajes = ['Goku','Vegeta','Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [,,p3] =personajes;
console.log(p3);

const retornaArreglo=()=> {
    return ['ABC',123]
}

const [letras, numeros] =retornaArreglo();

console.log(letras, numeros);

// Tarea
// 1. el primer valor del arr se llamará nobmre
// 2. el segundo valor se llamará setNombre
const usaState =(valor) =>{
    return [valor, ()=>{console.log('Hola Mundo')}];
}

// const arr = usaState('Goku');
// console.log(arr);

const [nombre, setNombre] = usaState('Goku')

console.log(nombre);
setNombre();