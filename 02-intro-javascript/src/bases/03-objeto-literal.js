

const persona ={
    nombre: 'Tony',
    apellido: 'Stark',
    edad:45,
    direccion:{
        ciudad: 'New York',
        zip:55234234,
        lat:14.542,
        lng:34.6565
    }
};

//console.table(persona);
//console.log({persona});

//const persona2=persona; //Referenciamos el objeto persona a traves del alias persona2, apunta al mismo espacio de memoria.

const persona2={...persona}; //Clonamos (Operador Express ...) el objeto con todas sus propiedades y valores en un nuevo espacio de memoria.
persona2.nombre='Peter';
console.log(persona);
console.log(persona2);