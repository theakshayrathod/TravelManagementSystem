package com.sunbeam.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entity.Operator;


public interface OperatorDao extends JpaRepository<Operator, Long> {
	
	
	Optional<Operator> findByOperatorId(Long operatorId);

}
