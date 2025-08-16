package com.sunbeam.service;

import com.sunbeam.dto.BusDto;
import com.sunbeam.dto.UpdateBusDto;

import java.util.List;

import com.sunbeam.dto.ApiResponse;



public interface BusService {
	ApiResponse addBus(BusDto dto ,Long id);

	ApiResponse deleteBus(Long busId, Long operatorId);

	List<BusDto> getAllBuses(long operatorId);

	

	ApiResponse updateBus(UpdateBusDto dto, Long busId);

	BusDto getBus(Long busId);

}
