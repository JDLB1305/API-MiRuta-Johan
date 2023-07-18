var map = L.map('map', {
  center: [4.70612, -74.2307],
  zoom: 13
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Crear el ícono personalizado del bus
var busIcon = L.icon({
  iconUrl: 'images/bus-pin.png',  
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var mosquera = L.marker([4.70612, -74.2307],
{alt: 'Mosquera'}).addTo(map)
.bindPopup('Esto es Mosquera - Cundinamarca!');


/* TOMA COORDENADA DE INICIO Y FIN */
document.getElementById('lugar_inicio').addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,17);
  L.marker(coords,{alt: 'Inicio de la Ruta'}).addTo(map).bindPopup('Inicio 🚩');
});

document.getElementById('lugar_fin').addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,17);
  L.marker(coords,{alt: 'Fin de la Ruta'}).addTo(map).bindPopup('Fin 🏁');
});

//Trazado ruta y modificacion icono bus al mismo tiempo que recorre la ruta
var marker;
var currentIndex = 0;
var coordinates = [];

// Mover el marcador
function moveMarker() {
  if (currentIndex < coordinates.length) {
    marker.setLatLng(coordinates[currentIndex]).update();
    currentIndex++;
    setTimeout(moveMarker, 2000); // Mover cada 2 segundos
  }
}

document.getElementById('lugar_inicio').addEventListener('change', function (e) {
  let coords_ini = e.target.value.split(",");
  console.log("INICIO ", coords_ini);

  document.getElementById('lugar_fin').addEventListener('change', function (e) {
    let coords_fin = e.target.value.split(",");
    console.log("FIN ", coords_fin);

    L.Routing.control({
      waypoints: [
        L.latLng(coords_ini[0], coords_ini[1]),
        L.latLng(coords_fin[0], coords_fin[1])
      ],
      language: 'es'
    }).addTo(map).on('routeselected', function (e) {
      var route = e.route;
      coordinates = route.coordinates;

      // Eliminar el marcador anterior, si existe
      if (marker) {
        marker.remove();
      }

      // Crear un nuevo icono rojo para el marcador
      var redIcon = L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      // Crear y agregar el nuevo marcador con el icono rojo
      marker = L.marker(coordinates[0], { icon: busIcon }).addTo(map);

      // Reiniciar el movimiento del marcador
      currentIndex = 0;
      moveMarker();
    });
  });
});


//// PARTE LOGICA HTML
//Cerrar Sesion
function cerrar_sesion() {
  Swal.fire({
      title: 'Sesión Cerrada!',
      text: 'Hasta Pronto',
      icon: 'success',
      confirmButtonText: 'Bye Bye!',
      customClass: {
          confirmButton: 'disabled btn btn-success',
      },
      buttonsStyling: false
  })

  localStorage.clear(); //Modificar variable para cierre

  //Redirección a index.html
  setTimeout( function() { window.location = "index.html"; }, 2000 );
}

//Eliminar Fav
function eliminarFavorito(index) {
  //alert(index)
  const usuarioHasRutaModelo = {
    correoUsu: localStorage.getItem("UsuCorreo"), // Reemplaza con el correo del usuario
    idRut: index, // Reemplaza con el ID de la ruta correspondiente
  };

  // Realizar la solicitud AJAX
  $.ajax({
    type: 'POST',
    url: 'https://api-miruta-johan-production.up.railway.app/ruta/eliminarFav',
    data: JSON.stringify(usuarioHasRutaModelo),
    contentType: 'application/json',
    success: function (response) {
      //console.log(response)
      if (response == "{'respuesta': 'Eliminada de favoritos'}") {
          // La ruta favorita se eliminó correctamente
          // Realiza las acciones necesarias, como actualizar la interfaz de usuario
          Swal.fire({
              title: 'Bye bye!',
              text: 'Se elimino tu favorito 😏',
              icon: 'success',
              confirmButtonText: 'Ok!'
          })
          setTimeout( function() { window.location = "favoritos.html"; }, 1500 );
      } else {
          // No se pudo eliminar la ruta favorita
          Swal.fire({
              title: 'Oh oh!',
              text: 'Hubo un error al eliminar 😥',
              icon: 'error',
              confirmButtonText: 'Vale!'
          })
          setTimeout( function() { window.location = "favoritos.html"; }, 1500 );
      }
    },
    error: function () {
      // Ocurrió un error en la solicitud AJAX
      console.log('Error al realizar la solicitud AJAX');
    }
  });
}

//Agregar Fav
function agregarFavorito(index) {
  const usuarioHasRutaModelo = {
    correoUsu: localStorage.getItem("UsuCorreo"), 
    idRut: index, 
  };

  // Realizar la solicitud AJAX
  $.ajax({
    type: 'POST',
    url: 'https://api-miruta-johan-production.up.railway.app/ruta/agregarFav',
    data: JSON.stringify(usuarioHasRutaModelo),
    contentType: 'application/json',
    success: function (response) {
      if (response == "{'respuesta': 'Agregada a favoritos'}") {
          // La ruta se agregó como favorita correctamente
          // Realiza las acciones necesarias, como actualizar la interfaz de usuario
          Swal.fire({
          title: 'Añadido!',
          text: 'Se agrego tu favorito 💖',
          icon: 'success',
          confirmButtonText: 'Super!'
          })
      } else {
          // No se pudo agregar la ruta como favorita
          Swal.fire({
              title: 'Oh oh!',
              text: 'Hubo un error al agregar tu favorito 💔',
              icon: 'error',
              confirmButtonText: 'Vale!'
          })
      }
    },
    error: function () {
      // Ocurrió un error en la solicitud AJAX
      console.log('Error al realizar la solicitud AJAX');
    }
  });
}
