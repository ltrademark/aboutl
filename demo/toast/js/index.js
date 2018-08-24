console.log("%cMADE WITH LOVE BY\n################################################################################################\n################################################################################################\n##                                                                                            ##\n##                                                                                            ##\n##                                                                                            ##\n##                                                                                            ##\n##         ###    ########## ######    #######    ####      ###  #######    ##    ###         ##\n##         ###    ########## #######   ########   ####     ####  ########   ##   ###          ##\n##         ###        ##     ##   ###  ##   ####  #####    ####  ###  ####  ##   ##           ##\n##         ###        ##     ##   ###  ##   ####  #####    ####  ###  ####  ##   ##           ##\n##         ###        ##     ##   ###  ##    ###  #####    ####  ###   ###  ##  ###           ##\n##         ###        ##     ##   ###  ##     ### #####   #####  ###   ###  ## ###            ##\n##         ###        ##     ##   ###  ##     ### #####   ## ##  ###   ###  ## ##             ##\n##         ###        ##     #######   ##     ### ### ##  ## ##  ########   #####             ##\n##         ###        ##     ######    ##     ### ### ##  ## ##  #######    ######            ##\n##         ###        ##     ## ###    ##     ### ### ## ##  ##  ### ###    ### ###           ##\n##         ###        ##     ##  ###   ##     ##  ### ## ##  ##  ###  ###   ##  ###           ##\n##         ###        ##     ##   ##   ##    ###  ###  ####  ##  ###  ###   ##   ###          ##\n##         #######    ##     ##   ###  #########  ###  ####  ##  ###   ###  ##   ###          ##\n##         #######    ##     ##    ##  ########   ###  ###   ##  ###    ##  ##    ###         ##\n##         #######    ##     ##    ### ######     ###  ###   ##  ###    ### ##    ###         ##\n##                                                                                            ##\n##                                                                                            ##\n##                                                                                            ##\n##                                                                                            ##\n################################################################################################\n################################################################################################", "color: #afd33d; font-weight: bold;");
google.maps.event.addDomListener(window, 'load', init);
var map;

function init() {
	var mapOptions = {
		center: new google.maps.LatLng(36.8717875, -76.29043819999998),
		zoom: 16,
		zoomControl: false,
		disableDoubleClickZoom: true,
		mapTypeControl: false,
		scaleControl: false,
		scrollwheel: false,
		panControl: false,
		streetViewControl: false,
		draggable: false,
		styles: [{
			"featureType": "all",
			"elementType": "geometry",
			"stylers": [{
				"color": "#ED7B45"
			}]
		}, {
			"featureType": "all",
			"elementType": "labels.text.fill",
			"stylers": [{
				"gamma": 0.01
			}, {
				"lightness": 20
			}]
		}, {
			"featureType": "all",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"saturation": -31
			}, {
				"lightness": -33
			}, {
				"weight": 2
			}, {
				"gamma": 0.9
			}]
		}, {
			"featureType": "all",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "administrative",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [{
				"lightness": 30
			}, {
				"saturation": 30
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"saturation": 20
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [{
				"lightness": 20
			}, {
				"saturation": -20
			}]
		}, {
			"featureType": "road",
			"elementType": "all",
			"stylers": [{
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [{
				"lightness": 25
			}, {
				"saturation": -30
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry.stroke",
			"stylers": [{
				"saturation": "42"
			}, {
				"lightness": "52"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [{
				"lightness": "34"
			}, {
				"weight": "0.81"
			}]
		}, {
			"featureType": "transit",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "water",
			"elementType": "all",
			"stylers": [{
				"lightness": -20
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [{
				"lightness": "67"
			}]
		}, {
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [{
				"lightness": "-6"
			}, {
				"visibility": "off"
			}]
		}],
		overviewMapControl: true,
		overviewMapControlOptions: {
			opened: true,
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	}
	var mapElement = document.getElementById('toast-map');
	var map = new google.maps.Map(mapElement, mapOptions);
	var locations = [
		['Toast', 'undefined', 'undefined', 'undefined', 'undefined', 36.8717875, -76.29043819999998, 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/396624/toastpin_round.png']
	];
	for (i = 0; i < locations.length; i++) {
		if (locations[i][1] == 'undefined') {
			description = '';
		} else {
			description = locations[i][1];
		}
		if (locations[i][2] == 'undefined') {
			telephone = '';
		} else {
			telephone = locations[i][2];
		}
		if (locations[i][3] == 'undefined') {
			email = '';
		} else {
			email = locations[i][3];
		}
		if (locations[i][4] == 'undefined') {
			web = '';
		} else {
			web = locations[i][4];
		}
		if (locations[i][7] == 'undefined') {
			markericon = '';
		} else {
			markericon = locations[i][7];
		}
		marker = new google.maps.Marker({
			icon: markericon,
			position: new google.maps.LatLng(locations[i][5], locations[i][6]),
			map: map,
			title: locations[i][0],
			desc: description,
			tel: telephone,
			email: email,
			web: web
		});
		link = '';
	}
}

$(document).ready( function(){
	$('.mobile-menu-toggle').click(function(){
		$(this).toggleClass('open');
		$(this).parent().toggleClass('collapsed');
		$('body').toggleClass('mobile-menu-open');
	});
	$('.navigation-list a').click(function(){
		var mobileMenu = $('.mobile-menu-toggle');
		$(mobileMenu).removeClass('open');
		$(mobileMenu).parent().addClass('collapsed');
		$('body').removeClass('mobile-menu-open');
	});
});

$('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 900, "easeInOutCubic");
			return false;
		}
	}
});