if (condition) {
  //codigo a ejecutar
} else {
  //si no se cumple la condicion ejecuta este codigo
}

if (condition) {
  //codigo que se ejecuta si se cumple la funcion
} else if (condition2) {
  //si no se cumple la primera condicion, pero si la segunda entonces ejecuta este codigo
}

var numero = prompt("mete un valor")
var numeroParseado = Number(numero)


switch (numeroParseado) {
  case 2:
    console.log("el valor es 2")
    break;
  case 3:
    console.log("el valor es 3")
  default:
    console.log("no es ningun valor esperado")
    break;
}

