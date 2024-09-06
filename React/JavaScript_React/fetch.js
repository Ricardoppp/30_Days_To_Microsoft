XMLHttpRequest() // ESTO ES AJAX, devuelve archivos <xml> de arquitectura SOAP, no lo vamos a usar acá, pero para tener en cuenta

// hoy en dia se trabaja con arquitectura resizeTo, se trabaja con JSON

// estos link son endpoints
// esto es una promesa practimanete
fetch("https://jsonplaceholder.typicode.com/users/1") // este solo muestra la data
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    });

// muchas personas no usan esta forma, entonces utilizan Axios que es una libreria externa 

axios.get("https://jsonplaceholder.typicode.com/users/3") // este muestra mas informacion
    .then(( {data} )=> console.log(data.email)); // las llaves se hacen es para que tome el parametro, con eso ahorramos [ console.log(data.data.email)); ] de la informacion, entre a data, despues que tome informacion de la data, para aun despues, tomarel email 
    