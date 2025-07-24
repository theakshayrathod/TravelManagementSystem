package com.sunbeam.custom_exception;

public class AuthenticationFailureException extends RuntimeException {
	
	public AuthenticationFailureException(String msg) {
		super(msg);
	}

}
