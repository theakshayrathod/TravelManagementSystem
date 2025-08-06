package com.sunbeam.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.SignInDto;
import com.sunbeam.dto.SignInResDto;
import com.sunbeam.dto.SignUpDto;
import com.sunbeam.dto.UserProfileDto;
import com.sunbeam.service.UserPasswordDto;
import com.sunbeam.service.UserService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
@CrossOrigin(origins = "*")
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
	
	@GetMapping("/get/{id}")
	public ResponseEntity<?> getProfile(@PathVariable Long id){
		return ResponseEntity.ok(userService.getUser(id));
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateProfile(@PathVariable Long id, @RequestBody UserProfileDto dto){		

		return ResponseEntity.ok(userService.updateProfile(id, dto));
	}
	
	@PutMapping("/change-password/{id}")
	public ResponseEntity<?> changePassword(@PathVariable Long id, @RequestBody UserPasswordDto dto){
		return ResponseEntity.ok(userService.changePassword(id, dto));
	}

}
