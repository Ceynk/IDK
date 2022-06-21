function calcularMedia(lista) {
    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista1 = [
    100,
    200,
    500,
    40000,
];
const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    
    const promedio1y2 = calcularMedia([
        elemento1,
        elemento2,
    ]);
    mediana = promedio1y2;
}
else {
    mediana = lista1[mitadLista1]
}
