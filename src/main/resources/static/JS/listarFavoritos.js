$(document).ready(function(){

    let contenedorCardsFavoritos = document.querySelector('#contenedorCardsFavoritos')
    $.ajax({
        url: "https://api-miruta-johan-production.up.railway.app/ruta/listarFav/"+localStorage.getItem("UsuCorreo"),
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            //console.log(respuesta+"  ESTO ES RTA")
            for (i = 0; i <= respuesta.length; i++){
                if(respuesta == ''){
                    contenedorCardsFavoritos.innerHTML += '<h4 class="position-absolute top-50 start-50 translate-middle">Usted no tiene favoritos por el momento 💕</h4>'
                } else {
                    contenedorCardsFavoritos.innerHTML += `
  <div class="m-4">
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs" id="myTab">
          <li class="nav-item">
            <a style="color: #ff9933;" href="#lugarInicio${i}" class="nav-link active" data-bs-toggle="tab">Lugar Inicial</a>
          </li>
          <li class="nav-item">
            <a style="color: #ff9933;" href="#lugarFin${i}" class="nav-link" data-bs-toggle="tab">Lugar Final</a>
          </li>
          <li class="nav-item">
            <a style="color: #ff9933;" href="#horaInicio${i}" class="nav-link" data-bs-toggle="tab">Hora Inicial</a>
          </li>
          <li class="nav-item">
            <a style="color: #ff9933;" href="#horaFinal${i}" class="nav-link" data-bs-toggle="tab">Hora Final</a>
          </li>
          <li class="nav-item">
            <a style="color: #ff9933;" href="#diasDispo${i}" class="nav-link" data-bs-toggle="tab">Días Disponibles</a>
          </li>
          <li class="nav-item">
            <a style="color: #ff0000;" href="#eliminarFavorito${i}" class="nav-link" data-bs-toggle="tab">Eliminar Favorito</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="tab-content">
          <div class="tab-pane fade show active" id="lugarInicio${i}">
            <h5 class="card-title">${respuesta[i].lugarInicioRut}</h5>
            <img style="width: 50px;" src="images/bandera-inicio.png" alt="FotoBanderaRoja">
          </div>
          <div class="tab-pane fade" id="lugarFin${i}">
            <h5 class="card-title">${respuesta[i].lugarDestinoRut}</h5>
            <img style="width: 50px;" src="images/bandera-fin.png" alt="FotoBanderaNegra">
          </div>
          <div class="tab-pane fade" id="horaInicio${i}">
            <h5 class="card-title">${respuesta[i].horaInicioRut}</h5>
            <img style="width: 50px;" src="images/hora-inicio.png" alt="FotoReloj">
          </div>
          <div class="tab-pane fade" id="horaFinal${i}">
            <h5 class="card-title">${respuesta[i].horaFinalRut}</h5>
            <img style="width: 50px;" src="images/hora-llegada.png" alt="FotoCampana">
          </div>
          <div class="tab-pane fade" id="diasDispo${i}">
            <h5 class="card-title">${respuesta[i].diasDisponiblesRut}</h5>
            <img style="width: 50px;" src="images/calendario.png" alt="fotoCalendario">
          </div>
          <div class="tab-pane fade" id="eliminarFavorito${i}">
            <h5 class="card-title">Eliminar Favorito</h5>
            <button onclick="eliminarFavorito(${respuesta[i].idRut})" class="btn btn-danger">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;

                }
            }
        }
    });

});