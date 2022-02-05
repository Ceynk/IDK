//Codgio del Cuadrado
console.group("Cuadrado");
const ladoCuadrado = prompt("Lados");
console.log(`Los Lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`Los Lados del cuadrado miden: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`Los Area del cuadrado miden: ${areaCuadrado} cm^2`);
console.groupEnd();

//Codigo del Triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
  `los lados del triangulo miden: 
${ladoTriangulo1}cm ${ladoTriangulo2}cm ${baseTriangulo}cm `
  );
const alturaTriangulo = 5.5;
    console.log(`La altura del triangulo es: ${alturaTriangulo}cm`)
const perimetroTriangulo =  ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    console.log(`El perimetro del triangulo es: ${perimetroTriangulo}cm`)
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    console.log(`El area del triangulo es: ${areaTriangulo}cm^2`)
console.groupEnd();

//Codigo del Circulo 
console.group("Circulo"); 
//Radio
const radio = 4;
  console.log(`el radio del circulo es: ${radio}`)
//Diametro
const diametroCirculo = radio * 2; 
  console.log(`El diametro del circulo es: ${diametroCirculo}`)
//PI
const PI = Math.PI;
//Circuferencia
const perimetroCirculo = diametroCirculo * PI;
  console.log(`El perimetroCirculo es: ${perimetroCirculo}`)
//Area
const areaCirculo = (radio * radio) * PI;
  console.log(`El areaCirculo es: ${areaCirculo}`)
console.groupEnd();
