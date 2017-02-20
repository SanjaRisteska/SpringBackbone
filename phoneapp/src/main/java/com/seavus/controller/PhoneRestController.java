package com.seavus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.seavus.entities.Cart;
import com.seavus.entities.Item;
import com.seavus.entities.Phone;
import com.seavus.services.PhoneService;

@RestController
@RequestMapping("/api")
public class PhoneRestController {

	private PhoneService phoneService;
        
        @Autowired
        public PhoneRestController(PhoneService phoneService){
            this.phoneService = phoneService;
        }
	
	@RequestMapping(method = RequestMethod.GET, value="/phones")
	public List<Phone> getAllPhones(){
		return this.phoneService.getAllPhones();
	}
		
	@RequestMapping(method = RequestMethod.PUT, value = "/phones/{id}")
	public Phone savePhone(@RequestBody Phone phone){
		List<Item> cartItems = phoneService.getAllItems();
		boolean itemExists = false;
		for (Item item : cartItems) {
			if (item.getPhone().getId() == phone.getId()) {
				phoneService.updateCartItem(item);
				itemExists = true;
				break;
			}
		}
		
		if(!itemExists) {
			Item newItem = new Item(phone, 1);
			phoneService.saveCartItem(newItem);
		}
		return phone;
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/cart/products")
	public List<Cart> getCartProducts(){
		return this.phoneService.getCartProducts();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/items")
	public List<Item> getItems(){
		return this.phoneService.getAllItems();
	}
	
}
