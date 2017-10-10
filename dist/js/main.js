$(function(){

	AOS.init({
		offset: 0
	});

	new WOW().init();

	 var options = [
        {
            selector: '.first-screen', // Mandatory, CSS selector
            vh: 100,  // Mandatory, height in vh units
        },
        {
            selector: '.second-screen', // Mandatory, CSS selector
            vh: 100,  // Mandatory, height in vh units
        },
        {
            selector: '.third-screen', // Mandatory, CSS selector
            vh: 100,  // Mandatory, height in vh units
        },
        {
            selector: '.fourth-screen', // Mandatory, CSS selector
            vh: 100,  // Mandatory, height in vh units
        },
        {
            selector: '.fifth-screen', // Mandatory, CSS selector
            vh: 100,  // Mandatory, height in vh units
        },
        {
            selector: '.sixth-screen', // Mandatory, CSS selector
            vh: 100,  // Mandatory, height in vh units
        }
    ];

    var vhFix = new VHChromeFix(options);

	$('.main-menu li a, .get-lesson a').on('click',function(){
		 $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 400);
	});

	$('.main-slider .owl-carousel').owlCarousel({
		items: 1,
		mouseDrag: false,
		touchDrag: false,
		autoplay: true,
		loop: true,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
	});

	$('.mobile-number-slider .owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		// autoplay: true,
	});

	$('.cool-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 7000
	});

	$('.cool-slider .owl-next,.cool-slider .owl-prev, .cool-slider .owl-dots').on('click',function(){
		$('.cool-slider .owl-carousel').trigger('stop.owl.autoplay');
	});

	$('.cool-slider .owl-carousel').on('next.owl.carousel',function(){
		$('.mobile-number-slider .owl-next').trigger('click');
	});

	$('.cool-slider .owl-carousel').on('prev.owl.carousel',function(){
		$('.mobile-number-slider .owl-prev').trigger('click');
	});

	$('.result-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		responsive: {
			1440: {
				stagePadding: 200,
			},
		}
		// autoplay: true,
	});

	$('.top-tab-menu .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		
		// autoplay: true,
	});

	$('.top-tab-menu .menu-icon').on('click',function(){
		$(this).toggleClass('active');
		$('.top-tab-menu .slide-content').toggleClass('active');
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

	$('.bottom-button').on('click',function(){
		 $('html, body').animate({
	        scrollTop: $(this).closest('.screen').next().offset().top
	    }, 400);
	});

	$('.phone input').mask('(000) 000-67-89',{placeholder: "(012) 345-67-89"});

	$('.popup .close-button').on('click',function(){
		$(this).closest('.popup').removeClass('visible');
	});

	$('.ask').on('click',function(){
		$('.popup-window-form').addClass('visible');
	});

	$('.get-lesson').on('click',function(){
		$('.popup-window-form-2').addClass('visible');
	});

	$('#popup_form').on('submit',function(e){

			$('.popup-window-form').removeClass('visible');
				$('.popup-thanks').addClass('visible');
				
		 $.ajax({
           type: "POST",
           data: $("#popup_form").serialize(), // serializes the form's elements.
           success: function(data)
           {
           }
         });

    	e.preventDefault(); // avoid to execute the actual submit of the form.
	});

	$('#popup_form-2').on('submit',function(e){

			$('.popup-window-form-2').removeClass('visible');
				$('.popup-thanks').addClass('visible');
				
		 $.ajax({
           type: "POST",
           data: $("#popup_form-2").serialize(), // serializes the form's elements.
           success: function(data)
           {
           }
         });

    	e.preventDefault(); // avoid to execute the actual submit of the form.
	});

	$('.qa-items .answer').each(function(){
		if(!$(this).find('.switch-answer').length) {
			$(this).find('.answer-text').addClass('sm');
		}
	});


	$(window).on('load',function(){
		AOS.refresh();

		$('.slider-wrapper').css('opacity',1);
	});

	$(window).on('scroll',function() {
		if($(this).scrollTop() === 0) {
			$('.main-menu').removeClass('visible');
		}
		else {
			$('.main-menu').addClass('visible');
		}
	});

	$(window).on('load scroll',function(){

		var bottomScroll = $(this).scrollTop() + $(this).height();

		if($('.seventh-screen').length) {

            if(bottomScroll > $('.seventh-screen').offset().top) {
                $('.ask,.get-lesson').addClass('ended').css('bottom',$('.seventh-screen').outerHeight() + $('footer').outerHeight());
            }
            else {
                $('.ask,.get-lesson').removeClass('ended').css('bottom',-1);
            }
		}
		else {

            if(bottomScroll > $('footer').offset().top) {
                $('.ask,.get-lesson').addClass('ended').css('bottom',$('footer').outerHeight());
            }
            else {
                $('.ask,.get-lesson').removeClass('ended').css('bottom',-1);
            }
		}

		var temp;

		if($('.screen').length) {
			$('.screen').each(function(){

				if($(window).scrollTop() >= $(this).offset().top) {
					if($('.main-menu li a').length) {
						$('.main-menu li a').removeClass('active');
						for(var i = 0; i < $('.main-menu li').length; i++) {
							temp = $('.main-menu li').eq(i).find('a').attr('href');
							temp = temp.replace('#','');
							if($(this).attr('id') == temp) {
								$('.main-menu li').eq(i).find('a').addClass('active');
							}
						}
					}
				}
			});
		}
	});


	// =====================

	$('.switch-answer').on('click',function(){
		var isOpened = $(this).closest('.answer').hasClass('opened');

		$('.answer').removeClass('opened');

		if(isOpened) {
			$(this).closest('.answer').removeClass('opened');
		}
		else {
			$(this).closest('.answer').addClass('opened');
		}

		var text = $(this).text();
		$('.switch-answer').text('Развернуть ответ');
		$(this).text(text == "Развернуть ответ" ? 'Свернуть' : 'Развернуть ответ');
	});

	$('.before_after').on('mousemove', function(e){
		var moveX = e.pageX - $(this).offset().left;
		var moveXAfter = $(this).offset().left + $(this).width() - e.pageX;

		$('.center_block_line').css('left', moveX);
		$('.after_photo').css('width', moveXAfter);
	});

	$('.before_after').on('mouseout', function(e){
		var moveX = e.pageX - $(this).offset().left;
		var moveXAfter = $(this).offset().left + $(this).width() - e.pageX;
		if(moveX > ($(this).width()/2)) {
			$('.center_block_line').css('left', $(this).width() - 0);
			$('.after_photo').css('width', 0);
		}
		else {
			$('.center_block_line').css('left', - 5);
			$('.after_photo').css('width', $(this).width());
		}
	});

	$('.review-block-inner').niceScroll({
		cursorwidth: "20px",
		background: "#605c5c",
		cursorborderradius: "50%",
		cursorfixedheight: 20
	});

	$('.results-wrapper').mixItUp();

});