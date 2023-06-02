//visual animation
const fadeEls = document.querySelectorAll('.fade-in');
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    });
});

new Swiper('.notice .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 36,
  centeredSlides: true,
  loop: true,
  pagination: {
      el: '.notice .swiper-pagination',
      clickable: true
  },
  navigation: {
      prevEl: '.notice .swiper-prev',
      nextEl: '.notice .swiper-next'
  }
})

new Swiper('.ent-list .swiper-container', {
  autoplay: true, 
  //slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  navigation: {
      prevEl: '.ent-list .swiper-prev',
      nextEl: '.ent-list .swiper-next'
  }
})

//년도
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

const stateMenus = document.querySelectorAll('input[type=radio][name=searchItem]');

document.addEventListener('DOMContentLoaded', function() {
  const stateMenus = document.querySelectorAll('input[type=radio][name=searchItem]');
  const subOptions = {
    all: ['자원전체'],
    object: ['유아/완구', '생활/주방', '아웃도어/스포츠', '사무/취미', '가구', '공구/용품', '전자제품', '패션/잡화', '기타'],
    space: ['작업실', '회의실', '강당', '공원', '유흥공간', '기타'],
    talent: ['교육', '기술', '지식', '기타'],
    degital: ['인문/사회', '문화/예술', '정치/경제', '기타'],
  }
  const Area = ['전체', '전주시', '군산시', '익산시', '정읍시', '남원시', '김제시', '완주군', '진안군', '무주군', '장수군', '임실군', '순창군', '고창군', '부안군' ]

  for (let stateMenu of stateMenus) {
      stateMenu.addEventListener('change', function(e) {
          if (e.target.checked) {
              //alert(`${e.target.value} is checked`);
              
              const subMenu = document.querySelector("#obState");
              const mainOption = this.value;
              // console.log(mainOption)
              // const subOption = Object.values(subOptions.key);
              //console.log(subOptions)

              if(mainOption === 'object') {
                const subOption = subOptions.object;
                console.log(subOption)
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
                console.log(subOption)
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
                console.log(subOption)
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
                console.log(subOption.length)
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
                console.log(subOption.length)
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
  
})


const Area = ['전체', '전주시', '군산시', '익산시', '정읍시', '남원시', '김제시', '완주군', '진안군', '무주군', '장수군', '임실군', '순창군', '고창군', '부안군' ]


const obArea = document.querySelector("#obArea");
console.log(Area)
const areaMenu = Area;
const option = document.createElement('option');
for (let i = 0; i < Area.length; i++) {
  const option = document.createElement('option');
  option.innerHTML = Area.join('');
  option.innerText = Area[i];
  option.value = Area[i]; //이것도 가능합니다.
  obArea.append(option);
}


const $ = (selector) => document.querySelector(selector);
const post = {};

async function fetchPost() {
  const response = await fetch(`http://localhost:3000/posts`)
  const data = await response.json();

  return data;
}

const postTemplate = (post) => {
  return `
  <a href="/market-detail.html?id=${post.id}" class="object-item>
    <div class="ob-img">
      <img src="${post.image}" alt="${post.title}" />
      <img class="ob-icon" src="${post.image}" alt="" />
    </div>
    <span class="ob-title text-line1">${post.title}</span>
    <span class="ob-addr">${post.address}</span>
    <div class="pay">
      <span class="ob-sum">${post.pay}</span>
      <span class="ob-point">5${post.point} ${post.smoney}</span>
    </div>
    <span class="ob-state">${post.category}</span>
    <div class="ob-like-star flex">
      <div class="ob-star">
        <img src="./src/image/star.png" alt="">
        <span>23</span>
      </div>
      <div class="ob-like">
        <img src="./src/image/like.png" alt="">
        <span>23</span>
      </div>
    </div>
  </a>
`
}

fetchPost().then(posts => {
  console.log(posts)
  $(".posting-container").insertAdjacentHTML(
    'beforeend', posts.map(post => postTemplate(post))
  ) 
  //$(".posting-container").innerHTML = posts.map(post => postTemplate(post)).join('')
})


