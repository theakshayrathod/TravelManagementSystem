package com.sunbeam.service;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.SignInDto;
import com.sunbeam.dto.SignInResDto;
import com.sunbeam.dto.SignUpDto;

public interface UserService {

	SignInResDto loginUser(SignInDto dto);

	ApiResponse signUp(SignUpDto dto);
	
	

}
