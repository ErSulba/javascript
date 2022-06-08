// import de ES6, soportado solo por las versionamas recientes de node.js
import { saludo } from "./modules.js"

// ES5 definiciones de variables
let miVariable = 13
const miConstante = "esto no va a cambiar"

// Destructuring
const miIbjetoLiteral = {
  nombre: "alejandro",
  apellido: "sulbaran",
  edad: 31
}

const miArray = ["fulanito", "sutano", 45]

// let nombre = miIbjetoLiteral.nombre;
// let apellido = miIbjetoLiteral.apellido;
// let edad = miIbjetoLiteral.edad;

let { nombre, apellido, edad, propiedadRara } = miIbjetoLiteral
let [item1, item2, item3] = miArray


