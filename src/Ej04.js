import { rename } from 'node:fs'

const ARCHIVO_ENTRADA           = "src/archivo-entrada.txt";

const ARCHIVO_SALIDA            = "src/archivo-salida.txt";

console.clear();

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino){

    rename(origen, destino, (err) => {
      if (err) throw err;
      console.log('Rename complete!');
    }); 
}