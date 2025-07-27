package com.sunbeam.service;

import com.sunbeam.dto.BusDto;

import java.util.List;

import com.sunbeam.dto.ApiResponse;



public interface BusService {
	ApiResponse addBus(BusDto dto ,Long id);

	ApiResponse deleteBus(Long busId);

	List<BusDto> getAllBuses(long operatorId);

	

	ApiResponse updateBus(BusDto dto, Long busId);

}
