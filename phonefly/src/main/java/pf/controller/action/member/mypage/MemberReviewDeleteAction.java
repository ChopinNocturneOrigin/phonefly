package pf.controller.action.member.mypage;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import pf.controller.action.Action;
import pf.dao.ReviewDao;

public class MemberReviewDeleteAction implements Action {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String rseq = request.getParameter("rseq");
		ReviewDao rdao = ReviewDao.getInstance();
		
		rdao.deleteReview( Integer.parseInt(rseq) );
		
		response.sendRedirect("pf.do?command=memberReviewList"); 

	}

}

