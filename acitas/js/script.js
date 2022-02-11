jQuery(document).ready(function ($) {
	

	$('.sol-wrap-item-moar').on('click', function() {
		if ($(this).prev().hasClass('open')) {
			$(this).prev().removeClass('open');
			$(this).removeClass('opens');
			$(this).children('b').text('Подробнее');
		} else {
			$(this).prev().addClass('open');
			$(this).addClass('opens');
			$(this).children('b').text('Свернуть');
		}
	});











	$('.burger').on('click', function() {
		$(this).toggleClass('b-active');
		$('.mob-header-bot').slideToggle(200);
	});
	$('.overlay').on('click', function() {
		$('.popup').fadeOut(300);
		$('.overlay').fadeOut(300);
	});
	$('.call-callback').on('click', function() {
		$('.popup-callback').fadeIn(300);
		$('.overlay').fadeIn(300);
	});
	$('.close').on('click', function() {
		$('.popup').fadeOut(300);
		$('.overlay').fadeOut(300);
	});

	/* $(window).scroll(function() { 
		if ($(window).scrollTop() > 20) {
			$('.up-arr').fadeIn(100);
		} else {
			$('.up-arr').fadeOut(100);
		}
	 }); */

/* 	const links = document.querySelectorAll('a');

	if (links) {
		links.forEach((elem) => {
			if (elem.href.indexOf('#') != -1) {
				elem.classList.add('click');
			}
		});
	} */

	$(".click").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 50;
		$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
		return false;
	});



}); //end