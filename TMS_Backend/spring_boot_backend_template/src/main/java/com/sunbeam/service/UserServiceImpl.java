package com.sunbeam.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.sunbeam.custom_exception.AuthenticationFailureException;
import com.sunbeam.custom_exception.InvalidInputException;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.SignInDto;
import com.sunbeam.dto.SignInResDto;
import com.sunbeam.dto.SignUpDto;
import com.sunbeam.dto.UserProfileDto;
import com.sunbeam.entity.User;
import com.sunbeam.entity.UserRole;

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
			throw new InvalidInputException("Email Already Exist");
		}
		
		
		
		User u=modelMapper.map(dto, User.class);
		
		u.setRole(UserRole.valueOf("PASSANGER"));
		
		userDao.save(u);
		
		return new ApiResponse("Account Created Succesfully");
	}

	@Override
	public UserProfileDto getUser(Long id) {
		// TODO Auto-generated method stub
		User user = userDao.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

		
		return new UserProfileDto( user.getName(), user.getEmail(), user.getContactNo(), user.getGender());
	}

	@Override
	public ApiResponse updateProfile(Long id, UserProfileDto dto) {
		// TODO Auto-generated method stub
		User user = userDao.findById(id)
	            .orElseThrow(() -> new RuntimeException("User not found"));
		
		user.setName(dto.getName());
		user.setEmail(dto.getEmail());
		user.setContactNo(dto.getContact());
		user.setGender(dto.getGender());
		
		userDao.save(user);
		return new ApiResponse("User Updated successfully");
	}

	@Override
	public ApiResponse changePassword(Long id, UserPasswordDto dto) {
		// TODO Auto-generated method stub
		User user = userDao.findById(id).orElseThrow(() -> new RuntimeException("User not Found"));
		User u=modelMapper.map(dto, User.class);
		
		if(dto.getPassword()==u.getPassword()) {
			user.setPassword(dto.getNewPassword());
		}else {
			return new ApiResponse("Not password set");
		}
		
		return new ApiResponse("New Password set");
	}
	
	
	

}
