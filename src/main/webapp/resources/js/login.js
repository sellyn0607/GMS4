function loginUI() {
	return '<div class="sign-in-form" >'
    +'<h1 class="sign-in-form__header">'
    +'<a id="main_btn" class="sign-in-form__header__link" href="#">'
      +'<span style="padding-right:3px; padding-top: 3px; display:inline-block;">'
    + ' <img class="manImg" src='+$.img()+'/logo.JPG ></img></span>'
+'</a>    </h1>'
+'<form class="sign-in-form__form" id="new_user">'
  +'<input placeholder="이메일" autofocus="autofocus" class="sign-in-form__form__input form-control sign-in-form__form__email" type="text" name="user[email]" id="user_email">'
  +'<div class="sign-in-form__form__input-wrap sign-in-form__form__password">'
    +'<input placeholder="비밀번호" autocomplete="off" class="sign-in-form__form__input form-control" type="password" name="user[password]" id="user_password">'
  +'</div>'
  +'<input type="hidden" name="remember_me" id="remember_me" value="checked">'
  +'<input type="hidden" name="is_pro" id="is_pro" value="false">'
  +'<input id="login_btn1" type="button" name="commit" value="로그인" class="sign-in-form__form__submit btn btn-priority" data-disable-with="로그인">'
+'</form>    <div class="sign-in-form__action">'
    +'<a class="sign-in-form__action__entry" href="/users/password/new">비밀번호 재설정</a>'
    +'<a id="join_btn1" class="sign-in-form__action__entry" href="#">회원가입</a>'
+'</div>'
  +'<section class="sign-in-form__sns">'
    +'<div class="sign-in-form__sns__list">'
      +'<a class="sign-in-form__sns__entry" href="/users/auth/facebook">'
        +'<span class="icon-page-login__a-3" aria-label="페이스북으로 로그인"></span>'
+'</a>          <a class="sign-in-form__sns__entry" href="/users/auth/kakao">'
        +'<span class="icon-page-login__c-3" aria-label="카카오계정으로 로그인"></span>'
+'</a>          <a class="sign-in-form__sns__entry" href="/users/auth/naver">'
        +'<span class="icon-page-login__e-3" aria-label="네이버 아이디로 로그인"></span>'
+'</a>        </div>'
  +'</section>'
+'</div>';
}