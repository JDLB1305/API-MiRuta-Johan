package com.miruta.api.servicios;

import com.miruta.api.entidades.Conductor;
import com.miruta.api.modelos.ConductorModelo;

import java.util.List;
import java.util.Optional;

public interface InConductorServicio {

    //Metodo listar todos los conductores
    List<Conductor> listarConductores();



    //Metodo guardar conductor nuevo
    String guardarConductor(ConductorModelo conductorModelo);



    //Metodo eliminar conductor
    String eliminarConductor(Long identificacionCon);



    //Metodo para buscar conductor por idUsu
    Optional<Conductor> getConductor(Long idUsu);

}
