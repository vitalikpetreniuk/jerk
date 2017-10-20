$(function(){

	var cardItemsHeight;

	$('.card-block .card-items-inner .card-item').each(function(){
		var itemOffset = $(this).outerHeight() + ($(this).offset().top - $('.card-items-inner').offset().top);
		$(this).css('transform','translateY(-'+ itemOffset +'px)');
	});


	var isBlockAnimated = false;
	if($('.discount-block').length) {
		var discountLeft = $('.discount-block').offset().left;

	$('.discount-block').stick_in_parent()
		.on("sticky_kit:bottom", function(e) {
		    $(this).addClass('bottomed');
		    $(this).css('left','');
	  	})
	  	.on("sticky_kit:unbottom", function(e) {
		    $(this).removeClass('bottomed');
		    $(this).css('left',discountLeft);
	  	})
	  	.on("sticky_kit:stick", function(e) {
	  		$(this).css('left',discountLeft);
	  	})
	  	.on("sticky_kit:unstick", function(e) {
	  		$(this).css('left','');
	  	});
	}


	$(window).on('scroll',function() {
		if($('.card-block').length && !isBlockAnimated) {
			if(($(this).scrollTop() + $(this).height()) > $('.card-block').offset().top) {
				$('.card-block').addClass('ready');
				$('.card-items-inner .card-item').each(function(){
					$(this).addClass('drop');
				});
				isBlockAnimated = true;
			}
			setTimeout(function(){
				$('.card-block .card-item .card-image').each(function(){
					$(this).css('animation','flyAbonements 1' + Math.random().toString().substring(1) + 's infinite alternate');
				});
			},4000)
		}

		if($('.page-title').length) {
			$('.page-title').css('transform', 'translateY(-'+ $(this).scrollTop()/1.2 +'px)');
			// $('.inner-page-title').css('transform', 'translateY('+ $(this).scrollTop()/1.5 +'px)');
		}
		$('.other-rates .text').css({
			'opacity' : 1-($(this).scrollTop()/150),
		});
	});

	if($('.discount-block').length) {
		var block = $('.discount-block');
		var blockLeft = block.offset().left;
		var blockTop = block.offset().top;
		var blockTopPos = block.css('top');
		var blockLeftPos = block.css('left');
		var cardBlockMargin = $('.card-block').css('margin-bottom');
	}

	if($('.rates-list').length) {
		var ratesTop = $('.rates-list').offset().top;
	}

	$(window).on('load scroll',function(){
		if(ratesTop <= $(this).scrollTop()) {
			$('.rates-list').addClass('fixed');
		}
		else {
			$('.rates-list').removeClass('fixed');
		}
	});

	$(window).on('load resize',function(){
		$('.card-bottom img').css('height',$('.card-item .card-top img').height());
		$('.card-bottom img').css('width',$('.card-item .card-top img').width());
	});

});