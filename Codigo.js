//Codgio del Cuadrado
console.group("Cuadrado");
const ladoCuadrado = prompt("Lados");
console.log(`Los Lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`Los Lados del cuadrado miden: ${perimetroCuadrado}cm`);
alert(perimetroCuadrado);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`Los Area del cuadrado miden: ${areaCuadrado} cm^2`);
alert(areaCuadrado);
console.groupEnd

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
    console.log(`La altura del triangulo es:${alturaTriangulo}`)
const perimetroTriangulo =  ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    console.log(`El perimetro del triangulo es:${perimetroTriangulo}`)
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    console.log(`El area del triangulo es:${areaTriangulo}`)
console.groupEnd