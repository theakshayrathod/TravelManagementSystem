package com.sunbeam.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.sunbeam.custom_exception.InvalidInputException;
import com.sunbeam.dao.BookingDao;
import com.sunbeam.dao.PointDao;
import com.sunbeam.dao.ScheduleDao;
import com.sunbeam.dao.SeatDao;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.BookDto;
import com.sunbeam.dto.BookingDto;
import com.sunbeam.entity.Booking;
import com.sunbeam.entity.BookingDetail;
import com.sunbeam.entity.BookingStatus;
import com.sunbeam.entity.Point;
import com.sunbeam.entity.Schedule;
import com.sunbeam.entity.Seat;
import com.sunbeam.entity.SeatStatus;
import com.sunbeam.entity.User;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class BookingServiceImpl implements BookingService {

	private BookingDao bookingDao;
	private UserDao userDao;
	private ScheduleDao scheduleDao;
	private SeatDao seatDao;
	private PointDao pointDao;

	@Override
	public List<BookingDto> getBookingById(Long id) {

		List<Booking> bookings = bookingDao.findByScheduleBusOperatorOperatorId(id);

		return bookings.stream().map(b -> {
			BookingDto bDto = new BookingDto();
			bDto.setBookingId(b.getId());
			bDto.setPassengerName(b.getUser().getName());
			bDto.setRoute(b.getSchedule().getRoute().getSource() + b.getSchedule().getRoute().getDestination());
			bDto.setDate(b.getBookingTime().toString());
			bDto.setTotaleAmount(b.getTotalAmount());

			List<String> seats = b.getBookingDetails().stream().map(d -> d.getSeat().getSeatNumber())
					.collect(Collectors.toList());
			bDto.setSeatNumbers(seats);
			return bDto;

		}).toList();

	}

	@Override
	public ApiResponse bookingByUserId(BookDto dto, Long userId) {
		User u = userDao.findById(userId).orElseThrow(() -> new InvalidInputException("User not found.."));
		Schedule s = scheduleDao.findById(dto.getScheduleId())
				.orElseThrow(() -> new InvalidInputException("Schedule not found"));

		Point pickuPoint = pointDao.findById(dto.getPickupId())
				.orElseThrow(() -> new InvalidInputException("Invalid pickup Point"));
		Point dropPoint = pointDao.findById(dto.getDropId())
				.orElseThrow(() -> new InvalidInputException("Ivalid drop pont"));

		Booking booking = new Booking();
		booking.setUser(u);
		booking.setSchedule(s);
		booking.setBookingTime(LocalDateTime.now());
		booking.setStatus(BookingStatus.CONFIRMED);

		List<BookingDetail> bookingDetails = new ArrayList<>();

		double totalAmount = 0;

		for (String seatNo : dto.getSeatnumber()) {
			Seat seat = seatDao.findByScheduleIdAndSeatNumber(s.getId(), seatNo)
					.orElseThrow(() -> new InvalidInputException("Seat not found"));

			if (seat.getStatus() == SeatStatus.BOOKED) {
				throw new InvalidInputException("Seat already booked" + seatNo);
			}

			seat.setStatus(SeatStatus.BOOKED);

			BookingDetail bDetail = new BookingDetail();

			bDetail.setBooking(booking);
			bDetail.setSeat(seat);
			bDetail.setPickupPoint(pickuPoint);
			bDetail.setDropPoint(dropPoint);

			bookingDetails.add(bDetail);

			totalAmount += s.getFare();

		}

		booking.setTotalAmount(totalAmount);
		booking.setBookingDetails(bookingDetails);

		bookingDao.save(booking);

		return new ApiResponse("Booking successfull");
	}

}
