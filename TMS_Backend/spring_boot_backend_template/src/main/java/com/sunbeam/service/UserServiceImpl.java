package com.sunbeam.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.SignInDto;
import com.sunbeam.dto.SignUpDto;
import com.sunbeam.entity.User;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;


@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService {
	
	private UserDao userDao;
	private ModelMapper modelMapper;

	@Override
	public User loginUser(SignInDto dto) {
		
		User user = null;
		try {
			user = userDao.findByEmailAndPassword(dto.getEmail(), dto.getPassword()).orElseThrow(() -> new Exception("User Not Found"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
				
		
		
		// TODO Auto-generated method stub
		return user;
	}

	@Override
	public ApiResponse signUp(SignUpDto dto) {
		
		User u=modelMapper.map(dto, User.class);
		
		userDao.save(u);
		
		
		
		
		
		
		// TODO Auto-generated method stub
		return new ApiResponse("Account Created Succesfully");
	}
	
	
	

}
