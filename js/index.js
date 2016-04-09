var delay = function() {
	$("#about").velocity("scroll", {
		duration: 1300,
		offset: -50,
		easing: "ease-in-out"
	});
};
$(window).load(function() {
	$(".loader").fadeOut(500);
	setTimeout(delay, 2300);
});

$('body').find('#about p').tweetHighlighted({
	node: '<span class="fa fa-twitter"></span>',
	popupArgs: 'width=600,height=600,toolbar=0,location=0',
	via: 'ltrademark'
});

$(function() {
	$(window).scroll(function() {
		$('#normal').height();
		$('#about').height();
		var top = $(window).scrollTop();

		if (top >= $('#normal').height() - 100) {
			$('.navigation-bar').css("top", "0");
		} else {
			$('.navigation-bar').css("top", "-20%");
		} //if-else
	}); //win func.
}); //ready func.

$(document).ready( function() {
	$('.menu-toggle-open').click(function() {
		$('body').css("overflow", "hidden");
		$('.mobile-menu').addClass("open");
		$('.menu-pane').addClass("open");
	});
	$('.menu-toggle-close, .work-anchor').click(function() {
		$('.mobile-menu').removeClass("open");
		$('.menu-pane').removeClass("open");
		$('body').css("overflow", "");
	});

	var hiddenSection = $('#more-links').height();
	$('#more-links').css("height", hiddenSection + "px").addClass('ex-toggle');
	$('.expand').click(function() {
		$('#more-links').toggleClass('ex-toggle');
	});
});

function countChar(val) {
	var limit = val.value.length;
	var count = 140 - limit;
	if (limit >= 140) {
		val.value = val.value.substring(0, 140);
	} else {
		$('.charLimit').text(count);
	}
	if (count <= 20) {
		$('.charLimit').css("color", "rgba(255, 0, 0, 0.7)");
	} else {
		$('.charLimit').css("color", "");
	}
};
$('#tweet-button').click(function(Tweet, inputTweet, str, replaced) {
	var inputTweet = $('#tweet-input').val();
	var str = inputTweet;
	var replaced = str.replace(/ /g, '+');
	var Tweet = $('#tweet-button').attr("href", "https://twitter.com/intent/tweet?text=" + replaced + "&via=ltrademark");
	var reply = new Array("enter your tweet, please?", "c'mon dude, please?", "i see someone's being difficult", "do what you want", "that's cool", "i can do this all day", "i'd ask twice but", "stahp", "just. type. something.", "these weren't as fun to type as I thought"),
		random = reply[Math.floor(Math.random() * reply.length)];
	if (str === "") {
		$('#tweet-button').removeAttr("href");
		$('#tweet-input').addClass('error').attr("placeholder", random);
		$('#tweet-input').is(":focus").css("");
	} else {
		$('#tweet-input').removeClass('error');
		return Tweet
	}
});

$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
		location.hostname == this.hostname) {

		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 800);
			return false;
		}
	}
});
