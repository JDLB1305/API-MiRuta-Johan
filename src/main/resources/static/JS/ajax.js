$(document).ready(function(){

    //Eliminar Parada
    $('#eliminarParada').on('click', function(){
        let eliminar_parada = $('#idParadaEli').val();
        console.log(eliminar_parada)
        $.ajax({
            url: "https://api-miruta-johan-production.up.railway.app/parada/eliminar/"+parseInt(eliminar_parada),
            type: "DELETE",
            datatype: "JSON",
            success: function eliminar_parada(respuesta) {
                if (respuesta){
                    Swal.fire({
                        title: 'Eliminada!',
                        text: 'Se elimino la parada 😴',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                }
            }
        })
    });

    //Agregar Parada
    $('#agregarParada').on('click', function(){
        let datos = {
            nombrePar: $('#nombreParada').val(),
            direccionPar: $('#direcParada').val(),
            latitudPar: $('#latiParada').val(),
            longitudPar: $('#longiParada').val(),
            imgPar: $('#imgParada').val()
        }
        let datosEnvio = JSON.stringify(datos)
        console.log(datosEnvio)
        $.ajax({
            url: "https://api-miruta-johan-production.up.railway.app/parada/guardar",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            datatype: "JSON",
            success:function agregar_parada(respuesta){
                if (respuesta){
                    Swal.fire({
                        title: 'Agregada!',
                        text: 'Se agrego la parada ⭐',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                }
            }
        });
    });

    //Actualizar Parada
    $('#actualizarParada').on('click', function() {
        let datos = {
            idPar: $('#idParMod').val(),
            nombrePar: $('#nombreParadaMod').val(),
            direccionPar: $('#direcParadaMod').val(),
            longitudPar: $('#longiParadaMod').val(),
            latitudPar: $('#latiParadaMod').val(),
            imgPar: $('#imgParadaMod').val()
        }
        let datosEnvio = JSON.stringify(datos)
        console.log(datosEnvio)
        $.ajax({
            url: "https://api-miruta-johan-production.up.railway.app/parada/actualizar",
            type: "PUT",
            data: datosEnvio,
            contentType: "application/JSON",
            datatype: "JSON",
            success:function actualizar_parada(respuesta){
                if (respuesta == "{'respuesta' : 'Se realizo actualizacion de la parada'}"){
                    Swal.fire({
                        title: 'Actualizada!',
                        text: 'Se actualizo la parada ⭐',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                } else {
                    Swal.fire({
                        title: 'Oh oh!',
                        text: 'Hubo un error al actualizar 😥',
                        icon: 'error',
                        confirmButtonText: 'Vale!'
                    })
                }
            }
        });
    });

    //Eliminar Ruta
    $('#eliminarRuta').on('click', function(){
        let eliminar_ruta = $('#idRutaEli').val();
        console.log(eliminar_ruta)
        $.ajax({
            url: "https://api-miruta-johan-production.up.railway.app/ruta/eliminar/"+parseInt(eliminar_ruta),
            type: "DELETE",
            datatype: "JSON",
            success: function eliminar_ruta(respuesta) {
                if (respuesta == "{'respuesta' : 'Ruta eliminada con exito'}"){
                    Swal.fire({
                        title: 'Eliminada!',
                        text: 'Se elimino la ruta 🗺',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Error al eliminar ruta 😫',
                        icon: 'error',
                        confirmButtonText: 'Ok!'
                    })
                }
            }
        })
    });

    //Agregar Ruta
    $('#agregarRuta').on('click', function(){
        let datos = {
            lugarInicioRut: $('#LugarInicio').val(),
            lugarDestinoRut: $('#LugarFinal').val(),
            horaInicioRut: $('#HI').val(),
            horaFinalRut: $('#HF').val(),
            diasDisponiblesRut: $('#diasDisponibles').val()
        }
        let datosEnvio = JSON.stringify(datos)
        console.log(datosEnvio)
        $.ajax({
            url: "https://api-miruta-johan-production.up.railway.app/ruta/guardar",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            datatype: "JSON",
            success:function agregar_ruta(respuesta){
                if (respuesta == "{'respuesta': 'Ruta agregada con exito'}"){
                    Swal.fire({
                        title: 'Agregada!',
                        text: 'Se agrego la ruta ⭐',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Error al agregar ruta 🤔',
                        icon: 'error',
                        confirmButtonText: 'Ok!'
                    })
                }
            }
        });
    });

    //Actualizar Ruta
    $('#actualizarRuta').on('click', function() {
        let datos = {
            idRut: $('#idRutMod').val(),
            lugarInicioRut: $('#LugarInicioMod').val(),
            lugarDestinoRut: $('#LugarFinalMod').val(),
            horaInicioRut: $('#HIMod').val(),
            horaFinalRut: $('#HFMod').val(),
            diasDisponiblesRut: $('#diasDisponiblesMod').val()
        }
        let datosEnvio = JSON.stringify(datos)
        console.log(datosEnvio)
        $.ajax({
            url: "https://api-miruta-johan-production.up.railway.app/ruta/actualizar",
            type: "PUT",
            data: datosEnvio,
            contentType: "application/JSON",
            datatype: "JSON",
            success:function actualizar_ruta(respuesta){
                if (respuesta == "{'respuesta' : 'Se realizo actualizacion de la ruta'}"){
                    Swal.fire({
                        title: 'Actualizada!',
                        text: 'Se actualizo la ruta ⭐',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                } else {
                    Swal.fire({
                        title: 'Oh oh!',
                        text: 'Hubo un error al actualizar 😥',
                        icon: 'error',
                        confirmButtonText: 'Vale!'
                    })
                }
            }
        });
    });

    //Agregar Bus
    $('#agregarBus').on('click', function() {
        let datos = {
            placaBus: $('#placa').val(),
            latitudBus: parseFloat($('#latiBus').val()), 
            longitudBus: parseFloat($('#longiBus').val()), 
            identificacionCon: $('#identificacionCon').val() 
        };
    
        let datosEnvio = JSON.stringify(datos);
        console.log(datosEnvio);
    
        $.ajax({
            url: "https://api-miruta-johan-production.up.railway.app/bus/guardar",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON", 
            dataType: "JSON", 
            success: function agregar_bus(respuesta) {
                if (respuesta === "{'respuesta': 'Bus agregado con exito'}") { 
                    Swal.fire({
                        title: 'Agregado!',
                        text: 'Se agregó un bus ⭐🚌',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Error al agregar bus 💔🚌',
                        icon: 'error',
                        confirmButtonText: 'Ok!'
                    });
                }
            },
            error: function(error) {
                Swal.fire({
                    title: 'Petición recibida!',
                    text: 'Petición agregada',
                    icon: 'success',
                    confirmButtonText: 'Ok!'
                });
            }
        });
    });

    //Eliminar Bus
    $('#eliminarBus').on('click', function(){
        let eliminar_bus = $('#BusEli').val();
        console.log(eliminar_bus)
        $.ajax({
            url: "https://api-miruta-johan-production.up.railway.app/bus/eliminar/"+eliminar_bus,
            type: "DELETE",
            datatype: "JSON",
            success: function eliminar_bus(respuesta) {
                if (respuesta == "{'respuesta':'Bus eliminado con exito'}"){
                    Swal.fire({
                        title: 'Eliminado!',
                        text: 'Se elimino el bus 🥰',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Error al eliminar bus 💢',
                        icon: 'error',
                        confirmButtonText: 'Ok!'
                    })
                }
            }
        })
    });

    //Login
    $('#ingreso_usu').on('click', function(){
        let datos = {
            correoUsu: $('#correo_ing').val(),
            contraseniaUsu: $('#contraseña_ing').val()
        }
        let datosEnvio = JSON.stringify(datos)
        //console.log(datosEnvio)
        $.ajax({
            url: "https://api-miruta-johan-production.up.railway.app/usuario/login",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            datatype: "JSON",
            success:function ingresar(respuesta){
                let coco = JSON.stringify(respuesta)
                console.log(coco)
                if (respuesta == "{\n\"acceso\": false\n}"){
                    Swal.fire({
                        title: 'Denegado!',
                        text: 'Usuario no encontrado 😓',
                        icon: 'error',
                        confirmButtonText: 'Ok!'
                    })
                } else {
                    if (respuesta == "{\n\"acceso\": true,\n\"idUsu\": 1\n}" || respuesta == "{\n\"acceso\": true,\n\"idUsu\": 2\n}" || respuesta == "{\n\"acceso\": true,\n\"idUsu\": 3\n}"){
                        let correoValLocal = $('#correo_ing').val()
                        localStorage.setItem("UsuCorreo", correoValLocal); //Esto guarda la variable de sesion

                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                          
                        Toast.fire({
                            icon: 'success',
                            title: 'Bienvenido al sistema'
                        })
                
                        //Redirección a admin.html
                        setTimeout( function() { window.location = "administrador.html"; }, 3200 );
                    } else  {
                        let correoValLocal = $('#correo_ing').val()
                        localStorage.setItem("UsuCorreo", correoValLocal); //Esto guarda la variable de sesion
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                          
                        Toast.fire({
                            icon: 'success',
                            title: 'Bienvenido al sistema'
                        })
                
                        //Redirección a index.html
                        setTimeout( function() { window.location = "index.html"; }, 3200 );
                    }
                }
            }
        });
    });

    //Agregar Usuario Admin
    $('#agregarNewUsu').on('click', function(){
        let datos = {
            identificacionUsu: $('#identiUsu').val(),
            correoUsu: $('#correoUsu').val(),
            contraseniaUsu: $('#contraseñaUsu').val(),
            nombreUsu: $('#nombreUsu').val(),
            fotoUsu: $('#fotoNewUsu').val(),
            tipoUsuario: $('#RolUsu').val()
        }
        let datosEnvio = JSON.stringify(datos)
        console.log(datosEnvio)
        $.ajax({
            url: "https://api-miruta-johan-production.up.railway.app/usuario/guardar",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            datatype: "JSON",
            success:function agregar_usuario(respuesta){
                //let coco = JSON.stringify(respuesta)
                //console.log(coco)
                if (respuesta == "{\n\"registro\": true\n}"){
                    Swal.fire({
                        title: 'Agregado!',
                        text: 'Se agrego el usuario 👍',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Error al agregar el usuario 👎',
                        icon: 'error',
                        confirmButtonText: 'Ok!'
                    })
                }
            }
        });
    });

    //Eliminar Usuario
    $('#eliminarUsuario').on('click', function(){
        let eliminar_usu = $('#UsuEli').val();
        console.log(eliminar_usu)
        $.ajax({
            url: "https://api-miruta-johan-production.up.railway.app/usuario/eliminar/"+eliminar_usu,
            type: "DELETE",
            datatype: "JSON",
            success: function eliminar_usuario(respuesta) {
                if (respuesta == "{'respuesta' : 'Usuario eliminado con exito'}"){
                    Swal.fire({
                        title: 'Eliminado!',
                        text: 'Se elimino el usuario 🥰',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Error al eliminar el usuario 💢',
                        icon: 'error',
                        confirmButtonText: 'Ok!'
                    })
                }
            }
        })
    });

    //Agregar usuario por la persona
    $('#boton_registrar').on('click', function(){
        let datos = {
            correoUsu: $('#correo_usu').val(),
            contraseniaUsu: $('#contraseña_usu').val(),
            nombreUsu: $('#nombre_completo_usu').val(),
            fotoUsu: $('#foto_usuario_regi').val(),
            tipoUsuario: 0
        }
        let datosEnvio = JSON.stringify(datos)
        console.log(datosEnvio)
        $.ajax({
            url: "https://api-miruta-johan-production.up.railway.app/usuario/comprobar",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            datatype: "JSON",
            success:function agregar_usuario(respuesta){
                console.log(respuesta)
                console.log(typeof respuesta + " Este es el tipo de dato")
                
                //Procesamos la respuesta
                function getNumbersInString(string) {
                    var tmp = string.split("");
                    var map = tmp.map(function(current) {
                      if (!isNaN(parseInt(current))) {
                        return current;
                      }
                    });
                  
                    var numbers = map.filter(function(value) {
                      return value != undefined;
                    });
                  
                    return numbers.join("");
                }

                let respuestaProcesada = getNumbersInString(respuesta)

                let pin = prompt("Revise su e-mail e inserte el PIN: ")
                
                if (respuestaProcesada == parseInt(pin)){
                    $.ajax({
                        url: "https://api-miruta-johan-production.up.railway.app/usuario/guardar",
                        type: "POST",
                        data: datosEnvio,
                        contentType: "application/JSON",
                        datatype: "JSON",
                        success:function agregar_usuario(respuesta){
                            //alert(respuesta)
                            if (respuesta){
                                Swal.fire({
                                    title: 'Felicitaciones!',
                                    text: 'Se ha registrado con exito ❤',
                                    icon: 'success',
                                    confirmButtonText: 'Wow!'
                                })
                            }

                            setTimeout( function() { window.location = "index.html"; }, 1500 );
                        }
                    });                   
                } else {
                    Swal.fire({
                        title: 'Ohhhh!',
                        text: 'Pin incorrecto',
                        icon: 'error',
                        confirmButtonText: '🤕'
                    })
                }
            }
        });
    
    });

    //Actualizar Usuario
    $('#actualizarUsuario').on('click', function() {
        let datos = {
            idUsu: $('#idUsuMod').val(),
            correoUsu: $('#correoUsuMod').val(),
            contraseniaUsu: $('#contraseñaUsuMod').val(),
            nombreUsu: $('#nombreUsuMod').val(),
            fotoUsu: $('#fotoNewUsuMod').val(),
            tipoUsuario: $('#RolUsuMod').val()
        }
        let datosEnvio = JSON.stringify(datos)
        console.log(datosEnvio)
        $.ajax({
            url: "https://api-miruta-johan-production.up.railway.app/usuario/actualizar",
            type: "PUT",
            data: datosEnvio,
            contentType: "application/JSON",
            datatype: "JSON",
            success:function actualizar_usuario(respuesta){
                if (respuesta == "{'respuesta' : 'Se realizo actualizacion del usuario'}"){
                    Swal.fire({
                        title: 'Actualizada!',
                        text: 'Se actualizo el suaurio ⭐',
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    })
                } else {
                    Swal.fire({
                        title: 'Oh oh!',
                        text: 'Hubo un error al actualizar 😥',
                        icon: 'error',
                        confirmButtonText: 'Vale!'
                    })
                }
            }
        });
    });

});