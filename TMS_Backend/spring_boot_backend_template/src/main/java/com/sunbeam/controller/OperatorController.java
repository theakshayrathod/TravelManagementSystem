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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.BusDto;
import com.sunbeam.dto.OperatorProfileDto;
import com.sunbeam.dto.OperatorSignUpDto;
import com.sunbeam.entity.Operator;
import com.sunbeam.service.OperatorService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/operator")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class OperatorController {
	
	private OperatorService operatorService;
	
	
	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody OperatorSignUpDto dto){
		return ResponseEntity.status(HttpStatus.CREATED).body(operatorService.signUp(dto));
	}
	
	@GetMapping("/get/{id}")
    public ResponseEntity<OperatorProfileDto> getProfile(@PathVariable Long id) {
        return ResponseEntity.ok(operatorService.getOperator(id));
    }
	
	 @PutMapping("/update/{operatorId}")
	    public ResponseEntity<?> updateProfile(@PathVariable Long operatorId, @RequestBody OperatorProfileDto dto) {
	        
	        return ResponseEntity.ok(operatorService.updateProfile(operatorId, dto));
	    }
	

}
