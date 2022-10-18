console.log("INGRSO AL JS")

// variables

// var usuario = prompt("Ingrese su nombre de usuario")
// console.log("usuario:"+usuario)

// es mejor usar let
// var nombre;
let nombre = "Juan";
console.log("nombre:" + nombre)

// operar con var
let a = 4
let b = 5
console.log("suma:" + (a + b))

// concatenar var string
let nom = "Juan"
let ape = "Suarez"
let nomApe = nom + " " + ape
console.log(nomApe)

console.log("Bienvenido " + nom + " " + ape + " a nuestro sitio")
console.log(`Bienvenido ${nom} ${ape} a nuestro sitio`)

edad = 36
if (edad >= 18) {
    console.log("Es mayor de edad")
} else {
    console.log("No es mayor de edad")
}

//operadores logicos
let usu
// usu = prompt("Ingrese su nombre de usuario")
let pass
// pass = prompt("ingrese su password")

if (usu == "nico@gmail.com" && pass == "1234") {
    console.log("usu y pass correctos")
} else {
    console.log("usu y pass incorrectos")
}

// or ||
let estalloviendo = false
let haypronosticolluvia = true
if (estalloviendo || haypronosticolluvia) {
    console.log("llevar paraguas")
} else {
    console.log("No llevar paraguas")
}

// estructura de control
// condicional

if (edad >= 18) [
    // ingresarpagina
]

if (estalloviendo) {
    console.log("Levar paraguas")
} else {
    console.log("No llevar paraguas")
}

edad = 15
if (edad <= 18) {
    console.log("niño o joven")
} else if (edad > 18 && edad <= 60) {
    console.log("adulto")
} else {
    console.log("anciano")
}

// var,let,const
if (true) {
    var x = 3
    let y = 5
}

const mayorEdad = 18
// mayorEdad = 19

const pi = 3.14

// switch
let nroMes = 4
switch (nroMes) {
    case 1:
        console.log("Enero")
        break;

    case 2:
        console.log("Febrero")
        break;

    case 3:
        console.log("Marzo")
        break;

    case 4:
        console.log("Abril")
        break;

    default:
        console.log("No existe el mes")
        break;
}

// iterador
for (let i = 0; i < 4; i++) {
    console.log(`iteración ${i}`)
}

// mientras
let n = 0
while (n < 4) {
    console.log(n)
    n++
}

while (usu != "nico@gmail.com" || pass != "1234") {
    usu = prompt("Ingrese su nombre de usuario")
    pass = prompt("ingrese su password")

    if (usu == "nico@gmail.com" && pass == "1234") {
        console.log("usu y pass correctos")
    } else {
        console.log("usu y pass incorrectos")
    }
}