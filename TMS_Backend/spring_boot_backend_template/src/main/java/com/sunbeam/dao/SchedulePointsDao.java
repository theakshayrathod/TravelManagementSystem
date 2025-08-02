package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entity.SchedulePoint;

public interface SchedulePointsDao extends JpaRepository<SchedulePoint, Long> {
	
	

}
