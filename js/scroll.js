$(document).ready(function() {
// Fixed position Left Menu when scrolling
$(window).scroll(function(){
  $("#menu_items").css({
    "top": Math.max(0,50-$(this).scrollTop()),
    "position": "fixed"
  }
  );
});

// Left side SPY when scrolling
$(window).scroll(function(){
  var pageY = pageYOffset;
  console.log(pageY);
  if (pageY > 100 && pageY < 225 ) {
  // $('#0').removeClass('active');
  $('#tag_1').addClass('active');
}else{
  $('#tag_1').removeClass('active');
}

if (pageY > 225 && pageY < 338) {
  $('#tag_2').addClass('active');
}else{
  $('#tag_2').removeClass('active');
}

if (pageY > 338 && pageY < 450) {
  $('#tag_3').addClass('active');
}else{
  $('#tag_3').removeClass('active');
}

if (pageY > 450 && pageY < 560) {
  $('#tag_4').addClass('active');
}else{
  $('#tag_4').removeClass('active');
}

if (pageY > 560 && pageY < 670) {
  $('#tag_5').addClass('active');
}else{
  $('#tag_5').removeClass('active');
}

if (pageY > 670 && pageY < 780) {
  $('#tag_6').addClass('active');
}else{
  $('#tag_6').removeClass('active');
}

if (pageY > 780 && pageY < 890) {
  $('#tag_7').addClass('active');
}else{
  $('#tag_7').removeClass('active');
}

if (pageY > 890 && pageY < 1005) {
  $('#tag_8').addClass('active');
}else{
  $('#tag_8').removeClass('active');
}

if (pageY > 1005 && pageY < 1115) {
  $('#tag_9').addClass('active');
}else{
  $('#tag_9').removeClass('active');
}

if (pageY > 1115 && pageY < 1225) {
  $('#tag_10').addClass('active');
}else{
  $('#tag_10').removeClass('active');
}

if (pageY > 1225 && pageY < 1335) {
  $('#tag_11').addClass('active');
}else{
  $('#tag_11').removeClass('active');
}

if (pageY > 1335 && pageY < 1445) {
  $('#tag_12').addClass('active');
}else{
  $('#tag_12').removeClass('active');
}

if (pageY > 1445 && pageY < 1560) {
  $('#tag_13').addClass('active');
}else{
  $('#tag_13').removeClass('active');
}

if (pageY > 1560 && pageY < 1670) {
  $('#tag_14').addClass('active');
}else{
  $('#tag_14').removeClass('active');
}
});

$("#tag_1").bind("click", function() {
  $('body').animate({
    scrollTop: $('.TossadeMar').offset().top
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_2").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Begur').offset().top
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_3").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Palamós').offset().top
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_4").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.SantFeliudeGuíxols').offset().top-50
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_5").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".Lescala").offset().top-50
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_6").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".Llafranc").offset().top-100
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_7").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".LEstartit").offset().top-120
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_8").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".Llancà").offset().top-120
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_9").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".PlatjadAro").offset().top-140
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_10").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Roses').offset().top-200
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_11").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.LloretdeMar').offset().top-220
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_12").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Tamariu').offset().top-240
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_13").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Empuriabrava').offset().top-260
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_14").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Portbou').offset().top-260
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

});
