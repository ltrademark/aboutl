
function header_stick() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#header').addClass('fix-head');
    } else {
        $('#header').removeClass('fix-head');
    }
}

$(function () {
    $(window).scroll(header_stick);
    header_stick();
});