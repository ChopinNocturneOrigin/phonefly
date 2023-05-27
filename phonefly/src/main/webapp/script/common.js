/**
 * author : BHS
 */


/* 맨위로 돌아가기 */
var backToTopReady = () => {
	// Scroll | button show/hide
	window.addEventListener('scroll', () => {
		if (document.querySelector('html').scrollTop > 100) {
			document.getElementById('go_top').style.display = "block";
		} else {
			document.getElementById('go_top').style.display = "none";
		}
	});
};
backToTopReady();

// back to top
var backToTop = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
};

/* // 맨 위로 돌아가기 */



/* 레이어 팝업 */
/* class="layer-popup show" */
// 팝업 열기
$(document).on("click", ".btn-divpopup-open", function (e){
	var target = $(this).attr("href");
	$(target).addClass("show");
});

// 외부영역 클릭 시 팝업 닫기
$(document).mouseup(function (e){
	var LayerPopup = $(".layer-popup");
	if (LayerPopup.has(e.target).length === 0) {
		LayerPopup.removeClass("show");
	}
});
/* // 레이어 팝업 */



/* 스크롤 */
$(window).scroll( function () {
	var
	$floater = $('#pdd-scroll-box'),
	startPoint = 140,
	scrollPoint = parseInt( $(window).scrollTop() );
	if (parseInt( scrollPoint ) > parseInt( startPoint ) ) {
		$floater.css("top", ($(window).scrollTop() - startPoint));
	} else {
		$floater.css("top", 0);
	}
});
/* // 스크롤*/





/* 정수를 통화 단위 콤마 스트링으로 변환 */

 function toCurrencyString(num) {
	var regexp = /\B(?=(\d{3})+(?!\d))/g;
	return num.toString().replace(regexp, ',');
}

/* // 정수를 통화 단위 콤마 스트링으로 변환 */


function faqMenu(nn) {
	$('.faq-part').addClass('display-none');
	$('.faq-part-'+nn).removeClass('display-none');
} 

function faqToggle(n1,n2) {
	$('.faq-answer-'+n1+''+n2).toggleClass('faqdisabled');
}



/* 아이디 찾기 / 비밀번호 찾기 */

function findId() {
	let url = "pf.do?command=selectId";
	let opt = "toolbar=no, menubar=no, resizable=no, scrollbars=no, width=550, height=300, top=300, left=300";
	window.open(url, "아이디(ID) 찾기", opt);
}

function findPwd() {
	let url = "pf.do?command=selectPwd";
	let opt = "toolbar=no, menubar=no, resizable=no, scrollbars=no, width=550, height=300, top=300, left=300";
	window.open(url, "비밀번호 찾기", opt);
}

function checkPwd() {
	if (document.joinForm.pwd.value === "") {
		alert("비밀번호를 입력해 주세요.");
		document.joinForm.pwd.focus();
	} else if (document.joinForm.pwd.value !== document.joinForm.pwdCheck.value) {
		alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
		document.joinForm.id.focus();
	} else {
		document.joinForm.action = "pf.do";
		document.joinForm.submit();
	}
}




/* 회원 탈퇴 */
function withdrawalConfirm() {
	let bool = confirm("정말로 탈퇴 하시겠습니까?");
	if (bool) {
		location.href = 'pf.do?command=deleteMember';
	} else {
		return;
	}
}


/* Q & A */
function confirmDeleteQna(qseq) {
	let bool = confirm("정말로 삭제 하시겠습니까?");
	if (bool) {
		location.href = 'pf.do?command=qnaDelete&qseq='+qseq;
	} else {
		return;
	}
}

function qna_write() {
	if (document.qnafrm.subject.value === "") {
		alert("제목을 입력해 주세요.");
		document.qnafrm.subject.focus();
	} else if (!fn_chk_byte2(document.qnafrm.subject, 100)) {
		alert("제목은 100바이트 까지 입력 가능합니다.");
		document.qnafrm.subject.focus();
	} else if (document.qnafrm.content.value === "") {
		alert("내용을 입력해 주세요.");
		document.qnafrm.content.focus();
	} else if (!fn_chk_byte2(document.qnafrm.content, 3000)) {
		alert("내용은 3000바이트 까지 입력 가능합니다.");
		document.qnafrm.content.focus();
	} else {
		document.qnafrm.action = "pf.do";
		document.qnafrm.submit();
	}
}


function fn_chk_byte(obj){
    totalByte = 0;
    var message = $(obj).val();

    for(var i =0; i < message.length; i++) {
            var currentByte = message.charCodeAt(i);
            if(currentByte > 128){
            	totalByte += 2;
            }else {
            	totalByte++;
            }
    }
    $("#messagebyte").text(totalByte);
}

function fn_chk_byte2(obj, nn){
    totalByte = 0;
    var message = $(obj).val();

    for(var i =0; i < message.length; i++) {
            var currentByte = message.charCodeAt(i);
            if(currentByte > 128){
            	totalByte += 2;
            }else {
            	totalByte++;
            }
    }
    if (totalByte > nn) {
		return false;
	} else {
		return true;
	}
}