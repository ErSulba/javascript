// javascript es un lenguaje dinamico, debilmente tipado
// el lenguaje ayuda con las operaciones y tranforman las variables al tipo de dato primitivo segun el tipo de operacion
var suma = 2 + "30" // el resultado es una concatenciacion de strings
var multiplicacion = 3 * "50" // el resultado es un numero
var sumadestrings = "2" + "8"
console.log(suma);
console.log(multiplicacion)
console.log(sumadestrings)

/*
Number * String = Number
Number + Number = Number
Number + String = String
String + Number = String
String + String = String
*/

var numeroEnString = "65"
var numeroEnNumber = Number(numeroEnString)
var otroNumero = 69
var elOtroNumeroEnString = String(otroNumero)