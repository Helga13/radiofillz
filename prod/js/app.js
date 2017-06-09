$(document).ready(function () {
	
	// menu border
	
	var style = 'easeOutExpo';
		var default_left = Math.round($('.menu ul li.active').offset().left - $('.menu ul').offset().left);
		var default_top = $('.menu ul li.active').height()+14; /* 14 - indent from the menu item */
		var default_width = $('.menu ul li.active').outerWidth();
		$('#border').css({left: default_left, top: default_top, width: default_width});	
		$('.menu ul li').hover(function () {
			left = Math.round($(this).offset().left - $('.menu ul').offset().left);
			width = $(this).outerWidth();
			$('#border').stop(false, true).animate({left: left, width: width},{duration:500, easing: style});	
		}).click(function () {
			$('.menu ul li').removeClass('active');	
			$(this).addClass('active');
		});
		$('.menu ul').mouseleave(function () {
			default_left = Math.round($('.menu ul li.active').offset().left - $('.menu ul').offset().left);
			default_width = $('.menu ul li.active').outerWidth();
			$('#border').stop(false, true).animate({left: default_left, width: default_width},{duration:1500, easing: style});	
		});
	
})