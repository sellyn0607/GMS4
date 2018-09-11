package com.gms.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gms.web.domain.MemberDTO;
@Repository
public interface MemberMapper {
	public void insert(MemberDTO p);
	public List<?> selectList(Map<?,?> p);
	public List<?> selectSearch(Map<?,?> p);
	public MemberDTO selectOne(String p);
	public int count(Map<?,?> p);
	public void update(MemberDTO p);
	public void delete(MemberDTO p);
	public int login(MemberDTO p);
}