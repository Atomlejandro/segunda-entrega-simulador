//SIMULADOR DE COMPRAS

let operacion = prompt("Ingresa la acción que deseas realizar: \n 1. Calcular descuento de la compra \n 2. Registrar compras acumuladas \n 3. Simulación de pago" );
const precioUnitario = 50;

switch (operacion) {
    case "1": {
        let cantidadComprada = Number(prompt("Ingresa la cantidad comprada:"));
        let preciosinDescuento = cantidadComprada * precioUnitario;
        let descuentoPorcentaje = 0;
        let preciofinal;

        if (cantidadComprada >= 100) {
            descuentoPorcentaje = 0.20;
            preciofinal = preciosinDescuento - (cantidadComprada * precioUnitario * descuentoPorcentaje);
            console.log("El precio final con el descuento es: ", preciofinal);
        } else if (cantidadComprada >= 50) {
            descuentoPorcentaje = 0.15;
            preciofinal = preciosinDescuento - (cantidadComprada * precioUnitario * descuentoPorcentaje);
            console.log("El precio final con el descuento es: ", preciofinal);
        } else if (cantidadComprada >= 20) {
            descuentoPorcentaje = 0.10;
            preciofinal = preciosinDescuento - (cantidadComprada * precioUnitario * descuentoPorcentaje);
            console.log("El precio final con el descuento es: ", preciofinal);
        } else {
            preciofinal = preciosinDescuento;
            console.log("El precio final sin descuento es: ", preciofinal);
        }
        break;
    }

    case "2": {
        let totalAcumulado = 0;
        let respuesta;

        do {
            let producto = prompt("Ingresa el nombre del producto a agregar:");
            let cantidadIngresada = Number(prompt("Ingresa la cantidad que vas a comprar de " + producto + ":"));

        
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
        console.log("Compra finalizada. Unidades totales: " + totalAcumulado + ". Total a pagar: " + totalAPagar);
        break;
    }
   case "3":{
    const tarjetaAcceso = 1234;
    let ingresoAcceso;
   
    
    do{
    ingresoAcceso = Number(prompt("Ingresa el codigo de acceso para realizar la compra:"));
if (ingresoAcceso === tarjetaAcceso){
    console.log ("Codigo correcto!, gracias por realizar tu compra.");
}else console.log("Contraseña incorrecta, intentalo nuevamente.");
    } while(ingresoAcceso !== tarjetaAcceso);

break;
}

    default:
        console.log("Opción no válida");
        break;
}