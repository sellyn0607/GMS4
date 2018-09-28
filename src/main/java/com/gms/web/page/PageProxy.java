package com.gms.web.page;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import lombok.Data;
@Data
public class PageProxy implements Proxy{
	private Pagination pagination;
	private HttpServletRequest request;
	
	@Override
	public void carryOut(Map<?,?> m) {
		this.pagination = new Pagination();
		pagination.carryOut(m);
	}
}
