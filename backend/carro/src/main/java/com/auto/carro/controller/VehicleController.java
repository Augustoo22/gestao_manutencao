package com.auto.carro.controller;

import com.auto.carro.model.Vehicle;
import com.auto.carro.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {

    @Autowired
    private VehicleRepository vehicleRepository;

    // Criar um novo veículo
    @PostMapping
    public ResponseEntity<Vehicle> createVehicle(@RequestBody Vehicle vehicle) {
        try {
            Vehicle savedVehicle = vehicleRepository.save(vehicle);
            return new ResponseEntity<>(savedVehicle, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Obter todos os veículos
    @GetMapping
    public ResponseEntity<List<Vehicle>> getAllVehicles() {
        try {
            List<Vehicle> vehicles = vehicleRepository.findAll();
            if (vehicles.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(vehicles, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Obter um veículo por ID
    @GetMapping("/{id}")
    public ResponseEntity<Vehicle> getVehicleById(@PathVariable("id") Long id) {
        Optional<Vehicle> vehicleData = vehicleRepository.findById(id);

        if (vehicleData.isPresent()) {
            return new ResponseEntity<>(vehicleData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Atualizar um veículo por ID
    @PutMapping("/{id}")
    public ResponseEntity<Vehicle> updateVehicle(@PathVariable("id") Long id, @RequestBody Vehicle vehicle) {
        Optional<Vehicle> vehicleData = vehicleRepository.findById(id);

        if (vehicleData.isPresent()) {
            Vehicle existingVehicle = vehicleData.get();
            existingVehicle.setMarca(vehicle.getMarca());
            existingVehicle.setModelo(vehicle.getModelo());
            existingVehicle.setAnoFabricacao(vehicle.getAnoFabricacao()); // Corrigido
            existingVehicle.setNumeroPlaca(vehicle.getNumeroPlaca());
            existingVehicle.setCor(vehicle.getCor());
            existingVehicle.setStatus(vehicle.getStatus());
            existingVehicle.setUltimaManutencao(vehicle.getUltimaManutencao());
            existingVehicle.setProximaManutencaoProgramada(vehicle.getProximaManutencaoProgramada());
            existingVehicle.setObservacoes(vehicle.getObservacoes());

            Vehicle updatedVehicle = vehicleRepository.save(existingVehicle);
            return new ResponseEntity<>(updatedVehicle, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Deletar um veículo por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteVehicle(@PathVariable("id") Long id) {
        try {
            vehicleRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
