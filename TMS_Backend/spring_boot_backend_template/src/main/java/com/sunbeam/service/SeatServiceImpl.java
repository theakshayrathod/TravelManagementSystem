package com.sunbeam.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.sunbeam.custom_exception.InvalidInputException;
import com.sunbeam.dao.ScheduleDao;
import com.sunbeam.dao.SeatDao;
import com.sunbeam.dto.SeatDto;
import com.sunbeam.dto.SeatInfoDto;
import com.sunbeam.entity.Schedule;
import com.sunbeam.entity.Seat;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class SeatServiceImpl implements SeatService{
	
	private  ScheduleDao scheduleDao;
	private ModelMapper mapper;
	private SeatDao seatDao;

	@Override
	public SeatDto getSeatsById(Long id) {
		Schedule schedule = scheduleDao.findById(id).orElseThrow(()-> new InvalidInputException("Schedule not found"));
		
		List<Seat> seats = schedule.getSeats();
		
		
		SeatDto sDto = new SeatDto();
		
		
		
		
	
			
			
			sDto.setSource(schedule.getRoute().getSource());
			sDto.setDestination(schedule.getRoute().getDestination());
			sDto.setCompanyName(schedule.getBus().getOperator().getCompanyName());
			sDto.setBusName(schedule.getBus().getBusName());
			sDto.setRegistrationNumber(schedule.getBus().getRegistrationNumber());
			sDto.setFare(schedule.getFare());
			sDto.setDepartureTime(schedule.getDepartureTime());
			sDto.setReachingTime(schedule.getReachingTime());
			
			sDto.setSeats(seats.stream().map(s->mapper.map(s, SeatInfoDto.class)).toList());
			
			return sDto;
		
	}

}





