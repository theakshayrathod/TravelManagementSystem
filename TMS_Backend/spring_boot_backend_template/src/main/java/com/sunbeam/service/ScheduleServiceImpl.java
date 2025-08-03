package com.sunbeam.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.sunbeam.custom_exception.InvalidInputException;
import com.sunbeam.dao.BusDao;
import com.sunbeam.dao.PointDao;
import com.sunbeam.dao.RouteDao;
import com.sunbeam.dao.ScheduleDao;
import com.sunbeam.dao.SeatDao;
import com.sunbeam.dto.AddScheduleDto;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.GetScheduleForOperatorDTO;
import com.sunbeam.dto.GetSchedulesDto;
import com.sunbeam.dto.SchedulePointDto;
import com.sunbeam.dto.SchedulePointInfo;
import com.sunbeam.dto.ScheduleSearchDto;
import com.sunbeam.entity.Bus;
import com.sunbeam.entity.Point;
import com.sunbeam.entity.Route;
import com.sunbeam.entity.Schedule;
import com.sunbeam.entity.SchedulePoint;
import com.sunbeam.entity.ScheduleStatus;
import com.sunbeam.entity.Seat;
import com.sunbeam.entity.SeatStatus;

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
	
	private SeatDao seatDao;

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
//----------------------------Seats creation ---------------------------------		
		List<Seat>seats = new ArrayList<>();
		
		for(int i=1;i<=bus.getTotalSeats();i++) {
			Seat seat = new Seat();
			seat.setSeatNumber("S"+i);
			seat.setStatus(SeatStatus.AVAILABLE);
			seat.setSchedule(s);
			seats.add(seat);
		}
		
		seatDao.saveAll(seats);
		

		return new ApiResponse("Schedule Added SuccesFully");
	}

	@Override
	public ApiResponse deleteSchedule(Long id) {
		if(!scheduleDao.existsById(id)) {
			return new ApiResponse("Schedule Does not Exist");
		}
		scheduleDao.deleteById(id);		
		return new ApiResponse("Schedule Deleted SuccesFully");
	}

	@Override
	public List<GetScheduleForOperatorDTO> getSchedulesByOperatorId(Long id) {
		List<Schedule> schedules = scheduleDao.findSchedulesByOperatorId(id);
		
		return schedules.stream().map(s->
			mapScheduleToDto(s)).collect(Collectors.toList());		
	}	
	
	public GetScheduleForOperatorDTO mapScheduleToDto(Schedule schedule) {
		
		GetScheduleForOperatorDTO dto = new GetScheduleForOperatorDTO();
		
		dto.setScheduleId(schedule.getId());
		dto.setBusId(schedule.getBus().getId());
		dto.setBusName(schedule.getBus().getBusName());
		dto.setBusType(schedule.getBus().getBusType());
		dto.setRouteId(schedule.getRoute().getId());
		dto.setSource(schedule.getRoute().getSource());
		dto.setDestination(schedule.getRoute().getDestination());
		dto.setDepartureTime(schedule.getDepartureTime());
		dto.setReachingTime(schedule.getReachingTime());
		dto.setFare(schedule.getFare());
		dto.setRecurrence(schedule.getRecurrence());
		dto.setRecurrenceDetail(schedule.getRecurrenceDetail());
		dto.setStatus(schedule.getStatus());
		
		
		List<SchedulePointInfo> pointInfos = schedule.getSchedulePoints().stream().map(sp->{
			SchedulePointInfo spDto = new SchedulePointInfo();
			spDto.setSchedulePointId(sp.getId());
			spDto.setPointId(sp.getPoint().getId());
			spDto.setPointName(sp.getPoint().getName());
			spDto.setPointAddress(sp.getPoint().getAddress());
			spDto.setArrivalTime(sp.getArrivalTime());
			spDto.setType(sp.getType());
			return spDto;
		}).collect(Collectors.toList());
		
		dto.setSchedulePointInfos(pointInfos);
		
		
		return dto;
		
		
	}

	@Override
	public List<ScheduleSearchDto> getSchedulesBySourceAndDestination(GetSchedulesDto dto) {
		
		String dayofweek=dto.getJourneyDate().getDayOfWeek().toString();
		String dateStr = dto.getJourneyDate().toString();
		
		List<Schedule> schedules = scheduleDao.findScheduleBySourceAndDestinationAndDate(dto.getSource(), dto.getDestination(), dayofweek, dateStr);
		
		
		
		 
		return schedules.stream().map(s -> {
			ScheduleSearchDto sDto = new ScheduleSearchDto();
			sDto.setScheduleId(s.getId());
			sDto.setBusName(s.getBus().getBusName());
			sDto.setCompanyName(s.getBus().getOperator().getCompanyName());
			sDto.setDepartureTime(s.getDepartureTime());
			sDto.setReachingTime(s.getReachingTime());
			sDto.setFare(s.getFare());
			sDto.setSource(s.getRoute().getSource());
			sDto.setDestination(s.getRoute().getDestination());
			return sDto;			
		}).toList();
	}
	
	
	
	
	

}
