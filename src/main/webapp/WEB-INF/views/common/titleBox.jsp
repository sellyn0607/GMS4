<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<div id="title-box">
			<h1><a id="gohome"> GRADE MANAGEMENT SYSTEM</a></h1>
		</div>
		
<script>
document.getElementById('gohome').addEventListener('click',function(){
	router.move({context : '${context}',
	domain : 'common'
	})
});
</script>