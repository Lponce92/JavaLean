// {/* <script>
// //codigo js

//     var ok = confirm("Usted es mayor de edad?");

//     if (ok) {
//         document.write("<div style='background-color: lightblue;''>Bienvenidos a las pagina</div>");
// } else {
//         document.write("<div style='background-color: red;''>Usted es menor de edad, No puede ingresar a la pagina </div>");
// }

// </script> */}

var edad = prompt("Ingrese su edad")

if (edad >= 18 ) {
    console.warn("ingrso al true")
    document.write("<div style='background-color: lightblue;''>Bienvenidos a las pagina</div>");
} else {
    console.error("ingreso al else")
    document.write("<div style='background-color: red;''>Usted es menor de edad, No puede ingresar a la pagina </div>");
}