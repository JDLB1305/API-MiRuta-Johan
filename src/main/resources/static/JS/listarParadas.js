$(document).ready(function(){

    let contenedorCardsParadas = document.querySelector('#contenedorCardsParadas')
    contenedorCardsParadas.innerHTML = ''
    $.ajax({
        url: "https://api-miruta-johan-production.up.railway.app/parada/listar",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            for (i = 0; i <= respuesta.length; i++){
                contenedorCardsParadas.innerHTML += '<div style="margin: 5px;" class="col-lg-3 col-md-6 mb-3"> <div class="card card-cascade"> <!-- Parada imagen --> <div class="view view-cascade overlay"> <img style="height: 200px;" class="card-img-top" src="'+respuesta[i].imgPar+'"> </div> <!-- Parada contenido --> <div class="card-body card-body-cascade text-center"> <!-- Titulo Parada --> <h4 class="card-title"><strong>'+respuesta[i].nombrePar+'</strong></h4> <!-- Direccion --> <h6 class="font-weight-bold indigo-text py-2">'+respuesta[i].direccionPar+'</h6></div> </div> </div>'
            }
        }  
    });

});