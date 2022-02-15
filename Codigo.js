function calculaPorcentaje(precio) {
  const input1 = document.getElementById("Porcentaje1")
  const value1 = input1.value;

  const calcular = precio * (value1 - 100)/100;
  const resultP = document.getElementById("resultP"); 
  resultP.innerText = `El precio con descuentos son $${calcular}`
}

function calcularPorcentaje() {
  const input = document.getElementById("precio1");
  const value = input.value;

  const result = calculaPorcentaje(value);
}
