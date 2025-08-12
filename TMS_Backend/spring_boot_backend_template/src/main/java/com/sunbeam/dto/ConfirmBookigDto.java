package com.sunbeam.dto;

import java.time.LocalTime;

import com.sunbeam.entity.Gender;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter

public class ConfirmBookigDto {
	
	private String journeyStart;
	private String journeyEnd;
	private LocalTime startTime;
	private LocalTime endTime;
	
	
	private String busNumber;
	
	private String  passengerName;
	private Gender gender;
	
	private String email;
	private int noOfSeats;
	
	private double amount;
	
	
	
	
	
	
	

}
