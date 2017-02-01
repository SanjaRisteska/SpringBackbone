package com.seavus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.seavus.entities.Phone;
import com.seavus.services.PhoneService;

@RestController
@RequestMapping("/api/phones")
public class PhoneRestController {

	@Autowired
	private PhoneService phoneService;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Phone> getAllPhones(){
		return this.phoneService.getAllPhones();
	}
		
	@RequestMapping(method = RequestMethod.POST, value = "/phone/{id}")
	public Phone savePhone(@RequestBody Phone phone){
		this.phoneService.savePhone(phone);
		return phone;
	}
}
