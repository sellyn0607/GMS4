<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<div id="content-box" style="text-align: left;">
	<div id="user" >
	<h1>로그인</h1>
	<form id="loginForm"  style="border:1px solid black;">
	&nbsp; 아이디 <br />
	 &nbsp;<input type="text" name="userid" ><br><Br>
	&nbsp; 비밀번호<br />
	&nbsp; <input type="password" name="password" ><br><br>
	
	<input id="loginForm_Btn" type="button" value="로그인"><br>
	</form></div></div>

<script>
$('#loginForm_Btn').click(function(){
	var form = document.getElementById('loginForm');
	form.action = "${context}/member/login/member/nav";
	form.method = "post";
	form.submit();

	});
</script>
