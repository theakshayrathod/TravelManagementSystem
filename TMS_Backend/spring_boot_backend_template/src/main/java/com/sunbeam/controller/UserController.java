package com.sunbeam.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.AuthResp;
import com.sunbeam.dto.SignInDto;
import com.sunbeam.dto.SignUpDto;
import com.sunbeam.dto.UserProfileDto;
import com.sunbeam.entity.User;
import com.sunbeam.entity.UserRole;
import com.sunbeam.security.JwtUtils;
import com.sunbeam.service.UserPasswordDto;
import com.sunbeam.service.UserService;

import io.jsonwebtoken.Claims;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {
	
	private UserService userService;
	
	private AuthenticationManager authenticationManager;
	private JwtUtils jwtUtils;

	
	@PostMapping("/signin")
	public ResponseEntity<?> loginUser(@RequestBody SignInDto dto){		
//		SignInResDto u = userService.loginUser(dto);
//		return ResponseEntity.ok(u);		
		
		Authentication authToken = new UsernamePasswordAuthenticationToken(dto.getEmail(),dto.getPassword());
		
		
		
		Authentication validAuth = authenticationManager.authenticate(authToken);
		User user = userService.getUserByEmail(authToken.getName());
//		System.out.println(authToken);
//		System.out.println(validAuth);
		
		
		return ResponseEntity.status(HttpStatus.OK)
				.body(new AuthResp("Succesful Login",jwtUtils.generateJwtToken(validAuth),user.getName(),user.getEmail(), user.getRole()));
		
		
		
	}
	
	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody SignUpDto dto){	
		
		return ResponseEntity.ok(userService.signUp(dto));		
	}
	
	@GetMapping("/get")
	public ResponseEntity<?> getProfile(@RequestHeader("Authorization") String authHeader){
		String token = authHeader.replace("Bearer ", "");
		Claims claims=jwtUtils.validateJwtToken(token);	
		
		
		return ResponseEntity.ok(userService.getUser(claims.get("id", Long.class)));
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> updateProfile(@RequestHeader("Authorization")  String authHeader, @RequestBody UserProfileDto dto){		
		String tokenString = authHeader.replace("Bearer ", "");
		Claims claims = jwtUtils.validateJwtToken(tokenString);

		return ResponseEntity.ok(userService.updateProfile(claims.get("id",Long.class), dto));
	}
	
	@PutMapping("/change-password")
	public ResponseEntity<?> changePassword(@RequestHeader("Authorization")  String authHeader, @RequestBody UserPasswordDto dto){
		String tokenString = authHeader.replace("Bearer ", "");
		Claims claims = jwtUtils.validateJwtToken(tokenString);
		return ResponseEntity.ok(userService.changePassword(claims.get("id",Long.class), dto));
	}

}
