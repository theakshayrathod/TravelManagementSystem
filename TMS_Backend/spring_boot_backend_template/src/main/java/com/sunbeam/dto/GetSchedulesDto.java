package com.sunbeam.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetSchedulesDto {
	
	private String source;
	private String destination;
	private LocalDate journeyDate;
	
}
