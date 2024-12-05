package com.api.manutencao.controller;

import com.api.manutencao.model.Manutencao;
import com.api.manutencao.repository.ManutencaoRepository;
import jakarta.transaction.Transaction;
import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.beans.Transient;
import java.util.List;

@RestController
@RequestMapping("/api/manutencao")
public class ManutencaoController {
    
    @Autowired
    private ManutencaoRepository manutencaoRepository;

    @GetMapping
    public ResponseEntity<List<Manutencao>> listarTodos() {
        List<Manutencao> manutencaos = manutencaoRepository.findAll();
        return ResponseEntity.ok(manutencaos);
    }

    @Transactional
    @PostMapping
    public ResponseEntity<Manutencao> criarManutencao(@RequestBody Manutencao manutencao) {
        Manutencao novoManutencao = manutencaoRepository.save(manutencao);
        return ResponseEntity.ok(novoManutencao);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Manutencao> buscarporId(@PathVariable Long id) {
        return manutencaoRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Manutencao> atualizarManutencao(@PathVariable Long id, @RequestBody Manutencao manutencaoAtualizado) {
        return manutencaoRepository.findById(id)
                .map(manutencao -> {
                    atualizarDadosManutencao(manutencao, manutencaoAtualizado);
                    Manutencao atualizado = manutencaoRepository.save(manutencao);
                    return ResponseEntity.ok(atualizado);    
                }).orElse(ResponseEntity.notFound().build());
    }

    // Método para atualizar os dados de Manutencao
    private void atualizarDadosManutencao(Manutencao manutencao, Manutencao manutencaoAtualizado) {
        manutencao.setCarro(manutencaoAtualizado.getCarro());
        manutencao.setDescricaoProblema(manutencaoAtualizado.getDescricaoProblema());
        manutencao.setDataHoraDeInicio(manutencaoAtualizado.getDataHoraDeInicio());
        manutencao.setDataHoraDeFim(manutencaoAtualizado.getDataHoraDeFim());
        manutencao.setEquipeResponsavel(manutencaoAtualizado.getEquipeResponsavel());
    }
}
