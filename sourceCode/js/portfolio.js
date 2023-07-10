$(document).ready(function(){
    let winTop=$(window).scrollTop()
    let winHeight = $(window).height()
    let a=$(".intro").offset().top
    // console.log(a,winTop)
    //인트로
    // let introOut=setTimeout(function(){
    //     $(".introAni").css("display","none")
    // }, 5000);

    $(".btn").click(function(){
        $("#introSVG").addClass("on")
        setTimeout(function(){
            $(".introAni").addClass("on")
            $(".moveUp,.moveLeft,.moveDown").each(function(){
                $(this).addClass("on")
            })  
        },3000)
        

    })

    // 로고클릭
    $(".logos").click(function(){
        $(".headNavigation").addClass("on")
        $(".logos").addClass("on")
    })
    $(".esc").click(function(){
        $(".headNavigation").removeClass("on")
    })


    $(".introAni").on("wheel DOMMouseScroll",function(e){
        e.preventDefault()
        return false;
    })

    $(window).scroll(function(){
        let winTop=$(window).scrollTop()
        // console.log(winTop,$(".intro").offset().top)
        if(winTop >= $(".intro").offset().top){
            $(".moveUp,.moveLeft,.moveDown").each(function(){
                $(this).addClass("on")
            })  
            // console.log("TT")  
        }

        // $(".moveUp,.moveLeft").each(function () {
        
        //     if ( winTop >= $(".intro").offset().top) {
        //         $(this).addClass("on")
        //     } else {
        //         $(this).removeClass("on")
        //     }
        // })
    })


    
    
    // let imgCount=1
    // setInterval(function(){ 
    //     imgCount++
    //     if(imgCount > 4){ imgCount=1 }
    //     $("#personalPictureImg").attr("src","./Source/img/pagesource/profile/profile"+imgCount+".png")
    //     console.log(imgCount)
    // },1000)


    $(".mainContent>div").on("wheel DOMMouseScroll",function(event){
        let winheight=$(window).height()
        winst=winheight
        console.log(winst)
        let E = event.originalEvent
       let delta = 0;
       if(E.detail){
        delta = E.detail * -40
       }else{
        delta = E.wheelDelta
       }
       
       if(delta<0){
        if($(this).next().length){
            let posTop = $(this).next().offset().top
            $("html,body").stop().animate({scrollTop:posTop},winst)
        }
       }else{
        if($(this).prev().length!=0){
            let posTop = $(this).prev().offset().top
            $("html,body").stop().animate({scrollTop:posTop},winst)
        }
       }
       return false
    })


    //skill
    $(window).scroll(function(){
        let winTop=$(window).scrollTop()
        if(winTop >= $(".skill").offset().top && winTop <= winTop + $(".skill").height() ){
            $(".skill").addClass("on")
        }
        if($(".skill").hasClass("on")==true){
            $(".skillContent ul>li>figure").each(function(){
                let list = $(this)
                let percent = $(this).find(".per").text()
                let count = 0
                let circle = $(this).find(".circle")
                let circleLength= circle.get(0).getTotalLength()
                
                let timer = setInterval(function(){
                    count++
                    if(count>=percent){
                        count=percent
                        clearInterval(timer)
                    }
                    list.find(".per").text(count+"%")
                    circle.css("stroke-dashoffset",circleLength-(circleLength*(count/100)))
                },10)
            })
        }
    })





    //popup 디자인
    let count =0
    $(".Next").click(function(){
        // let padeSlider =$("popupInfo>ul>li")
        count++
        setTimeout(function(){
            $("#noise").css("display","none")  
        },1000)
        if(count>5){count=0}
        $(".popupInfo>ul>li").removeClass("on")
        $(".popupInfo>ul>li").eq(count).addClass("on")
        $(".popupTitle>ul>li").removeClass("on")
        $(".popupTitle>ul>li").eq(count).addClass("on")
        $("#noise").css("display","block")
        $(".mokupSlide_train").css("transform","translateX(-"+((100/6)*count)+"%)")
    })
    $(".Prev").click(function(){
        count--

        $("#noise").css("display","block")
        setTimeout(function(){
            $("#noise").css("display","none")  
        },1000)
        if(count<0){count=5}
        $(".popupInfo>ul>li").removeClass("on")
        $(".popupInfo>ul>li").eq(count).addClass("on")
        $(".popupTitle>ul>li").removeClass("on")
        $(".popupTitle>ul>li").eq(count).addClass("on")
        $(".mokupSlide_train").css("transform","translateX(-"+(20*count)+"%)")
    })

    //color박스 색깔넣는 함수
    $(".colorList").children().each(function(){
        let colorName = $(this).text()
        $(this).children(".colorBox").css("background-color",colorName)
    })

       // banner 디자인 
    let result="";
    
    for(let i=0 ; i<32 ; i++){
        result+=`<li></li>`
        $(".wrap").html(result)
    }


    function bannerRotate(tag,){
        if(tag.hasClass("on")){
            tag.css("transform","rotateY(0deg)")
            tag.removeClass("on")
        }else{
            tag.css("transform","rotateY(180deg)")
            tag.addClass("on")
        }
        
    }
    $(document).ready(function(){
        $(".wrap>li").mouseover(function(){
            $(this).each(function(){
                bannerRotate($(this))
            })
        })
    })

    let bannerHeight= $(".movingStation").height()
    fixedEffect(".fixedEffect",{
        Length:(6000-bannerHeight)
    })

    //design 페이지
    $("#pageView").mouseover(function(){
        $(this).css("transform","translateY(-1000px)")
    })
    $("#pageView").mouseout(function(){
        $(this).css("transform","translateY(0px)")
    })
})
