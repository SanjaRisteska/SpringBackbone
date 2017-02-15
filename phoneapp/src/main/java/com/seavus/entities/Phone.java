package com.seavus.entities;

import javax.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@DiscriminatorColumn(discriminatorType = DiscriminatorType.STRING)
public class Phone extends EntityClass {

	private String manufacturer;
	private String model;
	private int price;
	private String color; 
	private String img;
	private String size;
	private String weight;
	private String cpu;
	private String primary_camera;
	private String secondary_camera;
	private String link;

	public Phone(){}

	
	public Phone(String manufacturer, String model, int price, String color, String img, String size, String weight,
			String cpu, String primaryCamera, String secondaryCamera, String link) {
		this.manufacturer = manufacturer;
		this.model = model;
		this.price = price;
		this.color = color;
		this.img = img;
		this.size = size;
		this.weight = weight;
		this.cpu = cpu;
		this.primary_camera = primaryCamera;
		this.secondary_camera = secondaryCamera;
		this.link = link;
	}

	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}
	
	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public String getCpu() {
		return cpu;
	}

	public void setCpu(String cpu) {
		this.cpu = cpu;
	}

	public String getPrimaryCamera() {
		return primary_camera;
	}

	public void setPrimaryCamera(String primaryCamera) {
		this.primary_camera = primaryCamera;
	}

	public String getSecondaryCamera() {
		return secondary_camera;
	}

	public void setSecondaryCamera(String secondaryCamera) {
		this.secondary_camera = secondaryCamera;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}
	
}
