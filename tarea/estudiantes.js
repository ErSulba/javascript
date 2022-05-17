/**
 * 5 alumnos
 * se ingresan uno a uno
 */

var estudiantes = []

while (estudiantes.length < 5) {
  // pedimos al usuario el nombre del alumno y lo almacenamos en una variable
  var input = prompt("ingresa el nombre del alumno")
  //metemos el alumnno al final del array
  estudiantes.push(input)
  console.log("el alumno ingresado fue " + input + " hay ahora " + estudiantes.length + " alumnos")
}

console.log("en el salon hay " + estudiantes.length + " alumnos");

while (estudiantes.length > 0) {
  var expulsadoPorMarihuano = estudiantes.pop()
  console.log("el alumno expulsado fue " + expulsadoPorMarihuano + " quedan " + estudiantes.length + " alumnos");
}

