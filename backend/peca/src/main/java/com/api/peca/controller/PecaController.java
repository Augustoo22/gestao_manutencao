package com.api.peca.controller;

import com.api.peca.model.Peca;
import com.api.peca.repository.PecaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.transaction.Transactional;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8081"}) // Correção da sintaxe da anotação
@RequestMapping("/api/pecas")
public class PecaController {

    @Autowired
    private PecaRepository pecaRepository;

    @GetMapping
    public ResponseEntity<List<Peca>> listarTodos() {
        List<Peca> pecas = pecaRepository.findAll();
        return ResponseEntity.ok(pecas);
    }

    @Transactional
    @PostMapping
    public ResponseEntity<Peca> criarPeca(@RequestBody Peca peca) {
        Peca novaPeca = pecaRepository.save(peca);
        return ResponseEntity.ok(novaPeca);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Peca> buscarPorId(@PathVariable Long id) {
        return pecaRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Peca> atualizarPeca(@PathVariable Long id, @RequestBody Peca pecaAtualizada) {
        return pecaRepository.findById(id)
                .map(peca -> {
                    atualizarDadosPeca(peca, pecaAtualizada);
                    Peca atualizada = pecaRepository.save(peca);
                    return ResponseEntity.ok(atualizada);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPeca(@PathVariable Long id) {
        if (pecaRepository.existsById(id)) {
            pecaRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    private void atualizarDadosPeca(Peca peca, Peca pecaAtualizada) {
        peca.setNome(pecaAtualizada.getNome());
        peca.setCodigo(pecaAtualizada.getCodigo());
        peca.setCategoria(pecaAtualizada.getCategoria());
        peca.setQuantidadeEstoque(pecaAtualizada.getQuantidadeEstoque());
        peca.setFornecedor(pecaAtualizada.getFornecedor());
    }
}
