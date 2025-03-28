import { pi, sumar, restar, multiplicar, dividir } from './modules/matematica.js';

let total, numero1=40,numero2=20;
console.clear();
console.log("La constante pi vale: " + pi);
total=sumar(numero1,numero2);
console.log("sumar " + numero1 + " y " + numero2 + " da de resultado " + total);
total=restar(numero1,numero2);
console.log("restar " + numero1 + " y " + numero2 + " da de resultado " + total);
console.log("multiplicar " + numero1 + " y " + numero2 + " da de resultado " + multiplicar(numero1,numero2));
console.log("dividir " + numero1 + " y " + numero2 + " da de resultado " + dividir(numero1,numero2));
