console.clear();
AOS.init({
	offset: -50,
  duration: 650,
  easing: [0.4, 0.0, 0.2, 1],
	delay: 350,
	disable: window.innerWidth < 786
});
$(window).scroll(function(){
	var height = Math.round($('.hero').height());
	var top = Math.round($(window).scrollTop());
	if(top != 0) {
		$('.hero').find('.main-content').addClass('fade');
	} else {
		$('.hero').find('.main-content').removeClass('fade');
		$('body').velocity("stop");
	}
	// if (top > 10 && top < 100) {
	// 	console.log('bing!');
	// 	$('.about').velocity('scroll', {
	// 		duration: 650,
	// 		offset: 0,
	// 		easing:  [0.4, 0.0, 0.2, 1]
	// 	});
	// 	$('.about').velocity('stop');
	// } else if (top === (height - 20)) {
	// 	$(document).velocity('scroll', {
	// 		duration: 650,
	// 		offset: 0,
	// 		easing:  [0.4, 0.0, 0.2, 1]
	// 	});
	// }
	console.log(top);
});

$('.ltm-emblem').on('click', function(){
		$('body').velocity('scroll', {
			duration: 650,
			offset: 0,
			easing:  [0.4, 0.0, 0.2, 1]
		});
});