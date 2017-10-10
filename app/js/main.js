/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);

/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-setclasses !*/
!function(n,e,s){function o(n){var e=r.className,s=Modernizr._config.classPrefix||"";if(c&&(e=e.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");e=e.replace(o,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(e+=" "+s+n.join(" "+s),c?r.className.baseVal=e:r.className=e)}function a(n,e){return typeof n===e}function i(){var n,e,s,o,i,l,r;for(var c in f)if(f.hasOwnProperty(c)){if(n=[],e=f[c],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(s=0;s<e.options.aliases.length;s++)n.push(e.options.aliases[s].toLowerCase());for(o=a(e.fn,"function")?e.fn():e.fn,i=0;i<n.length;i++)l=n[i],r=l.split("."),1===r.length?Modernizr[r[0]]=o:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=o),t.push((o?"":"no-")+r.join("-"))}}var t=[],f=[],l={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var s=this;setTimeout(function(){e(s[n])},0)},addTest:function(n,e,s){f.push({name:n,fn:e,options:s})},addAsyncTest:function(n){f.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var r=e.documentElement,c="svg"===r.nodeName.toLowerCase();i(),o(t),delete l.addTest,delete l.addAsyncTest;for(var u=0;u<Modernizr._q.length;u++)Modernizr._q[u]();n.Modernizr=Modernizr}(window,document);

function is_touch_device() {
  return 'ontouchstart' in window        // works on most browsers 
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};

(function($) {
	$.fn.invisible = function() {
		return this.each(function() {
			$(this).css("visibility", "hidden");
		});
	};
	$.fn.visible = function() {
		return this.each(function() {
			$(this).css("visibility", "visible");
		});
	};
	$.fn.visible = function() {
		return this.css('visibility', 'visible');
	};

	$.fn.invisible = function() {
		return this.css('visibility', 'hidden');
	};

	$.fn.visibilityToggle = function() {
		return this.css('visibility', function(i, visibility) {
			return (visibility == 'visible') ? 'hidden' : 'visible';
		});
	};
}(jQuery));

function is_mobile_chrome() {
	return navigator.userAgent.match('CriOS');
}

function stopBodyScrolling (bool) {
    if (bool === true) {
        document.body.addEventListener("touchmove", freezeVp, false);
    } else {
        document.body.removeEventListener("touchmove", freezeVp, false);
    }
}

var freezeVp = function(e) {
    e.preventDefault();
};



$(function(){


	if (Modernizr.fullscreen) {
	 	 var player = document.getElementsByTagName("video")[0];
		player.addEventListener('webkitbeginfullscreen', onVideoBeginsFullScreen, false);
		player.addEventListener('webkitendfullscreen', onVideoEndsFullScreen, false);
	}

	var cardItemsHeight;

	$('.main-slider .item.first .text-wrapper').hide();
	setTimeout(function(){
		$('.main-slider .item.first .text-wrapper').show();
	},2500);

	// Появление текста при скролле

	AOS.init({
		offset: 0
	});

	new WOW().init();


	// Фикс для iOS
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

	setTimeout(function(){
		$('.side-menu .item.blog').addClass('loaded');
	},5000);


	// Прокрутка к якорям ссылок главного меню
	$('.main-menu li a, .get-lesson a').on('click',function(){
		 $('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 400);
	});


	// Инициализация главного слайдера
	var owl = $('.main-slider .owl-carousel');
	if(!is_touch_device) {
		owl.owlCarousel({
			items: 1,
			mouseDrag: false,
			touchDrag: false,
			autoplay: true,
			autoplayTimeout: 8000,
			video: true,
			loop: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
		});
	}
	else {
		owl.owlCarousel({
			items: 1,
			mouseDrag: false,
			touchDrag: false,
			autoplay: true,
			autoplayTimeout: 5000,
			video: true,
			loop: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
		});
	}

	// $('body').on('loadeddata','.main-slider .item video',function(){
	// 	$(this).closest('.item').find('.text-wrapper').fadeIn();
	// });

	owl.on('translate.owl.carousel',function(e){
		if(!is_touch_device()) {
			$('.owl-item video').each(function(){
				var video = $(this);
				var isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
				if(isPlaying) {
					$(this).get(0).pause();
				}
			});
			if($('.owl-item.active').next().find('video').length) {
				$('.owl-item.active').next().find('video').get(0).play();
			}
		}
	});
	owl.on('translated.owl.carousel',function(e){
		if(!is_touch_device()) {
			if($('.owl-item.active video').length) {
				$('.owl-item.active video').get(0).play();
			}
		}
	});

	if(!is_touch_device()) {
		$('.main-slider .owl-item .item .photo').hide();
		$('.main-slider .owl-item .item').each(function(){
			var attr = $(this).attr('data-videosrc');
			if (typeof attr !== typeof undefined && attr !== false) {
				var videosrc = $(this).attr('data-videosrc');
				$(this).prepend('<video muted><source src="'+videosrc+'" type="video/mp4" height="100%" width="100%"></video>');
			}
		});

		$('.main-slider .owl-item.active video').attr('autoplay',true).attr('loop',true);
	}


	$('.mobile-number-slider .owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		// autoplay: true,
	});


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


	// Слайдер результатов
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

	$('.abonements.slider .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		// responsive: {
		// 	1440: {
		// 		stagePadding: 200,
		// 	},
		// }
		autoplay: true,
	});

	$('.board.slider .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
	});

	var boardPlayed = false;

	$(window).on('scroll',function(){
		if($('.seventh-screen').length && !boardPlayed) {
			if(($(this).scrollTop() + $(this).height()) >= ($('.seventh-screen').offset().top + $('.seventh-screen').height()/4)) {
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

	// Инициализация слайдера логотипов на мобильном
	$('.top-tab-menu .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		// autoplay: true,
	});

	$('.top-tab-menu .menu-icon').on('click',function(){
		$(this).toggleClass('active');
		$('.top-tab-menu').fadeOut(800);
		$('.general-menu').css('display','flex').animate({
		    opacity: 1,
	  	}, 500);
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

	$('.post-inner-slider .owl-carousel').owlCarousel({
		items: 1,
		dots: true,
		nav: false
	});

	$('.post-inner-slider .next').on('click',function(){
		$('.post-inner-slider .owl-next').trigger('click');
	});

	$('.post-inner-slider .prev').on('click',function(){
		$('.post-inner-slider .owl-prev').trigger('click');
	});

	$('.posts-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		margin: 30,
		stagePadding: 70,
		responsive: {
			1024: {
				margin: 50,
				items: 3,
				nav: true,
                stagePadding: 0
			},
			768: {
				items: 3,
				nav: true,
				stagePadding: 0
			}
		}
	});

	if($('.blog-list').length) {
		$('.blog-list .blog-list-item').each(function(){
			$(this).css('margin-bottom',(($(this).find('.blog-list-desc').innerHeight())/2)+15);
		});
	}

	// Прокрутка на следующий экран
	$('.bottom-button').on('click',function(){
		 $('html, body').animate({
			scrollTop: $(this).closest('.screen').next().offset().top
		}, 400);
	});

	// Маска для телефона
	$('.phone input').mask('(000) 000-00-00',{placeholder: "(012) 345-67-89"});


	// Закрытие попапов
	$('.popup .close-button').on('click',function(){
		$(this).closest('.popup').removeClass('visible');
		$('.popup-thanks').removeClass('visible');
		if($(window).width() < 1025) {
			$('.top-tab-menu').show();
		}
	});

	// Открытие попап формы "Задать вопрос"
	$('.ask').on('click',function(){
		$('.popup-window-form-2').removeClass('visible');
		$('.popup-window-form').addClass('visible');
		$('body').addClass('has-open-popup');
		if($(window).width() < 1025) {
			$('.top-tab-menu').hide();
		}
	});


	// Открытие попап формы "Записаться на занятие"
	$('.get-lesson').on('click',function(){
		$('.popup-window-form').removeClass('visible');
		$('.popup-window-form-2').addClass('visible');
		if($(window).width() < 1025) {
			$('.top-tab-menu').hide();
		}
	});

	// Отправка форм AJAX
	$('#popup_form').on('submit',function(e){

			setTimeout(function() {
				$('.popup-window-form').removeClass('visible');
				$('.popup-thanks').removeClass('visible');
				if($(window).width() < 1025) {
					$('.top-tab-menu').show();
				}
			}, 3000);
			$('.popup-thanks').addClass('visible');
				
		 $.ajax({
		   type: "POST",
		   data: $("#popup_form").serialize(),
		   success: function(data)
		   {
		   }
		 });

		e.preventDefault();
	});

	$('#popup_form-2').on('submit',function(e){

			setTimeout(function() {
				$('.popup-window-form-2').removeClass('visible');
				$('.popup-thanks').removeClass('visible');
				if($(window).width() < 1025) {
					$('.top-tab-menu').show();
				}
			}, 3000);
			$('.popup-thanks').addClass('visible');
				
		 $.ajax({
		   type: "POST",
		   data: $("#popup_form-2").serialize(),
		   success: function(data)
		   {
		   }
		 });

		e.preventDefault();
	});

	
	$('.qa-items .answer').each(function(){
		if(!$(this).find('.switch-answer').length) {
			$(this).find('.answer-text').addClass('sm');
		}
	});

	// if($('.card-top.card-image').length) {
	// 	var imgOffset = $('.card-top.card-image img').position().left;
	// 	// $('.card-bottom').css('left',imgOffset);
	// }


	$(window).on('load',function(){
		AOS.refresh();
		$('.slider-wrapper').css('opacity',1);
	});

	$(window).on('load scroll',function(){

		var bottomScroll = $(this).scrollTop() + $(this).height();

		// if($('.seventh-screen').length) {

		// 	if(bottomScroll > $('.seventh-screen').offset().top) {
		// 		$('.ask,.get-lesson').addClass('ended').css('bottom',$('.seventh-screen').outerHeight() + $('footer').outerHeight());
		// 	}
		// 	else {
		// 		$('.ask,.get-lesson').removeClass('ended').css('bottom',-1);
		// 	}
		// }
		// else {

		// 	if(bottomScroll > $('footer').offset().top) {
		// 		$('.ask,.get-lesson').addClass('ended').css('bottom',$('footer').outerHeight());
		// 	}
		// 	else {
		// 		$('.ask,.get-lesson').removeClass('ended').css('bottom',-1);
		// 	}
		// }

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

	if($('.before_after').length) {
		$('.before_after .after_photo img').css('width',$('.before_photo img').width());
	}

	$('.before_after').on('mousemove touchmove', function(e){
		var moveX = e.pageX - $(this).offset().left;
		var moveXAfter = $(this).offset().left + $(this).width() - e.pageX;

		$('.center_block_line').css('left', moveX);
		$('.after_photo').css('width', moveXAfter);
	});

	$('.before_after').on('mouseout touchend', function(e){
		var moveX = e.pageX - $(this).offset().left;
		var moveXAfter = $(this).offset().left + $(this).width() - e.pageX;
	});

	$('.review-block-inner').niceScroll({
		cursorwidth: "20px",
		background: "#605c5c",
		cursorborderradius: "50%",
		cursorfixedheight: 20,
		autohidemode: false
	});

	$('.select-block .items').niceScroll({
		cursorwidth: "20px",
		background: "#afafaf",
		cursorborderradius: "50%",
		cursorfixedheight: 20,
		zindex: 2
	});

	$('.content-block .city-select .select-item').on('click',function(){
		$(this).closest('.city-select').find('.select-item').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.city-select').find('.selected-item').text($(this).text());
		$(this).closest('.city-select').find('.items-wrapper').invisible();
		$('.place-select').removeClass('not-active');
	});

	$('.content-block .place-select .select-item').on('click',function(){
		$(this).closest('.place-select').find('.select-item').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.place-select').find('.selected-item').text($(this).find('.select-text').text());
		$(this).closest('.place-select').find('.items-wrapper').invisible();
		$('.place-logo,.place-address,.schedule-table').removeClass('not-active');
		if($('.map-wrapper').length) {
			$('.map-wrapper').removeClass('hidden');
		}
	});

	$('.popup .city-select .select-item').on('click',function(){
		$(this).closest('.city-select').find('.select-item').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.city-select').find('.selected-item').text($(this).text());
		$(this).closest('.city-select').find('.items-wrapper').invisible();
		$('.place-select').removeClass('not-active');
	});

	$('.popup .place-select .select-item').on('click',function(){
		$(this).closest('.place-select').find('.select-item').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.place-select').find('.selected-item').text($(this).find('.select-text').text());
		$(this).closest('.place-select').find('.items-wrapper').invisible();
	});

	$('.results-wrapper').mixItUp();

	$('.blog-list').isotope({
		masonry: {}
	});

	$('.blog-filters .filter-btn').click(function(e) {
		e.preventDefault();
		$('.blog-filters .filter-btn').removeClass('active');
		$(this).addClass('active')
		var to_filter = $(this).attr('data-filter');
		if(to_filter == '*') {
			$('.blog-list').isotope({filter: '.blog-list-item'});
		} else {
			$('.blog-list').isotope({filter: to_filter + ',.promo'});
		}
		
	});

	$('.city-select .selected-item').on('click',function(){
		$(this).siblings('.items-wrapper').visibilityToggle();
		$('.place-select .selected-item').siblings('.items-wrapper').invisible();
	});

	$('.place-select .selected-item').on('click',function(){
		$(this).siblings('.items-wrapper').visibilityToggle();
		$('.city-select .selected-item').siblings('.items-wrapper').invisible();
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


	$('.side-menu .menu-icon').on('click',function(){
		$('.general-menu').addClass('visible');
	});


	if($('#map').length) {
		google.maps.event.addDomListener(window, 'load', init);
	}

	$('.mobile-tabs .day-select .item').on('click',function(){
		$('.mobile-tabs .day-select .item').removeClass('active');
		$(this).addClass('active');
		$('.mobile-tabs .day-schedule.active').removeClass('active');
		$('.mobile-tabs .day-schedule.'+$(this).attr('data-day')).addClass('active');
	});
});

$(window).on('resize',function(){
	if($('.before_after').length) {
		$('.after_photo').css('width','50%');
		$('.before_after .center_block_line').css('left','50%');
		$('.before_after .after_photo img').css('width',$('.before_photo img').width());
	}

	if($(window).width()<768) {
		if($('.blog-list').length) {
			$('.blog-list .blog-list-item').each(function(){
				$(this).css('margin-bottom',(($(this).find('.blog-list-desc').innerHeight())/2)+15);
			});
		}
	}
});

var map;
        
function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,

        disableDefaultUI: true,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(50.492437, 30.496501), 

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(50.493979, 30.489131),
        map: map,
        icon: '/img/ryvok-marker.png'
    });
}