//! Este es un archivo de prueba, pero donde ire subiendo todo
//! Exercise: Level 1
//* Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
    let challenge = '30 Days Of JavaScript'

//* Print the string on the browser console using console.log()
    console.log(challenge)

//* Print the length of the string on the browser console using console.log()
    console.log(challenge.length)

//* Change all the string characters to capital letters using toUpperCase() method
    console.log(challenge.toUpperCase())

//* Change all the string characters to lowercase letters using toLowerCase() method
    console.log(challenge.toLocaleLowerCase())

//* Cut (slice) out the first word of the string using substr() or substring() method
    console.log(challenge.substring(3))

//* Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
    console.log(challenge.substring(0,2))


//* Check if the string contains a word Script using includes() method
    console.log(challenge.includes('Script'))
    console.log(challenge.includes('script'))

//* Split the string into an array using split() method
    console.log(challenge.split(' '))

//* Split the string 30 Days Of JavaScript at the space using split() method
    console.log(challenge.split(""))

//* 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// TODO: Este me quedo con la duda porque no se que hacer, no entiendo

//* Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
    console.log(challenge.replace('JavaScript', 'Python'))

//* What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
    console.log(challenge.charAt(15))

//* What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
    console.log(challenge.charCodeAt(11))

//* Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
    console.log(challenge.indexOf('a'))

//* Use lastIndexOf to determine the position of the last occurrence of 'a' in 30 Days Of JavaScript.
    console.log(challenge.lastIndexOf('a'))

//* Use indexOf to find the position of the first occurrence of the word 'because' in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    let string = "You cannot end a sentence with because because because is a conjunction"
    console.log(string.indexOf('because'))

//* Use lastIndexOf to find the position of the last occurrence of the word 'because' in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    console.log(string.lastIndexOf('because'))

//* Use search to find the position of the first occurrence of the word 'because' in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    console.log(string.search('because'))

//* Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
    console.log(challenge.trim())

//? Use startsWith() method with the string 30 Days Of JavaScript and make the result true    
    // TODO:

//* Use endsWith() method with the string 30 Days Of JavaScript and make the result true
    console.log(challenge.endsWith('JavaScript'))

// Use match() method to find all the a’s in 30 Days Of JavaScript
    // TODO:

//* Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
    let p1 = "30 Days of"
    console.log(p1.concat( " " + "JavaScipt"))

//* Use repeat() method to print 30 Days Of JavaScript 2 times
    console.log(challenge.repeat(2))


//! Exercise: Level 2

//! Using console.log() print out the following statement:
//* The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    let quote = 'There is no exercise better for the heart than reaching down and lifting people up.'
    let by = 'John Holmes'

    console.log(quote)

//! Using console.log() print out the following quote by Mother Teresa:
//* "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    let quote2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    let by2= "Mother Teresa"
    console.log(quote2)

//* Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
    let ten = '10'
    console.log(typeof ten)

    let trans = parseInt(ten)
    console.log(typeof trans)
    console.log(trans == 10)

//* Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
    let check = '9.8'
    console.log(9.8 == 10)
    console.log(Math.round(check))

//* Check if 'on' is found in both python and jargon
    let on = 'python and jargon'
    console.log(on.includes('on'))

//* I hope this course is not full of jargon. Check if jargon is in the sentence.
    let jargon = 'I hope this course is not full of jargon'
    console.log(jargon.includes('jargon'))

//* Generate a random number between 0 and 100 inclusively.
    const numberr = Math.floor(Math.random() * 101)
    console.log(numberr)

//* Generate a random number between 50 and 100 inclusively.
    function randomm(min,max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random()* (max-min+1)+min)
    }
    let randommm = randomm(50, 101)
    console.log(randommm)

//* Generate a random number between 0 and 255 inclusively.
    const numberr2 = Math.floor(Math.random() * 256)
    console.log(numberr2)

// Access the 'JavaScript' string characters using a random number.
    // TODO: NO entendi ni verga we

//* FIXME: Use console.log() and escape characters to print the following pattern.
//* 1 1 1 1 1
//* 2 1 2 4 8
//* 3 1 3 9 27
//* 4 1 4 16 64
//* 5 1 5 25 125
// En este quiero hacer una funcion que sea la suma de la primera y segunda columna, despues, hacer esta misma operacion 3 veces mas. para que sea el resultado que se muestra
    console.log("1\t1\t1\t1\t1");
    console.log("2\t1\t2\t4\t8");
    console.log("3\t1\t3\t9\t27");
    console.log("4\t1\t4\t16\t64");
    console.log("5\t1\t5\t25\t125");

//* Use substr to slice out the phrase 'because because because' from the following sentence:'You cannot end a sentence with because because because is a conjunction'
    let cut = 'You cannot end a sentence with because because because is a conjunction'
    console.log(cut.substring(31,53))
    // FIXME: Este me deja una duda existencial


//! Exercises: Level 3
//! 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
    let Dios = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' //! LEGALMENTE TIENE QUE SER 3
    console.log(Dios.search('love'))
    
    // TODO: Pero porque el ejemplo de aca abajo si reconoce el str 'love' 
    let str = 'I love JavaScript. If you do not love JavaScript what else can you love.'
    console.log(str.search('love'))  

//? Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    // TODO: HMMMMM VOY en mala racha mano 

//? Clean the following text and find the most frequent word (hint, use replace and regular expressions).
    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

//* Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let nom = 'Ricardo'
let gana = 5000
let anual= 10000
let cursos= 15000

let calcular = (5000*12)+(10000)+(15000*12)
console.log(nom + " gana "+calcular+" al año")



// 🎉 CONGRATULATIONS ! 🎉