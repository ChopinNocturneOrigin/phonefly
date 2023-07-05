<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head><%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../../admin/header2.jsp"%>
<%@ include file="../../admin/sub_menu2.jsp"%>

<article>
	<h1>배너 보기</h1>
	<table id="EDList">
		<tr>
			<th align="center">배너 제목</th>
			<td colspan="5">${bannerVO.subject}</td>
		</tr>
		<tr>
			<th>배너 동영상</th>

			<td width="1470px;" colspan="5"	style="vertical-align: top; position: relative;">
		     	<video src="../videos/${bannerVO.video}" width="1470px;"></video>
				    <div style="position: absolute; top: ${bannerVO.btop}; left: ${bannerVO.left};">
					   <input type="text" name="btitle" size="47" value="${bannerVO.btitle}">
				   </div>
				   <div style="position: absolute; top: ${bannerVO.btop}; left:${bannerVO.left};">
				     	<input type="text" name="btext" size="47" value="${bannerVO.btext}">
				   </div>
				</td>

		</tr>
	</table>

	<div class="Bottm-btn-container">
		<div>
			<input class="btn" type="button" value="목록" onClick="go_mov()">
		</div>
	</div>

</article>

<%@ include file="../../admin/footer.jsp"%>
<body>

</body>
</html>