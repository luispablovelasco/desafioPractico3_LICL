//Sección para habilitar formularios
let vehiculo = document.getElementById("vehiculoRegistrar");
let formAuto = document.getElementById("registrandoAuto");
let formMoto = document.getElementById("registrandoMoto");
const btnRegistrar = document.getElementById("btnRegistrar");
const TablaAuto = document.getElementById("TablaAuto");
const TablaMoto = document.getElementById("TablaMoto");
const containerTablaAuto = document.getElementById("containerTablaAuto");
const containerTablaMoto = document.getElementById("containerTablaMoto");
formAuto.hidden = true;
formMoto.hidden = true;
btnRegistrar.hidden = true;
TablaAuto.hidden = true;
TablaMoto.hidden = true;

var auto = false;
var moto = false;

function deshabilitar() {
    
    if(vehiculo.value == "1") {
        formAuto.hidden = false;
        auto = true;
        formMoto.hidden = true;
        moto = false;
        btnRegistrar.hidden = false;
        TablaAuto.hidden = false;
        TablaMoto.hidden = true;
    } else if(vehiculo.value == "2")
    {
        formAuto.hidden = true;
        auto = false;
        formMoto.hidden = false;
        moto = true;
        btnRegistrar.hidden = false;
        TablaAuto.hidden = true;
        TablaMoto.hidden = false;
    } else {
        formAuto.hidden = true;
        auto = false;
        formMoto.hidden = true;
        moto = false;
        btnRegistrar.hidden = true;
        TablaAuto.hidden = true;
        TablaMoto.hidden = true;
    }

}

//Sección para añadir datos

//Arreglos para guardar los datos del auto
let arrayTipoAuto = [];
let arrayMarcaAuto = [];
let arrayAsientosAuto = [];
let arrayTransmisionAuto = [];
let arrayPuertas = [];

//Arreglos para guardar los datos de la moto
let arrayTipoMoto = [];
let arrayMarcaMoto = [];
let arraySistemaFreno = [];
let arrayPosicionConduccion = [];

btnRegistrar.addEventListener("click", añadirDatos);

function añadirDatos() {

    //Variables usadas para registrar auto
    var vartipoAuto = document.getElementById("tipoAuto");
    let tipoAuto = vartipoAuto.options[vartipoAuto.selectedIndex].text;
    var varmarcaAuto = document.getElementById("marcaAuto");
    let marcaAuto = varmarcaAuto.options[varmarcaAuto.selectedIndex].text;
    let numAsientos = document.getElementById("numAsientos").value;
    var vartransmision = document.getElementById("transmision");
    let transmision = vartransmision.options[vartransmision.selectedIndex].text;
    let numPuertas = document.getElementById("numPuertas").value;

    //Variables usadas para registrar moto
    var vartipoMoto = document.getElementById("tipoMoto");
    let tipoMoto = vartipoMoto.options[vartipoMoto.selectedIndex].text;
    var varmarcaMoto = document.getElementById("marcaMoto");
    let marcaMoto = varmarcaMoto.options[varmarcaMoto.selectedIndex].text;
    var varsistemaFreno = document.getElementById("sistemaFreno");
    let sistemaFreno = varsistemaFreno.options[varsistemaFreno.selectedIndex].text;
    var varposicionCond = document.getElementById("posicionCond");
    let posicionCond = varposicionCond.options[varposicionCond.selectedIndex].text;


    if(auto == true){

        if(tipoAuto =="" || marcaAuto =="" || numAsientos =="" || transmision =="" || numPuertas =="")
        {
            alert(`Debe de llenar todos los campos`);
        } else {
            //Las variables "let" son las que se ingresan en el arreglo
            arrayTipoAuto.push(tipoAuto);
            arrayMarcaAuto.push(marcaAuto);
            arrayAsientosAuto.push(numAsientos);
            arrayTransmisionAuto.push(transmision);
            arrayPuertas.push(numPuertas);
            mostrarDatos();

            alert(`Datos añadidos correctamente!`);
        }

    } else if(moto == true) {

        if(tipoMoto=="" || marcaMoto=="" || sistemaFreno=="" || posicionCond==""){
            alert(`Debe de llenar todos los campos`);
        }
        else{
            arrayTipoMoto.push(tipoMoto);
            arrayMarcaMoto.push(marcaMoto);
            arraySistemaFreno.push(sistemaFreno);
            arrayPosicionConduccion.push(posicionCond);
            mostrarDatos();

            alert(`Datos añadidos correctamente!`);
        }

    }
}

function mostrarDatos(){

    //Si lo que se registra es una auto

    if(auto == true){
        let table = "<table class='table'>";
        table += "<thead>";
        table += "<tr>";
        table += "<th scope='col'>#</th>";
        table += "<th scope='col'>Tipo</th>";
        table += "<th scope='col'>Marca</th>";
        table += "<th scope='col'>Número de asientos</th>";
        table += "<th scope='col'>Tipo de transmisión</th>";
        table += "<th scope='col'>Número de puertas</th>";
        table += "</tr>";
        table += "</thead>";
        table += "</tbody>";

        for (let i = 0; i < arrayTipoAuto.length; i++) {
            
            let tipo = arrayTipoAuto[i];
            let marca = arrayMarcaAuto[i];
            let asientos = arrayAsientosAuto[i];
            let transmision = arrayTransmisionAuto[i];
            let puertas = arrayPuertas[i];
            
            table += `<tr>`;
            table += `<td scope='row' style='font-weight: bold;'>${i +1}</td>`;
            table += `<td>${tipo}</td>`;
            table += `<td>${marca}</td>`;
            table += `<td>${asientos}</td>`;
            table += `<td>${transmision}</td>`;
            table += `<td>${puertas}</td>`;
            table += `</tr>`;
        }

        table += "</tbody>";
        table += "</table>";
        //containerTablaAuto.insertAdjacentHTML("beforeend", `${table}`);
        containerTablaAuto.innerHTML = table;

    } else if(moto == true) {

        let table = "<table class='table'>";
        table += "<thead>";
        table += "<tr>";
        table += "<th scope='col'>#</th>";
        table += "<th scope='col'>Tipo</th>";
        table += "<th scope='col'>Marca</th>";
        table += "<th scope='col'>Sistema de Frenos</th>";
        table += "<th scope='col'>Posición Conducción</th>";
        table += "</tr>";
        table += "</thead>";
        table += "</tbody>";

        for (let i = 0; i < arrayTipoMoto.length; i++) {
            
            let tipo = arrayTipoMoto[i];
            let marca = arrayMarcaMoto[i];
            let frenos = arraySistemaFreno[i];
            let conduccion = arrayPosicionConduccion[i];
            
            table += `<tr>`;
            table += `<td scope='row' style='font-weight: bold;'>${i +1}</td>`;
            table += `<td>${tipo}</td>`;
            table += `<td>${marca}</td>`;
            table += `<td>${frenos}</td>`;
            table += `<td>${conduccion}</td>`;
            table += `</tr>`;
        }

        table += "</tbody>";
        table += "</table>";
        //containerTablaMoto.insertAdjacentHTML("beforeend", `${table}`);
        containerTablaMoto.innerHTML = table;
    }

    
}
