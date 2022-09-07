// Un nuevo Set con los nombres de tu familia
const Caja = ["Macario", "Zori", "Diego"];

const setC = new Set(Caja);
console.log(setC);


// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

console.log(setC.add("Diego"));


// Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

console.log(setC.add("Javascript"))