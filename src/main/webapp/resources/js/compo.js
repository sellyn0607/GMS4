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
	}
}
/*<div class="input-group mb-3">
<div class="input-group-prepend">
  <span class="input-group-text" id="basic-addon1">@</span>
</div>
<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>*/
