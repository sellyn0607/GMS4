package com.gms.web.page;

import java.util.List;
import java.util.Map;

public class Search {
	
	public void execute() {
	List<?> members;
/*	if(!(request.getParameter("option")==null)) {
		//검색리스트 코딩영역
		members = MemberServiceImpl.getInstance().findSome(
				request.getParameter("table")+"/"+
				request.getParameter("option")+"/"+
				request.getParameter("word")); 
	}else {//전체 리스트 코딩 영역
		Map<String,Object>paramMap = new HashMap<>();
		//String pageNum = request.getParameter("pageNum");
		PageProxy pxy = new PageProxy();
	//	pxy.carryOut((pageNum==null)?1:Integer.parseInt(pageNum));
		Pagination page = pxy.getPagination();
		paramMap.put("beginRow", String.valueOf(page.getBeginRow()));
		paramMap.put("endRow", String.valueOf(page.getEndRow()));
		//request.setAttribute("page", page);
		//members = MemberServiceImpl.getInstance().getList(paramMap);
	}
	//공통 코딩 영역
	request.setAttribute("list", members);
	super.execute();*/
	}
}
