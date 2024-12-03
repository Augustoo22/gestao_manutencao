package com.manutencao.carro.models;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Veiculo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String marca;
    private String modelo;
    private int anoFabricacao;
    private String numeroPlaca;
    private String cor;
    private String status;
    private LocalDate ultimaManutencao;
    private LocalDate proximaManutencaoProgramada;

    @Column(length = 500)
    private String observacoes;

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public int getAnoFabricacao() {
        return anoFabricacao;
    }

    public void setAnoFabricacao(int anoFabricacao) {
        this.anoFabricacao = anoFabricacao;
    }

    public String getNumeroPlaca() {
        return numeroPlaca;
    }

    public void setNumeroPlaca(String numeroPlaca) {
        this.numeroPlaca = numeroPlaca;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDate getUltimaManutencao() {
        return ultimaManutencao;
    }

    public void setUltimaManutencao(LocalDate ultimaManutencao) {
        this.ultimaManutencao = ultimaManutencao;
    }

    public LocalDate getProximaManutencaoProgramada() {
        return proximaManutencaoProgramada;
    }

    public void setProximaManutencaoProgramada(LocalDate proximaManutencaoProgramada) {
        this.proximaManutencaoProgramada = proximaManutencaoProgramada;
    }

    public String getObservacoes() {
        return observacoes;
    }

    public void setObservacoes(String observacoes) {
        this.observacoes = observacoes;
    }
}
