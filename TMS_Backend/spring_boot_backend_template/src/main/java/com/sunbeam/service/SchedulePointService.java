package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.SchedulePointInfo;

public interface SchedulePointService {
	
	List<SchedulePointInfo> getSchedulePointBySchedule(Long scheduleId);

}
