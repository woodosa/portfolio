$(document).ready(function(){

    let slider1 = new Swiper(".main_otherbrand_brand", {

        loop:true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable:true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay:{
        delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter:true

        },
        speed:3500,
    });

    
})