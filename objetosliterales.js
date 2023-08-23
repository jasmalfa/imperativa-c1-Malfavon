//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];



  // podes continuar tu codigo a partir de aca!
const consulta_Cliente = function(name){
    for (let i = 0; i < arrayCuentas.length; i++){
        if(this.clientes[i].titularCuenta === name){
            return this.clientes[i]
        }
    }
}
const depositoF = function(name, cantidad){
    for (let i = 0; i < arrayCuentas.length; i++){
        if(this.clientes[i].titularCuenta === name){
            this.clientes[i].saldoEnPesos += cantidad
            console.log(`Depósito realizado, su nuevo saldo es: ${this.clientes[i].saldoEnPesos}`)
        }
    }
}
const extraccionF = function(name, cantidad){
    for (let i = 0; i < arrayCuentas.length; i++){
        if(this.clientes[i].titularCuenta === name){
            let saldoProvisional = this.clientes[i].saldoEnPesos - cantidad
            if(saldoProvisional >= 0){
                this.clientes[i].saldoEnPesos -= cantidad
                console.log(`Extracción realizada correctamente, su nuevo saldo es: ${this.clientes[i].saldoEnPesos}`)
            } else{console.log("Fondos insuficientes")}
        }
    }
}
let banco = {
    clientes: arrayCuentas,
    consultarCliente: consulta_Cliente,
    deposito: depositoF,
    extraccion: extraccionF
}
console.log(banco.consultarCliente("Ramon Connell"))
console.log("-------------")
banco.deposito("Ramon Connell", 200)
console.log("-------------")
banco.extraccion("Ramon Connell", 8876)
console.log("-------------")

//Extra bonus
// Propiedad Unica
let arrPU =[
    {nombre: "Leon",
    apellido: "Larregui",
    edad: 27},
    {nombre: "Joan",
    apellido: "Serrat",
    edad: 75},
    {nombre: "Joaquin",
    apllido: "Sabina",
    edad: 72}
]
let parametro = "nombre"
const propiedadUnica = (arr, text) =>{
    let resultado = []
    for(let i = 0; i < arr.length; i++){
        resultado[i] = {[text]: arr[i][text]}
    }
    console.log(resultado)
}
propiedadUnica(arrPU, parametro)
console.log("------------")

//Calculador de notas
const aprobado = function(arr, notaA){
    let acum = 0
    for(let i = 0; i < arr.listNotas.length; i++){
        acum += arr.listNotas[i]
    }
    let promA = acum / arr.listNotas.length
    let resultado = ""
    if (promA >= notaA){
        resultado = "El alumno esta aprobrado"
    } else (resultado = "el alumno a reprobado")
    return resultado
}
let alumno = {
    nombre: "Pepito",
    numLegajo:  244852,
    listNotas: [7, 8, 9, 10, 7],
    statusA: null
}

alumno.statusA = aprobado(alumno, 8.2)
console.log(alumno)