package com.sunbeam.dto;

import com.sunbeam.entity.Gender;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OperatorProfileDto {
	
	private String name;
	private String email;
	private String contactNo;
	private Gender gender;
	private String companyName;
	private String licenseNumber;
	private String address;
	
	
	public OperatorProfileDto(String name, String email, String contactNo, Gender gender, String companyName, String licenseNumber, String address) {
        this.name = name;
        this.email = email;
        this.contactNo = contactNo;
        this.gender = gender;
        this.companyName = companyName;
        this.licenseNumber = licenseNumber;
        this.address = address;
    }

}