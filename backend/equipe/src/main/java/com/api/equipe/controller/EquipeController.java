package com.api.equipe.controller;

import com.api.equipe.model.Equipe;
import com.api.equipe.repository.EquipeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/api/equipes")
public class EquipeController {

    @Autowired
    private EquipeRepository equipeRepository;

    @GetMapping
    public ResponseEntity<List<Equipe>> listarTodos() {
        List<Equipe> equipes = equipeRepository.findAll();
        return ResponseEntity.ok(equipes);
    }

    @Transactional
    @PostMapping
    public ResponseEntity<Equipe> criarEquipe(@RequestBody Equipe equipe) {
        Equipe novaEquipe = equipeRepository.save(equipe);
        return ResponseEntity.ok(novaEquipe);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Equipe> buscarPorId(@PathVariable Long id) {
        return equipeRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Equipe> atualizarEquipe(@PathVariable Long id, @RequestBody Equipe equipeAtualizada) {
        return equipeRepository.findById(id)
                .map(equipe -> {
                    atualizarDadosEquipe(equipe, equipeAtualizada);
                    Equipe atualizada = equipeRepository.save(equipe);
                    return ResponseEntity.ok(atualizada);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarEquipe(@PathVariable Long id) {
        if (equipeRepository.existsById(id)) {
            equipeRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    private void atualizarDadosEquipe(Equipe equipe, Equipe equipeAtualizada) {
        equipe.setNomeEquipe(equipeAtualizada.getNomeEquipe());
        equipe.setLiderEquipe(equipeAtualizada.getLiderEquipe());
        equipe.setNumeroMembros(equipeAtualizada.getNumeroMembros());
        equipe.setDataFormacao(equipeAtualizada.getDataFormacao());
        equipe.setAreaAtuacao(equipeAtualizada.getAreaAtuacao());
    }
}

