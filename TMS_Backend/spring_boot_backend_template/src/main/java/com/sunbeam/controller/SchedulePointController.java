package com.sunbeam.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.SchedulePointInfo;
import com.sunbeam.service.SchedulePointService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/schedulePoint")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class SchedulePointController {
	
	private SchedulePointService  schedulePointService;
	
	@GetMapping("/{scheduleId}")
	public ResponseEntity<?> getPointsByScheduleId(@PathVariable Long scheduleId){
		List<SchedulePointInfo> schedulePointInfos = schedulePointService.getSchedulePointBySchedule(scheduleId);
		return ResponseEntity.ok(schedulePointInfos);
	}

}
