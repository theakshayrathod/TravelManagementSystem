package com.sunbeam.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RouteDto {
	
	private Long id;
	private String source;
	private String destination;
	private double distance;

}
