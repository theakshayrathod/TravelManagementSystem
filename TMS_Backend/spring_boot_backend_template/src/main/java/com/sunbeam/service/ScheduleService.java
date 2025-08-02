package com.sunbeam.service;

import com.sunbeam.dto.AddScheduleDto;
import com.sunbeam.dto.ApiResponse;

public interface ScheduleService {
	ApiResponse createSchedule(AddScheduleDto dto);
}
