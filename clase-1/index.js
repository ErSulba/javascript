
var string = "esto es un string o cadena de caracteres"
var numero = 23
var miVariableNoDeclarada = undefined
var miVariableNull = null
var miBooleano = true
var objeto = {
  nombre: 'alejandro',
  apellido: "sulbaran",
}
console.log(typeof string)
console.log(typeof numero)
console.log(typeof miVariableNoDeclarada)
console.log(typeof miVariableNull)
console.log(typeof miBooleano)
console.log(typeof objeto)
console.log(objeto.nombre)

var miArreglo = [1, "otro string", true, {}]

var string = "esto es un string o cadena de caracteres"

console.log(string.toUpperCase())
console.log(string.replaceAll("s", "z"))
var numero = 2.5

console.log(Math.floor(numero))
console.log(Math.ceil(numero))
console.log(Math.round(numero))

function mifuncion() {
  console.log("se ejecuto la funcion");
}
console.log(typeof mifuncion)

var texto = "se ejecuto la funcion declarada"
var texto2 = "soy otro texto"

const miFuncionDeclarada = function (textoAImprimir, textoAImprimir2) {
  console.log(textoAImprimir)
  console.log(textoAImprimir2)
}
miFuncionDeclarada(texto, texto2)
