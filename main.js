/*$(document).ready(function() {
    console.log("El DOM esta listo (jQuery)");
    let mensaje = "Curso de <strong>Javascript</strong>";
    $("#resultado").html(mensaje);
 }); 
*/

 
console.dir(document);
console.dir(document.head);
console.dir(document.body);


const valor =[];
class producto {
    constructor(nomProd, precio, iva, precioTot,cantiProd) {

        this.nomProd = nomProd;
        this.precio = precio;
        this.iva = iva;        
        this.cantiProd=cantiProd;
        this.precioTot = precioTot;
    }
}
let totalart=0;
let contadorProd;
/*function calcularPrecio(resultadoNombr,precio,iva,cantProd){
    
    
   
    resultadoNombr=document.getElementById("nombre");
    precio=document.getElementById("precio");
    cantProd=document.getElementById("cantidad");
    iva=document.getElementById("iva");
    

        let product= new producto(resultadoNombr.value,precio.value,iva.value,cantProd.value);
        
        
        iva=parseInt(product.iva);
        precio=parseInt(product.precio);        
        precio=precio+(precio*(iva/100));
        let cant=parseInt(cantProd.value)
        alert("El producto "+product.nomProd+" tiene un precio con iva de: "+precio+" y sin iva de: "+product.precio);
        let totPr=parseInt(precio)*(cant);
        product.precioTot=totPr;       
        localStorage.setItem("productos",cantProd);
        valor.push(product);
        localStorage.setItem("prodCompleto",JSON.stringify(product));       
    
}*/



$('body').append('<button id:"bntAgregar">Agregar</button>');

$('#bntAgregar').on('click',function name(resultadoNombr,precio,iva,cantProd){
    
    
   
    resultadoNombr=document.getElementById("nombre");
    precio=document.getElementById("precio");
    cantProd=document.getElementById("cantidad");
    iva=document.getElementById("iva");
    

        let product= new producto(resultadoNombr.value,precio.value,iva.value,cantProd.value);
        
        
        iva=parseInt(product.iva);
        precio=parseInt(product.precio);        
        precio=precio+(precio*(iva/100));
        let cant=parseInt(cantProd.value)
        alert("El producto "+product.nomProd+" tiene un precio con iva de: "+precio+" y sin iva de: "+product.precio);
        let totPr=parseInt(precio)*(cant);
        product.precioTot=totPr;       
        localStorage.setItem("productos",cantProd);
        valor.push(product);
        localStorage.setItem("prodCompleto",JSON.stringify(product));       
    
});

function totalProductos(){    
   
    for(prod of valor){
        
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<h3> Producto: ${prod.nomProd}</h3>
                            <p> Precio: $ ${prod.precio} Iva: % ${prod.iva}</p>
                            <b>Precio c/ iva: $ ${prod.precioTot}</b>
                            <hr>`;    
        document.getElementById("resultado").appendChild(contenedor);
        console.log("Nombre producto: " +prod.nomProd+ " con iva: " + prod.iva + "% .Precio unitario: $" +prod.precio+ " precio total: $" + prod.precioTot);
        
    }

    const menoraCien=valor.filter(pre=>pre.precioTot < 100);
    console.log(menoraCien);
    for(pr of valor){        
         totalart+=pr.precioTot;
         console.log(pr.precioTot);               
    }
    let total = document.createElement("h4")
        total.innerHTML="Total: "+parseFloat(totalart);
    document.getElementById("totRt").appendChild(total); 
}


$('body').append('<button id="btnBorrar">Borrar</button>');
$('btnBorrar').on('click',function () {
    console.log("porque no muestra otra cosa");
    
});


console.log(localStorage.getItem("prodCompleto"));



//calcularPrecio();
