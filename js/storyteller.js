$(document).ready(function() {
  sizer();
  $("body").fitVids();
})

$(window).resize(function() { sizer(); })

function sizer() {
  if ($($(".container")[0]).outerHeight() < $(window).height()) {
    var h = $(window).height();
    h -= $($(".container")[0]).outerHeight();
    h -= $("footer").outerHeight();
    h -= 25;

    if (h < 0) h = 50;

    $("footer").css("margin-top", h)
  }
}