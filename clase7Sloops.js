//1) Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
const num_siguientes = parametro => {
    for(let i = 1; i <= 10; i++){
        console.log(parametro + i)
    }
}
num_siguientes(8)

console.log("------------")

//2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
const numero_de3 = () => {
    for(let i = 5; i <= 20; i += 3){
        console.log(i)
    }
}
numero_de3()

console.log("------------")

//3) Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100
const sumatoria = () => {
    let acumulado = 0
    for(i = 1; i <= 100; i++){
        acumulado += i
    }
    return acumulado
}
let sumatoria_total = sumatoria()
console.log(sumatoria_total)

console.log("------------")

//4) Dado un número entero positivo, mostrar su factorial. El factorial de Un número se obtiene multiplicando todos los números enteros
//positivos que hay entre el 1 y ese número. 
let factorial = numero => {
    let acumulado = 1
    let i = 1
    while(i <= numero){
        acumulado *= i
        i++
    }
    return acumulado
}
let resultado_factorial = factorial(12)
console.log(resultado_factorial)