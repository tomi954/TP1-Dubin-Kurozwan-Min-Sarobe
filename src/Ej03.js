import Alumno  from './models/Alumno.js'

let alumno1 = new Alumno("Esteban Dido", "22985434", 20)
let alumno2 = new Alumno("Matias Queroso", "54323233", 21)
let alumno3 = new Alumno();

alumno3.username = "Elba Calao";
alumno3.dni = "48327423";

console.clear;
console.log(alumno1)
console.log(alumno2)
console.log(alumno3.ToString())