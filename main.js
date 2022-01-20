

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
    let cliente = document.createElement("h3")
    cliente.innerHTML="Cliente:"+resultadoNombr;
    document.getElementById("client").appendChild(cliente);

    
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
    

    let totalart=0;
    for(pr of valor){

        
         totalart+=pr.precioTot;
         console.log(pr.precioTot);
        
    }
    let total = document.createElement("h4")
        total.innerHTML="Total: "+totalart;
    document.getElementById("totRt").appendChild(total);
}   

calcularPrecio();
