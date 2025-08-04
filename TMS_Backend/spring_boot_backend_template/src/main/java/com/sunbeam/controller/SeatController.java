package com.sunbeam.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.SeatDto;
import com.sunbeam.service.SeatService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/seats")
@CrossOrigin(origins = "*")
public class SeatController {
	
	private SeatService seatService;
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getSeats(@PathVariable Long id){
		
		
		
		return ResponseEntity.ok(seatService.getSeatsById(id));
		
	}

}
