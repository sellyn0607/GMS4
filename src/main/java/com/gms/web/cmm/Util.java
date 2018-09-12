package com.gms.web.cmm;

import java.util.function.*;

public class Util {
	public static Consumer<Integer> logi= System.out::println;
	public static Consumer<String> log = System.out::println;
	public static Function<String,Integer> convInt = Integer::parseInt;
	public static Function<Integer,String> convStr = String::valueOf;
	/*public static Predicate<String> p1 = equals("");
	public static Predicate<String> notP = p1.negate();*/
}
