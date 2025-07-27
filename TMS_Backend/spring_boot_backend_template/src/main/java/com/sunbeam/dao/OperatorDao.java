package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entity.Operator;

public interface OperatorDao extends JpaRepository<Operator, Long> {

}
