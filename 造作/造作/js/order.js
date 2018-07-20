//首先为每个li绑点hover事件
//然后获取当前的li的距离窗口的偏移位置。offset
//然后给underline增加一个水平坐标变化的animate，
//鼠标离开之后，把underline消失，给当前li增加per_current类

var c_num = $('.person_nav').children('ul').children('.per_current').index();
console.log('c_num: '+c_num);
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

//鼠标经过enter_pic，enter显示出来
$('.enter_pic').hover(function() {
	$('.enter_p2').show();
	$('.enter').show();
}, function() {
	//鼠标移出enter_pic和enter区域，enter隐藏 
	$('.enter_p2').hide();
	$('.enter').hide();
});

// 鼠标移入图片pic，pic_box显示
$('.pic').hover(function() {
	$('.pic_box').show();
}, function() {
	// 鼠标移出图片pic，pic_box隐藏
	$('.pic_box').hide();
});

// 鼠标点击del，取消信息del_infos淡入
$('.del').click(function(event) {
	$('.del_infos').fadeIn();
	// 鼠标点击del_2，取消信息del_infos淡出
	$('.del_2').click(function(event) {
		$('.del_infos').fadeOut();
		$('.enter_p2').fadeOut();
	});
	// 鼠标点击确定取消btn，取消信息del_infos淡出，订单信息orders_info淡出
	$('.btn').click(function(event) {
		$('.del_infos').fadeOut();
		$('.orders_info').fadeOut();
		$('.order_t').hide();
		$('.order_no').fadeIn();
	});
});
