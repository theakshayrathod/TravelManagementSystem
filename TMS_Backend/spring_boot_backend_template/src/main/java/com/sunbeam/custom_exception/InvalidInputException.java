package com.sunbeam.custom_exception;

import java.time.LocalDateTime;

public class InvalidInputException extends RuntimeException {
	
	
	private LocalDateTime timeStamp;
	public InvalidInputException(String msg) {
	super(msg);
		this.timeStamp = LocalDateTime.now();
	}
	
	
	
	
	
	

}
