$(document).ready(function(){

$('.openRegister').click(function(e){
 $('.register').css({
	'display':'block'
 });
 $('.register').animate({
 	'margin-right':'+=250',
 }, 'slow');

 e.stopPropagation();
});

$(document).click(function(e){
  $(this).css({
	'display':'none'
  });
e.stopPropagation();
});

});



