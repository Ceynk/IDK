let nombre = "Alejandro";
let apellido = "Diaz";
let nombrePlazi = "Ceynk";
let correo = "diazluisalejandro25@gmail.com";
let edadMayor = 18;
let dinero = 100000;
let deudas = 85000;
let total = dinero - deudas;

function miPerfil(Perfil) {
  return `${nombre} ${apellido} Edad:${edadMayor}`;
}

function miCorreo(Correo) {
  return `Correo: ${correo} Alias: ${nombrePlazi}`;
}

function miDineroTotal(Dinero){
    return `Dinero:${dinero} - Deudas:${deudas}  DineroTotal:${total}`;
} 