package com.sunbeam.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.BusDto;
import com.sunbeam.dto.OperatorProfileDto;
import com.sunbeam.dto.OperatorSignUpDto;
import com.sunbeam.entity.Operator;
import com.sunbeam.security.JwtUtils;
import com.sunbeam.service.OperatorService;

import io.jsonwebtoken.Claims;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/operator")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class OperatorController {
	
	private OperatorService operatorService;
	private JwtUtils jwtUtils;
	
	
	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody OperatorSignUpDto dto){
		return ResponseEntity.status(HttpStatus.CREATED).body(operatorService.signUp(dto));
	}
	
	@GetMapping("/get")
    public ResponseEntity<OperatorProfileDto> getProfile(@RequestHeader("Authorization") String authHeader) {
		Claims claims = jwtUtils.validateJwtToken(authHeader.replace("Bearer ", ""));
        return ResponseEntity.ok(operatorService.getOperator(claims.get("id",Long.class)));
        
    }
	
	 @PutMapping("/update")
	public ResponseEntity<?> updateProfile(@RequestHeader("Authorization") String authHeader, @RequestBody OperatorProfileDto dto) {
		 Claims claims = jwtUtils.validateJwtToken(authHeader.replace("Bearer ", ""));
	        return ResponseEntity.ok(operatorService.updateProfile(claims.get("id",Long.class), dto));
	    }
	

}
