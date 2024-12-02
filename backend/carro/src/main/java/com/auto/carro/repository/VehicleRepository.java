package com.auto.carro.repository;

import com.auto.carro.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

    List<Vehicle> findByMarca(String marca);

    List<Vehicle> findByStatus(String status);

    List<Vehicle> findByAnoFabricacao(String anoFabricacao);
}
