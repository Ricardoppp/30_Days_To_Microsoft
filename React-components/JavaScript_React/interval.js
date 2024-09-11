// esto es para crear un intervalo de tiempo
const saludo = () =>{
    document.write("<li>Hola mundo <li>")
}
document.write("<ol>");

// el timer se mide en milisegundos

setInterval(saludo(), 2000) // si no se quita las (), se repetira indefinidamente

document.write("</ol>");

