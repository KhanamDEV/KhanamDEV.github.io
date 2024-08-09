$(function(){
    AOS.init();
    $(".showmenu-pc").click(function(){
        $(".menu-pc").addClass("animate__animated animate__fadeInDownBig show")
    });
    $(".showmenu-mobile").click(function(){
        $(".menu-pc").addClass("animate__animated animate__fadeInDownBig show")
    });
    $(".closemenu-pc").click(function(){
        $(".menu-pc").removeClass("animate__animated animate__fadeInDownBig show")
    });

    $(window).scroll(function (){
        if($(window).scrollTop() > 1){
            $("#header").addClass('bg-white')
        } else {
            $("#header").removeClass('bg-white')
        }
    })
});