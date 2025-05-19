// 오늘의 책
function prev() {
  $('.Cen_book:last').prependTo('.Cen_bookwrap');
  $('.Cen_book').hide();
  $('.Cen_book:first').show();
}

function next() {
  $('.Cen_book:first').appendTo('.Cen_bookwrap');
  $('.Cen_book').hide();
  $('.Cen_book:first').show();
}

$('.prev7').on('click', prev);
$('.next7').on('click', next);