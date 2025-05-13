$(function(){
    $('.list_1>li').mouseenter(function(){
        $(this).children('.list_sub1').stop().slideDown();
    }).mouseleave(function(){
        $('.list_sub1').stop().slideUp();
    });
});

$(function(){
    $('.cate_wrap>li').hover(function(){
    $('.ct_sub').stop().hide();
    $(this).find('.ct_sub').stop().show();
},function(){
    $('.ct_sub').stop();
    });
});
