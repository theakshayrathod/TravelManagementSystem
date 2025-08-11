package com.sunbeam.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.sunbeam.custom_exception.InvalidInputException;
import com.sunbeam.dao.BusDao;
import com.sunbeam.dao.OperatorDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.BusDto;
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
		
		System.err.println(bus.isPowerOutlet());
		System.err.println(bus.isTv());
		System.err.println(bus.isWifi());
		
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
	public List<BusDto> getAllBuses(long operatorId) {
		if(!operatorDao.existsById(operatorId)){
			throw new InvalidInputException("operator not found");
			
		}
//		Operator op= operatorDao.findByOperatorId(operatorId).orElseThrow(()->new InvalidinputException("Invalid Operator ID"));
//		op.getBuses().size();
//		return op.getBuses().stream().map((e)->mapper.map(e, BusDto.class)).toList();
		
		return busDao.findByOperatorOperatorId(operatorId).stream().map((e)->mapper.map(e, BusDto.class)).toList();
		
	}

	@Override
	public ApiResponse updateBus(BusDto dto, Long busId) {
	
		return null;
	}

}
