

console.log("Prueba desde archivo js");
var nombre =prompt("Ingresar Nombre");
let resultadoNombre= alert("Hola "+nombre+" cantidad de productos a sumar.");
let cantProd =prompt("Ingresar cantidad de productos");
let precio;
let total=0;

let x=1
cantProd=parseInt(cantProd);
while(x<=cantProd){

    precio=prompt("ingresar precio producto numero:"+x);
    precio=parseInt(precio);
    total+=precio;
    x=x+1;
}
alert(total);

