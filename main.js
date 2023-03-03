
let precioBaseCabaña = 4500;
let diasAlquilados = 0;
let precioFinal = 0;


diasAlquilados = prompt("¿Cuántos días quieres alquilar la cabaña?");


if (diasAlquilados >= 8) {
  precioFinal = precioBaseCabaña * 0.85;
} else if (diasAlquilados >= 4) {
  precioFinal = precioBaseCabaña * 0.90;
} else {
  precioFinal = precioBaseCabaña;
}


alert("El precio final es: " + precioFinal);
