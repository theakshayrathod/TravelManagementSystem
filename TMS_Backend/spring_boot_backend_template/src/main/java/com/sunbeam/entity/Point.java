package com.sunbeam.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "points",uniqueConstraints = {@UniqueConstraint(columnNames = {"route_id","name"})})
public class Point {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "route_id",nullable = false)
	private Route route;
	@OneToMany(mappedBy = "point",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<SchedulePoint> schedulePoints;
	
	public Point(String name, Route route) {
		this.name = name;
		this.route = route;
	}
	
	
	
	

}
