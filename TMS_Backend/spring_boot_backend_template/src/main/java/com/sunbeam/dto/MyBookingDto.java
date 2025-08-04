package com.sunbeam.dto;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MyBookingDto {
	

	private String source;
	
	
	private String destination;
	
	@JsonFormat(pattern = "HH:mm")
	private LocalTime departureTime;
	@JsonFormat(pattern = "HH:mm")
	private LocalTime reachingTime;
	
	
	private List<String> points = new ArrayList<>();

	@JsonFormat(pattern = "dd:MM:yyyy")
	private LocalDateTime date;

	private List<String> seatNumbers=  new ArrayList<>();;

	private double totaleAmount;
}
