const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `<div class="header-top clearfix">
        <div class="inner">
          <ul class="header-top-user inner-right flex">
            <li><a href="/login/login.html">로그인</li></a>
            <li><a href="javascript:void(0)">회원가입</li></a>
            <li><a href="javascript:void(0)">마이페이지</li></a>
          </ul>
        </div>
      </div>
      
      <!-- HEADER BOTTOM -->
      <div class="header-btm">
        <div class="inner clearfix">
          <div class="header-btm-box inner-left flex clearfix">
            <a class="logo" href="/index.html"></a>
            <ul id="gnb" class="main-menu toggle flex clearfix">
              <li class="main-menu-li">
                <a href="javascript:void(0)" class="dep1">가치앗이소개</a>
                <ul class="sub-menu-items">
                  <li>
                    <a class="dep2" href="/page/intro.html">가치앗이소개</a>
                  </li>
                </ul>
              </li>
              <li class="main-menu-li">
                <a href="javascript:void(0)" class="dep1">공유장터</a>
                <ul class="sub-menu-items">
                  <li><a class="dep2" href="/page/market.html">물건공유</a></li>
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

const nav = document.querySelector("#gnb");

nav.addEventListener("mouseenter", () => {
  header.style.height = 320 + "px";
  header.style.boxShadow = `2px 2px 3px rgba(0,0,0,.15)`
})

nav.addEventListener("mouseleave", () => {
  header.style.height = 90 + "px";
  header.style.boxShadow = `none`
})

//년도
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

const stateMenus = document.querySelectorAll('input[type=radio][name=searchItem]');

document.addEventListener('DOMContentLoaded', function() {
  const stateMenus = document.querySelectorAll('input[type=radio][name=searchItem]');
  const marketMenus = document.querySelectorAll('.tab-btn');
  const subOptions = {
    all: ['자원전체'],
    object: ['유아/완구', '생활/주방', '아웃도어/스포츠', '사무/취미', '가구', '공구/용품', '전자제품', '패션/잡화', '기타'],
    space: ['작업실', '회의실', '강당', '공원', '유흥공간', '기타'],
    talent: ['교육', '기술', '지식', '기타'],
    degital: ['인문/사회', '문화/예술', '정치/경제', '기타'],
  }

  for (let stateMenu of stateMenus) {
      stateMenu.addEventListener('change', function(e) {
          if (e.target.checked) {
              
              const subMenu = document.querySelector("#obState");
              const mainOption = this.value;

              if(mainOption === 'object') {
                const subOption = subOptions.object;
                subMenu.options.length = 0;
                  for (let i = 0; i < subOption.length; i++) {
                    const option = document.createElement('option');
                    option.innerText = subOption[i];
                    option.value = subOption[i]; //이것도 가능합니다.
                      subMenu.append(option);
                }
                return
              }else if(mainOption === 'space') {
                const subOption = subOptions.space;
                subMenu.options.length = 0;
                for (let i = 0; i < subOption.length; i++) {
                  const option = document.createElement('option');
                  option.innerText = subOption[i];
                  option.value = subOption[i]; //이것도 가능합니다.
                    subMenu.append(option);
                }
                return
              }else if(mainOption === 'talent') {
                const subOption = subOptions.talent;
                subMenu.options.length = 0;
                for (let i = 0; i < subOption.length; i++) {
                  const option = document.createElement('option');
                  option.innerText = subOption[i];
                  option.value = subOption[i]; //이것도 가능합니다.
                    subMenu.append(option);
                }
                return
              }else if(mainOption === 'degital') {
                const subOption = subOptions.degital;
                subMenu.options.length = 0;
                for (let i = 0; i < subOption.length; i++) {
                  const option = document.createElement('option');
                  option.innerText = subOption[i];
                  option.value = subOption[i]; //이것도 가능합니다.
                    subMenu.append(option);
                }
                return
              }else if (mainOption === 'all') {
                const subOption = subOptions.all;
                subMenu.options.length = 0;
                for (let i = 0; i < subOption.length; i++) {
                  const option = document.createElement('option');
                  option.innerText = subOption[i];
                  option.value = subOption[i]; //이것도 가능합니다.
                    subMenu.append(option);
                }
                return
              }
            }
            else {
              //alert(`${e.target.value} is unchecked`);
            }
      });
    
  }
  for (let marketMenu of marketMenus) {
    marketMenu.addEventListener('click', function(e) {
        if (e.target) {
            const subMenu = document.querySelector("#obState");
            const mainOption = this.innerText;

            if(mainOption === '물건') {
              const subOption = subOptions.object;
              subMenu.options.length = 0;
                for (let i = 0; i < subOption.length; i++) {
                  const option = document.createElement('option');
                  option.innerText = subOption[i];
                  option.value = subOption[i]; 
                    subMenu.append(option);
              }
              return
            }else if(mainOption === '공간') {
              const subOption = subOptions.space;
              subMenu.options.length = 0;
              for (let i = 0; i < subOption.length; i++) {
                const option = document.createElement('option');
                option.innerText = subOption[i];
                option.value = subOption[i]; 
                  subMenu.append(option);
              }
              return
            }else if(mainOption === '재능') {
              const subOption = subOptions.talent;
              subMenu.options.length = 0;
              for (let i = 0; i < subOption.length; i++) {
                const option = document.createElement('option');
                option.innerText = subOption[i];
                option.value = subOption[i];
                  subMenu.append(option);
              }
              return
            }else if(mainOption === '디지털') {
              const subOption = subOptions.degital;
              subMenu.options.length = 0;
              for (let i = 0; i < subOption.length; i++) {
                const option = document.createElement('option');
                option.innerText = subOption[i];
                option.value = subOption[i]; 
                  subMenu.append(option);
              }
              return
            }else if (mainOption === 'all') {
              const subOption = subOptions.all;
              subMenu.options.length = 0;
              for (let i = 0; i < subOption.length; i++) {
                const option = document.createElement('option');
                option.innerText = subOption[i];
                option.value = subOption[i]; 
                  subMenu.append(option);
              }
              return
            }
          }
          else {
            //alert(`${e.target.value} is unchecked`);
          }
    });
  
}
})

const Area = ['지역전체', '전주시', '군산시', '익산시', '정읍시', '남원시', '김제시', '완주군', '진안군', '무주군', '장수군', '임실군', '순창군', '고창군', '부안군' ]


const obArea = document.querySelector("#obArea");
const areaMenu = Area;
const option = document.createElement('option');
for (let i = 0; i < Area.length; i++) {
  const option = document.createElement('option');
  option.innerHTML = Area.join('');
  option.innerText = Area[i];
  option.value = Area[i]; 
  obArea.append(option);
}