<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
	<script src="${context}/resources/js/algo.js"></script>
	<%-- <script src="${context}/resources/js/router.js"></script> --%>   
</head>
			
<body>
<div id = "wrapper">
</div>
		 <!-- Bootstrap core JavaScript -->
    	<script src="${context}/resources/css/vendor/jquery/jquery.min.js"></script>
    	<script src="${context}/resources/css/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    	<!-- Custom scripts for this template -->
    	<script src="${context}/resources/js/js2/clean-blog.min.js"></script>
<script>
//app.init('${context}');
app.router.init('${context}')
</script>

</body>
</html>