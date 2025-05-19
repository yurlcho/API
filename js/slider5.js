// 예스24 유튜브
function prev() {
  $('.mov_mid:last').prependTo('.mov_midwrap');
  $('.mov_mid').hide();
  $('.mov_mid:first').show();
}

function next() {
  $('.mov_mid:first').appendTo('.mov_midwrap');
  $('.mov_mid').hide();
  $('.mov_mid:first').show();
}

$('.prev5').on('click', prev);
$('.next5').on('click', next);