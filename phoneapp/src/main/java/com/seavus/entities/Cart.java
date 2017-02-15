package com.seavus.entities;

import javax.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@DiscriminatorColumn(discriminatorType = DiscriminatorType.STRING)
public class Cart extends EntityClass{

	@ManyToOne
	@JoinColumn(name = "product_id")
	private Item item;
	
	public Cart() {
	}

	public Cart(Item item) {
		super();
		this.item = item;
	}

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	}

	
	
}
