//Agrega caminos
let edad=21 //(el número es a modo de ejemplo, podes cambiarlo o crear otras para tener varias pruebas) 
if(edad<0){
    console.log(`Error, edad inválida. Por favor ingrese un número válido`)
}
else if(edad<18) { 
console.log("No puede pasar al bar.") 
} 
else if(edad<21){ 
console.log("Puede pasar al bar, pero no puede tomar alcohol.") 
} 
else if(edad==21){
    console.log(`Puede pasar al bar y tomar alcohol, felicidades por haber llegado a la mayoria de edad.`);
}
else{ 
console.log("Puede pasar al bar y tomar alcohol.") 
} 

let impar = edad % 2 === 0 ? "" : "¿Sabías que tu edad es impar?"
console.log(impar)
console.log("-------------")
//totalAPagar()
let totalAPagar = (vehiculo, litrosConsumidos) => {
    let total = ``
    if(vehiculo === `coche`){
        total = litrosConsumidos * 86;
    } else if(vehiculo === `moto`){
        total = litrosConsumidos * 70
    } else{
        total = litrosConsumidos * 55
    }
    total = litrosConsumidos > 0 && litrosConsumidos <= 25 ? total + 50 : total + 25
    return total
}
let total = totalAPagar("moto", 26)
console.log(total)
console.log("-------------")
//local sándwiches
let totalSandwich = (base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) => {
    let valorSandwich =``
    switch(base){
        case "pollo": valorSandwich = 150
        break
        case "carne": valorSandwich = 200
        break
        case "veggie" : valorSandwich = 100
        break
    }
    switch(pan){
        case "blanco" : valorSandwich = valorSandwich + 50
        break
        case "negro" : valorSandwich = valorSandwich + 60
        break
        default : valorSandwich = valorSandwich + 75
    }
    if(queso === true){
        valorSandwich = valorSandwich + 20
    }
    if(tomate === true){
        valorSandwich = valorSandwich + 15
    }
    if(lechuga === true){
        valorSandwich = valorSandwich + 10
    }
    if(cebolla === true){
        valorSandwich = valorSandwich + 15
    }
    if(mayonesa === true){
        valorSandwich = valorSandwich + 5
    }
    if(mostaza === true){
        valorSandwich = valorSandwich + 5
    }
    return valorSandwich
}
let valorSandwich = totalSandwich("carne", "negro", true, true, true, true, true, false)
console.log(valorSandwich)
console.log("-------------")

//extra Bonus
//¿Cual es el número secreto? 
//función que reciba un parámetro numérico y verifique si el mismo es el
// número secreto. El número secreto deberá ser seleccionado de manera random de
// entre 1 y 10
let parametro1 = 5;
const numero_secreto = (max, min) => Math.floor(Math.random() * max + min)
let secreto = numero_secreto(10, 1)
if (parametro1 === secreto){
    console.log("Felicidades my friend, es correcto")
}else {console.log(`Vamos, suerte para la proxima, el numero secreto es ${secreto}`)}
console.log("-------------")

// Abir paracaidas si:
// La velocidad debe ser menor a 1000 km/h.
// La altura debe ser mayor o igual a 2000 m y menor a 3000 m.
const abrirParacaidas = (velocidad, altura) => {
    if ( velocidad < 1000 && altura >= 2000 && altura < 3000){
        console.log("Debe abrir el paracaidas")
    } else {console.log("No debe abrir el paracaidas")}
}
abrirParacaidas (999, 2000)
console.log("-------------")

//estructura switch, crea un programa en el que si un usuario ingresa "casa",
// "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
// inglés.
// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
// informe que la palabra ingresada es incorrecta.
let stringUno = "otra"
const traductor = palabra =>{
    switch(palabra){
        case "perro": console.log("dog")
        break
        case "pelota": console.log("ball")
        break
        case "arbol": console.log("tree")
        break
        case "genio": console.log("genius")
        break
        default: console.log("La paralabra ingresada es incorrecta")
    }
}
let traduccion = traductor(stringUno)
console.log("-------------")

//Valoración de películas
let stringdos = "Horrible"
const valoracionPelicula = valoracion =>{
    switch(valoracion){
        case "Muy mala": console.log("Sentimos que haya tenido que pasar por eso")
        break
        case "Mala": console.log("Es una lastima")
        break
        case "Mediocre": console.log("Ojala tenga más suerte para la proxima")
        break
        case "Buena": console.log("Nos alegra saber eso")
        break 
        case "Muy buena": console.log("Excelente, gracias por compartirlo")
        break
        default: console.log("Ingreso un valor invalido")
    }
    console.log("Gracias por su visita, vuelva pronto.")
}
valoracionPelicula(stringdos)