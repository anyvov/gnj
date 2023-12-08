"use strict";

document.addEventListener("DOMContentLoaded", function(){

  // 메인 슬라이드
  var interleaveOffset = 0.5;

        var swiperOptions = {
        loop: true,
        speed: 1000,
        grabCursor: true,
        watchSlidesProgress: true,
        mousewheelControl: true,
        keyboardControl: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
            pagination: {
            el: ".mainSlide .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".mainSlide .swiper-button-next",
            prevEl: ".mainSlide .swiper-button-prev"
        },
        on: {
            progress: function() {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                var slideProgress = swiper.slides[i].progress;
                var innerOffset = swiper.width * interleaveOffset;
                var innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".mainSlide .slide-inner").style.transform =
                "translate3d(" + innerTranslate + "px, 0, 0)";
            }      
            },
            touchStart: function() {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
            }
            },
            setTransition: function(speed) {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".mainSlide .slide-inner").style.transition =
                speed + "ms";
            }
            }
        }
        };

        let swiper01 = new Swiper(".mainSlide .swiper-container", swiperOptions);
        
        // 이벤트 슬라이드
        let swiper02 = new Swiper(".event .mySwiper", {
            spaceBetween: 10,
            mousewheelControl: true,
            keyboardControl: true,
            slidesPerView: 3,
            breakpoints: {
                // when window width is >= 576px
                576: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                //   loop: true,
                slidesPerView: 3,
                  spaceBetween: 10,
                },
              },
          });

        //   골드바 슬라이드
        let swiper03 = new Swiper(".goldBarColl .mySwiper", {
            spaceBetween: 10,
            watchSlidesProgress: true,
            mousewheelControl: true,
            keyboardControl: true,
            freeMode: true,
            slidesPerView: 4,
            breakpoints: {
                // when window width is >= 576px
                576: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                //   loop: true,
                slidesPerView: 3,
                  spaceBetween: 10,
                },
              },
          });

        //   베너슬라이드
        let swiper04 = new Swiper(".banner .mySwiper", {
            spaceBetween: 10,
            mousewheelControl: true,
            keyboardControl: true,
            slidesPerView: 1,
            pagination: {
                el: ".banner .swiper-pagination",
                clickable: true,
            },
          });

        //   베스트 상품 슬라이드
        let swiper05 = new Swiper(".bestItem .mySwiper", {
            slidesPerView: 4,
            spaceBetween: 10,
          });
});




