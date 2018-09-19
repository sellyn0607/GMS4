var algo = algo || {};
var router = router || {};
algo={
	
	init:x=>{
		algo.onCreate(x)
		algo.setContentView();
		
	},
	onCreate: (x)=>{
		algo.router.onCreate(x);
	},
	setContentView:()=>{
		$('#wrapper').empty();
	}
};
algo.main=(()=>{
	//
	var $wrapper,ctx,img,script,style,compo,json;
	
	var onCreate = ()=>{
		
		ctx = $.ctx();
		img = $.img();
		script = $.script();
		style = $.style();
		compo = script+'/compo.js';
		
		setContentView();
	};
	var setContentView= ()=>{
		$('#wrapper').html('<h1 style="text-align:center;">알고리즘</h1><h3 style="text-align:center;"><a id="seq" href:"#">수열</a><br>'
				+'<a id="appl" href:"#">응용 </a></h3><div id="content" >'
				+'<table id="tb1" style="width:1000px;height:300px;border-collapse:collapse;'
				+'border:1px solid black;margin:0 auto">'
				+'<tr style="border:1px solid black;">'
				+'<td id="t__l" style="width:50%;border: 1px solid black"></td>'
				+'<td id="t__r" style="width:50%;border: 1px solid black"></td>'
				+'</tr>'
				+'</table>'
				+'</div>');
		
				let $t__l = $('#t__l');
				let $t__r = $('#t__r');
				
				
				
				$('#seq').click(e=>{
					$t__l.empty();
					$t__r.empty();
					$('<ul />').attr({id : 'side__menu'}).addClass('list-group').appendTo($t__l);
					$('<li />').attr({id : 'arith'}).addClass('list-group-item').appendTo('#side__menu');
					let anchor =$('<a />').attr({href:'#'}).html('등차수열의 합'); 
					anchor.appendTo($('#arith')).click(e=>{
						$('#t__r').empty();
					
						$('<div/>').attr({id:'ques'}).appendTo($t__r);
						$('<h3/>').html('시작값x,마지막값y,공차 d인 수열의 합을 구하시오<br><br>').appendTo('#ques');
						
						let arr= [{name: '시작값',id : 'x'},{name: '마지막값',id : 'y'},{name: '공차',id : 'd'}];
						
						
						$.each(arr,function(){
							
							$('<label/>').html(this.name).appendTo('#ques');
							$('<input/>').attr({id: this.id,type:'text'}).appendTo('#ques');
							$('<br/>').appendTo('#ques');
						})
								
						$('<button/>').attr({id:'btn',type:'button'}).html('결과보기').appendTo('#ques').click(e=>{
							$('#h11').remove();
							let ans='답 : ';
							let arr = [$('#x').val(),$('#y').val(),$('#d').val()];
							
							if(($.fn.nullChecker(arr))){
								alert('빈칸을 채우세요');
								
							}else{
								let start=arr[0]*1;
								let end=arr[1]*1;
								let diff =arr[2]*1;
								let sum =0;
								while(start<=end){
									sum+=start;
									start+=diff;
								};
							
							$('<h3/>').attr({id:'h11'}).appendTo('#ques').text(ans+sum);		
							}
							
						});
						
						
					});
					
				});
			
				$('#appl').click(x=>{
					//$('<a />').attr({href:'#'}).html('화폐').appendTo($('#arith')).
					$t__l.empty();
					$t__r.empty();
					/*$('<ul />').attr({id : 'side__menu'}).addClass('list-group').appendTo($t__l);
					$('<li />').attr({id : 'arith'}).addClass('list-group-item').appendTo('#side__menu');*/
					$.getScript(compo,()=>{
						ui.ul({len:2,id:'menu'}).appendTo($t__l);
						ui.anchor({txt:'화폐문제'}).appendTo($('#menu-0')).click(e=>{
							$t__r.empty();
							$('<h3 /><br/>').html('값을 입력하세요').appendTo($t__r);
							
							$('<label/>').html('화폐 ').appendTo($t__r);
							//ui.input({id:'money',type:'text',val:''}).prepend(ui.label({id:'moneyleb',txt:'입금액'})).appendTo($t__r);
							$('<input/>').attr({id:'x1',type:'text'}).appendTo($t__r);
							ui.btn({id :'btn_1',class2:'dark',txt:'입력'}).appendTo($t__r).click(e=>{
								alert($('#x1').val()+"원");
								$.ajax({
									url : ctx+'/algo/money', 
									method : 'POST',
									contentType : 'application/json',
									data:JSON.stringify({ money : $('#x1').val()}),
									success : d=>{
										alert('성공이다'+d.text);
									},
									error : (m1,m2,m3)=>{
										alert('에러발생'+m1);
										alert('에러발생'+m2);
										alert('에러발생'+m3);
									}
								})
								
								
								
							});
							//$('<button/>').attr({id:'btn1',type:'button'}).html('입력').appendTo($t__r);
							
							
									
							});
					});
					
				});
		
	};
	return {onCreate:onCreate,
		setContentView:setContentView};
})();


algo.series = {
		arith : x =>{
			
		},
		fibonacci : x =>{},
		swit : x =>{},
		factorial :x =>{}
		
};
algo.array = {
		bubble : x =>{},
		insert : x =>{},
		select : x =>{},
		ranking : x =>{},
};
algo.matrix={
		fiveBy5 : x=>{},
		sandGlass : x=>{},
		snail : x =>{},
		diamond:x=>{},
		zigzag : x=>{}
};
algo.math={
		
};
algo.appl={};

algo.router={
	 onCreate: x=>{
		$.getScript(x+'/resources/js/router.js',
				()=>{
					$.extend(new Session(x));
					$.getScript(x+'/resources/js/util.js')
					.done(x=>{console.log('실행');})
					.fail(x=>{console.log('실패');});
					algo.main.onCreate();
				

			});
	 }
};


	
