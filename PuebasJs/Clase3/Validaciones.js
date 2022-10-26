
function validarUsu() {
    console.log("ingreso al validar usu")
    let usu=document.getElementById("usu").value
    console.log(usu)
    
    // DOM Document Object Model
    if (usu.length==0) {
        document.getElementById("msjUsu").innerHTML="Debe ingresar algún caractér"
        console.log("Debe ingresar algún caractér")
    } else if (usu.indexOf("@")==-1) {
        document.getElementById("msjUsu").innerHTML="El usu debe contener un @"
        console.log("El usu debe contener un @")
    } else if (usu.indexOf("codoAcodo.gob.ar")==-1) {
        document.getElementById("msjUsu").innerHTML="El usu debe ser del dominio codoAcodo.gob.ar"
        console.log("El usu debe contener un @")    
    } else {
        document.getElementById("msjUsu").innerHTML="Usu correcto"
        document.getElementById("msjUsu").className="bg-info rounded text-center my-2 px-2"
        console.log("Usu correcto")
    }
}

function updFortaleza() {
    console.log("Ingreso updFort")
    let pass=document.getElementById("pass").value
    console.log(pass)
    
    if (pass.length<=4) {
        document.getElementById("msjPass").innerHTML="Fortaleza Baja"
        document.getElementById("msjPass").className="bg-danger text-light text-center rounded my-2 px-2"
    } else if(pass.length>4 && pass.length<=8){
        document.getElementById("msjPass").innerHTML="Fortaleza Media"
        document.getElementById("msjPass").className="bg-warning text-light text-center rounded my-2 px-2"
    }
}