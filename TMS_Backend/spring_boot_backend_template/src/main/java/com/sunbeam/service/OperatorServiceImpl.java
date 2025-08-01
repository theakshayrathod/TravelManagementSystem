package com.sunbeam.service;


import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.sunbeam.custom_exception.InvalidInputException;
import com.sunbeam.dao.UserDao;

import com.sunbeam.dto.BusDto;
import com.sunbeam.dto.OperatorProfileDto;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.OperatorSignUpDto;
import com.sunbeam.entity.Bus;
import com.sunbeam.entity.BusImage;
import com.sunbeam.entity.Gender;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.OperatorSignUpDto;

import com.sunbeam.entity.Operator;
import com.sunbeam.entity.User;
import com.sunbeam.entity.UserRole;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class OperatorServiceImpl implements OperatorService {

  
	private UserDao userDao;
	private OperatorDao operatorDao;
	private ModelMapper modelMapper;


   
	
	
	@Override
	public ApiResponse signUp(OperatorSignUpDto dto) {
		if(userDao.existsByEmail(dto.getEmail())){
			throw new InvalidInputException("Email Already Exist");
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





	@Override
	public OperatorProfileDto getOperator(Long id) {
		// TODO Auto-generated method stub
		
		Operator op = operatorDao.findByOperatorId(id);
		
		User user = op.getUser();
		
		
		return new OperatorProfileDto(
				user.getName(),
				user.getEmail(),
				user.getContactNo(),
				user.getGender(),
				op.getCompanyName(),
				op.getLicenseNumber(),
				op.getAddress());
	}





	@Override
	public void updateProfile(Long operatorId, OperatorProfileDto dto) {
		// TODO Auto-generated method stub
		Operator operator = operatorDao.findByOperatorId(operatorId);
		if(operator == null){
			throw new RuntimeException("Operator not found");
		}
		
		
		operator.setCompanyName(dto.getCompanyName());
        operator.setLicenseNumber(dto.getLicenseNumber());
        operator.setAddress(dto.getAddress());
        
        User user = operator.getUser();
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setContactNo(dto.getContactNo());

        userDao.save(user);
        operatorDao.save(operator);
		
	}


//	
	
	

}
