package com.sunbeam.dto;

import java.time.LocalTime;
import java.util.List;

import com.sunbeam.entity.Recurrence;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddScheduleDto {
	
	@NotNull
	private Long routeId;
	@NotNull
	private Long busId;
	@NotNull
	private LocalTime departureTime;
	@NotNull
	private LocalTime reachingTime;
	@NotNull
	private Double fare;
	@NotBlank(message = "Recurrence is required")
	private Recurrence recurrence;	
	@NotBlank(message = "Recurrence is required")
	private String recurrenceDetail;	
	private List<SchedulePointDto> schedulePoints;
	

}
