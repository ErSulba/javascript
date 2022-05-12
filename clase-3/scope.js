// el scope es el contexto en el que existen las variables
// existen el scope global  (osea todo) y el scope local
var nombre = "alejandro"

function saludo() {
  var apellido = "sulbaran"
  console.log("hola " + nombre + " " + apellido)
}

saludo()
console.log(apellido);