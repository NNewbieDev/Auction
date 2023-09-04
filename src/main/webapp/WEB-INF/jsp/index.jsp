<%-- 
    Document   : index.jsp
    Created on : Jul 15, 2023, 7:46:09 PM
    Author     : admin
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Home page</title>
    </head>
    <body>
        <h1>Welcome</h1>
        <ul>
            <c:forEach items="${shop}" var="s">
                <li> ${s.username}  </li>
            </c:forEach>
        </ul>

    </body>
</html>
