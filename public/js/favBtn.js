$(document).ready(function() {
  $('.fav-btn i').click(function(e){
    e.preventDefault();
    $(this).toggleClass('fa-heart-o fa-heart');
    // $(this).addClass('fa fa-heart fa-2x');
  });
});
