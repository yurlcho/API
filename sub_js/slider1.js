// 함께 산 책
function prev() {
  if ($('.wtbook').is(':visible')) {
    $('.wtbook_sub:last').prependTo('.wtbook');
    $('.wtbook_sub').hide();
    $('.wtbook_sub:first').show();
  } else if ($('.mabook').is(':visible')) {
    $('.mabook_sub:last').prependTo('.mabook');
    $('.mabook_sub').hide();
    $('.mabook_sub:first').show();
  }
}

function next() {
  if ($('.wtbook').is(':visible')) {
    $('.wtbook_sub:first').appendTo('.wtbook');
    $('.wtbook_sub').hide();
    $('.wtbook_sub:first').show();
  } else if ($('.mabook').is(':visible')) {
    $('.mabook_sub:first').appendTo('.mabook');
    $('.mabook_sub').hide();
    $('.mabook_sub:first').show();
  }
}

$('.prev_sub1').on('click', prev);
$('.next_sub1').on('click', next);

$('.mabook').hide(); // 처음 페이지 로드 시 숨김
$('.wtbook_sub').hide();
$('.wtbook_sub:first').show();