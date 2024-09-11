// Uso de booleanos, de toda la vida True or Flase
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

//? Valores verdaderos, (esta no la sabia OJO)
// numero (entero o negativo) es verdadero excepto Zero
// los Str son verdaderos excepto un Str vacio ("")

//? Valores falsos 
// 0, 0n, null, undefined, NaN, un booleano falso, Str vacios ('', "", ``)

//? Undefined 
// si declaramos una variable y esta esta indefinida, sera infefinida

//? Null
// Null significa sin valor 

//? Operators, los de toda la vida

// =
// +=
// -=
// *=
// /=
// %=
// **=

//? Arithmetic Operators, de toda la vida

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


// Concatenating string with numbers using string interpolation
/*
The boiling point of water is 100 oC.
Human body temperature is 37 oC.
The gravity of earth is 9.81 m/s2.
*/
console.log(
`The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)
