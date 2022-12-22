let nombreDeUsuario = prompt("Ingrese su nombre:");
let apellidoUsuario = prompt("Ingrese su apellido");
let emailUsuario = "";
let confirmeEmail = "";
let condicionWhile = true;
let blanco = " ";
do {
    emailUsuario = prompt("ingrese su email:");
    confirmeEmail = prompt("confirme su email:");

    if (emailUsuario === confirmeEmail) {
        alert("¡Su email ha sido guardado con éxito!");
        condicionWhile = false;
    } else {
        alert("Error: ambos correos deben ser iguales.");
    }
} while (condicionWhile);

alert("Bienvenido/a " + nombreDeUsuario + blanco + apellidoUsuario +". Presione aceptar para comenzar a calcular.")

function sumarValores(montoGas, montoAgua, montoLuz, montoAlquiler, montoExpensas, montoGastosVarios) {
    let resultado;
    return resultado = montoGas+montoAgua+ montoLuz+montoAlquiler+ montoExpensas+ montoGastosVarios;
}

let mes = prompt("ingrese el mes que desea calcular:");
let montoGas = Number(prompt("Ingrese el monto de gas:"));
let montoAgua = Number(prompt("Ingrese el monto de luz"));
let montoLuz = Number(prompt("Ingrese el monto de agua:"));
let montoAlquiler = Number(prompt("Ingrese el monto de alquiler:"));
let montoExpensas = Number(prompt("Ingrese el monto de expensas"));
let montoGastosVarios = Number(prompt("Ingrese el monto de gastos varios:"));

let totalMes = sumarValores(montoGas, montoAgua, montoLuz, montoAlquiler, montoExpensas, montoGastosVarios);

alert(""+nombreDeUsuario+" el total del mes de " + mes+" es de: "+ totalMes)

