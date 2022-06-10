// promesas
function miPromesa() {
  return new Promise((resolve, reject) => {
    if (1 > 2) {
      resolve("Se resolvio la promesa")
    } else {
      reject("Se rechazo la promesa")
    }
  })
}

miPromesa()
  .then(function (valor) {
    console.log(valor)
  })
  .catch(function (mensaje) {
    console.warn(mensaje)
  })
  .finally(() => console.log("promesa finalizada"))

console.log("final del script")

login(password)
  .then(resultado => {
    // ejecutar lo que yo quiero despues de finalizada la peticion
    const token = resultado.data.token
    guardarToken(token)
    return traerInformacionDeUsuario(token)
  })
  .then(() => {

  })
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => {

  })

// {
//   data: {
//     token: "askldjhjaskljdhjasjkldh"
//   }
// }