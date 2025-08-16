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
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.BusDto;
import com.sunbeam.dto.UpdateBusDto;
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
	private JwtUtils jwtUtils;
	
	@PostMapping("/add")
	private ResponseEntity<?> addBus(@RequestBody BusDto dto ,@RequestHeader("Authorization") String authHeader){
		String token = authHeader.replace("Bearer ","" );
		Claims claims = jwtUtils.validateJwtToken(token);
		return ResponseEntity.ok(busService.addBus(dto,claims.get("id",Long.class)));
	}
	
	@DeleteMapping("/delete/{busId}")
	private ResponseEntity<?> deleteBus(@PathVariable Long busId,@RequestHeader("Authorization") String authHeader){
		
		String token = authHeader.replace("Bearer ","" );
		Claims claims = jwtUtils.validateJwtToken(token);
		
		return ResponseEntity.ok(busService.deleteBus(busId,claims.get("id",Long.class)));
	}
	
	@GetMapping("/get-buses")
	private ResponseEntity<?> getAllBuses(@RequestHeader("Authorization") String authHeader){
		String token = authHeader.replace("Bearer ","" );
		Claims claims = jwtUtils.validateJwtToken(token);
		
		List<BusDto> buses = busService.getAllBuses(claims.get("id",Long.class));
		
		if(buses.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();}
		System.out.println(buses);
		return ResponseEntity.ok(buses);
	}
	@GetMapping("/getbus/{busId}")
    public ResponseEntity<?> getBusById(
            @RequestHeader("Authorization") String authHeader,
            @PathVariable Long busId) {
        String token = authHeader.replace("Bearer ", "");
        jwtUtils.validateJwtToken(token); // validate user/operator

        BusDto bus = busService.getBus(busId);
        return ResponseEntity.ok(bus);
    }

    // ✅ Update bus by Id
    @PutMapping("/update/{busId}")
    public ResponseEntity<?> updateBus(
            @RequestHeader("Authorization") String authHeader,
            @PathVariable Long busId,
            @RequestBody UpdateBusDto dto) {
        String token = authHeader.replace("Bearer ", "");
        jwtUtils.validateJwtToken(token); // validate token

        
        return ResponseEntity.ok( busService.updateBus(dto, busId));
    }
}
	
	
	


