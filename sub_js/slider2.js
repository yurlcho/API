function prev() {
  $('.fb_wrap:last').prependTo('.fb_slider');
  $('.fb_wrap').hide();
  $('.fb_wrap:first').show();
}

function next() {
  $('.fb_wrap:first').appendTo('.fb_slider');
  $('.fb_wrap').hide();
  $('.fb_wrap:first').show();
}

$('.prev_sub2').on('click', prev);
$('.next_sub2').on('click', next);