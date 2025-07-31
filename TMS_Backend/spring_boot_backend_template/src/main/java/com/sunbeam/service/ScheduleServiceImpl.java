package com.sunbeam.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.sunbeam.custom_exception.InvalidInputException;
import com.sunbeam.dao.BusDao;
import com.sunbeam.dao.RouteDao;
import com.sunbeam.dao.ScheduleDao;
import com.sunbeam.dto.AddScheduleDto;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.entity.Bus;
import com.sunbeam.entity.Route;
import com.sunbeam.entity.Schedule;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Transactional
@Service
@AllArgsConstructor
public class ScheduleServiceImpl implements ScheduleService {
	
	private ScheduleDao scheduleDao;
	private BusDao busDao;
	private RouteDao routeDao;
	private ModelMapper mapper;
	@Override
	public ApiResponse createSchedule(AddScheduleDto dto) {
		
		Bus bus=busDao.findById(dto.getBusId()).orElseThrow(()-> new InvalidInputException("Bus Not Found"));
		Route route = routeDao.findById(dto.getRouteId()).orElseThrow(()->new InvalidInputException("Route Not Exists"));
		
		
		
		Schedule s=mapper.map(dto, Schedule.class);
		s.setBus(bus);
		s.setRoute(route);
		scheduleDao.save(s);
		
		return new ApiResponse("Schedule Added SuccesFully");
	}
	
	
	
	
	

}
