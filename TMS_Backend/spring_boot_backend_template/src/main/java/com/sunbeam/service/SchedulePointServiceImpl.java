package com.sunbeam.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sunbeam.dao.SchedulePointsDao;
import com.sunbeam.dto.SchedulePointInfo;
import com.sunbeam.entity.SchedulePoint;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
@Service
@Transactional
@AllArgsConstructor
public class SchedulePointServiceImpl implements SchedulePointService {
	
	private SchedulePointsDao schedulePointsDao;

	@Override
	public List<SchedulePointInfo> getSchedulePointBySchedule(Long scheduleId) {
		List<SchedulePoint>sPList = schedulePointsDao.findByScheduleId(scheduleId);
		
		List<SchedulePointInfo>schedulePointInfos= sPList.stream().map(sp->{
			 SchedulePointInfo sInfo = new SchedulePointInfo();
			 sInfo.setSchedulePointId(sp.getId());
			 sInfo.setPointId(sp.getPoint().getId());
			 sInfo.setPointName(sp.getPoint().getName());
			 sInfo.setPointAddress(sp.getPoint().getAddress());
			 sInfo.setType(sp.getType());
			 sInfo.setArrivalTime(sp.getArrivalTime());
			 
			 return sInfo;
			 
		 }).toList();
		 
		 return schedulePointInfos;
	}

}
