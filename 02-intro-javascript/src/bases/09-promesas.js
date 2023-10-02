import { getHeroeById } from "../bases/08-imp-exp";
import heroes from "./data/heroes";

/* const promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // Tarea
        // importen el
        const p1=getHeroeById(2);
        resolve(p1);
        // reject('No se pudo encontrar el héroe.')
        //console.log('2 segundos después')
    },2000)
});


promesa.then((heroe)=>{
    // console.log('Then de la promesa')
    console.log('Herore ', heroe)
})
.catch(err=> console.warn(err));
 */



const getHeroeByIdAsync=(id)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // Tarea
            // importen el
            const p1=getHeroeById(id);
            if(p1){
                resolve(p1);
            }else {
                reject('No se pudo encontrar el héroe.');
            }
           
           
            // reject('No se pudo encontrar el héroe.')
            //console.log('2 segundos después')
        },2000)
    }); 
}

getHeroeByIdAsync(332)
    .then(console.log)
    .catch(console.warn)