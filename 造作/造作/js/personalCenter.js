/*
* @Author: Administrator
* @Date:   2018-06-18 18:59:42
* @Last Modified by:   admin
* @Last Modified time: 2018-06-27 15:12:02
*/

		//首先为每个li绑点hover事件
		//然后获取当前的li的距离窗口的偏移位置。offset
		//然后给underline增加一个水平坐标变化的animate，
		//鼠标离开之后，把underline消失，给当前li增加per_current类
		var c_num = 0;
		c_num = $('.person_nav').children('ul').children('.per_current').index();
		var under_left = $('.person_nav').children('ul').children('.per_current').offset().left;
		$('.underline').css('left',under_left);
		$('.person_nav').children('ul').children('li').mouseenter(function() {
			$('.underline').css('display','block');
			$('.per_current').removeClass('per_current');
			var x = $(this).offset().left;
			var w = $(this).width();
			$('.underline').stop().animate({
				'left':x,
				'width':w
			},300);
		});
		$('.person_nav').mouseleave(function(event) {
			$('.underline').css('display','none');
			$('.currflag').addClass('per_current');
		});
		
		//导航栏
		$('.leftnav>li').mouseenter(function(event) {
			$(this).siblings('li').removeClass('login_now');
			$(this).addClass('login_now');
			$(this).siblings('li').removeClass('.login_now');
			$(this).children().stop().fadeIn('fast');
			
		});
		$('.leftnav>li').mouseleave(function(event) {
			$(this).removeClass('login_now');
			$(this).children().stop().fadeOut('fast');
		});
		$('.leftnav').mouseleave(function(event) {
			$('.leave_now').addClass('login_now')
		});

		//导航栏图片的切换
		$('.slideul li').hover(function() {
			$(this).children('span').css('color', 'white');
		}, function() {
			$(this).children('span').css('color', '#d2d2d2');
		});

		//afternav导航条的下拉
		$('.afternav .leftnav>li').mouseenter(function(event) {
			$(this).siblings('li').removeClass('login_now');
			$(this).addClass('login_now');
			$(this).siblings('li').removeClass('.login_now');
			$(this).children().stop().fadeIn('fast');
			
		});
		$('.afternav .leftnav>li').mouseleave(function(event) {
			$(this).removeClass('login_now');
			$(this).children().stop().fadeOut('fast');
		});
		$('.afternav .leftnav').mouseleave(function(event) {
			$('.leave_now').addClass('login_now');
		});

		//导航栏图片的切换
		$('.slideul li').hover(function() {
			$(this).children('span').css('color', 'white');
		}, function() {
			$(this).children('span').css('color', '#d2d2d2');
		});