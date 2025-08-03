package com.sunbeam.dto;

import java.time.LocalTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ScheduleSearchDto {
	private Long scheduleId;
	private String busName;
	private String companyName;
	private String source;
	private String destination;
	private LocalTime departureTime;
	private LocalTime reachingTime;
	private Double fare;
	private boolean isWifi;
	private boolean isTv;
	private boolean powerOutlet;

}
