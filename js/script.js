$(function () {
    $(".showmenu-pc").click(function () {
        $(".menu-pc").addClass(" show");

    });
    $(".showmenu-mobile").click(function () {
        $(".menu-pc").addClass("show")

    });
    $(".closemenu-pc").click(function () {
        $(".menu-pc").removeClass("show")
    });

    $(".close-showmenu-mobile").click(function () {
        setTimeout(() => {
            $(".menu-pc").removeClass(" show")
        }, 500)
    });
    $(".openbtn").click(function () {
        $(".openbtn").toggleClass('active');
    });

    let previousHeight = 0;
    let max = 0
    // $(document).on('scroll', function () {
        
        // if(previousHeight < $(this).scrollTop()){
        //     for (let i = 1; i <= 9; i++) {
        //         console.log(max, i, "bottom");
        //         if ($(this).scrollTop() + window.screen.height * 0.8 >= $(`.effect-item.${i}`).position().top && i > max) {
        //             console.log(i);
        //             for (let j = 1; j <= 9; j++) {
        //                 if (j < i) {
        //                     $(`.effect-item.${j} img`).removeClass('animate__bounceInUp')
        //                     $(`.effect-item.${j} img`).addClass('hide');
        //                 }
        //             }
        //             if (!$(`.effect-item.${i} img`).hasClass('animate__bounceInUp')) {
        //                 $(`.effect-item.${i} img`).addClass('animate__bounceInUp')
        //                 $(`.effect-item.${i} img`).removeClass('hide')
        //             }
        //             max = i;
        //             break;
        //         }
        //     }
        // } else {
            
        //     for (let i = 9; i >= 1; i--) {
        //        if ($(this).scrollTop()  <= $(`.effect-item.${i}`).position().top + window.screen.height * 0.8 && i < max) {
        //             for (let j = 1; j <= 9; j++) {
        //                 if (j > i) {
        //                     $(`.effect-item.${j} img`).removeClass('animate__bounceInUp')
        //                     $(`.effect-item.${j} img`).addClass('hide');
        //                 }
        //             }
        //             if (!$(`.effect-item.${i} img`).hasClass('animate__bounceInUp')) {
        //                 $(`.effect-item.${i} img`).addClass('animate__bounceInUp')
        //                 $(`.effect-item.${i} img`).removeClass('hide')
        //             }
        //             max = i;
        //             break;
        //         }
        //     }

        // }
        // previousHeight = $(this).scrollTop();

    // });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $("#header").addClass('bg-white')
        } else {
            $("#header").removeClass('bg-white')
        }
    })
});