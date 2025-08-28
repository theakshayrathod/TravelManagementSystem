package com.sunbeam.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.sunbeam.custom_exception.InvalidInputException;
import com.sunbeam.dao.BusDao;
import com.sunbeam.dao.OperatorDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.BusDto;
import com.sunbeam.dto.UpdateBusDto;
import com.sunbeam.entity.Bus;
import com.sunbeam.entity.BusImage;
import com.sunbeam.entity.Operator;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor

public class BusServiceImpl implements BusService {
	
	private BusDao busDao;
	private OperatorDao operatorDao;
	private ModelMapper mapper;

	@Override
	public ApiResponse addBus(BusDto dto ,Long id) {
		
		if(busDao.existsByRegistrationNumber(dto.getRegistrationNumber())) {
			throw new InvalidInputException("Bus already listed");
		}
		
		Bus bus = mapper.map(dto, Bus.class);		
		Operator operator = operatorDao.findById((id)).orElseThrow(()-> new InvalidInputException("Invalid Operator Id.."));
		
		bus.setOperator(operator);
		
		
		List<BusImage>images = dto.getImages().stream().map(i->{
			BusImage busImage = mapper.map(i, BusImage.class);
			i.setBus(bus);
			return busImage;
		}).toList();
		
		bus.setImages(images);
		
		operator.addBus(bus);
		
		busDao.save(bus);
				
		return new ApiResponse("New bus Add successfully..") ;
	}

	@Override
	public ApiResponse deleteBus(Long busId , Long operatorId) {
		Bus bus = busDao.findById(busId).orElseThrow(() -> new InvalidInputException("Bus not found"));
		if(bus.getOperator().getOperatorId() != operatorId) {
			throw new InvalidInputException("You can delete only your Bus");
		}
		
		busDao.delete(bus);
		return new ApiResponse("Bus delete successfully");
	}

	@Override
	public List<BusDto> getAllBuses(Long id) {
		if(!operatorDao.existsByUserId(id)){
			throw new InvalidInputException("operator not found");
			
		}

		
		return busDao.findByOperatorUserId(id).stream().map((e)->mapper.map(e, BusDto.class)).toList();
		
	}

	@Override
	public ApiResponse updateBus(UpdateBusDto dto, Long busId) {
		
	Bus bus = busDao.findById(busId).orElseThrow(()-> new InvalidInputException("Bus not found....!"));
	Long id = (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	if(bus.getOperator().getOperatorId() != id) {
		throw new InvalidInputException("You can update your bus only");
	}
	
	bus.setBusName(dto.getBusName());
	bus.setBusType(dto.getBusType());
	bus.setPowerOutlet(dto.isPowerOutlet());
	bus.setTv(dto.isTv());
	bus.setWifi(dto.isWifi());
	bus.setTotalSeats(dto.getTotalSeats());
	bus.setRegistrationNumber(dto.getRegistrationNumber());


	busDao.save(bus);
	
		return new ApiResponse("Bus update successfully");
	}

	@Override
	public BusDto getBus(Long busId,Long id) {
		Bus bus = busDao.findById(busId).orElseThrow(()-> new InvalidInputException("Bus not found"));
		
		if(bus.getOperator().getOperatorId() != id) {
			throw new InvalidInputException("You Can access only your buses");
		}
		
		
		
		return mapper.map(bus, BusDto.class);
	}

}
