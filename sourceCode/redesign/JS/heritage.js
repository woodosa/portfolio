$(document).ready(function(){
    $(window).scroll(function(){
        let winst = $(window).scrollTop() // 스크롤바 위에서 얼만큼 내려왔는지 계산
        let winHeight = $(window).height()*0.65 
        let winScrollSet = winst+winHeight
        console.log(winScrollSet)

        $(".BG,.videoAnimate,.mltr,.mrtl,.mttb,.mbtt").each(function(){
            if(winScrollSet>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })
        
        if(winScrollSet>1500){
            $("header").addClass("on")
        }else{
            $("header").removeClass("on")
        }
    })
    
    let styleGuide = new Swiper(".SG_Slider", {
        loop:true,
        effect: "flip",
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable:true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },

        // effect: "cube",
        // grabCursor: true,
        // cubeEffect: {
        //   shadow: true,
        //   slideShadows: true,
        //   shadowOffset: 20,
        //   shadowScale: 0.94,
        // },
        // pagination: {
        //   el: ".swiper-pagination",
        // },
      });
      $(".filter_icon").click(function(){
        if($(".remotecon").hasClass("remoOn")==true){
           $(".remotecon").removeClass("remoOn") 
        }else{
            $(".remotecon").removeClass("remoOn")
            $(".remotecon").addClass("remoOn")
        }
      })
})