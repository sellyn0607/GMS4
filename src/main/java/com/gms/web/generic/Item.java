package com.gms.web.generic;

import java.util.*;
@SuppressWarnings("unchecked")
public class Item<T> {
	T one;
	List<T> some = new ArrayList<>();
	public T getOne() {return one;}
	public void setOne(T t) {this.one = t;}
	public List<T> getSome() {return some;}
	public void setSome(T t) {this.some = (List<T>) t;}
	 
}
