var estudiantes = ["Dani", "Ale", "Cristian", "Mina", "James"]

for (var i = 0; i < estudiantes.length; i++) {
  // console.log(estudiantes[i])
  console.log("El indice es " + i);
}

/**
 * 0
 * 1
 * 2
 * 3
 * 4
 */
var estudiantes = ["Dani", "Ale", "Cristian", "Mina", "James"]
for (var alumno of estudiantes) {
  console.log(alumno)
}

var estudiantes = ["Dani", "Ale", "Cristian", "Mina", "James"]
while (estudiantes.length > 1) {
  console.log(estudiantes);
  console.log(estudiantes.pop())
  console.log("quedaron " + estudiantes.length + " alumnos")
}
console.log("ya se termino el ciclo");

