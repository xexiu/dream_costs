$(document).ready(function(){

$('.openRegister').click(function(e){
   e.stopPropagation();
 $('.register').css({
  'display':'block'
 });
 $('.register').animate({
  'margin-right':'0',
 }, 'slow');
});

$(document).click(function(e){
    $('.register').animate({
    'margin-right':'-250',
 }, 'slow');
});
});
