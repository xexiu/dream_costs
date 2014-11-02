$(document).ready(function() {
  $(document).on('click', '.vote-up', function(e) {
    var count = 0;
    count++;
    $(this).text(count);
    e.preventDefault();
  });
  $(document).on('click', '.vote-down', function(e) {
    var count = 0;
    count--;
    $(this).text(count);
    e.preventDefault();
  });
});
