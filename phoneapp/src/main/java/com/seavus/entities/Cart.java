package com.seavus.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "cart")
public class Cart {
	@Id
	@GeneratedValue
	private int id;
	@OneToOne
	@JoinColumn(name = "product_id")
	private Phone phone;
	private int quantity;
	
	public Cart(){}
	
	public Cart(Phone phone, int quantity){
		this.phone = phone;
		this.quantity = quantity;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public Phone getProduct() {
		return phone;
	}
	public void setProduct(Phone phone) {
		this.phone = phone;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
}
