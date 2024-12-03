package com.manutencao.carro.controllers;

import com.manutencao.carro.models.Veiculo;
import com.manutencao.carro.repositories.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import java.util.List;

@RestController
@RequestMapping("/api/veiculos")
public class VeiculoController {

    @Autowired
    private VeiculoRepository veiculoRepository;

    @Operation(summary = "Lista todos os veículos")
    @GetMapping
    public List<Veiculo> listarTodos() {
        return veiculoRepository.findAll();
    }

    @Operation(summary = "Cria um novo veículo")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Veículo criado com sucesso"),
        @ApiResponse(responseCode = "400", description = "Erro de validação"),
    })
    @PostMapping
    public ResponseEntity<Veiculo> criarVeiculo(@RequestBody Veiculo veiculo) {
        Veiculo novoVeiculo = veiculoRepository.save(veiculo);
        return ResponseEntity.ok(novoVeiculo);
    }

    @Operation(summary = "Busca um veículo pelo ID")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Veículo encontrado"),
        @ApiResponse(responseCode = "404", description = "Veículo não encontrado"),
    })
    @GetMapping("/{id}")
    public ResponseEntity<Veiculo> buscarPorId(@PathVariable Long id) {
        return veiculoRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @Operation(summary = "Atualiza um veículo existente")
    @PutMapping("/{id}")
    public ResponseEntity<Veiculo> atualizarVeiculo(@PathVariable Long id, @RequestBody Veiculo veiculoAtualizado) {
        return veiculoRepository.findById(id)
                .map(veiculo -> {
                    veiculo.setMarca(veiculoAtualizado.getMarca());
                    veiculo.setModelo(veiculoAtualizado.getModelo());
                    veiculo.setAnoFabricacao(veiculoAtualizado.getAnoFabricacao());
                    veiculo.setNumeroPlaca(veiculoAtualizado.getNumeroPlaca());
                    veiculo.setCor(veiculoAtualizado.getCor());
                    veiculo.setStatus(veiculoAtualizado.getStatus());
                    veiculo.setUltimaManutencao(veiculoAtualizado.getUltimaManutencao());
                    veiculo.setProximaManutencaoProgramada(veiculoAtualizado.getProximaManutencaoProgramada());
                    veiculo.setObservacoes(veiculoAtualizado.getObservacoes());
                    Veiculo atualizado = veiculoRepository.save(veiculo);
                    return ResponseEntity.ok(atualizado);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
