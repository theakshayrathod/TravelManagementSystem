package com.sunbeam.entity;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "schedules")
@Getter
@Setter
public class Schedule extends BaseEntity {
	@ManyToOne
	@JoinColumn(name = "bus_id",nullable = false)
	private Bus bus;
	@ManyToOne
	@JoinColumn(name = "route_id",nullable = false)
	private Route route;
	@Column(name = "start_time")
	private LocalTime startTime;
	@Column(name = "end_time")
	private LocalTime endTime;
	
	private Double fare;
	@Enumerated(EnumType.STRING)
	private Recurrance recurrnce;
	@Enumerated(EnumType.STRING)
	private ScheduleStatus status;
	
	@OneToMany(mappedBy = "schedule" , cascade = CascadeType.ALL, orphanRemoval = true)
	private List<SchedulePoint> schedulePoints = new ArrayList<>();
	
	
	
	

}
