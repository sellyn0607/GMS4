package com.gms.web.cmm;

import java.util.function.Function;

import org.springframework.stereotype.Component;

import com.gms.web.mbr.Member;
@Component
public class Util2 {
	public Function<Member,Member> ageAndGender=(Member m)->{
		
		switch(m.getSsn2()){
		case "1":
			m.setGender("남");
			break;
		case "2":
			m.setGender("여");
			break;
		}
		String a = String.valueOf((2018-Integer.parseInt(m.getSsn().substring(0,2)))+1).substring(2,4);
		m.setAge(a);
		
		
		
		return m;

	};
}
