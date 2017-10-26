$(function(){

	var offsetTop = $('.second-screen').offset().top;
	var offsetLeft = $('.second-screen').offset().left;
	var offset = $('.second-screen').offset();
	var width = $('.second-screen').width();
	var height = $('.second-screen').height();
	$('.flashlight').css('background-size',width + 'px ' + height + 'px');
	var link = $('.watch-video-btn')
	var linkLeft = link.offset().left;
	var linkTop = link.offset().top;
	var linkLeftEnd = linkLeft + link.width();
	var linkTopEnd = linkTop + link.height();

	if(is_touch_device()) {
		$('.first-screen .touch-photo').show();
		$('.first-screen .video-screen').hide();
	}

	$('.first-content-block').fadeIn(800);

	$('.second-screen').on('mousemove',function(e){
		if(!is_touch_device()) {
			var posX = e.pageX - offsetLeft - 250;
	    	var posY = e.pageY - offsetTop -250;
	    	if(((e.pageX<linkLeft)||(e.pageX>linkLeftEnd))&&((e.pageY<linkTop)||(e.pageY>linkTopEnd))) {
	    		$('.flashlight').css({left: posX, top: posY});
	    		$('.flashlight').css('background-position',+(-(posX)) + 'px ' + +(-(posY)) + 'px');
	    	}
		}
	});

	$('.second-screen').on('touchmove',function(e){
		
		var posX = e.originalEvent.touches[0].pageX - offset.left - 250;
    	var posY = e.originalEvent.touches[0].pageY - offset.top -250;
    	if(((e.originalEvent.touches[0].pageX<linkLeft)||(e.originalEvent.touches[0].pageX>linkLeftEnd))&&((e.originalEvent.touches[0].pageY<linkTop)||(e.originalEvent.touches[0].pageY>linkTopEnd))) {
    		$('.flashlight').css({left: posX, top: posY});
    		$('.flashlight').css('background-position',+(-(posX)) + 'px ' + +(-(posY)) + 'px');
    	}
	});

	var videoNumber = 1;

	$('.video-screen video').on('ended',function(){
     	$('.video-screen').fadeOut();
     	setTimeout(function(){
     		$('.video-screen').fadeIn();
     		$('.video-screen video').get(0).play();
     	},1000);
    });

	if(is_touch_device()) {
		 $('.video-screen').addClass('ready');
	}

	if($(window).width() < 768) {
		$('.video-popup video').attr('src','video/m-rolik1.mp4');
	}
	else {
		$('.video-popup video').attr('src','video/rolik1.mp4');
		$('.video-screen video').attr('src','video/rozminka.mp4');
	}

	$('.video-popup video').get(0).pause();

	$('.play-btn').on('click',function(){
		if(!is_touch_device() || !device.ios()) {
			$('.video-popup').addClass('active');
		}
		if(device.ios()) {
			$('.video-popup video')[0].webkitEnterFullscreen();
		}
		$('.video-popup video').get(0).load();
		$('.video-popup video').get(0).play();
	});

	$('.watch-video-btn').on('click',function(){
		if(!is_touch_device() || !device.ios()) {
			$('.video-popup-teaser').addClass('active');
		}
		if(device.ios()) {
			$('.video-popup-teaser video')[0].webkitEnterFullscreen();
		}
		$('.video-popup-teaser video').get(0).load();
		$('.video-popup-teaser video').get(0).play();
	});

	$('.video-popup video').on('ended webkitendfullscreen',function(){
		if(device.ios()) {
			$(this)[0].webkitExitFullscreen();
		}
      $('.video-popup').removeClass('active');
      if($(window).width()< 768) {
			$('.video-popup video').attr('src','video/m-rolik'+(++videoNumber)+'.mp4');
		}
		else {
			$('.video-popup video').attr('src','video/rolik'+(++videoNumber)+'.mp4');
		}
		if(videoNumber == 5) {
  			videoNumber = 1;
     	 }
      $('.video-popup video').get(0).pause();
    });

    $('.video-popup .close-button').on('click',function(){
		$('.video-popup').removeClass('active');
		if($(window).width()< 768) {
			$('.video-popup video').attr('src','video/m-rolik'+(++videoNumber)+'.mp4');
		}
		else {
			$('.video-popup video').attr('src','video/rolik'+(++videoNumber)+'.mp4');
		}
		if(videoNumber == 5) {
  			videoNumber = 1;
     	 }
		$('.video-popup video').get(0).pause();
	});

    $('.video-popup video').on('click',function(){
		$('.video-popup').removeClass('active');
		if($(window).width()< 768) {
			$('.video-popup video').attr('src','video/m-rolik'+(++videoNumber)+'.mp4');
		}
		else {
			$('.video-popup video').attr('src','video/rolik'+(++videoNumber)+'.mp4');
		}
		if(videoNumber == 5) {
  			videoNumber = 1;
     	 }
		$('.video-popup video').get(0).pause();
	});

	$('.video-popup-teaser .close-button').on('click',function(){
		$('.video-popup-teaser').removeClass('active');
		$('.video-popup-teaser video').get(0).pause();
	});

    $('.video-popup-teaser video').on('click',function(){
		$('.video-popup-teaser').removeClass('active');
		$('.video-popup-teaser video').get(0).pause();
	});

	$('.video-popup-teaser video').on('ended webkitendfullscreen',function(){
		if(device.ios()) {
			$(this)[0].webkitExitFullscreen();
		}
      $('.video-popup-teaser').removeClass('active');
      $('.video-popup-teaser video').get(0).pause();
    });

});