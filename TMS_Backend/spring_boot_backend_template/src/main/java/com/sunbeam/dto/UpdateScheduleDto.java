package com.sunbeam.dto;

import java.time.LocalTime;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateScheduleDto {
	
	
	@NotNull
	private Long busId;
	@NotNull
	private LocalTime departureTime;
	@NotNull
	private LocalTime reachingTime;
	@NotNull
	private Double fare;
	
	

}
