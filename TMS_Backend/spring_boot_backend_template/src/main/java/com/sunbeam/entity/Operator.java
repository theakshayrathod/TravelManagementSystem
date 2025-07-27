package com.sunbeam.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "operator_details")
public class Operator {
	@Id
	private Long operatorId;
	
	
	@OneToOne
	@MapsId
	@JoinColumn(name = "operator_id")
	private User user;
	@Column(name = "company_name")
	private String companyName;
	@Column(name = "license_number")
	private String licenseNumber;
	private String address;
	
	@OneToMany(mappedBy = "operator", 
			cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Bus> buses = new ArrayList<>();
	
	public void addBus(Bus bus) {
		this.buses.add(bus);
		bus.setOperator(this);
	}

}
