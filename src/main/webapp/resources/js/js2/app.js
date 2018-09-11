"use strict";
var router= (()=> {
	return {move :x=> {
			location.href = x.context+"/"+x.domain+".do?action="+x.action+"&page="+x.page;	
	}};
})();
var service =(()=>{
	return {
		nullChecker : x=>{
			var i= 0 ; 
			var j = { checker : true, text : '필수입력값이 없습니다.'};
			for(i in x){
				if(x[i]===''){
					j.checker = false 
				}
			}
			return j;
		},
		addClass : (dom,cName)=>{
			var arr = cName.split(" ");
			if (arr.indexOf(cName) == -1){
				dom.className += " "+ cName;
			}
		}
	};
	
})();
var common = (()=>{
	return{
	main : (x) =>{
		alert('컨텍스트 패스:'+x);
	
		document.getElementById('adminButt').addEventListener('click',function(){
		router.move({context : x , domain : 'member', action : 'search', page : 'search'});
	})
		
	document.getElementById('moveLoginForm').addEventListener('click',function(){ // 콜백함수 .....
			router.move({context : x,domain : 'member', action : 'move', page : 'login'});
		});
		
		document.getElementById('joinLoginForm').addEventListener('click',function(){ // 콜백함수 .....
			router.move({context : x,domain : 'member',action : 'move',page : 'add'});
		});
		document.getElementById('logoutButt').addEventListener('click',function(){
			router.move({context : x,domain : 'member',action : 'logout'});
		});
	}
	
	
};})();

var admin = (()=>{
	return {
	check : (x) =>{
		router.move({context : x , domain : 'member', action : 'search', page : 'search'});
		/*var isAdmin = confirm('관리자입니까?');
		if(isAdmin){
			
			var password=prompt('관리자 비밀번호를 입력하세요');
			
			if(password==1){
				router.move({context : x , domain : 'admin', action : 'list', page : 'main'});
			}
		}else{
			alert('관리자만 접근이 허용됩니다.');
		}*/
	},
	main : x=>{
		
		document.getElementById('searchButt').addEventListener('click',function(){
			
			var searchV = document.getElementById('contentSelect').value;
			var searchT = document.getElementById('searchText').value;
			
			if(searchV==='none'){
				alert("검색조건을 선택해주세요 .");
			}else {
				if(searchV==='findid'){
				location.href=x.context+'/member.do?action=retrieve&page=retrieve&userid='+
						searchT;
				}else{
					location.href=x.context+'/member.do?action=search&page=search&searchOption='+searchV
					+'&searchText='+searchT;
				}
			}
			
			
		});

		service.addClass(document.getElementById('contentSelect'),'height22px ');
		
		for (var i of document.querySelectorAll('.userName')){
			service.addClass(i,'cursor fontColorBlue');
			i.addEventListener('click',function(){
				location.href=x.context+'/member.do?action=retrieve&page=retrieve&userid='+this.getAttribute('id');
			});
		}
		
		for (var j of document.querySelectorAll('.pageNumber')){
			
			j.addEventListener('click',function(){
				location.href=x.context+'/member.do?action=search&page=search&pageIndex='+this.getAttribute('id');
			});
		}
		
	
		
	}
	
};})();

	var member=(()=> {
		var _userid,_password,_ssn,_age,_gender;
		
		var setUserid = (userid)=>{this._userid = userid;}
		var setPassword = (password)=>{this._password = password;}
		var setSsn = (ssn)=>{this._ssn = ssn;}
		var setAge = (age)=>{
			var d = new Date();
			d=(d.getFullYear()-age.substring(0,2))+1;
			
			this._age = (String(d)).substring(2,4);
		
		//119-Integer.parseInt(member.getSsn().substring(0,2)
		 
		}
		var setGender = (gender)=>{
			var s;
		switch(gender){
		case '1' : s="남자"; break;
		case '2' : s="여자"; break;
		
		}
		this._gender=s;
		}
		
		var getUserid = ()=>{return this._userid;}
		var getPassword = ()=>{return this._password;}
		var getSsn = ()=>{return this._ssn;}
		var getAge = ()=>{return this._age;}
		var getGender = ()=>{return this._gender;}
		
		return{
			setUserid : setUserid,
			setPassword : setPassword,
			setSsn : setSsn,
			getUserid : getUserid,
			getPassword : getPassword,
			getSsn : getSsn,
			setAge : setAge,
			setGender : setGender,
			getAge : getAge,
			getGender : getGender,
			join : x=>{
				member.setGender(x[0]);
				member.setAge(x[1]);
			},
			main : x=>{
				
				if(document.getElementById('adminButt')){
				document.getElementById('adminButt').addEventListener('click',function(){
					router.move({context : x , domain : 'member', action : 'search', page : 'search'});
				})}
				if(document.getElementById('moveLoginForm')){	
				document.getElementById('moveLoginForm').addEventListener('click',function(){ // 콜백함수 .....
						router.move({context : x,domain : 'member', action : 'move', page : 'login'});
					});}
				if(document.getElementById('joinLoginForm')){
					document.getElementById('joinLoginForm').addEventListener('click',function(){ // 콜백함수 .....
						router.move({context : x,domain : 'member',action : 'move',page : 'add'});
					});}
					if(document.getElementById('logoutButt')!=null){
				document.getElementById('logoutButt').addEventListener('click',function(){
					router.move({context : x,domain : 'member',action : 'logout'});
				});}
					if(document.getElementById('myPageUpdate')!=null){
					document.getElementById('myPageUpdate').addEventListener('click',function(){
						router.move({context : x,
						domain : 'member',
						action : 'move',
						page : 'modify'
						})
					});}
					if(document.getElementById('myPageDelete')!=null){
					document.getElementById('myPageDelete').addEventListener('click',function(){
						router.move({context : x,
						domain : 'member',
						action : 'move',
						page : 'remove'
						})
					}); }
					
					
					if(document.getElementById('joinButt')!=null){
						document.getElementById('joinButt').addEventListener(
								'click',
								function() {
									var form = document.getElementById('joinForm');
									var c = service.nullChecker([ form.userid.value,
											form.pw.value, form.name.value, form.roll.value,
											form.team_id.value, form.ssn1.value,
											form.ssn2.value ]);
									if (c.checker) {
										form.action = x+"/member.do";
										form.method = "post";
										member.join([ form.ssn2.value, form.ssn1.value ]);
										var arr = {
											name : [ 'action', 'gender', 'age','page'],
											value : [ 'add', member.getGender(),
													member.getAge(),'main']
										};
										for (var i = 0; i < 4; i++) {
											var node = document.createElement('input');
											node.setAttribute('type', 'hidden');
											node.setAttribute('name', arr.name[i]);
											node.setAttribute('value', arr.value[i]);
											form.appendChild(node);
										}
										form.submit();
									} else {
										alert(c.text);
									}
								}); }
					 if(document.getElementById('loginFormBtn')!=null){
						document.getElementById('loginFormBtn').addEventListener('click',function(){
							var form = document.getElementById('loginForm');
							var c = service.nullChecker([form.userid.value,form.pw.value]);
							if(c.checker){
								var j=[ {name : 'action',value : 'login'},
										{name : 'page',value : 'retrieve'}]
								for (var i in j) {
									var node = document.createElement('input');
									node.setAttribute('type', 'hidden');
									node.setAttribute('name', j[i].name);
									node.setAttribute('value', j[i].value);
									form.appendChild(node);
								}
								form.action=x+"/member.do";
								form.method="post";
								form.submit();
							}else
								alert(c.text);
						});}
					 
					 var team = document.getElementById('teamId');
					 for (var i of document.querySelectorAll('.option')){
						 if(i.getAttribute('value')===team.getAttribute('class')){
							 i.setAttribute("selected","selected");
					
						 }}
					 
					 var roll = document.getElementById('rollid');
					 for (var i of document.querySelectorAll('.roll')){
						 if(i.getAttribute('value')===roll.getAttribute('class')){
							 i.setAttribute("selected","selected");
					
						 }}
					 if(document.getElementById('updateBt')!=null){
					 document.getElementById('updateBt').addEventListener('click',function(){
					 	var form = document.getElementById('upDateId');
					 	var c = service.nullChecker(
					 			[form.pw.value]);
					 	if(c.checker){
					 	form.action=x+"/member.do";
					 	form.method="post";
					 	var node = document.createElement('input');
					 	form.appendChild(node);
					 	node.innerHTML = '<input type="hidden" name="action" value="modify"/>'
					 		var node1 = document.createElement('input');
					 	form.appendChild(node1);
					 	node1.innerHTML = '<input type="hidden" name="page" value="retrieve"/>'
					 	form.submit();
					 	alert("회원정보가 수정되었습니다.");
					 	}else{
					 		alert(c.text);
					 	}
					 }); }
					 if(document.getElementById('deleteButt')!=null){
						document.getElementById('deleteButt').addEventListener('click',function(){
							var form = document.getElementById('deleteForm');
							var c = service.nullChecker([form.pw.value]);
							if(c.checker){
								if(form.pw.value===form.pw.id){
									form.action=x+"/member.do";
									form.method="post";
										var node = document.createElement('input');
										node.setAttribute('type','hidden');
										node.setAttribute('name','action');
										node.setAttribute('value','remove');
										form.appendChild(node);
									form.submit();
									alert("회원탈퇴에 성공하셨습니다.");
								}else{
									alert("비밀번호가 틀리셨습니다.");
								}
							}else
								alert(c.text);
							
						}); }
					 
					 
			}		
		}})();