package com.sunbeam.service;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.OperatorProfileDto;
import com.sunbeam.dto.OperatorSignUpDto;

public interface OperatorService {
	ApiResponse signUp(OperatorSignUpDto dto);

	OperatorProfileDto getOperator(Long id);

	void updateProfile(Long operatorId, OperatorProfileDto dto);
	

}
