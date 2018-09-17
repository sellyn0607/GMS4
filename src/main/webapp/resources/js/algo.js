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
algo.main={
		onCreate:()=>{
			
			algo.main.setContentView();
		},
		setContentView:()=>{
			$('#wrapper').html('<h1 style="text-align:center;">알고리즘</h1><h3 style="text-align:center;">수열 </h3><br><div id="content" >'
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
			$('<ul />').attr({id : 'side__menu'}).addClass('list-group').appendTo($t__l);
			$('<li />').attr({id : 'arith'}).addClass('list-group-item').appendTo('#side__menu');
			
			let anchor = $.fn.anchor({txt:'등차수열의 합'});
			
			anchor.appendTo($('#arith')).click(e=>{
				$('#t__r').empty();
			
				$('<div/>').attr({id:'ques'}).appendTo($t__r);
				$('<h3/>').html('시작값x,마지막값y,공차 d인 수열의 합을 구하시오<br><br>').appendTo('#ques');
				
				let arr= [{name: '시작값',id : 'x'},{name: '마지막값',id : 'y'},{name: '공차',id : 'd'}];
				
				/*for(let i in arr){
					$('<label/>').html(arr[i].name).appendTo('#ques');
					$('<input/>').attr({id:arr[i].id,type:'text'}).appendTo('#ques');
					$('<br/>').appendTo('#ques');

				}*/
				
				/*$(arr).each(function(){
					$('<label/>').html(this.name).appendTo('#ques');
					$('<input/>').attr({id:this.id,type:'text'}).appendTo('#ques');
					$('<br/>').appendTo('#ques');
				})*/
				
			/*	$.each(arr,(i,val)=>{
					$('<label/>').html(val.name).appendTo('#ques');
					$('<input/>').attr({id: val.id,type:'text'}).appendTo('#ques');
					$('<br/>').appendTo('#ques');
				})*/
				
				$.each(arr,function(){
					
					$('<label/>').html(this.name).appendTo('#ques');
					$('<input/>').attr({id: this.id,type:'text'}).appendTo('#ques');
					$('<br/>').appendTo('#ques');
				})//?????
					
			
				
								
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
			
			/*$('#t__l').append('<a id="arith"><h3>등차수열</h3></a><br>');
			$('#arith').click(e=>{
				let ques = '시작값x,마지막값y,공차 d인 수열의 합을 구하시오<br><br>'
					+'<label for="시작값"> 시작값 </label><input id="x" type="text"><br>'
					+'<label for="마지막값"> 마지막값 </label><input id="y" type="text" ><br>'
					+'<label for="공차"> 공차 </label><input id="d" type="text"><br>'
					+'<button id="btn"> 결과보기 </button><br>'
					;
				$('#t__r').html(ques);
				
				let ans='답 : ';
				$('#btn').click(e=>{
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
						$('#t__r').append(ans+sum);
					}
					
				
				});
				
			});
			
			$('#t__l').append('<a id="fibonacci"><h3>피보나치 수열</h3></a><br>');
			
			$('#fibonacci').click(e=>{
				let ques = '시작값x,마지막값y 수열의 합을 구하시오<br><br>'
					+'<label for="시작값"> 시작값 </label><input id="x" type="text"><br>'
					+'<label for="마지막값"> 마지막값 </label><input id="y" type="text" ><br>'
					+'<button id="btn"> 결과보기 </button><br>';

				$('#t__r').html(ques);

				$('#btn').click(e=>{
					let sta=$('#x').val()*1;
					let end=$('#y').val()*1;
					let i = sta;
					let j=0;
					let sum=0;
					
					while(sta<=end){
						i=i+j;
						j=i;	
					sum+=i;
					alert(i+"="+sum);
					sta++
					
					}
					
					$('#t__r').append(sum);				
				});
					
			});
			
			$('#t__l').append('<a id="swit"><h3>스위치 수열</h3></a><br>');
			$('#swit').click(e=>{
				let ques = '시작값x,마지막값y 수열의 합을 구하시오<br><br>'
					+'<label for="시작값"> 시작값 </label><input id="x" type="text"><br>'
					+'<label for="마지막값"> 마지막값 </label><input id="y" type="text" ><br>'
					+'<button id="btn"> 결과보기 </button><br>';

				$('#t__r').html(ques);

				$('#btn').click(e=>{
					let sta=$('#x').val()*1;
					let end=$('#y').val()*1;
					let sum=0;
					
					
					while(sta<=end){

						if(sta%2==0){
							sum=sum-sta;				
							sta++;
						}else{
							sum=sum+sta
							sta++
						}
					
					
					}
					
					$('#t__r').append(sum);				
				});

			});
			
			$('#t__l').append('<a id="factorial"><h3>팩토리얼 수열</h3></a><br>');
			$('#factorial').click(e=>{
				let ques = '시작값x,마지막값y 수열의 합을 구하시오<br><br>'
					+'<label for="시작값"> 시작값 </label><input id="x" type="text"><br>'
					+'<label for="마지막값"> 마지막값 </label><input id="y" type="text" ><br>'
					+'<button id="btn"> 결과보기 </button><br>';

				$('#t__r').html(ques);

				$('#btn').click(e=>{
					let sta=$('#x').val()*1;
					let end=$('#y').val()*1;
					
					let j=0;
					let sum=0;
					
					while(sta<=end){
						i=i+j;
						j=i;	
					sum+=i;
					sta++
					
					}
					
					$('#t__r').append(sum);				
				});
				
			});*/
		}
}
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


	
