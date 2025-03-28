let textoEntrada01 = "Escuela", textoEntrada02 = "ORT";
let textoSalida = "";

textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear();
console.log(`Texto entrada: "${textoEntrada01}"  y "${textoEntrada02}"`);
console.log(`Texto de salida: "${textoSalida}"`);

function concatInvert(texto1, texto2)
{
    let palabraJunta = texto1 + texto2; 
    let returnValue = '';
    for(let i=palabraJunta.length-1;i >= 0;i--)
    {
        returnValue+=palabraJunta[i];
    }
    console.log(returnValue);
    return returnValue
}