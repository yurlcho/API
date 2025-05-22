// var price_sum = 15930;
// $(".price_sum").append("<span>" + price_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원 </span>");

// 총 상품 금액
$(function(){
    $('.plus').click(function() {
    if ($(".price_value").val() > 100) {
    alert("100개 이상 구매가 불가한 상품입니다.");
    $(".price_value").val(10);
    } else {
    $(".price_value").val(parseInt($(".price_value").val()) + 1);
    let sum = parseInt($(".price_value").val() * price_sum);
    $(".price_sum").html("<span>" + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
    }
    });
    $('.minus').click(function () {
        if ($(".price_value").val() < 1) {
        alert("1개 이상 구매 가능합니다.");
        $(".price_value").val(2);
        }
        $(".price_value").val(parseInt($(".price_value").val()) - 1);
        let sum = parseInt($(".price_value").val() * price_sum);
        $(".price_sum").html("<span>" + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
        });
});