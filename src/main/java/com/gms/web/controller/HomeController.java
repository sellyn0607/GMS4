package com.gms.web.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
//
	static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(HttpSession session, HttpServletRequest request,Model model) {
		String context = request.getContextPath();
		logger.info("Welcome home! The client locale is {}.", context);
		session.setAttribute("context", context); // wow ....
		//request.setAttribute("context",context);
		//model.addAttribute("context", context);
		
		
		return "public:common/content.tiles";
	}
	@RequestMapping("/move/{dir}/{page}")
	public String move(@PathVariable String dir,
			@PathVariable String page) {
			
		logger.info("Welcome home :: move!! The client locale is {}.","Enter" );
		String ret = "public:"+dir+"/"+page+".tiles";
		/*if(page.equals("login")) { 
			ret = "auth:"+dir+"/"+page+".tiles";
		}*/
		return ret;
	}
}