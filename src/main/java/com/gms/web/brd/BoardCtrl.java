package com.gms.web.brd;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.mbr.Member;
import com.gms.web.mbr.MemberMapper;
import com.gms.web.page.Pagination;

@RestController

public class BoardCtrl {
	@Autowired Member member;
	@Autowired MemberMapper mapper;
	@Autowired BoardMapper brdmp;
	@Autowired Pagination page;
	@Autowired Map<String,Object> hm;
	
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody Map<String,Object> list(@PathVariable int pageNo){
		hm.clear();
		hm.put("pageNo", pageNo);
		hm.put("count", brdmp.count());
		System.out.println("번호 !"+pageNo);
		page.carryOut(hm);
		hm.clear();
		hm.put("list", brdmp.listAll(page));
		hm.put("page",page);
		return hm;
	}
	
	@RequestMapping("/boards2/{id}/{pageNo}")
	public @ResponseBody Map<String,Object> mylist(@PathVariable int pageNo,@PathVariable String id){
		System.out.println("여기안들어오냐?");	
		hm.clear();
		hm.put("pageNo", pageNo);
		hm.put("userid", id);
		hm.put("count", brdmp.listOneCount(id));
		page.carryOut(hm);
		hm.put("list", brdmp.listOne(page));
		System.out.println("값!!!!!!"+brdmp.listOne(page));
		hm.put("page",page);
		return hm;
	}
}
