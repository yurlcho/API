var currentScrollTop = 0;
$(window).scroll(function () {
    currentScrollTop = $(window).scrollTop();
    if (currentScrollTop > 9300) {
        $(".review").addClass("adc_color");
        $(".bookdt").removeClass("adc_color");
    } else {
        $(".review").removeClass("adc_color");
        $(".bookdt").addClass("adc_color");
    }
    if (currentScrollTop > 11300) {
        $(".deliver").addClass("adc_color");
        $(".bookdt").removeClass("adc_color");
        $(".review").removeClass("adc_color");
    } else {
        $(".deliver").removeClass("adc_color");
    }
})
