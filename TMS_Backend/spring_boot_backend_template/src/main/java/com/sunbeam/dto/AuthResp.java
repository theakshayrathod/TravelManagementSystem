package com.sunbeam.dto;

import com.sunbeam.entity.UserRole;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AuthResp {
	
	private String message;
	private String jwt;
	private String name;
	private String email;
	private UserRole role;

}
