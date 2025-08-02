package com.sunbeam.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "booking_details")
@Getter
@Setter
@NoArgsConstructor
public class BookingDetails extends BaseEntity { 
	@ManyToOne
	@JoinColumn(name = "booking_id",nullable = false)
	private Booking booking;
	@ManyToOne
	@JoinColumn(name = "seat_id",nullable = false)
	private  Seat seat;
	@ManyToOne
	@JoinColumn(name ="pickup_point_id",nullable = false )
	private Point pickupPoint;
	@ManyToOne
	@JoinColumn(name = "drop_point-id",nullable = false)
	private Point dropPoint;

}
