function addUI() {
	return '<style>'
+'#user {'
    +'margin: 150px auto;'
    +'width: 250px;'
+'}'
+'</style>'
    +'<div id="user">'
        +'<h2>회원 가입</h2>'
        +'<div id="joinForm"  style="border:1px solid black" name="joinForm"> '
            +'아이디 : <input type="text" id="userid" name="userid" maxlength="10" size="9" required><br>'
            +'비밀번호 : <input type="password" id="password" name="password" maxlength="20"size="12" required> <br> '
            +'이름 : <input type="text" id="name" name="name" maxlength="5" size="8" required><br> '
            +'명단 : <input type="radio" id="roll" name="roll" value="팀장" />팀장'
                 +'<input type="radio" id="roll" name="roll"value="프론트개발" />프론트개발<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;'
                 +'<input type="radio" id="roll" name="roll"value="백단개발" /> 백단개발'
                 +'<input type="radio" id="roll" name="roll"value="민폐" />민폐 <br> '
             +'팀ID : <select id="teamid" name="teamid">'
                    +'<option value="걍놀자">걍놀자</option>'
                    +'<option value="코딩짱">코딩짱</option>'
                    +'<option value="지은이가지은집">지은이가지은집</option>'
                    +'<option value="왕꼬북이">왕꼬북이</option>'
                    +'</select><br> '
            +'주민번호 : <input type="text" id="ssn" name="ssn" maxlength="6" size="7" required> -'
                    +'<input type="text" id="ssn2" name="ssn2" maxlength="1" size="1"> <br>'
         +'</div> '
    +'</div>';
}