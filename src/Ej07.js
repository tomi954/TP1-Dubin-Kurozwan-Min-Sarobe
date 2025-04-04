// Importar la biblioteca currency-map-country
const currencyMapCountry = require('currency-map-country');

// Función para obtener la moneda a partir del código del país
function obtenerMoneda(codigoPais) {
    // Usar el método que devuelve la moneda según el código del país
    const moneda = currencyMapCountry.getCurrency(codigoPais);

    // Si no existe la moneda, devolver null
    if (!moneda) {
        return null;
    }
    return moneda;
}

// Ejemplo de uso
let monedaDelPais, codigoPais;

codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);  // Debería imprimir: ARS

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);  // Debería imprimir: null
