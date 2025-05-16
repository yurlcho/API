// 지금, 이 책
function prev() {
  $('.read_slider_sub:last').prependTo('.read_slider');
  $('.read_slider_sub').hide();
  $('.read_slider_sub:first').show();
}

function next() {
  $('.read_slider_sub:first').appendTo('.read_slider');
  $('.read_slider_sub').hide();
  $('.read_slider_sub:first').show();
}

$('.prev4').on('click', prev);
$('.next4').on('click', next);