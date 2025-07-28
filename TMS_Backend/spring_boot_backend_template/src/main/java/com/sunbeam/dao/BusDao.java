package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entity.Bus;

public interface BusDao extends JpaRepository<Bus, Long> {
	boolean existsByRegistrationNumber(String number);
    List<Bus> findByOperatorOperatorId(Long id);
	
}
