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
		setContentView();
		
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
					//$('nav').css({'background-color':'yellow'});
					
					$('#main_logo_btn').click(e=>{
						e.preventDefault();
						$('#container').empty();
						$.getScript($.script()+'/content.js',()=>{
							$('#container').html(contentUI());
						})
					});
					
					$('#join_btn').click(e=>{
						e.preventDefault();
						app.permission.add();
					});
					
					$('#login_btn').click(e=>{
						e.preventDefault();
						app.permission.login();
					
				});
					
					
					$('#board_btn').click(e=>{
						e.preventDefault();
						app.board.init("1");
					});
					
					
					});
		
		
	
	};

	return{init:init,
		onCreate:onCreate,
		setContentView:setContentView};
		
})();

app.board=(()=>{
	var init =x=>{
		$('#container').empty();
		$.getJSON($.ctx()+'/boards/'+x,d=>{
			$.getScript($.script()+'/compo.js',()=>{
				
				let x = {list:['No','제목','내용','작성자','작성일','조회수'],
						 id:'tb_tb'};
				ui.tbl(x).appendTo($('#container'));
				
				$.each(d.list,(x,j)=>{
					var tr = $('<tr/>').appendTo($('#tb_tb'));
					$('<td/>').attr('width','5%').text(j.bno).appendTo(tr);
					$('<td/>').attr('width','10%').text(j.title).appendTo(tr);
					$('<td/>').attr('width','50%').text(j.content).appendTo(tr);
					$('<td/>').attr('width','10%').text(j.writer).appendTo(tr);
					$('<td/>').attr('width','15%').text(j.regdate).appendTo(tr);
					$('<td/>').attr('width','15%').text(j.viewcnt).appendTo(tr);
					
				})
				ui.page("board_ul").appendTo($('#container')); 
				
				if(d.page.existPrev){
					$('<a/>').attr({class:"page-link"}).text("◀").appendTo($('#board_ul')).click(e=>{
						e.preventDefault();
						app.board.init(d.page.beginPage-1);
					});	
				}
				for(let i=d.page.beginPage; i<=d.page.endPage; i++){
					$('<a/>').attr({class:"page-link",style:(i==d.page.pageNum)?'background-color: #35C5F0':''}).text(i).appendTo($('#board_ul')).click(e=>{
						e.preventDefault();
						app.board.init(i);
					}); 
				};
				
				if(d.page.existNext){
				$('<a/>').attr({class:"page-link"}).text("▶").appendTo($('#board_ul')).click(e=>{
						e.preventDefault();
						app.board.init(d.page.endPage+1);
				}); 
				}
			});
		});
	
	}
	return{init:init}
})();
app.permission=(()=>{
	
	var login = ()=>{
		
		
		$('#container').empty();
		$.getScript($.script()+'/login.js',()=>{
			$('#container').html(loginUI());
			
			//.css({}).addClass().appendTo~~
			
			$('#main_btn').click(e=>{
				e.preventDefault();
				$('#container').empty();
				$.getScript($.script()+'/content.js',()=>{
					$('#container').html(contentUI());
				})
			});
			
			
	
			$('#login_btn1').click(e=>{
				let arr=[$('#user_email').val(),$('#user_password').val()];
				
				if($.fn.nullChecker(arr)){
					alert('빈칸을 입력해주세요.');
					
				}else{
					$.ajax({
						url : $.ctx()+'/member/login', 
						method : 'POST',
						contentType : 'application/json',
						data:JSON.stringify({ userid: $('#user_email').val(),password:$('#user_password').val()}), 
						
						success : d=>{
							if(d.result){
								
								$('#login_btn').remove();
								$('#join_btn').remove();
								$.getScript($.script()+'/content.js',()=>{
									$('#container').html(contentUI());
								})
	
									$('<a />').attr({href:"#"}).html("내 게시물").appendTo($('#li_id')).click(e=>{
									e.preventDefault();
									app.service.myboards({id:d.userid,pageNum:"1"});
									
									
								});
								
								
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
				}
				
					
				
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
		$('<button>').attr({type:"button"}).html("회원가입").appendTo($('#joinForm')).click(e=>{
			$.ajax({
				url:$.ctx()+"/member/add",
				method:"POST",
				contentType:'application/json',
				data:JSON.stringify({userid:$('#userid').val(),password:$('#password').val(),
					name:$('#name').val(),roll:$('#roll').val(),teamid:$('#teamid').val(),ssn:$('#ssn').val(),
					ssn2:$('#ssn2').val()}),
				success:d=>{},
				error:(m1,m2,m3)=>{
					
				}
				
			});
		});
			
	});
	};
	return{login:login,add:add};
})();
app.service={
		boards : x=>{
			
		},
		myboards : x=>{
			$('#container').empty();
			$.getJSON($.ctx()+'/boards2/'+x.id+'/'+x.pageNum,d=>{
				$.getScript($.script()+'/compo.js',()=>{
					
					let x = {list:['No','제목','내용','작성자','작성일','조회수'],
							 id:'tb_tb'};
					ui.tbl(x).appendTo($('#container'));
					
					$.each(d.list,(x,j)=>{
						var tr = $('<tr/>').appendTo($('#tb_tb'));
						$('<td/>').attr('width','5%').text(j.bno).appendTo(tr);
						$('<td/>').attr('width','10%').text(j.title).appendTo(tr);
						$('<td/>').attr('width','50%').text(j.content).appendTo(tr);
						$('<td/>').attr('width','10%').text(j.writer).appendTo(tr);
						$('<td/>').attr('width','15%').text(j.regdate).appendTo(tr);
						$('<td/>').attr('width','15%').text(j.viewcnt).appendTo(tr);
						
					})
					ui.page("board_ul").appendTo($('#container')); 
					
					if(d.page.existPrev){
						$('<a/>').attr({class:"page-link"}).text("◀").appendTo($('#board_ul')).click(e=>{
							e.preventDefault();
							app.board.init(d.page.beginPage-1);
						});	
					}
					for(let i=d.page.beginPage; i<=d.page.endPage; i++){
						$('<a/>').attr({class:"page-link",style:(i==d.page.pageNum)?'background-color: #35C5F0':''}).text(i).appendTo($('#board_ul')).click(e=>{
							e.preventDefault();
							app.board.init(i);
						}); 
					};
					
					if(d.page.existNext){
					$('<a/>').attr({class:"page-link"}).text("▶").appendTo($('#board_ul')).click(e=>{
							e.preventDefault();
							app.board.init(d.page.endPage+1);
					}); 
					}
				});
			});
		}
}
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
