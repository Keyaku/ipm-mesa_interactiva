console.log($("window"));

$.fn.followTo = function(pos) {
    var $window = $(window);

    $window.scroll(function(e) {
        if ($window.scrollTop() > pos) {
            $(this).css({
                position: 'absolute',
                top: pos
            });
        } else {
            $(this).css({
                position: 'fixed',
                top: 0
            });
        }
    });
};
