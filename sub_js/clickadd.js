$('.wbbtn1').click(function () {
    $('.wtbook').fadeIn();
    $('.mabook').hide();
    $('.wbbtn1, .wbbtn2').removeClass('active');
    $(this).addClass('active');
});

$('.wbbtn2').click(function () {
    $('.mabook').fadeIn();
    $('.wtbook').hide();
    $('.wbbtn1, .wbbtn2').removeClass('active');
    $(this).addClass('active');
});
