window.onload=function(){

    
    let dtlist=document.querySelectorAll(".OB_HotKeyIN>dt")
    
    for(let i=0;i<dtlist.length;i++){
        dtlist[i].addEventListener("click", function(){
            for(let j=0;j<dtlist.length;j++){
                dtlist[j].classList.remove("on")
                // dtlist[j].nextElementSibling.classList.remove("on")
            }
            this.classList.add("on")
            // this.nextElementSibling.classList.add("on")
        })
    }
    


    // let hotKeyword = document.querySelectorAll(".OB_HotKeyIN>dt")

    
    // for(let i=0;i<hotKeyword.length;i++){
    //     hotKeyword[i].addEventListener("click",function(){
    //         for(let k=0;k=hotKeyword.length;k++){
    //             hotKeyword[k].classList.remove("on")
    //         }
    //         this.classList.add("on")
    //     })
            
    // }
    
}



