"use strict";
var ui={
		
	div : x=>{return $('<div/>').attr(x);},
	anchor : x=>{return $('<a />').attr({href:'#'}).html(x.txt);},
	ul : x=>{
		let ul = $('<ul>');
		for(var i=0; i<x.len;i++){
			$('<li/>').attr({id:x.id+'-'+i}).appendTo(ul);
		}
		return ul;
	},
	input : x=>{
		let res = ui.div({}).addClass('input-group mb-3');
		ui({}).addClass('input-group-prepend').appendTo(p);
		
		res.append(ui.div({}).addClass('input-group-prepend'))
		return $('<input />').attr(x).addClass('form-control');//{id: x.id , type : x.type,val:x.val}
	},
	label : x=>{
		return $('<label/>').attr('for',x.id).text(x.txt);
	},
	
	btn: x=>{
		
			return $('<button/>').attr({id:x.id,type:'button'}).addClass('btn btn-'+x.class2).html(x.txt);
	},
	tbl : x=>{
		let t=$('<table/>').attr('id',x.id);
		let th=$('<th/>');
		let tr=$('<tr/>');
		
		tr.appendTo(t);
		$.each(x.list,(i,j)=>{
			$('<th/>').text(j).appendTo(tr);		
		})
		return t;
	},
	page : x=>{
		let nav = $('<nav/>'); // <- 네비게이션 
		let ul= $('<ul/>').attr({id:x,class:"pagination justify-content-center"}).appendTo(nav); // <-ul 은 하나만 생성하면됨 
		
		
		return nav;
		
	}
}

