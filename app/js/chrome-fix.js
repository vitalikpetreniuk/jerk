$(function(){
	if($('.screen').length) {
        if(isChrome() && is_touch_device()) {
            $('.screen:not(.sized)').each(function(){
            	$(this).css('height','calc(100vh + 50px)');
			});
        }
    }
});