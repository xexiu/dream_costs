$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.buttonScroll').fadeIn();
		} else {
			$('.buttonScroll').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.buttonScroll').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});
