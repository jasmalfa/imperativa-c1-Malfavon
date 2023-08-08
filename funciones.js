// // ANCHOR ----> FUNCIONES
// // crear funcion
// function saludar (){
//     //bloque de codigo
//     console.log("estoy saludando")
// }

// function sumar (a, b, c=0){
//     return a + b + c
// }

// //ejecutar la funcion
// let saludoFinal = saludar()
// console.log(saludoFinal)

// let resultado = sumar(2, 3)
// console.log(resultado)
// let nombre = "juan"
// let saludo2 = `hola ${nombre} como estas?`
// console.log(saludo2)

//trabajo mesa de trabajo 
//Funciones simples
//1 función que convierta pulgadas en centímetros.
// function pulgadasCentimetros (valor1){
// return valor1 * 2.54
// }

// let vPulgadas = prompt("ingrese valor en pulgadas");
// let valorNumero = parseInt(vPulgadas)
// resultado = pulgadasCentimetros (valorNumero)
// console.log(resultado)

function pulgadasCentimetros (valor1){
    return valor1 * 2.54
    }
    
    let vPulgadas = 17
    let valorNumero = parseInt(vPulgadas)
    resultado = pulgadasCentimetros (valorNumero)
    console.log(resultado)

//2 Crear una función que recibe un string y lo convierte en una URL
function tUrl (valor1){
    return `http://www.${valor1}.com`
} 

let nombre = `pepe`
let nombreUrl = tUrl(nombre)
console.log(nombreUrl)

//3 Crear una función que recibe un string y devuelve la misma frase pero con admiración.
function exclamacion(valor1){
    return `!${valor1}¡`
}

let nombre2 = `exclamación`
let nombreExclamacion = exclamacion(nombre2)
console.log(nombreExclamacion)

//4 Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
function edadPerros (valor1){
    return valor1 * 7
}

let years = 7
let yearsPerro = edadPerros(years)
console.log(yearsPerro)

//5 Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
//considerá que tu mes de trabajo tiene 40 horas.
function costoHora (valor1){
    return valor1 / 40
}

let sueldo = 16000
let salarioHora = costoHora(sueldo)
console.log(salarioHora)

//6 Crear la función calculadorIMC() “Índice de Masa corporal = kg/(mt2)” que reciba la altura en metros y 
//el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores.
function calculatorIMC (valor1, valor2){
    return valor1 / (valor2 * valor2)
}

let pesoKg = 60
let estaturaM = 1.80
let IMC = calculatorIMC(pesoKg, estaturaM)
console.log(IMC)

//opcional convertir una a expresada
let salarioHora1 = function (valor1){
    return valor1 / 40
}
let sueldo1 = 16000
console.log(salarioHora1(sueldo1))

//opcional expresada arrow
let salarioHora2 = valor1 => valor1 / 40
let sueldo2 = 16000
console.log(salarioHora2(sueldo2))

//7 Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. 
//Investigá qué hace el método de strings .toUpperCase()
function minMay (valor1){
    return valor1.toUpperCase()
}
let min = `centipede`
let may = minMay(min)
console.log(may)

//8 Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. 
//Pista: te servirá revisar qué hace la palabra reservada typeof.
function dato (valor1){
    return typeof valor1
}

let dato1 = 12
let tipoDato = dato(dato1)
console.log(tipoDato)