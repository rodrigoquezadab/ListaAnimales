class Propietario {
  constructor(nombre, direccion, telefono) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }

  datosPropietario() {
    return `El nombre del dueño es ${this._nombre}. El domicilio ${this._direccion} y el número telefónico de contacto es: ${this._telefono}`;
  }
}
class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }

  get tipo() {
    return this._tipo;
  }

  getTipo() {
    return `El tipo es: ${this.tipo}`;
  }
}
class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }

  get nombreMascota() {
    return this._nombreMascota;
  }

  set nombreMascota(nuevo_nombreMascota) {
    this._nombreMascota = nuevo_nombreMascota;
  }

  get enfermedad() {
    return this._enfermedad;
  }

  set enfermedad(nueva_enfermedad) {
    this._enfermedad = nueva_enfermedad;
  }
}
const form = document.querySelector("form");
const ul = document.querySelector("#resultado ul");

const camposDelFormulario = [...document.querySelectorAll("input, select")]; //devuelve nodelist, pero pasa arreglo por []

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const [dueño, telefono, residencia, nombreMascota, tipo, motivo] =
    camposDelFormulario.map((c) => c.value);
  let mascotita = new Mascota(
    dueño,
    residencia,
    telefono,
    tipo,
    nombreMascota,
    motivo
  );

  ul.innerHTML += `<li>${mascotita.datosPropietario()} </li>`;

  ul.innerHTML += `<li>${mascotita.getTipo()}, mientras  que el nombre de la mascota es : ${
    mascotita.nombreMascota
  } y la enfermedad es :${mascotita.enfermedad}</li>`;
});
