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

// 鼠标移入pic_t的img，pic_b内容隐藏，enter内容淡入 
$('.pic_t').mouseenter(function(event) {
	$(this).children('.enter').stop().fadeIn(100);
	$(this).siblings('.pic_b').stop().hide();
	return false;
});
// 鼠标移出enter的enter_t，enter内容隐藏，pic_b内容淡入
$('.enter_t').mouseleave(function(event) {
	$(this).parent().stop().fadeOut(100);
	$(this).parent().parent().siblings('.pic_b').stop().fadeIn(100);
});