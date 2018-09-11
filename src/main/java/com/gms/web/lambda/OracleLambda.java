package com.gms.web.lambda;

import java.util.function.Predicate;

/*
 Consumer<T>  void accept(T t) => C,U,D
 Supplier<T> T get() -> Count
 Function<T,R> R apply(T t) -> R
 Predicate<T> boolean test(T t) -> Login
 UnaryOperator<T> static <T> UnaryOperator<T> identity()	
  */

public class OracleLambda {
	public static void main(String[] args) {
		Predicate<String> p = s-> s.length()== 0;
		String x="";
		String y = "hello";
		String r = (p.test(x))? "NULL":"NOT NULL";
		System.out.println(r);
	}
}