$(document).ready(function() {
  console.log('######### Welcome to Costa Brava Beaches!! #########');
  $(window).scroll(function(){
    $("#menu_items").css({
      "top": Math.max(0,50-$(this).scrollTop()),
      "position": "fixed"
    });
    var pageY = pageYOffset;
    // console.log(pageY);
    if (pageY > 615 && pageY < 760 ) {
      $('#tag_1').addClass('active');
    }else{
      $('#tag_1').removeClass('active');
    }
    if (pageY > 760 && pageY < 950) {
      $('#tag_2').addClass('active');
    }else{
      $('#tag_2').removeClass('active');
    }
    if (pageY > 950 && pageY < 1140) {
      $('#tag_3').addClass('active');
    }else{
      $('#tag_3').removeClass('active');
    }
    if (pageY > 1140 && pageY < 1295) {
      $('#tag_4').addClass('active');
    }else{
      $('#tag_4').removeClass('active');
    }
    if (pageY > 1295 && pageY < 1485) {
      $('#tag_5').addClass('active');
    }else{
      $('#tag_5').removeClass('active');
    }
  });

  $(document).on('click', '#tag_1', function() {
    $('body').animate({
      scrollTop: $('.Whattosee').offset().top
    }, 1000);
    return false;
  });

  $(document).on('click', '#tag_2', function() {
    $('body').animate({
      scrollTop: $('.Whattodo').offset().top
    }, 1000);
    return false;
  });

  $(document).on('click', '#tag_3', function() {
    $('body').animate({
      scrollTop: $('.Activities').offset().top
    }, 1000);
    return false;
  });

  $(document).on('click', '#tag_4', function() {
    $('body').animate({
      scrollTop: $('.Restaurants').offset().top
    }, 1000);
    return false;
  });

  $(document).on('click', '#tag_5', function() {
    $('body').animate({
      scrollTop: $('.Nightlife').offset().top
    }, 1000);
    return false;
  });

});

