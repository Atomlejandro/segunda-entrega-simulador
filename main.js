//SIMULADOR DE COMPRAS

let operacion = prompt("Ingresa la acción que deseas realizar: \n 1. Calcular descuento de la compra \n 2. Registrar compras acumuladas \n 3. Simulación de pago" );
const precioUnitario = 50;

switch (operacion) {
    case "1": {
        let cantidadComprada = Number(prompt("Ingresa la cantidad comprada:"));
     let preciosinDescuento = cantidadComprada * precioUnitario;
      let precioFinal =  calculadoraPrecios(cantidadComprada,preciosinDescuento);
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
            } else {
               console.log("Cantidad inválida, no se agregó al total.");
            }

            respuesta = prompt("¿Deseas agregar otro producto? (si/no):");
            respuesta = respuesta.toLowerCase();
        } while (respuesta === "si");

        let totalAPagar = totalAcumulado * precioUnitario;
        return("Compra finalizada. Unidades totales: " + totalAcumulado + ". Total a pagar: " + totalAPagar);
}