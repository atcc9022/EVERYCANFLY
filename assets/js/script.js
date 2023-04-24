// card-nacionales

document.getElementById("mostrar").onclick = function() {myFunction()};
function myFunction() {
    document.getElementById("text-card").style.display="block";
}

document.getElementById("atacama").onclick = function() {atacamaFunction()};
function atacamaFunction(){
    document.getElementById("text-card-atacama").style.display="block"
}

document.getElementById("frutillar").onclick = function() {frutillarFunction()};
function frutillarFunction(){
    document.getElementById("text-card-frutillar").style.display="block"
}

document.getElementById("torre_paine").onclick = function() {paineFunction()};
function paineFunction(){
    document.getElementById("text-card-torresDelPaine").style.display="block"
}

// card-internacional

document.getElementById("venecia").onclick = function() {myFunctionvenecia()};
function myFunctionvenecia() {
    document.getElementById("text-card-venecia").style.display="block";
}

document.getElementById("madrid").onclick = function() {madridFunction()};
function madridFunction(){
    document.getElementById("text-card-madrid").style.display="block"
}

document.getElementById("sydney").onclick = function() {sydneyFunction()};
function sydneyFunction(){
    document.getElementById("text-card-sydney").style.display="block"
}

document.getElementById("tokyo").onclick = function() {tokyoFunction()};
function tokyoFunction(){
    document.getElementById("text-card-tokyo").style.display="block"
}

// form

let mostrardatos= document.getElementById("boton")
mostrardatos.addEventListener("click", enviarDatos())

function myform() {
    alert('GRACIAS POR COMUNICARTE CON NOSOTROS, TE CONTACTAREMOS  DENTRO DE LAS PROXIMAS 24HRS')
 }



let compraRealizada= document.getElementById("botonCompra")
compraRealizada.addEventListener("click", comprar())


function comprar(){
    alert('GRACIAS POR SU COMPRA')

}