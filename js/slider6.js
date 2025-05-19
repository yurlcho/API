// 카드 뉴스로 보는
function prev() {
  $('.cardimg:last').prependTo('.cardnews');
  $('.cardimg').hide();
  $('.cardimg:first').show();
}

function next() {
  $('.cardimg:first').appendTo('.cardnews');
  $('.cardimg').hide();
  $('.cardimg:first').show();
}

$('.prev6').on('click', prev);
$('.next6').on('click', next);