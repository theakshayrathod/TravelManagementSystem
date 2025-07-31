package com.sunbeam.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.AddScheduleDto;
import com.sunbeam.service.ScheduleService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/schedule")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ScheduleController {
	
	private ScheduleService scheduleService;
	
	@PostMapping
	public ResponseEntity<?> createSchedule(AddScheduleDto dto) {
		
		return ResponseEntity.status(HttpStatus.CREATED).body(scheduleService.createSchedule(dto));
		
	}

}
