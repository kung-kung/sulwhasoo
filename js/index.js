$(function(){
    $(".sub").hide()
    $(".lang").click(function(){
        $(this).toggleClass("show")
    })
    /*     
    $(".lang .lang_list li").click(function(){
        var x = $(this).find("a").text()
        $(".lang .lang_tit a").text(x)
    }) 
    */
    $(".main>li").hover(function(){
        $(this).find(".sub").stop().slideDown()
        $(".main").stop().animate({height:"70px"},500)
    },function(){
        $(".sub").stop().slideUp()
        $(".main").stop().animate({height:"50px"},500)
        
    })

    $(".m").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true
    })

    $(".sc2_m a").click(function(e){
        e.preventDefault()
        $(".sc2_m a").removeClass("on")
        $(this).addClass("on")

        var x = $(this).index()

        $(".sc2_b ul").removeClass("act")
        $(".sc2_b ul").eq(x).addClass("act")
    })
    $(".fs_ul").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        fade: true
    })
    $(".m_ham").click(function(){
        $(".m_nav_bg").animate({left:0},5,function(){
            $(".m_nav_bg").delay(50).animate({opacity:1},5)
        })
    })
    $(".m_nav_bg").click(function(){
        $(".m_nav_bg").animate({left:"-100%"},5,function(){
            $(".m_nav_bg").animate({opacity:0},5)
        })
    })
    
    $(".m_main>li").hover(function(){
        $(this).find("a").addClass("on")
        $(this).find(".m_sub").stop().slideDown()
    },function(){
        $(".m_icon").parent().removeClass("on")
        $(".m_sub").stop().slideUp()
    })
})