package com.sunbeam.dto;

import com.sunbeam.entity.Gender;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OperatorSignUpDto {
	
	private String name;
	private String email;
	private String contactNo;
	private Gender gender;
	private String password;
	private String companyName;
	private String address;
	private String licenseNo;
	

}
