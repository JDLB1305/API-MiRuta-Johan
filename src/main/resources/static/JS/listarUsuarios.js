$(document).ready(function(){

    let contenedorCardsUsuarios = document.querySelector('#contenedorCardsUsuarios')
    contenedorCardsUsuarios.innerHTML = ''
    $.ajax({
        url: "https://api-miruta-johan-production.up.railway.app/usuario/listar",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            for (i = 0; i <= respuesta.length; i++){
                    let tipoUsu = respuesta[i].tipoUsuario
                    let stringTipo = ""
                    let fondoUsu = ""
                    //console.log(tipoUsu)
                    if (tipoUsu == 0){
                        stringTipo = "Administrador"
                        fondoUsu = "background: linear-gradient(to bottom left, #FFB740 50%, #FDE49C 50%);"
                    } else  if (tipoUsu == 1){
                        stringTipo = "Usuario"
                        fondoUsu = "background: linear-gradient(to bottom left, #B8DFD8 50%, #E8F6EF 50%);"
                    } else {
                        stringTipo = "Conductor"
                        fondoUsu = "background: linear-gradient(to bottom left, #F45050 50%, #F9D949 50%);"
                    }
                    contenedorCardsUsuarios.innerHTML += '<div class="card card-cascade border border-top-0" style="width: 25%; margin: 10px;"> <!-- Usuario imagen --> <div id="fondoCardUsu" style="display: flex; justify-content: center; '+fondoUsu+'" class="img-fluid container-fluid rounded-top"> <div style="height: 100px; width: 100px; text-align: center; margin-top: 10px; margin: 10px; background-color: #FFFF;" class="view view-cascade overlay rounded-circle"> <img style="height: 100px; width: 100px;" class="card-img-top rounded-circle" src="'+respuesta[i].fotoUsu+'"> </div> </div> <!-- Usuario contenido --> <div class="card-body card-body-cascade text-center"> <!-- Nombre Usuario --> <h4 class="card-title"><strong>'+respuesta[i].nombreUsu+'</strong></h4> <!-- Correo Usuario --> <h5 class="font-weight-bold indigo-text py-2">'+respuesta[i].correoUsu+'</h5> <h6 class="font-weight-bold indigo-text py-2">'+stringTipo+'</h6> </div> </div>'
            }
        }
    });

});