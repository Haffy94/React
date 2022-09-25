const nombre = 'Lucas';
const apellido = 'Hafner';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(){
    return 'Hola Mundo'
}

console.log(`Este es un texto: ${getSaludo() }`);