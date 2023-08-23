// let url = "digitalhouse.com.ar"
// const dominio = string => "http://www." + string
// console.log(dominio(url))  

let url = "digitalhouse.com.ar"
const dominio = function(string){
return "http://www." + string
}
dominio(url)   

function menciona(texto, palabra){
    return texto.includes(palabra)
}
console.log(menciona("esto esta muy mal", "mal"))