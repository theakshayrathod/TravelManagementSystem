package com.sunbeam.dto;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import com.sunbeam.entity.Seat;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class SeatDto {
	
	
	private String source;
	private String destination;
	
	private String companyName;
	private String busName;
	private String registrationNumber;
	
	private double fare;
	private LocalTime departureTime;
	private LocalTime reachingTime;
	private List<SeatInfoDto> seats= new ArrayList<>();	
	

}
