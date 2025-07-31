package com.sunbeam.service;


import java.util.List;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.RouteDto;

public interface RouteService  {

	

	ApiResponse createRoute(RouteDto dto);

	List<RouteDto> getRoutes();


	
	

}
