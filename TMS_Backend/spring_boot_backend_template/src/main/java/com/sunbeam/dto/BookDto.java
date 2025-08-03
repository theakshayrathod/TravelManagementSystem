package com.sunbeam.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
@Setter
@Getter

public class BookDto {
	
	private Long scheduleId;
	private List<String>seatnumber;
	private Long pickupId;
	private Long dropId;

}
