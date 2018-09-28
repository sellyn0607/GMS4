package com.gms.web.brd;

import java.util.Arrays;
import java.util.Date;

import org.springframework.stereotype.Component;

import lombok.Data;
@Component
@Data
public class Board {
	
	private int bno;
	private String title;
	private String content;
	private String writer;
	private String regdate;
	private int viewcnt;
	private int replycnt;
	
	private String[] files;
	
		
	
}
