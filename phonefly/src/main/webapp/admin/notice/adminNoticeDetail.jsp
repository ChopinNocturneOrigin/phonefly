<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/admin/header.jsp"%>
<%@ include file="/admin/sub_menu.jsp"%>

<article>
<h1>공지사항 상세 보기</h1> 
<table id="list"> 
	<tr><th align="center" >공지사항 제목</th><td colspan="5">${noticeVO.subject}</td></tr>
   	<tr><th>상세설명</th><td colspan="5"><pre>${noticeVO.content}</pre></td></tr>
</table>
<input class="btn"  type="button" value="수정" onClick="go_mod_n('${noticeVO.nseq}')">
<input class="btn"  type="button" value="목록" onClick="go_mov_n()">
<input class="btn"  type="button" value="삭제" onClick="go_del_n('${noticeVO.nseq}')">
</article>

<%@ include file="/admin/footer.jsp"%>