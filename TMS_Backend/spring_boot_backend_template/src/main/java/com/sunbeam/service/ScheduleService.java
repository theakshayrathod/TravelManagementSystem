package com.sunbeam.service;

import java.time.LocalDate;
import java.util.List;

import com.sunbeam.dto.AddScheduleDto;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.GetScheduleForOperatorDTO;
import com.sunbeam.dto.ScheduleSearchDto;

public interface ScheduleService {
	ApiResponse createSchedule(AddScheduleDto dto);
	ApiResponse deleteSchedule(Long id);
	List<GetScheduleForOperatorDTO> getSchedulesByOperatorId(Long id);
	List<ScheduleSearchDto> getSchedulesBySourceAndDestination(String source, String destination, LocalDate date);
}
