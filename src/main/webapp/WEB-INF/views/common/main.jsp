<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<!doctype html>
<html lang="en">
<head>
	<title>Home</title>
	<link rel="shortcut icon" href="${context}/resources/img/favicon.ico" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
	<!--  -->
	<link href="${context}/resources/css/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="${context}/resources/css/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
	<link href="${context}/resources/css/css2/clean-blog.min.css" rel="stylesheet">
	<link href="${context}/resources/css/style.css" rel="stylesheet">
	 <link href="${context}/other_resources/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	 <link href="${context}/other_resources/dist/css/AdminLTE.min.css" rel="stylesheet" type="text/css" />
	 
	<!--  -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<%-- 	<script src="${context}/resources/css/style.css" ></script> --%>
	<script src="${context}/resources/js/app.js"></script> 
</head>
			<div id="nav">
				<tiles:insertAttribute name="nav" />
			</div> 
<body>
			<div id="header">
 				<tiles:insertAttribute name="header" />
 			</div>
			<div id="content">
				<tiles:insertAttribute name="content"/>
			</div>
		
			<div id="footer">
				<tiles:insertAttribute name="footer"/>
			</div>
				<div id="se">
				<tiles:insertAttribute name="se"/>
			</div>
		 <!-- Bootstrap core JavaScript -->
    	<script src="${context}/resources/css/vendor/jquery/jquery.min.js"></script>
    	<script src="${context}/resources/css/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    	<!-- Custom scripts for this template -->
    	<script src="${context}/resources/js/js2/clean-blog.min.js"></script>
<script>
app.init('${context}');
</script>

</body>
</html>