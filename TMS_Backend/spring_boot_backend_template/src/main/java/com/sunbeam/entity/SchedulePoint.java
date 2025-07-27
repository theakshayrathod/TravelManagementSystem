package com.sunbeam.entity;

import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "schedule_points")
@Getter
@Setter
@NoArgsConstructor
public class SchedulePoint {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "schedule_id",nullable = false)
	private Schedule schedule;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "point_id",nullable = false)
	private Point point;
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private PointType type;
	@Column(name = "arrival_time",nullable = false)
	private LocalTime arrivalTime;
		
	public SchedulePoint(Schedule schedule, Point point, PointType type) {
		this.schedule = schedule;
		this.point = point;
		this.type = type;
	}	

}
