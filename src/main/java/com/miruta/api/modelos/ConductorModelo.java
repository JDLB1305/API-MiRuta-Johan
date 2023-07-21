package com.miruta.api.modelos;

public class ConductorModelo {

    //Atributos
    private Long identificacionCon;
    private Long idUsu;


    //Constructores
    public ConductorModelo() {
    }

    public ConductorModelo(Long identificacionCon, Long idUsu) {
        this.identificacionCon = identificacionCon;
        this.idUsu = idUsu;
    }



    //Getters
    public Long getIdentificacionCon() {
        return identificacionCon;
    }

    public Long getIdUsu() {
        return idUsu;
    }



    //Setters
    public void setIdentificacionCon(Long identificacionCon) {
        this.identificacionCon = identificacionCon;
    }

    public void setIdUsu(Long idUsu) {
        this.idUsu = idUsu;
    }



}
