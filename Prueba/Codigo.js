console.group("Cuadrado");
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

//Codigo del Triangulo
console.group("Triangulo");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

//Codigo del Circulo 
console.group("Circulo");
//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;

//Circuferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd();

//Utilizamos HTML 
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}
//Triangulo
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("lado1");
    const value = Number(lado1.value);

    const lado2 = document.getElementById("lado2");
    const value2 = Number(lado2.value);

    const base = document.getElementById("base");
    const value3 = Number(base.value);


    const perimetro = perimetroTriangulo(value, value2, value3);
    alert("El Perimetro del triangulo es " + perimetro);
}

function calcularAreaTriangulo() {
    const lado1 = document.getElementById("lado1");
    const value = Number(lado1.value);

    const lado2 = document.getElementById("lado2");
    const value2 = Number(lado2.value);

    const base = document.getElementById("base");
    const value3 = Number(base.value);

    const altura = document.getElementById("altura");
    const value4 = Number(altura.value);

    const area = areaTriangulo(value3, value4);
    alert("El area del triangulo es " + area);
}
