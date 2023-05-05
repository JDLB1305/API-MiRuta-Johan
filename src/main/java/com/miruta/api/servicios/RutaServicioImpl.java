package com.miruta.api.servicios;

import com.miruta.api.entidades.Ruta;
import com.miruta.api.entidades.UsuarioHasRuta;

import com.miruta.api.interfaces.InRutaDao;
import com.miruta.api.interfaces.InUsuarioDao;
import com.miruta.api.interfaces.InUsuarioHasRutaDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RutaServicioImpl implements InRutaServicio{

    //Objeto DAO(Repositorio) de ruta
    @Autowired
    private InRutaDao rutaDao;

    //Objeto DAO(Repositorio) de usuarioHasRuta
    @Autowired
    private InUsuarioHasRutaDao usuarioHasRutaDao;

    //Objeto DAO(Repositorio) de usuario
    @Autowired
    private InUsuarioDao usuarioDao;



    //Metodo listar todas las rutas
    @Override
    public List<Ruta> listarRutas() {
        return rutaDao.findAll();
    }



    //Metodo listar rutas favoritas para un usuario con su correo
    @Override
    public List<Ruta> listarRutasFavoritas(String correoUsuario) {
        List<Long> listaIdRuta = new ArrayList<>();

        for (UsuarioHasRuta usuHasRuta: usuarioHasRutaDao.findAll()) {
            if (usuHasRuta.getUsuarios().getCorreoUsu().equals(correoUsuario)) {
                listaIdRuta.add(usuHasRuta.getRutas().getIdRut());
            }
        }

        return rutaDao.findAllById(listaIdRuta);
    }



    //Metodo agregar rutas favoritas para un usuario
    @Override
    public String agregarRutaFavorita(UsuarioHasRuta usuarioHasRuta) {


        return "{'respuesta': 'Agregada a favoritos'}";
    }

}