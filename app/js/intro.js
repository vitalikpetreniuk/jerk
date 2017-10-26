$(function(){
	// Прокрутка на следующий экран
	$('.bottom-button').on('click',function(){
		 $('html, body').animate({
			scrollTop: $(this).closest('.screen').next().offset().top
		}, 400);
	});

	$('.menu-icon').on('click',function(){
		$('.general-menu').addClass('visible');
	});

	$('.general-menu .close-button').on('click',function(){
		$('.general-menu').removeClass('visible');
	});

	$('.general-menu .close-mobile-button').on('click',function(){
		$('.general-menu').removeClass('visible');
	});

	$('.board.slider .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
	});

	var boardPlayed = false;

	$(window).on('scroll',function(){
		if($('.second-screen').length && !boardPlayed) {
			if(($(this).scrollTop() + $(this).height()) >= ($('.second-screen').offset().top + $('.second-screen').height()/4)) {
				$('.board.slider .owl-carousel').trigger('play.owl.autoplay');
				boardPlayed = true;
			}
		}
	});

	$('.board.slider .owl-next,.board.slider .owl-prev').on('click',function(){
		$('.board.slider .owl-carousel').trigger('stop.owl.autoplay');
	});

	$('.board.slider .owl-carousel').on('drag.owl.carousel',function(){
		$('.board.slider .owl-carousel').trigger('stop.owl.autoplay');
	});

	$('.intro-logos .item > a').on('click',function(e){
		if($(window).width()<767) {
			e.preventDefault();
		}
	});

	setTimeout(function(){
		$('.item.blog').addClass('loaded');
	},3000);
});