package com.gms.web.mbr;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data

public class Member {
	//
	String 	userid,
			password,
			ssn,ssn2,
			name,
			roll,
			teamid,
			age,
			subject,
			gender;
}