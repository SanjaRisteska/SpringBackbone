package com.seavus.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seavus.dao.PhoneDao;
import com.seavus.entities.Phone;

@Service
public class PhoneService {
	
	@Autowired
	private PhoneDao phoneDao;
	
	public List<Phone> getAllPhones(){
		return this.phoneDao.getAllPhones();
	}

	public void savePhone(Phone phone) {
		this.phoneDao.savePhone(phone);
	}

}
