function miPerfil(nombre = "Alejandro", apellido = "Diaz", edadMayor = 18) {
  return `${nombre} ${apellido} Edad:${edadMayor}`;
}

function miCorreo(correo = "diazluisalejandro25@gmail.com", nombrePlazi = "Ceynk") {
  return `Correo:${correo} Alias: ${nombrePlazi}`;
}

function miDineroTotal(dinero = 100000, deudas = 85000, total = dinero - deudas) {
  return `Dinero:${dinero} - Deudas:${deudas}  DineroTotal:${total}`;
} 
