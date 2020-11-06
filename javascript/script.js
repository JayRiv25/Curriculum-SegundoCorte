function mostrarFormulario(){
    document.getElementById('formulario').style.display='block';
}

var fecha = new Date();
var dia = fecha.getDay();
var fecha = new Date();
var mes = fecha.getMonth();
var fecha = new Date();
var ano = fecha.getFullYear();
alert("Hoy es: " + dia + "/" + mes + "/" + ano)