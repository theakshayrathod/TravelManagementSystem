package com.sunbeam.dto;

import com.sunbeam.entity.Gender;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserProfileDto {
	
	private String name;
	private String email;
	private String contact;
	private Gender gender;
	public UserProfileDto(String name, String email, String contact,Gender gender) {
		
		this.name = name;
		this.email = email;
		this.contact = contact;
		this.gender = gender;
	}
	
	
	
}
