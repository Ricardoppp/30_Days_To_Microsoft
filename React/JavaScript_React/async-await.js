// una funcion promesa normal
const saludo =() =>{
    return new Promise((resolve, reject)=>{
        resolve("Hola mundo");
    });
}; 

saludo().then(response => console.log(response));

// una funcion async, ya que todas las funciones async, son promesas
const saludo2 = async() =>{
    return "hola mundo";
};


// funcion await, que tambien se puede volver async
const peticion = async () => {
    setTimeout(() =>{
        const datos = {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
        };
        console.log(datos);
    }, 1000);
};

peticion().then(console.log);