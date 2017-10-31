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

function isChrome() {
  var isChromium = window.chrome,
    winNav = window.navigator,
    vendorName = winNav.vendor,
    isOpera = winNav.userAgent.indexOf("OPR") > -1,
    isIEedge = winNav.userAgent.indexOf("Edge") > -1,
    isIOSChrome = winNav.userAgent.match("CriOS");

  if (isIOSChrome) {
    return true;
  } else if (
    isChromium !== null &&
    typeof isChromium !== "undefined" &&
    vendorName === "Google Inc." &&
    isOpera === false &&
    isIEedge === false
  ) {
    return true;
  } else { 
    return false;
  }
}

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
		if(!$('.video-popup-teaser video').attr('src')) {
			if(is_touch_device()) {
				$('.video-popup-teaser video').attr('src','video/m-teaser.mp4');
			}
			else {
				$('.video-popup-teaser video').attr('src','video/teaser.mp4');
			}
		}
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