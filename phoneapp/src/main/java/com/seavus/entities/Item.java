package com.seavus.entities;

import javax.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@DiscriminatorColumn(discriminatorType = DiscriminatorType.STRING)
public class Item extends EntityClass{

	@ManyToOne
	private Phone phone;
	private int quantity;
	
	public Item() {
	}

	public Item(Phone phone, int quantity) {
		super();
		this.phone = phone;
		this.quantity = quantity;
	}

	public Phone getPhone() {
		return phone;
	}

	public void setPhone(Phone phone) {
		this.phone = phone;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	
}
