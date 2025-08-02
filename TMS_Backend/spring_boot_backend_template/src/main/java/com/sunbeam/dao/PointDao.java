package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entity.Point;

public interface PointsDao extends JpaRepository<Point, Long>{	
	boolean existsByNameAndAddress(String name , String address);

}
