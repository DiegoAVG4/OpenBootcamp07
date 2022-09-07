// La fecha de hoy
let fecha = new Date();

console.log(fecha);


// La fecha de tu nacimiento
let nacimiento = new Date(2003, 4, 14, 5);

console.log(nacimiento);


// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
console.log(fecha > nacimiento);


// Una variable que contenga el día de tu nacimiento
const naciD = nacimiento.getDate();
console.log(naciD); 



// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const naciM = nacimiento.getMonth()+1;
console.log(naciM); 


// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const naciY = nacimiento.getFullYear();
console.log(naciY);