/**
 * todos estos metodos a diferencia de pop, push, shift y unshift, no modifican el arreglo original
 * solo devuelven una copia o lo que retorne la funcion segun operen
 * map
 * find
 * reduce
 * filter
 * some
 * every
 * forEach
 *
 */

var empleados = ["michael", "pam", "jim", "dwight"]

var encontrarAPan = empleados.find(function (nombre) {
  var esPam = nombre === "pam"
  return esPam
})

var map = empleados.map(function (nombre, indice) {
  return nombre + "su indice es " + indice
})

//   Metodo Reduce
/* Este método corre una función en cada elemento del array, para comenzar a sumar los resultados de cada operacion. */
var numeros = [1, 2, 3]
var reduce = numeros.reduce(function (acumulado, numeroActual) {
  return acumulado + numeroActual
})

// Metodo Filter
/** este metodo corre una funcion en cada elemento del array y devuelve una copia con los elementos que retornaron true en su iteracion */
var filter = numeros.filter(function (valor) {
  return valor > 2
})

//   Metodo Some
/* Este método nos regresa un false o un true para validar si hay o no artículos que cumplan la validación */

var some = numeros.some(function (valor) {
  return valor >= 3
})

//Metodo Every
/* Este método chuquea que todos los elementos en el array cumplan con la validación que ponemos, y al final nos regresa un true o un false */

var every = numeros.every(function (valor) {
  return valor > 1
})

//Metodo ForEach
/**ejecuta un funcion anonima tantas veces sea igual al numero de items en el array */

numeros.forEach(function (valor) {
  console.log("el valor es " + valor)
})