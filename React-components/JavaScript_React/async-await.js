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

//! Conbinación de Fetch-async

const peticion2 =  async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
    const data2 = await response.json();

    return data2 ;
};
//? Recordemos que puede existir async sin await. Pero, No puede existir un await sin un async


//! Conbinación Axios-async

const peticion3 = async()=>{
    const { data3 } = await axios.get("https://jsonplaceholder.typicode.com/users/3"); // esto es una promesa 

    return data3;
}
const data3= peticion().then(console.log);
