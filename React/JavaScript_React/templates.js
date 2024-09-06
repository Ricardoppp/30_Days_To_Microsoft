// Tempalates-String

const nombre = "Ricardo";
const edad = new Date().getFullYear() - 2000;

// esta es la forma que siempre se hace
console.log("Bienvenido" + nombre + ", tu edad es de" + edad);

// otra forma se puede con comas ','
console.log("Bienvenido", nombre , ", tu edad es de",  edad);

// pero la mejor forma es de con el uso de Backticks ``
console.log(`Bienvenido ${nombre}, tienes la edad de ${edad}`);

// tambien se puede directamente con un const
const mensaje = `Bienvenido ${nombre}, tienes la edad de ${edad}`

document.write(mensaje) // esto es para que se vea el mensaje en el HTML, ya que si es con console.log, se muestra en 'consola' HAHAHA
