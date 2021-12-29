


// let x=1
// cantProd=parseInt(cantProd);
// // while(x<=cantProd){
//     let resultadoNombre= alert("Hola "+nombre+" cantidad de productos a sumar.");
//     let cantProd =
//     let precio;
//     precio=prompt("ingresar precio producto numero:"+x);
//     precio=parseInt(precio);
//     total+=precio;
//     x=x+1;
// }
// alert("El total por los productos ingresados es"+total);
var valor= new Array();
function calcularPrecio(resultadoNombr,precio,iva,cantProd){
    var nombre =prompt("Ingresar Nombre");
    resultadoNombr=alert("Hola "+nombre+" ingresa la cantidad de productos a sumar.");    
    let total=0;
    cantProd=prompt("Ingresar cantidad de productos");
    let x=1
    cantProd=parseInt(cantProd);
    while(x<=cantProd){

        precio=prompt("ingresar precio producto numero:"+x);
        iva=prompt("Ingregar % de iva producto numer"+x)
        iva=parseInt(iva);
        precio=parseInt(precio);
        precio=precio+(precio*(iva/100));
        alert("el precio con iva es: "+precio);
        //total+=precio;
        x=x+1;
        
        valor.push(precio);
        
    }
    for(i=0;i<valor.length;i++){
    
        alert("El total por los productos ingresados con iva  es "+valor[i]+ "para el producto N° "+[i]);      
        
    }
    
}   

calcularPrecio();
