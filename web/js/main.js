$(function() {
    $('.slder__box').slick({
        infinite: true,
        dots:true,
    });
    $('.slider-box').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
});

$(function() {

    $('.logo-menu').on('click', function () {

        $('.hd-hide-menu').slideToggle(300, function () {

            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });
});

$(window).resize(function() {
    if(document.documentElement.clientWidth > 1056) {
        document.getElementById("menu-hide-1").style.display="block"
        // тут ваш скрипт
    }
});
$(window).resize(function() {
    if(document.documentElement.clientWidth < 1056) {
        document.getElementById("menu-hide-1").style.display="none"
        // тут ваш скрипт
    }
});
function show() {
    document.getElementById("menu-hide-1").style.display = "none"
}
function show_call(){
    document.getElementById("modal-window").style.display="block"
}
function hide_call(){
    document.getElementById("modal-window").style.display="none"
}
$(function() {
    $('.color-black').on('click', function () {
        $('.ipsilver').css('display', 'none');
        $('.ipblack').css('display', 'inline-block');
    });
    $('.color-silver').on('click', function () {
        $('.ipblack').css('display', 'none');
        $('.ipsilver').css('display', 'inline-block');

    });
});


