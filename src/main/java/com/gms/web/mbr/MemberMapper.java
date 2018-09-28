package com.gms.web.mbr;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;
@Repository
public interface MemberMapper {
	public void post(Member p); // add 
	public List<?> selectList(Map<?,?> p);
	public List<?> selectSearch(Map<?,?> p);
	public Member get(Member p); // 한명 셀렉 
	public Integer count(Map<?,?> p);
	public void put(Member p); // 업데이트
	public void delete(Member p);
	public Member test();
	public String login(Member p);
	public String exist(String p);
}