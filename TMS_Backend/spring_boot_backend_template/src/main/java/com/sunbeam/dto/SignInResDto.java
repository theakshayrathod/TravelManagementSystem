package com.sunbeam.dto;

import com.sunbeam.entity.UserRole;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignInResDto {
	
	
	private String name;
	private String email;
	private UserRole role;

}
