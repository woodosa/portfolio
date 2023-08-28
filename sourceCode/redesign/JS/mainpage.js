$(document).ready(function () {
    $(window).scroll(function () {
        let winst = $(window).scrollTop() // 스크롤바 위에서 얼만큼 내려왔는지 계산
        let winHeight = $(window).height() * 0.65
        let winScrollSet = winst + winHeight
        // console.log(winScrollSet)

        $(".BG,.videoAnimate,.mltr,.mrtl,.mttb,.mbtt").each(function () {
            if (winScrollSet > $(this).offset().top) {
                $(this).addClass("on")
            } else {
                $(this).removeClass("on")
            }
        })
        if (winScrollSet > 1500) {
            $("header").addClass("on")
        } else {
            $("header").removeClass("on")
        }

        let eq1=$(".heritage_wrap").offset().top
        let eq2=$(".otherbrand").offset().top

        if (winScrollSet > 0) {
            $(".main_controler>ul>li").removeClass("on")
            $(".main_controler>ul>li").eq(0).addClass("on")
        }
        if (winScrollSet > eq1) {
            $(".main_controler>ul>li").removeClass("on")
            $(".main_controler>ul>li").eq(1).addClass("on")

        } if (winScrollSet >eq2) {
            $(".main_controler>ul>li").removeClass("on")
            $(".main_controler>ul>li").eq(2).addClass("on")

        }
    })


    let videoTop = $(".aniVideo").offset().top
    
    $(window).scroll(function () {
        // aniVideo
        let winst = $(window).scrollTop() // 스크롤바 위에서 얼만큼 내려왔는지 계산
        let winHeight = $(window).height()
        
        let targetHeight = $(".aniVideo").height()
        let transformRatio =(winst-videoTop)/(targetHeight);
        let scaleRatio =(winst-videoTop)/(targetHeight);

        if (winst >= videoTop && winst< videoTop+(targetHeight)) {
            // console.log(transformRatio)
            if(scaleRatio>0.6){scaleRatio=0.6}
            $(".aniVideo").css("left",6*scaleRatio+"vw")
            $(".aniVideo").css("transform","scale("+(1-(scaleRatio*0.4))
            +")translateY("+(transformRatio*115)+"%)")
            if(transformRatio<0.8){
                $(".aniVideo").css("top",3*transformRatio+"vw")
            }
            $(".aniScrollBox").css("padding-bottom",transformRatio*50+"vh")
            
        }


    })


    // $(".heritage_wrap>div").on("wheel DOMMouseScroll",function(event){
    // //    console.log(event)
    //    let E = event.originalEvent
    //    let delta = 0;
    //    if(E.detail){
    //     delta = E.detail * -40
    //    }else{
    //     delta = E.wheelDelta
    //    }
       
    //    if(delta<0){
    //     //마우스 휠을 내렸을 때
    //     if($(this).next().length){
    //         let posTop = $(this).next().offset().top
    //         $("html,body").stop().animate({scrollTop:posTop},1000)
    //     }
    //    }else{
    //     //마우스 휠을 올렸을 때
    //     if($(this).prev().length!=0){
    //         let posTop = $(this).prev().offset().top
    //         $("html,body").stop().animate({scrollTop:posTop},1000)
    //     }
    //    }
    // //    return false

    // })

    // $(window).scroll(function(){
    //     let winst=$(window).scrollTop()
    //     let mvTop=$(".testBase").offset().top
    //     let winHeight=$(window).height()*0.8
    //     let winScrollSet=winst+winHeight
    //     if(winScrollSet>=mvTop && winScrollSet-mvTop<2000){
    //         // 450 은 실행길이
    //         $(".testBase").css("height",(winScrollSet-mvTop)+"px")
    //         // console.log("라인 길이",winScrollSet-mvTop)
    //     }
    // })

    //menu
})