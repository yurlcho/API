$(function () {
    $.get("./text/cover.txt", function (data) {
        $(".cover").html(data);
    });
    $.get("./text/writer.txt", function (data) {
        $(".writertxt").html(data);
    });
    $.get("./text/writer.txt", function (data) {
        $(".writertxt").html(data);
    });
    $.get("./text/inbook.txt", function (data) {
        $(".inbook").html(data);
    });
    $.get("./text/pbreview.txt", function (data) {
        $(".pb_review").html(data);
    });
});