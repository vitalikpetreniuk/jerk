$(function(){
    // Слайдер фактов и его подстройка
    $('.cool-slider .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        mouseDrag: false,
        // autoplay: false,
        // autoplayTimeout: 5000
    });

    var played = false;

    $(window).on('scroll',function(){
        if($('.third-screen').length && !played) {
            if(($(this).scrollTop() + $(this).height()) >= ($('.third-screen').offset().top + $('.third-screen').height()/4)) {
                $('.cool-slider .owl-carousel').trigger('play.owl.autoplay');
                played = true;
            }
        }
        if($(this).scrollTop() === 0) {
            $('.main-menu').removeClass('visible');
        }
        else {
            $('.main-menu').addClass('visible');
        }

    });

    $('.cool-slider .owl-next,.cool-slider .owl-prev, .cool-slider .owl-dots').on('click',function(){
        $('.cool-slider .owl-carousel').trigger('stop.owl.autoplay');
    });

    $('.cool-slider .owl-carousel').on('drag.owl.carousel',function(){
        $('.cool-slider .owl-carousel').trigger('stop.owl.autoplay');
    });

    $('.cool-slider .owl-carousel').on('next.owl.carousel',function(){
        $('.mobile-number-slider .owl-next').trigger('click');
    });

    $('.cool-slider .owl-carousel').on('prev.owl.carousel',function(){
        $('.mobile-number-slider .owl-prev').trigger('click');
    });

    $('.cool-slider .owl-carousel').on('change.owl.carousel initialized.owl.carousel', function(event) {
        $('.cool-slider .owl-item .number').removeClass('visible');
        $('.cool-slider .owl-item .photo').removeClass('visible');

        $('.cool-slider .owl-item.active:not(.revert) .number').addClass('visible');
        $('.cool-slider .owl-item.active:not(.revert) .photo').addClass('visible');

        $('.cool-slider .owl-item.active.revert .photo').addClass('visible');
        $('.cool-slider .owl-item.active.revert .number').addClass('visible');
    });

    $('.cool-slider .owl-dot').each(function(){
        $(this).text($(this).index()+1);
    });
});