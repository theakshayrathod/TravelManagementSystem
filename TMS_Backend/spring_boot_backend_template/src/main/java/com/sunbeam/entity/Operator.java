package com.sunbeam.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
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
	

}
