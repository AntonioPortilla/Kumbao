$(function(){
	$('#Kslider').sabecarousel();

	/*animate.css*/
	var variable	= 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
		historia	= 'animated jello',
		roboRight	= 'animated tada',
		roboLeft	= 'animated bounceInLeft',
		TV			= 'animated zoomIn',
		kumbao		= 'animated bounce';

	$('.jumbotron h1').on('mouseover', function() {
		$(this).addClass(historia).one(variable, function(){
			$(this).removeClass(historia);
		});
	});

	$('.robotic img').on('mouseover', function() {
		$(this).addClass(roboRight).one(variable, function(){
			$(this).removeClass(roboRight);
		});
	});

	$('.tv h4').on('mouseover', function() {
		$(this).addClass(TV).one(variable, function(){
			$(this).removeClass(TV);
		});
	});

});

