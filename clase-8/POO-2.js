/**
 * hay propiedades que queremos que sean privadas y que no puedan se accesadas o cambiadas de manera publica
 * por convenciones de ES normalmente vamos a nombrar las propiedades privadas con un "_" o un # al principio
 *
 */



class cliente {
  constructor(nombre, DNI) {
    this.nombre = nombre
    this._DNI = DNI
  }
  //Getter
  get DNI() {
    return this._DNI
  }
  //Seter
  set DNI(DNINuevo) {
    if (DNINuevo === this._DNI) {
      console.warn("el dni es igual al anterior")
    } else {
      this._DNI = DNINuevo
    }
  }
}

var alejandro = new cliente("alejandro", 6847684654)

alejandro.DNI = 6847684654

Object.getOwnPropertyNames(alejandro)
Object.keys(alejandro)

Object.getOwnPropertyDescriptors(alejandro)


