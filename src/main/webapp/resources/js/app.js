"use strict";
var app=app || {};
			/*app.setContentView();p =app || {};*/
var user= user || {};
app = (()=>{
	var header,footer,content,nav,ctx,script,style,img,w;
	
	
	var init = x =>{
		
		ctx = $.ctx();
		script=$.script();
		style = $.style();
		img= $.img();
		w=$('#wrapper');
		var arr = ['header','footer','nav','content']
		
		header=script+'/header.js'
		content=script+'/content.js'
		nav=script+'/nav.js'
		footer=script+'/footer.js'
		
		onCreate();
	
	};
	var onCreate =()=>{
		app.setContentView();
		$('#login_btn').click(()=>{
			location.href=app.x()+'/move/member/login';
		});
		$('#loginForm_Btn').click(()=>{
			var form = document.getElementById('loginForm');
			form.action = app.x()+"/member/login/member/nav";
			form.method = "post";
			form.submit();
		
		});
		
		$('#logout_btn').click(()=>{
			location.href=app.x()+'/member/logout';
		});
		
		$('#join_btn').click(()=>{
			location.href=app.x()+'/move/member/add';
		});
		$('#joinform_btn').click(()=>{
			var form = document.getElementById('joinForm');
			form.action = app.x()+"/member/add/common/content";
			form.method = "post";
			form.submit();
		});
		
		$('#nav_home_btn').click(()=>{
			location.href=app.x()+'/member/logout';
		});

		$('#mypage_btn').click(()=>{
			location.href=app.x()+'/member/login/member/mypage';
		});
		
		$('#myPageUpdate_btn').click(()=>{
			location.href=app.x()+'/move/member/modify';
			
		});
		
		$('#myPageDelete_btn').click(()=>{
			location.href=app.x()+'/move/member/remove';
		});
		
		
		$('#delete_btn').click(()=>{
			var form = document.getElementById('deleteForm');
			
			form.action = app.x()+"/member/remove";
			form.method = "post";
			form.submit();
		});
		
	};
	
	var setContentView = ()=>{
		$.when(
				$.getScript($.script()+'/header.js'),
				$.getScript($.script()+'/content.js'),
				$.getScript($.script()+'/nav.js'),
				$.getScript($.script()+'/footer.js'),
				$.Deferred(y=>{
					$(y.resolve);
				})
				).done(z=>{
					w.html(navUI()+headerUI()+contentUI()+footerUI());
					$('#join_btn').click(e=>{
						e.preventDefault();
						app.permission.add();
					});
					
					$('#login_btn').click(e=>{
						e.preventDefault();
						app.permission.login();
					
				});
					$('#board_list').click(e=>{
						e.preventDefault();
						app.board.init();
						})
					});
		
		
	
	};

	return{init:init,
		onCreate:onCreate,
		setContentView:setContentView};
		
})();

app.board=(()=>{
	var init =()=>{
		
	}
	return{init:init}
})();
app.permission=(()=>{
	
	var login = ()=>{
		
		
		$('#container').empty();
		$.getScript($.script()+'/login.js',()=>{
			$('#container').html(loginUI());
			
			$('#main_btn').click(e=>{
				e.preventDefault();
				$('#container').empty();
				$.getScript($.script()+'/content.js',()=>{
					$('#container').html(contentUI());
				})
			});
			
			
	
			$('#login_btn1').click(e=>{
					$.ajax({
						url : $.ctx()+'/member/login', 
						method : 'POST',
						contentType : 'application/json',
						data:JSON.stringify({ userid: $('#user_email').val(),password:$('#user_password').val()}), 
						
						success : d=>{
							if(d){
								
								$('#login_btn').remove();
								$('#join_btn').remove();
								$.getScript($.script()+'/content.js',()=>{
									$('#container').html(contentUI());
								})
								$('<a />').attr({href:"#"}).html("로그아웃").appendTo($('#li_id')).click(e=>{
									e.preventDefault();
									app.setContentView();
									
									
								});
							
							}else{
								alert("아이디나 비밀번호가 틀리셨습니다.")
							}
						},
						error : (m1,m2,m3)=>{
							alert('에러발생1'+m1);
							alert('에러발생2'+m2);
							alert('에러발생3'+m3);
						
						}
					})
				
			});
			
			$('#join_btn1').click(e=>{
				e.preventDefault();
				add();
			});
			
		
		});
		
	};
	var add = ()=>{
		$('#container').empty();
		$.getScript($.script()+'/add.js',()=>{
			$('#container').html(addUI());
			
	});
	};
	return{login:login,add:add};
})();

app.router={
		 init: x=>{
			$.getScript(x+'/resources/js/router.js',
					()=>{
						$.extend(new Session(x));
						$.getScript(x+'/resources/js/util.js')
						.done(x=>{console.log('실행');})
						.fail(x=>{console.log('실패');});
						app.init(x);
					

				});
		 },
		home : () =>{
			$.when(
					$.getScript($.script()+'/header.js'),
					$.getScript($.script()+'/content.js'),
					$.getScript($.script()+'/nav.js'),
					$.getScript($.script()+'/footer.js'),
					$.Deferred(y=>{
						$(y.resolve);
					})
					).done(z=>{
						$('#wrapper').html(navUI()+headerUI()+contentUI()+footerUI());
						
						
						});
			
			
		}
	};
