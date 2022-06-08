const persona = {
  nombre: "alejandro",
  apellido: "sulbaran",
  edad: 31,
  editarEdad: function (nuevaEdad) {
    this.edad = nuevaEdad
  }
}

console.log(persona)
persona.editarEdad(32)
console.log(persona);

const miFuncionFlecha = () => {
  console.log("hola soy una arrow function")
}

miFuncionFlecha()

function suma2(numero) {
  return numero + 2;
}

console.log(suma2(1)) // 3

function sumaPeroNoRetorna(numero) {
  numero + 3
}

console.log(sumaPeroNoRetorna(2)) //undefined

const sumaConReturnExplicito = (numero) => {
  return numero + 2
}

console.log(sumaConReturnExplicito(2)) // 4

const returnImplicito = (numero) => numero + 3

console.log(returnImplicito(1)) // 4

const returnSemiImplicito = (nombre) => (
  {
    marca: "hyudai",
    nombre: nombre,
    ano: 2006
  }
)

console.log(returnSemiImplicito("elantra"))

// diferencias

const conFuncionNormal = {
  marca: "hyudai",
  modelo: "elantra",
  editarMarca: function (nuevaMarca) {
    this.marca = nuevaMarca
  }
}

conFuncionNormal.editarMarca("ford")

console.log(conFuncionNormal);

const conFuncionflecha = {
  marca: "ferrari",
  modelo: "enzo",
  editarMarca: (nuevaMarca) => this.marca = nuevaMarca // this apunta al objeto global Window
}

conFuncionflecha.editarMarca("Lamborghini")

console.log(conFuncionflecha)