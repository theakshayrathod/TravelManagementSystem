package com.sunbeam.dto;

import java.util.ArrayList;
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
	
	private  Long id;
	private String busName;
	
	private String busType;
	
	private int totalSeats;
	
	private boolean wifi;
	
	private boolean tv;

	private boolean powerOutlet;
	
	private String registrationNumber;
	private List<BusImage>images = new ArrayList<>() ;
	


}
