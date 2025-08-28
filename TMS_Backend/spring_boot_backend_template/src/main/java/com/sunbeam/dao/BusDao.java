package com.sunbeam.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entity.Bus;
import com.sunbeam.entity.Operator;

public interface BusDao extends JpaRepository<Bus, Long> {
	boolean existsByRegistrationNumber(String number);
    List<Bus> findByOperatorOperatorId(Long id);
	List<Bus> findByOperatorUserId(Long id);
	List<Bus> findByIdAndOperatorOperatorId(Long id, Long oId);
//	Optional<Bus> FindByIdAndOperatorOperatorId(Long id, Long oId);
	
}
