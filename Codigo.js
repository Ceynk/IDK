function nuevaFuncion(name, age, country) {
  var name = name || "Alejandro";
  var age = age || 16;
  var country = country || "Colombia";
  console.log(name, age, country);
}
//es6
function nuevaFuncion2(name = "Alejandro", age = 16, country = "Colombia") {
  console.log(name, age, country);
}

nuevaFuncion2();
nuevaFuncion2("Luis", "15", "Panama"); 

let hello = "Hola"; 
let World = "Mundo"; 
let FraseEpica = hello + " " + World + ":D"; 
let FraseEpica2 = `${hello} ${World}`;
console.log(FraseEpica2)