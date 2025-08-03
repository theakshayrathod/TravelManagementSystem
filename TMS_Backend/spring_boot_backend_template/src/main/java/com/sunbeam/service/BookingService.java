package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.BookDto;
import com.sunbeam.dto.BookingDto;

public interface BookingService {
	List<BookingDto> getBookingById(Long id);

	ApiResponse bookingByUserId(BookDto dto, Long userId);

}
