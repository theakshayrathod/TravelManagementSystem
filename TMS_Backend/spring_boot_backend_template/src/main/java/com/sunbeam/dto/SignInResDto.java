package com.sunbeam.dto;

import com.sunbeam.entity.Gender;
import com.sunbeam.entity.UserRole;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignInResDto {
	
	
	private String name;
	private String email;
	private Gender gender;
	private String contactNo;
	private UserRole role;

}
