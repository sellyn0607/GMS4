package com.gms.web.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.websocket.Session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.support.RequestPartServletServerHttpRequest;

import com.gms.web.domain.MemberDTO;
import com.gms.web.service.MemberService;

@Controller
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberController {
	@Autowired MemberDTO member;
	@Autowired MemberService memberService;
	@RequestMapping(value="/add/{dir}/{page}",method=RequestMethod.POST)
	public String add(@ModelAttribute("member") MemberDTO member,
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
	public String modify(@ModelAttribute("user") MemberDTO user,Model model,@PathVariable String dir,
			@PathVariable String page,HttpSession session) {
		memberService.modify(user);
		return "login:"+dir+"/"+page+".tiles";
	}
	@RequestMapping("/remove")
	public String remove(@ModelAttribute("user") MemberDTO user,HttpSession session,HttpServletRequest request) {
		
		memberService.remove(user);
		return "redirect:/";
	}
	@RequestMapping("/login/{dir}/{page}")
	public String login(@PathVariable String dir,
			@PathVariable String page,Model model,
			@ModelAttribute("member") MemberDTO member) {
			String result="";
			if(memberService.login(member)) {
				//session.setAttribute("user", memberService.retrieve(member.getUserid()));
			model.addAttribute("user", memberService.retrieve(member.getUserid()));
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