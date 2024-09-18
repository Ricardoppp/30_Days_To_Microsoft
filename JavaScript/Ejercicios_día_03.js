//! Exercises: Level 1
//? 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
    let firstName   = "Ricardo";
    let lastName    = "Prieto";
    let country     = "Colombia";
    let city        = "Bogotá";
    let age         = 26;
    const isMarried = false;
    const year      = 2024;
        console.log(typeof firstName);
        console.log(typeof lastName);
        console.log(typeof country);
        console.log(typeof age);
        console.log(typeof isMarried);
        console.log(typeof year);

//? 2. Check if type of '10' is equal to 10
    let WTF= '10'
    console.log(typeof WTF)

    console.log('10'== 10 )

//? 3. Check if parseInt('9.8') is equal to 10
    let check = '9.8'
    console.log(9.8 == 10)

//? 4. Boolean value is either true or false.
    // Write three JavaScript statement which provide truthy value.
        let one = 5>2;
        console.log(one);
        let two = 1<2;
        console.log(two);
        let three = '22'== 22;
        console.log(three);

    // Write three JavaScript statement which provide falsy value.
        let one2 = 0 == 1;
        console.log(one2);
        let two2 = 3 >= 5;
        console.log(two2);
        let three2 = 22 == '23';
        console.log(three2)

//? 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    console.log(4 > 3);
    console.log(4 >= 3);
    console.log(4 < 3);
    console.log(4 <= 3);
    console.log(4 == 4);
    console.log(4 === 4);
    console.log(4 != 4);
    console.log(4 !== 4);
    console.log(4 != '4');
    console.log(4 == '4');
    console.log(4 === '4');
    // Find the length of python and jargon and make a falsy comparison statement.

//? 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
    console.log(4 > 3 && 10 < 12);
    console.log(4 > 3 && 10 > 12);
    console.log(4 > 3 || 10 < 12);
    console.log(4 > 3 || 10 > 12);
    console.log(!(4 > 3));
    console.log(!(4 < 3));
    console.log(!(false));
    console.log(!(4 > 3 && 10 < 12));
    console.log(!(4 > 3 && 10 > 12));
    console.log(!(4 === '4'));
    // There is no 'on' in both dragon and python

//? 7. Use the Date object to do the following activities
    const now = new Date()
    // What is the year today?
    const years = now.getFullYear()
    // What is the month today as a number?
    const month = now.getMonth() + 1 // return month(0 - 11)
    // What is the date today?
    const date = now.getDate() // return date (1 - 31)
    // What is the day today as a number?
    const day = now.getDay()
    // What is the hours now?
    const hours = now.getHours() // return number (0 - 23)
    // What is the minutes now?
    const minutes = now.getMinutes() // return number (0 -59)

    // Find out the numbers of seconds elapsed from January 1, 1970 to now.

    // console.log(`${date}/${month}/${years} ${hours}:${minutes}`) 