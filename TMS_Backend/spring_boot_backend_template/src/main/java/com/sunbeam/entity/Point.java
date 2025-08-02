package com.sunbeam.entity;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.CollectionId;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
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
	@Column(length = 20 , nullable = false)
	private String name;
	private String address;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "route_id",nullable = false)
	private Route route;
	@OneToMany(mappedBy = "point",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<SchedulePoint> schedulePoints = new ArrayList<>();
	@Column(name = "map_link", length = 500)
	private String mapLink;
	
	public void addSchedulePoints(SchedulePoint sp) {
		schedulePoints.add(sp);
		sp.setPoint(this);
		
	}
	
	
	
	
	
	
	
	

}
