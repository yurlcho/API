$(function () {
    $('.ta_list>li').mouseenter(function () {
        $('.ta_sub').stop().hide();
        $(this).find('.ta_sub').stop().show();
        $('.ta').removeClass('full');
        $(this).addClass('full');
    });

    $('.ta_list>li').mouseleave(function(){
        $(this).find('.ta_sub').stop();
        $(this).find('.ta').removeClass('full');
    });
});