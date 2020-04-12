$(function () {
    $('ol li.a:not(:has(*.b:has([href])))').css("color","red");
})