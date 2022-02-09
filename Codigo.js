//Codgio del Cuadrado
console.group("Cuadrado");
//const ladoCuadrado = prompt("Lados");
//console.log(`Los Lados del cuadrado miden: ${ladoCuadrado}cm`);

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