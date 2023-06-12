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

})