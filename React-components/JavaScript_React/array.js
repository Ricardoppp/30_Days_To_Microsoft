// Una forma de crear un Array y mas enlistado, aunque engorroso, es de la siguiente manera

const numeros = [1,2,3,4,5];

document.write("<ul>");
for (numero in numero){
    document.write("<li>");
    document.write(numero);
    document.write("</li>");
}
document.write("</ul>");

// una forma mas "sencilla" es como si fuera de manera 'ternaria' y queda en una sola linea
document.write("<ul>");
numeros.map((numero) => document.write("<li>" + numero + "</li>"));
document.write("</ul>"); 

document.write("<ul>");
const nuevo = numeros.map((numero) => numero + 1 ); // esto lo que hace es tomar los valores de numeros y sumarlos == [2,3,4,5,6] 
document.write("</ul>"); 



//! Destructuring Array
// para los arrays funcionan diferentes, se busca colocando una llave primero = y despues la informacion que se necesitara
const [Usuario1, Usuario2, Usuario3  ] = ["Pepe", "Juan", "Maria", "Lucia"];

// pero si solo quiero un numero especifico, solo coloco ',' comas y se saltaria a la persona que se quiera buscar
const [, Usuarios2, ,]= ["Pepe", "Juan", "Maria", "Lucia"];

document.write(Usuarios2);

