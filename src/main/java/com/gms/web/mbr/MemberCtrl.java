package com.gms.web.mbr;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Predicate;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.websocket.Session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.support.RequestPartServletServerHttpRequest;

import com.gms.web.cmm.Util;



@RestController
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberCtrl {
	@Autowired Member member;
	@Autowired MemberMapper mapper;
	@PostMapping(value="/add")
	public @ResponseBody void add(@RequestBody Member param) {
		System.out.println("가입"+param.toString());
		mapper.post(param);
		//return "public:"+dir+"/"+page+".tiles";
	}
	@RequestMapping("/list")
	public void list() {
	}
	@RequestMapping("/search")
	public void search() {
	}
	@RequestMapping("/retrieve")
	public void retrieve() {
	}
	@RequestMapping("/count")
	public void count() {
		
		
	}
	@RequestMapping("/modify/{dir}/{page}")
	public String modify(@ModelAttribute("user") Member user,Model model,@PathVariable String dir,
			@PathVariable String page,HttpSession session) {
		return "login:"+dir+"/"+page+".tiles";
	}
	@RequestMapping("/remove")
	public String remove(@ModelAttribute("user") Member user,HttpSession session,HttpServletRequest request) {
		
		return "redirect:/";
	}
	
	@PostMapping("/login")
	public @ResponseBody Map<String,Object> login(@RequestBody Member param) {
		Map<String,Object> rmap = new HashMap<>();
		System.out.println("아이디:"+param.getUserid()+" /  비밀번호:"+param.getPassword());
		boolean result=false;
		if(Predicate.isEqual("1").test(mapper.login(param))) {
			 Member m= mapper.get(param);
			 rmap.put("userid", m.getUserid());
			 rmap.put("result",true);
		}
		return rmap;
			
	}
	@RequestMapping("/logout")
	public String logout(HttpSession session) {
			session.setAttribute("user","");
		return "redirect:/";
	}
	@RequestMapping("/fileupload")
	public void fileupload() {
	}
	
	
}