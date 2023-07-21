package com.miruta.api.servicios;

import com.miruta.api.entidades.Conductor;
import com.miruta.api.entidades.Usuario;
import com.miruta.api.interfaces.InConductorDao;
import com.miruta.api.interfaces.InUsuarioDao;
import com.miruta.api.modelos.ConductorModelo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConductorServicioImpl implements InConductorServicio {

    //Objeto DAO(Repositorio) de conductor
    @Autowired
    InConductorDao conductorDao;

    //Objeto DAO(Repositorio) de usuario
    @Autowired
    InUsuarioDao usuarioDao;



    //Metodo listar todos los conductores
    @Override
    public List<Conductor> listarConductores() {
        return conductorDao.findAll();
    }



    //Metodo guardar conductor nuevo
    @Override
    public String guardarConductor(ConductorModelo conductorModelo) {
        String respuesta = "{'respuesta': 'Error al Agregar conductor'}";

        if (!conductorDao.existsById(conductorModelo.getIdentificacionCon())) {
            Usuario usuario = usuarioDao.findById(conductorModelo.getIdUsu()).orElse(null);

            if (usuario != null) {
                Conductor conductor = conductorDao.findByUsuario(usuario).orElse(null);

                if (conductor == null) {
                    Conductor conductorGuardar = new Conductor(conductorModelo.getIdentificacionCon(), usuario);
                    conductorDao.save(conductorGuardar);
                    respuesta = "{'respuesta': 'Conductor agregado con exito'}";

                } else {
                    respuesta = "{'respuesta': 'Error al Agregar conductor/usuario ya es un conductor'}";
                }

            } else {
                respuesta = "{'respuesta': 'Error al Agregar conductor/usuario no existente'}";
            }
        }

        return respuesta;
    }



    //Metodo eliminar conductor
    @Override
    public String eliminarConductor(Long identificacionCon) {
        String respuesta = "{'respuesta' : 'Error eliminar conductor'}";

        if (conductorDao.existsById(identificacionCon)) {
            conductorDao.deleteById(identificacionCon);
            respuesta = "{'respuesta' : 'Conductor eliminado con exito'}";
        }

        return respuesta;
    }



    //Metodo para buscar conductor por idUsu
    @Override
    public Optional<Conductor> getConductor(Long idUsu) {
        Usuario usuario = usuarioDao.findById(idUsu).orElse(null);

        if (usuario != null) {
            if (usuario.getTipoUsuario() == 2) {
                return conductorDao.findByUsuario(usuario);
            }
        }

        return Optional.empty();
    }



}
