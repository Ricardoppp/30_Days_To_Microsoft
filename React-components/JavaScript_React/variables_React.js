// En Js existen algo llamadas FatArrows, entonces en vez de escribir codigos con funciones, es mejor trabajar algunas formas con const
function sumar  (a, b){
    return a+b;
}
const resuldado = sumar (5,3);

// la mejor forma es con las FatArrows 
// con esto se puede colcar todo en una sola linea
const sumar2 = (c, d) => a+b;

//* operador ternario
// Como siempre se usa el un if, se hace casi entre 3 o 4 lineas, pero se puede reducir a 1
const cuenta = 10;


//* ejemplo de un if con muchas lineas
// let mensaje; //este se deja vacio ya que se quiere tener un valor vacio
// if (cuenta < 0 )
//     mensaje = "No tienes saldo";
// else 
//     mensaje = "Tienes saldo" 

// forma corta, con el operador ternario, que es '?'
const mensaje = cuenta < 0 ? "No tienes saldo":"Tienes saldo" ;
const mensaje2 = cuenta < 0 && "Hola";


console.log(mensaje);
console.log(mensaje2);

