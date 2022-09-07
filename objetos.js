// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos = {
    nombre: "Diego",
    apellido: "Valderrama",
    edad: 19,
    altura: 1.83,
    isDeveloper: true
}
console.log(datos);


// Una variable que obtenga tu edad a partir del objeto anterior
const edaD = (datos.edad);
console.log(edaD);



/*Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus 
dos mejores amig@s*/
let personal = datos
console.log(personal);

const amigos = {
    nombre: "Antonio",
    apellido: "Undefine",
    edad: 18,
    altura: 1.76,
    isDeveloper: false,
    amigo2: {
        nombre: "Erick",
        apellido: "Undefine",
        edad: 21,
        altura: 1.78,
        isDeveloper: false,
    } 
};
console.log(amigos)


// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
let todo = []
console.log();
