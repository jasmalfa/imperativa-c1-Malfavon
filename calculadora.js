const sumar = (n1, n2) => n1 + n2
const restar = (n1, n2) => n1 - n2
const multiplicar = (n1, n2) => n1 * n2
const dividir = (n1, n2) => n1 / n2
console.log(`------- Testeo de valores/calculadora -----------`);
let resSuma = sumar(8,4)
console.log(resSuma)
let resResta = restar(8,4)
console.log(resResta)
let resMultiplicar = multiplicar(8,2)
console.log(resMultiplicar)
let resDividir = dividir (8,2)
console.log(resDividir)
let resDividir0 = dividir(2,0)
console.log(resDividir0)
console.log(`------- Testeo de valores/calculadora Nv 3 -----------`)
const cuadradoDeUnNumero = n1 => multiplicar(n1,n1)
let  resCuadrado =cuadradoDeUnNumero(3)
console.log(resCuadrado);

const promedioDeTresNumeros = (n1,n2,n3) => {
    return dividir((sumar(n1,n2) + n3),3)
}
let resPromedio = promedioDeTresNumeros(3,2,4)
console.log(resPromedio);

const calcularPorcentaje = (n1, porcentaje) => n1 * dividir(porcentaje,100)
let resPorcentaje = calcularPorcentaje(300,15)
console.log(resPorcentaje);

const GeneradorDePorcentaje = (n1,n2) => multiplicar(dividir(n1,n2),100)
let resGPorventaje = GeneradorDePorcentaje(2,200)
console.log(resGPorventaje);

