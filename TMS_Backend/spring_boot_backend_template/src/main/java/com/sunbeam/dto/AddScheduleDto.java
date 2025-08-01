package com.sunbeam.dto;

import java.time.LocalTime;

import com.sunbeam.entity.Recurrance;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddScheduleDto {
	
	private Long routeId;
	private Long busId;
	private LocalTime startTime;
	private LocalTime endTime;
	private Double fare;
	private Recurrance recurrance;	
	

}
