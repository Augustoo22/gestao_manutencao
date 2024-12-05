package com.api.manutencao.repository;

import com.api.manutencao.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ManutencaoRepository extends JpaRepository <Manutencao, Long> {
    
}
