$(function(){
    $(".showmenu-pc").click(function(){
        $(".menu-pc").addClass("animate__animated animate__fadeInDownBig show")
    });
    $(".showmenu-mobile").click(function(){
        $(".menu-pc").addClass("animate__animated animate__fadeInDownBig show")
    });
    $(".closemenu-pc").click(function(){
        $(".menu-pc").removeClass("animate__animated animate__fadeInDownBig show")
    });
    $(document).on('scroll', function() {
        for(let i = 2; i<= 9; i++){
            if( $(this).scrollTop() + window.screen.height * 0.8 >= $(`.effect-item.${i}`).position().top ){
                if(!$(`.effect-item.${i} img`).hasClass('animate__bounceInUp')){
                    $(`.effect-item.${i} img`).addClass('animate__bounceInUp')
                    $(`.effect-item.${i} img`).removeClass('hide')
                }
            }
        }
        
    });

    $(window).scroll(function (){
        if($(window).scrollTop() > 1){
            $("#header").addClass('bg-white')
        } else {
            $("#header").removeClass('bg-white')
        }
    })
});