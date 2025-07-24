package com.sunbeam.service;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.SignInDto;
import com.sunbeam.dto.SignUpDto;
import com.sunbeam.entity.User;

public interface UserService {

	User loginUser(SignInDto dto);

	ApiResponse signUp(SignUpDto dto);
	
	

}
