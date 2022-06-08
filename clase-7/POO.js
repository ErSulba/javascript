/**
 * la programacion orientada a objetos en Javascript a diferencia de otros lenguajes se da por prototipos
 *
 */

function estudiante(nombre, edad) {
  this.nombre = nombre
  this.edad = edad
  this.cursosAprobados = []
  // this.aprobarCurso = function (curso) {
  //   this.cursosAprobados.push(curso)
  // }
}

estudiante.prototype.aprobarCurso = function (curso) {
  this.cursosAprobados.push(curso)
}

var sutanita = new estudiante("sutanita", 20)

sutanita.aprobarCurso("Curso de POO")

// Syntaxis de prototypes en ES5

class estudiante2 {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad
    this.cursosAprobados = []
  }
  aprobarCurso(curso) {
    this.cursosAprobados.push(curso)
  }
}

var menengano = new estudiante2("menengano", 25)

menengano.aprobarCurso("curso de POO");