package com.api.manutencao.controller;

import com.api.manutencao.model.Manutencao;
import com.api.manutencao.repository.ManutencaoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/api/manutencao")
public class ManutencaoController {

    @Autowired
    private ManutencaoRepository manutencaoRepository;

    // Endpoint para listar todas as manutenções
    @GetMapping
    public ResponseEntity<List<Manutencao>> listarTodos() {
        System.out.println("Requisição GET para listar todas as manutenções recebida");
        List<Manutencao> manutencaos = manutencaoRepository.findAll();
        return ResponseEntity.ok(manutencaos);
    }

    // Endpoint para criar uma nova manutenção
    @Transactional
    @PostMapping
    public ResponseEntity<Manutencao> criarManutencao(@RequestBody Manutencao manutencao) {
        System.out.println("Requisição POST para criar uma nova manutenção recebida");
        Manutencao novoManutencao = manutencaoRepository.save(manutencao);
        return ResponseEntity.ok(novoManutencao);
    }

    // Endpoint para buscar manutenção por ID
    @GetMapping("/{id}")
    public ResponseEntity<Manutencao> buscarPorId(@PathVariable Long id) {
        System.out.println("Requisição GET para buscar manutenção com ID: " + id);
        return manutencaoRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Endpoint para atualizar manutenção
    @PutMapping("/{id}")
    public ResponseEntity<Manutencao> atualizarManutencao(@PathVariable Long id, @RequestBody Manutencao manutencaoAtualizado) {
        System.out.println("Requisição PUT para atualizar manutenção com ID: " + id);
        return manutencaoRepository.findById(id)
                .map(manutencao -> {
                    atualizarDadosManutencao(manutencao, manutencaoAtualizado);
                    Manutencao atualizado = manutencaoRepository.save(manutencao);
                    return ResponseEntity.ok(atualizado);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Método para atualizar os dados de uma manutenção
    private void atualizarDadosManutencao(Manutencao manutencao, Manutencao manutencaoAtualizado) {
        manutencao.setCarro(manutencaoAtualizado.getCarro());
        manutencao.setDescricaoProblema(manutencaoAtualizado.getDescricaoProblema());
        manutencao.setDataHoraDeInicio(manutencaoAtualizado.getDataHoraDeInicio());
        manutencao.setDataHoraDeFim(manutencaoAtualizado.getDataHoraDeFim());
        manutencao.setEquipeResponsavel(manutencaoAtualizado.getEquipeResponsavel());
    }
}
