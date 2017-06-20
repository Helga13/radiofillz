$(document).ready(function () {
	
	function audioInit(){
		$('audio').mediaelementplayer({
			alwaysShowControls: true,
			videoVolume: 'horizontal',
			enableAutosize: true,
			videoVolume: 'vertical'
		});
	}
	
	// menu border
	
//	var style = 'easeOutExpo';
//		var default_left = Math.round($('.menu ul li.active').offset().left - $('.menu ul').offset().left);
//		var default_top = $('.menu ul li.active').height()+14; /* 14 - indent from the menu item */
//		var default_width = $('.menu ul li.active').outerWidth();
//		$('#border').css({left: default_left, top: default_top, width: default_width});	
//		$('.menu ul li').hover(function () {
//			left = Math.round($(this).offset().left - $('.menu ul').offset().left);
//			width = $(this).outerWidth();
//			$('#border').stop(false, true).animate({left: left, width: width},{duration:500, easing: style});	
//		}).click(function () {
//			$('.menu ul li').removeClass('active');	
//			$(this).addClass('active');
//		});
//		$('.menu ul').mouseleave(function () {
//			default_left = Math.round($('.menu ul li.active').offset().left - $('.menu ul').offset().left);
//			default_width = $('.menu ul li.active').outerWidth();
//			$('#border').stop(false, true).animate({left: default_left, width: default_width},{duration:1500, easing: style});	
//		});
	
	// tabs
	$('.tabs').each(function () {
		$(this).find('.tab').each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();	$(this).addClass('active').siblings().removeClass('active').closest('.tabs').find('>.tabs_content').removeClass('active').eq(i).addClass('active');
				
				//video
				var myPlayer = $('.video');  
				var w = parseInt($('.video').css('width'));
				var h = parseInt($('.video').css('height')) ;

				$('video').mediaelementplayer({
					alwaysShowControls: true,
					videoVolume: 'horizontal',
					defaultVideoWidth: w ,
					defaultVideoHeight: h,
					// if set, overrides <video width>
					videoWidth: -1,
					// if set, overrides <video height>
					videoHeight: -1,
					enableAutosize: true,
					videoVolume: 'vertical'
				});
				//audio
				audioInit();
			});
		});
	});
	
	if('')
	
	$('.tab.single').on('click', function (){
		audioInit();
	});
	
	// datapicker
	
	$('.date').datepicker({
		dateFormat:'dd-mm-y',
		showOn:"both",
		buttonImage:"img/icons/icon_calendar.png",
		showOtherMonths:true, 
		selectOtherMonths:true
	});
	
	// video
	
//	 	var myPlayer = $('.video');  
//
//    var w = parseInt($('.video').css('width'));
//    var h = parseInt($('.video').css('height')) ;
//	
//	$('video').mediaelementplayer({
//    alwaysShowControls: true,
//    videoVolume: 'horizontal',
//		defaultVideoWidth: w ,
//    defaultVideoHeight: h,
//		// if set, overrides <video width>
//    videoWidth: -1,
//    // if set, overrides <video height>
//    videoHeight: -1,
//		enableAutosize: true,
//		videoVolume: 'vertical'
//  });
	
	//audio
	
	audioInit();
				

	
})