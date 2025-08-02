package com.sunbeam.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.sunbeam.custom_exception.InvalidInputException;
import com.sunbeam.dao.PointDao;
import com.sunbeam.dao.RouteDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.PointDto;
import com.sunbeam.entity.Point;
import com.sunbeam.entity.Route;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class PointsServiceImpl implements PointsService {

	private RouteDao routeDao;
	private ModelMapper mapper;
	private PointDao pointsDao;

	@Override
	public ApiResponse addPoints(PointDto dto, Long routId) {
		Route route = routeDao.findById(routId).orElseThrow(() -> new InvalidInputException("Route not found"));

		if (pointsDao.existsByNameAndAddress(dto.getName(),dto.getAddress())) {
			return new ApiResponse("Point already exist");
		}

		Point p = mapper.map(dto, Point.class);

		System.err.println(p.toString());

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

}
