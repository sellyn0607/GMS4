<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
 <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a id="nav_home_btn" class="navbar-brand">Start Bootstrap</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="post.html">Sample Post</a>
            </li>
            <li class="nav-item">
              <a id="board_write" class="nav-link" href="#">게시판 글쓰기</a>
            </li>
            <li class="nav-item">
              <a id="board_list" class="nav-link" href="#">게시글 목록</a>
            </li>
            <li class="nav-item">
              <a id="login_btn" class="nav-link" href="#">로그인</a>
            </li>
            <li class="nav-item">
              <a id="join_btn" class="nav-link" href="#">회원가입</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <script>
    $('#login_btn').click(function(){
		location.href='${context}/move/member/login';
	});
    $('#join_btn').click(function(){
		location.href='${context}/move/member/login';
	});
    $('#board_write').click(function(){
    	alert("게시글 쓰기");
    	location.href='${context}/move/board/read';
    });
    $('#board_list').click(function(){
    	alert("게시글 리스트");
    	location.href='${context}/move/board/listPage';
    });
    </script>