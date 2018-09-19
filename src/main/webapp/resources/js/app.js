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

					$('#login_btn').click(e=>{
						e.preventDefault();
						
						app.permission.login();
						
					$('#board_list').click(e=>{
						e.preventDefault();
						alert('');
						app.board.init();
						})
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
			$('#container').html(loginUI($.img()));
		});
		
	};
	return{login:login};
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
		 }
	};
