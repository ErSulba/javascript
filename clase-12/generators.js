// function* generator(){}

function* generator() {
  // yield para la ejecucion y retorna el valor
  yield 1

  console.log("finaliza la ejecucion")
}

const gen = generator()
console.log("🚀 ~ file: generators.js ~ line 11 ~ primeraParada", primeraParada)





// primeraParada.next()