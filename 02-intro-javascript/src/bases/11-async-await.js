/* const getImagenPromesa=()=>{
    const promesa=new Promise((resolve, reject)=>{
        resolve('https://giphy.com/gifs/southparkgifs-3oz8xQAPdoGTMyg1Yk?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=')
    })
    return promesa;
}

getImagenPromesa().then(console.log).catch((err) => {
    
}); */

const getImagenPromesa=()=>new Promise (resolve=> resolve('https://giphy.com/gifs/southparkgifs-3oz8xQAPdoGTMyg1Yk?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term='));
getImagenPromesa().then(console.log).catch((err) => { 
}); 


const getImage=async()=>{
    try {
        const apiKey='5Xr0pZp4GehqQlYMNmFyMadI1qEfRDrh';
        const resp= await fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);
        const {data} = await resp.json();
        const {url} =data.images.original;
        const img =document.createElement('img');
        img.src =url;
        document.body.append(img); 
    } catch (error) {
        // manejo del error
        console.error(error)
    }
}

// console.log(getImage());
getImage()