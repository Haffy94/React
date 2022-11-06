//import {heroes} from  './data/heroes';

import { heroes } from "../data/heroes"

const getHeroeById = (id) => {
    const heroeSeleccionado = heroes.find(heroes => heroes.id === id);
    return heroeSeleccionado.name
}

//asi lo hice yo ^

const getHeroeById2 = (id) => {
    return heroes.find( ( heroe ) => {
        if (heroe.id === id ) {
            return true;
        }else{
            return false;
        }
    })
}


export const getHeroeById3 = (id) =>  heroes.find( ( heroe ) => heroe.id === id)



//console.log (getHeroeById(2));
//console.log (getHeroeById2(2));
//console.log (getHeroeById3(2));

export const getHeroeByOwner = (owner) =>  heroes.filter( ( heroe ) => heroe.owner === owner);

//console.log (getHeroeByOwner('DC'));

//////////////////////clase 2



