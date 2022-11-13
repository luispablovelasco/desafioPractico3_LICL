const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const selectMonedaFinal = document.getElementById("monedaFinal");
const containerTabla = document.getElementById("tablaConversiones");
selectMonedaFinal.hidden = true;

let arrayValorOrigen = []; //Array con el valor numerico
let arrayValorFinal = []; //Array con el valor convertido
let arrayMonedaFinal = []; //Array que tiene el texto de la moneda escogida


//Añadiendo elementos al select
selectMonedaFinal.insertAdjacentHTML("beforeend", "<option value=0></option>");
selectMonedaFinal.insertAdjacentHTML("beforeend", "<option value=1>Colón Salvadoreño</option>");
selectMonedaFinal.insertAdjacentHTML("beforeend", "<option value=2>Pesos Mexicanos</option>");
selectMonedaFinal.insertAdjacentHTML("beforeend", "<option value=3>Euro</option>");
selectMonedaFinal.insertAdjacentHTML("beforeend", "<option value=4>Libra esterlina</option>");
selectMonedaFinal.insertAdjacentHTML("beforeend", "<option value=5>Franco suizo</option>");


//Sección de validaciones
const expresiones = {
    importe: /^[1-9][0-9]*$/
}

const campos = {
    importe: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "importe":
            validarCampo(expresiones.importe, e.target, 'importe');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)) {
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
		campos[campo] = true;
        selectMonedaFinal.hidden = false;
    } else {
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
		campos[campo] = false;
        selectMonedaFinal.hidden = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});



function convertirMoneda() {

    let valorConvertir = document.getElementById("inputValorBase").value;
    let valorConvertido;

    //Convirtiendo a Colon Salvadoreño
    if(selectMonedaFinal.value == "1"){
        valorConvertido = valorConvertir * 8.75;
        arrayValorFinal.push(valorConvertido.toFixed(2));
        arrayValorOrigen.push(valorConvertir);
        arrayMonedaFinal.push("Colon Salvadoreño");
        
        alert(`El valor es: ` + valorConvertido.toFixed(2));
    }
    if(selectMonedaFinal.value == "2"){
        valorConvertido = valorConvertir * 21.46;
        arrayValorFinal.push(valorConvertido.toFixed(2));
        arrayValorOrigen.push(valorConvertir);
        arrayMonedaFinal.push("Pesos Mexicanos");

        
        alert(`El valor es: ` + valorConvertido.toFixed(2));
    }
    if(selectMonedaFinal.value == "3"){
        valorConvertido = valorConvertir * 0.86;
        arrayValorFinal.push(valorConvertido.toFixed(2));
        arrayValorOrigen.push(valorConvertir);
        arrayMonedaFinal.push("Euro");

        
        alert(`El valor es: ` + valorConvertido.toFixed(2));
    }
    if(selectMonedaFinal.value == "4"){
        valorConvertido = valorConvertir * 0.78;
        arrayValorFinal.push(valorConvertido.toFixed(2));
        arrayValorOrigen.push(valorConvertir);
        arrayMonedaFinal.push("Libra Esterlina");

        
        alert(`El valor es: ` + valorConvertido.toFixed(2));
    }
    if(selectMonedaFinal.value == "5"){
        valorConvertido = valorConvertir * 0.92;
        arrayValorFinal.push(valorConvertido.toFixed(2));
        arrayValorOrigen.push(valorConvertir);
        arrayMonedaFinal.push("Franco Suizo");

        
        alert(`El valor es: ` + valorConvertido.toFixed(2));
    }

    imprimirDatos();

}

function imprimirDatos(){

    let table = "<table class='table'>";
    table += "<thead>";
    table += "<tr>";
    table += "<th scope='col'>#</th>";
    table += "<th scope='col'>Valor</th>";
    table += "<th scope='col'>Conversión</th>";
    table += "<th scope='col'>Convertido a</th>";
    table += "</tr>";
    table += "</thead>";
    table += "</tbody>";

    for (let i = 0; i < arrayValorOrigen.length; i++) {
            
        let valor = arrayValorOrigen[i];
        let conver = arrayValorFinal[i];
        let moneda = arrayMonedaFinal[i]; //Moneda convertida
        
        table += `<tr>`;
        table += `<td scope='row' style='font-weight: bold;'>${i +1}</td>`;
        table += `<td>${valor}</td>`;
        table += `<td>${conver}</td>`;
        table += `<td>${moneda}</td>`;
        table += `</tr>`;
    }

    table += "</tbody>";
    table += "</table>";

    containerTabla.innerHTML = table;
        
}