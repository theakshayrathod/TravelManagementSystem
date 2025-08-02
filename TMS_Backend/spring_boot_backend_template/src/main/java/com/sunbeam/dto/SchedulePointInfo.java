package com.sunbeam.dto;

import java.time.LocalTime;

import com.sunbeam.entity.PointType;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class SchedulePointInfo {
	
	private Long schedulePointId;
	private Long pointId;
	private String pointName;
	private String pointAddress;
	private PointType type;
	private LocalTime arrivalTime;
	
	

}
