package com.sunbeam.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.BusDao;
import com.sunbeam.dao.OperatorDao;
import com.sunbeam.dto.BusDto;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.entity.Bus;
import com.sunbeam.entity.BusImage;
import com.sunbeam.entity.Operator;
import com.sunbeam.exception_handler.InvalidinputException;

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
			throw new InvalidinputException("Bus already listed");
		}
		
		Bus bus = mapper.map(dto, Bus.class);
		
		System.err.println(bus.isPowerOutlet());
		System.err.println(bus.isTv());
		System.err.println(bus.isWifi());
		
		Operator operator = operatorDao.findById((id)).orElseThrow(()-> new InvalidinputException("Invalid Operator Id.."));
		
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
	public ApiResponse deleteBus(Long busId) {
		Bus bus = busDao.findById(busId).orElseThrow(() -> new InvalidinputException("Bus not found"));
		
		busDao.delete(bus);
		return null;
	}

	@Override
	public List<BusDto> getAllBuses(long operatorId) {
		
		if(!operatorDao.existsById(operatorId)) {
			throw new InvalidinputException("Operator Not Found...");
		}
		return busDao.findById(operatorId).stream().map(entity-> mapper.map(entity, BusDto.class)).toList();
		
	}

	@Override
	public ApiResponse updateBus(BusDto dto, Long busId) {
		// TODO Auto-generated method stub
		return null;
	}

}
