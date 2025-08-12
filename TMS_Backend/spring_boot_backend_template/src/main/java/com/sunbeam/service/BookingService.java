package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.BookDto;
import com.sunbeam.dto.BookingDto;
import com.sunbeam.dto.ConfirmBookigDto;
import com.sunbeam.dto.MyBookingDto;
import com.sunbeam.entity.Booking;

public interface BookingService {
	List<BookingDto> getBookingById(Long id);

	Long bookingByUserId(BookDto dto, Long userId);

	List<MyBookingDto> getMyBookings(Long id);

	ConfirmBookigDto getBookingByUserId(Long userId);

}
