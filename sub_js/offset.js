$(document).ready(function () {
    $(".dtbtn > div").click(function () {
        var index = $(this).index();
        var section = ['.dtsub_wrap', '.reviewwrap', '.dv_wrap'];
        var target = section[index];
        var section = $(target);

        if (section.length) {
            var offset = section.offset().top;
            $("html, body").animate({ scrollTop: offset }, 500);
        }
    })
})