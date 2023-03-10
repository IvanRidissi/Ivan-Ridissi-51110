let precioBaseCabaña = 4500;
let diasAlquilados = 0;
let precioFinal = 0;
let numHuespedes = 0;
let costeLimpieza = 0; 

function calcularPrecio(numHuespedes, diasAlquilados, costeLimpieza) {
  let precio = precioBaseCabaña * diasAlquilados;
  if(numHuespedes > 4){
    precio += 500 * (numHuespedes - 4);
  }
  precio += costeLimpieza;
  return precio;
}
let numRentals = prompt("¿Cuántas cabañas desea alquilar?");

for(let i = 0; i < numRentals; i++) {
  diasAlquilados = prompt("¿Cuántos días quieres alquilar la cabaña?");
  numHuespedes = prompt("¿Cuántos huéspedes se hospedarán en la cabaña?");
  let limpieza = prompt("¿Desea servicio de limpieza? (Ingrese 'si' o 'no')");
  if (limpieza === "si") {
    costeLimpieza = 300;
  }
  precioFinal = calcularPrecio(numHuespedes, diasAlquilados, costeLimpieza); 
  alert("El precio final es: " + precioFinal);
}
