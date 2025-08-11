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



@Query( " select distinct b from Booking b "
	   +" left join fetch b.schedule s "
	    + " left join fetch s.route r "
	   + " left join fetch s.bus bus "
	    + " left join fetch bus.operator op "
	   + "  where b.user.id = :id "
	    + " order by b.bookingTime desc " )
List<Booking> getByUserIdAndDetails(@Param("id") Long id);

}
