package com.sunbeam.dto;

import java.util.List;


import com.sunbeam.entity.BusImage;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class BusDto {
	
	
	private String busName;
	
	private String busType;
	
	private int totalSeats;
	
	private boolean isWifi;
	
	private boolean isTv;

	private boolean isPowerOutlet;
	
	private String registrationNumber;
	private List<BusImage>images;
	


}
