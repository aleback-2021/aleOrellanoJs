//var valor= new Array();

const valor =[];
class producto {
    constructor(nomProd, precio, iva, precioTot) {

        this.nomProd = nomProd;
        this.precio = precio;
        this.iva = iva;
        this.precioTot = precioTot;

    }
}
function calcularPrecio(resultadoNombr,precio,iva,cantProd){
    
    let total=0;
   
    let x=1
    cantProd=parseInt(cantProd);
    resultadoNombr=prompt("Ingresar nombre");
    cantProd=prompt("Ingresar cantidad de productos");
    alert("Hola "+resultadoNombr+" vas a ingresar "+cantProd+" productos");
    while(x<=cantProd){

        let product= new producto(prompt("Ingresar nombre del producto"+x),prompt("ingresar precio producto numero:"+x),prompt("Ingregar % de iva producto numer"+x),0)
        
        
        iva=parseInt(product.iva);
        precio=parseInt(product.precio);
        
        precio=precio+(precio*(iva/100));
        alert("El producto "+product.nomProd+" tiene un precio con iva de: "+precio+" y sin iva de: "+product.precio);
        product.precioTot=precio;
        x=x+1;
        
        valor.push(product);
        
    }
    for(prod of valor){
    
        console.log("Nombre producto: " +prod.nomProd+ " con iva: " + prod.iva + "% .Precio unitario: $" +prod.precio+ " precio total: $" + prod.precioTot);      
        
    }
    
}   

calcularPrecio();
