const personajes = ['Caleb', 'Talbot', 'Elliot']

const [, , caleb] = personajes

console.log(caleb)


const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
console.log (letras, numeros)

//tarea
// el primer valor de el arreglo se llamara nombre
//el segundo setNombre

const useState = (valor) => {
    return [ valor, ()=>{ console.log('Hola Mundo') }];
}

const [nombre,setNombre] = useState('Haffy');
//console.log(arr)

console.log(nombre)
setNombre();