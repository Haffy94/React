//desestructuracion
//asignacion desestructurante

const persona = {
    nombre: 'Caleb Quinn',
    edad: 40,
    clave: 'The Deathslinger'
}


const useContext = ({nombre, edad, rango = 'killer', clave}) => {
    return {
        nombreClave: clave,
        años: edad
    }
}

const {nombreClave, años} = useContext(persona)
//console.log(nombre, edad, clave)
console.log(nombreClave, años)