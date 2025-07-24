package com.sunbeam.dto;

import com.sunbeam.entity.Gender;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUpDto {
	
	private String name;
	private String email;
	private String password;
	private Gender gender;
	private String contactNo;
	

}
