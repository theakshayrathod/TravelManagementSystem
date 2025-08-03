package com.sunbeam.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.BookDto;
import com.sunbeam.dto.BookingDto;
import com.sunbeam.service.BookingService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/booking")
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {

	private BookingService bookingService;

	@PostMapping("/book/{userId}")
	public ResponseEntity<?> createBooking(@RequestBody BookDto dto, @PathVariable Long userId) {
		return ResponseEntity.status(HttpStatus.CREATED).body(bookingService.bookingByUserId(dto, userId));
	}

	@GetMapping("/get/{id}")
	public ResponseEntity<?> getBookings(@PathVariable Long id) {
		List<BookingDto> bookings = bookingService.getBookingById(id);
		return ResponseEntity.ok(bookings);
	}

}
