$(function () {
    $(".showmenu-pc").click(function () {
        $(".menu-pc").addClass("animate__animated animate__fadeInDownBig show")
    });
    $(".showmenu-mobile").click(function () {
        $(".menu-pc").addClass("animate__animated animate__fadeInDownBig show")
    });
    $(".closemenu-pc").click(function () {
        $(".menu-pc").removeClass("animate__animated animate__fadeInDownBig show")
    });

    let previousHeight = 0;
    let max = 0
    $(document).on('scroll', function () {
        
        if(previousHeight < $(this).scrollTop()){
            for (let i = 2; i <= 9; i++) {
                console.log(max, i, "bottom");
                if ($(this).scrollTop() + window.screen.height * 0.8 >= $(`.effect-item.${i}`).position().top && i > max) {
                    console.log(i);
                    for (let j = 2; j <= 9; j++) {
                        if (j < i) {
                            $(`.effect-item.${j} img`).removeClass('animate__bounceInUp')
                            $(`.effect-item.${j} img`).addClass('hide');
                        }
                    }
                    if (!$(`.effect-item.${i} img`).hasClass('animate__bounceInUp')) {
                        $(`.effect-item.${i} img`).addClass('animate__bounceInUp')
                        $(`.effect-item.${i} img`).removeClass('hide')
                    }
                    max = i;
                    break;
                }
            }
        } else {
            
            for (let i = 9; i >= 2; i--) {
               if ($(this).scrollTop()  <= $(`.effect-item.${i}`).position().top + window.screen.height * 0.8 && i < max) {
                    for (let j = 2; j <= 9; j++) {
                        if (j > i) {
                            $(`.effect-item.${j} img`).removeClass('animate__bounceInUp')
                            $(`.effect-item.${j} img`).addClass('hide');
                        }
                    }
                    if (!$(`.effect-item.${i} img`).hasClass('animate__bounceInUp')) {
                        $(`.effect-item.${i} img`).addClass('animate__bounceInUp')
                        $(`.effect-item.${i} img`).removeClass('hide')
                    }
                    max = i;
                    break;
                }
            }

        }
        previousHeight = $(this).scrollTop();

    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $("#header").addClass('bg-white')
        } else {
            $("#header").removeClass('bg-white')
        }
    })
});