let nombre;
let edad;

nombre = prompt("Ingrese su nombre");
edad = prompt("Ingrese su edad");
edad = parseInt(edad);
let suma = edad + 10;
function asteriscos(){
    for(var i = 0; i<edad; i++){
    document.write("*");
    }
}
document.write("Bienvenido " + nombre);
document.write("<br>");
document.write("Su edad es: " + edad);
document.write("<br>");
document.write(`<span style="color:red">Su edad dentro de 10 años será: ${suma}</span>` + "<br>");

asteriscos();

