<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/admin/header2.jsp"%>
<%@ include file="/admin/sub_menu2.jsp"%>

<article>
<h1>주문리스트</h1>
<form name="frm" method="post">
	<table style="float: right;">
		<tr>
			<td>주문상품 이름<input type="text" name="key" value="${key}" >
				<input class="btn" type="button" value="검색" onClick="go_search('adminOrderList');">
				<input class="btn" type="button" value="전체보기 " onClick="go_total('adminOrderList');">
			</td>
		</tr>
	</table>
	
	<table id="orderList">
		<tr>
		<th>주문상세 번호(처리)</th>
		<th>상품 번호</th>
		<th>요금제 번호</th>
		<th>아이디</th>
		<th>처리결과</th>
		<th>주문일</th>
		<th></th>
		</tr>
		<c:forEach items="${orderList}" var="orderVO">
			<tr>
				<td>
					<c:choose>
						<c:when test='${orderVO.result=="1"}'>
							<span style="font-weight: bold; color: blue">${orderVO.odseq}</span>
							(<input type="checkbox" name="result" value="${orderVO.odseq}">미처리)</c:when>
				    	<c:otherwise>
			       			<span style="font-weight: bold; color: red">${orderVO.odseq}</span>
			      			(<input type="checkbox" checked="checked" disabled="disabled">처리완료)</c:otherwise>
					</c:choose>
				</td>
				<td>${orderVO.pseq}</td>
				<td>${orderVO.rseq}</td>
				<td>${orderVO.id}</td>
				<td>${orderVO.result}</td>
				<td><fmt:formatDate value="${orderVO.indate}" /></td>
			</tr>
		</c:forEach>
	</table>
	<div class="clear"></div>
	<input type="button" class="btn" style="width: 200px" value="주문처리(입금확인)" onClick="go_order_save()">

	<br><br>

	<jsp:include page="/admin/paging/page.jsp" >
		<jsp:param name="command" value="pf.do?command=adminOrderList"/>
	</jsp:include>
</form>
</article>

<%@ include file="/admin/footer.jsp"%>



