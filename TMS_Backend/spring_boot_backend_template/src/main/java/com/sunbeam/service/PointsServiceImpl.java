package com.sunbeam.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.util.Separators.Spacing;
import com.sunbeam.custom_exception.InvalidInputException;
import com.sunbeam.dao.PointDao;
import com.sunbeam.dao.RouteDao;
import com.sunbeam.dao.ScheduleDao;
import com.sunbeam.dao.SchedulePointsDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.PointDto;
import com.sunbeam.dto.SchedulePointInfo;
import com.sunbeam.entity.Point;
import com.sunbeam.entity.Route;
import com.sunbeam.entity.SchedulePoint;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class PointsServiceImpl implements PointsService {

	private RouteDao routeDao;
	private ModelMapper mapper;
	private PointDao pointsDao;
	private SchedulePointsDao schedulePointsDao;

	@Override
	public ApiResponse addPoints(PointDto dto, Long routId) {
		Route route = routeDao.findById(routId).orElseThrow(() -> new InvalidInputException("Route not found"));

		if (pointsDao.existsByNameAndAddress(dto.getName(),dto.getAddress())) {
			return new ApiResponse("Point already exist");
		}

		Point p = mapper.map(dto, Point.class);

//		System.err.println(p.toString());

		route.addPoints(p);

		return new ApiResponse("Point added successfully...");
	}

	@Override
	public List<PointDto> getPoints() {

		return pointsDao.findAll().stream().map(e -> mapper.map(e, PointDto.class)).toList();
	}

	@Override
	public ApiResponse deletePoint(Long id) {
		Point point = pointsDao.findById(id).orElseThrow(() -> new InvalidInputException("Point not found"));
		pointsDao.delete(point);
		return new ApiResponse("Point delete successfully");
	}

	@Override
	public List<PointDto> getByRouteId(Long id) {
		
		List<Point> points=pointsDao.findByRouteId(id);		
		return points.stream().map(p->mapper.map(p, PointDto.class)).toList();
	}

	@Override
	public List<SchedulePointInfo> getPointBySchedule(Long scheduleId) {
		List<SchedulePoint>sPList = schedulePointsDao.findByScheduleId(scheduleId);
		
		List<SchedulePointInfo>schedulePointInfos= sPList.stream().map(sp->{
			 SchedulePointInfo sInfo = new SchedulePointInfo();
			 sInfo.setPointId(sp.getPoint().getId());
			 sInfo.setPointName(sp.getPoint().getName());
			 sInfo.setPointAddress(sp.getPoint().getAddress());
			 sInfo.setType(sp.getType());
			 sInfo.setArrivalTime(sp.getArrivalTime());
			 
			 return sInfo;
			 
		 }).toList();
		 
		 return schedulePointInfos;
	}

}
