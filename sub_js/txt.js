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
    $.get("./text/review7.txt", function (data) {
        $(".reviewtxt").html(data);
    });
    $.get("./text/rvsub1.txt", function (data) {
        $(".rv_sub1").html(data);
    });
    $.get("./text/rvsub2.txt", function (data) {
        $(".rv_sub2").html(data);
    });
    $.get("./text/rvsub3.txt", function (data) {
        $(".rv_sub3").html(data);
    });
    $.get("./text/rvsub4.txt", function (data) {
        $(".rv_sub4").html(data);
    });
    $.get("./text/rvsub5.txt", function (data) {
        $(".rv_sub5").html(data);
    });
    $.get("./text/table1.txt", function (data) {
        $(".dvtextbox1").html(data);
    });
    $.get("./text/table2.txt", function (data) {
        $(".dvtextbox2").html(data);
    });
});