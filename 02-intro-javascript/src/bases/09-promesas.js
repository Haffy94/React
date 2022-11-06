import {getHeroeById3} from './bases/08-imp-exp'

/* const promesa = new Promise((resolve, reject) => {

    setTimeout( () => {
        const heroe = getHeroeById3(2)
        resolve(heroe);
        //reject ('mp se údo encontrar el heroe');
    }, 2000)
});

promesa.then(  (heroe)=> {
    console.log('heroe', heroe)
})
.catch(err => console.warn (err)) */

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout( () => {
            const heroe = getHeroeById3(id)
            if (heroe){
                resolve(heroe);
            }else{
                reject ('no se pudo encontrar el heroe');
            }
            
            
        }, 2000)
    });
    
}

getHeroeByIdAsync(10)
    .then( heroe => console.log('heroe', heroe))
    .catch(err => console.warn (err))
    