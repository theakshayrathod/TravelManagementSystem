package com.sunbeam.controller;

import java.util.List;

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

import com.sunbeam.dto.BusDto;
import com.sunbeam.dto.UpdateBusDto;
import com.sunbeam.entity.User;
import com.sunbeam.security.JwtUtils;
import com.sunbeam.service.BusService;

import io.jsonwebtoken.Claims;
import lombok.AllArgsConstructor;



@RestController
@RequestMapping("/bus")
@AllArgsConstructor
@CrossOrigin(origins= "http://localhost:5173")
public class BusController {
	
	private BusService busService;

	
	@PostMapping("/add")
	private ResponseEntity<?> addBus(@RequestBody BusDto dto ){
	
		Long id= (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return ResponseEntity.ok(busService.addBus(dto,id));
	}
	
	@DeleteMapping("/delete/{busId}")
	private ResponseEntity<?> deleteBus(@PathVariable Long busId){
		
		Long id= (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return ResponseEntity.ok(busService.deleteBus(busId,id));
	}
	
	@GetMapping("/get-buses")
	private ResponseEntity<?> getAllBuses(){
		
		Long id= (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

		List<BusDto> buses = busService.getAllBuses(id);
		
		if(buses.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();}
		System.out.println(buses);
		return ResponseEntity.ok(buses);
	}
	@GetMapping("/getbus/{busId}")
    public ResponseEntity<?> getBusById( @PathVariable Long busId) {
		Long id= (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        BusDto bus = busService.getBus(busId,id);
        return ResponseEntity.ok(bus);
    }

  
    @PutMapping("/update/{busId}")
    public ResponseEntity<?> updateBus(
           
            @PathVariable Long busId,
            @RequestBody UpdateBusDto dto) {
    

        
        return ResponseEntity.ok( busService.updateBus(dto, busId));
    }
}
	
	
	


