package com.gms.web.tx;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gms.web.brd.Board;
import com.gms.web.brd.BoardMapper;
import com.gms.web.point.PointMapper;
@Service

public class TxService {
	@Autowired BoardMapper brdmp;
	@Autowired PointMapper pointmp;
	@Autowired Board brd;
	@Autowired HashMap<String,Object> map;
	
	@Transactional
	public Map<?,?> write(Map<?,?> p){
		map.clear();
		brdmp.create((Board)p.get("Board"));
		pointmp.update((Board)p.get("Board"));
		map.clear();
		return map;
	}

	@Transactional
public Map<?,?> delete(Map<?,?> p){
	map.clear();
	String bno="";
	brdmp.delete(bno); // p.get("bno")
	//pointmp.update(map);
	map.clear();
	return map;
}
}
