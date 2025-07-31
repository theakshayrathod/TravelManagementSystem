package com.sunbeam.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.PointDto;
import com.sunbeam.service.PointsService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/points")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class PointsController {
	
	private PointsService pointsService;
	
	@PostMapping("/add/{routeId}")
	
	public ResponseEntity<?> addPoints(@RequestBody PointDto dto, @PathVariable Long routeId){ 
		
		
		return ResponseEntity.ok(pointsService.addPoints(dto,routeId));
	}
	@GetMapping("/getAll")
	public ResponseEntity<?> getAllPoints(){
		
		List<PointDto>points = pointsService.getPoints();
		return ResponseEntity.ok(points);
	}
	

}
