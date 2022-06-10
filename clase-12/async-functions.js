function miPromesa() {
  return new Promise((resolve, reject) => {
    if (1 > 2) {
      resolve("Se resolvio la promesa")
    } else {
      reject("Se rechazo la promesa")
    }
  })
}

async function miFuncionAsincrona() {
  console.log("comienzo de la funcion");
  try {
    const mensaje = await miPromesa()
    console.log("la promesa paso");
    console.log(mensaje)
  } catch (error) {
    console.warn(error)
  }

  console.log("funcion terminada");
}

miFuncionAsincrona()


async function loginUser() {
  try {
    const resultado = await login(password)
    const token = resultado.data.token
    guardarToken(token)
    const informacionDeusuariio = await traerInformacionDeUser(token)
    return informacionDeusuariio
  } catch (error) {
    console.error(error.message)
  } finally {

  }
}