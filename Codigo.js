function nuevaFuncion(name, age, country) {
  var name = name || "Alejandro";
  var age = age || 16;
  var country = country || "Colombia";
  console.log(name, age, country);
}
//es6 Forma mucho mas facil de realizar Funciones
function nuevaFuncion2(name = "Alejandro", age = 16, country = "Colombia") {
  console.log(name, age, country);
}

nuevaFuncion2();
nuevaFuncion2("Luis", "15", "Panama");
//
let hello = "Hola";
let World = "Mundo";
let FraseEpica = hello + " " + World + ":D";
//es6 Forma mas Epica y sencilla de hacer una concatenacion 
let FraseEpica2 = `${hello} ${World}`;
console.log(FraseEpica2);

let lorem =
  "La frase mas epica de toda la historia de Js\n" + "Frase menos epica Kekw";
//es 6 Forma mucho mas facil de saltar parrafos
let lorem2 = `Frase ultramente epica actualizada equis de
ahora es otra frase mas epica que la anterior`;
console.log(lorem2);
//
let persona = {
  nombre: "Alejandro",
  Age: 16,
  country: "Colombia",
};
//Es 6 Forma mas facil para llamar objetos
let {nombre, Age, country } = persona;
console.log(nombre, Age, country);
//
let team1 = ["Alejandro", "Diaz", "Granuja", "Metricas"];
let team2 = ["CMR", "Noise", "Pedro", "Julian"];

let education = ["Sanchez", ...team1, ...team2];
console.log(education);
//Var es una variable global(se puede reasignar una variable Var)
{
  var globalVar = "global var";
}
//let permite declarar variables limitando su alcance al bloque, declaración, o expresión
{
  let global = "Global let";
  console.log(global)
} 
console.log(globalVar); 
//Const Nunca permitira que una variable sea reasignada
const a = "b"; 
a = "a"; 

// Objetos
let name1 = "Alejandro";
let age = 16; 
//Forma de hacer objetos antes
obj = {name: name1, age: age};
//es6 Forma de hacer objetos ahora y mas facil
obj2 = {name1, age}; 
console.log(obj2)

//Arrow
const names = [
  { name: 'Alejandro', age: 16 },
  { name: 'Scarlett', age: 18 }
]

let listOfNames = names.map(function(item){
  console.log(item.name);
}) 
//Arrow Fuction 
let listOfNames2 = names.map(item => console.log(item.name));

/*const listOfNames3 = (names, age) => {
  ...age
}

const listOfNames4  = names =>{
  ...
}
*/ 
let numero1 = 45;
let numero2 = 45; 
const square = numero1 => numero1 + numero2;  
console.log(square(numero1))

//Promesas 
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true){
      resolve("Hey!")
    } else{
      reject("Ups perra!!")
    }
  });
}
helloPromise()
  .then(response => console.log(response))
  .then(() => console.log("Hola :D"))
  .catch(error => console.log(error));
//
class calculator {
  constructor(){
    this.ValueA = 0;
    this.ValueB = 0;
  }
  sum(ValueA, ValueB){
    this.ValueA = ValueA;
    this.ValueB = ValueB; 
    return this.ValueA + this.ValueB;
  }
} 
const calc = new calculator(); 
console.log(calc.sum(2, 4))