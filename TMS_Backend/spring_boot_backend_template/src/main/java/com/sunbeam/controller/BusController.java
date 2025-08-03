package com.sunbeam.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.BusDto;
import com.sunbeam.service.BusService;

import lombok.AllArgsConstructor;



@RestController
@RequestMapping("/bus")
@AllArgsConstructor
@CrossOrigin(origins= "http://localhost:5173")
public class BusController {
	
	private BusService busService;
	
	@PostMapping("/add/{operatorId}")
	private ResponseEntity<?> addBus(@RequestBody BusDto dto ,@PathVariable Long operatorId){
		return ResponseEntity.ok(busService.addBus(dto,operatorId));
	}
	
	@DeleteMapping("/delete/{busId}")
	private ResponseEntity<?> deletBus(@PathVariable Long busId){
		return ResponseEntity.ok(busService.deleteBus(busId));
	}
	
	@GetMapping("/get-buses/{operatorId}")
	private ResponseEntity<?> getAllBuses(@PathVariable Long operatorId){
		
		List<BusDto> buses = busService.getAllBuses(operatorId);
		
		if(buses.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();}
		System.out.println(buses);
		return ResponseEntity.ok(buses);
	}
	@PutMapping("/update/{busId}")
	private ResponseEntity<?> updateBus(@RequestBody BusDto dto,@PathVariable Long busId){
		
		System.err.println("result frm frontend "+dto.toString());
		return ResponseEntity.ok(busService.updateBus(dto,busId));
	}
	

}
