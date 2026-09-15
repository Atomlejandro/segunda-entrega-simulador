//SIMULADOR DE COMPRAS

let operacion = prompt("Ingresa la acción que deseas realizar: \n 1. Calcular descuento de la compra \n 2. Registrar compras acumuladas \n 3. Simulación de pago" );
const precioUnitario = 50;
const productosComprados= ["Mouse", "Teclado", "Televisor", "Cargador", "Monitor"];
switch (operacion) {
    case "1": {
        let cantidadComprada = Number(prompt("Ingresa la cantidad comprada:"));
     let preciosinDescuento = cantidadComprada * precioUnitario;
      let precioFinal =  calculadoraPrecios(cantidadComprada,preciosinDescuento,precioUnitario);
      alert("El precio final es: " + precioFinal);

      break;
    }

    case "2": {

        let totalAcumulado=0;
        let respuesta;
        let producto; 
        let cantidadIngresada;  
     let resumenCompras = registroCompras(totalAcumulado,respuesta,producto,cantidadIngresada, precioUnitario);
     console.log(resumenCompras);
        break;
    }
   case "3":{

    const validarAcceso = (codigoIngresado, codigoCorrecto) =>codigoIngresado === codigoCorrecto;
    const tarjetaAcceso = 1234;
    let ingresoAcceso;
   
    
    do{
    ingresoAcceso = Number(prompt("Ingresa el codigo de acceso para realizar la compra:"));
if (validarAcceso(ingresoAcceso,tarjetaAcceso)){
    alert("Código correcto! Gracias por realizar tu compra."); 
}else alert("Contraseña incorrecta, intentalo nuevamente.");
    } while(!validarAcceso(ingresoAcceso, tarjetaAcceso));

break;
}

    default:
        console.log("Opción no válida");
        break;
}

function calculadoraPrecios(cantidadComprada, preciosinDescuento, precioUnitario) {
        let descuentoPorcentaje;

    if (cantidadComprada >= 100) {
            descuentoPorcentaje = 0.20;
        } else if (cantidadComprada >= 50) {
            descuentoPorcentaje = 0.15;
        } else if (cantidadComprada >= 20) {
            descuentoPorcentaje = 0.10;
        } else {
            descuentoPorcentaje = 0;
        }
      
        precioFinal = preciosinDescuento - (cantidadComprada * precioUnitario * descuentoPorcentaje);
        return precioFinal;
    
}

function registroCompras(totalAcumulado, respuesta, producto, cantidadIngresada, precioUnitario){
  do {
           producto = prompt("Ingresa el nombre del producto a agregar:");
           cantidadIngresada =  Number(prompt("Ingresa la cantidad que vas a comprar de " + producto + ":"));
            
        
            if (cantidadIngresada > 0) {
                totalAcumulado += cantidadIngresada;
                console.log("Se agregaron " + cantidadIngresada + " unidades de " + producto + ". Total acumulado: " + totalAcumulado);
              
                respuesta = prompt("Es un producto indispensable? (si/no), de tu respuesta dependera la ubicacíon.");
                if(productosComprados.includes(producto)=== true){
                    console.log(productosComprados.indexOf(producto))
                }else{
                     if(respuesta==="si"){
                    productosComprados.unshift(producto);
                }else {  productosComprados.push(producto);}
                }
             
                
            } else {
               console.log("Cantidad inválida, no se agregó al total.");
            }

            respuesta = prompt("¿Deseas agregar otro producto? (si/no):");
            respuesta = respuesta.toLowerCase();
        } while (respuesta === "si");
        let indiceCorregir = Number(prompt("¿Quieres el nombre de algun producto? Ingresa su posición (0 a " + (productosComprados.length - 1)+ "), o -1 para omitir:"));
        if(indiceCorregir >= 0 && indiceCorregir < productosComprados.length){
            let nuevoNombre = prompt("Ingresa el nuevo nombre para la posición " + indiceCorregir + ":");
            productosComprados.splice(indiceCorregir, 1,nuevoNombre);
            console.log("Se actualizo la posición " + indiceCorregir + " a: " + nuevoNombre);
        }
        mostrarProductos(productosComprados);
        let totalAPagar = totalAcumulado * precioUnitario;
        return("Compra finalizada. Unidades totales: " + totalAcumulado + ". Total a pagar: " + totalAPagar);

}

function mostrarProductos(productosComprados){
    for (const producto of productosComprados ){
        console.log("Producto: "+ producto)
    }
}