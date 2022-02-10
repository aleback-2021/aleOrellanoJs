$(document).ready(function() {
    console.log("El DOM esta listo (jQuery)");
    let mensaje = "Curso de <strong>Javascript</strong>";
    $("#resultado").html(mensaje);
    
 }); 
 const URLJSON = "datos.json";
 $(document).ready(function() { 
    $.getJSON(URLJSON, function (respuesta, estado) {
        
        if (estado === "success"){
            let misDatos = respuesta;
            
            for (const dato of misDatos) {
                
                $("body").prepend(`<div>
                    
                    <h3>${dato.nomProd}</h3>
                    <p>$${dato.precio}</p>
                    <p>Iva: % ${dato.iva}</p>
                    </div>`);
            }
        }
    });
}); 
 
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
function calcularPrecio(resultadoNombr,precio,iva,cantProd){
    
    
   
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
           
    
}
function totalProductos(){    
   
    for(prod of valor){
        
        
        $("body").append( `<div id="resTotal">
                                    <h3> Producto: ${prod.nomProd}</h3>
                                    <p> Precio: $ ${prod.precio} Iva: % ${prod.iva}</p>
                                    <b>Precio c/ iva: $ ${prod.precioTot}</b>
                                    <hr>
                                </div> `);    
        
        console.log("Nombre producto: " +prod.nomProd+ " con iva: " + prod.iva + "% .Precio unitario: $" +prod.precio+ " precio total: $" + prod.precioTot);
        
    }

    const menoraCien=valor.filter(pre=>pre.precioTot < 100);
    console.log(menoraCien);
    for(pr of valor){        
         totalart+=pr.precioTot;
         console.log(pr.precioTot);               
    }
   
}
let total = document.createElement("h4")
total.innerHTML="Total: "+parseFloat(totalart);
document.getElementById("totRt").appendChild(total); 

$('body').append('<button id="btnBorrar">Borrar</button>');
$('#btnBorrar').on('click',function () {

    $("#resTotal").fadeOut("slow");
    console.log("");
    
});
$('body').append('<button id="btnAgregar">Agregar</button>');
$('#btnAgregar').on('click',function() {

   calcularPrecio();
   $("cantidad").val("");  
   $("iva").val(""); 
   $("precio").val("");  
    
});

$('body').append('<button id="btnTotal">Total</button>');
$('#btnTotal').on('click',function() {

  totalProductos();
  $("#resTotal").fadeIn("slow");  
});



console.log(localStorage.getItem("prodCompleto"));
