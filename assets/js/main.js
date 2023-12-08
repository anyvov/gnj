"use strict";

document.addEventListener("DOMContentLoaded", function(){

  //-=-= 헤더 메뉴 스크롤 -=-=
  let topmenu = document.querySelector('.menutop');
  if(topmenu){
    let header = document.querySelector(".header");
    let headerHeight = header.offsetHeight;
    
    window.onscroll = function () {
      let windowTop = window.scrollY;
      if (windowTop >= headerHeight) {
        header.classList.add("active");
        topmenu.classList.add("active");
      } else {
        header.classList.remove("active");
        topmenu.classList.remove("active");
      }
    };
  }
  

  // 마이메뉴
  const myadMenu = document.querySelectorAll('.subMenu');
  const myadMenuBox = document.querySelectorAll('.subMenuBox');

  for(let i = 0; i < myadMenu.length; i++){
    myadMenu[i].addEventListener('click', function(e){
      e.target;
      myadMenuBox[i].classList.toggle('active');
    });
  }

  // 메인 서브메뉴
  const gnbmenu = document.querySelectorAll('.gnb-menu');
  const gnbsub = document.querySelectorAll('.gnb-sub');
  for(let j = 0; j < myadMenu.length; j++){
    gnbmenu[j].addEventListener('click', function(e){
      e.currentTarget;
      gnbsub[j].classList.toggle('active')
    });
  }

  // -=-= side메뉴 -=-=
  let sideMenuBtn = document.querySelector('.sideMenuBtn');
  if(sideMenuBtn){
    let rightMenu = document.querySelector('.rightMenu')
    let wrap = document.querySelector('.wrap')
    let rightclose = document.querySelector('.rightMenu .rightclose')

    sideMenuBtn.addEventListener('click', function(){
      wrap.classList.add('active');
      rightMenu.classList.add('active');
    })

    rightclose.addEventListener('click', function(){
      wrap.classList.remove('active');
      rightMenu.classList.remove('active');
    })
  }
  

  // 텝
  const tabs = document.querySelectorAll('.tabs input[type="radio"]');
  if(tabs){
    const tabContents = document.querySelectorAll('.tabs .tab-content');

    tabs.forEach((tab, index) => {
      tab.addEventListener('change', () => {
        tabContents.forEach(content => {
          content.classList.remove('active');
        });
        tabContents[index].classList.add('active');
      });
    });
  }

  
  // 서치
  const searchOpen = document.querySelector('.searchOpen');
  if(searchOpen){
    const searchArea = document.querySelector('.search-area');
    const searchClose = document.querySelector('.searchClose');
  
    searchOpen.addEventListener('click', function(){
      searchArea.classList.add('active');
    });
  
    searchClose.addEventListener('click', function(){
      searchArea.classList.remove('active');
    });
  }

  // 수신동의 팝업
    const agreePopBtn = document.querySelectorAll('.agreePopBtn');
    if(agreePopBtn){
      const agreePopupBg = document.querySelectorAll('.agreePopupBg');
      const agreePopupArea = document.querySelectorAll('.agreePopup-area');
      const aggclose = document.querySelectorAll('.agreePopup-area .rightclose');

      for(let i = 0; i < agreePopBtn.length; i++){
        agreePopBtn[i].addEventListener('click', function(e){
          e.target;
          agreePopupBg[i].classList.add('active');
          agreePopupArea[i].classList.add('active');
        }); 

        aggclose[i].addEventListener('click', function(e){
          e.target;
          agreePopupBg[i].classList.remove('active');
          agreePopupArea[i].classList.remove('active');
        });

        agreePopupBg[i].addEventListener('click', function(e){
          e.target;
          agreePopupBg[i].classList.remove('active');
          agreePopupArea[i].classList.remove('active');
        });
      }
    }
    

});




