$(function () {
    // hamburger
    $('.hamburger').click(function () {
        $('.menu-mobile').addClass('active');
    });
    $('.close-button').click(function () {
        $('.menu-mobile').removeClass('active');
    });

    //tabs
    $('.event__list_item').click(function () {
        $('.event__list_item').removeClass('active');
        $(this).addClass('active');
        $('.event__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    $('.merchandise__item').click(function () {
        $('.merchandise__item').removeClass('active');
        $(this).addClass('active');
        $('.merchandises__overlay').removeClass('active').eq($(this).index()).addClass('active');
    });


    // input

    $('.merchandise__mark_minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.merchandise__mark_plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // slider-travel





    $('.travel__wrapper').slick({
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "0",
        speed: 300,
        // infinite: 'false'
    });

    // slider

    if ($('.main-slider').length) {
        $('.main-slider').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            appendDots: $('.main__slide'),
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        })
            .on('afterChange', function (event, slick, currentSlide) {
                $.each(slick.$dots, (i, el) => {
                    $(el).find('li').eq(currentSlide).addClass('slick-active').find('button');
                })
            });
    }
});