package com.gms.web.brd;

import java.util.*;

import com.gms.web.brd.Board;
import com.gms.web.cmm.Criteria;
import com.gms.web.cmm.SearchCriteria;
import com.gms.web.page.Pagination;

public interface BoardMapper {

  public void create(Board vo) ;

  public Board read(String bno);

  public void update(Board vo);

  public void delete(String bno);

  public List<Board> listAll(Pagination p);
  
  public List<Board> listOne(Map<?,?> p);
  
  public int count();
  
  public int listOneCount(String p);

  public List<Board> listPage(int page) throws Exception;

  public List<Board> listCriteria(Criteria cri) throws Exception;

  public int countPaging(Criteria cri) throws Exception;
  
  //use for dynamic sql
  
  public List<Board> listSearch(SearchCriteria cri)throws Exception;
  
  public int listSearchCount(SearchCriteria cri)throws Exception;
  
  
  public void updateReplyCnt(Integer bno, int amount)throws Exception;
  
  
  public void updateViewCnt(Integer bno)throws Exception;
  
  public void addAttach(String fullName)throws Exception;
  
  public List<String> getAttach(Integer bno)throws Exception;  
   
  public void deleteAttach(Integer bno)throws Exception;
  
  public void replaceAttach(String fullName, Integer bno)throws Exception;
  
}
