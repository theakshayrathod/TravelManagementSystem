package com.sunbeam.exception_handler;

import java.time.LocalDateTime;

public class InvalidinputException extends RuntimeException {
	
	
	private LocalDateTime timeStamp;
	public InvalidinputException(String msg) {
	super(msg);
		this.timeStamp = LocalDateTime.now();
	}
	
	
	
	
	
	

}
