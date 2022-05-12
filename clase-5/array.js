var frutas = ["manzana", "pera", "cambur", "fresa"]

console.log(frutas.length); // 4

console.log(frutas[0]); // "manzana"
console.log(frutas[3]); // "fresa"

frutas[1] = "platano"

// push & unshift

frutas.push("patilla") // pone el elemento al final del array y devuelve la nueva longitud del arreglo
frutas.unshift("topocho") // pone el elemento al principio del array y devuelve la nueva longitud del arreglo

// pop & shift
frutas.pop() // elimina el ultimo elemento del array
frutas.shift() //elimina el primer elemento del array
