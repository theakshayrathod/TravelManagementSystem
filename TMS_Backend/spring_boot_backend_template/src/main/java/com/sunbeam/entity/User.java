package com.sunbeam.entity;

import jakarta.persistence.Column;

public class User extends BaseEntity {
	
	@Column(name = "name" , length = 30)
	private String name;
	@Column(length = 50, unique = true)
	private String email;
	@Column(length = 300,nullable = false)
	private String password;
	
	private String confirmPassword;
	private String contactNo;
	private String Gender;
	private UserRole role;

}
