//Obteniendo la referencia del boton calcular
const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");
const btnDividir = document.getElementById("btnDividir");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const contenedorResultado = document.getElementById("resultado");


class Calculadora {

    constructor(Valor1, Valor2) {
        this.Valor1 = parseFloat(Valor1);
        this.Valor2 = parseFloat(Valor2);
    }

    //Métodos
    suma() {
        const respuesta = this.Valor1 + this.Valor2;
        return respuesta;
    }

    resta() {
        return this.Valor1 - this.Valor2;
    }

    multiplicacion() {
        return this.Valor1 * this.Valor2;
    }

    division() {
        return this.Valor1/ this.Valor2;
    }

}

btnSumar.addEventListener("click", sumando);
btnRestar.addEventListener("click", restando);
btnDividir.addEventListener("click", dividiendo);
btnMultiplicar.addEventListener("click", multiplicando);

function sumando() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    let calculando = new Calculadora(valor1, valor2);
    let resultado = calculando.suma();
    
    contenedorResultado.insertAdjacentHTML("beforeend",`<hr> <p>El resultado de la suma de ${valor1} + ${valor2} es ${resultado}</p> <hr>`);
}

function restando() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    let calculando = new Calculadora(valor1, valor2);
    let resultado = calculando.resta();
    //Al no ser una tabla es posible añadir los datos de esta manera
    contenedorResultado.insertAdjacentHTML("beforeend",`<hr> <p>El resultado de la resta de ${valor1} - ${valor2} es ${resultado}</p> <hr>`);
}

function dividiendo() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    if(valor2 == 0){
        alert(`No se puede dividir entre 0`);
    } else{
        let calculando = new Calculadora(valor1, valor2);
        let resultado = calculando.division();

        contenedorResultado.insertAdjacentHTML("beforeend",`<hr> <p>El resultado de la división de ${valor1} / ${valor2} es ${resultado}</p> <hr>`);
    }

}

function multiplicando() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    let calculando = new Calculadora(valor1, valor2);
    let resultado = calculando.multiplicacion();

    contenedorResultado.insertAdjacentHTML("beforeend",`<hr> <p>El resultado de la multiplicación de ${valor1} x ${valor2} es ${resultado}</p> <hr>`);
}


