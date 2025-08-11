package com.sunbeam.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.BookDto;
import com.sunbeam.dto.BookingDto;
import com.sunbeam.dto.MyBookingDto;
import com.sunbeam.security.JwtUtils;
import com.sunbeam.service.BookingService;

import io.jsonwebtoken.Claims;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/booking")
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {

  

	private BookingService bookingService;
	private JwtUtils jwtUtils;

  
	@PostMapping("/book")
	public ResponseEntity<?> createBooking(@RequestBody BookDto dto, @RequestHeader("Authorization") String authHeader) {
		String token = authHeader.replace("Bearer ", "");
		Claims claims = jwtUtils.validateJwtToken(token);
		return ResponseEntity.status(HttpStatus.CREATED).body(bookingService.bookingByUserId(dto, claims.get("id",Long.class)));
	}

	@GetMapping("/operator")
	public ResponseEntity<?> getBookingsByOperatorId(@RequestHeader("Authorization") String authHeader) {
		String token = authHeader.replace("Bearer ", "");
		Claims claims = jwtUtils.validateJwtToken(token);
		List<BookingDto> bookings = bookingService.getBookingById(claims.get("id", Long.class));
		return ResponseEntity.ok(bookings);
	}
	
	@GetMapping("/user")
	public ResponseEntity<?> getBookingByUserId(@RequestHeader("Authorization") String authHeaders){
		
		String token = authHeaders.replace("Bearer ", "");
		Claims claims = jwtUtils.validateJwtToken(token);
		Long id = claims.get("id",Long.class);		
	
		
		List<MyBookingDto> bookings = bookingService.getBookingsByUserId(id);
		return ResponseEntity.ok(bookings);
	}

}
