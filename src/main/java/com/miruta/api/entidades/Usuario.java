package com.miruta.api.entidades;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "usuarios")
public class Usuario implements Serializable {

    //Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUsu;

    @Column(length = 45, nullable = false)
    private String correoUsu;

    @Column(length = 200, nullable = false)
    private String contraseniaUsu;

    @Column(length = 45, nullable = false)
    private String nombreUsu;

    @Column(length = 1000, nullable = false)
    private String fotoUsu;

    @Column(length = 2, nullable = false)
    private Integer tipoUsuario;



    //Relaciones
    @OneToMany(mappedBy = "usuarios", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<UsuarioHasRuta> usuarioHasRuta;

    @OneToOne(mappedBy = "usuario", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Conductor conductor;



    //Constructores
    public Usuario() {
    }

    public Usuario(Long idUsu, String correoUsu, String contraseniaUsu, String nombreUsu, String fotoUsu, Integer tipoUsuario) {
        this.idUsu = idUsu;
        this.correoUsu = correoUsu;
        this.contraseniaUsu = contraseniaUsu;
        this.nombreUsu = nombreUsu;
        this.fotoUsu = fotoUsu;
        this.tipoUsuario = tipoUsuario;
    }



    //Getters
    public Long getIdUsu() {
        return idUsu;
    }

    public String getCorreoUsu() {
        return correoUsu;
    }

    public String getContraseniaUsu() {
        return contraseniaUsu;
    }

    public String getNombreUsu() {
        return nombreUsu;
    }

    public String getFotoUsu() {
        return fotoUsu;
    }

    public Integer getTipoUsuario() {
        return tipoUsuario;
    }

    public Set<UsuarioHasRuta> getUsuarioHasRuta() {
        return usuarioHasRuta;
    }

    public Conductor getConductor() {
        return conductor;
    }



    //Setters
    public void setIdUsu(Long idUsu) {
        this.idUsu = idUsu;
    }

    public void setCorreoUsu(String correoUsu) {
        this.correoUsu = correoUsu;
    }

    public void setContraseniaUsu(String contraseniaUsu) {
        this.contraseniaUsu = contraseniaUsu;
    }

    public void setNombreUsu(String nombreUsu) {
        this.nombreUsu = nombreUsu;
    }

    public void setFotoUsu(String fotoUsu) {
        this.fotoUsu = fotoUsu;
    }

    public void setTipoUsuario(Integer tipoUsuario) {
        this.tipoUsuario = tipoUsuario;
    }

    public void setUsuarioHasRuta(Set<UsuarioHasRuta> usuarioHasRuta) {
        this.usuarioHasRuta = usuarioHasRuta;
    }

    public void setConductor(Conductor conductor) {
        this.conductor = conductor;
    }



    //Metodo toString
    @Override
    public String toString() {
        return "Usuario{" +
                "idUsu=" + idUsu +
                ", correoUsu='" + correoUsu + '\'' +
                ", contraseniaUsu='" + contraseniaUsu + '\'' +
                ", nombreUsu='" + nombreUsu + '\'' +
                ", fotoUsu='" + fotoUsu + '\'' +
                ", tipoUsuario=" + tipoUsuario +
                ", usuarioHasRuta=" + usuarioHasRuta +
                ", conductor=" + conductor +
                '}';
    }



}
