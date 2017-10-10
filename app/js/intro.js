$(function(){
	// Прокрутка на следующий экран
	$('.bottom-button').on('click',function(){
		 $('html, body').animate({
			scrollTop: $(this).closest('.screen').next().offset().top
		}, 400);
	});

	$('.menu-icon').on('click',function(){
		if($(window).width() > 1024) {
			$('.general-menu').addClass('visible');
		}
		else {
			$('.general-menu').css('display','flex').animate({
			    opacity: 1,
		  	}, 500);
		}
	});

	$('.general-menu .close-button').on('click',function(){
		$('.general-menu').removeClass('visible');
	});

	$('.general-menu .close-mobile-button').on('click',function(){
		$('.top-tab-menu').fadeIn(800);
		$('.general-menu').animate({
		    opacity: 0,
	  	}, 500, function() {
	  		$(this).css('display','none');
  		});
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