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