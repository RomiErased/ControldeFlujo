let valorDolar = 791.64;
let valorEuro = 868.12;
let valorUf = 35721.12;

//let montoCLP = prompt("Ingrese un monto en peso chileno");
let opcion = prompt(`
    Ingrese el indicador de destino del cálculo
    1: UF
    2: Dolar Americano
    3: Euro
    `)

do {
    let montoCLP = prompt("Ingrese un monto en peso chileno");
    if (montoCLP === "") {
        alert("El monto no puede er vacío")
    } else if (isNaN(montoCLP)) {
        alert("El monto debe ser numérico")
    } else if (Number(montoCLP) <= 0) {
        alert("El monto debe ser mayor a 0")
    }
} while (montoCLP === "" || isNaN(montoCLP) || Number(montoCLP) <= 0);

//console.log("Monto", montoCLP)
//console.log("Opción", opcion)

// function calcular(montoCLP, opcion) {
//     if (Number(opcion) == 1) {
//         return montoCLP / valorUf
//     }
//     if (Number(opcion) == 2) {
//         return montoCLP / valorDolar
//     }
//     if (Number(opcion) == 3) {
//         return montoCLP / valorEuro
//     }
//     //Si no ingresa ninguna opción correcta
//     return "Opción inválida"
// }

let respuesta = calcular2(montoCLP, opcion)
alert(respuesta.toFixed(2));

function calcular2(montoCLP, opcion) {
    let resultado;
    if (Number(opcion) === 1) {
        resultado = montoCLP / valorUf
    } else if (Number(opcion) === 2) {
        resultado = montoCLP / valorDolar
    } else if (Number(opcion) === 3) {
        resultado = montoCLP / valorEuro
    } else {
        resultado = "Opción Inválida"
    }
    return resultado
}