package com.sunbeam.exception_handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.sunbeam.custom_exception.AuthenticationFailureException;
import com.sunbeam.custom_exception.InvalidInputException;
import com.sunbeam.dto.ApiResponse;


@RestControllerAdvice
public class GlobalExceptionHandling {
	
	@ExceptionHandler(AuthenticationFailureException.class)
	public ResponseEntity<?> handleAuthenticationFailureException(AuthenticationFailureException e){
		
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		
	}
	
	@ExceptionHandler(InvalidInputException.class)
	public ResponseEntity<?> handleInvalidInputException(InvalidInputException e){
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
	}
	
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> handleException(Exception e){
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse(e.getMessage()));
	}
	

}
