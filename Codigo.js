function miPerfil({nombre = "Alejandro", apellido, edadMayor = 16}) {
  return `${nombre} ${apellido} Edad:${edadMayor}`;
}
console.log(miPerfil({apellido:"Diaz"}))


function miCorreo(correo = "diazluisalejandro25@gmail.com", nombrePlazi = "Ceynk") {
  return `Correo:${correo} Alias: ${nombrePlazi}`;
}

function miDineroTotal(dinero = 100000, deudas = 85000, total = dinero - deudas) {
  return `Dinero:${dinero} - Deudas:${deudas}  DineroTotal:${total}`;
} 

const tipoDeSuscripcion = "Expert";
  
  if(tipoDeSuscripcion == "Gratis"){
    console.log("Solo puedes tomar los cursos gratis")
  } 
  else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
  } 
  else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
  } 
  else if(tipoDeSuscripcion == "Expert Plus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
  } 
  else{
    console.log("Pobre no tiene plazi")
  } 
 
//

i = 14;
while (i >= 2) {
	console.log("El valor de i es: " + i);
	i--;
}
// 
a = prompt("Cuanto es 2 + 2 ")
 if(a == 4){
   alert("Estas en lo correcto");
 }
 else{
   alert("eres realmente estupido")
 } 
 //  
 let lista = ["Como","Andamos","Gente"];
  console.log(lista)
  // 
  const objetoPc = {
    placaBase: "B450m",
    tarjetaGrafica:"RTX 2060",
    procesador:"R5 3600"
  } 
  
  for (const property in objetoPc) {
      console.log(`${property}: ${objetoPc[property]}`);
    }
  // 
  
  function miArray(array ){
    console.log(array.length) 
    let i = array.length;
    while (i >= 1) {
      console.log(`El valor del array es ${array[i - 1]}`)
      i--;
     }
  }
  miArray(["Luis", "Alejandro", "Diaz"])  
  