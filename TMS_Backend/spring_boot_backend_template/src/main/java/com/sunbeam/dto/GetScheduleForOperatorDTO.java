package com.sunbeam.dto;

import java.time.LocalTime;
import java.util.List;

import com.sunbeam.entity.Recurrence;
import com.sunbeam.entity.ScheduleStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetScheduleForOperatorDTO {
	
	private Long scheduleId;
	private Long busId;
	private String busName;
	private String busType;
	private Long routeId;
	private String source;
	private String destination;
	private LocalTime departureTime;
	private LocalTime reachingTime;
	private Double fare;
	private Recurrence recurrence;
	private String recurrenceDetail;
	private ScheduleStatus status;
	private List<SchedulePointInfo> schedulePointInfos;
	
	
	
	
	
	
	


}
