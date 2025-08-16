package com.sunbeam.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class UpdateBusDto {
	

	private String busName;
	
	private String busType;
	
	private int totalSeats;
	
	private boolean wifi;
	
	private boolean tv;

	private boolean powerOutlet;
	
	private String registrationNumber;
	
	


}
