package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entity.Schedule;

public interface ScheduleDao extends JpaRepository<Schedule, Long> {
	
	
	@Query(   " SELECT s from Schedule s "
			+ " JOIN FETCH s.bus b "
			+ " JOIN FETCH s.route r "
			+ " LEFT JOIN FETCH s.schedulePoints sp "
			+ " LEFT JOIN FETCH sp.point p "
			+ " WHERE b.operator.id = :operatorId ")
	List<Schedule> findSchedulesByOperatorId(@Param("operatorId") Long operatorId);
	
	
	@Query( "SELECT DISTINCT s FROM Schedule s"
			+ " JOIN FETCH s.route r "
			+ " JOIN FETCH s.bus b "
			+ " JOIN FETCH b.operator o "
			+ " WHERE LOWER(r.destination) = LOWER(:destination) "
			+ " AND (s.recurrence = com.sunbeam.entity.Recurrence.DAILY "
			+ " OR (s.recurrence = com.sunbeam.entity.Recurrence.WEEKLY AND LOWER(s.recurrenceDetail) LIKE %:dayofweek%) "
			+ " OR (s.recurrence = com.sunbeam.entity.Recurrence.SPECIFIC_DATE AND s.recurrenceDetail LIKE %:dateStr )) "
			)
	List<Schedule> findScheduleBySourceAndDestinationAndDate(@Param("source") String source, @Param("destination") String destination,
			@Param("dayofweek") String dayOfWeek, @Param("dateStr") String dateStr);
	

}
