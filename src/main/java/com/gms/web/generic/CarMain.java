package com.gms.web.generic;

import java.util.Collections;

public class CarMain {
	public static void main(String[] args) {
		CarBox<BMW> bBox = new CarBox<>();
		CarBox<Avante> aBox = new CarBox<>();
		CarBox<Car> cBox = new CarBox<>();
		aBox.add(new Avante("아반떼a",1500));
		aBox.add(new Avante("아반떼b",1800));
		aBox.add(new Avante("아반떼c",1700));
		bBox.add(new BMW("BMWa",4000));
		bBox.add(new BMW("BMWb",4100));
		bBox.add(new BMW("BMWc",3900));
		cBox.add(new Avante("아반떼a",1500));
		cBox.add(new Avante("아반떼b",1800));
		cBox.add(new Avante("아반떼c",1700));
		cBox.add(new BMW("BMWa",4000));
		cBox.add(new BMW("BMWb",4100));
		cBox.add(new BMW("BMWc",3900));
		
		Collections.sort(aBox.getList(),new CarOrder());
		Collections.sort(bBox.getList(),new CarOrder());
		Collections.sort(cBox.getList(),new CarOrder());
		System.out.println(aBox);
		System.out.println(bBox);
		System.out.println(cBox);
		
		
	}
}
