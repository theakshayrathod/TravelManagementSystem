package com.sunbeam.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.RouteDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.RouteDto;
import com.sunbeam.entity.Route;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class RouteServiceImpl implements RouteService {
	
	private RouteDao routeDao;
	private ModelMapper modelMapper;
	@Override
	public ApiResponse createRoute(RouteDto dto) {
		
		if(routeDao.existsBySourceAndDestination(dto.getSource(), dto.getDestination())) {
			return new ApiResponse("Already Exists");
		}
		
		Route newRoute=modelMapper.map(dto, Route.class);
		routeDao.save(newRoute);
		return new ApiResponse("New Route Added Succesfully");
	}
	@Override
	public List<RouteDto> getRoutes() {
		
		
		
		return routeDao.findAll().stream().map(entity->modelMapper.map(entity,RouteDto.class)).toList();
	}
	
	
	
	

	
	
	
	

}
