console.log("Ingreso js")

// funciones
let a=4
let b=5
console.log(`a+b=${a+b}`)

// funcion no se ejecuta sino la llamo
function sumar() {
    console.log(`funcion sumar: a+b=${a+b}`)
}
// llame a la funcion
sumar()
a=6
sumar()

// funcion con parametros
function restar(a,b) {
    console.log(`a=${a}`)
    console.log(`b=${b}`)
    console.log(`funcion restar: a-b=${a-b}`)
}
restar(5,7)
restar(33,22)

function raizCuadrada(x) {
    let result=Math.sqrt(x)
    console.log(`Raiz cuadrada de ${x}=${result}`)
}

raizCuadrada(16)
raizCuadrada(18)