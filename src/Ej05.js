let miUrl    = null;
let miObjeto = {
    host: null,
    pathname: null,
    parametros: null
};

miUrl    = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl(miUrl, miObjeto);
console.log(miObjeto);

function parsearUrl(laURL, miObjeto) {
    try {
        let urlParseada = new URL(laURL);
        miObjeto.host = urlParseada.origin;
        miObjeto.pathname = urlParseada.pathname;
        miObjeto.parametros = new URLSearchParams(urlParseada.search);
    } catch (error) {
        console.log("Error: " + error);
    }

    return miObjeto;
}
export {miObjeto}