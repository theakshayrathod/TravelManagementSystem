package com.sunbeam.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.RouteDto;
import com.sunbeam.service.RouteService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/route")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class RouteController {
	
	private RouteService routeService;
	@PostMapping
	public ResponseEntity<?> createRoute(@RequestBody RouteDto dto){
		
		return ResponseEntity.status(HttpStatus.CREATED).body(routeService.createRoute(dto));
		
	}
	@GetMapping
	public ResponseEntity<?> getRoutes(){
		
		return ResponseEntity.ok(routeService.getRoutes());
		
	}
		

}
