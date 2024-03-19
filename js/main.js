let valorEmpanadas = 200;
let valorPizzas = 2500;
let sumaEmpanadas;
let sumaPizzas;
let sumaTotalPedido;
let sumaTotal;
let retirar;
let valorPedido;
let cuerpoTotalPedido;
let cuerpovalorpedido;
let zona;
let volver;

function ingresoPedido () {
    sumaEmpanadas = pedido1 * valorEmpanadas;
    sumaPizzas = pedido2 * valorPizzas;
    sumaTotalPedido = sumaEmpanadas + sumaPizzas;
    if (sumaTotalPedido > 15000) {
        sumaTotalPedido = sumaTotalPedido - (sumaTotalPedido/10)
    }
    return sumaTotalPedido
}

function ingresoEnvio () {
    if (zona == 1) {
        valorPedido = 50
    } else if ( zona == 2) {
        valorPedido = 150
    } else if (zona == 3) {
        valorPedido = 250
    } 
return valorPedido
}


alert ("Bienvenido a Romano Pizzas. Recuerde que si su pedido supera los 15.000 tendrá un descuento del 10%!!")

let pedido1 = Number(prompt("Ingrese su cantidad de empanadas"));
let pedido2 = Number(prompt("Ingrese su cantidad de pizzas"));

do {
    zona = Number(prompt("Ingrese la zona: 1. centro - 2. norte/este - 3. sur/oeste"))
    volver = false;

    if(zona >= 4) {
        alert("Zona no valida");
        volver = true;
    } else {
        volver = false;
    }
} while(volver)
sumaTotal = ingresoPedido();
cuerpovalorpedido = ingresoEnvio();
totalDelPedido = sumaTotal + cuerpovalorpedido
alert ("Su total es de: " + totalDelPedido + ". Gracias por su compra.")