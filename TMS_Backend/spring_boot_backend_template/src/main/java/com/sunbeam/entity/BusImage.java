package com.sunbeam.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@Table(name = "bus_images")
public class BusImage extends BaseEntity{
	private String imageUrl;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "bus_id",nullable = false)
	private Bus bus;
	

}
