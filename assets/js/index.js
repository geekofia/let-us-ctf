$('.more').click(function () {
    $(this).toggleClass("fa-angle-down fa-angle-up");
    $(this).parent().parent().siblings(".chall-wrapper").toggle();
});

$('.submit').click(function () {
    if ($(this).attr("flag") == a($(this).parent().siblings().find(".flag").val())) {
        $(this).parent().siblings().find(".flag").addClass("is-valid");
        $(this).toggle();
    } else {
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
});
