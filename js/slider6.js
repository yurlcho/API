// 카드 뉴스로 보는
function prev() {
  $('.cardimg:last').prependTo('.cardnews');
  $('.cardnews').css('margin-left', '-350px');
  $('.cardnews').stop().animate({ marginLeft: 0 }, 800);
}

function next() {
  $('.cardnews').stop().animate({ marginLeft: '-350px' }, 800, function () {
    $('.cardimg:first').appendTo('.cardnews');
    $('.cardnews').css({ marginLeft: 0 });
  });
}

setInterval(next, 2500);

$('.prev6').click(prev);
$('.next6').click(next);

