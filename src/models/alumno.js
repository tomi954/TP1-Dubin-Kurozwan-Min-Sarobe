export default class Alumno 
{
    
    constructor(pusername, pdni, pedad) 
    {
        this.username = pusername;
        this.dni = pdni;
        this.edad = pedad;
    }
ToString()
{
    return `Usuario: ${this.username} Dni: ${this.dni} Edad: ${this.edad}`;
}
}