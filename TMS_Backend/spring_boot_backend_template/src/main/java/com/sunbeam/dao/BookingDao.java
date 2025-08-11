package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entity.Booking;

public interface BookingDao extends JpaRepository<Booking, Long> {
//List<Booking> findByScheduleBusOperatorOperatorId(Long id);
@Query(" select b from Booking b  "
		+ " left join fetch b.schedule s "
		+ " left join fetch s.bus bus"
		+ " left join fetch bus.operator o "
		+ " where o.id = :id  ")
List<Booking> findByOperatorId(@Param("id") Long id);

List<Booking> findByUserId(Long id);



@Query(" select b from Booking b "
		+ " left join fetch b.schedule s"
		+ " left join fetch s.route r "
		+ " left join fetch b.bookingDetails bd"
		+ " left join fetch bd.seat st"
		+ " where b.user.id = :id  ")
List<Booking> getByUserIdAndDetails(@Param("id") Long id);

}
