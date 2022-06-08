const alumno = {
  nombre: "fulanito",
  edad: 18,
  direccion: {
    ciudad: "maracaibo",
    estado: "zulia"
  }
}

const objetoVacio = {}

Object.assign(objetoVacio, alumno, {
  nombre: "sutano", direccion: {
    ciudad: "san francisco"
  }
})

// objetoVacio.nombre = "sutano"
// objetoVacio.direccion.ciudad = "san francisco"

console.log("🚀 ~ file: spread-operators.js ~ line 7 ~ objetoVacio", objetoVacio)
console.log("🚀 ~ file: spread-operators.js ~ line 6 ~ alumno", alumno)


// spread operator
// ...
const original = {
  marca: "ford",
  modelo: "f-150",
  especificaciones: {
    motor: "v12",
    color: "negro"
  }
}

const copia = { ...original, ...{ especificaciones: { ...original.especificaciones, motor: "v6" } } }

console.log("🚀 ~ file: spread-operators.js ~ line 32 ~ copia", copia)

// destructuracion

const marca = original.marca
const modelo = original.modelo

const { modelo: modeloNuevo, marca: marcaNueva, } = original
console.log("🚀 ~ file: spread-operators.js ~ line 46 ~ marcaNueva", marcaNueva)
console.log("🚀 ~ file: spread-operators.js ~ line 46 ~ modeloNuevo", modeloNuevo)

// spread en arrays

const arrayOriginal = [6, 7, 12, 1]

const arrayCopia = [...arrayOriginal, 3, 564, 56]
console.log("🚀 ~ file: spread-operators.js ~ line 54 ~ arrayCopia", arrayCopia)

// spread en string

const texto = "hola soy un texto"
console.log([...texto])

