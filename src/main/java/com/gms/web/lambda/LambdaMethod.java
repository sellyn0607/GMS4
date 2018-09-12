package com.gms.web.lambda;

import java.util.function.*;

public class LambdaMethod {

	public static void main(String[] args) {
		Function<String,Integer> f = Integer::parseInt;
		int a = f.apply("1");
		System.out.println(a);
		Consumer<String> c = System.out::println;
		c.accept("헬로우 ~ ");
	
	}

}
