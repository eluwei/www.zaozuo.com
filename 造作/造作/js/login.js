/*
* @Author: Administrator
* @Date:   2018-06-18 17:39:54
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-26 20:34:57
*/
		//密码登录和验证码登录页面的切换
		$('.login_title').children('li').click(function(event) {
			if($(this).index()==0){
				$('.login1').css('display', 'block');
				$('.login2').css('display', 'none');
			}else{
				$('.login2').css('display', 'block');
				$('.login1').css('display', 'none');
			}
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

		//鼠标移动背景图的移动
		var xy = {
			x : 0,
			y : 0
		};
		$('.bg ').mousemove(function(e){
			var x = e.pageX;
			var y = e.pageY;
			var top = -(y-xy.y)/100;
			var left = -(x-xy.x)/100;
			$(".bg").css({
				"background-position-y": top + "px",
				"background-position-x": left +"px"
			});
		})
		//input focus
		$('input').focus(function(event) {
			$(this).parent('.inputarea').toggleClass('input_focus');
		});
		$('input').blur(function(event) {
			$(this).parent('.inputarea').toggleClass('input_focus');
		});

