package com.api.manutencao.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_manutencao")
public class Manutencao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String carro;
    private String descricaoProblema;
    private String dataHoraDeInicio;
    private String dataHoraDeFim;
    private String equipeResponsavel;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCarro() {
        return carro;
    }

    public void setCarro(String carro) {
        this.carro = carro;
    }

    public String getDescricaoProblema() {
        return descricaoProblema;
    }

    public void setDescricaoProblema(String descricaoProblema) {
        this.descricaoProblema = descricaoProblema;
    }

    public String getDataHoraDeInicio() {
        return dataHoraDeInicio;
    }

    public void setDataHoraDeInicio(String dataHoraDeInicio) {
        this.dataHoraDeInicio = dataHoraDeInicio;
    }

    public String getDataHoraDeFim() {
        return dataHoraDeFim;
    }

    public void setDataHoraDeFim(String dataHoraDeFim) {
        this.dataHoraDeFim = dataHoraDeFim;
    }

    public String getEquipeResponsavel() {
        return equipeResponsavel;
    }

    public void setEquipeResponsavel(String equipeResponsavel) {
        this.equipeResponsavel = equipeResponsavel;
    }
}
