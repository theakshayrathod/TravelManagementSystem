package com.sunbeam.dto;

import com.sunbeam.entity.SeatStatus;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class SeatInfoDto {
	
	private Long id;
	private String seatNumber;
	private SeatStatus status;

}
