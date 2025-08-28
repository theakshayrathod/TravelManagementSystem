package com.sunbeam.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	public ResponseEntity<?> createBooking(@RequestBody BookDto dto) {
		Long id= (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return ResponseEntity.status(HttpStatus.CREATED).body(bookingService.bookingByUserId(dto, id));
	}

	@GetMapping("/operator")
	public ResponseEntity<?> getBookingsByOperatorId() {
		Long id= (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		List<BookingDto> bookings = bookingService.getBookingById(id);
		return ResponseEntity.ok(bookings);
	}
	
	@GetMapping("/user")
	public ResponseEntity<?> getBookingByUserId(){
		
		Long id= (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	
		
		List<MyBookingDto> bookings = bookingService.getBookingsByUserId(id);
		
		return ResponseEntity.ok(bookings);
	}
	
	@GetMapping("/confirm/{bookingId}")
	public ResponseEntity<?> getConfirmBooking(@PathVariable Long bookingId){
		
		return ResponseEntity.ok(bookingService.getBookingByUserId(bookingId));
		
	}
	
	
	@PutMapping("/cancel/{id}")
	public ResponseEntity<?> cancelBooking(@PathVariable Long id){
		return ResponseEntity.ok(bookingService.cancelBooking(id));
		
	}
	
	
	
	
	
	
	

}
