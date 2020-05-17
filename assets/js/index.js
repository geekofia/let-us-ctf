$('.more').click(function () {
    $(this).toggleClass("fa-angle-down fa-angle-up");
    $(this).parent().parent().siblings(".chall-wrapper").toggle();
});