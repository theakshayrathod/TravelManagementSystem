package com.sunbeam.dto;

import com.sunbeam.entity.ScheduleStatus;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class DashBoardDto {
	
	private Long scheduleId;
	private Long busId;
	private String busName;
	private String busType;
	private String busNumber;
	private Long routeId;
	private String source;
	private String destination;
	private Double collection;
	private ScheduleStatus status;
	private String date;
	private String departureTime;

}
