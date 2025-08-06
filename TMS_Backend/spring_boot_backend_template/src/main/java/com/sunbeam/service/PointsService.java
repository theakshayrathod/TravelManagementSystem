package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.PointDto;
import com.sunbeam.dto.SchedulePointInfo;

public interface PointsService {

	ApiResponse addPoints(PointDto dto, Long routId);

	List<PointDto> getPoints();

	ApiResponse deletePoint(Long id);

	List<PointDto> getByRouteId(Long id);

	

}
