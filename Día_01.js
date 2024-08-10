let nombre = "Ricardo";

console.log(nombre);

//? Tipos de datos

// String
let nombre2 ="Miguel";

// Numero
let numero_Int= 123;
let numero_Float= 1.23;

// Object
var objeto = {
    nombre: "Ricardo",
    apellido: "Prieto"
}

//! Si necesitamos ver un valor o el tipo de una variable, se usa: typeof
console.log(typeof nombre2)

// Boolean
let bandera = false;

// function: esta permite reutilizar lineas de codigo
function miFuncion(){}

// Symbol: se utiliza para crear un valor unico para una variable
let simbolo=Symbol("Mi simbolo");

// class; es como si fuera unba funcion 
class persona{
    constructor(nombre,apellido){
        this.nombre= nombre;
        this.apellido=apellido;
    }
}

// undefined; es un valor predeterminado de sin definir
let x;

// null; ausencia de valor, este es un tipo objeto 
let y=null;

//! concetpos de arreglos o (Arrays), estos siendo tipo Object
let autos = ["BMW", "Audi","Volvo"]
console.log(typeof autos)

// si queremos asignar cadenas vacias, es algo tan simple como 
let z = '';
console.log(typeof z)

//! Concadenación de cadenas
let nombre_concadenacion = "Ricardo";
let apellido_concadenacion= "Prieto";

let Nombre_completo = nombre_concadenacion + " " + apellido_concadenacion;

let xx=nombre_concadenacion + 343 //Esto daria por resultado el nombre mas el numero '343' 

let xxx= nombre_concadenacion + (2+4); //Esto es para sumar los valores numericos

let xxxx= 2+4+nombre_concadenacion; //Recuerde que JS toma valores de izquierda a derecha (->), esto se le conoce como contexto de cadena


//! Buenas practicas para el uso del LET y CONST
// En JS se puede declarar variables sin el uso de variables, EJ:

nombre_var= "Ricardo";
console.log(nombre_var);

// se debe trabajar con var o let, si se trabaja con const, tiene otra complejidad

const apellido_var= "Prieto";
// apellido_var = "Garcia "; en esta linea va a generar error ya que la palabra const esta reservada para un valor que no se puede modificar

// se puede unir diferentes variables separadas por una coma (,) como;
let a, b;
a=10, b=20;
let c = a + b;
console.log(c)

// tambien se puede modificar con diferentes tipos de variable
let da, de, di;
da=10, de=10, di="ricardo";
let ca = da + de + " " + di;
console.log(ca)


