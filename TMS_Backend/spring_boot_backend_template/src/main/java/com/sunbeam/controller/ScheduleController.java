package com.sunbeam.controller;

import java.time.LocalDate;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.AddScheduleDto;
import com.sunbeam.dto.GetSchedulesDto;
import com.sunbeam.dto.UpdateScheduleDto;
import com.sunbeam.entity.ScheduleStatus;
import com.sunbeam.security.JwtUtils;
import com.sunbeam.service.ScheduleService;

import io.jsonwebtoken.Claims;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/schedule")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class ScheduleController {
	
	private ScheduleService scheduleService;
	private JwtUtils jwtUtils;
	
	@PostMapping
	public ResponseEntity<?> createSchedule(@RequestBody AddScheduleDto dto ) {	
		Long id= (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return ResponseEntity.status(HttpStatus.CREATED).body(scheduleService.createSchedule(dto,id));
		
	}
	@GetMapping("/operator")
	public ResponseEntity<?> getScheduleByOperatorId(){
		Long id= (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return ResponseEntity.ok(scheduleService.getSchedulesByOperatorId(id));		
	}
	
	@GetMapping("/get/{source}/{destination}/{date}")
	public ResponseEntity<?> getSchedules(@PathVariable String source, @PathVariable String destination, @PathVariable LocalDate date){
		return ResponseEntity.ok(scheduleService.getSchedulesBySourceAndDestination(source,destination,date));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteSchedule(@PathVariable Long id){
		return ResponseEntity.ok(scheduleService.deleteSchedule(id));
		
	}
	
	@PutMapping("/{id}/{status}")
	public ResponseEntity<?> updateStatus(@PathVariable Long id, @PathVariable ScheduleStatus status ){
		Long oId= (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return ResponseEntity.ok(scheduleService.updateStatus(id,status,oId));
	}
	
	 @GetMapping("/get/{id}")
	    public ResponseEntity<?> getScheduleById(
	            @PathVariable Long id) {
	       
	        return ResponseEntity.ok(scheduleService.getScheduleById(id));
	    }

	  
	    @PutMapping("/update/{id}")
	    public ResponseEntity<?> updateSchedule(
	            @PathVariable Long id,
	            @RequestBody UpdateScheduleDto dto) {
	       
	        return ResponseEntity.ok(scheduleService.updateSchedule(id, dto));
	    }
	    
	    @GetMapping("/dashboard")
	    public ResponseEntity<?> getDashboardInfo(){
	    	
	    	Long id= (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	    	return ResponseEntity.ok(scheduleService.getDashboardInfo(id));
	    	
	    }
	
	
	
	

}
