package com.gms.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data

public class MemberDTO {
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