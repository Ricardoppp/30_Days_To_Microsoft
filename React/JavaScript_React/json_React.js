//! Que es JSON

//?     JS => JavaScript
//?     O  => Object 
//?     N  => Notation

// una forma en la que antes se usaba los objetos en JS era

var Pelota={
    color: "Roja",
    tam: 3,
    rebota: false,
    setBotar: function(){
        this.rebota=true
    }
};

// Despues se crearon cosas como 
// class
// get
// set

// Ahora, usaremos esta forma para React:
const Usuario={
    name: "Ricardo",
    edad: 20,
    email: "mail.@mail.com",
};
document.write("<p>" + Usuario.name + "</p>");
document.write("<p>" + Usuario.edad + "</p>");
document.write("<p>" + Usuario.email + "</p>");

//! Destructuring
// con el destructurin evitamos colocar Usuario.'variable', sino que buscamos lo que necesitamos y lo colocamos entre llaves
const {name2, email2} ={
    name: "Ricardo",
    edad: 20,
    email: "mail.@mail.com",
};

document.write("<p>" + name2 + "</p>");
document.write("<p>" + email2 + "</p>");

