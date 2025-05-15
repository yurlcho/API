// 지금, 이 책
function prev() {
  $('.thisbook:last').prependTo('.thisbook_wrap');
  $('.thisbook').hide();
  $('.thisbook:first').show();
}

function next() {
  $('.thisbook:first').appendTo('.thisbook_wrap');
  $('.thisbook').hide();
  $('.thisbook:first').show();
}

$('.prev2').on('click', prev);
$('.next2').on('click', next);