// Situación: llevar el carro a servicio
// Cantidad de kilometros para el siguiente servicio
const kilometroServicio = 150000;
// debo comparar con la cantidad de kilometros actual
let kilometroActual = 152000;
let servicioNecesario = kilometroActual >= kilometroServicio;
console.log(servicioNecesario)
// ver si se tiene el dinero necesario para el servicio
let dineroA = 3500;
let costo = 2500;
let realizarServicio = dineroA >= costo;
