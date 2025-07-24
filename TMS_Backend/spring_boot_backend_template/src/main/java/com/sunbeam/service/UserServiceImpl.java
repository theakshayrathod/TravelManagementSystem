package com.sunbeam.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.sunbeam.custom_exception.AuthenticationFailureException;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.SignInDto;
import com.sunbeam.dto.SignInResDto;
import com.sunbeam.dto.SignUpDto;
import com.sunbeam.entity.User;
import com.sunbeam.entity.UserRole;
import com.sunbeam.exception_handler.InvalidinputException;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;


@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService {
	
	private UserDao userDao;
	private ModelMapper modelMapper;

	@Override
	public SignInResDto loginUser(SignInDto dto) {
		
		User user = userDao.findByEmailAndPassword(dto.getEmail(), dto.getPassword()).orElseThrow(() -> new AuthenticationFailureException("User Not Found"));
		SignInResDto userDto=modelMapper.map(user,SignInResDto.class);
	
		return userDto;
	}

	@Override
	public ApiResponse signUp(SignUpDto dto) {
		
		if(userDao.existsByEmail(dto.getEmail())) {
			throw new InvalidinputException("Email Already Exists");
		}
		
		
		
		User u=modelMapper.map(dto, User.class);
		
		u.setRole(UserRole.valueOf("PASSANGER"));
		
		userDao.save(u);
		
		
		
		
		
		
		// TODO Auto-generated method stub
		return new ApiResponse("Account Created Succesfully");
	}
	
	
	

}
