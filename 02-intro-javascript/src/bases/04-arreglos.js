

// Arreglos en JS Coleccion de información que se encuentra dentro de una misma variable

// const arreglo = new Array(100);  //Esta forma se recomiendo solo si se usa un arreglo de elementos definidos
const arreglo = [1,2,3,4];
/* arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4); */
// No es recomendable usar push porque modifica el objeto principal
let arreglo2=[...arreglo,5]; // Operador Spread
//arreglo2.push(5);

const arreglo3 = arreglo2.map(function(numero){
return numero*2;
}); // Collback, una función que se va ha ejecutar dentro este metodo, en este caso por cada uno de los elementos del arreglo2

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
