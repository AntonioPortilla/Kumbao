$(function(){
	jQuery('#Kslider').sabecarousel();
});

/*animate.css*/
var variable	= 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
	historia	= 'animated jello',
	roboRight	= 'animated bounceInRight',
	roboLeft	= 'animated bounceInLeft',
	TV			= 'animated zoomIn',
	kumbao		= 'animated bounce';

$('.jumbotron h1').on('mouseover', function() {
	$(this).addClass(historia).one(variable, function(){
		$(this).removeClass(historia);
	});
});

$('.robotic h3').eq(0).on('mouseover', function() {
	$(this).addClass(roboRight).one(variable, function(){
		$(this).removeClass(roboRight);
	});
});

$('.robotic h3').eq(1).on('mouseover', function() {
	$(this).addClass(roboLeft).one(variable, function(){
		$(this).removeClass(roboLeft);
	});
});

$('.tv h4').on('mouseover', function() {
	$(this).addClass(TV).one(variable, function(){
		$(this).removeClass(TV);
	});
});

$('.genius h3').on('mouseover', function() {
	$(this).addClass(TV).one(variable, function(){
		$(this).removeClass(TV);
	});
});
