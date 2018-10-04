package com.gms.web.point;

import java.util.Map;

import org.springframework.web.bind.annotation.RestController;

import com.gms.web.brd.Board;

@RestController
public interface PointMapper {
	public void update(Board p);
		
	
}
