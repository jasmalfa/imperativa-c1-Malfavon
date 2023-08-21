//¿Qué devuelven estas líneas de código?
//1. let numbers =[22, 33, 54, 66, 72];
//console.log(numbers[numbers.length]);
//5

//2.let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
//"Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
//console.log(grupoDeAmigos[5])
// R= Hulk

// 3. let str = “un string cualquiera”
// let arrayAleatorio= ["Digital", "House", “true”, "string", "123","false", “54”, str ]
// console.log(arrayAleatorio[arrayAleatorio.length - 1])
// R= un string cualquiera

// 1. Crear la estructura adecuada para guardar las siguientes películas:
// "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
// Importante: verificá que todo funciona correctamente accediendo a alguna de
// las películas una vez creada la estructura correspondiente.

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
console.log(peliculas[3])
console.log("-----------")

//2 funcion que convierte a upper casse
const a_mayuscula = array => {
for(let i = 0; i < array.length; i++){
    array[i]=array[i].toUpperCase()
    }
}
a_mayuscula(peliculas)
console.log(peliculas)
console.log("-----------")

//3.- funcion para unir dos arrays (todos en mayuscula)
let peliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
let borrado = peliculas2.pop()
const unir_arrays = (arr, arr2) =>{
    a_mayuscula(arr2)
    let j = arr2.length
    for(let i = 0; i < j; i++){
    arr.push(arr2.shift())}
}
unir_arrays(peliculas, peliculas2)
console.log(peliculas)
console.log(borrado)
console.log("-----------")

//5. calificaciones iguales o diferentes
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
const cal_iguales = (arr, arr1, arr2) =>{
    for(let i = 0; i < arr.length; i++){
        if(arr1[i] === arr2[i]){
            console.log(`Las calificaciones de ${arr[i]} son iguales`)
        }else {
            console.log(`Las calificaciones de ${arr[i]} son diferentes`)
        }
    }
}
cal_iguales(peliculas, asiaScores, euroScores)
console.log("-------------")

//extra bonus
// En este ejercicio deberás crear una función que devuelva un array con sus elementos
// invertidos, sin modificarlo. Luego, deberás hacer una función que lo modifique e invierta
// el orden de sus elementos.
let arrI = [1,2,3,4,5,6]
const imprimirInverso = arr => {
    for(let i = arr.length; i > 0; i--){
        console.log(arr[i-1])
    }
}
imprimirInverso(arrI)
console.log("------------")
const inversor = arrI =>{
    let varI = []
    let longitud = arrI.length
    for ( let i = 0; i < longitud; i++){
        varI [i] = arrI.pop()
    }
    return varI
}
let Variable_Inversa = inversor(arrI)
console.log(Variable_Inversa)
console.log("------------")

// sumaArray()
// En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
// números (3 elementos) y devuelva la suma de todos ellos.
let arraySuma = [3,5,8]
const sumaArray = arr =>{
    let longitud = arr.length
    let acum = 0
    for (let i = 0; i < longitud; i++){
        acum = acum + arr[i]
    }
    return acum
}
let acum = sumaArray(arraySuma)
console.log(acum)
console.log("------------")

//Simulación Array.join()
// En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
// strings de 4 elementos y simule el comportamiento del método Array.join().
let arrayJoin = ["h","o","l","a"," ", "a"," ","t","o", "d","o","s"]
const unir = arr =>{
    let acum = ""
    for(let i = 0; i < arr.length; i++){
        acum = acum + arr[i]
    }
    return acum
}
let unirVariable = unir(arrayJoin)
console.log(unirVariable)