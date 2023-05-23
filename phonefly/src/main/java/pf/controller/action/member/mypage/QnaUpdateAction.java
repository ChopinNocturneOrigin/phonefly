package pf.controller.action.member.mypage;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import pf.controller.action.Action;
import pf.dao.QnaDao;
import pf.dto.MemberVO;
import pf.dto.QnaVO;

public class QnaUpdateAction implements Action {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String url = "pf.do?command=QnaList";
		
		HttpSession session = request.getSession();
		MemberVO mvo = (MemberVO) session.getAttribute("loginUser");
		QnaVO qvo = new QnaVO();
		
		if (mvo == null) {
	    	url = "pf.do?command=loginForm";
		}else {
			qvo.setQseq(Integer.parseInt(request.getParameter("qseq")));
			qvo.setId(mvo.getId());
			qvo.setSubject(request.getParameter("subject"));
			qvo.setContent(request.getParameter("conent"));
			
			QnaDao qdao = QnaDao.getInstance();
			qdao.updateQna(qvo);
		}
		
		response.sendRedirect(url);

	}

}
