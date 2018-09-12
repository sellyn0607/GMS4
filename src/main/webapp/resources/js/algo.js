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
			+'<table id="tb1" style="width:800px;height:300px;border-collapse:collapse;'
			+'border:1px solid black;margin:0 auto">'
			+'<tr style="border:1px solid black;">'
			+'<td id="t__l" style="width:50%;border: 1px solid black"></td>'
			+'<td id="t__r" style="width:50%;border: 1px solid black"></td>'
			+'</tr>'
			+'</table>'
			+'</div>');
			
			$('#t__l').append('<a id="arith"><h3>등차수열</h3></a><br>');
			$('#arith').click(e=>{
				alert('등차수열 선택');
			});
			
			$('#t__l').append('<a id="fibonacci"><h3>피보나치 수열</h3></a><br>');
			
			$('#fibonacci').click(e=>{
				alert('피보나치 수열 선택 ');
			});
			
			$('#t__l').append('<a id="swit"><h3>스위치 수열</h3></a><br>');
			$('#swit').click(e=>{
				alert('스위치 수열 선택');
			});
			
			$('#t__l').append('<a id="factorial"><h3>팩토리얼 수열</h3></a><br>');
			$('#factorial').click(e=>{
				alert("팩토리얼 수열 선택");
			})
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
					algo.main.onCreate();

			});
	 }
};

	
