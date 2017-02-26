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
		
	
	@RequestMapping(method = RequestMethod.POST, value = "/item")
	public boolean saveItem(@RequestBody Item item){
		for(Cart cart : this.phoneService.getCartProducts()){
			if (cart.getItem() == item) {
				return false;
			}
		}
		this.phoneService.saveCartItem(item);
		return true;
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/item")
	public boolean updateItem(@RequestBody Item item){
		this.phoneService.updateCartItem(item);
		return true;
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/item")
	public boolean deleteItem(@RequestBody Item item){
		this.phoneService.deleteCartItem(item);
		return true;
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
