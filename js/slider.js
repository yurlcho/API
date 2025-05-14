function prev() {
  $('.Lef_sliderSub:last').prependTo('.Lef_slider');
  $('.Lef_sliderSub').hide();
  $('.Lef_sliderSub:first').show();
}

function next() {
  $('.Lef_sliderSub:first').appendTo('.Lef_slider');
  $('.Lef_sliderSub').hide();
  $('.Lef_sliderSub:first').show();
}

$('.prev').on('click', prev);
$('.next').on('click', next);