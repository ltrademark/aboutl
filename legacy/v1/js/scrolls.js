
function header_stick() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#header').addClass('fix-head');
        $('#header').animate ({
            position: "fixed",
            top: "0px"
        }, 1000, function() {
        });
        return false;
    } else {
        $('#header').removeClass('fix-head');
    }
}

$(function () {
    $(window).scroll(header_stick);
    header_stick();
});