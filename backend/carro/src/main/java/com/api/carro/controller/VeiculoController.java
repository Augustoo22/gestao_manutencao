package com.api.carro.controller;

import com.api.carro.model.Veiculo;
import com.api.carro.repository.VeiculoRepository;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/veiculos")
public class VeiculoController {

    @Autowired
    private VeiculoRepository veiculoRepository;

    @GetMapping
    public ResponseEntity<List<Veiculo>> listarTodos() {
        List<Veiculo> veiculos = veiculoRepository.findAll();
        return ResponseEntity.ok(veiculos);
    }

    @Transactional
    @PostMapping
    public ResponseEntity<Veiculo> criarVeiculo(@RequestBody Veiculo veiculo) {
        Veiculo novoVeiculo = veiculoRepository.save(veiculo);
        return ResponseEntity.ok(novoVeiculo);
    }
    

    @GetMapping("/{id}")
    public ResponseEntity<Veiculo> buscarPorId(@PathVariable Long id) {
        return veiculoRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Veiculo> atualizarVeiculo(@PathVariable Long id, @RequestBody Veiculo veiculoAtualizado) {
        return veiculoRepository.findById(id)
            .map(veiculo -> {
                atualizarDadosVeiculo(veiculo, veiculoAtualizado);
                Veiculo atualizado = veiculoRepository.save(veiculo);
                return ResponseEntity.ok(atualizado);
            })
            .orElse(ResponseEntity.notFound().build());
    }
    

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarVeiculo(@PathVariable Long id) {
        if (veiculoRepository.existsById(id)) {
            veiculoRepository.deleteById(id);   
            return ResponseEntity.noContent().build(); 
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    

    private void atualizarDadosVeiculo(Veiculo veiculo, Veiculo veiculoAtualizado) {
        veiculo.setMarca(veiculoAtualizado.getMarca());
        veiculo.setModelo(veiculoAtualizado.getModelo());
        veiculo.setAnoFabricacao(veiculoAtualizado.getAnoFabricacao());
        veiculo.setNumeroPlaca(veiculoAtualizado.getNumeroPlaca());
        veiculo.setCor(veiculoAtualizado.getCor());
        veiculo.setStatus(veiculoAtualizado.getStatus());
        veiculo.setUltimaManutencao(veiculoAtualizado.getUltimaManutencao());
        veiculo.setProximaManutencaoProgramada(veiculoAtualizado.getProximaManutencaoProgramada());
        veiculo.setObservacoes(veiculoAtualizado.getObservacoes());
    }
}
