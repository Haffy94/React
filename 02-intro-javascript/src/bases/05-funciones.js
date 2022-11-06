//alt+96
//FUNCIONES
const saludar = function (nombre ){
return `Hola, ${nombre}`
};


//FUNCIONES FLECHA
const saludar2 = (nombre ) => {
    return `Hola, ${nombre}`
    };

const saludar3 = (nombre ) => `Hola, ${nombre}`;


const saludar4 = () => `Hola, Mundo`;
    

console.log(saludar('Haffy'))
console.log(saludar2('Haffy'))
console.log(saludar3('Haffy'))
console.log(saludar4)

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'el_arponero_god'
    }
}

const getUser2 = () => ({
        uid: 'ABC123',
        username: 'el_arponero_god'
    });


console.log(getUser())
console.log(getUser2())


//tarea
//transforma a funcion flecha
//tiene que retoner un usuario implicito
//pruebas

const getUsuarioActivo = ( nombre ) =>(
    {
        uid: 'D3T3G0D',
        username: nombre
    });

const usuarioActivo = getUsuarioActivo ('Talbot Grimes')
console.log(usuarioActivo);

