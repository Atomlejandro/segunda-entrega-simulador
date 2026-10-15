//Simulador de compras con clases, arrays y funciones
class Producto {
    constructor(nombre, precio, stock, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.id = id;
        this.ultimoResultado = "Sin compras todavía";
    }

    // Modifica el estado: resta stock si la compra es válida.
    // Devuelve true si la compra se aceptó y false si se rechazó.
    comprarProducto(cantidad) {
        if (!Number.isInteger(cantidad) || cantidad <= 0) {
            this.ultimoResultado = "Compra rechazada: la cantidad debe ser un número entero mayor a 0";
            return false;
        }
        if (cantidad > this.stock) {
            this.ultimoResultado = "Compra rechazada: no hay stock suficiente";
            return false;
        }
        this.stock = this.stock - cantidad;
        this.ultimoResultado = "Compra aceptada";
        return true;
    }

    // Solo informa: lee lo que quedó guardado en el objeto.
    mostrarCompra() {
        return this.ultimoResultado + ". Quedan " + this.stock + " artículos de " + this.nombre + " en el inventario.";
    }
}


// 2. DATOS (instancias con new)

const productos = [
    new Producto("Mouse", 100, 10, "001"),
    new Producto("Televisor", 500, 8, "002"),
    new Producto("Teclado", 150, 16, "003")
];

// 3. FUNCIONES

function buscarProducto(nombreBuscado) {
    if (nombreBuscado === null) {
        return undefined; // el usuario pulsó Cancelar
    }
    const nombreNormalizado = nombreBuscado.trim().toLowerCase();
    return productos.find(producto => producto.nombre.toLowerCase() === nombreNormalizado);
}

function calculadoraPrecios(cantidadComprada, precioSinDescuento, precioUnitario) {
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

    const precioFinal = precioSinDescuento - (cantidadComprada * precioUnitario * descuentoPorcentaje);
    return precioFinal;
}

function mostrarProductos(productosComprados) {
    for (const registro of productosComprados) {
        console.log("Producto: " + registro.nombre + " | Cantidad: " + registro.cantidad + " | Subtotal: " + registro.subtotal);
    }
}

// Opción 1: calcular el descuento de una compra con el precio del producto elegido
function calcularDescuentoCompra() {
    const nombre = prompt("Di el nombre del producto a comprar:");
    const producto = buscarProducto(nombre);

    if (producto === undefined) {
        alert("El producto no existe en el inventario, intenta nuevamente.");
        return;
    }

    const cantidadComprada = Number(prompt("Ingresa la cantidad comprada:"));
    if (!Number.isInteger(cantidadComprada) || cantidadComprada <= 0) {
        alert("Cantidad inválida.");
        return;
    }

    const precioSinDescuento = cantidadComprada * producto.precio;
    const precioFinal = calculadoraPrecios(cantidadComprada, precioSinDescuento, producto.precio);
    alert("El precio final es: " + precioFinal);
}

// Opción 2: registrar varias compras, descontando del stock de cada producto
function registroCompras() {
    const productosComprados = [];
    let totalUnidades = 0;
    let totalAPagar = 0;
    let respuesta;

    do {
        const nombre = prompt("Ingresa el nombre del producto a agregar:");
        const producto = buscarProducto(nombre);

        if (producto === undefined) {
            console.log("El producto no existe en el inventario.");
        } else {
            const cantidad = Number(prompt("Ingresa la cantidad que vas a comprar de " + producto.nombre + ":"));

            if (producto.comprarProducto(cantidad)) {
                const precioSinDescuento = cantidad * producto.precio;
                const subtotal = calculadoraPrecios(cantidad, precioSinDescuento, producto.precio);

                totalUnidades += cantidad;
                totalAPagar += subtotal;
                productosComprados.push({ nombre: producto.nombre, cantidad: cantidad, subtotal: subtotal });
            }
            // Muestra el resultado de la compra (aceptada o rechazada) y el stock actual
            console.log(producto.mostrarCompra());
        }

        const entrada = prompt("¿Deseas agregar otro producto? (si/no):");
        respuesta = entrada === null ? "no" : entrada.trim().toLowerCase();
    } while (respuesta === "si");

    if (productosComprados.length > 0) {
        const entradaIndice = prompt("¿Quieres corregir el nombre de algún registro? Ingresa su posición (0 a " + (productosComprados.length - 1) + "), o -1 para omitir:");
        const indiceCorregir = entradaIndice === null ? -1 : Number(entradaIndice);

        if (Number.isInteger(indiceCorregir) && indiceCorregir >= 0 && indiceCorregir < productosComprados.length) {
            const nuevoNombre = prompt("Ingresa el nuevo nombre para la posición " + indiceCorregir + ":");
            if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
                productosComprados[indiceCorregir].nombre = nuevoNombre.trim();
                console.log("Se actualizó la posición " + indiceCorregir + " a: " + nuevoNombre.trim());
            }
        }
    }

    mostrarProductos(productosComprados);
    return "Compra finalizada. Unidades totales: " + totalUnidades + ". Total a pagar: " + totalAPagar;
}

// Opción 3: simulación de pago con código de acceso
function simularPago() {
    const validarAcceso = (codigoIngresado, codigoCorrecto) => codigoIngresado === codigoCorrecto;
    const tarjetaAcceso = 1234;
    let ingresoAcceso;

    do {
        const entrada = prompt("Ingresa el código de acceso para realizar la compra:");
        if (entrada === null) {
            console.log("Pago cancelado.");
            return;
        }
        ingresoAcceso = Number(entrada);

        if (validarAcceso(ingresoAcceso, tarjetaAcceso)) {
            alert("¡Código correcto! Gracias por realizar tu compra.");
        } else {
            alert("Código incorrecto, inténtalo nuevamente.");
        }
    } while (!validarAcceso(ingresoAcceso, tarjetaAcceso));
}

// Verificación de la clase con console.log.
// Usa una copia del primer producto para no alterar el inventario real.
function verificarClase() {
    const base = productos[0];
    const copia = new Producto(base.nombre, base.precio, base.stock, base.id);

    console.log("--- Verificación de la clase Producto ---");
    console.log("Instancias creadas:", productos);
    console.log("Estado inicial:", copia.mostrarCompra());
    console.log("Compra de 3 unidades:", copia.comprarProducto(3), "->", copia.mostrarCompra());
    console.log("Compra de 100 unidades:", copia.comprarProducto(100), "->", copia.mostrarCompra());
    console.log("Compra de -5 unidades:", copia.comprarProducto(-5), "->", copia.mostrarCompra());
    console.log("Stock final de la copia:", copia.stock, "| Stock real en el inventario:", base.stock);
}


function iniciarSimulador() {
    const operacion = prompt("Ingresa la acción que deseas realizar: \n 1. Calcular descuento de la compra \n 2. Registrar compras acumuladas \n 3. Simulación de pago");

    switch (operacion) {
        case "1":
            calcularDescuentoCompra();
            break;
        case "2":
            console.log(registroCompras());
            break;
        case "3":
            simularPago();
            break;
        default:
            console.log("Opción no válida");
            break;
    }
}

verificarClase();
iniciarSimulador();