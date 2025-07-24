package com.sunbeam.exception_handler;

import java.time.LocalDateTime;

public class InvalidinputException extends RuntimeException {
	
	private String msg;
	private LocalDateTime timeStamp;
	public InvalidinputException(String msg) {
		this.msg = msg;
		this.timeStamp = LocalDateTime.now();
	}
	
	
	
	
	

}
