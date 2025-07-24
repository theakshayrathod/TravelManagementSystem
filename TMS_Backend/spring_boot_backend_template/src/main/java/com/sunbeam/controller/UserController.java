package com.sunbeam.controller;

import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.SignInDto;
import com.sunbeam.dto.SignInResDto;
import com.sunbeam.dto.SignUpDto;
import com.sunbeam.entity.User;
import com.sunbeam.service.UserService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
	private UserService userService;

	
	@PostMapping
	public ResponseEntity<?> loginUser(@RequestBody SignInDto dto){
		
		SignInResDto u = userService.loginUser(dto);
		
		
		
		return ResponseEntity.ok(u);
		
	}
	
	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody SignUpDto dto){
		
		return ResponseEntity.ok(userService.signUp(dto));
		
	}
	
	
	

}
