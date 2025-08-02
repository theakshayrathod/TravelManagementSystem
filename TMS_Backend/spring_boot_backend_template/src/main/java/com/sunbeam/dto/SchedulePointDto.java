package com.sunbeam.dto;

import java.time.LocalTime;

import com.sunbeam.entity.PointType;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SchedulePointDto {
	@NotNull(message = "Point Id is Required")
	private Long pointId;	
	private PointType type;
	@NotNull(message = "Arrival Time is Required")
	private LocalTime arrivalTime;
	
	
}
