const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `<div class="header-top clearfix">
        <div class="inner">
          <ul class="header-top-user inner-right flex">
            <li><a href="../login/login.html">로그인</li></a>
            <li><a href="javascript:void(0)">회원가입</li></a>
            <li><a href="javascript:void(0)">마이페이지</li></a>
          </ul>
        </div>
      </div>
      
      <!-- HEADER BOTTOM -->
      <div class="header-btm">
        <div class="inner clearfix">
          <div class="header-btm-box inner-left flex clearfix">
            <a class="logo" href="../index.html"></a>
            <ul id="gnb" class="main-menu toggle flex clearfix">
              <li class="main-menu-li">
                <a href="javascript:void(0)" class="dep1">가치앗이소개</a>
                <ul class="sub-menu-items">
                  <li>
                    <a class="dep2" href="../page/intro.html">가치앗이소개</a>
                  </li>
                </ul>
              </li>
              <li class="main-menu-li">
                <a href="javascript:void(0)" class="dep1">공유장터</a>
                <ul class="sub-menu-items">
                  <li><a class="dep2" href="../page/market.html">물건공유</a></li>
                  <li><a class="dep2" href="javascript:void(0)">공간공유</a></li>
                  <li><a class="dep2" href="javascript:void(0)">재능공유</a></li>
                  <li><a class="dep2" href="javascript:void(0)">디지털공유</a></li>
                  <li><a class="dep2" href="javascript:void(0)">공유누리</a></li>
                </ul>
              </li>

              <li class="main-menu-li">
                <a class="dep1" href="javascript:void(0)">공유경제</a>
                <ul class="sub-menu-items">
                  <li><a class="dep2" href="javascript:void(0)">공유지도</a></li>
                  <li><a class="dep2" href="javascript:void(0)">공유실험실</a></li>
                  <li><a class="dep2" href="javascript:void(0)">공유자원요청</a></li>
                  <li><a class="dep2" href="javascript:void(0)">디지털공유</a></li>
                  <li><a class="dep2" href="javascript:void(0)">공유시범사업</a></li>
                </ul>
              </li>
              <li class="main-menu-li">
                <a class="dep1" href="javascript:void(0)">아카이브</a>
                <ul class="sub-menu-items">
                  <li><a class="dep2" href="javascript:void(0)">가치앗이소식</a></li>
                  <li><a class="dep2" href="javascript:void(0)">참여게시판</a></li>
                </ul>
              </li>
            </ul>

            <div class="sub-bg"></div>
            
            <div class="header-btm-box inner-right flex">
              <a href="javascript:void(0)"
              class="header-btn--regi btn btn--primary-line h24 flex">거점등록</a>
              <a href="javascript:void(0)"
              class="header-btn--regi btn btn--primary h24 flex">자원등록</a>
            </div>
            
          </div>
        </div>
        
      </div>`


footer.innerHTML = `<div class="inner">
<section class="footer-left">

  <a href="javascript:void(0)" class="footer-logo">
    <img src="../src/image/footer-logo.png" alt="경제통상진흥원">
  </a>

  <ul class="footer-shortcut flex">
    <li><a href="javascript:void(0)">서비스이용약관</a></li>
    <li><a href="javascript:void(0)">개인정보보호정책</a></li>
    <li><a href="javascript:void(0)">이메일 무단수집거부</a></li>
  </ul>

  <ul class="footer-info flex">
    <li>yright <span class="this-year"></span> kj All Right Reserved</li>
    <li>전라북도 전주시 덕진구 팔과정로 164</li>
    <li>TEL  063-711-2076</li>
    <li>E-MAIL  mulan@jbba.krcop</li>
  </ul>

</section>

<section class="footer-right">
  <ul class="social flex">
    <li>
      <a href="https://www.youtube.com/@jbba">
        <img src="../src/image/footer-you.png" alt="">
      </a>
    </li>
    <li>
      <a href="javascript:void(0)">
        <img src="../src/image/footer-in.png" alt="">
      </a>
    </li>
    <li>
      <a href="javascript:void(0)">
        <img src="../src/image/footer-fa.png" alt="">
      </a>
    </li>
  </ul>
</section>

</div>`