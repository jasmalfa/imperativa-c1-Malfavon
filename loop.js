// funcion con for para sumar 1 cada que se encuentre un impar hasta llegar al numero asignado
function noParesDeContarImparesHasta(numero){
    let resultado = 0
    for(cont = 0; cont <= numero; cont++){
        if(cont % 2 != 0){
            resultado++
        }
    }
    return resultado
}
let resultado = noParesDeContarImparesHasta(7)
console.log(resultado)

//Para este ejercicio te damos la función tablaDeMultiplicar ya definida, la cual recibe un número como parámetro. Queremos que al ejecutarse la función 
//muestre por consola la tabla de multiplicar del 1 al 10 del número que reciba.
function tablaDeMultiplicar(numero) {
    let i = 1
    while(i <= 10){
        let resultado_mult = i * numero
        console.log(i + " * " + numero + " = " + resultado_mult)
        i++
    }
}
tablaDeMultiplicar(5)