package com.sunbeam.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.sunbeam.custom_exception.InvalidInputException;
import com.sunbeam.dao.BusDao;
import com.sunbeam.dao.PointDao;
import com.sunbeam.dao.RouteDao;
import com.sunbeam.dao.ScheduleDao;
import com.sunbeam.dto.AddScheduleDto;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.SchedulePointDto;
import com.sunbeam.entity.Bus;
import com.sunbeam.entity.Point;
import com.sunbeam.entity.Route;
import com.sunbeam.entity.Schedule;
import com.sunbeam.entity.SchedulePoint;
import com.sunbeam.entity.ScheduleStatus;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Transactional
@Service
@AllArgsConstructor
public class ScheduleServiceImpl implements ScheduleService {

	private ScheduleDao scheduleDao;
	private BusDao busDao;
	private RouteDao routeDao;
	private PointDao pointDao;
	private ModelMapper mapper;

	@Override
	public ApiResponse createSchedule(AddScheduleDto dto) {
		
		Bus bus = busDao.findById(dto.getBusId()).orElseThrow(() -> new InvalidInputException("Bus Not Found"));
		Route route = routeDao.findById(dto.getRouteId())
				.orElseThrow(() -> new InvalidInputException("Route Not Exists"));
		Schedule s = new Schedule();
		s.setBus(bus);
		s.setRoute(route);
		s.setDepartureTime(dto.getDepartureTime());
		s.setReachingTime(dto.getReachingTime());
		s.setFare(dto.getFare());
		s.setRecurrence(dto.getRecurrence());
		s.setRecurrenceDetail(dto.getRecurrenceDetail());
		s.setStatus(ScheduleStatus.ACTIVE);

		for (SchedulePointDto spDto : dto.getSchedulePoints()) {

			SchedulePoint sp = new SchedulePoint();
			Point p = pointDao.findById(spDto.getPointId())
					.orElseThrow(() -> new InvalidInputException("Invalid Point Id"));
			System.out.println(spDto.getPointId());
			System.out.println("Point" + p.getId());
			sp.setPoint(p);
			sp.setArrivalTime(spDto.getArrivalTime());
			sp.setType(spDto.getType());
			s.addSchedulePoints(sp);
		}

		scheduleDao.save(s);

		return new ApiResponse("Schedule Added SuccesFully");
	}	
	
	
	
	
	

}
