//Obteniendo la referencia del boton calcular
const btnSumar = document.getElementById("btnCalcular");
const btnRestar = document.getElementById("btnRestar");
const btnDividir = document.getElementById("btnDividir");
const btnMultiplicar = document.getElementById("btnMultiplicar");


//Definimos la clase  calculadora

const calculadora  = function (Valor1, Valor2, Resultado) {
    //Propiedades de la clase
    this.Valor1 = parse.float(Valor1);
    this.Valor2 = parse.float(Valor2);
    this.Resultado = parse.float(Resultado);

    //Metodos de la clase
    this.sumar = new Function(Resultado = Valor1 + Valor2)
    this.multiplicar = new Function(Resultado = Valor1 * Valor2);
    this.dividir = new Function(Resultado = Valor1 / Valor2);
    this.restar = new Function(Resultado = Valor1 - Valor2);
}

