const apiKey='5Xr0pZp4GehqQlYMNmFyMadI1qEfRDrh';
/* const peticion=fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);
peticion.then(
    resp=> {
        resp.json().then(data=>{
            console.log(data)
        })
        // console.log(resp)
    })
    .catch(console.warn) */

    const peticion=fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);
peticion.then( resp=> resp.json())
        .then(({data})=>{
            const {url}= data.images.original;
            console.log(url);
            const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
        })
    .catch(console.warn);