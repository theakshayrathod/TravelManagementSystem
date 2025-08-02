package com.sunbeam.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name = "bookings")
@Getter
@Setter
public class Booking extends BaseEntity {
	
	@ManyToOne
	@JoinColumn(name = "user_id",nullable = false)
	private User user;
	@ManyToOne
	@JoinColumn(name = "schedule_id",nullable = false)
	private Schedule schedule;
	@Column(name = "booking_time")
	private LocalDateTime bookingTime;
	@Column(name = "total_amount")
	private double totaleAmount;
	@Enumerated(EnumType.STRING)
	private BookingStatus status;
	
	
	

}
