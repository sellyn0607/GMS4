package com.gms.web.interceptors;

import java.security.PrivateKey;

import javax.crypto.Cipher;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.gms.web.mbr.Member;
import com.gms.web.mbr.MemberMapper;
@Aspect
public class LoginInterceptor extends HandlerInterceptorAdapter {

  private static final String LOGIN = "login";
  private static final Logger logger = LoggerFactory.getLogger(LoginInterceptor.class);
  
  
  @Autowired Member mbr;
  @Autowired MemberMapper membermapper;
  public boolean preHandle(HttpServletRequest request, 
      HttpServletResponse response, Object handler,
      ModelAndView modelAndView) throws Exception {
	  System.out.println("인터셉트 성공!!");
	  
	  boolean result= false;
	  String webRoot = request.getContextPath();
	  
	  String id = (String) request.getSession().getAttribute("loginUser");
	  if(id==null) {
		 
			  System.out.println("인터셉트2");
			  HttpSession session = request.getSession();
			  session.setAttribute("loginUser", "abc");
			  response.sendRedirect(webRoot+"/member/login");
			  result = false;
		  
	  }else {
		  result=true;
	  }
	  
	  return result;
  
}
}