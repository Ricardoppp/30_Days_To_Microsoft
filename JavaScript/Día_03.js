//! Uso de booleanos, de toda la vida True or Flase
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

//! Valores verdaderos, (esta no la sabia OJO)
// numero (entero o negativo) es verdadero excepto Zero
// los Str son verdaderos excepto un Str vacio ("")

//! Valores falsos 
// 0, 0n, null, undefined, NaN, un booleano falso, Str vacios ('', "", ``)

//! Undefined 
// si declaramos una variable y esta esta indefinida, sera infefinida

//! Null
// Null significa sin valor 

//! Operators, los de toda la vida
// =
// +=
// -=
// *=
// /=
// %=
// **=

//! Arithmetic Operators, de toda la vida
// Addition(+): a + b
// Subtraction(-): a - b
// Multiplication(*): a * b
// Division(/): a / b
// Modulus(%): a % b
// Exponential(**): a ** b

let numOne = 4
let numTwo = 3

let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

//? Valores constantes
// PI
const PI = 3.14
let radius = 100          // length in meter

// Area de un circulo 
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m

// Gravedad 
const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Peso de un objeto
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


//? Concadenacion de un Str
console.log(
`The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)



//! Operadores comparativos
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false


//! Operadores Logicos
// && ampersand operator example

// const check  = 4 > 3 && 10 > 5         // true && true -> true
// const check = 4 > 3 && 10 < 5         // true && false -> false
// const check = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

// const check = 4 > 3 || 10 > 5         // true  || true -> true
// const check = 4 > 3 || 10 < 5         // true  || false -> true
// const check = 4 < 3 || 10 < 5         // false || false -> false

// ! Negation examples

// let check = 4 > 3                     // true
// let check = !(4 > 3)                  //  false
// let isLightOn = true
// let isLightOff = !isLightOn           // false
// let isMarried = !false                // true

//! operador de Incremento
Pre-increment
// let count = 0
// console.log(++count)        // 1
// console.log(count)          // 1
// Post-increment
// let count = 0
// console.log(count++)        // 0
// console.log(count)          // 1

//! operador de Decremento
Pre-decrement
// let count = 0
// console.log(--count) // -1
// console.log(count)  // -1
// Post-decrement
// let count = 0
// console.log(count--) // 0
// console.log(count)   // -1



    // TODO RECUERDA QUITAR LOS COMENTARIOS PARA LEER MEJOR EL CODIGO


//! Operador ternario
// let isRaining = true
// isRaining
//   ? console.log('You need a rain coat.')
//   : console.log('No need for a rain coat.')
// isRaining = false

// isRaining
//   ? console.log('You need a rain coat.')
//   : console.log('No need for a rain coat.')
// You need a rain coat.
// No need for a rain coat.
// let number = 5
// number > 0
//   ? console.log(`${number} is a positive number`)
//   : console.log(`${number} is a negative number`)
// number = -5

// number > 0
//   ? console.log(`${number} is a positive number`)
//   : console.log(`${number} is a negative number`)
// 5 is a positive number
// -5 is a negative number

//! Alerta de ventana
alert(message)
alert('Welcome to 30DaysOfJavaScript')

//! Ventana emergente para escribir;  conocida como un window prompt() method
prompt('required text', 'optional text')
let number = prompt('Enter number', 'number goes here')
console.log(number)

//! Window confirm() method
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box


//! DATE OBJECT

// Estos son muchos objetos, en resumidas cuentas, empiezan con .get...