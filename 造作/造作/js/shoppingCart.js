//首先为每个li绑点hover事件
//然后获取当前的li的距离窗口的偏移位置。offset
//然后给underline增加一个水平坐标变化的animate，
//鼠标离开之后，把underline消失，给当前li增加per_current类
var c_num = 0;
c_num = $('.person_nav').children('ul').children('.per_current').index();
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

// 鼠标移入图片pic，pic_box显示
$('.pic').hover(function() {
	$('.pic_box').show();
}, function() {
	// 鼠标移出图片pic，pic_box隐藏
	$('.pic_box').hide();
});

//点击修改info_alter，弹出一个修改框，可对内容进行修改
$('.info_alter').click(function(event) {
	$('.alter_click').show();
	// 点击del_alter，alter_click隐藏
	$('.del_alter').click(function(event) {
		$('.alter_click').hide(1);
	});
	// 点击sure，alter_click隐藏
	$('.sure').click(function(event) {
		$('.alter_click').hide(1);
	});
});
	
// 点击删除del，con内容和fix内容隐藏，空购物车内容cart显示出来
$('.del').click(function(event) {
	$('.con').hide();
	$('.fix').hide();
	$('.cart').show();
});

// 滚动>200，固定条删除固定类fixed
$(function(){
	$(window).scroll(function(event) {
		if($(window).scrollTop()>200){
			$('.fix').removeClass('fixed')
		}else{
			$('.fix').addClass('fixed')
		}
	});
})
