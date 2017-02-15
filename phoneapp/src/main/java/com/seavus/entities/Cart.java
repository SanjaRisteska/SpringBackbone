package com.seavus.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Cart {

	@Id
	@GeneratedValue
	private int id;
	@ManyToOne
	@JoinColumn(name = "product_id")
	private Item item;
	
	public Cart() {
	}

	public Cart(Item item) {
		super();
		this.item = item;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	}

	
	
}
