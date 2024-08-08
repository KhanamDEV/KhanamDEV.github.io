$(function(){
    $(".showmenu-pc").click(function(){
        $(".menu-pc").addClass("animate__animated animate__fadeInDownBig show")
    });
    $(".closemenu-pc").click(function(){
        $(".menu-pc").removeClass("animate__animated animate__fadeInDownBig show")
    });
});