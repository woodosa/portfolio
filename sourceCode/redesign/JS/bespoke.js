$(document).ready(function(){
    
    $(window).scroll(function(){
        let winst = $(window).scrollTop() // 스크롤바 위에서 얼만큼 내려왔는지 계산
        let winHeight = $(window).height()*0.65 
        let winScrollSet = winst+winHeight
        // console.log(winScrollSet)

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

    // fixedEffect(".fixedEffect",{
    //     Length:7200
    // })

    $(window).scroll(function(){
        ScrollMovTxt(".mvTitle",{
            // origin:1,
            stop:1,
            OriginPoint:350,
            Direction:"translateX(",
        })
        MinusScrollMovTxt(".bespokeTxtbox",{
            OriginPoint:-350,
            Direction:"translateY(",
            stop:1
        })      
    })
    

    $(document).ready(function(){
        fixedEffect(".fixedEffect",{
        Length:7400})
    })

    // if($(".fixedEffect").css("position","relative")){
    //     $(".make_content.movingStation").css("left",0)
    // }else{
    //     $(".make_content.movingStation").css("left","50%").css("transform","translateX(-50%)")
    // }


    // fixed 효과 초안


    // let firstTargetTop = $(".make>.container").offset().top
    
    // $(window).scroll(function(){
    //     let winHeight = $(window).height()*0.6 
    //     let height=$(window).height()
    //     let endPoint=$(".spbene").offset().top
    //     let target = $(".make>.container")
    //     // let targetTop = target.offset().top
    //     let winst = $(window).scrollTop();
    //     let scrollSet=(winst+height-firstTargetTop)
    //     console.log("scrollset",scrollSet,winst>=firstTargetTop,"걸리는지점",winst,"태그높이",firstTargetTop)
    //     if(winst+winHeight>=firstTargetTop && scrollSet<=4000){
    //         target.removeClass("bsPadding")
    //        target.addClass("on")
    //        if(scrollSet<0){scrollSet=0}
    //        $(".make").css("padding-bottom",scrollSet-970)
    //        if(target.hasClass("on")){
    //             let posTop=(1240-(winst+winHeight-firstTargetTop))
    //             console.log(posTop,"winst",winst,"taget",firstTargetTop)
    //             if(posTop<=400){posTop=400}
    //             target.css("top", posTop+"px")
    //         }
            
    //         // $(".train").css("trasform","translateX()")
            
    //     }else if(scrollSet>=4000){
    //         target.removeClass("on")
    //         target.addClass("bsPadding")
    //     }else{
    //         target.removeClass("on")
    //         target.addClass("bsPadding")
    //     }
        
    // })
    // let timer;




    //  스크롤 슬라이더 초안
    // $(".make_content.container").on("wheel DOMMouseScroll",function(event){
    //     let train = $(".make .station>.train")
    //     let E = event.originalEvent
    //     let delta = 0;
    //     if(E.detail){
    //      delta = E.detail * -40
    //     }else{
    //      delta = E.wheelDelta
    //     }
    //     if(delta<0){
    //         clearTimeout(timer)
    //         timer = setTimeout(function(){
    //             count++
    //             if(count>3){count = 3}
    //             console.log(count)
    //             train.css("transform","translateX("+(-25*count)+"%)")
    //         },1000)
    //     }else{
    //         clearTimeout(timer)
    //         timer = setTimeout(function(){
    //             count--
    //             if(count<0){count=0}
    //             console.log(count)
    //             train.css("transform","translateX("+(-25*count)+"%)")
    //         },1000)
    //     }
        // return false;





    $(window).scroll(function(){
        let winst=$(window).scrollTop()
        let mvTop=$(".testBase").offset().top
        let winHeight=$(window).height()*0.95
        let winScrollSet=winst+winHeight
        if(winScrollSet>=mvTop && winScrollSet-mvTop<350){
            $(".testBase").css("height",(winScrollSet-mvTop)+"px")
            // console.log("라인 길이",winScrollSet-mvTop)
            // if(winScrollSet-mvTop>120){winScrollSet=120}
        }
    })
})