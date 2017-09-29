console.clear();
AOS.init({
	offset: -50,
  duration: 650,
  easing: [0.4, 0.0, 0.2, 1],
	delay: 350,
	disable: window.innerWidth < 786
});
var zi9yoyw179vy9j;
(function(d, t) {
	var s = d.createElement(t), options = {
		'userName':'ltrademark',
		'formHash':'zi9yoyw179vy9j',
		'autoResize':true,
		'height':'1100',
		'async':true,
		'host':'wufoo.com',
		'header':'hide',
		'ssl':true
	};
	s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
	s.onload = s.onreadystatechange = function() {
		var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
		try { zi9yoyw179vy9j = new WufooForm();zi9yoyw179vy9j.initialize(options);zi9yoyw179vy9j.display(); } catch (e) {}
	};
	var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');

$(window).scroll(function(){
	var height = Math.round($('.hero').height());
	var top = Math.round($(window).scrollTop());
	if(top != 0) {
		$('.hero').find('.main-content').addClass('fade');
	} else {
		$('.hero').find('.main-content').removeClass('fade');
		$('body').velocity("stop");
	}
});
$('#messageForm').on('click', function(){
	$('.about').css('opacity', '0');
	$('.message-form').addClass('open');
});
$('.dismiss-form').on('click', function(){
	$('.about').css('opacity', '1');
	$('.message-form').removeClass('open');
});