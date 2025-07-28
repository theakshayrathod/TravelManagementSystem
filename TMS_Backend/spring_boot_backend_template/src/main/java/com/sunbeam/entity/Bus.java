package com.sunbeam.entity;

import java.util.List;



import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "buses")

public class Bus extends BaseEntity {
	
	@Column(name = "bus_name",length = 30)
	private String busName;
	
	@Column(name = "bus_type" ,length = 30)
	private String busType;
	@Column(name = "total_seats")
	private int totalSeats;
	@Column(name = "is_wifi")
	private boolean wifi;
	@Column(name = "is_tv")
	private boolean tv;
	@Column(name = "is_power_outlet")
	private boolean powerOutlet;
	@Column(name = "registration_number")
	private String registrationNumber;
	
	@OneToMany(mappedBy = "bus",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<BusImage>images;
	
	
	@ManyToOne
	@JoinColumn(name = "operator_id",nullable = false)
	private Operator operator;
	
		

}
