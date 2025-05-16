// 섹션3_광고
function prev() {
  $('.AD_3sub:last').prependTo('.AD_3');
  $('.AD_3').css('margin-left','-238px');
  $('.AD_3').stop().animate({marginLeft:0},800);
}

function next() {
  $('.AD_3').stop().animate({marginLeft:'-238px'},800,function(){
    $('.AD_3sub:first').appendTo('.AD_3');
    $('.AD_3').css({marginLeft:0});
  });
}

setInterval(next,3000);