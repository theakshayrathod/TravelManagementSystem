package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entity.SchedulePoint;

public interface SchedulePointsDao extends JpaRepository<SchedulePoint, Long> {
	
	List<SchedulePoint> findByScheduleId(Long id);
	

}
