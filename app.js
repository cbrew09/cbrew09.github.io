//navbar toggle

$('.navbar').hide();


$('.menu-btn').click(function(){
  $('.navbar').slideToggle(300);
});

//Scroll to Top button

jQuery(document).ready(function() {

  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});
