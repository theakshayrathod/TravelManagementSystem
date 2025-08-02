package com.sunbeam.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.AddScheduleDto;
import com.sunbeam.dto.GetSchedulesDto;
import com.sunbeam.service.ScheduleService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/schedule")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ScheduleController {
	
	private ScheduleService scheduleService;
	
	@PostMapping
	public ResponseEntity<?> createSchedule(@RequestBody AddScheduleDto dto) {		
		return ResponseEntity.status(HttpStatus.CREATED).body(scheduleService.createSchedule(dto));
		
	}
	@GetMapping("/operator/{id}")
	public ResponseEntity<?> getScheduleByOperatorId(@PathVariable Long id){		
		return ResponseEntity.ok(scheduleService.getSchedulesByOperatorId(id));		
	}
	
	@PostMapping("/get")
	public ResponseEntity<?> getSchedules(@RequestBody GetSchedulesDto dto){
		return ResponseEntity.ok(scheduleService.getSchedulesBySourceAndDestination(dto));
	}
	
	
	
	

}
