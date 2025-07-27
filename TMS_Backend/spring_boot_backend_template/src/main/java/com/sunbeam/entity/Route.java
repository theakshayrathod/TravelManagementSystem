package com.sunbeam.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "routes")
public class Route {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String source;
	private String destination;
	private Double distance;
	@OneToMany(mappedBy = "route" , cascade = CascadeType.ALL)
	private List<Schedule> schedules = new ArrayList<>();
	@OneToMany(mappedBy = "route" ,cascade = CascadeType.ALL )
	private List<Point> points = new ArrayList<>();
	
	
	public Route(String source, String destination, Double distance) {
		this.source = source;
		this.destination = destination;
		this.distance = distance;
	}
	
}
