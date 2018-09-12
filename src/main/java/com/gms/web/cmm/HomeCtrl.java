package com.gms.web.cmm;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeCtrl {
//
	static final Logger logger = LoggerFactory.getLogger(HomeCtrl.class);

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(HttpSession session, HttpServletRequest request,Model model) {
		
		model.addAttribute("context",Util.ctx.apply(request));
		return "main";
		
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