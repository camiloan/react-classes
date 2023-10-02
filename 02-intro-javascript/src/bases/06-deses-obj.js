// Desestructuración
// Asignación Desestructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
  rango: "Soldado",
};

/* console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
 */

/* const {nombre:nombre2} =persona;
const {edad} =persona;
const {clave} =persona;
 */

// const {nombre:nombre2, edad, clave,}=persona;

/* console.log(nombre2);
console.log(edad);
console.log(clave); */

/* const retornaPersona=(usuario)=>{
    const {nombre:nombre2, edad, clave,}=usuario;
    console.log(nombre2,edad,clave);
} */

// retornaPersona(persona);

/* const retornaPersona = ({ nombre, edad, clave, rango = "Capitán" }) => {
  // const {nombre:nombre2, edad, clave,}=usuario;
  console.log(nombre, edad, clave, rango);
};
 */

const usaContext = ({ nombre, edad, clave, rango = "Capitán" }) => {
    
    return{
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:15.1233,
            lng:-12.433
        }
    }
  };
  
// const avenger = useContext(persona);
// console.log(avenger);

// const {nombreClave, anios, latlng:{lat,lng}}= usaContext(persona);
const {nombreClave, anios, latlng}= usaContext(persona);
const {lat,lng} = latlng;

console.log(nombreClave,anios);
console.log(lat,lng);