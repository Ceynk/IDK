//Como recorrer un array con For
/*function calcularMedia(lista) {
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
} */
function calcularMedia(lista) {
    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
} 