<%-- <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!doctype html>
<html lang="en">
<jsp:include page="../common/head.jsp" />
<body>
<div id="wrapper">
	<div id="header">
		<jsp:include page="../common/titleBox.jsp"/>
		<jsp:include page="../common/loginBox.jsp" />
		<jsp:include page="../common/menuBox.jsp" />
	</div> <!-- header end -->
		<div id = "content">
		<c:choose>
			<c:when test="${pagename eq 'add'}">
				<jsp:include page="add.jsp"/>
			</c:when>
			<c:when test="${pagename eq 'login'}">
				<jsp:include page="login.jsp"/>
			</c:when>
			<c:when test="${pagename eq'search'}">
				<jsp:include page="search.jsp" />
			</c:when>
			<c:when test="${pagename eq'modify'}">
				<jsp:include page="modify.jsp" />
			</c:when>
			<c:when test="${pagename eq'remove'}">
				<jsp:include page="remove.jsp" />
			</c:when>
			<c:when test="${pagename eq'retrieve'}">
				<jsp:include page="retrieve.jsp" />
			</c:when>
				<c:otherwise>
			<jsp:include page="retrieve.jsp"/>
		</c:otherwise>
			</c:choose>
		</div>
	</div>
	<jsp:include page="../common/footer.jsp" />

<script>
member.main('${context}')
</script>
</body>
</html> --%>