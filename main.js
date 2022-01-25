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
function calcularPrecio(resultadoNombr,precio,iva,cantProd){
    
    
   
    resultadoNombr=document.getElementById("nombre");
    precio=document.getElementById("precio");
    cantProd=document.getElementById("cantidad");
    iva=document.getElementById("iva");
    /*cantProd=parseInt(cantProd);
    resultadoNombr=prompt("Ingresar nombre");
    cantProd=prompt("Ingresar cantidad de productos");
    alert("Hola "+resultadoNombr+" vas a ingresar "+cantProd+" productos");*/
    

        let product= new producto(resultadoNombr.value,precio.value,iva.value,cantProd.value);
        
        
        iva=parseInt(product.iva);
        precio=parseInt(product.precio);        
        precio=precio+(precio*(iva/100));
    
        alert("El producto "+product.nomProd+" tiene un precio con iva de: "+precio+" y sin iva de: "+product.precio);
        let totPr=parseInt(precio*can);
        product.precioTot=totPr;       
        
        valor.push(product);
        
    
    let cliente = document.createElement("h3")
   // cliente.innerHTML="Cliente:"+resultadoNombr;
   // document.getElementById("client").appendChild(cliente);

}
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
  
/*function totalProd(){

}*/

}
let agregarProd=document.getElementById("btnPrincipal");
agregarProd.addEventListener("click", calcularPrecio);
let calcularTotal=document.getElementById("btnTotal");
calcularTotal.addEventListener("click",totalProductos);
//calcularPrecio();
