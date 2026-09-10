// TODO: Crea una función llamada 'sumar' que reciba dos números y devuelva su suma
function sumar(a, b) {
  return a+b;
}

// TODO: Crea una función 'calcularDescuento' que reciba un precio y un porcentaje
// Debe retornar el precio final tras aplicar el descuento
function calcularDescuento(precio, porcentaje) {
  return precio-precio*porcentaje/100;
}

// TODO: Crea una función 'mostrarResultado' que reciba un texto y lo imprima en consola
// Esta función NO necesita retornar nada, solo mostrar información
function mostrarResultado(mensaje) {
   console.log(mensaje);
}

// --- Pruebas ---
// 1. Suma 150 y 250 y guarda el resultado en una constante
// 2. Calcula el descuento del 10% a esa suma
// 3. Muestra el mensaje final "El precio final es: [resultado]" usando mostrarResultado
const resultado = sumar(150,250);
let precioFinal = calcularDescuento(resultado,10);
mostrarResultado(`El precio final es: ${precioFinal}`)