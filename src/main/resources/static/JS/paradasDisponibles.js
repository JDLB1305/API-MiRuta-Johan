$(document).ready(function(){

    let selectParadasIni = document.querySelector('#lugar_inicio')
    let selectParadasFin = document.querySelector('#lugar_fin')
    let selectParadasBuscar = document.querySelector('#ver_paradas')
    $.ajax({
        url: "https://api-miruta-johan-production.up.railway.app/parada/listar",
        type: "GET",
        datatype: "JSON",
        success:function ver_parada_mapa(respuesta){
            for (i = 0; i <= respuesta.length; i++){
                selectParadasIni.innerHTML += '<option value="'+respuesta[i].latitudPar+','+respuesta[i].longitudPar+'">'+respuesta[i].nombrePar+'</option>'
                selectParadasFin.innerHTML += '<option value="'+respuesta[i].latitudPar+','+respuesta[i].longitudPar+'">'+respuesta[i].nombrePar+'</option>'
                selectParadasBuscar.innerHTML += '<option id="'+respuesta[i].imgPar+'" onclick="nombreParadaVer()" value="'+respuesta[i].latitudPar+','+respuesta[i].longitudPar+'">'+respuesta[i].nombrePar+'</option>'

                //let imgParada = document.getElementById(respuesta[i].imgPar).id //Obtener la img
                //console.log(imgParada+" esto es la img")

                document.getElementById('ver_paradas').addEventListener('change',function(e){
                    let coords = e.target.value.split(",");
                    let nomParada = $(this).find('option:selected').text(); //Buscar el txt de la parada
                    map.flyTo(coords,17);
                    L.marker(coords,{alt: 'Parada Ver'}).addTo(map).bindPopup(function nombreParadaVer(){
                        if (e.target.value += respuesta){
                            
                            Swal.fire({
                                title: nomParada,
                                text: coords,
                                imageWidth: 400,
                                imageHeight: 200,
                                imageAlt: 'Imagen Parada',
                                customClass: {
                                    confirmButton: 'btn btn-dark'
                                  },
                                buttonsStyling: false,
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            })

                        }
                    });
                });
            }
        }
    });

});