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
					$('<td/>').attr({style:"width:50%;cursor:pointer"}).text(j.content).appendTo(tr).click(e=>{
						app.service.readBoards(j.bno);
					});
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
				$('<a/>').attr({class:"page-link",id:"next_btn"}).text("▶").appendTo($('#board_ul')).click(e=>{
						e.preventDefault();
						app.board.init(d.page.endPage+1);
				}); 
				}
				$('<div/>').attr({id:"create_div"}).appendTo($('#board_ul'))
				if(sessionStorage.getItem('userid')!=null){
					$('<a/>').attr({id:"board_create",class:"navigation-primary__write-btn navigation-primary__button button-md"})
					.text("글쓰기").appendTo($('#create_div')).click(e=>{
						app.service.addBoard();
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
								sessionStorage.setItem('userid',d.userid);
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
								
								$('<a />').attr({href:"#"}).html("D&D").appendTo($('#li_id')).click(e=>{
									e.preventDefault();
									$('#container').empty();
									$('<h3/>').attr({id:'h3_'}).html('Ajax File Upload').appendTo($('#container'));
									$('<div/>').attr({id:"fileDrop"}).appendTo($('#h3_')).on('dragenter dragover',e=>{
										e.preventDefault();
									});
									$('#fileDrop').on('drop',e=>{
										 e.preventDefault();
										 var files = e.originalEvent.dataTransfer.files;
						                    var file = files[0];
						                    console.log(file);
						                    var formData = new FormData();
						                    formData.append('file',file);
						                    $.ajax({
						                        url:$.ctx()+'/uploadAjax',
						                        data : formData,
						                        dataType:'text',
						                        processData:false,
						                        contentType:false,
						                        type:'post',
						                        success:d=>{
						                            alert(d);
						                        }
						                    })
									})
									
									$('<div/>').attr({class:'uploadedList'}).appendTo($('#h3_'));
									
									
									
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
			$.getJSON($.ctx()+'/boards/'+x.id+'/'+x.pageNum,d=>{
				$.getScript($.script()+'/compo.js',()=>{
					
					let x = {list:['No','제목','내용','작성자','작성일','조회수'],
							 id:'tb_tb'};
					ui.tbl(x).appendTo($('#container'));
					
					$.each(d.list,(x,j)=>{
						var tr = $('<tr/>').appendTo($('#tb_tb'));
						$('<td/>').attr('width','5%').text(j.bno).appendTo(tr);
						$('<td/>').attr('width','10%').text(j.title).appendTo(tr);
						$('<td/>').attr('width','50%').text(j.content).appendTo(tr).click(e=>{
							app.service.readBoards(j.bno);
						});
						$('<td/>').attr('width','10%').text(j.writer).appendTo(tr);
						$('<td/>').attr('width','15%').text(j.regdate).appendTo(tr);
						$('<td/>').attr('width','15%').text(j.viewcnt).appendTo(tr);
						
					})
					ui.page("board_ul").appendTo($('#container')); 
					
					if(d.page.existPrev){
						$('<a/>').attr({class:"page-link"}).text("◀").appendTo($('#board_ul')).click(e=>{
							e.preventDefault();
							app.service.myboards(d.page.beginPage-1);
						});	
					}
					for(let i=d.page.beginPage; i<=d.page.endPage; i++){
						$('<a/>').attr({class:"page-link",style:(i==d.page.pageNum)?'background-color: #35C5F0':''}).text(i).appendTo($('#board_ul')).click(e=>{
							e.preventDefault();
							app.service.myboards({id:d.userid,pageNum:i});
						}); 
					};
					
					if(d.page.existNext){
					$('<a/>').attr({class:"page-link"}).text("▶").appendTo($('#board_ul')).click(e=>{
							e.preventDefault();
							app.service.myboards(d.page.endPage+1);
					}); 
					}
				});
			});
		},
		addBoard : ()=>{
			$('#container').empty();
			$('<div/>').attr({id:"board_create_div"}).appendTo($('#container'))
			$('<input/>').attr({id:"board_title",size:"20",style:"width:917px;height:30px",
								placeholder:"제목을 입력해주세요."}).appendTo($('#board_create_div'));
			$('<br/>').appendTo($('#board_create_div'));
			$('<textarea/>').attr({id:"board_content",rows:"10",cols:"100",placeholder:"내용을 입력해주세요"}).appendTo($('#board_create_div'));
			$('<br/>').appendTo($('#board_create_div'));
			$('<a/>').attr({id:"board_create_btn",class:"navigation-primary__write-btn navigation-primary__button button-md"})
			.text("작성").appendTo($('#board_create_div')).click(e=>{
				
				$.ajax({
					url: $.ctx()+'/boards2/create',
					method:"POST",
					contentType:'application/json',
					data:JSON.stringify({title:$('#board_title').val(),content:$('#board_content').val(),
										writer:sessionStorage.getItem('userid')}),
					success:d=>{
						app.board.init("1");
					},
					error:(m1,m2,m3)=>{
						
					}
					
				});
				
			})
			
			$('<a/>').attr({id:"board_can_btn",class:"navigation-primary__write-btn navigation-primary__button button-md"})
			.text("취소").appendTo($('#board_create_div')).click(e=>{
				app.board.init("1");
			})
			
			$('<form id="form1" action="uploadForm" method="post" entype="multipart/form-data"> '
			+'<input type="file" name="file"><input type="submit"></form>').appendTo($('#board_create_div')).click(e=>{
				let frm = $('#form1');
			    frm.method = 'POST';
			    frm.enctype = 'multipart/form-data';
			  
			    var fileData = new FormData(frm);
			  
			    // ajax
			    $.ajax({
			        url:$.ctx()+"/boards/fileUpload",
			        type:'POST',
			        data:fileData,
			        async:false,
			        cache:false,
			        contentType:false,
			        processData:false
			    }).done(function(response){
			        alert(response);
			    });


			})
			;
			
			
		},	
		readBoards: x=>{
			$('#container').empty();
			$.getJSON($.ctx()+"/boards/select/"+x,d=>{
				$('<div/>').attr({id:"board_create_div",style:"margin-left:100px"}).appendTo($('#container'));
				$('<div/>').attr({style:"width:917px;height:30px;border:1px solid black"}).text(d.title).appendTo($('#board_create_div'));
				$('<br/>').appendTo($('#board_create_div'));
				$('<div/>').attr({style:"width:917px;height:300px;border:1px solid black;text-align:left"}).text(d.content).appendTo($('#board_create_div'));
				$('<br/>').appendTo($('#board_create_div'));
				$('<a/> ').attr({class:"navigation-primary__write-btn navigation-primary__button button-md",style:""})
				.text("뒤로").appendTo($('#board_create_div')).click(e=>{
					app.board.init("1");
				});
				
				if(sessionStorage.getItem('userid')===d.writer){
				$('<a/> ').attr({class:"navigation-primary__write-btn navigation-primary__button button-md",style:"margin-left:650px"})
				.text("수정").appendTo($('#board_create_div')).click(e=>{
					
					$('#container').empty();
					$('<div/>').attr({id:"board_create_div"}).appendTo($('#container'))
					$('<input/>').attr({id:"board_title",size:"20",style:"width:917px;height:30px"
										}).val(d.title).appendTo($('#board_create_div'));
					$('<br/>').appendTo($('#board_create_div'));
					$('<textarea/>').attr({id:"board_content",rows:"10",cols:"100"}).html(d.content).appendTo($('#board_create_div'));
					$('<br/>').appendTo($('#board_create_div'));
					
				
					$('<a/>').attr({id:"board_create_btn",class:"navigation-primary__write-btn navigation-primary__button button-md"})
					.text("수정").appendTo($('#board_create_div')).click(e=>{
						$.ajax({
							url: $.ctx()+'/boards/update',
							method:"POST",
							contentType:'application/json',
							data:JSON.stringify({title:$('#board_title').val(),content:$('#board_content').val(),
												writer:sessionStorage.getItem('userid'),bno:d.bno}),
							success:v=>{
								app.service.readBoards(d.bno);
							},
							error:(m1,m2,m3)=>{
								
							}
							
						});
						
					})
					
					$('<a/>').attr({id:"board_can_btn",class:"navigation-primary__write-btn navigation-primary__button button-md"})
					.text("취소").appendTo($('#board_create_div')).click(e=>{
						app.board.init("1");
					})
					
				});
				$('<a/> ').attr({class:"navigation-primary__write-btn navigation-primary__button button-md",style:"margin-left:15px"})
				.text("삭제").appendTo($('#board_create_div')).click(e=>{
					let del_con=confirm("삭제하시겠습니까?");
					if(del_con){
						$.getJSON($.ctx()+"/boards/delete/"+x,d=>{
							if(d){
							alert("삭제되었습니다");
							app.board.init("1");
							}
						});
					}
				});
				
				}
			})
			
			
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
