package com.gms.web.generic;

import java.util.*;



/*
 Generic 타입을 생성하는데
 class Member{} -> static 상태로 Member 타입을 생성()
 List<Member>
 <-> Dynamic 한 타입 생성
 장점 = 타입의 안정성 제고으형변환 생략
 캐스팅 안하려고 ...
 
 */
public class GenericIntro {
	
	@SuppressWarnings("static-access")
	public static void main(String[] args) {
		System.out.println("===============[1]=================");
		Item<String> itName = new Item<>();
		itName.setOne("갤노트");
		Item<Integer> itVers = new Item<>();
		itVers.setOne(9);
		System.out.println(itName.getOne() + itVers.getOne());
		System.out.println("===============[2]=================");
		Item<List<String>> it = new Item<>();
		it.setSome(Arrays.asList(new String[] {"HELLO","MY NAME IS ","GURIGURI"}));
		System.out.println(it.getSome());
		System.out.println("===============[3]=================");
		FruitBox<Fruit> fbox = new FruitBox<>();
		FruitBox<Fruit> abox= new FruitBox<>();
		fbox.add(new Apple());
		fbox.add(new Grape());
		abox.add(new Apple());
		abox.add(new Grape());
		
		System.out.println(new Mixer().makeJuice(fbox));
		System.out.println(new Mixer().makeJuice(abox));
	}
	
}
