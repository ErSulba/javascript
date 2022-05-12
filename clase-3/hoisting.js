// archivo -> interpretador (pasa de codigo humano a lenguaje de la computadora) -> lo acomoda (aplica hoisting) -> lo ejecuta

// cuando aplica hoisting
// las variables si no han sido declaradas las declara en la primera linea disponible y le asigna el valor de undefined
// las funciones las mueve a la primera linea que tenga disponible

saludo()

function saludo() {
  console.log("hola " + nombre)
}

var nombre = "alejandro";

var mifuncion = function () {
  console.log("hola " + apellido)
}
var apellido = "sulbaran"

mifuncion()

// declarar tus variables y funciones en las primeras lineas de codigo