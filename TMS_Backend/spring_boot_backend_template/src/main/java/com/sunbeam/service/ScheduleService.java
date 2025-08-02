package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.AddScheduleDto;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.GetScheduleForOperatorDTO;

public interface ScheduleService {
	ApiResponse createSchedule(AddScheduleDto dto);
	ApiResponse deleteSchedule(Long id);
	List<GetScheduleForOperatorDTO> getSchedulesByOperatorId(Long id);
}
