$(document).ready(function(){

    $(".headL").click(function(){
        if($(this).hasClass("on")==false){
            $(this).addClass("on")
            $(".blackcover").addClass("on")
            $(".menubutton").addClass("on")
            $(".headL>i").html("닫기")
            $(".menubutton").find("li").removeClass("on")
            
        }else{
            $(".menubutton").find("li").removeClass("on")
            $(this).removeClass("on")
            $(".blackcover").removeClass("on")
            $(".menubutton").removeClass("on")
            $(".headL>i").html("메뉴")
        }
    })

    $(".menubottom>ul>li").click(function(){      
        if($(this).hasClass("on")==true){
            $(".menubutton").find("li").removeClass("on")
            $(this).removeClass("on")
        }else{
            $(".menubutton").find("li").removeClass("on")
            $(".menubottom>ul>li").removeClass("on")
            $(this).addClass("on")
            
        }
        
        
        
    })
    $(".menubottom>ul>li>ul").click(function(){
        return false

    })

    menuClick(".menubottom>ul>li>ul>li")

    
    $(".menubottom>ul>li>ul>li>div>ul").click(function(){
        return false

    })

    function menuClick(menuDepth){
        $(menuDepth).click(function(){
            if($(this).hasClass("on")==true){
            $(this).removeClass("on")
        }else{
            $(menuDepth).removeClass("on")
            $(this).addClass("on")
            if($(this).hasClass("on")==true){$(this).css("color","#ddd")}
        }
        })  
    }
    $(".downBtn").click(function(){
        if($(this).hasClass("on")==true){
            $(".extraWrap").removeClass("on")
            $(".menubottom").removeClass("on")
            $(this).removeClass("on")
        }else{
        $(".extraWrap").addClass("on")
        $(".menubottom").addClass("on")
        $(this).addClass("on")
        }
    })
    $(window).scroll(function () {
        let winst = $(window).scrollTop() // 스크롤바 위에서 얼만큼 내려왔는지 계산
        let winHeight = $(window).height() * 0.65
        let winScrollSet = winst + winHeight
        if (winScrollSet > 1500) {
            $("header").addClass("on")
        } else {
            $("header").removeClass("on")
        }
    })
})