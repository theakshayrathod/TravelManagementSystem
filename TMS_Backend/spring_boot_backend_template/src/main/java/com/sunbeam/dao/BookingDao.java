package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entity.Booking;

public interface BookingDao extends JpaRepository<Booking, Long> {
List<Booking> findByScheduleBusOperatorOperatorId(Long id);
}
