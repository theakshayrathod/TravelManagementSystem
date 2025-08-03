package com.sunbeam.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter

public class BookingDto {

	private Long bookingId;

	private String passengerName;

	private String route;

	private String date;

	private List<String> seatNumbers;

	private double totaleAmount;

}
