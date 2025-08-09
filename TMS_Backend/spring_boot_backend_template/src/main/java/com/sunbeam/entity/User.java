package com.sunbeam.entity;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User extends BaseEntity implements UserDetails {
	
	@Column(name = "name" , length = 30)
	private String name;
	@Column(length = 50, unique = true)
	private String email;
	@Column(length = 300,nullable = false)
	private String password;
	@Transient
	private String confirmPassword;
	@Column(name = "contact_no" , length = 20)
	private String contactNo;
	@Enumerated(EnumType.STRING)
	private Gender gender;
	@Enumerated(EnumType.STRING)	
	private UserRole role;
	
	
	@OneToOne(mappedBy = "user",cascade = CascadeType.ALL)   
	private Operator operator;

	public User(String name, String email, String password, String confirmPassword, String contactNo, Gender gender,
			UserRole role, Operator operator) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.confirmPassword = confirmPassword;
		this.contactNo = contactNo;
		this.gender = gender;
		this.role = role;
		this.operator = operator;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		
		
		return List.of(new SimpleGrantedAuthority(this.role.name()));
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return this.email;
	}
	
	
	
	
	
	
	
	

}




