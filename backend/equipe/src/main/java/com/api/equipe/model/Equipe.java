package com.api.equipe.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_equipe")
public class Equipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomeEquipe;
    private String liderEquipe;
    private int numeroMembros;
    private String dataFormacao;
    private String areaAtuacao;

    @Version
    private Integer version;

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeEquipe() {
        return nomeEquipe;
    }

    public void setNomeEquipe(String nomeEquipe) {
        this.nomeEquipe = nomeEquipe;
    }

    public String getLiderEquipe() {
        return liderEquipe;
    }

    public void setLiderEquipe(String liderEquipe) {
        this.liderEquipe = liderEquipe;
    }

    public int getNumeroMembros() {
        return numeroMembros;
    }

    public void setNumeroMembros(int numeroMembros) {
        this.numeroMembros = numeroMembros;
    }

    public String getDataFormacao() {
        return dataFormacao;
    }

    public void setDataFormacao(String dataFormacao) {
        this.dataFormacao = dataFormacao;
    }

    public String getAreaAtuacao() {
        return areaAtuacao;
    }

    public void setAreaAtuacao(String areaAtuacao) {
        this.areaAtuacao = areaAtuacao;
    }
}
