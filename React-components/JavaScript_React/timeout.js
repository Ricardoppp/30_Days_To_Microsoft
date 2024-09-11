// que es un timeout
// se hace primero una arrow funtion
const evaluar = () =>{
    const edad = prompt(" cual es tu edad")

    if (edad<18){
        alert("Menor de edad");
        return;
    }
    alert("Mayor de edad");
};

// evaluar(); si se hace aca esta funcion, esto mandara que una alerta antes de que cargue la pagina web, y no entrara si no se interactua con la alerta
// entonces toca ir al HTML, se va <body onload="evaluar()">

// entonces, esto de abajo se hace para que, primero cargue la pagina, y despues muestre el mensaje
setTimeout(evaluar, 2000)