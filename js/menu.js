$(function(){
    $('.list_1>li').mouseenter(function(){
        $(this).children('.list_sub1').stop().slideDown();
    }).mouseleave(function(){
        $('.list_sub1').stop().slideUp();
    });
});