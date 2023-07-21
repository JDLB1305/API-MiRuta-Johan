package com.miruta.api.controladores;

import com.miruta.api.entidades.Conductor;
import com.miruta.api.modelos.ConductorModelo;
import com.miruta.api.servicios.ConductorServicioImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/conductor")
public class ConductorControlador {

    //Objeto para servicio de conductor
    @Autowired
    ConductorServicioImpl conductorServicio;



    //Metodo listar todos los conductores
    @GetMapping("/listar")
    public List<Conductor> listarConductoresCon() {
        return conductorServicio.listarConductores();
    }



    //Metodo guardar conductor nuevo
    @PostMapping("/guardar")
    public String guardarConductorCon(@RequestBody ConductorModelo conductorModelo) {
        return conductorServicio.guardarConductor(conductorModelo);
    }



    //Metodo eliminar conductor
    @DeleteMapping("/eliminar/{identificacionCon}")
    public String eliminarConductorCon(@PathVariable("identificacionCon") Long identificacionCon) {
        return conductorServicio.eliminarConductor(identificacionCon);
    }



    //Metodo para buscar conductor por idUsu
    @GetMapping("/buscar/{idUsu}")
    public Optional<Conductor> getConductorCon(@PathVariable("idUsu") Long idUsu) {
        return conductorServicio.getConductor(idUsu);
    }

}
