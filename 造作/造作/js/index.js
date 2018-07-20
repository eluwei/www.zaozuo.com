/*
* @Author: Administrator
* @Date:   2018-06-18 10:29:16
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-30 21:22:10
*/

	//轮播图上面的导航栏
		$('.nav>ul>li').mouseenter(function(event) {
			$(this).children().stop().fadeIn('fast');
			$(this).attr('class', 'now');
			$(this).siblings().attr('class', '');
		});
		$('.nav>ul>li').mouseleave(function(event) {
			// console.log(1);
			$(this).children().stop().fadeOut('fast');
			$(this).attr('class', '');
		});
		$('.show').mouseleave(function(event) {
			$('.nav>ul>li:first-child').attr('class', 'now');
		});

	//我的下拉菜单
		$('.topMyIcon').hover(function() {
			// $(this).children('img').attr('src','images/icon/1a.png');
			$('.topmyIcon_hover').show();
		}, function() {
			// $(this).children('img').attr('src','images/icon/1b.png');
			$('.topmyIcon_hover').hide();
		});	
		$('.bottomMyIcon').hover(function() {
			// $(this).children('img').attr('src','images/icon/myIcon.png');
			$('.bottomMyIcon_hover').show();
		}, function() {
			$(this).children('img').attr('src','images/icon/myIcon.png');
			$('.bottomMyIcon_hover').hide();
		});	

	//轮播图切换
		var index_timer;
		var num = 0;
		//第一个cover显示
		$('.fis_cover').css({
			'width':'1.25rem',
			'height':'0.3125rem'
		},700);
		//自动轮播函数
		function gogo(){
			clearInterval(index_timer);
			index_timer = setInterval(function(){	
				num++;
				if(num == 6){
					num = 0;
				}
				//图片的切换
				$('.banner ul').stop().fadeOut(0).fadeIn(800).css('left',-$('.banner ul li').eq(0).width()*num );
				
				//当前切换条变黑
				$('.under_banner .cover').eq(num).stop().fadeOut(0).fadeIn(800).css({
					'width':'1.25rem',
					'height':'0.3125rem'
				});

				//非当前切换条变灰
				$('.under_banner .cover').eq(num).parent('.fix').siblings().children('.cover').stop().fadeOut(0).fadeIn(800).css({
					'width':'0',
					'height':'0'
				});
			},2500);
		}
		gogo();
		//鼠标经过under_banner图片切换
		$('.under_banner').children('.fix').hover(function() {
			$('.under_banner .cover').each(function() {
				$(this).stop();
			});
			//清除定时器
			clearInterval(index_timer);
			num = $(this).index();
			//非当前切换条变灰
			$('.under_banner .cover').eq(num).parent('.fix').siblings().children('.cover').stop().fadeOut(0).fadeIn(800).css({
				'width':'0',
				'height':'0'
			});
			//切换条变黑
			$('.under_banner .cover').eq(num).stop().fadeOut(0).fadeIn(800).css({
				'width':'1.25rem',
				'height':'0.3125rem'
			});
			
			//对应的图片显示
			$('.banner ul').stop().fadeOut(0).fadeIn(2500).css('left',-$('.banner ul li').eq(0).width()*num );
		}, function() {
			gogo();
		});

		//顶部导航条的切换
		$(document).scroll(function(event) {
			if($(document).scrollTop()>$('._container').offset().top){
				$('.beforenav').css('display', 'none');
				$('.afternav').css({
					'display': 'block',
					'position': 'fixed',
					'top':'0px'
				});
			}
			else{
				$('.beforenav').css('display', 'block');
				$('.afternav').css({'display': 'none',});
			}
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

		//商品特效
		// 鼠标移入pic_t的img，pic_b内容隐藏，enter内容淡入 
		$('.pic_t').mouseenter(function(event) {
			$(this).children('.enter').stop().fadeIn(500);
			$(this).siblings('.pic_b').stop().hide();
			return false;
		});
		// 鼠标移出enter的enter_t，enter内容隐藏，pic_b内容淡入
		$('.enter_t').mouseleave(function(event) {
			$(this).parent().stop().fadeOut(500);
			$(this).parent().parent().siblings('.pic_b').stop().fadeIn(500);
		});