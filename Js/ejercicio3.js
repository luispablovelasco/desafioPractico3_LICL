let vehiculo = document.getElementById("vehiculoRegistrar");
let formAuto = document.getElementById("registrandoAuto");
let formMoto = document.getElementById("registrandoMoto");
formAuto.hidden = true;
formMoto.hidden = true;

function deshabilitar() {
    
    if(vehiculo.value == "1") {
        formAuto.hidden = false;
        formMoto.hidden = true;
    } else if(vehiculo.value == "2")
    {
        formAuto.hidden = true;
        formMoto.hidden = false;
    } else {
        formAuto.hidden = true;
        formMoto.hidden = true;
    }

}

