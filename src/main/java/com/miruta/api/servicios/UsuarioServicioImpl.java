package com.miruta.api.servicios;

import com.miruta.api.modelos.UsuarioModeloLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.miruta.api.entidades.Usuario;
import com.miruta.api.interfaces.InUsuarioDao;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class UsuarioServicioImpl implements InUsuarioServicio{

    //Objeto DAO(Repositorio) de usuario
    @Autowired
    InUsuarioDao usuarioDao;

    //Objeto mail para manejo de correos electronicos
    @Autowired
    JavaMailSender mailSender;



    //Metodo listar todos los usuarios
    @Override
    public List<Usuario> listarUsuarios() {
        return usuarioDao.findAll();
    }



    //Metodo login usuario
    @Override
    public String loginUsuario(UsuarioModeloLogin usuarioModeloLogin) {
        String respuesta = "{\n" +
                "\"acceso\": false\n" +
                "}";

        Usuario usuario = usuarioDao.findByCorreoUsu(usuarioModeloLogin.getCorreoUsu()).orElse(null);

        if (usuario != null) {
            if (comprobarContrasenia(usuarioModeloLogin.getContraseniaUsu(), usuario.getContraseniaUsu())) {
                respuesta = "{\n" +
                        "\"acceso\": true,\n" +
                        "\"idUsu\": "+ usuario.getIdUsu() + "\n" +
                        "}";
            }
        }

        return respuesta;
    }



    //Metodo buscar usuario por identificacion
    @Override
    public Optional<Usuario> getUsuario(Long idUsu) {
        return usuarioDao.findById(idUsu);
    }



    //Metodo comprobar usuario nuevo
    @Override
    public String comprobarUsuario(Usuario usuario) {
        String respuesta;
        Usuario usuarioCorreo = usuarioDao.findByCorreoUsu(usuario.getCorreoUsu()).orElse(null);

        if (usuarioCorreo == null) {
            respuesta = "{\n" +
                    "\"permiso\": true,\n" +
                    "";

            int[] pines = new int[5];
            pines[0] = (int)(Math.random() * 10);
            pines[1] = (int)(Math.random() * 10);
            pines[2] = (int)(Math.random() * 10);
            pines[3] = (int)(Math.random() * 10);
            pines[4] = (int)(Math.random() * 10);

            respuesta += "\"pinUno\": "+pines[0]+",\n";
            respuesta += "\"pinDos\": "+pines[1]+",\n";
            respuesta += "\"pinTres\": "+pines[2]+",\n";
            respuesta += "\"pinCuatro\": "+pines[3]+",\n";
            respuesta += "\"pinCinco\": "+pines[4]+"\n";
            respuesta += "}";

            enviarEmail(pines, usuario);

        } else {
            respuesta = "{\n" +
                    "\"permiso\": false,\n" +
                    "\"mensaje\": 'Usuario con correo "+usuario.getCorreoUsu()+" ya existente'\n" +
                    "}";
        }

        return respuesta;
    }



    //Metodo eliminar usuario
    @Override
    public String eliminarUsuario(Long idUsu) {
        String respuesta = "{'respuesta' : 'Error eliminar usuario'}";

        if (usuarioDao.existsById(idUsu)){
            usuarioDao.deleteById(idUsu);
            respuesta = "{'respuesta' : 'Usuario eliminado con exito'}";
        }
        return respuesta;
    }



    // Metodo actualizar usuario
    @Override
    public String actualizarUsuario(Usuario usu){
        String respuesta = "{'respuesta' : 'No se realizo la actualizacion del usuario'}";

        Usuario usuario = usuarioDao.findById(usu.getIdUsu()).orElseThrow(() -> new NoSuchElementException("El usuario con identificación " + usu.getIdUsu() + " no existe en la base de datos"));

        if(usuario.getIdUsu() != null){
            usuario.setContraseniaUsu(usu.getContraseniaUsu());
            usuario.setNombreUsu(usu.getNombreUsu());
            usuario.setFotoUsu(usu.getFotoUsu());

            usuarioDao.save(usuario);

            respuesta = "{'respuesta' : 'Se realizo actualizacion del usuario'}";
        }
        
        return respuesta;
    }



    //Metodo guardar usuario nuevo
    @Override
    public String guardarUsuario(Usuario usuario) {
        usuario.setContraseniaUsu(encryptContrasenia(usuario.getContraseniaUsu()));
        usuarioDao.save(usuario);

        // Obtener ID del Usuario creado recien
        Long idUsu = usuario.getIdUsu();

        // Creacion de JSON incluyendo el ID
        String jsonResponse = "{\n" +
                "\"registro\": true,\n" +
                "\"idUsu\": " + idUsu + "\n" +
                "}";
        
        return jsonResponse;
    }







    //Metodo para enviar el email con los pines de comprobacion
    private void enviarEmail(int[] pines, Usuario usuario) {
        SimpleMailMessage emailMessage = new SimpleMailMessage();
        String message = "Pin de comprobacion\n";

        emailMessage.setFrom("miruta983@gmail.com");
        emailMessage.setTo(usuario.getCorreoUsu());
        emailMessage.setSubject("Comprobacion de correo electronico Mi Ruta");

        for(int pin: pines) {
            message += pin;
        }

        emailMessage.setText(message);

        mailSender.send(emailMessage);
    }



    //Metodo para encriptar las contraseñas
    @Override
    public String encryptContrasenia(String contraseniaUsu) {
        PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
        return passwordEncoder.encode(contraseniaUsu);
    }



    //Metodo para comprobar las contraseñas encriptadas
    @Override
    public Boolean comprobarContrasenia(String contraseniaUsu, String contraseniaEncrypt) {
        PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
        return passwordEncoder.matches(contraseniaUsu, contraseniaEncrypt);
    }
}
