package com.gms.web.brd;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.annotation.MultipartConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.gms.web.mbr.Member;
import com.gms.web.mbr.MemberMapper;
import com.gms.web.page.Pagination;
import com.gms.web.tx.TxService;

@RestController

public class BoardCtrl {
	@Autowired Member member;
	@Autowired MemberMapper mapper;
	@Autowired BoardMapper brdmp;
	@Autowired Pagination page;
	@Autowired Map<String,Object> hm;
	@Autowired TxService tx;
	
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody Map<String,Object> list(@PathVariable int pageNo){
		hm.clear();
		hm.put("pageNo", pageNo);
		hm.put("count", brdmp.count());
		page.carryOut(hm);
		hm.clear();
		hm.put("list", brdmp.listAll(page));
		hm.put("page",page);
		return hm;
	}
	
	@RequestMapping("/boards/{id}/{pageNo}")
	public @ResponseBody Map<String,Object> mylist(@PathVariable int pageNo,@PathVariable String id){
		hm.clear();
		hm.put("pageNo", pageNo);
		hm.put("count", brdmp.listOneCount(id));
		page.carryOut(hm);
		hm.put("userid", id);
		hm.put("beginRow", page.getBeginRow());
		hm.put("endRow", page.getEndRow());
		hm.put("page",page);
		hm.put("list", brdmp.listOne(hm));	
		return hm;
	}
	@PostMapping(value="/boards2/create")
	public @ResponseBody void create(@RequestBody Board param){
		hm.put("Board", param);
		tx.write(hm);
	}
	@RequestMapping("/boards/select/{bno}")
	public @ResponseBody Board select(@PathVariable String bno) {
		return brdmp.read(bno);
	}
	@RequestMapping("/boards/delete/{bno}")
	public @ResponseBody boolean delete(@PathVariable String bno) {
		brdmp.delete(bno);
		return true;
	}
	@PostMapping(value="/boards/update")
	public @ResponseBody void update(@RequestBody Board param){
		brdmp.update(param);
	}
	@Resource(name="uploadPath")
	private String uploadPath;
	@PostMapping(value="/boards/fileUpload")
	public @ResponseBody void fileupload(MultipartFile file){
		System.out.println("업로드 들어옴");
		
		UUID uid = UUID.randomUUID();
		String saveName = uid.toString()+"_"+file.getOriginalFilename();
		File target = new File(uploadPath,saveName);
		try {
			FileCopyUtils.copy(file.getBytes(),target);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	/*@RequestMapping(value="/uploadAjax",method=RequestMethod.POST,produces="text/plain;charset=UTF-8")*/
	@PostMapping("/uploadAjax")
	public ResponseEntity<String> uploadAjax(MultipartFile file){
		System.out.println("name"+file.getOriginalFilename());
		System.out.println("size:"+file.getSize());
		System.out.println("contenttype:"+file.getContentType());
		return new ResponseEntity<>(file.getOriginalFilename(),HttpStatus.CREATED);
		
	}
	
}
