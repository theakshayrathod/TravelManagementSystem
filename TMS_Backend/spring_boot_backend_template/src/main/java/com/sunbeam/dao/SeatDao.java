package com.sunbeam.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entity.Seat;

public interface SeatDao extends JpaRepository<Seat, Long> {
	
	Optional<Seat> findByScheduleIdAndSeatNumber(Long sId,String sNo);
	
	List<Seat> findByScheduleId(Long id);

}
