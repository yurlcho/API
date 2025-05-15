// 지금, 이 책
function prev() {
  $('.thisbook2:last').prependTo('.thisbook_wrap2');
  $('.thisbook2').hide();
  $('.thisbook2:first').show();
}

function next() {
  $('.thisbook2:first').appendTo('.thisbook_wrap2');
  $('.thisbook2').hide();
  $('.thisbook2:first').show();
}

$('.prev3').on('click', prev);
$('.next3').on('click', next);