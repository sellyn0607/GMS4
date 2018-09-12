package com.gms.web.mbr;

import java.util.HashMap;
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
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.support.RequestPartServletServerHttpRequest;

import com.gms.web.cmm.Util;



@RestController
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberCtrl {
	@Autowired Member member;
	@Autowired MemberService memberService;
	@Autowired MemberMapper mapper;
	@RequestMapping(value="/add/{dir}/{page}",method=RequestMethod.POST)
	public String add(@ModelAttribute("member") Member member,
			@PathVariable String dir,
			@PathVariable String page) {
		memberService.add(member);
		return "public:"+dir+"/"+page+".tiles";
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
		memberService.modify(user);
		return "login:"+dir+"/"+page+".tiles";
	}
	@RequestMapping("/remove")
	public String remove(@ModelAttribute("user") Member user,HttpSession session,HttpServletRequest request) {
		
		memberService.remove(user);
		return "redirect:/";
	}
	
	@PostMapping("/login/{dir}/{page}")
	public String login(@PathVariable String dir,
			@PathVariable String page,Model model,
			@ModelAttribute("member") Member param) {
		
		/*Predicate<String> p = s -> s.equals("1");
		p.test(mapper.login(param));*/
		String result="";
		if(Predicate.isEqual("1").test(mapper.login(param))) {
			//model.addAttribute("user", mapper.selectOne(param.getUserid()));
			Member m = new Member();
			m= mapper.selectOne(param.getUserid());
			Util.log.accept(m.toString());
			result ="login:"+dir+"/"+page+".tiles";
		}else {
			result ="public:member/login.tiles";
		}
			
				return result;
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