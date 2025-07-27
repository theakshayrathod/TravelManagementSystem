package com.sunbeam.service;


import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.BusDao;
import com.sunbeam.dao.OperatorDao;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.BusDto;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.OperatorSignUpDto;
import com.sunbeam.entity.Bus;
import com.sunbeam.entity.BusImage;
import com.sunbeam.entity.Operator;
import com.sunbeam.entity.User;
import com.sunbeam.entity.UserRole;
import com.sunbeam.exception_handler.InvalidinputException;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class OperatorServiceImpl implements OperatorService {

  
	private UserDao userDao;
	private ModelMapper modelMapper;


   
	
	
	@Override
	public ApiResponse signUp(OperatorSignUpDto dto) {
		if(userDao.existsByEmail(dto.getEmail())){
			throw new InvalidinputException("Email Already Exist");
		}
		
		User u = modelMapper.map(dto, User.class);
		
		u.setRole(UserRole.BUSOPERATOR);
		
		Operator operator = new Operator();
		operator.setAddress(dto.getAddress());
		operator.setCompanyName(dto.getCompanyName());
		operator.setLicenseNumber(dto.getLicenseNumber());
		
		operator.setUser(u);
		u.setOperator(operator);
		
		userDao.save(u);
		
		return new ApiResponse("Operator registration successfully");
	}


//	
	
	

}
