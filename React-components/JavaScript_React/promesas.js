// Son una forma con cosas que pueden ocurrir o no
const sumar = (a,b) =>{
    return new Promise((resolve, reject) =>{
        if (a<0 || b<0){
            reject("esto no es valido")
        }else{
            resolve(a+b)
        }
    });
};

const result = sumar( 3 , 5)
    .then((res)=>{ // el then solo funciona solamente si se resuelve esta promesa 
        // console.log(res);
        document.write(res);
    })
    .catch((error)=>{
        // console.log(error)
        document.write(error);
    });

