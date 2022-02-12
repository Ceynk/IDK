function calculaPorcentaje(precio, descuento = 40) {
  const calcular = precio*(descuento/100);
  alert(`Total a pagar ${calcular}$`);
} 

function calcularPorcentaje() {
  const input = document.getElementById("precio1");
  const value = input.value;

  const result = calculaPorcentaje(value);
}
